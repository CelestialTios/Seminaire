
/************************************************/

///// EXERCICES /////

/************************************************/

//function exercices() {

$("#digPropTemp").on('input change', function() {
	$("#digPropTemp").removeClass("incorrect");
	$("#digPropTemp").removeClass("correct");
	$(this).val($.trim($(this).val()).replace(/\s+/g,''));
	dejaVerifTemp = false;
});

/* Type d'activité' */

$("#typInteractive").click(function(){
	typActivite=$(this).val();
	affichage();
});

$("#typExercices").click(function(){		
	typActivite=$(this).val();
	generer();
	affichage();
});

/* Options des exercices */

/* Type d'exercices */

$("#typEcrire").click(function()
{		
	typExercice=$(this).val();
	generer();
	affichage();
});

$("#typMercure").click(function()
{	
	typExercice=$(this).val();
	generer();
	affichage();
});

/* Type de nombre */

$("#rdPosNeg").prop("checked", true);

$("#rdPosNeg").click(function()
{
	typNombre=$(this).val();
	generer();
	affichage();
});

$("#rdPositif").click(function()
{
	typNombre=$(this).val();
	generer();
	affichage();
});

$("#rdNegatif").click(function()
{
	typNombre=$(this).val();
	generer();
	affichage();
});

/* Boutons */

$("#btVerifier").click(function()
{
	verifier();
});

$("#btSuivant").click(function()
{
	$("#succesBox").hide();
	$("#btVerifier").show();
	enterSuivant = false;
	generer();
	affichage();
});

/* Touche Enter du clavier */

enterSuivant = false;

$(document).keyup(function (event) {
	if (event.which == 13 && typActivite=="typExercices") {
		if (enterSuivant==true) {
			$("#btSuivant").click();
		}
		else {
			$("#btVerifier").click();
		}			
	}
});

/* Générer */

function generer() {

	/* Si on change d'exercice sur l'état "Suivant" */
	if (enterSuivant==true) {
		$("#btSuivant").click();
	}

	dejaVerifTemp = dejaVerifMerc = false;

	/* Calcul de la température */
	
	if (typNombre=="rdPosNeg") {
		do {
			temp = Math.floor((Math.random()*70));
		} while (temp == $('#digTemp').val());
		temp = temp -30;
	}
	else if (typNombre=="rdPositif") {
		do {
			temp = Math.floor((Math.random()*40));
		} while (temp == $('#digTemp').val());
	}
	else if (typNombre=="rdNegatif") {
		do {
			temp = Math.floor((Math.random()*30));
		} while (temp == $('#digTemp').val());
		temp = temp -30;
	}

	$("#digTemp").val(temp);
	movTemp();

	/* Calculer digMercTemp != temp */

	if (typExercice=="typMercure") {

		if (typNombre=="rdPosNeg") {
			do {
				tempDigMerc = Math.floor((Math.random()*70));
			} while (tempDigMerc == $('#digTemp').val());
			tempDigMerc = tempDigMerc -30;
		}
		else if (typNombre=="rdPositif") {
			do {
				tempDigMerc = Math.floor((Math.random()*40));
			} while (tempDigMerc == $('#digTemp').val());
		}
		else if (typNombre=="rdNegatif") {
			do {
				tempDigMerc = Math.floor((Math.random()*30));
			} while (tempDigMerc == $('#digTemp').val());
			tempDigMerc = tempDigMerc -30;
		}
		$("#digMercTemp").text(tempDigMerc);
	}
}

/* Véifier */

nbSuccesTemp = nbVerifTemp = nbSuccesMerc = nbVerifMerc = 0;

var dOn = new Date();
var dateOn = dOn.getFullYear() + "-" + ("0"+(dOn.getMonth()+1)).slice(-2) + "-" + ("0" + dOn.getDate()).slice(-2) + " " + ("0" + dOn.getHours()).slice(-2) + ":" + ("0" + dOn.getMinutes()).slice(-2) + ":" + ("0" + dOn.getSeconds()).slice(-2);

function verifier() {

	succesTemp = succesMerc = false;
	enterSuivant = false;

	if (typExercice=="typEcrire") {

		if ($("#digPropTemp").val()!="") {
			if ($("#digPropTemp").val()==temp) {
				$("#digPropTemp").removeClass("incorrect");
				$("#digPropTemp").addClass("correct");
				succesTemp = true;
				if (dejaVerifTemp==false) {
					nbSuccesTemp += 1;
					nbVerifTemp += 1;
					dejaVerifTemp = true;
				}
			}
			else {
				$("#digPropTemp").removeClass("correct");
				$("#digPropTemp").addClass("incorrect");
				succesTemp = false;
				if (dejaVerifTemp==false) {
					nbVerifTemp += 1;
					dejaVerifTemp = true;
				}
			}
			$("#affSuccesEcrire").show();
			$("#succesEcrire").text("Ecrire la température: "+nbSuccesTemp+" / "+nbVerifTemp);
		}
		else {
			alert("Complète le champ.")
		}
	}

	if (typExercice=="typMercure") {

		if ($("#digTemp").val()==$("#digMercTemp").text()) {
			$("#digMercTemp").removeClass("incorrect");
			$("#digMercTemp").addClass("correct");
			succesMerc = true;
			if (dejaVerifMerc==false) {
				nbSuccesMerc += 1;
				nbVerifMerc += 1;
				dejaVerifMerc = true;
			}
		}
		else {
			$("#digMercTemp").removeClass("correct");
			$("#digMercTemp").addClass("incorrect");
			succesMerc = false;
			if (dejaVerifMerc==false) {
				nbVerifMerc += 1;
				dejaVerifMerc = true;
			}
		}
		$("#affSuccesComposer").show();
		$("#succesComposer").text("Placer le mercure: "+nbSuccesMerc+" / "+nbVerifMerc);
	}

	/* Réponse succes */

	if (succesTemp==true || succesMerc==true) {
		$("#btVerifier").hide();
		affSucces();
		enterSuivant=true;

		if (sessUser && eleveId!='0') {

			var d = new Date();
			var dateIn = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);

			totSucces = nbSuccesTemp + nbSuccesMerc;
			totVerif = nbVerifTemp + nbVerifMerc;

			activiteResult = totSucces+'/'+totVerif;
			
			$.post(
				'inc/resultats-activite-ajax.php',
				{
					profId : profId,
					eleveId : eleveId,
					classeId : classeId,
					groupeId : groupeId,
					activiteId : activiteId,
					dateOn : dateOn,
					dateIn : dateIn,
					activiteResult : activiteResult,
					nbVerif : totVerif
				},
				function(data)
				{
					if(data!='')
					{
						$(".alert").remove();
						$("#plato").append('<div class="alert">'+data+'</div>');
						$(".alert").click(function() {
							$(this).hide();
						});
					}
				},
				'text'
			);
		}
		else {
			ecrireStorageprofil();
		}
	}
}

/* Ditribution des émoji */

var nbCoups = 0;

function affSucces() {
	$("#succesBox").show();

	if (sessUser) {

		nbCoups = Math.floor(Math.random()*20);

		var aleaSport = Math.floor(Math.random()*tbTabs[0][1].length);
		var aleaDessert = Math.floor(Math.random()*tbTabs[1][1].length);
		var aleaNature = Math.floor(Math.random()*tbTabs[2][1].length);
		var aleaFruit = Math.floor(Math.random()*tbTabs[3][1].length);
		var aleaFood = Math.floor(Math.random()*tbTabs[4][1].length);
		var aleaZik = Math.floor(Math.random()*tbTabs[5][1].length);
		var aleaJeu = Math.floor(Math.random()*tbTabs[6][1].length);
		var aleaAnimaux = Math.floor(Math.random()*tbTabs[7][1].length);
		var aleaSap = Math.floor(Math.random()*tbTabs[8][1].length);
		var aleaTransport = Math.floor(Math.random()*tbTabs[9][1].length);

		var niveau1 = 2;
		var niveau2 = 4;
		var niveau3 = 6;
		var niveau4 = 8;
		var niveau5 = 10;
		var niveau6 = 12;
		var niveau7 = 14;
		var niveau8 = 16;
		var niveau9 = 18;

		nbCoups += 1;

		if (nbCoups>20) {
			nbCoups = 1;
		}

		if (nbCoups<=niveau1) {
			emoji = tbTabs[0][1][aleaSport]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabSport';
		}
		else if (nbCoups>niveau1 && nbCoups<=niveau2) {
			emoji = tbTabs[1][1][aleaDessert]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabDessert';
		}
		else if (nbCoups>niveau2 && nbCoups<=niveau3) {
			emoji = tbTabs[2][1][aleaNature]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabNature';
		}
		else if (nbCoups>niveau3 && nbCoups<=niveau4) {
			emoji = tbTabs[3][1][aleaFruit]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabFruit';
		}
		else if (nbCoups>niveau4 && nbCoups<=niveau5) {
			emoji = tbTabs[4][1][aleaFood]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabFood';
		}
		else if (nbCoups>niveau5 && nbCoups<=niveau6) {
			emoji = tbTabs[5][1][aleaZik]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabZik';
		}
		else if (nbCoups>niveau6 && nbCoups<=niveau7) {
			emoji = tbTabs[6][1][aleaJeu]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabJeu';
		}
		else if (nbCoups>niveau7 && nbCoups<=niveau8) {
			emoji = tbTabs[7][1][aleaAnimaux]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabAnimaux';
		}
		else if (nbCoups>niveau8 && nbCoups<=niveau9) {
			emoji = tbTabs[8][1][aleaSap]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabSap';
		}
		else if (nbCoups>niveau9) {
			emoji = tbTabs[9][1][aleaTransport]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabTransport';
		}
		
		$.post(
			'inc/resultats-emojis-ajax.php',
			{
				profId : profId,
				eleveId : eleveId,
				listNom : listNom,
				emoji : emoji
			}/*,
			function(data)
			{
				if(data != 'invalid')
				{
					//$("#groupSelect").empty();
					$("#plato").append(data);
				}
				else
				{
					alert('ca marche pas')
				}
			},
			'text'*/
		);
	}
	else
	{
		var aleaSmiley = Math.floor(Math.random()*tabSmiley.length);
		var aleaAlim = Math.floor(Math.random()*tabAlim.length);
		var aleaAnimal = Math.floor(Math.random()*tabAnimal.length);

		var niveau1 = 3;
		var niveau2 = 5;

		nbSucces = nbSuccesMerc + nbSuccesTemp;
		nbCoups += 1;

		if (nbCoups>(niveau1+niveau2)) {
			nbCoups = 1;
		}

		if (nbCoups<=niveau1) {
			var emoji = tabSmiley[aleaSmiley]
			$("#smiley").html("&#"+emoji);
			if (collectSmiley.indexOf(emoji)==-1) {
				collectSmiley.push(emoji);
			}			
		}
		else if (nbCoups>niveau1 && nbCoups<=niveau2) {
			var emoji = tabAlim[aleaAlim]
			$("#smiley").html("&#"+emoji);
			if (collectAlim.indexOf(emoji)==-1) {
				collectAlim.push(emoji);
			}
		}
		else if (nbCoups>niveau2) {
			var emoji = tabAnimal[aleaAnimal]
			$("#smiley").html("&#"+emoji);
			if (collectAnimal.indexOf(emoji)==-1) {
				collectAnimal.push(emoji);
			}
		}
	}
}

/* Réinitialiser */

$("#rstProfil").click(function(){
	$("#alrtConf").toggle();
});

$("#btConf").click(function(){
	defautStorageProfil();
	$(this).parent().hide();
	initProfil();
	affProfil();
});

$("#btAnul").click(function(){
	$(this).parent().hide();
});
//}