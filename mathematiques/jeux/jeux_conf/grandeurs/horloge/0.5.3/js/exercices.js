	
/************************************************/

///// EXERCICES /////

/************************************************/

$("#propSec").on('input change', function() {
	$("#propSec").removeClass("incorrect");
	$("#propSec").removeClass("correct");
	$(this).val($.trim($(this).val()).replace(/\s+/g,''));	
	dejaVerifSec = false;
});

$("#propMin").on('input change', function() {
	$("#propMin").removeClass("incorrect");
	$("#propMin").removeClass("correct");
	$(this).val($.trim($(this).val()).replace(/\s+/g,''));
	dejaVerifMin= false;
});

$("#propHre").on('input change', function() {
	$("#propHre").removeClass("incorrect");
	$("#propHre").removeClass("correct");
	$(this).val($.trim($(this).val()).replace(/\s+/g,''));
	dejaVerifHre = false;
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
	if (event.which == 13  && typActivite=="typExercices") {
		if (enterSuivant==true) {
			$("#btSuivant").click();
		}
		else {
			$("#btVerifier").click();
		}
	}
});

function generer() {

	dejaVerifHre = dejaVerifMin = dejaVerifSec = false;

	$("#propSec, #propMin, #propHre").val("");
	$("#propSec, #propMin, #propHre, #digAigHre, #digAigMin, #digAigSec").removeClass("incorrect");
	$("#propSec, #propMin, #propHre, #digAigHre, #digAigMin, #digAigSec").removeClass("correct");

	$("#succesBox").hide();
	enterSuivant=false;
	$("#btVerifier").show();

	/* Calcul des secondes */

	if (typMinutes=="rdMin1") {
		if (checkAigSec==true && checkDigSec==true) {
			nbSec = Math.floor(Math.random()*60);
		}
		else {
			nbSec = 0;
		}
		
	}	

	/* Calcul des minutes */

	if (typMinutes=="rdMin0") {
		nbMin = nbSec = 0;
	}
	else if (typMinutes=="rdMin30") {
		nbSec = 0;
		nbMin = 30;
	}
	else if (typMinutes=="rdMin15") {
		nbSec = 0;
		nbMin = 15;
	}
	else if (typMinutes=="rdMin45") {
		nbSec = 0;
		nbMin = 45;
	}
	else if (typMinutes=="rdMin5") {
		nbSec = 0;
		do {
			nbMin = Math.floor(Math.random()*12)*5;
		} while (nbMin == $('#digAigMin').text());
	}
	else if (typMinutes=="rdMin1") {
		do {
			nbMin = Math.floor(Math.random()*60);
		} while (nbMin == $('#digAigMin').text());
	}					

	/* Calcul des heures */
	
	if (typAmPm=="rdAm") {
		do {
			nbHre = Math.floor((Math.random()*12));
		} while (nbHre == $('#digAigHre').text());
	}
	else if (typAmPm=="rdPm") {
		do {
			nbHre = Math.floor((Math.random()*12)+12);
		} while (nbHre == $('#digAigHre').text());
	}
	else {
		do {
			nbHre = Math.floor(Math.random()*24);
		} while (nbHre == $('#digAigHre').text() || nbHre == parseInt($('#digAigHre').text())+12);
	}

	if (typExercice=="typEcrire") {

		coefRotMin = ((nbMin * 6) + ( (nbSec * 6) / 60 ));
		coefRotHr = (nbHre * 30) + ( (nbMin * 6) / 12 );

		degRot = 'rotate(' + nbSec * 6 + 'deg)';
		$('#aigSecBox').css({
			'-moz-transform': degRot,
			'-webkit-transform': degRot
		});

		degRotM = 'rotate(' + coefRotMin + 'deg)';
		$('#aigMinBox').css({
			'-moz-transform': degRotM,
			'-webkit-transform': degRotM
		});

		degRotH = 'rotate(' + coefRotHr + 'deg)';
		$('#aigHreBox').css({
			'-moz-transform': degRotH,
			'-webkit-transform': degRotH
		});
	}

	$("#digAigHre").text(minDeuxChiffres(nbHre));
	$("#digAigMin").text(minDeuxChiffres(nbMin));
	$("#digAigSec").text(minDeuxChiffres(nbSec));

	if (typExercice=="typAiguilles") {

		/* Placer les aiguilles sur une position différente de la précédente */

		do {
			newSec = Math.floor(Math.random()*60);
		} while (newSec==nbSec);			
		coefRotSec = newSec * 6;
		degRotS = 'rotate(' + coefRotSec + 'deg)';
		$('#aigSecBox').css({
			'-moz-transform': degRotS,
			'-webkit-transform': degRotS
		});
		$('#digSec').val(newSec);

		do {
			newMin = Math.floor(Math.random()*60);
		} while (newMin==nbMin);			
		coefRotMin = ((newMin * 6) + ( (newSec * 6) / 60 ));
		degRotM = 'rotate(' + coefRotMin + 'deg)';
		$('#aigMinBox').css({
			'-moz-transform': degRotM,
			'-webkit-transform': degRotM
		});
		$('#digMin').val(newMin);

		do {
			newHre = Math.floor(Math.random()*12);
		} while (newHre==nbHre);
		/* Ajuster digHre au AM/PM */
		if (parseInt($("#digAigHre").text())>=12) {
			newHre = newHre + 12;
		}
		coefRotHre = (newHre * 30) + ( (newMin * 6) / 12 );
		degRotH = 'rotate(' + coefRotHre + 'deg)';
		$('#aigHreBox').css({
			'-moz-transform': degRotH,
			'-webkit-transform': degRotH
		});
		$('#digHre').val(newHre);
	}
}

nbSuccesHre = nbSuccesMin = nbSuccesSec = 0;
/*nbVerif = */nbVerifHre = nbVerifMin = nbVerifSec = 0;
dejaVerifHre = dejaVerifMin = dejaVerifSec = false;

var dOn = new Date();
var dateOn = dOn.getFullYear() + "-" + ("0"+(dOn.getMonth()+1)).slice(-2) + "-" + ("0" + dOn.getDate()).slice(-2) + " " + ("0" + dOn.getHours()).slice(-2) + ":" + ("0" + dOn.getMinutes()).slice(-2) + ":" + ("0" + dOn.getSeconds()).slice(-2);

function verifier() {
	succesHre = succesMin = succesSec = false;
	enterSuivant = false;

	if (typExercice=="typEcrire") {

		if ($("#propHre").val()!="") {
			if ($("#propHre").val()==nbHre) {
				$("#propHre").removeClass("incorrect");
				$("#propHre").addClass("correct");
				succesHre = true;
				if (dejaVerifHre==false) {
					nbSuccesHre += 1;
					nbVerifHre += 1;
					dejaVerifHre = true;
				}
			} else {
				$("#propHre").removeClass("correct");
				$("#propHre").addClass("incorrect");
				succesHre = false;
				if (dejaVerifHre==false) {
					nbVerifHre += 1;
					dejaVerifHre = true;
				}
			}
		}

		if ($("#propMin").val()!="") {
			if ($("#propMin").val()==nbMin) {
				$("#propMin").removeClass("incorrect");
				$("#propMin").addClass("correct");
				succesMin = true;
				if (dejaVerifMin==false) {
					nbSuccesMin += 1;
					nbVerifMin += 1;
					dejaVerifMin = true;
				}
			} else {
				$("#propMin").removeClass("correct");
				$("#propMin").addClass("incorrect");
				succesMin = false;
				if (dejaVerifMin==false) {
					nbVerifMin += 1;
					dejaVerifMin = true;
				}
			}
		}

		if ($("#propSec").val()!="") {
			if ($("#propSec").val()==nbSec) {
				$("#propSec").removeClass("incorrect");
				$("#propSec").addClass("correct");
				succesSec = true;
				if (dejaVerifSec==false) {
					nbSuccesSec += 1;
					nbVerifSec += 1;
					dejaVerifSec = true;
				}
			} else {
				$("#propSec").removeClass("correct");
				$("#propSec").addClass("incorrect");
				succesSec = false;
				if (dejaVerifSec==false) {
					nbVerifSec += 1;
					dejaVerifSec = true;
				}
			}
		}
	}

	if (typExercice=="typAiguilles") {

		if ($("#digHre").val()==$("#digAigHre").text()) {
			$("#digAigHre").removeClass("incorrect");
			$("#digAigHre").addClass("correct");
			succesHre = true;
			if (dejaVerifHre==false) {
					nbSuccesHre += 1;
					nbVerifHre += 1;
					dejaVerifHre = true;
				}
		} else {
			$("#digAigHre").removeClass("correct");
			$("#digAigHre").addClass("incorrect");
			succesHre = false;
				if (dejaVerifHre==false) {
					nbVerifHre += 1;
					dejaVerifHre = true;
				}
		}

		if ($("#digMin").val()==$("#digAigMin").text()) {
			$("#digAigMin").removeClass("incorrect");
			$("#digAigMin").addClass("correct");
			succesMin = true;
				if (dejaVerifMin==false) {
					nbSuccesMin += 1;
					nbVerifMin += 1;
					dejaVerifMin = true;
				}
		} else {
			$("#digAigMin").removeClass("correct");
			$("#digAigMin").addClass("incorrect");
			succesMin = false;
				if (dejaVerifMin==false) {
					nbVerifMin += 1;
					dejaVerifMin = true;
				}
		}

		if ($("#digSec").val()==$("#digAigSec").text()) {
			$("#digAigSec").removeClass("incorrect");
			$("#digAigSec").addClass("correct");
			succesSec = true;
				if (dejaVerifSec==false) {
					nbSuccesSec += 1;
					nbVerifSec += 1;
					dejaVerifSec = true;
				}
		} else {
			$("#digAigSec").removeClass("correct");
			$("#digAigSec").addClass("incorrect");
			succesSec = false;
				if (dejaVerifSec==false) {
					nbVerifSec += 1;
					dejaVerifSec = true;
				}
		}
	}

	/* Réponse succes */

	/* Vérifier si les champs sont utilisés ou pas */
	if (checkDigHre==true) {
		champHre = true;
		$("#succesHeure").text("Les heures: "+nbSuccesHre+" / "+nbVerifHre);
	} else {champHre = false;}

	if (checkDigMin==true) {
		champMin = true;
		$("#succesMinute").text("Les minutes: "+nbSuccesMin+" / "+nbVerifMin);
	} else {champMin = false;}

	if (checkDigSec==true) {
		champSec = true;
		$("#succesSeconde").text("Les secondes: "+nbSuccesSec+" / "+nbVerifSec);
	} else {champSec = false;}

	/* 7 possibilités

	1 0 0
	1 0 1
	1 1 0
	1 1 1
	0 1 1
	0 1 0
	0 0 1

	*/

	if (champHre==true && champMin==false && champSec==false) {
		if (succesHre==true) {
			$("#btVerifier").hide();
			affSucces();
			enterSuivant=true;
			totSucces = nbSuccesHre;
			totVerif = nbVerifHre;
		}
	}
	else if (champHre==true && champMin==false && champSec==true) {
		if (succesHre==true && succesSec==true) {
			$("#btVerifier").hide();
			affSucces();
			enterSuivant=true;
			totSucces = nbSuccesHre + nbSuccesSec;
			totVerif = nbVerifHre + nbVerifSec;
		}
	}
	else if (champHre==true && champMin==true && champSec==false) {
		if (succesHre==true && succesMin==true) {
			$("#btVerifier").hide();
			affSucces();
			enterSuivant=true;
			totSucces = nbSuccesHre + nbSuccesMin;
			totVerif = nbVerifHre + nbVerifMin;
		}
	}
	else if (champHre==true && champMin==true && champSec==true) {
		if (succesHre==true && succesMin==true && succesSec==true) {
			$("#btVerifier").hide();
			affSucces();
			enterSuivant=true;
			totSucces = nbSuccesHre + nbSuccesMin + nbSuccesSec;
			totVerif = nbVerifHre + nbVerifMin + nbVerifSec;
		}
	}
	else if (champHre==false && champMin==true && champSec==true) {
		if (succesMin==true && succesSec==true) {
			$("#btVerifier").hide();
			affSucces();
			enterSuivant=true;
			totSucces = nbSuccesMin + nbSuccesSec;
			totVerif = nbVerifMin + nbVerifSec;
		}
	}
	else if (champHre==false && champMin==true && champSec==false) {
		if (succesMin==true) {
			$("#btVerifier").hide();
			affSucces();
			enterSuivant=true;
			totSucces = nbSuccesMin;
			totVerif = nbVerifMin;
		}
	}
	else if (champHre==false && champMin==false && champSec==true) {
		if (succesSec==true) {
			$("#btVerifier").hide();
			affSucces();
			enterSuivant=true;
			totSucces = nbSuccesSec;
			totVerif = nbVerifSec;
		}
	}

	//nbVerif += 1;

	if (enterSuivant==true) {
		if (sessUser && eleveId!='0') {

			var d = new Date();
			var dateIn = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);

			/*totSucces = nbSuccesHre + nbSuccesMin + nbSuccesSec;
			totVerif = nbVerifHre + nbVerifMin + nbVerifSec;*/
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
					activiteResult : activiteResult/*,
					nbVerif : nbVerif*/
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

nbCoups = 0;

function affSucces() {
	$("#succesBox").show();

	if (sessUser) {

		bCoups = Math.floor(Math.random()*20);

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

		//nbSucces = nbSuccesHre + nbSuccesMin + nbSuccesSec;
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

/************************************************/

///// PROFIL /////

/************************************************/

$("#affPseudo").click(function(){
	$("#profilBox").toggle();
	affProfil();
});

/*lireStorageProfil();*/

function affProfil() {

	$("#profil").css({"background-color":colPage, "border-color":colBord}).addClass(""+mtfClass);
	$("#profilHd").css({"background-color":colObjet, "border-color":colBord});

	lireStorageProfil();

	if (succesHeure!="0/0") {
		var savHeure = succesHeure.split('/');
		var savSuccesHeure = parseInt(savHeure[0]);
		var nbSuccesHeureNew = nbSuccesHre + savSuccesHeure;
		var savVerifHeure = parseInt(savHeure[1]);
		var percentHeure = Math.floor((savSuccesHeure * 100) / savVerifHeure)+"%";
	}
	else {
		var percentHeure = "";
	}

	if (succesMinute!="0/0") {
		var savMinute = succesMinute.split('/');
		var savSuccesMinute = parseInt(savMinute[0]);
		var nbSuccesMinuteNew = nbSuccesMin + savSuccesMinute;
		var savVerifMinute = parseInt(savMinute[1]);
		var percentMinute = Math.floor((savSuccesMinute * 100) / savVerifMinute)+"%";
	}
	else {
		var percentMinute = "";
	}

	if (succesSeconde!="0/0") {
		var savSeconde = succesSeconde.split('/');
		var savSuccesSeconde = parseInt(savSeconde[0]);
		var nbSuccesSecondeNew = nbSuccesSec + savSuccesSeconde;
		var savVerifSeconde = parseInt(savSeconde[1]);
		var percentSeconde = Math.floor((savSuccesSeconde * 100) / savVerifSeconde)+"%";
	}
	else {
		var percentSeconde = "";
	}

	$("#graphHeure").text(percentHeure);
	$("#graphMinute").text(percentMinute);
	$("#graphSeconde").text(percentSeconde);

	$("#resultHeure").text("Les heures : "+succesHeure);
	$("#resultMinute").text("Les minutes : "+succesMinute);
	$("#resultSeconde").text("Les secondes : "+succesSeconde);

	$(".collectBox").css({"background-color":colObjet, "border-color":colBord});
	$(".emojiX").css({"background-color":"rgba(255, 255, 255, 0.3)"});

	$("#profilHd").text("Profil de "+pseudo);

	for (var i = 0; i < collectSmiley.length; i++) {
		if (tabSmiley.indexOf(collectSmiley[i])) {
			$("#emojiBox-"+collectSmiley[i]).html('<div class="emoji">&#'+collectSmiley[i]+'</div>');
		}
	}
	for (var i = 0; i < collectAlim.length; i++) {
		if (tabAlim.indexOf(collectAlim[i])) {
			$("#emojiBox-"+collectAlim[i]).html('<div class="emoji">&#'+collectAlim[i]+'</div>');
		}
	}
	for (var i = 0; i < collectAnimal.length; i++) {
		if (tabAnimal.indexOf(collectAnimal[i])) {
			$("#emojiBox-"+collectAnimal[i]).html('<div class="emoji">&#'+collectAnimal[i]+'</div>');
		}
	}

	nbSuccesHre = nbSuccesMin = nbSuccesSec = 0;
	nbVerifHre = nbVerifMin = nbVerifSec = 0;
	dejaVerifHre = dejaVerifMin = dejaVerifSec = false;
	$("#succesHeure").text("");
	$("#succesMinute").text("");
	$("#succesSeconde").text("");
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