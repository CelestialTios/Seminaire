$(document).ready(function()
{
	/************************************************/

	///// OPTIONS /////

	/************************************************/

	$("#digHre, #digMin, #digSec").spinner();

	/* Réglages pour l'accueil */

	$("#digitProp, #digitAig, #propBtBox").hide(); // debug

	//$("#optExercices").hide();

	$(".slidBox").hide();

	/* Type d'activité' */

	$("#typInterne").click(function(){
		$(".slidBox").hide();
		typActivite="typInterne";
		affichage();
		clock();
		intervalClock = setInterval(clock, 1000);
	});

	$("#typInteractive").click(function(){
		$(".slidBox").show();
		typActivite="typInteractive";
		affichage();
		if (typeof intervalClock!='undefined') {
			clearInterval(intervalClock);
		}
	});

	$("#typExercices").click(function(){		
		typActivite="typExercices";
		generer();
		affichage();
		if (typeof intervalClock!='undefined') {
			clearInterval(intervalClock);
		}
	});	

	/* Options des exercices */

	/* Type d'exercices */

	typExercice="typEcrire";
	
	$("#typEcrire").click(function()
	{		
		typExercice="typEcrire";
		generer();
		affichage();
	});
	
	$("#typAiguilles").click(function()
	{	
		typExercice="typAiguilles";
		generer();
		affichage();
	});

	/* Type de minutes */

	$("#rdMin1").prop("checked", true);

	typMinutes = "rdMin1";
	
	$("#rdMin0").click(function()
	{
		typMinutes=$(this).val();
		generer();
		affichage();
	});
	
	$("#rdMin30").click(function()
	{
		typMinutes=$(this).val();
		generer();
		affichage();
	});
	
	$("#rdMin15").click(function()
	{
		typMinutes=$(this).val();
		generer();
		affichage();
	});
	
	$("#rdMin45").click(function()
	{
		typMinutes=$(this).val();
		generer();
		affichage();
	});
	
	$("#rdMin5").click(function()
	{
		typMinutes=$(this).val();
		generer();
		affichage();
	});
	
	$("#rdMin1").click(function()
	{
		typMinutes=$(this).val();
		generer();
		affichage();
	});

	/* Choix 24h Am Pm */
	
	$("#rdAmPm").click(function()
	{
		typAmPm=$(this).val();
		convertAmPm();
		if (typActivite=="typExercices") {
			generer();
		}
		affichage();		
	});

	$("#rdAm").click(function()
	{
		typAmPm=$(this).val();
		convertAmPm();
		if (typActivite=="typExercices") {
			generer();
		}	
		affichage();
	});
	
	$("#rdPm").click(function()
	{
		typAmPm=$(this).val();
		convertAmPm();
		if (typActivite=="typExercices") {
			generer();
		}
		affichage();
	});

	/* Apparence */

	$("#optApparence").hide();
	$("#btApparence").click(function()
	{
		$("#optApparence").toggle();
	});

	// Spectrum

	$("#colObjet").spectrum({
		showInput: true,
		showInitial: true,
		showPalette: true,
		cancelText: "Annuler",
		chooseText: "Choisir",
		containerClassName: "colPickCnt",
		replacerClassName: "colPick",
		palette: maPalette,
		preferredFormat: "hex",
		change: function (color) {
			$("#horloge, #digitalBox").css("background", color);
			colObjet = color.toHexString();
		},
		move: function (color) {
			$("#horloge, #digitalBox").css("background", color);
			colObjet = color.toHexString();
		}
	});

	$("#colBord").spectrum({
		showInput: true,
		showInitial: true,
		showPalette: true,
		cancelText: "Annuler",
		chooseText: "Choisir",
		containerClassName: "colPickCnt",
		replacerClassName: "colPick",
		palette: maPalette,
		preferredFormat: "hex",
		change: function (color) {
			$("#horlogeBord, #digitalBox, #motifPanel").css("border-color", color);
			colBord = color.toHexString();
		},
		move: function (color) {
			$("#horlogeBord, #digitalBox, #motifPanel").css("border-color", color);
			colBord = color.toHexString();
		}
	});

	$("#colPage").spectrum({
		showInput: true,
		showInitial: true,
		showPalette: true,
		cancelText: "Annuler",
		chooseText: "Choisir",
		containerClassName: "colPickCnt",
		replacerClassName: "colPick",
		palette: maPalette,
		preferredFormat: "hex",
		change: function (color) {
			$("#page, #motifPanel").css("background", color);
			colPage = color.toHexString();
		},
		move: function (color) {
			$("#page, #motifPanel").css("background", color);
			colPage = color.toHexString();
		}
	});

	$("#colHre").spectrum({
		showInput: true,
		showInitial: true,
		showPalette: true,
		cancelText: "Annuler",
		chooseText: "Choisir",
		containerClassName: "colPickCnt",
		replacerClassName: "colPick",
		palette: maPalette,
		preferredFoaigMinrmat: "hex",
		change: function (color) {
			$("#aigHre").css("background", color.toHexString());
			$("#digAigHre").css("border-color", color.toHexString());
			$(".chifHreAm, .chifHrePm, #digHre, #digAigHre").css("color", color.toHexString());
			colHre = color.toHexString();
		},
		move: function (color) {
			$("#aigHre").css("background", color.toHexString());
			$("#digAigHre").css("border-color", color.toHexString());
			$(".chifHreAm, .chifHrePm, #digHre, #digAigHre").css("color", color.toHexString());
			colHre = color.toHexString();
		}
	});

	$("#colMin").spectrum({
		showInput: true,
		showInitial: true,
		showPalette: true,
		cancelText: "Annuler",
		chooseText: "Choisir",
		containerClassName: "colPickCnt",
		replacerClassName: "colPick",
		palette: maPalette,
		preferredFormat: "hex",
		change: function (color) {
			$("#aigMin").css("background", color.toHexString());
			$("#digAigMin").css("border-color", color.toHexString());
			$(".chifMin, .chifMinNeg, #digMin, #digAigMin").css("color", color.toHexString());
			colMin = color.toHexString();
		},
		move: function (color) {
			$("#aigMin").css("background", color.toHexString());
			$("#digAigMin").css("border-color", color.toHexString());
			$(".chifMin, .chifMinNeg, #digMin, #digAigMin").css("color", color.toHexString());
			colMin = color.toHexString();
		}
	});

	$("#colSec").spectrum({
		showInput: true,
		showInitial: true,
		showPalette: true,
		cancelText: "Annuler",
		chooseText: "Choisir",
		containerClassName: "colPickCnt",
		replacerClassName: "colPick",
		palette: maPalette,
		preferredFormat: "hex",
		change: function (color) {
			$("#aigSec").css("background", color.toHexString());
			$("#digAigSec").css("border-color", color.toHexString());
			$("#digSec, #digAigSec").css("color", color.toHexString());
			colSec = color.toHexString();
		},
		move: function (color) {
			$("#aigSec").css("background", color.toHexString());
			$("#digAigSec").css("border-color", color.toHexString());
			$("#digSec, #digAigSec").css("color", color.toHexString());
			colSec = color.toHexString();
		}
	});

	/* Affichage des éléments de l'horloge */

	// Aiguilles

	$("#checkAigHre").change(function(){
		checkAigHre	= $("#checkAigHre").prop("checked");
		if (checkAigHre==true) {$("#aigHreBox").show();} else {$("#aigHreBox").hide();}
		affichage();
	});

	$("#checkAigMin").change(function(){
		checkAigMin	= $("#checkAigMin").prop("checked");
		if (checkAigMin==true) {$("#aigMinBox").show();} else {$("#aigMinBox").hide();}
		affichage();
	});

	$("#checkAigSec").change(function(){
		checkAigSec	= $("#checkAigSec").prop("checked");
		if (checkAigSec==true) {$("#aigSecBox").show();} else {$("#aigSecBox").hide();}
		affichage();
	});

	// Chiffres

	$("#checkChifHreAm").change(function(){
		checkChifHreAm	= $("#checkChifHreAm").prop("checked");	
		if (checkChifHreAm==true) {$("#chifHreAm").show();} else {$("#chifHreAm").hide();}		
	});

	$("#chifHrePm").hide();
	$("#checkChifHrePm").change(function(){
		checkChifHrePm	= $("#checkChifHrePm").prop("checked");	
		if (checkChifHrePm==true) {$("#chifHrePm").show();} else {$("#chifHrePm").hide();}		
	});

	$("#chifMinBox").hide();
	$("#checkChifMin").change(function(){
		checkChifMin	= $("#checkChifMin").prop("checked");
		if (checkChifMin==true) {$("#chifMinBox").show();$("#checkChifMinNeg").prop("disabled", false);} else {$("#chifMinBox").hide();$("#checkChifMinNeg").prop("disabled", true);}		
	});

	$("#chifMinNeg").hide();
	$("#checkChifMinNeg").change(function(){
		checkChifMinNeg	= $("#checkChifMinNeg").prop("checked");
		if (checkChifMinNeg==true) {$("#chifMinNeg").show();$("#chifMin").hide();} else {$("#chifMinNeg").hide();$("#chifMin").show();}	
	});

	// Graduations

	$("#gradHre").show();
	$("#checkGradHre").change(function(){
		checkGradHre = $("#checkGradHre").prop("checked");	
		if (checkGradHre==true) {$("#gradHre").show();} else {$("#gradHre").hide();}	
	});

	$("#gradMin").show();
	$("#checkGradMin").change(function(){
		checkGradMin = $("#checkGradMin").prop("checked");	
		if (checkGradMin==true) {$("#gradMin").show();} else {$("#gradMin").hide();}			
	});

	// Digital

	$("#checkDigHre").change(function(){
		checkDigHre	= $("#checkDigHre").prop("checked");
		if (checkDigHre==true) {$("#digHreBox, #propHre, #digAigHre, .sepDigit1").show();} else {$("#digHreBox, #propHre, #digAigHre, .sepDigit1").hide();}
		if (checkDigHre==false && checkDigMin==false  && checkDigSec==false) {
			$("#digitalBox").hide();
		} else {$("#digitalBox").show();}
		affichage();
	});

	$("#checkDigMin").change(function(){
		checkDigMin	= $("#checkDigMin").prop("checked");
		if (checkDigMin==true) {$("#digMinBox, #propMin, #digAigMin").show();} else {$("#digMinBox, #propMin, #digAigMin").hide();}
		if (checkDigHre==false && checkDigMin==false  && checkDigSec==false) {
			$("#digitalBox").hide();
		} else {$("#digitalBox").show();}
		affichage();
	});

	$("#checkDigSec").change(function(){
		checkDigSec	= $("#checkDigSec").prop("checked");
		if (checkDigSec==true) {$("#digSecBox, #propSec, #digAigSec, .sepDigit2").show();} else {$("#digSecBox, #propSec, #digAigSec, .sepDigit2").hide();/*$("#digSec").val(0);*/}
		if (checkDigHre==false && checkDigMin==false  && checkDigSec==false) {
			$("#digitalBox").hide();
		} else {$("#digitalBox").show();}
		affichage();
	});

	// Fractions

	$("#fracEqBox").hide();
	$("#checkFracEq").change(function(){
		checkFracEq	= $("#checkFracEq").prop("checked");	
		if (checkFracEq==true) {$("#fracEqBox").show();} else {$("#fracEqBox").hide();}	
	});

	$("#fracEdBox").hide();
	$("#checkFracEd").change(function(){
		checkFracEd	= $("#checkFracEd").prop("checked");	
		if (checkFracEd==true) {$("#fracEdBox").show();} else {$("#fracEdBox").hide();}	
	});

	$("#fracMqBox").hide();
	$("#checkFracMq").change(function(){
		checkFracMq	= $("#checkFracMq").prop("checked");	
		if (checkFracMq==true) {$("#fracMqBox").show();} else {$("#fracMqBox").hide();}	
	});

	/* Enregistrer options exercices*/

	$("#exoSavSuccesBox, #appSavSuccesBox").hide();
	$("#confDefStorEx, #confDefStorApp").hide();

	$("#btStorEx").click(function()
	{
		ecrireStorageExercices();
	});

	$("#btDefStorEx").click(function()
	{
		$("#confDefStorEx").show();
	});

	$("#btConfDefStorEx").click(function()
	{
		defautStorageExercices();
		$("#confDefStorEx").hide();
	});

	$("#btAnnulDefStorEx").click(function()
	{
		$("#confDefStorEx").hide();
	});

	/* Enregistrer apparence*/

	$("#btStorApp").click(function()
	{
		ecrireStorageApparence();
	});

	$("#btDefStorApp").click(function()
	{
		$("#confDefStorApp").show();
	});

	$("#btConfDefStorApp").click(function()
	{
		defautStorageApparence();
		$("#confDefStorApp").hide();
	});

	$("#btAnnulDefStorApp").click(function()
	{
		$("#confDefStorApp").hide();
	});

	apparenceHorloge();

	//setInterval(clock, 100); // pour une rotation en continu
	/*clock();
	intervalClock = setInterval(clock, 1000);*/

	//intervalClock = setInterval(clock, 1000);
	//clearInterval(intervalClock);
	
	convertAmPm();

	//

	if ($('#hdBox').length && $('#pseudoHd').html()!='')
	{
		sessUser = true;
		sessProf = false;
		getUrl = $(location).attr('pathname');
		tbUrl = getUrl.split('/');
		if (tbUrl[tbUrl.length-1].length && tbUrl[tbUrl.length-1]!=0 && $.isNumeric(tbUrl.length-1))
		{
			profId = tbUrl[tbUrl.length-5];
			eleveId = tbUrl[tbUrl.length-4];
			classeId = tbUrl[tbUrl.length-3];
			groupeId = tbUrl[tbUrl.length-2];
			activiteId = tbUrl[tbUrl.length-1];

			$.post(
				'inc/options-activite-ajax.php',
				{
					profId : profId,
					classeId : classeId,
					groupeId : groupeId,
					activiteId : activiteId
				},
				function(data)
				{
					if(data != 'error')
					{
						tbOptions = data.split('|');
						$.each(tbOptions, function(index, value)
						{
							eachOpt = value.split(':');
							if (eachOpt[1].length!=0) // mtfClass
							{
								if (eachOpt[1]=='true')
								{
									window[eachOpt[0]] = true;
								}
								else if (eachOpt[1]=='false')
								{
									window[eachOpt[0]] = false;
								}
								else if (!isNaN(eachOpt[1])) // si numérique
								{
									window[eachOpt[0]] = Number(eachOpt[1]);
								}
								else
								{
									window[eachOpt[0]] = eachOpt[1];
								}
							}
							else
							{
								window[eachOpt[0]] = "";
							}
						});
						lireOptions();
						//affichage();
						//generer();
					}
					else
					{
						alert("Un problème est survenu lors de l'envoi des données.");
					}
				},
				'text'
			);
		}
		else
		{
			sessUser = false;
			sessProf = true;
			pseudoL = "horloge-"+$('#pseudoHd').html();
			lireStorageExercices();
			lireStorageApparence();
			lireStorageProfil();
			verifStor();
		}

		if ($.isNumeric(tbUrl[tbUrl.length-3])) {
			classeId = tbUrl[tbUrl.length-3];
			$('#linkHome').attr('href', '../prof/?p=classe&c='+classeId);
		}

		$("#affPseudo").css({'display':'none'});
	}
	else
	{
		sessUser = false;
		sessProf = false;
		if ($("#affUser").text()!="") {pseudo = $("#affUser").text();}else {pseudo = "Invité";}
		$("#affPseudo").html('<img src="img/icon/pk1/elev.png" class="inlBlk icoEl">'+pseudo);
		pseudoL = "horloge-"+pseudo;
		lireStorageExercices();
		lireStorageApparence();
		lireStorageProfil();
		verifStor();
	}

});

function verifStor() {
	if (typeof lireStorExo=="undefined") {
		setTimeout(verifStor, 100);
	}
	else if (typeof lireStorApp=="undefined") {
		setTimeout(verifStor, 100);
	}
	else if (typeof lireStorPrfl=="undefined") {
		setTimeout(verifStor, 100);
	}
	else {
		if (typActivite=="typInterne") {
			lireOptions();
			clock();
			intervalClock = setInterval(clock, 1000);
		}
		else if (typActivite=="typInteractive") {
			lireOptions();
		}
		else {
			if (typeof intervalClock!='undefined') {
				clearInterval(intervalClock);
			}
			lireOptions();
		}
	}
}

function affichage() {

	if(typActivite=='typInterne') {
		$('#alertT').html('L\'application est maintenant en mode <strong >"Horloge interne"</strong>.<br><span class="txt08">(Ce mode permet d\'observer le fonctionnement de l\'horloge.)</span><br>Pour une activité de manipulations, sélectionner le mode <strong >"Manipuler"</strong>.<br><span class="txt08">(Ce mode permet de diriger une activité de manipulations avec les élèves.)</span><br>Pour une activité autonome, sélectionner le mode <strong>"Exercices"</strong>.<br><span class="txt08">(Seul ce mode enregistre les résultats des élèves.)</span>');
		$('#alertT').css({'display':'inline-block'});
		$(".slidBox").hide();
	}
	else if(typActivite=='typInteractive') {
		$('#alertT').html('L\'application est maintenant en mode <strong >"Manipuler"</strong>.<br><span class="txt08">(Ce mode permet de diriger une activité de manipulations avec les élèves.)</span><br>Pour une activité autonome, sélectionner le mode <strong>"Exercices"</strong>.<br><span class="txt08">(Seul ce mode enregistre les résultats des élèves.)</span>');
		$('#alertT').css({'display':'inline-block'});
		$(".slidBox").show();
	}
	else {
		$('#alertT').css({'display':'none'});
	}

	if (typActivite=="typInterne" || typActivite=="typInteractive") {
		
		$('#alertT').css({'display':'inline-block'});
		
		$("#optExercices").hide();
		$("#digitProp, #digitAig, #propBtBox").hide(); // debug
		$("#digitInterne").show();

		if (typAmPm=="rdAmPm") {
			$("#affAmPm").hide();
			$("#affAmPm").text("");
		}
		else if (typAmPm=="rdAm") {
			$("#affAmPm").show();
			$("#affAmPm").text("Avant midi");
		}
		else if (typAmPm=="rdPm") {
			$("#affAmPm").show();
			$("#affAmPm").text("Après midi");
		}
	}
	else if (typActivite=="typExercices") {

		$('#alertT').css({'display':'none'});

		$("#digitInterne").hide(); // debug

		if (typExercice=="typEcrire") {
			$("#digitAig").hide(); // debug
			$("#digitProp, #propBtBox").show();
			
			if (typAmPm=="rdAmPm") {
				if (nbHre>=12) {
					$("#affAmPm").show();
					$("#affAmPm").text("Après midi");
				}
				else {
					$("#affAmPm").show();
					$("#affAmPm").text("Avant midi");
				}
			}
			else if (typAmPm=="rdAm") {
				$("#affAmPm").show();
				$("#affAmPm").text("Avant midi");
			}
			else if (typAmPm=="rdPm") {
				$("#affAmPm").show();
				$("#affAmPm").text("Après midi");
			}
		}
		else if (typExercice=="typAiguilles") {
			$("#digitProp").hide(); // debug
			$("#digitAig, #propBtBox").show();
			$("#affAmPm").hide();
			$("#affAmPm").text("");
		}

		$("#optExercices").show();
	}

	/* Arrêter les sliders */
	if (typActivite=="typInterne" || typActivite=="typExercices") {
		stoperSliders();
	}

	/* Curseur pour le drag */
	if ((typActivite!="typInterne") && (typActivite=="typInteractive" || typExercice=="typAiguilles")) {
		$("#aigHre, #aigMin, #aigSec").css("cursor", "move");
	}
	else {
		$("#aigHre, #aigMin, #aigSec").css("cursor", "initial");
	}

	/* Mettre les valeurs à 0 si l'aiguille ou le digital sont cachés */

	if (typActivite=="typInteractive" || typActivite=="typExercices") {
		if (checkDigHre==false || checkAigHre==false) {
			$("#digHre").val(0);
			$('#aigHreBox').css({
				'-moz-transform': 'rotate(0deg)',
				'-webkit-transform': 'rotate(0deg)'
			});
		}
		if (checkDigMin==false || checkAigMin==false) {
			$("#digMin").val(0);
			$('#aigMinBox').css({
				'-moz-transform': 'rotate(0deg)',
				'-webkit-transform': 'rotate(0deg)'
			});
		}
		if (checkDigSec==false || checkAigSec==false) {
			$("#digSec").val(0);
			$('#aigSecBox').css({
				'-moz-transform': 'rotate(0deg)',
				'-webkit-transform': 'rotate(0deg)'
			});
		}
	}		
}

/* Arondir entier inférieur */
function minDeuxChiffres(nb) {
	if(nb<10)
	{
		nb = "0"+nb;
	}
	return(nb);
}

/* Stoper les sliders */

function stoperSliders() {
	if( typeof(intervalSlidHre) != 'undefined' ){
		clearInterval(intervalSlidHre);
		sliderHre.slider( "value", 0 );
		handleHre.text(0);
	}
		
	if( typeof(intervalSlidMin) != 'undefined' ){
		clearInterval(intervalSlidMin);
		sliderMin.slider( "value", 0 );
		handleMin.text(0);
	}
		
	if( typeof(intervalSlidSec) != 'undefined' ){
		clearInterval(intervalSlidSec);
		sliderSec.slider( "value", 0 );
		handleSec.text(0);
	}
}

/* Convertir Am Pm de l'aiguille des heures */

typAmPm = "rdAmPm";
$("#affAmPm").hide();
$("#affAmPm").text("");
typExercice = "typEcrire";

function convertAmPm() {

	nbHre = parseInt($('#digHre').val());

	if (typAmPm=="rdAm") {
		if (nbHre>=12) {
			nbHre = nbHre - 12;
		}
	}
	else if (typAmPm=="rdPm") {
		if (nbHre>=0 && nbHre<12) {
			nbHre = nbHre + 12;
		}
	}
	$('#digHre').val(nbHre);
}

function lireOptions() {

	$("#"+typActivite).prop("checked", true);
	$("#"+typExercice).prop("checked", true);
	$("#"+typMinutes).prop("checked", true);

	$("#"+typAmPm).prop("checked", true);
	$("#horloge, #digitalBox").css("background", colObjet);
	$("#horlogeBord, #digitalBox, #motifPanel").css("border-color", colBord);
	$("#page, #motifPanel").css("background", colPage);
	$("#colObjet").spectrum("set",colObjet);
	$("#colBord").spectrum("set",colBord);
	$("#colPage").spectrum("set",colPage);
	if (mtfClass!="") {
		$("#motif").removeClass();
		$("#motif").addClass(""+mtfClass);
		$("#mtfClass").val(mtfClass);
	}
	$("#aigHre").css("background", colHre);
	$("#digAigHre").css("border-color", colHre);
	$(".chifHreAm, .chifHrePm, #digHre").css("color", colHre);
	$("#aigMin").css("background", colMin);
	$("#digAigMin").css("border-color", colMin);
	$(".chifMin, .chifMinNeg, #digMin").css("color", colMin);
	$("#aigSec").css("background", colSec);
	$("#digAigSec").css("border-color", colSec);
	$("#digSec").css("color", colSec);
	$("#colHre").spectrum("set",colHre);
	$("#colMin").spectrum("set",colMin);
	$("#colSec").spectrum("set",colSec);
	if (checkAigHre==true) {$("#aigHreBox").show();$("#checkAigHre").prop("checked", true);} else {$("#aigHreBox").hide();$("#checkAigHre").prop("checked", false);}
	if (checkAigMin==true) {$("#aigMinBox").show();$("#checkAigMin").prop("checked", true);} else {$("#aigMinBox").hide();$("#checkAigMin").prop("checked", false);}
	if (checkAigSec==true) {$("#aigSecBox").show();$("#checkAigSec").prop("checked", true);} else {$("#aigSecBox").hide();$("#checkAigSec").prop("checked", false);}
	if (checkChifHreAm==true) {$("#chifHreAm").show();$("#checkChifHreAm").prop("checked", true);} else {$("#chifHreAm").hide();$("#checkChifHreAm").prop("checked", false);}
	if (checkChifHrePm==true) {$("#chifHrePm").show();$("#checkChifHrePm").prop("checked", true);} else {$("#chifHrePm").hide();$("#checkChifHrePm").prop("checked", false);}
	if (checkChifMin==true) {$("#chifMinBox").show();$("#checkChifMin").prop("checked", true);$("#checkChifMinNeg").prop("disabled", false);} else {$("#chifMinBox").hide();$("#checkChifMin").prop("checked", false);$("#checkChifMinNeg").prop("disabled", true);}
	if (checkChifMinNeg==true) {$("#chifMinNeg").show();$("#chifMin").hide();$("#checkChifMinNeg").prop("checked", true);} else {$("#chifMinNeg").hide();$("#chifMin").show();$("#checkChifMinNeg").prop("checked", false);}
	if (checkGradHre==true) {$("#gradHre").show();$("#checkGradHre").prop("checked", true);} else {$("#gradHre").hide();$("#checkGradHre").prop("checked", false);}
	if (checkGradMin==true) {$("#gradM").show();$("#checkGradMin").prop("checked", true);} else {$("#gradMin").hide();$("#checkGradMin").prop("checked", false);}
	if (checkDigHre==true) {$("#digHreBox, #propHre, #digAigHre, .sepDigit1").show();$("#checkDigHre").prop("checked", true);} else {$("#digHreBox, #propHre, #digAigHre, .sepDigit1").hide();$("#checkDigHre").prop("checked", false);}
	if (checkDigMin==true) {$("#digMinBox, #propMin, #digAigMin").show();$("#checkDigMin").prop("checked", true);} else {$("#digMinBox, #propMin, #digAigMin").hide();$("#checkDigMin").prop("checked", false);}
	if (checkDigSec==true) {$("#digSecBox, #propSec, #digAigSec, .sepDigit2").show();$("#checkDigSec").prop("checked", true);} else {$("#digSecBox, #propSec, #digAigSec, .sepDigit2").hide();$("#checkDigSec").prop("checked", false);}
	if (checkFracEq==true) {$("#fracEqBox").show();$("#checkFracEq").prop("checked", true);} else {$("#fracEqBox").hide();$("#checkFracEq").prop("checked", false);}
	if (checkFracEd==true) {$("#fracEdBox").show();$("#checkFracEd").prop("checked", true);} else {$("#fracEdBox").hide();$("#checkFracEd").prop("checked", false);}
	if (checkFracMq==true) {$("#fracMqBox").show();$("#checkFracMq").prop("checked", true);} else {$("#fracMqBox").hide();$("#checkFracMq").prop("checked", false);}

	generer();
	affichage();
	chargement();
}

function chargement() {
	setTimeout(voirPage, 100);
}

function voirPage() {
	$("#accueil").hide();
	$("#page").show();
}