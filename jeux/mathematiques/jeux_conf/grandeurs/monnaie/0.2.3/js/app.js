$(document).ready(function()
{
	/************************************************/

	///// OPTIONS /////

	/************************************************/

	/* Réglages pour l'accueil */

	$("#optExercices").hide();

	/* Type d'activité' */

	$("#typInteractive").click(function(){
		typActivite = $(this).val();
		affichage();
	});

	$("#typExercices").click(function(){		
		typActivite = $(this).val();
		generer();
		affichage();
	});

	/* Options des exercices */

	/* Type d'exercices */
	
	$("#typComposer").click(function()
	{	
		typExercice = $(this).val();
		generer();
		affichage();
	});

	
	$("#typEcrire").click(function()
	{		
		typExercice = $(this).val();
		generer();
		affichage();
	});

	
	$("#typRendre").click(function()
	{		
		typExercice = $(this).val();
		generer();
		affichage();
	});

	/* Type de nombre */

	$("#rdEntier").prop("checked", true);

	//typNombre = "rdEntier";
	
	$("#rdEntier").click(function()
	{
		typNombre = $(this).val();
		generer();
		affichage();
	});
	
	$("#rdDecimal").click(function()
	{
		typNombre = $(this).val();
		generer();
		affichage();
	});

	/* Min et max */

	$("#nbMin, #nbMax").spinner();

	/*$("#nbMin")
	.on('input', function() {
		if ($(this).val()!='') {
			nbMin = parseInt($(this).val());
		}
	})
	.on('change', function() {
		if ($(this).val()!='') {
			nbMin = parseInt($(this).val());
		}
		else {
			$(this).val(nbMin);
		}
		generer();
		affichage();
	})
	.focusout(function() {
		generer();
		affichage();		
	});

	$("#nbMax")
	.on('input', function() {
		if ($(this).val()!='') {
			nbMax = parseInt($(this).val());
		}
	})
	.on('change', function() {
		if ($(this).val()!='') {
			nbMax = parseInt($(this).val());
		}
		else {
			$(this).val(nbMax);
		}
		generer();
		affichage();
	})
	.focusout(function() {
		generer();
		affichage();		
	});*/

	$("#nbMin").on('input change', function() {
		if ($(this).val()!='') {
			nbMin = parseInt($(this).val());
		}
		else {
			$(this).val(nbMin);
		}
		generer();
		affichage();
	});

	$("#nbMax").on('input change', function() {
		if ($(this).val()!='') {
			nbMax = parseInt($(this).val());
		}
		else {
			$(this).val(nbMax);
		}
		generer();
		affichage();
	});

	/* Apparence */

	if (!$("#dateHd").length) {
		$("#optApparence").hide();
	}
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
			$("#depoCompoBox, #digCompoBox, #digEcrireBox, #digComposerBox, #depoEcrireBox").css("background", color);
			colObjet = color.toHexString();
		},
		move: function (color) {
			$("#depoCompoBox, #digCompoBox, #digEcrireBox, #digComposerBox, #depoEcrireBox").css("background", color);
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
			$("#depoCompoBox, #digCompoBox, #digEcrireBox, #digComposerBox, #depoEcrireBox, #motifPanel").css("border-color", color);
			colBord = color.toHexString();
		},
		move: function (color) {
			$("#depoCompoBox, #digCompoBox, #digEcrireBox, #digComposerBox, #depoEcrireBox, #motifPanel").css("border-color", color);
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

	/* Affichage des éléments */

	$("#checkDigital").change(function(){
		checkDigital	= $("#checkDigital").prop("checked");	
		if (checkDigital==true) {$("#digCompoBox").show();} else {$("#digCompoBox").hide();}	
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

	/************************************************/

	///// APP /////

	/************************************************/

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
		$("#affSomme").val(valCompo.toFixed(2).replace(".",",") + " €");
	});

	/* Déplacement du slider */

	handleTemp = $("#handTemp");
	sliderTemp = $("#sliderTemp").slider({
		min: 1,
		max: 10,
		value: 1,
		create: function() {
			handleTemp.text($(this).slider("value"));
		},
		slide: function(event, ui) {			
			handleTemp.text(ui.value);
			nbDist = handleTemp.text();
		}
	});

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
			pseudoL = "monnaie-"+$('#pseudoHd').html();
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
		pseudoL = "monnaie-"+pseudo;
		lireStorageExercices();
		lireStorageApparence();
		lireStorageProfil();
		verifStor();
	}

});

function lireOptions() {

	$("#"+typActivite).prop("checked", true);
	$("#"+typExercice).prop("checked", true);
	$("#"+typNombre).prop("checked", true);
	$("#nbMin").val(nbMin);
	$("#nbMax").val(nbMax);

	$("#depoCompoBox, #digCompoBox, #digEcrireBox, #digComposerBox, #depoEcrireBox").css("background", colObjet);
	$("#depoCompoBox, #digCompoBox, #digEcrireBox, #digComposerBox, #depoEcrireBox, #motifPanel").css("border-color", colBord);
	$("#page, #motifPanel").css("background", colPage);
	$("#colObjet").spectrum("set",colObjet);
	$("#colBord").spectrum("set",colBord);
	$("#colPage").spectrum("set",colPage);
	if (mtfClass!="") {
		$("#motif").removeClass();
		$("#motif").addClass(""+mtfClass);
		$("#mtfClass").val(mtfClass);
	}
	if (checkDigital==true) {$("#digCompoBox").show();$("#checkDigital").prop("checked", true);} else {$("#digCompoBox").hide();$("#checkDigital").prop("checked", false);}

	affichage();
	generer();
	chargement();
}

valComposer = 0;

function chargement() {
	setTimeout(voirPage, 100);
}

function voirPage() {
	$("#accueil").hide();
	$("#page").show();
}

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
		lireOptions();
		generer();
		affichage();
	}
}

function affichage() {

	/* Type d'activité' */

	if (typActivite=="typInteractive") {

		$('#alertT').css({'display':'inline-block'});

		viderPlateau();

		$("#optExercices, #depoEcrireBox, #btVerifier, #succesBox").hide();
		$("#digRendreBox, #digEcrireBox, #digComposerBox").hide(); // debug

		$("#plato").css("margin-bottom", ".4em");
		$("#compoBox, #digCompoBox, #affSomme, #distrib").show();

		$("#checkDigital").prop({"checked":true}).show();;
		$("label[for='checkDigital']").show();
	}

	else if (typActivite=="typExercices") {

		$('#alertT').css({'display':'none'});

		$("#affComposer, #digEcrire, #digCompoBox").removeClass("incorrect");
		$("#affComposer, #digEcrire, #digCompoBox").removeClass("correct");

		$("#digCompoBox").hide(); // debug

		$("#checkDigital").prop({"checked":true}).hide();;
		$("label[for='checkDigital']").hide();

		viderPlateau();
		
		$("#optExercices, #btVerifier").show();

		if (typExercice=="typComposer") {
			$("#depoEcrireBox").hide();
			$("#digRendreBox, #digEcrireBox, #affSomme").hide(); // debug

			$("#plato").css("margin-bottom", ".4em");
			$("#compoBox, #digComposerBox, #distrib").show();
		}

		else if (typExercice=="typEcrire") {
			$("#compoBox, #distrib").hide();
			$("#digRendreBox, #digComposerBox, #affSomme").hide(); // debug

			$("#plato").css("margin-bottom", "auto");
			$("#depoEcrireBox, #digEcrireBox").show();

			$("#digEcrire").val("");

			if ($("#nbMax").is(":focus")==false && $("#nbMin").is(":focus")==false) {
				if ('ontouchstart' in window == false) {
					$("#digEcrire").focus();
				}
			}				
		}

		else if (typExercice=="typRendre") {
			$("#depoEcrireBox, #digEcrireBox").hide();
			$("#digComposerBox, #affSomme").hide(); // debug

			$("#plato").css("margin-bottom", ".4em");
			$("#digRendreBox, #compoBox, #digCompoBox, #affSomme, #distrib").show();
		}
	}
}

function viderPlateau() {
	valCompo = 0;
	$("#affSomme").val(valCompo.toFixed(2).replace(".",",") + " €");
	$('.box').fadeOut(300, function () {
		$(this).remove();
	});
}