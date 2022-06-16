$(document).ready(function()
{
	/************************************************/

	///// OPTIONS /////

	/************************************************/

	//$("#options").show(); // debug

	/* Type d'activité' */

	$("#typInteractive").click(function(){
		typActivite = $(this).val();
		generer();
		affichage();
	});

	$("#typExercices").click(function(){
		typActivite = $(this).val();
		generer();
		affichage();
	});

	/* Type d'exercices */

	$("#typComposer").click(function(){	
		typExercice = $(this).val();
		generer();
		affichage();
	});


	$("#typEcrire").click(function(){
		typExercice = $(this).val();
		generer();
		affichage();
	});

	/* Type de nombre */

	$("#rdAlignes").click(function(){
		typDisposition = $(this).val();
		generer();
		affichage();
	});

	$("#rdVrac").click(function(){
		typDisposition = $(this).val();
		generer();
		affichage();
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
			$("#depoCompoBox, #digVal, #digComposer, #digEcrire, #signBox, #motifPanel").css("border-color", color);
			colBord = color.toHexString();
		},
		move: function (color) {
			$("#depoCompoBox, #digVal, #digComposer, #digEcrire, #signBox, #motifPanel").css("border-color", color);
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

	/**/

	$("#colObjt").spectrum({
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
			$("#discG, #carreG").css("background", color);
			colObjt = color.toHexString();
			$("#triG").css("border-bottom-color", colObjt);
		},
		move: function (color) {
			$("#discG, #carreG").css("background", color);
			colObjt = color.toHexString();
			$("#triG").css("border-bottom-color", colObjt);
		}
	});

	$("#colObjtBox").find(".sp-preview-inner").css("background-color", "#007fff");
	colObjt = "#007fff";

	/* Affichage des éléments */

	$("#checkDigital").change(function(){
		checkDigital = $("#checkDigital").prop("checked");
		if (checkDigital==true) {$("#digVal").show();} else {$("#digVal").hide();}
	});

	$("#chkSignes").change(function(){
		chkSignes	= $("#chkSignes").prop("checked");
		if (chkSignes==true) {$("#signBox").show();} else {$("#signBox").hide();}
	});

	$("#chkLignes").change(function(){
		chkLignes	= $("#chkLignes").prop("checked");
		affLignes();
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
		loadInit();
		affichage();
		generer();
		zoomSelect();
		affLignes();
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
		affLignes();
	});

	$("#btAnnulDefStorApp").click(function()
	{
		$("#confDefStorApp").hide();
	});

	/************************************************/

	///// APP /////

	/************************************************/

	/* TOOLS */

	tool = "toolFleche";
	$("#toolFleche").css("border-color","rgba(255, 155, 38, 1)");

	$(".tool").click(function(){
		$(".tool").css("border-color","transparent");
		$(this).css("border-color","rgba(255, 155, 38, 1)");
		tool = $(this).attr("id");
	});

	/* Corbeille */

	$("#toolCorb").click(function() {
		if ($('.box').hasClass('ui-selected')) {
			$(".ui-selected").each(function() {
				valCompo -= Number($(this).attr("value"));
				$("#digVal").html(valCompo);
				$(this).fadeOut(300, function () {
					$(this).remove();
				});
			});
		}
		else {
			valCompo = 0;
			$("#digVal").html(valCompo);
			$(".box").fadeOut(300, function () {
				$(this).remove();
			});
		}
	});

	/************************************************/

	///// DISTRIBUTION /////

	/************************************************/

	$("#slctObjForm").val($("#slctObj").val());
	$("#slctObj").on("change", function () {
		slctObjt = $(this).val();
		$("#distForm, #distEmoj, #distDes, #distSchem, #distDgts, #distNbr").hide();
		$("#dist"+slctObjt).css("display", "inline-block");
		$("#slctObjForm").val($(this).val());
		zoomSelect();
		affLignes();
		generer();
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
			pseudoL = "compter-"+$('#pseudoHd').html();
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
		pseudoL = "compter-"+pseudo;
		lireStorageExercices();
		lireStorageApparence();
		lireStorageProfil();
		verifStor();
	}

});

function lireOptions() {

	$("#typ"+typActivite).prop("checked", true);
	$("#typ"+typExercice).prop("checked", true);
	$("#rd"+typDisposition).prop("checked", true);
	$("#nbMin").val(nbMin);
	$("#nbMax").val(nbMax);
	$('#slctObj option[value="'+slctObjt+'"]').prop("selected", true);
	$("#distForm, #distEmoj, #distDes, #distSchem, #distDgts, #distNbr").hide();
	$("#dist"+slctObjt).css("display", "inline-block");
	$("#slctObjForm").val(slctObjt);

	$("#depoCompoBox").css("background", colObjet);
	$("#depoCompoBox, #digVal, #digComposer, #digEcrire, #signBox, #motifPanel").css("border-color", colBord);
	$("#page, #motifPanel").css("background", colPage);
	$("#colObjet").spectrum("set",colObjet);
	$("#colBord").spectrum("set",colBord);
	$("#colPage").spectrum("set",colPage);
	if (mtfClass!="") {
		$("#motif").removeClass();
		$("#motif").addClass(""+mtfClass);
		$("#mtfClass").val(mtfClass);
	}
	if (checkDigital==true) {$("#digVal").show();$("#checkDigital").prop("checked", true);} else {$("#digVal").hide();$("#checkDigital").prop("checked", false);}
	if (chkSignes==true) {$("#signBox").show();$("#chkSignes").prop("checked", true);} else {$("#signBox").hide();$("#chkSignes").prop("checked", false);}
	if (chkLignes==true) {$("#chkLignes").prop("checked", true);} else {$("#chkLignes").prop("checked", false);}

	$("#nbMin, #nbMax").spinner();

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
	platoWidth = Math.floor((pageWidth * 93) / 100);
	platoHeight = Math.floor((pageHeight * 70) / 100);
	$("#depoCompo").css({"width": platoWidth+"px", "height": platoHeight+"px"});
	//$("#distribBox").css({"left": $("#plato").offset().left});
	responsive();
	affichage();
	zoomSelect();
	affLignes();
	generer();
}

/************************************************/

///// RESPONSIVE /////

/************************************************/

function responsive() {
	if ($("#page").width()<1200) {
		reduc = .7;
	}
	else if ($("#page").width()<1300) {
		reduc = .8;
	}
	else {
		reduc = 1;
	}
}

/************************************************/

///// AFFICHAGE /////

/************************************************/

function affichage() {
	if (typActivite=="Interactive") {
		$("#optExercices, #digComposer, #digEcrire, #propBtBox").hide();
		if (checkDigital==true) {
			$("#checkDigital").prop('checked', true);
			$("#digVal").show();
		} 
		else 
		{
			$("#checkDigital").prop('checked', false);
			$("#digVal").hide();
		}
		
		if (chkSignes==true) {
			$("#chkSignes").prop('checked', true);
			$("#signBox").show();
		} 
		else 
		{
			$("#chkSignes").prop('checked', false);
			$("#signBox").hide();
		}
		
		if (chkLignes==true) {
			$("#chkLignes").prop('checked', true);
		} 
		else 
		{
			$("#chkLignes").prop('checked', false);
		}		
		
		$("#checkDigital, #chkSignes, #chkLignes").parent().parent().show();
		$("label[for='checkDigital'], label[for='chkSignes'], label[for='chkLignes']").show();
	}
	else if (typActivite=="Exercices") {

		checkDigital = false;
		chkSignes = false;
		chkLignes = false;

		$("#checkDigital, #chkSignes, #chkLignes").prop('checked', false);
		$("#checkDigital, #chkSignes, #chkLignes").parent().parent().hide();
		$("label[for='checkDigital'], label[for='chkSignes'], label[for='chkLignes']").hide();

		affLignes();
		
		$("#digVal, #signBox").hide();
		$("#optExercices, #propBtBox").show();
		
		if (typExercice=="Composer") {
			$("#digEcrire").hide();
			$("#digComposer").show();
			$("#distribBox, #tools").show();
		}
		else if (typExercice=="Ecrire") {
			$("#digComposer").hide();
			$("#digEcrire").show();
			
			if ('ontouchstart' in window == false) {
				$("#propEcrire").focus();
			}
			else {
				$("#propEcrire").click(function(){
					$("#propEcrire").focus();
				});
			}
		}
	}

	if (typActivite=="Exercices"  && typExercice=="Ecrire") {
		$("#depoCompo").selectable({disabled: true});
		$("#distrib, #tools").hide();
		$("#optDisposition").show();
		$("#depoEcrireBox").show();
	}
	else {
		$("#depoCompo").selectable({disabled: false});
		$(".clonObjt").remove();
		$("#optDisposition").hide();
		$("#depoEcrireBox").hide();
		$("#distrib, #tools").show();
	}
}

/* LIGNES */

function affLignes() {

	if (chkLignes==true) {
		$("#affLignes").css({"width": platoWidth+"px", "height": platoHeight+"px"});		
		$(".ligne").remove();
		nbCol = (Math.floor($("#depoCompo").width() / lignW));
		nbLignes = (Math.floor($("#depoCompo").height() / lignH));
		for (var y = 0; y < nbCol; y++) {
			for (var i = 0; i <= nbLignes; i++) {
				$("#affLignes").append('<div class="ligne"></div>');
			}
		}
		$(".ligne").css({"width":lignW+"px", "height":lignH+"px"});			
	}
	else if (chkLignes==false) {
		$(".ligne" ).remove();
	}
}