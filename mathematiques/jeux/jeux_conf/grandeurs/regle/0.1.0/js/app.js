$(document).ready(function()
{

	/* REGLE */

	function creerRegle() {

		pageWidth = $("#page").width();
		pageHeight = $("#page").height();
		regleWidth = (pageWidth*80)/100;
		gradWidth = (regleWidth*98)/100;

		$("#depoCompoBox").css({"width":(pageWidth*90)/100+"px", "height":(pageHeight*60)/100+"px"});

		$("#rglDrag").css({"transform":"translateX(-50%)"});
		$("#regle, #rglDrag").css({"width":regleWidth+"px"});
		$("#grad").css({"width":gradWidth+"px"});
		
		/* Graduations */

		grad1Decal = gradWidth/200;
		grad5Decal = gradWidth/40;
		grad10Decal = gradWidth/20;

		/*grad1Decal = Number.parseFloat(gradWidth/200).toFixed(3);
		grad5Decal = Number.parseFloat(gradWidth/40).toFixed(3);
		grad10Decal = Number.parseFloat(gradWidth/20).toFixed(3);*/

		for (var i=0; i<=200; i++) {
			$("#grad").append('<div id="gradUn-'+i+'" class="gradUn"></div>');
			$("#gradUn-"+i).css({"left":i*grad1Decal+"px"});
		}

		for (var i=0; i<=40; i++) {
			$("#grad").append('<div id="gradCnq-'+i+'" class="gradCnq"></div>');
			$("#gradCnq-"+i).css({"left":i*grad5Decal+"px"});
		}

		for (var i=0; i<=20; i++) {
			$("#grad").append('<div id="gradDix-'+i+'" class="gradDix"><div class="chf">'+i+'</div></div>');
			$("#gradDix-"+i).css({"left":i*grad10Decal+"px"});
		}
	}

	creerRegle();

	/************************************************/

	///// OPTIONS /////

	/************************************************/

	//$("#options").show(); // debug

	/* Réglages pour l'accueil */

	$("#exoSavSuccesBox, #appSavSuccesBox").hide();
	$("#confDefStorEx, #confDefStorApp").hide();

	/* Type d'activité' */

	typActivite="typInteractive";
	$("#propBtBox").hide();

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

	/* Options des exercices */

	/* Type Objet */

	typObjet = "Trait";
	
	$("#rdTrait").click(function()
	{
		typObjet = $(this).val();
		$("#btCote").hide();
		generer();
	});
	

	$("#btCote").hide();
	$("#rdObjet").click(function()
	{
		typObjet = $(this).val();
		$("#btCote").show();
		generer();
	});

	$("#checkCote").change(function(){
		checkCote = $("#checkCote").prop("checked");	
		if (checkCote==true) {$("#objet").addClass("objet");} else {$("#objet").removeClass("objet");}	
	});

	/* Type de nombre */

	typNombre = "Entier";
	
	$("#rdEntier").click(function()
	{
		typNombre = $(this).val();
		generer();
	});
	
	$("#rdDecimal").click(function()
	{
		typNombre = $(this).val();
		generer();
	});

	$("#btGenerer").click(function(){
		generer();
	});

	/* Type Orientation */

	typOrientation = "Horizontal";
	
	$("#rdHorizontal").click(function()
	{
		typOrientation = $(this).val();
		generer();
	});
	
	$("#rdVertical").click(function()
	{
		typOrientation = $(this).val();
		generer();
	});
	
	$("#rdAleatoire").click(function()
	{
		typOrientation = $(this).val();
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
			$("#depoCompoBox, #propNbrBox").css("background", color);
			colObjet = color.toHexString();
		},
		move: function (color) {
			$("#depoCompoBox, #propNbrBox").css("background", color);
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
			$("#depoCompoBox, #propNbrBox, #motifPanel").css("border-color", color);
			colBord = color.toHexString();
		},
		move: function (color) {
			$("#depoCompoBox, #propNbrBox, #motifPanel").css("border-color", color);
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

	/* Slider Transparence */

	$("#sliderTemp").slider({
		min: 0,
		max: 10,
		value: 7,
		create: function() {
			$("#handTemp").text($(this).slider("value"));
		},
		slide: function(event, ui) {			
			$("#handTemp").text(ui.value);
			transparence = ui.value;
			$("#transparence").val(ui.value);
			$("#regle").css("background-color", "rgba(255, 224, 102, "+transparence/10+")");
		}
	});

	$("#checkDixieme").change(function(){
		checkDixieme = $("#checkDixieme").prop("checked");	
		if (checkDixieme==true) {$(".gradUn").show();} else {$(".gradUn").hide();}	
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

	///// APP /////

	/************************************************/

	/* Boutons de la règle */

	$("#btRglHrz").click(function()
	{
		$("#regle").css({"transform":"rotate(0deg)", "top":"50%"});
		$("#rglBox").css({"top":"50%"});
	});

	$("#btRglVrt").click(function()
	{
		$("#regle").css({"transform":"rotate(90deg)"});
		$("#rglBox").css({"top":"60%"});
	});

	$('#rglBox').draggable({
		handle: '#regle',
		stop: function() {
			if ('ontouchstart' in window == false) {
				$("#propNbr").focus();
			}
		}
	});

	/* Rotation */
	$('#regle').draggable({
		handle: '#btRglRot',
		opacity: 0.001,
		helper: 'clone',
		drag: function(event) {
			var
			pw = document.getElementById('regle'),
			pwBox = pw.getBoundingClientRect(),
			center_x = (pwBox.left + pwBox.right) / 2,
			center_y = (pwBox.top + pwBox.bottom) / 2,
			mouse_x = event.pageX,
			mouse_y = event.pageY,
			radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
			degree = Math.round((radians * (180 / Math.PI) * -1) + 100);
			var rotateCSS = 'rotate(' + (degree + 175) + 'deg)';
			$('#regle').css({
			'-moz-transform': rotateCSS,
			'-webkit-transform': rotateCSS
			});
		},
		stop: function() {
			if ('ontouchstart' in window == false) {
				$("#propNbr").focus();
			}
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
			pseudoL = "regle-"+$('#pseudoHd').html();
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
		pseudoL = "regle-"+pseudo;
		lireStorageExercices();
		lireStorageApparence();
		lireStorageProfil();
		verifStor();
	}

});

function chargement() {
	setTimeout(voirPage, 100);
}

function voirPage() {
	$("#accueil").hide();
	$("#page").show();
}

function lireOptions() {
	$("#"+typActivite).prop("checked", true);
	$("#rd"+typObjet).prop("checked", true);
	$("#rd"+typNombre).prop("checked", true);
	$("#rd"+typOrientation).prop("checked", true);
	if (typObjet=="Objet") {
		$("#btCote").show();
	}
	else {
		$("#btCote").hide();
	}
	if (checkCote==true) {$("#objet").addClass("objet");$("#checkCote").prop("checked", true);} else {$("#objet").removeClass("objet");$("#checkCote").prop("checked", false);}

	$("#depoCompoBox, #propNbrBox").css("background", colObjet);
	$("#depoCompoBox, .box, #motifPanel, #propNbrBox").css("border-color", colBord);
	$("#page, #motifPanel").css("background", colPage);
	$("#colObjet").spectrum("set",colObjet);
	$("#colBord").spectrum("set",colBord);
	$("#colPage").spectrum("set",colPage);
	if (mtfClass!="") {
		$("#motif").removeClass();
		$("#motif").addClass(""+mtfClass);
		$("#mtfClass").val(mtfClass);
	}
	$("#sliderTemp").slider({value: transparence});
	$("#handTemp").text(transparence);
	$("#regle").css("background-color", "rgba(255, 224, 102, "+transparence/10+")");
	if (checkDixieme==true) {$(".gradUn").show();$("#checkDixieme").prop("checked", true);} else {$(".gradUn").hide();$("#checkDixieme").prop("checked", false);}

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

/************************************************/

///// AFFICHAGE /////

/************************************************/

function affichage() {
	if (typActivite=="typInteractive") {
		$('#alertT').css({'display':'inline-block'});
		$("#propBtBox").hide();
	}
	else if (typActivite=="typExercices") {
		$('#alertT').css({'display':'none'});
		$("#propBtBox").show();
	}
}