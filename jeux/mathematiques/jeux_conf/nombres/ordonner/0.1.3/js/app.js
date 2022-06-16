$(document).ready(function()
{
	/************************************************/

	///// OPTIONS /////

	/************************************************/

	//$("#options").show(); // debug

	/* Réglages pour l'accueil */

	$("#exoSavSuccesBox, #appSavSuccesBox").hide();
	$("#confDefStorEx, #confDefStorApp").hide();

	/* Options des exercices */

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

	/* Type Ordre */
	
	$("#rdCroissant").click(function()
	{
		typOrdre = $(this).val();
		generer();
	});
	
	$("#rdDecroissant").click(function()
	{
		typOrdre = $(this).val();
		generer();
	});

	/* Type de nombre */
	
	$("#rdEntier").click(function()
	{
		typNombre = $(this).val();
		generer();
		$("#chApVirgBox, #forcDecimal").hide();
	});
	
	$("#rdDecimal").click(function()
	{
		typNombre = $(this).val();
		generer();
		$("#chApVirgBox, #forcDecimal").show();
	});

	$("#chApVirgBox").hide();
	$("#chApVirg").on('input', function() {
		chApVirg = parseInt($(this).val());
		generer();			
	});

	$("#chkForcDecimal").change(function()
	{
		chkForcDecimal = $("#chkForcDecimal").prop("checked");
		$(this).val(chkForcDecimal);		
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

	$("#nbItems").on('input', function() {
		nbItems = parseInt($(this).val());
		generer();
	});

	$("#btGenerer").click(function(){
		generer();
	});

	/* Apparence */

	//$("#optApparence").hide();

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
			$("#depoCompoBox, .box, #motifPanel").css("border-color", color);
			colBord = color.toHexString();
		},
		move: function (color) {
			$("#depoCompoBox, .box, #motifPanel").css("border-color", color);
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

	/* Slider Font */

	$("#sliderTemp").slider({
		min: 1,
		max: 5,
		value: 3,
		create: function() {
			$("#handTemp").text($(this).slider("value"));
		},
		slide: function(event, ui) {			
			$("#handTemp").text(ui.value);
			tailleFont = ui.value;
			$("#tailleFont").val(ui.value);
			$(".box").css("font-size", tailleFont+"em");
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
	});

	$("#btAnnulDefStorApp").click(function()
	{
		$("#confDefStorApp").hide();
	});


	/************************************************/

	///// DRAG & DROP /////

	/************************************************/

	$(".sortable").sortable({
		placeholder: "ui-state-highlight",
		start: function(e, ui){
			ui.placeholder.width(ui.helper.outerWidth());
			ui.placeholder.height(ui.helper.outerHeight());
		},
		update : function(){
			tSort = $(".sortable").sortable('toArray', {attribute: 'data-val'});
			dejaVerifCroissant = false;
			dejaVerifDecroissant = false;
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
			pseudoL = "ordonner-nombres-"+$('#pseudoHd').html();
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
		pseudoL = "ordonner-nombres-"+pseudo;
		lireStorageExercices();
		lireStorageApparence();
		lireStorageProfil();
		verifStor();
	}

});

function lireOptions() {
	$("#"+typActivite).prop("checked", true);
	$("#rd"+typOrdre).prop("checked", true);
	$("#rd"+typNombre).prop("checked", true);
	$("#chApVirg").val(chApVirg);
	if(typNombre=="Decimal") {
		$("#chApVirgBox, #forcDecimal").show();
	}
	else {
		$("#chApVirgBox, #forcDecimal").hide();
	}

	if (chkForcDecimal==true) {forcDecimal=true;$("#chkForcDecimal").prop("checked", true);} else {forcDecimal=false;$("#chkForcDecimal").prop("checked", false);}
	$("#nbItems").val(nbItems);
	$("#nbMin").val(nbMin);
	$("#nbMax").val(nbMax);

	$("#depoCompoBox").css("background", colObjet);
	$("#depoCompoBox, .box, #motifPanel").css("border-color", colBord);
	$("#page, #motifPanel").css("background", colPage);
	$("#colObjet").spectrum("set",colObjet);
	$("#colBord").spectrum("set",colBord);
	$("#colPage").spectrum("set",colPage);
	if (typeof mtfClass!="") {
		$("#motif").removeClass();
		$("#motif").addClass(""+mtfClass);
		$("#mtfClass").val(mtfClass);
	}
	$("#sliderTemp").slider({value: tailleFont});
	$("#handTemp").text(tailleFont);
	$(".box").css("font-size", tailleFont+"em");
	$("#tailleFont").val(tailleFont);

	affichage();
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

function affichage() {

	if (typActivite=="typInteractive") {
		$("#propBtBox").hide();
		$("#btGenerer").show();
	}
	else if (typActivite=="typExercices") {
		$("#btGenerer").hide();
		$("#propBtBox").show();
	}
}