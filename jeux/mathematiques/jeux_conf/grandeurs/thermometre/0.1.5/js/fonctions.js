
/************************************************/

///// AFFICHAGE /////

/************************************************/

/* Réglages pour l'accueil */

/*typActivite="typInteractive";
typExercice="typEcrire";
typNombre="typNombre";*/

/* Mouvement de la colonne */

function movTemp() {
	height = (temp * coefHeight) + (30 * coefHeight) + 10;
	$('#colonne').css("height", height+"px");
}

heightTherm = 700;

function traceTherm(tHeight) {

	coefHeight = tHeight / 70;

	for (var i = 0; i < 70; i++) {
		var decal = ((i*coefHeight)-i)-1;
		$('#grad1Box').append('<div class="grad1" style="transform:translate(0, '+decal+'px);"></div>');
	}

	for (var i = 0; i < 15; i++) {
		var decal = ((i*(10*coefHeight)/2)-(i*2))-2;
		$('#grad5Box').append('<div class="grad5" style="transform:translate(0, '+decal+'px);"></div>');
	}

	for (var i = 0; i < 8; i++) {
		var decal = ((i*10*coefHeight)-(i*2)-2);
		$('#grad10Box').append('<div class="grad10" style="transform:translate(0, '+decal+'px);"></div>');
	}

	for (var i = 0; i < 8; i++) {
		var decal = (i*10*coefHeight)-(i*38)-10;
		var chif = (i*10)-30;
		$('#chifBoxL').append('<div class="chifBox" style="transform:translate(0, '+decal+'px)"><div class="chif">'+chif+'</div></div>');
		$('#chifBoxR').append('<div class="chifBox" style="transform:translate(0, '+decal+'px)"><div class="chif">'+chif+'</div></div>');
	}
}
//traceTherm(heightTherm);

function defHeight() {
	//elmnt = document.getElementById("page");
	//heightContent = elmnt.clientHeight;
	heightContent = $("#page").height();
	if (heightContent>=900) {
		heightTherm = 700;
		$('#thermometreBord').css("height", "810px");
		$('#thermometre').css("height", "710px");
		$('#colonneBox, #tube').css("height", "720px");
		$('#colonne').css("height", "510px");
		$('#chaud').css("height", "430px");
		$('#froid').css({"height":"360px", "top":"430px"});
		$('#coulPlusMoins').css("top", "258px");
	}
	else if (heightContent<900 && heightContent>=700) {
		heightTherm = 600;
		$('#thermometreBord').css("height", "710px");
		$('#thermometre').css("height", "610px");
		$('#colonneBox, #tube').css("height", "620px");
		$('#colonne').css("height", "410px");
		$('#chaud').css("height", "374px");
		$('#froid').css({"height":"316px", "top":"374px"});
		$('#coulPlusMoins').css("top", "200px");
	}
	else if (heightContent<700) {
		heightTherm = 500;
		$('#thermometreBord').css("height", "610px");
		$('#thermometre').css("height", "510px");
		$('#colonneBox, #tube').css("height", "520px");
		$('#colonne').css("height", "310px");
		$('#chaud').css("height", "317px");
		$('#froid').css({"height":"273px", "top":"317px"});
		$('#coulPlusMoins').css("top", "143px");
	}
	$('#grad1Box, #grad5Box, #grad10Box, #chifBoxL, #chifBoxR').html("");
	traceTherm(heightTherm);

	temp = $("#digTemp").val();
	movTemp();
}
//defHeight();

window.onresize = defHeight;

/* Affichage des éléments de l'interface */

function affichage() {

	window.onload = defHeight();

	/* Type d'activité' */

	if (typActivite=="typInteractive") { // debug

		$('#alertT').css({'display':'inline-block'});

		$("#optExercices, #digPropTemp, #digMercTemp, #btVerifier, #succesBox").hide();
		$("#digTemp, .slidBox").show();

		/*$("#checkMercure, #checkDigital").prop({"checked":true, "disabled":false});
		$("label[for='checkMercure']").removeClass('labelDisabled');
		$("label[for='checkDigital']").removeClass('labelDisabled');*/

		$("#checkMercure, #checkDigital").prop({"checked":true}).show();
		$("label[for='checkMercure']").show();
		$("label[for='checkDigital']").show();
	}
	else if (typActivite=="typExercices") {

		$('#alertT').css({'display':'none'});

		$("#digPropTemp, #digMercTemp").removeClass("incorrect");
		$("#digPropTemp, #digMercTemp").removeClass("correct");

		$("#digTemp, .slidBox").hide();
		
		$("#optExercices, #btVerifier").show();

		/*$("#checkMercure, #checkDigital").prop({"checked":true, "disabled":true});
		$("label[for='checkMercure']").addClass('labelDisabled');
		$("label[for='checkDigital']").addClass('labelDisabled');*/

		$("#checkMercure, #checkDigital").prop({"checked":true}).hide();
		$("label[for='checkMercure']").hide();
		$("label[for='checkDigital']").hide();

		if (typExercice=="typEcrire") {
			$("#digMercTemp").hide();
			$("#digPropTemp").show();

			$("#digPropTemp").val("");

			if ('ontouchstart' in window == false) {
				$("#digPropTemp").focus();
			}
		}
		else if (typExercice=="typMercure") {
			$("#digPropTemp").hide();
			$("#digMercTemp").show();
		}
	}

	/* Curseur pour le drag */

	if (typActivite=="typInteractive" || (typActivite=="typExercices" && typExercice=="typMercure")) {
		$('#thermometre').css("cursor","row-resize");
	}
	else {
		$('#thermometre').css("cursor","initial");
	}
}	