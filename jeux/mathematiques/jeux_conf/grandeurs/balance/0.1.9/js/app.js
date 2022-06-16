$(document).ready(function()
{
	/************************************************/

	///// OPTIONS /////

	/************************************************/

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

	/* Min et max */

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
			colObjet = color.toHexString();
			$("#colLev, #levRnd").css("background", color);
			$("#levTrgl, #platoG, #platoD").css("border-bottom-color", colObjet);
			$("#digCompoBoxG, #digCompoBoxD, #digEcrireBox, #motifPanel").css("border-color", colObjet);
		},
		move: function (color) {
			colObjet = color.toHexString();
			$("#colLev, #levRnd").css("background", color);
			$("#levTrgl, #platoG, #platoD").css("border-bottom-color", colObjet);
			$("#digCompoBoxG, #digCompoBoxD, #digEcrireBox, #motifPanel").css("border-color", colObjet);
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
			colBord = color.toHexString();
			$("#colSup").css("background", color);
			$("#colonne").css("border-bottom-color", colBord);
			$("#colRnd").css("border-color", colBord);
			$("#colTrgl").css("border-top-color", colBord);
		},
		move: function (color) {
			colBord = color.toHexString();
			$("#colSup").css("background", color);
			$("#colonne").css("border-bottom-color", colBord);
			$("#colRnd").css("border-color", colBord);
			$("#colTrgl").css("border-top-color", colBord);
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
			colPage = color.toHexString();
			$("#page, #motifPanel").css("background", color);
			$(".cordTrgl, #cord").css("border-bottom-color", colPage);
		},
		move: function (color) {
			colPage = color.toHexString();
			$("#page, #motifPanel").css("background", color);
			$(".cordTrgl, #cord").css("border-bottom-color", colPage);
		}
	});

	/* Affichage des éléments */

	$("#checkDigital").change(function(){
		checkDigital = $("#checkDigital").prop("checked");	
		if (checkDigital==true) {
			$("#digitalBox").addClass("grid3");
			if (typActivite=='typExercices' && typExercice=='typComposer') {
				$("#digCompoBoxD").hide();
				$("#digCompoBoxG").show();
			}
			else {
				$("#digCompoBoxG, #digCompoBoxD").show();
			}
		}
		else {
			$("#digitalBox").removeClass("grid3");
			$("#digCompoBoxG, #digCompoBoxD").hide();
		}
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
		generer();
		affichage();
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
		generer();
		affichage();
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
				if ($(this).attr("plato") == "platoG") {
					valCompoG -= (Number($(this).attr("data-val")));
				}
				else if ($(this).attr("plato") == "platoD") {
					valCompoD -= (Number($(this).attr("data-val")));
				}
				calcVal();
				$(this).fadeOut(300, function () {
					$(this).remove();
				});
			});
		}
		else {
			$(".box").fadeOut(300, function () {
				$(this).remove();
			});
			if (typActivite=="typInteractive") {
				valCompoG = 0;			
				valCompoD = 0;
				balance(0, 0);
				$("#masseAlea").remove();
			}
			else if (typActivite=="typExercices") {
				valCompoG = $("#masseAlea").attr("data-val");
				valCompoD = 0;
				valCompo = valCompoG - valCompoD;
				if (valCompo>=16) {
					valCompo = 16;
				}		
				balance(-valCompo, valCompo*5);
			}
		}
		$("#affValG").html(valCompoG + " g");
		$("#affValD").html(valCompoD + " g");
	});

	/* Déplacement du slider */

	handleTemp = $("#handTemp");
	sliderTemp = $("#sliderTemp").slider({
		min: 1,
		max: 5,
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
			pseudoL = "balance-"+$('#pseudoHd').html();
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
		pseudoL = "balance-"+pseudo;
		lireStorageExercices();
		lireStorageApparence();
		lireStorageProfil();
		verifStor();
	}

});

function lireOptions() {

	$("#"+typActivite).prop("checked", true);
	$("#"+typExercice).prop("checked", true);
	$("#nbMin").val(nbMin);
	$("#nbMax").val(nbMax);

	$("#colLev, #levRnd").css("background", colObjet);
	$("#levTrgl, #platoG, #platoD").css("border-bottom-color", colObjet);
	$("#digCompoBoxG, #digCompoBoxD, #digEcrireBox, #motifPanel").css("border-color", colObjet);
	$("#colSup").css("background", colBord);
	$("#colonne").css("border-bottom-color", colBord);
	$("#colRnd").css("border-color", colBord);
	$("#colTrgl").css("border-top-color", colBord);
	$("#page, #motifPanel").css("background", colPage);
	$(".cordTrgl, #cord").css("border-bottom-color", colPage);
	$("#colObjet").spectrum("set",colObjet);
	$("#colBord").spectrum("set",colBord);
	$("#colPage").spectrum("set",colPage);
	if (mtfClass!="") {
		$("#motif").removeClass();
		$("#motif").addClass(""+mtfClass);
		$("#mtfClass").val(mtfClass);
	}
	if (checkDigital==true) {$("#digCompoBoxG, #digCompoBoxD").show();$("#checkDigital").prop("checked", true);} else {$("#digCompoBoxG, #digCompoBoxD").hide();$("#checkDigital").prop("checked", false);}

	$("#nbMin, #nbMax").spinner();

	affichage();
	generer();
	chargement();
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

function viderPlateau() {
	valCompoD = 0;
	valComposer = 0;
	$("#affValD").html("0 g");
	$('.box').remove();
	if (typActivite=="typInteractive") {
		valCompoG = 0;
		$("#masseAlea").remove();
		vitesse = 0;
		balance(0, 0);
		$("#affValG").html("0 g");
	}	
}

function affichage() {

	/* Type d'activité' */

	if (typActivite=="typInteractive") {
		$("header, #hd, nav, footer").show();//firefox
		$('#alertT').css({'display':'inline-block'});
		viderPlateau();
		$("#digFtm").remove();
		$("#optExercices, #btVerifier, #succesBox").hide();
		$("#digEcrireBox").hide(); // debug
		/*$("#checkDigital").prop("disabled", false);
		$("label[for='checkDigital']").removeClass('labelDisabled');*/
		$("#checkDigital").prop({"checked":true}).show();
		$("label[for='checkDigital']").show();
		$("#digCompoBox, #masseAleaDrop").show();
		if (checkDigital==true) {
			$("#digCompoBoxG, #digCompoBoxD").show();
		}
	}
	else if (typActivite=="typExercices") {
		$("header, #hd, nav, footer").hide();//firefox
		$('#alertT').css({'display':'none'});
		$("#digCompoBoxG, #digCompoBoxD, #digEcrireBox").removeClass("incorrect");
		$("#digCompoBoxG, #digCompoBoxD, #digEcrireBox").removeClass("correct");
		$("#digFtm").remove();
		$("#digCompoBox, #masseAleaDrop").hide(); // debug
		viderPlateau();
		$("#optExercices, #btVerifier").show();
		
		if (typExercice=="typComposer") {
			$("#digEcrireBox").hide(); // debug
			$("#digCompoBoxD").hide();
			$("#checkDigital").prop({"checked":true}).show();
			$("label[for='checkDigital']").show();
			if (checkDigital==true) {
				$("#digCompoBoxG").show();
			}			
		}
		else if (typExercice=="typEcrire") {
			$("#digCompoBoxG, #digCompoBoxD").hide(); // debug
			$("#checkDigital").prop({"checked":true}).hide();
			$("label[for='checkDigital']").hide();

			$("#digitalBox").prepend('<div id="digFtm"></div>');
			$("#digEcrireBox").show();

			$("#digEcrire").val("");

			if ($("#nbMax").is(":focus")==false && $("#nbMin").is(":focus")==false) {
				if ('ontouchstart' in window == false) {
					$("#digEcrire").focus();
				}
			}
		}
	}
}

function chargement() {
	setTimeout(voirPage, 100);
}

function voirPage() {
	$("#accueil").hide();
	$("#page").show();
}