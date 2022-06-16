$(document).ready(function()
{
	/************************************************/

	///// OPTIONS /////

	/************************************************/

	$("#options").show(); // debug

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

	$("#typExo1").click(function(){	
		typExercice = $(this).val();
		affichage();
		generer();
	});

	$("#typExo2").click(function(){
		typExercice = $(this).val();
		affichage();
		generer();
	});

	/* Opérateurs */

	$("#chkMult10").change(function(){
		chkMult10 = $(this).prop("checked");
		affichage();
		generer();
	});

	$("#chkMult100").change(function(){
		chkMult100 = $(this).prop("checked");
		affichage();
		generer();
	});

	$("#chkMult1000").change(function(){
		chkMult1000 = $(this).prop("checked");
		affichage();
		generer();
	});

	$("#chkDiv10").change(function(){
		chkDiv10 = $(this).prop("checked");
		affichage();
		generer();
	});

	$("#chkDiv100").change(function(){
		chkDiv100 = $(this).prop("checked");
		affichage();
		generer();
	});

	$("#chkDiv1000").change(function(){
		chkDiv1000 = $(this).prop("checked");
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

	/* Type de nombre */
	
	$("#rdEntier").click(function(){
		typNombre = $(this).val();
		$("#affOptDec").hide();
		affichage();
		generer();
	});
	
	$("#rdDecimal").click(function(){
		typNombre = $(this).val();
		$("#affOptDec").show();
		affichage();
		generer();
	});

	/* Nombre de chiffres */

	$("#nbChifDec")
	.on('input', function() {
		nbChifDec = parseInt($(this).val());
	})
	.on('change', function() {
		nbChifDec = parseInt($(this).val());
		verfifNbChiff();
		affichage();
		generer();
	})
	.focusout(function() {
		verfifNbChiff();
		affichage();
		generer();
	});

	function verfifNbChiff() {

		if (nbChifDec>2) {
			nbChifDec = 2;
			$("#nbChifDec").val(nbChifDec);
		}
		else if (nbChifDec<1) {
			nbChifDec = 1;
			$("#nbChifDec").val(nbChifDec);
		}
	}

	/* Aléatoire */

	$("#chkAleaDec").change(function(){
		chkAleaDec = $("#chkAleaDec").prop("checked");	
		if (chkAleaDec==true) {$("#nbChifDec").prop("disabled", true);} else {$("#nbChifDec").prop("disabled", false);nbChifDec = parseInt($("#nbChifDec").val());}
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
			$("#depoCompoBox, #digVal, #propBox, #motifPanel, #roulBox").css("border-color", color);
			colBord = color.toHexString();
		},
		move: function (color) {
			$("#depoCompoBox, #digVal, #propBox, #motifPanel, #roulBox").css("border-color", color);
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
			colPage = color.toHexString();
			$("#page, #motifPanel").css("background-color", colPage);
		},
		move: function (color) {
			colPage = color.toHexString();
			$("#page, #motifPanel").css("background-color", colPage);
		}
	});

	$("#colTapis").spectrum({
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
			colTapis = color.toHexString();
			$("#roulBox, #tapis").css("background-color", colTapis);
		},
		move: function (color) {
			colTapis = color.toHexString();
			$("#roulBox, #tapis").css("background-color", colTapis);
		}
	});

	$("#colMultiplier").spectrum({
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
			colMultiplier = color.toHexString();
			$(".chifAddEnt").css("color", colMultiplier);
			$(".btComM").css("background-color", colMultiplier);
		},
		move: function (color) {
			colMultiplier = color.toHexString();
			$(".chifAddEnt").css("color", colMultiplier);
			$(".btComM").css("background-color", colMultiplier);
		}
	});

	$("#colDiviser").spectrum({
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
			colDiviser = color.toHexString();
			$(".chifAddDec").css("color", colDiviser);
			$(".btComD").css("background-color", colDiviser);
		},
		move: function (color) {
			colDiviser = color.toHexString();
			$(".chifAddDec").css("color", colDiviser);
			$(".btComD").css("background-color", colDiviser);
		}
	});

	/* Type d'exercices */

	$("#rdVisu1").click(function(){	
		typVisu = $(this).val();
		affichage();
		generer();
	});

	$("#rdVisu2").click(function(){
		typVisu = $(this).val();
		affichage();
		generer();
	});

	/* Enregistrer options exercices*/

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
			pseudoL = "glisse-nombre-"+$('#pseudoHd').html();
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
		pseudoL = "glisse-nombre-"+pseudo;
		lireStorageExercices();
		lireStorageApparence();
		lireStorageProfil();
		verifStor();
	}

});

function lireOptions() {

	$("#typ"+typActivite).prop("checked", true);
	$("#typ"+typExercice).prop("checked", true);
	if (chkMult10==true) {$("#chkMult10").prop("checked", true);} else {$("#chkMult10").prop("checked", false);}
	if (chkMult100==true) {$("#chkMult100").prop("checked", true);} else {$("#chkMult100").prop("checked", false);}
	if (chkMult1000==true) {$("#chkMult1000").prop("checked", true);} else {$("#chkMult1000").prop("checked", false);}
	if (chkDiv10==true) {$("#chkDiv10").prop("checked", true);} else {$("#chkDiv10").prop("checked", false);}
	if (chkDiv100==true) {$("#chkDiv100").prop("checked", true);} else {$("#chkDiv100").prop("checked", false);}
	if (chkDiv1000==true) {$("#chkDiv1000").prop("checked", true);} else {$("#chkDiv1000").prop("checked", false);}
	$("#nbMin").val(nbMin);
	$("#nbMax").val(nbMax);
	$("#rd"+typNombre).prop("checked", true);
	if (typNombre=="Entier") {
		$("#affOptDec").hide();
	}
	else if (typNombre=="Decimal") {
		$("#affOptDec").show();
	}
	$("#nbChifDec").val(nbChifDec);
	if (chkAleaDec==true) {$("#nbChifDec").prop("disabled", true);$("#chkAleaDec").prop("checked", true);} else {$("#nbChifDec").prop("disabled", false);$("#chkAleaDec").prop("checked", false);}

	$("#depoCompoBox").css("background", colObjet);
	$("#depoCompoBox, #digVal, #propBox, #motifPanel, #roulBox").css("border-color", colBord);
	$("#page, #motifPanel").css("background-color", colPage);
	$("#roulBox, #tapis").css("background-color", colTapis);
	$(".chifAddEnt").css("color", colMultiplier);
	$(".btComM").css("background-color", colMultiplier);
	$(".chifAddDec").css("color", colDiviser);
	$(".btComD").css("background-color", colDiviser);
	$("#colObjet").spectrum("set",colObjet);
	$("#colBord").spectrum("set",colBord);
	$("#colPage").spectrum("set",colPage);
	$("#colTapis").spectrum("set",colTapis);
	$("#colMultiplier").spectrum("set",colMultiplier);
	$("#colDiviser").spectrum("set",colDiviser);
	if (typeof mtfClass!="") {
		$("#motif").removeClass();
		$("#motif").addClass(""+mtfClass);
		$("#mtfClass").val(mtfClass);
	}
	$("#rd"+typVisu).prop("checked", true);

	$("#nbMin").spinner();

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
		lireOptions();
	}
}

function loadInit() {
	pageWidth = $("#page").width();
	pageHeight = $("#page").height();
	platoWidth = Math.floor((pageWidth * 90) / 100);
	$("#depoCompo").css({"width": platoWidth+"px"});
	affichage();
	generer();
}

/************************************************/

///// AFFICHAGE /////

/************************************************/

function affichage() {

	if (pageWidth<=1024) {
		topRoul = 140;
		$('#virg').css({'top':topRoul-25+'px'});
	}
	else if (pageWidth<=1200) {
		topRoul = 160;
		$('#virg').css({'top':topRoul-30+'px'});
	}
	else if (pageWidth<=1300) {
		topRoul = 180;
		$('#virg').css({'top':topRoul-35+'px'});
	}
	else if (pageWidth<=1400) {
		topRoul = 200;
		$('#virg').css({'top':topRoul-40+'px'});
	}
	else if (pageWidth<=1500) {
		topRoul = 200;
		$('#virg').css({'top':topRoul-44+'px'});
	}
	else {
		topRoul = 220;
		$('#virg').css({'top':topRoul-53+'px'});
	}

	if (typActivite=="Interactive") {
		$("#optExercices").hide();
		$("#digBox").show();
		$("#propBox, #propBtBox").hide();		
	}
	else if (typActivite=="Exercices") {
		$("#optExercices, #propBtBox").show();
		$("#digBox").hide();
		$("#propBox, #propBtBox").show();
		genExo();
	}
}