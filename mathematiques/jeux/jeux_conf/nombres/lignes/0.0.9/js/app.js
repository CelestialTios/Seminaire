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
		generer(nbMin, nbMax);
	});

	$("#typExercices").click(function(){
		typActivite = $(this).val();
		affichage();
		generer(nbMin, nbMax);
	});

	/* Options des exercices */

	/* Type d'exercices */
	
	$("#typSituer").click(function(){
		typExercice = $(this).val();
		generer(nbMin, nbMax);
	});

	
	$("#typEcrire").click(function(){
		typExercice = $(this).val();
		generer(nbMin, nbMax);
	});

	/* Min et max */

	$("#nbMin")
	.on('input', function() {
		nbMin = Number($(this).val());
	})
	.on('change', function() {
		nbMin = Number($(this).val());
		generer(nbMin, nbMax);
	})
	.focusout(function() {
		generer(nbMin, nbMax);		
	});

	$("#nbMax")
	.on('input', function() {
		nbMax = Number($(this).val());
	})
	.on('change', function() {
		nbMax = Number($(this).val());
		generer(nbMin, nbMax);
	})
	.focusout(function() {
		generer(nbMin, nbMax);		
	});

	$("#nbDiv")
	.on('input', function() {
		nbDiv = parseInt($(this).val());
	})
	.on('change', function() {
		nbDiv = parseInt($(this).val());
		generer(nbMin, nbMax);
	})
	.focusout(function() {
		generer(nbMin, nbMax);
	});

	$("#chkDiv").change(function(){
		chkDiv = $("#chkDiv").prop("checked");	
		if (chkDiv==true) {$(".nbr").show();} else {$(".nbr").hide();}	
	});

	$("#chkGrad").change(function(){
		chkGrad = $("#chkGrad").prop("checked");	
		if (chkGrad==true) {$(".grd").show();} else {$(".grd").hide();}	
	});

	$("#nbDivS")
	.on('input', function() {
		nbDivS = parseInt($(this).val());
	})
	.on('change', function() {
		nbDivS = parseInt($(this).val());
		generer(nbMin, nbMax);
	})
	.focusout(function() {
		generer(nbMin, nbMax);
	});

	$("#chkDivS").change(function(){
		chkDivS = $("#chkDivS").prop("checked");	
		if (chkDivS==true) {$(".nbrS").show();} else {$(".nbrS").hide();}	
	});

	$("#chkGradS").change(function(){
		chkGradS = $("#chkGradS").prop("checked");	
		if (chkGradS==true) {$(".grdS").show();} else {$(".grdS").hide();}	
	});

	/* Boutons */

	$("#btGenerer").click(function(){
		generer(nbMin, nbMax);
	});

	$("#btVerifier").click(function()
	{
		verifier();
	});

	$("#btSuivant").click(function()
	{
		$("#succesBox").hide();
		$("#btVerifier").show();
		enterSuivant = false;
		generer(nbMin, nbMax);
	});

	$("#exoSavSuccesBox, #appSavSuccesBox").hide();
	$("#confDefStorEx, #confDefStorApp").hide();

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
			pseudoL = "lignes-nombres-"+$('#pseudoHd').html();
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
		pseudoL = "lignes-nombres-"+pseudo;
		lireStorageExercices();
		lireStorageApparence();
		lireStorageProfil();
		verifStor();
	}

});

function lireOptions() {

	$("#typ"+typActivite).prop("checked", true);
	$("#typ"+typExercice).prop("checked", true);
	$("#nbMin").val(nbMin);
	$("#nbMax").val(nbMax);
	$("#nbDiv").val(nbDiv);
	if (chkDiv==true) {$(".nbr").show();$("#chkDiv").prop("checked", true);} else {$(".nbr").hide();$("#chkDiv").prop("checked", false);}
	if (chkGrad==true) {$(".grd").show();$("#chkGrad").prop("checked", true);} else {$(".grd").hide();$("#chkGrad").prop("checked", false);}
	$("#nbDivS").val(nbDivS);
	if (chkDivS==true) {$(".nbrS").show();$("#chkDivS").prop("checked", true);} else {$(".nbrS").hide();$("#chkDivS").prop("checked", false);}
	if (chkGradS==true) {$(".grdS").show();$("#chkGradS").prop("checked", true);} else {$(".grdS").hide();$("#chkGradS").prop("checked", false);}

	$("#depoCompoBox").css("background", colObjet);
	$("#colObjetBox").find(".sp-preview-inner").css("background-color", colObjet);
	$("#depoCompoBox, #motifPanel").css("border-color", colBord);
	$("#colBordBox").find(".sp-preview-inner").css("background-color", colBord);
	$("#page, #motifPanel").css("background", colPage);
	$("#colPageBox").find(".sp-preview-inner").css("background-color", colPage);
	if (typeof mtfClass!="") {
		$("#motif").removeClass();
		$("#motif").addClass(""+mtfClass);
	}

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
	platoWidth = Math.floor((pageWidth * 90) / 100);
	$("#depoCompo").css({"width": platoWidth+"px"});
	affichage();
	generer(nbMin, nbMax);
	/*$(document).ready(function() {
		generer(nbMin, nbMax);
	});*/
}

function affichage() {
	if (typActivite=="Interactive") {
		$('#alertT').css({'display':'inline-block'});
		$(".blocOptMenu2, #propBtBox").hide();
	}
	else if (typActivite=="Exercices") {
		$('#alertT').css({'display':'none'});
		$(".blocOptMenu2, #propBtBox").show();
	}

}