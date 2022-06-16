
/************************************************/

///// DRAG & DROP /////

/************************************************/

dropOk = false;
original = true;
nbBox = 0;
nbDist = 1;

valCompo = 0;
valPreced = 0;

/* SELECT */

$("#depoCompo").selectable({
	filter: ".box"
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

		if (typExercice=="typComposer") {
			$("#affComposer").removeClass("incorrect");
			dejaVerifComposer = false;
		}

		if (typExercice=="typRendre") {
			$("#digCompoBox").removeClass("incorrect");
			dejaVerifRendre = false;
		}
		actionExt = true;
	}
});

$(".droppable").droppable(
{		
	accept: ".draggable",
	drop: function(event, ui)
	{
		dropOk = true;

		if(original)
		{
			resetBox();

			for (var i = 0; i < nbDist; i++) {

				ui.helper.removeClass('ui-draggable-dragging');

				newObj = $(ui.helper).clone();

				newObj.attr("id","box"+nbBox)
				.addClass("box box"+nbBox)
				.css({"opacity":"1"})
				.css({"z-index":1})
				.css("left", (ui.helper.offset().left - $(this).offset().left) + (i*30)+"px")
				.css("top", (ui.helper.offset().top - $(this).offset().top) + (i*30)+"px");
				makeObj(newObj);
				$(this).append(newObj);
				nbBox ++;
				valCompo += Number($(ui.helper).attr("data-val"));
			}

			if (valCompo<0) {
				valCompo = 0;
			}

			$("#affSomme").val(valCompo.toFixed(2).replace(".",",") + " €");
		}
	}
});

function makeObj(t) {

	$(t).mousedown(function(event){

		if (!$(this).hasClass("ui-selected")) {
			resetBox(this);
		}
	});
	
	$(t).draggable({
		start: function()
		{
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
		valCompo -= Number($(this).attr("data-val"));
		$("#affSomme").val(valCompo.toFixed(2).replace(".",",") + " €");
		$(this).fadeOut(300, function () {
			$(this).remove();
		});
	});
}