$(document).ready(function()
{
	/************************************************/

	///// OPTIONS /////

	/************************************************/

	$("#digTemp").spinner();

	/* Réglages pour l'accueil */

	$("#typInteractive").prop("checked", true);

	$("#typEcrire").prop("checked", true);

	$("#typNombre").prop("checked", true);

	$("#optExercices").hide();

	$("#exoSavSuccesBox, #appSavSuccesBox").hide();
	$("#confDefStorEx, #confDefStorApp").hide();

	if (!$("#dateHd").length) {
		$("#optApparence").hide();
	}
	$("#btApparence").click(function()
	{
		$("#optApparence").toggle();
	});

	$("#colMercure").spectrum({
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
			$("#colonne, #boule").css("background", color);
			colMercure = color.toHexString();
		},
		move: function (color) {
			$("#colonne, #boule").css("background", color);
			colMercure = color.toHexString();
		}
	});

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
			$("#thermometreBord, #colonneBox, #digitalBox").css("background", color);
			colObjet = color.toHexString();
		},
		move: function (color) {
			$("#thermometreBord, #colonneBox, #digitalBox").css("background", color);
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
			$("#thermometreBord, #digitalBox, #motifPanel").css("border-color", color);
			colBord = color.toHexString();
		},
		move: function (color) {
			$("#thermometreBord, #digitalBox, #motifPanel").css("border-color", color);
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

	$("#checkMercure").change(function(){
		checkMercure = $("#checkMercure").prop("checked");	
		if (checkMercure==true) {$("#colonne, #boule").show();} else {$("#colonne, #boule").hide();}	
	});

	$("#checkDigital").change(function(){
		checkDigital = $("#checkDigital").prop("checked");	
		if (checkDigital==true) {$("#digital").show();} else {$("#digital").hide();}	
	});

	$("#checkCoul").change(function(){
		checkCoul	= $("#checkCoul").prop("checked");	
		if (checkCoul==true) {$("#coul").show();} else {$("#coul").hide();}	
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

	/************************************************/

	///// THERMOMETRE /////

	/************************************************/

	/* Déplacer la colonne selon la position de la souris */

	function moveColonne() {

		if (typExercice=="typMercure") {
			dejaVerifMerc = false;
			$("#digMercTemp").removeClass("incorrect");
		}		

		var heightColBox = $("#colonneBox").css("height").replace("px", "");

		var posMouseY = event.pageY - ($("#colonneBox").offset().top);
		if (posMouseY>=(41*coefHeight)) {
			posMouseY = Math.ceil(posMouseY);
		}
		else {
			posMouseY = Math.floor(posMouseY);
		}

		var Y = heightColBox - posMouseY;
		$('#colonne').css("height", Y+"px");
		
		if (Y>=(30*coefHeight)+10) {
			$('#digTemp').val(Math.floor((Y-10)/coefHeight)-30);
		}
		else {
			$('#digTemp').val(Math.ceil((Y-10)/coefHeight)-30);
		}
	}

	function down(e, mobile) {
		if (typActivite=="typInteractive" || (typActivite=="typExercices" && typExercice=="typMercure")) {
			moveColonne();
			if (!mobile) {
				$("#thermometre").bind('mousemove', function(e) {
					move(e, false);
				});
			}
		}			
	}

	function move(e, mobile) {
		if (mobile) {
			e.preventDefault();
		}
		moveColonne();
	}

	function up(e, mobile) {
		$('#thermometre').unbind('mousemove');
	}

	function evenements(cible) {
		/* Mobile */
		cible.bind('touchstart', function(e) {
			down(e, true);
		});
		cible.bind('touchmove', function(e) {
			if (typActivite=="typInteractive" || (typActivite=="typExercices" && typExercice=="typMercure")) {
				move(e, true);
			}
		});
		cible.bind('touchend', function() {
			up(e, true);
		});

		/* Souris */
		cible.mousedown(function(e) {
			down(e, false);
		});
		cible.mouseup(function(e) {
			up(e, false);
		});
	}
	evenements($("#thermometre"));

	/************************************************/

	///// DIGITAL /////

	/************************************************/

	defHeight();

	temp = 27;
	$("#digTemp").val(27);
	height = (temp * coefHeight) + (30 * coefHeight) + 10;
	$("#colonne").css("height", height+"px");

	/* Incrémentation du mercure */

	$("#digTemp").on('input', function() {
		temp = $("#digTemp").val();
		movTemp();
	});

	/* Déplacement du mercure depuis le slider */

	handleTemp = $("#handTemp");
	sliderTemp = $("#sliderTemp").slider({
		min: -10,
		max: 10,
		value: 0,
		create: function() {
			handleTemp.text($(this).slider("value"));
		},
		slide: function(event, ui) {			
			if (ui.value>0) {
				handleTemp.text("+"+ui.value);
			}
			else {
				handleTemp.text(ui.value);				
			}
			slidVal = handleTemp.text();
		}
	});

	slidVal = 0;

	$("#handTemp").click(function(){
		if (parseInt(slidVal)==0) {
			temp = 0;
		}
		else {
			temp = parseInt($('#digTemp').val()) + parseInt(slidVal);
			if (temp>=41) {
				temp = 41;
			}
			else if (temp<=-30) {
				temp = -30;
			}
		}			
		movTemp();
		$("#digTemp").val(temp);
	});

	/************************************************/

	///// PROFIL /////

	/************************************************/
	
	$("#affPseudo").click(function(){
		$("#profilBox").toggle();
		affProfil();
	});

	function affProfil() {

		$("#profil").css({"background-color":colPage, "border-color":colBord}).addClass(""+mtfClass);
		$("#profilHd").css({"background-color":colObjet, "border-color":colBord});

		lireStorageProfil();			

		if (ecrireTemp!="0/0") {
			var savEcrireTemp = ecrireTemp.split('/');
			var savSuccesEcrireTemp = parseInt(savEcrireTemp[0]);
			var nbSuccesEcrireNew = nbSuccesTemp + savSuccesEcrireTemp;
			var savVerifEcrireTemp = parseInt(savEcrireTemp[1]);
			var percentEcrire = Math.floor((savSuccesEcrireTemp * 100) / savVerifEcrireTemp)+"%";
		}
		else {
			var percentEcrire = "";
		}

		if (composerTemp!="0/0") {
			var savComposerTemp = composerTemp.split('/');
			var savSuccesComposerTemp = parseInt(savComposerTemp[0]);
			var nbSuccesComposerNew = nbSuccesMerc + savSuccesComposerTemp;
			var savVerifComposerTemp = parseInt(savComposerTemp[1]);
			var percentComposer = Math.floor((savSuccesComposerTemp * 100) / savVerifComposerTemp)+"%";
		}
		else {
			var percentComposer = "";
		}

		$("#graphEcrire").text(percentEcrire);
		$("#graphComposer").text(percentComposer);

		$("#resultEcrire").text("Ecrire la température : "+ecrireTemp);
		$("#resultComposer").text("Placer le mercure : "+composerTemp);

		$(".collectBox").css({"background-color":colObjet, "border-color":colBord});
		$(".emojiX").css({"background-color":"rgba(255, 255, 255, 0.3)"/*, "color":colPage*/});

		$("#profilHd").text("Profil de "+pseudo);

		for (var i = 0; i < collectSmiley.length; i++) {
			if (tabSmiley.indexOf(collectSmiley[i])) {
				$("#emojiBox-"+collectSmiley[i]).html('<div class="emoji">&#'+collectSmiley[i]+'</div>');
			}
		}
		for (var i = 0; i < collectAlim.length; i++) {
			if (tabAlim.indexOf(collectAlim[i])) {
				$("#emojiBox-"+collectAlim[i]).html('<div class="emoji">&#'+collectAlim[i]+'</div>');
			}
		}
		for (var i = 0; i < collectAnimal.length; i++) {
			if (tabAnimal.indexOf(collectAnimal[i])) {
				$("#emojiBox-"+collectAnimal[i]).html('<div class="emoji">&#'+collectAnimal[i]+'</div>');
			}
		}
		
		nbSuccesTemp = nbVerifTemp = nbSuccesMerc = nbVerifMerc = 0;
		$("#succesEcrire").text("");
		$("#succesComposer").text("");
	}

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
			pseudoL = "thermometre-"+$('#pseudoHd').html();
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
		pseudoL = "thermometre-"+pseudo;
		lireStorageExercices();
		lireStorageApparence();
		lireStorageProfil();
		verifStor();
	}
});

function lireOptions() {

	$("#"+typActivite).prop("checked", true);
	if (typActivite=='typExercices') {
		$("#optExercices").show();
	}
	$("#"+typExercice).prop("checked", true);
	$("#"+typNombre).prop("checked", true);

	$("#colonne, #boule").css("background", colMercure);
	$("#thermometreBord, #colonneBox, #digitalBox").css("background", colObjet);
	$("#thermometreBord, #digitalBox, #motifPanel").css("border-color", colBord);
	$("#page, #motifPanel").css("background", colPage);
	$("#colMercure").spectrum("set",colMercure);
	$("#colObjet").spectrum("set",colObjet);
	$("#colBord").spectrum("set",colBord);
	$("#colPage").spectrum("set",colPage);
	if (mtfClass!="") {
		$("#motif").removeClass();
		$("#motif").addClass(""+mtfClass);
		$("#mtfClass").val(mtfClass);
	}
	if (checkMercure==true) {$("#colonne, #boule").show();$("#checkMercure").prop("checked", true);} else {$("#colonne, #boule").hide();$("#checkMercure").prop("checked", false);}
	if (checkDigital==true) {$("#digital").show();$("#checkDigital").prop("checked", true);} else {$("#digital").hide();$("#checkDigital").prop("checked", false);}
	if (checkCoul==true) {$("#coul").show();$("#checkCoul").prop("checked", true);} else {$("#coul").hide();$("#checkCoul").prop("checked", false);}

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
	}
}

function chargement() {
	setTimeout(voirPage, 100);
}

function voirPage() {
	$("#accueil").hide();
	$("#page").show();
}