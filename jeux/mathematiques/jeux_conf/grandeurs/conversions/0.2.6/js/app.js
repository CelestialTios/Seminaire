$(document).ready(function()
{
	/************************************************/

	///// OPTIONS /////

	/************************************************/

	//$("#options").show(); // debug

	/* Réglages pour l'accueil */

	$("#exoSavSuccesBox, #appSavSuccesBox").hide();
	$("#confDefStorEx, #confDefStorApp").hide();

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
	
	$("#typLire").click(function(){
		typExercice = $(this).val();
		affichage();
		generer();
	});

	$("#typEcrire").click(function(){
		typExercice = $(this).val();
		affichage();
		generer();
	});

	$("#typCompleter").click(function(){
		typExercice = $(this).val();
		affichage();
		generer();
	});

	$("#typConvertir").click(function(){
		typExercice = $(this).val();
		affichage();
		generer();
	});

	/* Type de nombre */
	
	$("#rdEntier").click(function(){
		typNombre = $(this).val();
		$("#affOptDec").hide();
		generer();
	});
	
	$("#rdDecimal").click(function(){
		typNombre = $(this).val();
		$("#affOptDec").show();
		generer();
	});

	/* Nombre de chiffres */

	$("#nbChifEnt")
	.on('input', function() {
		nbChifEnt = parseInt($(this).val());
		//verfifNbChiff();
	})
	.on('change', function() {
		nbChifEnt = parseInt($(this).val());
		verfifNbChiff();
		generer();
	})
	.focusout(function() {
		verfifNbChiff();
		generer();
	});

	$("#nbChifDec")
	.on('input', function() {
		nbChifDec = parseInt($(this).val());
		verfifNbChiff();
	})
	.on('change', function() {
		nbChifDec = parseInt($(this).val());
		verfifNbChiff();
		generer();
	})
	.focusout(function() {
		verfifNbChiff();
		generer();
	});

	function verfifNbChiff() {		

		if (nbChifEnt>3) {
			nbChifEnt = 3;
			$("#nbChifEnt").val(nbChifEnt);
		}
		else if (nbChifEnt<1) {
			nbChifEnt = 1;
			$("#nbChifEnt").val(nbChifEnt);
		}

		if (nbChifDec>3) {
			nbChifDec = 3;
			$("#nbChifDec").val(nbChifDec);
		}
		else if (nbChifDec<1) {
			nbChifDec = 1;
			$("#nbChifDec").val(nbChifDec);
		}

		if ($("#nbChifEnt").val()=='') {
			$("#nbChifEnt").val(1);
			nbChifEnt = 1;
		}
	}

	/* Aléatoire */

	$("#chkAleaEnt").change(function(){
		chkAleaEnt = $("#chkAleaEnt").prop("checked");	
		if (chkAleaEnt==true) {$("#nbChifEnt").prop("disabled", true);} else {$("#nbChifEnt").prop("disabled", false);nbChifEnt = parseInt($("#nbChifEnt").val());}
		generer();
	});

	$("#chkAleaDec").change(function(){
		chkAleaDec = $("#chkAleaDec").prop("checked");	
		if (chkAleaDec==true) {$("#nbChifDec").prop("disabled", true);} else {$("#nbChifDec").prop("disabled", false);nbChifDec = parseInt($("#nbChifDec").val());}
		generer();
	});

	/* Grandeurs */

	$("#slctGrdrs").on("change", function () {
		slctGrdrsIndex = $(this).prop('selectedIndex');
		$("#slctGrdrsIndex").val(slctGrdrsIndex);
		grndr = $(this).val();
		constUntDepArr();
		generer();
	});

	/**/

	$("#slctUntDep").on("change", function () {
		if (typExercice=="Convertir" && $(this).prop('selectedIndex')==slctUntArrIndex && $(this).prop('selectedIndex')!=7) {
			alert("Choisis une unité de départ différente de l'unité d'arrivée.");
			$("#slctUntDep").prop('selectedIndex', slctUntDepIndex);
			$("#slctUntDepIndex").val(slctUntDepIndex);
		}
		else {
			slctUntDepIndex = $(this).prop('selectedIndex');
			$("#slctUntDepIndex").val(slctUntDepIndex);
			generer();
		}
			
	});

	$("#slctUntArr").on("change", function () {
		if (typExercice=="Convertir" && $(this).prop('selectedIndex')==slctUntDepIndex && $(this).prop('selectedIndex')!=7) {
			alert("Choisis une unité d'arrivée différente de l'unité de départ.");
			$("#slctUntArr").prop('selectedIndex', slctUntArrIndex);
			$("#slctUntArrIndex").val(slctUntArrIndex);
		}
		else {
			slctUntArrIndex = $(this).prop('selectedIndex');
			$("#slctUntArrIndex").val(slctUntArrIndex);
			generer();
		}
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
			$("#depoCompoBox, #propVal, #propUnt, #propValConv, #motifPanel").css("border-color", color);
			colBord = color.toHexString();
		},
		move: function (color) {
			$("#depoCompoBox, #propVal, #propUnt, #propValConv, #motifPanel").css("border-color", color);
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

	$("#chkTab").change(function(){
		chkTab = $("#chkTab").prop("checked");	
		if (chkTab==true) {$(".vTab").show();} else {$(".vTab").hide();}	
	});

	/* Enregistrer options exercices*/

	$("#btStorEx").click(function() {
		if (typNombre=="Entier") {
			nbChifDec = $("#nbChifDec").val();
		}
		ecrireStorageExercices();
	});

	$("#btDefStorEx").click(function() {
		$("#confDefStorEx").show();
	});

	$("#btConfDefStorEx").click(function() {
		defautStorageExercices();
		$("#confDefStorEx").hide();
		constUntDepArr();
		affichage();
		generer();
	});

	$("#btAnnulDefStorEx").click(function() {
		$("#confDefStorEx").hide();
	});

	/* Enregistrer apparence*/

	$("#btStorApp").click(function() {
		ecrireStorageApparence();
	});

	$("#btDefStorApp").click(function() {
		$("#confDefStorApp").show();
	});

	$("#btConfDefStorApp").click(function() {
		defautStorageApparence();
		$("#confDefStorApp").hide();
	});

	$("#btAnnulDefStorApp").click(function() {
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
			pseudoL = "conversions-"+$('#pseudoHd').html();
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
		pseudoL = "conversions-"+pseudo;
		lireStorageExercices();
		lireStorageApparence();
		lireStorageProfil();
		verifStor();
	}

});

function lireOptions() {

	$("#typ"+typActivite).prop("checked", true);
	$("#typ"+typExercice).prop("checked", true);
	$("#rd"+typNombre).prop("checked", true);
	if (typNombre=="Entier") {
		$("#affOptDec").hide();
	}
	else if (typNombre=="Decimal") {
		$("#affOptDec").show();
	}
	$("#nbChifEnt").val(nbChifEnt);
	$("#nbChifDec").val(nbChifDec);
	if (chkAleaEnt==true) {$("#nbChifEnt").prop("disabled", true);$("#chkAleaEnt").prop("checked", true);} else {$("#nbChifEnt").prop("disabled", false);$("#chkAleaEnt").prop("checked", false);}
	if (chkAleaDec==true) {$("#nbChifDec").prop("disabled", true);$("#chkAleaDec").prop("checked", true);} else {$("#nbChifDec").prop("disabled", false);$("#chkAleaDec").prop("checked", false);}
	$("#slctGrdrs").prop('selectedIndex', slctGrdrsIndex);
	$("#slctGrdrsIndex").val(slctGrdrsIndex);

	$("#depoCompoBox").css("background", colObjet);
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

	if (chkTab==true) {$(".vTab").show();$("#chkTab").prop("checked",true);} else {$(".vTab").hide();$("#chkTab").prop("checked",false);}

	$("#nbChifEnt, #nbChifDec").spinner();

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

tbInpts = ["Ku", "Hu", "Dau", "U", "Du", "Cu", "Mu"];

tbGrndrs = [
	["Longueurs", "m", "mètre"],
	["Masses", "g", "gramme"],
	["Capacités", "l", "litre"],
	["Surfaces", "m²", "mètre"],
	["Volumes", "m³", "mètre"]
];

tbUnts = [
	["k", "kilo"],
	["h", "hecto"],
	["da", "déca"],
	["", ""],
	["d", "déci"],
	["c", "centi"],
	["m", "milli"]
];

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
	tdWidth = platoWidth/10;
	$(".td").css({"width": tdWidth+"px"});
	tbodyHeight = pageHeight/4;
	$(".td, .sepCol").css({"height": tbodyHeight+"px"});
	constUntDepArr();
	affichage();
	generer();
}

function affichage() {
	if (typActivite=="Interactive") {
		$('#alertT').css({'display':'inline-block'});
		$(".blocOptMenu2, #vers, #slctUntArr, #propVal, #propUnt, #egal, #propValConv, #affUntConv, #propBtBox").hide();
		$("#digitalBox").show();
		$("#affVal, #affUnt").show();
	}
	else if (typActivite=="Exercices") {
		$('#alertT').css({'display':'none'});
		$(".blocOptMenu2, #propBtBox").show();
		if (typExercice=="Lire") {
			$("#vers, #slctUntArr").hide();
			$("#propVal, #propUnt").hide();
			$("#egal, #propValConv, #affUntConv").hide();
			$("#affVal, #affUnt").show();
		}
		else if (typExercice=="Ecrire") {
			$("#vers, #slctUntArr").hide();
			$("#affVal, #affUnt").hide();
			$("#egal, #propValConv, #affUntConv").hide();
			$("#digitalBox").show();
			$("#propVal, #propUnt").show();
			if ('ontouchstart' in window == false) {
				$("#propVal").focus();
			}
			$("#propVal").on('input change', function() {
				$(this).val($.trim($(this).val()).replace(/\s+/g,'').replace('.',','));
			});
			$("#propUnt").on('input change', function() {
				$(this).val($.trim($(this).val()).replace(/\s+/g,'').replace('2','²').replace('3','³'));
			});
		}
		else if (typExercice=="Completer") {
			$("#propVal, #propUnt").hide();
			$("#vers, #slctUntArr").hide();
			$("#egal, #propValConv, #affUntConv").hide();
			$("#digitalBox").show();
			$("#affVal, #affUnt").show();
			$(".propTab").on('input change', function() {
				$(this).val($.trim($(this).val()).replace(/\s+/g,'').replace('.',',')).removeClass("incorrect");
			});
		}
		else if (typExercice=="Convertir") {
			$("#propVal, #propUnt").hide();
			$("#vers, #slctUntArr").show();
			$("#digitalBox").show();
			$("#affVal, #affUnt").show();
			$("#egal, #propValConv, #affUntConv").show();
			if ('ontouchstart' in window == false) {
				$("#propValConv").focus();
			}
			$("#propValConv").on('input change', function() {
				$(this).val($.trim($(this).val()).replace(/\s+/g,'').replace('.',','));
			});
		}
	}
}

function constUntDepArr() {
	$("#slctUntDep, #slctUntArr").html("");
	untGrndr = tbGrndrs[slctGrdrsIndex][1];
	for (var i = 0; i < 7; i++) {
		$("#slctUntDep, #slctUntArr").append('<option value="'+tbUnts[i][0]+untGrndr+'">'+tbUnts[i][0]+untGrndr+'</option>');
	}
	$("#slctUntDep, #slctUntArr").append('<option value="Aléatoire">Aléatoire</option>');
	$("#slctUntDep").prop('selectedIndex', slctUntDepIndex);
	$("#slctUntDepIndex").val(slctUntDepIndex);
	$("#slctUntArr").prop('selectedIndex', slctUntArrIndex);
	$("#slctUntArrIndex").val(slctUntArrIndex);
	$(".unt").html(untGrndr);
}