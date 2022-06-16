
/************************************************/

///// DRAG & DROP /////

/************************************************/

tbSelect = [];
tbSelectM = [];
tbSelectC = [];
tbSelectD = [];
tbSelectU = [];
dropOk = false;
original = true;
nbBox = nbClon = valCompo = valCompoM = valCompoC = valCompoD = valCompoU = 0;
nbDist = 1;

$("#dropC").selectable({
	filter: ".boxC",
	start: function() {
		$('.box').removeClass('ui-selected');
	},
	stop: function() {
		tbSelect = [];
		$(".ui-selected", this).each(function() {
			tbSelect.push($(this).attr("id"));
		});
	}
});

$("#dropD").selectable({
	filter: ".boxD",
	start: function() {
		$('.box').removeClass('ui-selected');
	},
	stop: function() {
		tbSelect = [];
		$(".ui-selected", this).each(function() {
			tbSelect.push($(this).attr("id"));
		});
	}
});

$("#dropU").selectable({
	filter: ".boxU",
	start: function() {
		$('.box').removeClass('ui-selected');
	},
	stop: function() {
		tbSelect = [];
		$(".ui-selected", this).each(function() {
			tbSelect.push($(this).attr("id"));
		});
	}
});

$(".draggable").draggable(
{
	opacity: 0.7,
	helper : "clone",
	revert: "invalid",
	zIndex: 5,

	start: function(event, ui)
	{
		original = true;

		if (typActivite=="Exercices" && typExercice=="Composer") {
			$("#digBox").removeClass("incorrect");
			dejaVerifExo1 = false;
		}

		actionExt = true;
	},

	stop: function(event, ui)
	{
		original = false;
		actionExt = false;
	}
});

$(".droppable").droppable(
{
		
	accept: ".draggable, .box",
	drop: function(event, ui)
	{

		if (event.target.id=="dropC") {
			platoDest = "platoC";
			if ($(ui.helper).attr("plato")=="C") {
				dropOk = true;
			}
			else {
				dropOk = false;
				alert("Place le bloc dans la colonne correspondante.");
			}
		}
		else if (event.target.id=="dropD") {
			platoDest = "platoD";
			if ($(ui.helper).attr("plato")=="D") {
				dropOk = true;
			}
			else {
				dropOk = false;
				alert("Place le bloc dans la colonne correspondante.");
			}
		}
		else if (event.target.id=="dropU") {
			platoDest = "platoU";
			if ($(ui.helper).attr("plato")=="U") {
				dropOk = true;
			}
			else {
				dropOk = false;
				alert("Place le bloc dans la colonne correspondante.");
			}
		}

		if(original && dropOk) {

			resetBox();
			
			for (var i = 0; i < nbDist; i++) {

				ui.helper.removeClass('ui-draggable-dragging')
				
				newObj = $(ui.helper).clone();

				if (platoDest=="platoU") {
					newObjWidth = $(ui.helper).width() + 1;
					newObjHeight = 0;
					valCompoU += Number($(ui.helper).attr("value"));
				}
				else if (platoDest=="platoD") {
					newObjWidth = 0;
					newObjHeight = $(ui.helper).height() + 1;
					valCompoD += Number($(ui.helper).attr("value"));
				}
				else if (platoDest=="platoC") {
					newObjWidth = $(ui.helper).width()/10;
					newObjHeight = $(ui.helper).height()/10;
					valCompoC += Number($(ui.helper).attr("value"));
				}				

				newObj.attr({"id":"box"+nbBox})
				.removeClass("draggable")
				.addClass("box box"+nbBox+" ui-selectee ui-selected")
				.css({"opacity":"1"})
				.css({"z-index":1})
				.css("left", +((ui.helper.offset().left - $(this).offset().left) + (i*newObjWidth))+"px")
				.css("top", +((ui.helper.offset().top - $(this).offset().top) + (i*newObjHeight))+"px");

				makeObj(newObj);
				
				$(this).append(newObj);

				if (newObj.hasClass('boxC')) {
					tbSelectC.push($(newObj).attr("id"));
				}
				else if (newObj.hasClass('boxD')) {
					tbSelectD.push($(newObj).attr("id"));
				}
				else if (newObj.hasClass('boxU')) {
					tbSelectU.push($(newObj).attr("id"));
				}
				
				tbSelect.push($(newObj).attr("id"));

				nbBox ++;

				valCompo += Number($(ui.helper).attr("value"));

			}

			pass10U();
			pass10D();
			pass10C();
			limit();
			
			$("#digVal").html(valCompo);
		}
	}
});

function pass10U() {
	if (platoDest=="platoU" && valCompoU>=base) {		
		for (var i = tbSelectU.length-1; i >= tbSelectU.length-base; i--) {
			valCompoU -= $("."+tbSelectU[i]).attr("value");
			$("."+tbSelectU[i]).addClass('ui-selectee ui-selected pass10U').attr('value', 0);
			$("."+tbSelectU[i]).animate({"left": ((event.clientX - $("#dropU").offset().left) - ((tbSelectU.length-base)*$(".boxU").width()) + ($(".boxU").width() * i))});
			$("."+tbSelectU[i]).animate({"top": (event.clientY - $("#dropU").offset().top)});
			$("."+tbSelectU[i]).animate({'opacity':.3});			
			$("."+tbSelectU[i]).draggable({disabled:true}).css('cursor', 'default');
		}
		var index = tbSelectU.length-base;
		tbSelectU.splice(index , base);
		valCompoD += 10;
		newDiz = $('#distD').clone();
		newDiz.attr({"id":"box"+nbBox})
		.removeClass("draggable")
		.addClass("box box"+nbBox+" ui-selectee ui-selected trans1D")
		.css({"position":"absolute", "opacity":"1", "z-index":1})
		.css("left", +(event.clientX - $("#dropU").offset().left) +"px")
		.css("top", +(event.clientY - $("#dropU").offset().top + $(".boxU").outerHeight()) +"px");
		makeObj(newDiz);
		tbSelectD.push(newDiz.attr("id"));
		$("#dropU").append(newDiz);
		nbBox ++;
		valCompo = valCompoM + valCompoC + valCompoD + valCompoU;
		$("#digVal").html(valCompo);
	}
}

function pass10D() {
	if (platoDest=="platoD" && valCompoD>=base*10) {
		$('.trans1D').each(function(){
			$(this).appendTo('#dropD');
			$('.pass10U').fadeOut(300, function () {
				$(this).remove();base
			});
		});
		for (var i = tbSelectD.length-1; i >= tbSelectD.length-base; i--) {
			valCompoD -= $("."+tbSelectD[i]).attr("value");
			$("."+tbSelectD[i]).addClass('ui-selectee ui-selected pass10D').attr('value', 0);
			$("."+tbSelectD[i]).animate({"left": ((event.clientX - $("#dropD").offset().left))});
			$("."+tbSelectD[i]).animate({"top": (event.clientY - $("#dropD").offset().top) - ((tbSelectD.length-base)*$(".boxU").height()) + ($(".boxD").height()) * i});
			$("."+tbSelectD[i]).animate({'opacity':.3});			
			$("."+tbSelectD[i]).draggable({disabled:true}).css('cursor', 'default');
		}
		var index = tbSelectD.length-base;
		tbSelectD.splice(index , base);
		valCompoC += 100;
		newCent = $('#distC').clone();
		newCent.attr({"id":"box"+nbBox})
		.removeClass("draggable")
		.addClass("box box"+nbBox+" ui-selectee ui-selected trans1C")
		.css({"position":"absolute", "opacity":"1", "z-index":1})
		.css("left", +(event.clientX - $("#dropD").offset().left - $(".boxD").outerWidth()) +"px")
		.css("top", +(event.clientY - $("#dropD").offset().top) +"px");
		makeObj(newCent);
		tbSelectC.push(newCent.attr("id"));
		$("#dropD").append(newCent);
		nbBox ++;
		valCompo = valCompoM + valCompoC + valCompoD + valCompoU;
		$("#digVal").html(valCompo);
	}
}

function pass10C() {
	if (platoDest=="platoC" && valCompoC>=base*100) {
		$('.trans1C').each(function(){
			$(this).appendTo('#dropC');
			$('.pass10D').fadeOut(300, function () {
				$(this).remove();
			});
		});
		for (var i = tbSelectC.length-1; i >= tbSelectC.length-base; i--) {
			valCompoC -= $("."+tbSelectC[i]).attr("value");
			$("."+tbSelectC[i]).addClass('ui-selectee ui-selected pass10C').attr('value', 0);
			$("."+tbSelectC[i]).animate({"left": (event.clientX - $("#dropC").offset().left) - ((tbSelectC.length-base)*$(".boxD").width()) + ($(".boxC").width()) * i});
			$("."+tbSelectC[i]).animate({"top": (event.clientY - $("#dropC").offset().top)/* - ((tbSelectC.length-10)*$(".boxD").height()) + ($(".boxC").height()) * i*/});
			$("."+tbSelectC[i]).animate({'opacity':.3});			
			$("."+tbSelectC[i]).draggable({disabled:true}).css('cursor', 'default');
		}
		var index = tbSelectC.length-base;
		tbSelectC.splice(index , base);
		valCompoM += 1000;
		valCompo = valCompoM + valCompoC + valCompoD + valCompoU;
		$("#digVal").html(valCompo);
		$("#masqDist").show();
		$("#limitBox").show('clip');
	}
}

function limit() {
	if (valCompo>=base*100) {
		$("#masqDist").show();
		$("#limitBox").show('clip');
	}
}

function makeObj(t) {

	$(t).mousedown(function(event){
		if (!$(this).hasClass("ui-selected")) {
			resetBox(this);
			tbSelect.push($(this).attr("id"));
		}
	});
	
	$(t).draggable({
		start: function()
		{
			if (typActivite=="Exercices" && typExercice=="Composer") {
				$("#digBox").removeClass("incorrect");
				dejaVerifExo1 = false;
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
			actionExt = false;

			if(!dropOk)
			{
				delObjt();

				if ($(this).hasClass('trans1D')) {
					$('.pass10U').fadeOut(300, function () {
						$(this).remove();
					});
				}
				else if ($(this).hasClass('trans1C')) {
					$('.pass10D').fadeOut(300, function () {
						$(this).remove();
					});
				}
			}

			else if ($(this).hasClass('trans1D')) {
				$('.pass10U').fadeOut(300, function () {
					$(this).remove();
				});
				$(this)
				.removeClass('trans1D')
				.appendTo('#dropD')
				.css("left", +(ui.helper.offset().left - $("#dropC").offset().left)+"px")
				.css("top", +(ui.helper.offset().top - $("#dropC").offset().top)+"px");
				pass10D();
			}

			else if ($(this).hasClass('trans1C')) {
				$('.pass10D').fadeOut(300, function () {
					$(this).remove();
				});
				$(this)
				.removeClass('trans1C')
				.appendTo('#dropC')
				.css("left", +(ui.helper.offset().left - $("#depoCompo").offset().left + $("#dropC").width())+"px")
				.css("top", +(ui.helper.offset().top - $("#dropC").offset().top)+"px");

			}
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

function delObjt() {
	$(".ui-selected").each(function() {
		if ($(this).hasClass("boxU") && !$(this).hasClass('pass10U')) {
			valCompoU -= Number($(this).attr("value"));
			var index = tbSelectU.indexOf($(this).attr("id"));
			if(index !== -1) { tbSelectU.splice(index , 1); }
		}
		else if ($(this).hasClass("boxD") && !$(this).hasClass('pass10D'))  {
			valCompoD -= Number($(this).attr("value"));
			var index = tbSelectD.indexOf($(this).attr("id"));
			if(index !== -1) { tbSelectD.splice(index , 1); }
		}
		else if ($(this).hasClass("boxC") && !$(this).hasClass('pass10C'))  {
			valCompoC -= Number($(this).attr("value"));
			var index = tbSelectC.indexOf($(this).attr("id"));
			if(index !== -1) { tbSelectC.splice(index , 1); }
		}
		valCompo -= Number($(this).attr("value"));
		$("#digVal").html(valCompo);
		$(this).fadeOut(300, function () {
			$(this).remove();
		});
		$("#masqDist").hide();
	});
}

function resetBox(t) {
	$(".box").removeClass('ui-selected');
	tbSelect = [];
	$(t).addClass('ui-selected');
}

/* Corbeille */

$("#corb").click(function() {
	if ($('.box').hasClass('ui-selected')) {
		delObjt();
	}
	else {
		$(".box").fadeOut(300, function () {
			$(this).remove();
		});
		tbSelect = [];
		tbSelectC = [];
		tbSelectD = [];
		tbSelectU = [];
		valCompo = valCompoM = valCompoC = valCompoD = valCompoU = 0;
	}
	$("#digVal").html(valCompo);
});

/*  */

$("#btVider").click(function() {
	$(".box").each(function() {
		$(this).fadeOut(300, function () {
			$(this).remove();
		});
	});
	tbSelect = [];
	tbSelectC = [];
	tbSelectD = [];
	tbSelectU = [];
	valCompo = valCompoM = valCompoC = valCompoD = valCompoU = 0;
	$("#digVal").html(valCompo);
	$("#masqDist").hide();
	$("#limitBox").hide('clip');
});