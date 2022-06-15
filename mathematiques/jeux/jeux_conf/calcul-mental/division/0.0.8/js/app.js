$(document).ready(function()
{
	/************************************************/

	///// OPTIONS /////

	/************************************************/

	//$("#options").show();

	/* Min et max */

	$("#nbMin1C, #nbMin1D, #nbMin1U, #nbMax1C, #nbMax1D, #nbMax1U, #nbMin2C, #nbMin2D, #nbMin2U, #nbMax2C, #nbMax2D, #nbMax2U").spinner();

	$("#nbMin1C, #nbMin1D, #nbMin1U, #nbMax1C, #nbMax1D, #nbMax1U, #nbMin2C, #nbMin2D, #nbMin2U, #nbMax2C, #nbMax2D, #nbMax2U")
	.on('input', function() {
		if ($(this).val()!='') {
			window[$(this).attr("id")] = parseInt($(this).val());
			dataV = $(this).attr("data-v");
		}
	})
	.focusout(function() {
		verifPassDix();
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
			$("#depoCompoBox, #motifPanel, #calculBox").css("border-color", color);
			colBord = color.toHexString();
		},
		move: function (color) {
			$("#depoCompoBox, #motifPanel, #calculBox").css("border-color", color);
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
		verifPassDix();
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
			pseudoL = "calcul-mental-division-"+$('#pseudoHd').html();
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
		pseudoL = "calcul-mental-division-"+pseudo;
		lireStorageApparence();
		lireStorageProfil();
		verifStor();
	}

});

function lireOptions() {
	$("#depoCompoBox").css("background-color", colObjet);
	$("#depoCompoBox, #motifPanel, #calculBox").css("border-color", colBord);
	$("#page, #motifPanel").css("background", colPage);
	$("#colObjet").spectrum("set",colObjet);
	$("#colBord").spectrum("set",colBord);
	$("#colPage").spectrum("set",colPage);
	if (mtfClass!="") {
		$("#motif").removeClass();
		$("#motif").addClass(""+mtfClass);
		$("#mtfClass").val(mtfClass);
	}

	$("#nbMin1C").val(nbMin1C);
	$("#nbMin1D").val(nbMin1D);
	$("#nbMin1U").val(nbMin1U);
	$("#nbMax1C").val(nbMax1C);
	$("#nbMax1D").val(nbMax1D);
	$("#nbMax1U").val(nbMax1U);
	$("#nbMin2C").val(nbMin2C);
	$("#nbMin2D").val(nbMin2D);
	$("#nbMin2U").val(nbMin2U);
	$("#nbMax2C").val(nbMax2C);
	$("#nbMax2D").val(nbMax2D);
	$("#nbMax2U").val(nbMax2U);

	loadInit();
	verifPassDix();
	chargement();
}

function chargement() {
	setTimeout(voirPage, 100);
}

function voirPage() {
	$("#accueil").hide();
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

function loadInit() {
	pageWidth = $("#page").width();
	
	platoWidth = Math.floor((pageWidth * 90) / 100);

	$("#depoCompo").css({"width": platoWidth+"px"});
}