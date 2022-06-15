$(document).ready(function()
{
	/************************************************/

	///// OPTIONS /////

	/************************************************/

	//$("#options").show(); // debug

	/* Type d'activité' */

	$("#typInteractive").click(function(){
		typActivite = $(this).val();
		affichage();
		generer();
	});

	$("#typExercices").click(function(){
		typActivite = $(this).val();
		affichage();
		generer();
	});

	/* Type d'exercices */

	$("#typComposer").click(function(){	
		typExercice = $(this).val();
		affichage();
		generer();
	});

	$("#typEcrire").click(function(){
		typExercice = $(this).val();
		affichage();
		generer();
	});

	/* Base */

	$("#nbBase")
	.on('input', function() {
		if ($(this).val()!='') {
			base = parseInt($(this).val());
		}
	})
	.on('change', function() {
		if ($(this).val()!='') {
			base = parseInt($(this).val());
		}
		else {
			$(this).val(base);
		}
		affichage();
		generer();
	})
	.focusout(function() {
		affichage();
		generer();
	});

	/* Min et max */

	$("#nbMin")
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
		affichage();
		generer();
	})
	.focusout(function() {
		affichage();
		generer();
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
		affichage();
		generer();
	})
	.focusout(function() {
		affichage();
		generer();
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
			$("#depoCompoBox").css("background", color);
			colObjet = color.toHexString();
		},
		move: function (color) {
			$("#depoCompoBox").css("background", color);
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
			$("#depoCompoBox, #digBox, #motifPanel").css("border-color", color);
			colBord = color.toHexString();
		},
		move: function (color) {
			$("#depoCompoBox, #digBox, #motifPanel").css("border-color", color);
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

	$("#chkDigital").change(function(){
		chkDigital = $(this).prop("checked");
		if (chkDigital==true) {$("#digBox").show();} else {$("#digBox").hide();}
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
		affichage();
		generer();
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
		affichage();
		generer();
	});

	$("#btAnnulDefStorApp").click(function()
	{
		$("#confDefStorApp").hide();
	});

	/************************************************/

	///// APP /////

	/************************************************/

	/* Slider */

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
			pseudoL = "abaque-"+$('#pseudoHd').html();
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
		pseudoL = "abaque-"+pseudo;
		lireStorageExercices();
		lireStorageApparence();
		lireStorageProfil();
		verifStor();
	}

});

function lireOptions() {

	$("#typ"+typActivite).prop("checked", true);
	$("#typ"+typExercice).prop("checked", true);
	$("#nbBase").val(base);
	$("#nbMin").val(nbMin);
	$("#nbMax").val(nbMax);
	
	$("#depoCompoBox").css("background", colObjet);
	$("#depoCompoBox, #digBox, #motifPanel").css("border-color", colBord);
	$("#page, #motifPanel").css("background", colPage);
	$("#colObjet").spectrum("set",colObjet);
	$("#colBord").spectrum("set",colBord);
	$("#colPage").spectrum("set",colPage);
	if (mtfClass!="") {
		$("#motif").removeClass();
		$("#motif").addClass(""+mtfClass);
		$("#mtfClass").val(mtfClass);
	}
	if (chkDigital==true) {$("#digBox").show();$("#chkDigital").prop("checked", true);} else {$("#digBox").hide();$("#chkDigital").prop("checked", false);}

	$("#nbBase").spinner();

	loadInit();
	chargement();
}

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
		//loadInit();
		lireOptions();
	}
}

function loadInit() {
	pageWidth = $("#page").width();
	pageHeight = $("#page").height();
	platoWidth = Math.floor((pageWidth * 90) / 100);
	$("#depoCompo").css({"width": platoWidth+"px"});
	tdWidth = platoWidth/3;
	$(".td").css({"width": tdWidth+"px"});
	tbodyHeight = pageHeight/2;
	$(".td").css({"height": tbodyHeight+"px"});
	affichage();
	generer();
}

/************************************************/

///// AFFICHAGE /////

/************************************************/

function affichage() {

	$("#btSuivant").hide();

	if (typActivite=="Interactive") {
		$("#optExercices").hide();
		$("#digVal").show();
		$("#digExo1, #propExo2").hide();
		$("#succesBox, #propBtBox").hide();
		$("#masqDist").hide();
		$("#distribBox, #corb").show();
		$("#plato").css('margin-bottom','.5em');
		$("#chkDigital").prop({'checked':true}).show();
		$("label[for='chkDigital']").show();
		if (chkDigital==true) {$("#digBox").show();$("#chkDigital").prop("checked", true);} else {$("#digBox").hide();$("#chkDigital").prop("checked", false);}
	}
	else if (typActivite=="Exercices") {
		$("#optExercices, #propBtBox").show();
		$("#digVal").hide();
		$("#digBox").show();
		$("#chkDigital").prop({'checked':true}).hide();
		$("label[for='chkDigital']").hide();

		if (typExercice=='Composer') {
			$("#digExo1").show();
			$("#propExo2").hide();
			$("#masqDist").hide();
			$("#distribBox, #corb").show();
			$("#plato").css('margin-bottom','.5em');
		}
		else if (typExercice=='Ecrire') {
			$("#digExo1").hide();
			$("#propExo2").show();
			$("#masqDist").show();
			$("#distribBox, #corb").hide();
			$("#plato").css('margin-bottom','auto');
		}
	}

	if ($("#page").width()<=1200) {
		$('.blocC').each(function() {
			$(this).css({'width':base * 15+'px', 'height':base * 15+'px'});
		});
		$('.blocD').each(function() {
			$(this).css({'width':base * 15+'px'});
		});
	}
	else {
		$('.blocC').each(function() {
			$(this).css({'width':base * 20+'px', 'height':base * 20+'px'});
		});
		$('.blocD').each(function() {
			$(this).css({'width':base * 20+'px'});
		});
	}

	$("#sliderTemp").slider({
		max: base
	});
}