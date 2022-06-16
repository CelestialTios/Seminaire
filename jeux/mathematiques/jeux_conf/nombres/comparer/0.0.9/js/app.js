$(document).ready(function()
{
	/************************************************/

	///// OPTIONS /////

	/************************************************/

	//$("#options").show(); // debug

	/* Réglages pour l'accueil */

	$("#appSavSuccesBox, #confDefStorApp").hide();

	/* Options des exercices */

	/* Type de nombre */

	$("#rdEntier").click(function()	{
		typNombre = $(this).val();
		generer();
		$("#chifApVirg, #forcDecimal").hide();
	});

	$("#rdDecimal").click(function(){
		typNombre = $(this).val();
		generer();
		$("#chifApVirg, #forcDecimal").show();
	});

	$("#chifApVirg").hide();
	$("#chApVirg")
	.on('input', function() {
		if ($(this).val()!='') {
			chApVirg = parseInt($(this).val());
		}
	})
	.on('change', function() {
		if ($(this).val()!='') {
			chApVirg = parseInt($(this).val());
		}
		else {
			$(this).val(chApVirg);
		}
		generer();
	})
	.focusout(function() {
		generer();
	});

	$("#chkForcDecimal").change(function(){
		chkForcDecimal = $("#chkForcDecimal").prop("checked");
		generer();
	});

	/* Min et max */

	$("#nbMin")
	.on('input', function() {
		nbMin = parseInt($(this).val());
	})
	.on('change', function() {
		nbMin = parseInt($(this).val());
		generer();
	})
	.focusout(function() {
		generer();		
	});

	$("#nbMax")
	.on('input', function() {
		nbMax = parseInt($(this).val());
	})
	.on('change', function() {
		nbMax = parseInt($(this).val());
		generer();
	})
	.focusout(function() {
		generer();		
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
			$("#depoCompoBox, #prop, #motifPanel").css("border-color", color);
			colBord = color.toHexString();
		},
		move: function (color) {
			$("#depoCompoBox, #prop, #motifPanel").css("border-color", color);
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

	$("#btStorApp").click(function(){
		ecrireStorageApparence();
	});

	$("#btDefStorApp").click(function(){
		$("#confDefStorApp").show();
	});

	$("#btConfDefStorApp").click(function(){
		defautStorageApparence();
		$("#confDefStorApp").hide();
	});

	$("#btAnnulDefStorApp").click(function(){
		$("#confDefStorApp").hide();
	});

	//

	if ($('#hdBox').length && $('#pseudoHd').html()!='')
	{

		sessUser = true;
		sessProf = false;

		getUrl = $(location).attr('pathname');
		tbUrl = getUrl.split('/');
		if (tbUrl[tbUrl.length-1].length && tbUrl[tbUrl.length-1]!=0 && $.isNumeric(tbUrl.length-1)) {
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
			pseudoL = "comparer-nombres-"+$('#pseudoHd').html();
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
		pseudoL = "comparer-nombres-"+pseudo;
		lireStorageApparence();
		lireStorageProfil();
		verifStor();
	}

});

function lireOptions() {
	$("#depoCompoBox").css("background", colObjet);
	$("#depoCompoBox, #prop, #motifPanel").css("border-color", colBord);
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
	$("#chApVirg").val(chApVirg);
	if(typNombre=="Decimal") {
		$("#chifApVirg, #forcDecimal").show();
	}
	else {
		$("#chifApVirg, #forcDecimal").hide();
	}
	if (chkForcDecimal==true) {forcDecimal=true;$("#chkForcDecimal").prop("checked", true);} else {forcDecimal=false;$("#chkForcDecimal").prop("checked", false);}
	$("#nbMin").val(nbMin);
	$("#nbMax").val(nbMax);

	generer();
	chargement();
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

function chargement() {
	setTimeout(voirPage, 100);
}

function voirPage() {
	$("#accueil").hide();
	$("#page").show();
}