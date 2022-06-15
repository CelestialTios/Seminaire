
/************************************************/

///// DRAG & DROP /////

/************************************************/

tbSelect = [];
dropOk = false;
original = true;
nbBox = nbClon = valCompo = anglRot = 0;
nbDist = 1;
$("#digVal").html(valCompo);

/* ZOOM */

function zoomSelect() {

	if (slctObjt=="Form") {
		zoom = 1;
		lignW = lignH = (60 * reduc)+5;
	}		
	else if (slctObjt=="Des") {
		zoom = 2;
		lignW = lignH = (zoom * 60 * reduc)+5;
	}
	else if (slctObjt=="Schem") {
		zoom = 2;
		lignW = (zoom * 80 * reduc)+5;
		lignH = (zoom * 40 * reduc)+5;
	}
	else if (slctObjt=="Dgts") {
		zoom = 3;
		lignW = lignH = (zoom * 60 * reduc)+5;
	}
	else if (slctObjt=="Nbr") {
		zoom = 2;
		lignW = lignH = (zoom * 60 * reduc)+5;
	}
}

/* SELECT */

$("#depoCompo").selectable({
	filter: ".box",
	cancel: "#digBox, #digEcrire, #propEcrire",
	stop: function() {
		tbSelect = [];
		$(".ui-selected", this).each(function() {
			tbSelect.push($(this).attr("id"));
		});
	}
});

/* DRAG */

$(".distObjt").draggable(
{
	opacity: 0.7,
	helper : "clone",
	revert: "invalid",
	zIndex: 5,
	snap: ".ligne",

	start: function(event, ui)
	{
		original = true;
		actionExt = true;
		if (ui.helper.hasClass('distSign')) {
			oldZoom = zoom;
			zoom = 1;
		}
		zoomObjt(ui.helper);
	},
	stop: function(event, ui)
	{
		original = false;
		actionExt = false;		
		if (ui.helper.hasClass('distSign')) {
			zoom = oldZoom;
		}
	}
});

function zoomObjt(t) {
	
	objtW = t.width();
	objtH = t.height();
	t.css({'width':zoom*objtW+4+'px', 'height':zoom*objtH+4+'px'});
	posFixW = Math.round((((zoom * objtW) - objtW)/2)*reduc);
	posFixH = Math.round((((zoom * objtH) - objtH)/2)*reduc);

	if (slctObjt=="Des") {
		if (reduc==.7) {
			t.children('.svgDes').css({'transform':'scale('+(zoom*reduc)+')', 'position':'absolute', 'left':(posFixW-3)+'px', 'top':(posFixH-3)+'px'});
		}
		else if (reduc==.8) {
			t.children('.svgDes').css({'transform':'scale('+(zoom*reduc)+')', 'position':'absolute', 'left':(posFixW-1)+'px', 'top':(posFixH-1)+'px'});
		}
		else {
			t.children('.svgDes').css({'transform':'scale('+zoom+')', 'position':'absolute', 'left':posFixW+'px', 'top':posFixH+'px'});
		}			
	}
	else if (slctObjt=="Schem") {
		if (reduc==.7) {
			t.children('.svgSchem').css({'transform':'scale('+(zoom*reduc)+')', 'position':'absolute', 'left':(posFixW-4)+'px', 'top':(posFixH-2)+'px'});
		}
		else if (reduc==.8) {
			t.children('.svgSchem').css({'transform':'scale('+(zoom*reduc)+')', 'position':'absolute', 'left':(posFixW-2)+'px', 'top':(posFixH-1)+'px'});
		}
		else {
			t.children('.svgSchem').css({'transform':'scale('+zoom+')', 'position':'absolute', 'left':posFixW+'px', 'top':posFixH+'px'});
		}
	}
	else if (slctObjt=="Dgts") {
		if (reduc!=1) {
			t.children('.dgtsBox').css({'transform':'scale('+(zoom*reduc)+')', 'position':'absolute', 'left':(posFixW+4)+'px', 'top':(posFixH+4)+'px'});
		}
		else {
			t.children('.dgtsBox').css({'transform':'scale('+zoom+')', 'position':'absolute', 'left':posFixW+'px', 'top':posFixH+'px'});
		}	
	}
	else if (slctObjt=="Nbr") {
		if (reduc==.7) {
			t.children('.svgNbr').css({'transform':'scale('+(zoom*reduc)+')', 'position':'absolute', 'left':(posFixW-3)+'px', 'top':(posFixH-3)+'px'});
			t.children('.nbrSvg').css({'font-size':'3.5em'});
		}
		else if (reduc==.8) {
			t.children('.svgNbr').css({'transform':'scale('+(zoom*reduc)+')', 'position':'absolute', 'left':(posFixW-1)+'px', 'top':(posFixH-1)+'px'});
			t.children('.nbrSvg').css({'font-size':'4.3em'});
		}
		else {
			t.children('.svgNbr').css({'transform':'scale('+zoom+')', 'position':'absolute', 'left':posFixW+'px', 'top':posFixH+'px'});
			t.children('.nbrSvg').css({'font-size':'6em'});
		}
	}
}

/* DROP */

$(".droppable").droppable(
{
		
	accept: ".distObjt, .box",
	drop: function(event, ui)
	{
		dropOk = true;

		if(original) {

			resetBox();
			
			for (var i = 0; i < nbDist; i++) {

				ui.helper.removeClass('ui-draggable-dragging')
				ui.helper.removeClass('distObjt');
				
				newObj = $(ui.helper).clone();
				newObjWidth = $(ui.helper).width()+1;
				
				newObjHeight = $(ui.helper).height();
				newObj.attr({"id":"box"+nbBox})
				.addClass("box box"+nbBox+" ui-selectee ui-selected")
				.css("left", +((ui.helper.offset().left - $(this).offset().left) + (i*newObjWidth))+"px")
				.css("top", +((ui.helper.offset().top - $(this).offset().top))+"px");
				makeObj(newObj);
				$(this).append(newObj);
				tbSelect.push($(newObj).attr("id"));
				valCompo += Number($(ui.helper).attr("value"));
				nbBox ++;
			}
			$("#digVal").html(valCompo);

			if (typExercice=="Composer") {
				$("#digComposer").removeClass("incorrect");
				dejaVerifComposer = false;
			}
		}
	}
});

function makeObj(t) {

	$(t).css({"opacity":"1", "z-index":1});

	$(t).mousedown(function(event){

		if (!$(this).hasClass("ui-selected")) {
			resetBox(this);
			tbSelect.push($(this).attr("id"));
		}

		if (tool=="toolGomme") {
			delObjt();
		}
		else if (tool=="toolPaint") {
			$(".ui-selected").each(function() {
				$(this).children('.svgForm, .svgDes, .svgNbr').css("fill", colObjt);
				$(this).children().children('.svgDgts').css("fill", colObjt);
				$(this).children().children().children('.svgDgts').css("fill", colObjt);
				$(this).children().children().css("stroke", colObjt);
			});
		}
		else if (tool=="toolAlignH") {
			var i = 0;
			var tempObj = $("#"+tbSelect[0]);
			$(".ui-selected").each(function() {
				$("#"+tbSelect[i]).not($("#"+tbSelect[0])).css("top", (tempObj.position().top)+"px");
				$("#"+tbSelect[i]).not($("#"+tbSelect[0])).css("left", (tempObj.position().left + tempObj.outerWidth()+1)+"px");
				i++;
				tempObj = $(this);
			});
		}
		else if (tool=="toolAlignV") {
			var i = 0;
			var tempObj = $("#"+tbSelect[0]);
			$(".ui-selected").each(function() {
				$("#"+tbSelect[i]).not($("#"+tbSelect[0])).css("top", (tempObj.position().top + tempObj.outerHeight()+1)+"px");
				$("#"+tbSelect[i]).not($("#"+tbSelect[0])).css("left", (tempObj.position().left)+"px");
				i++;
				tempObj = $(this);
			});
		}
		else if (tool=="toolRot") {
			anglRot += 90;
			$(".ui-selected").each(function() {
				$(this).css("transform", "rotate(+"+anglRot+"deg)");
			});
		}
		else if (tool=="toolCopy") {
			s = tbSelect.length;
			for (var i = 0; i < s; i++) {
				if (i==s) {
					tbSelect = [];
				}
				
				if ($("#"+tbSelect[i]).hasClass('ui-selected')) {
					var clone = $("#"+tbSelect[i]).clone();
					idThis = $("#"+tbSelect[i]).attr("id");
					clone.attr("id", idThis+"-"+nbClon);
					clone.removeClass(idThis).addClass(idThis+"-"+nbClon);
					nbClon ++;
					leftClon = $("#"+tbSelect[i]).position().left + $("#"+tbSelect[i]).width()+5;
					topClon = $("#"+tbSelect[i]).position().top + $("#"+tbSelect[i]).height()+5;
					clone.css({"left":leftClon, "top":topClon});
					makeObj(clone);
					clone.appendTo("#depoCompo");
					$("#"+tbSelect[i]).removeClass("ui-selected");
					tbSelect.push(clone.attr("id"));
					valCompo += Number(clone.attr("value"));
				}
			}
			tbSelect.splice(0, s);
			$("#digVal").html(valCompo);
		}
	});
	
	$(t).draggable({
		snap: ".ligne",
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

		if (tool=="toolGomme") {
			$(this).css("cursor", "url('./img/icon/pk1/gomme.png') 17 16, pointer");
		}
		else if (tool=="toolPaint") {
			$(this).css("cursor", "url('./img/icon/pk1/goute.png') 17 16, pointer");
		}
		else if (tool=="toolAlignH") {
			$(this).css("cursor", "url('./img/icon/pk1/alignH1.png') 17 16, pointer");
		}
		else if (tool=="toolAlignV") {
			$(this).css("cursor", "url('./img/icon/pk1/alignV1.png') 17 16, pointer");
		}
		else if (tool=="toolRot") {
			$(this).css("cursor", "url('./img/icon/pk1/rot.png') 17 16, pointer");
		}
		else if (tool=="toolCopy") {
			$(this).css("cursor", "url('./img/icon/pk1/copy.png') 17 16, pointer");
		}
		else {
			$(this).css("cursor", "move");
		}
	});

	$(t).mouseout(function(){
		$(this).css("z-index", 1);
	});
}

function delObjt() {

	$(".ui-selected").each(function() {
		valCompo -= Number($(this).attr("value"));
		$("#digVal").html(valCompo);
		$(this).fadeOut(300, function () {
			$(this).remove();
		});
	});
	
	if (typActivite=="Exercices" && typExercice=="Composer") {
		$("#digComposer").removeClass("incorrect");
		dejaVerifComposer = false;
	}
}

function resetBox(t) {
	$(".box").removeClass('ui-selected');
	tbSelect = [];
	$(t).addClass('ui-selected');
}

/* Corbeille */

$("#corb").click(function() {
	if ($('.box').hasClass('ui-selected')) {
		$(".ui-selected").each(function() {
			valCompo -= (Number($(this).attr("data-val")));
			$(this).fadeOut(300, function () {
				$(this).remove();
			});
		});
	}
	else {
		$(".box").fadeOut(300, function () {
			$(this).remove();
		});
		valCompo = 0;
	}
	$("#affVal").val(valCompo.toFixed(2).replace(".",",") + " €");
});