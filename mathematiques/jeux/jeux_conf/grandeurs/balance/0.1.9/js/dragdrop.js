
/************************************************/

///// DRAG & DROP /////

/************************************************/

function balance(valRot, valY) {
	$("#colLev").css({"transform":"rotate("+valRot+"deg)", "transition":"transform "+vitesse+"s"});
	$("#platoG").css({"transform":"translateY("+valY+"px)", "transition":"transform "+vitesse+"s"});
	$("#platoD").css({"transform":"translateY("+-valY+"px)", "transition":"transform "+vitesse+"s"});
}

function calcVal() {

	if (valCompoG>=valCompoD) {
		valCompo = valCompoG - valCompoD;
		if (valCompo>=16) {
			valCompo = 16;
		}
		if (valCompo<=-16) {
			valCompo = -16;
		}				
		valRot = -valCompo;
		valY = valCompo * 5;
		vitesse = 20/valY;
	}
	else if (valCompoD>=valCompoG) {
		valCompo = valCompoD - valCompoG;
		if (valCompo>=16) {
			valCompo = 16;
		}
		if (valCompo<=-16) {
			valCompo = -16;
		}
		valRot = valCompo;
		valY = -valCompo * 5;
		vitesse = 20/-valY;
	}
	balance(valRot, valY);
}

/**/

dropOk = false;
original = true;
nbBox = 0;
nbDist = 1;

/* SELECT */

$("#balancesBox").selectable({
	filter: ".box",
});

$(".draggable").draggable(
{
	opacity: 0.7,
	helper : "clone",
	revert: "invalid",
	zIndex: 5,

	stop: function(event, ui)
	{
		original = false;
		actionExt = false;
	},

	start: function(event, ui)
	{
		original = true;
		actionExt = true;
	}
});

nbBox = 0;
valCompoG = 0;
valCompoD = 0;
valPreced = 0;
nbDist = 1;

$(".droppable").droppable(
{			
	accept: ".draggable",
	drop: function(event, ui)
	{

		dropOk = true;

		platoDest = event.target.id;

		if(original)
		{

			for (var i = 0; i < nbDist; i++) {

				ui.helper.removeClass('ui-draggable-dragging');

				newObj = $(ui.helper).clone();

				newObj.attr({"id":"box"+nbBox, "plato":platoDest})
				.addClass("box box"+nbBox)
				.css({"opacity":"1"})
				.css({"z-index":1})
				.css("left", (ui.helper.offset().left - $(this).offset().left) + (i*30)+"px")
				.css("top", (ui.helper.offset().top - $(this).offset().top)+"px");
				makeObj(newObj);

				masseAleaDrop = Math.floor(Math.random() * (nbMax - nbMin) + nbMin) + 1;
				if ($(ui.helper).attr("data-val")=="alea") {
					$(ui.helper).attr("data-val", masseAleaDrop);
					xAlea = Math.floor(Math.random() * (nbMax - nbMin) + nbMin) + 50 + "px";
					yAlea = Math.floor(Math.random() * (nbMax - nbMin) + nbMin) + 50 + "px";
					comptColMasse += 1;
					colAlea = tbColMasse[comptColMasse];
					if (comptColMasse==11) {
						comptColMasse = 0;
					}
					newObj.attr("data-val", masseAleaDrop);
					newObj.children().css({"width":xAlea, "height":yAlea, "background-color":colAlea});
				}
				if (platoDest=="platoG") {
					valCompoG += Number($(ui.helper).attr("data-val"));
				}
				else if (platoDest=="platoD") {
					valCompoD += Number($(ui.helper).attr("data-val"));
				}
				$(this).append(newObj);
				nbBox ++;					
			}
			if (valCompoG<0) {
				valCompoG = 0;
			}
			if (valCompoD<0) {
				valCompoD = 0;
			}
			calcVal();
			$("#affValG").html(valCompoG + " g");
			$("#affValD").html(valCompoD + " g");
		}

		if ('ontouchstart' in window == false) {
			$("#digEcrire").focus();
		}
	}
});

function makeObj(t) {

	$(t).mousedown(function(event){

		if (!$(this).hasClass("ui-selected")) {
			resetBox(this);
		}
		platoDest = $(this).attr("plato");
	});
	
	$(t).draggable({

		start: function()
		{

			if (platoDest=='platoG') {
				$("#platoG").insertAfter('#platoD');
			}
			else if (platoDest=='platoD') {
				$("#platoD").insertAfter('#platoG');
			}

			dropOk = false;
			if ($(this).hasClass("ui-selected")){
				selected = $(".ui-selected").each(function() {
					var el = $(this);
					el.data("offset", el.offset());
				});
			}
			else {
				selected = $([]);
				$(".box").removeClass("ui-selected");
			}
			offset = $(this).offset();
		},
		drag: function(event, ui) {
			var dt = ui.position.top - offset.top, dl = ui.position.left - offset.left;
			selected.not(this).each(function() {
				var el = $(this), off = el.data("offset");
				el.css({top: off.top + dt, left: off.left + dl});
			});
		},
		stop: function(event, ui)
		{
			if(!dropOk)
			{
				delObjt();
			}
			else if (platoDest!=$(this).attr('plato')) {
				$("#"+platoDest).append($(this));
				$(this).attr({"plato":platoDest})
				.css("left", ((event.pageX - $("#"+platoDest).offset().left) - (event.pageX - ui.offset.left))+"px")
				.css("top", ((event.pageY - $("#"+platoDest).offset().top) - (event.pageY - ui.offset.top))+"px");
				if (platoDest=="platoG") {
					valCompoD -= Number($(this).attr("data-val"));
					valCompoG += Number($(this).attr("data-val"));
				}
				else if (platoDest=="platoD") {
					valCompoG -= Number($(this).attr("data-val"));
					valCompoD += Number($(this).attr("data-val"));
				}				

				offsetRef = $(this).offset();
				var dt = ui.position.top - offsetRef.top, dl = ui.position.left - offsetRef.left;
				selected.not(this).each(function() {
					var el = $(this), off = el.data("offset");
					$("#"+platoDest).append(el);
					el.attr({"plato":platoDest});
					el.css({top: off.top + dt, left: off.left + dl});
					if (platoDest=="platoG") {
						valCompoD -= Number(el.attr("data-val"));
						valCompoG += Number(el.attr("data-val"));
					}
					else if (platoDest=="platoD") {
						valCompoG -= Number(el.attr("data-val"));
						valCompoD += Number(el.attr("data-val"));
					}
				});
			}

			calcVal();
			$("#affValG").html(valCompoG + " g");
			$("#affValD").html(valCompoD + " g");

			$(this).css("z-index", 1);
			actionExt = false;
		}
	});

	$(t).mouseover(function(){
		if (actionExt==false) {
			$(this).css("z-index", 5);
		}
	});

	$(t).mouseout(function(){
		$(this).css("z-index", 1);
	});
}

function resetBox(t) {
	$(".box").removeClass('ui-selected');
	$(t).addClass('ui-selected');
}

function delObjt() {
	$(".ui-selected").each(function() {
		if (platoDest=="platoG") {
			valCompoG -= Number($(this).attr("data-val"));
		}
		else if (platoDest=="platoD") {
			valCompoD -= Number($(this).attr("data-val"));
		}
		$(this).fadeOut(300, function () {
			$(this).remove();
		});
	});
}