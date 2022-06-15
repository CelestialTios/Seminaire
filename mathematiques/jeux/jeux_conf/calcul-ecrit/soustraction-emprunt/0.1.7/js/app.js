$(document).ready(function()
{
	/************************************************/

	///// OPTIONS /////

	/************************************************/

	//$("#options").show();

	/* Type de nombre */
	
	$("#rdEntier").click(function(){
		typNombre = $(this).val();
		generer();
	});
	
	$("#rdDecimal").click(function(){
		typNombre = $(this).val();
		generer();
	});

	/* Structure opération */

	tbTerms = ["M", "C", "D", "U"];

	tbTermsD = ["Ud", "Uc", "Um"];


	$("#chk1M").change(function(){
		chk1M = $(this).prop("checked");
		generer();
	});

	$("#chk1C").change(function(){
		chk1C = $(this).prop("checked");
		generer();
	});

	$("#chk1D").change(function(){
		chk1D = $(this).prop("checked");
		generer();
	});

	$("#chk1U").change(function(){
		chk1U = $(this).prop("checked");
		generer();
	});

	$("#chk2M").change(function(){
		chk2M = $(this).prop("checked");
		generer();
	});

	$("#chk2C").change(function(){
		chk2C = $(this).prop("checked");
		generer();
	});

	$("#chk2D").change(function(){
		chk2D = $(this).prop("checked");
		generer();
	});

	$("#chk2U").change(function(){
		chk2U = $(this).prop("checked");
		generer();
	});

	/**/

	$("#chk1Ud").change(function(){
		chk1Ud = $(this).prop("checked");
		generer();
	});

	$("#chk1Uc").change(function(){
		chk1Uc = $(this).prop("checked");
		generer();
	});

	$("#chk1Um").change(function(){
		chk1Um = $(this).prop("checked");
		generer();
	});

	$("#chk2Ud").change(function(){
		chk2Ud = $(this).prop("checked");
		generer();
	});

	$("#chk2Uc").change(function(){
		chk2Uc = $(this).prop("checked");
		generer();
	});

	$("#chk2Um").change(function(){
		chk2Um = $(this).prop("checked");
		generer();
	});

	/* Rangs */

	$("#chkRang").change(function(){
		chkRang = $(this).prop("checked");
		$(".lRang").toggle();
		var hBox = $("#calculBox").height()-20;
		$(".colGril").css({"height":hBox});
	});

	/* Apparence */

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
			$("#depoCompoBox, #motifPanel").css("border-color", color);
			colBord = color.toHexString();
		},
		move: function (color) {
			$("#depoCompoBox, #motifPanel").css("border-color", color);
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

	/* Enregistrer apparence*/

	$("#appSavSuccesBox").hide();
	$("#confDefStorApp").hide();

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
			pseudoL = "calcul-ecrit-soustraction-emprunt-"+$('#pseudoHd').html();
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
		pseudoL = "calcul-ecrit-soustraction-emprunt-"+pseudo;
		lireStorageApparence();
		lireStorageProfil();
		verifStor();
	}

});

function lireOptions() {
	
	$("#depoCompoBox").css("background-color", colObjet);
	$("#depoCompoBox, #motifPanel").css("border-color", colBord);
	$("#page, #motifPanel").css("background", colPage);
	$("#colObjet").spectrum("set",colObjet);
	$("#colBord").spectrum("set",colBord);
	$("#colPage").spectrum("set",colPage);
	if (mtfClass!="") {
		$("#motif").removeClass();
		$("#motif").addClass(""+mtfClass);
		$("#mtfClass").val(mtfClass);
	}

	$("#rd"+typNombre).prop("checked", true);

	if (chk1M==true) {$("#chk1M").prop("checked", true);} else {$("#chk1M").prop("checked", false);}
	if (chk1C==true) {$("#chk1C").prop("checked", true);} else {$("#chk1C").prop("checked", false);}
	if (chk1D==true) {$("#chk1D").prop("checked", true);} else {$("#chk1D").prop("checked", false);}
	if (chk1U==true) {$("#chk1U").prop("checked", true);} else {$("#chk1U").prop("checked", false);}
	if (chk2M==true) {$("#chk2M").prop("checked", true);} else {$("#chk2M").prop("checked", false);}
	if (chk2C==true) {$("#chk2C").prop("checked", true);} else {$("#chk2C").prop("checked", false);}
	if (chk2D==true) {$("#chk2D").prop("checked", true);} else {$("#chk2D").prop("checked", false);}
	if (chk2U==true) {$("#chk2U").prop("checked", true);} else {$("#chk2U").prop("checked", false);}
	if (chk1Ud==true) {$("#chk1Ud").prop("checked", true);} else {$("#chk1Ud").prop("checked", false);}
	if (chk1Uc==true) {$("#chk1Uc").prop("checked", true);} else {$("#chk1Uc").prop("checked", false);}
	if (chk1Um==true) {$("#chk1Um").prop("checked", true);} else {$("#chk1Um").prop("checked", false);}
	if (chk2Ud==true) {$("#chk2Ud").prop("checked", true);} else {$("#chk2Ud").prop("checked", false);}
	if (chk2Uc==true) {$("#chk2Uc").prop("checked", true);} else {$("#chk2Uc").prop("checked", false);}
	if (chk2Um==true) {$("#chk2Um").prop("checked", true);} else {$("#chk2Um").prop("checked", false);}
	if (chkRang==true) {$("#chkRang").prop("checked", true);} else {$("#chkRang").prop("checked", false);}
	if (chkGrille==true) {$("#chkGrille").prop("checked", true);} else {$("#chkGrille").prop("checked", false);}

	generer();
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
	if (typeof lireStorApp=="undefined") {
		setTimeout(verifStor, 100);
	}
	else if (typeof lireStorPrfl=="undefined") {
		setTimeout(verifStor, 100);
	}
	else {
		lireOptions();
	}
}