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
		generer();
	});

	$("#optExercices").hide();

	$("#typExercices").click(function(){
		typActivite = $(this).val();
		generer();
	});

	/* Options des exercices */

	/* Type d'exercices */

	$("#typMesurer").click(function(){
		typExercice = $(this).val();
		generer();
	});

	$("#typFormer").click(function(){
		typExercice = $(this).val();
		generer();
	});

	$("#btGenerer").click(function(){
		generer();
	});

	/* Min et max */

	$("#nbMin")
	.on('input', function() {
		if ($(this).val()!='') {
			nbMin = parseInt($(this).val());
			if (nbMin>nbMax-1) {
				nbMin = nbMax-1;
				$("#nbMin").val(nbMin);
			}
		}
	})
	.on('change', function() {
		if ($(this).val()!='') {
			nbMin = parseInt($(this).val());
			if (nbMin>nbMax-1) {
				nbMin = nbMax-1;
				$("#nbMin").val(nbMin);
			}
		}
		else {
			$(this).val(nbMin);
		}
		generer();
	})
	.focusout(function() {
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
		generer();
	})
	.focusout(function() {
		generer();
	});

	/* Orientation */

	$("#segOrMin")
	.on('input', function() {
		if ($(this).val()!='') {
			segOrMin = parseInt($(this).val());
			if (segOrMin>=360) {
				segOrMin = 0;
				$("#segOrMin").val(segOrMin);
			}
			if (segOrMin>segOrMax) {
				$("#segOrMax").val(segOrMin);
			}
		}
	})
	.on('change', function() {
		if ($(this).val()!='') {
			segOrMin = parseInt($(this).val());
			if (segOrMin>=360) {
				segOrMin = 0;
				$("#segOrMin").val(segOrMin);
			}
			if (segOrMin>segOrMax) {
				$("#segOrMax").val(segOrMin);
			}
		}
		else {
			$(this).val(segOrMin);
		}
		generer();
	})
	.focusout(function() {
		generer();
	});

	$("#segOrMax")
	.on('input', function() {
		if ($(this).val()!='') {
			segOrMax = parseInt($(this).val());
			if (segOrMax>=360) {
				segOrMax = 0;
				$("#segOrMax").val(segOrMax);
			}
			if (segOrMax<segOrMin) {
				$("#segOrMin").val(segOrMax);
			}
		}
	})
	.on('change', function() {
		if ($(this).val()!='') {
			segOrMax = parseInt($(this).val());
			if (segOrMax>=360) {
				segOrMax = 0;
				$("#segOrMax").val(segOrMax);
			}
		}
		else {
			$(this).val(segOrMax);
		}
		generer();
	})
	.focusout(function() {
		generer();
	});

	/* Apparence */

	if (!$("#dateHd").length) {
		$("#optApparence").hide();
	}
	$("#btApparence").click(function()
	{
		$("#optApparence").toggle();
		if ($("#optApparence").css("display")=="inline-block") {
		}
		if ($("#optApparence").css("display")=="none" && $("#optExercices").css("display")=="none") {
		}
	});

	$("#optSav").hide();

	// Spectrum

	$("#colAngl").spectrum({
		showInput: true,
		showInitial: true,
		showPalette: true,
		cancelText: "Annuler",
		chooseText: "Choisir",
		containerClassName: "colPickCnt",
		replacerClassName: "colPick",
		palette: maPalette,
		preferredFormat: "hex",
		change: function (color) {$(".pie1, .pie2, .pie3").css("background", color);colAngl = color.toHexString();},
		move: function (color) {$(".pie1, .pie2, .pie3").css("background", color);colAngl = color.toHexString();}
	});

	$("#colSeg1").spectrum({
		showInput: true,
		showInitial: true,
		showPalette: true,
		cancelText: "Annuler",
		chooseText: "Choisir",
		containerClassName: "colPickCnt",
		replacerClassName: "colPick",
		palette: maPalette,
		preferredFormat: "hex",
		change: function (color) {$(".barSeg1").css("background", color);colSeg1 = color.toHexString();},
		move: function (color) {$(".barSeg1").css("background", color);colSeg1 = color.toHexString();}
	});

	$("#colSeg2").spectrum({
		showInput: true,
		showInitial: true,
		showPalette: true,
		cancelText: "Annuler",
		chooseText: "Choisir",
		containerClassName: "colPickCnt",
		replacerClassName: "colPick",
		palette: maPalette,
		preferredFormat: "hex",
		change: function (color) {$(".barSeg2").css("background", color);colSeg2 = color.toHexString();},
		move: function (color) {$(".barSeg2").css("background", color);colSeg2 = color.toHexString();}
	});

	/***/

	$("#colGradExt").spectrum({
		showInput: true,
		showInitial: true,
		showPalette: true,
		cancelText: "Annuler",
		chooseText: "Choisir",
		containerClassName: "colPickCnt",
		replacerClassName: "colPick",
		palette: maPalette,
		preferredFormat: "hex",
		change: function (color) {$(".num10Ext").css("color", colGradExt);$(".bar10Ext, .bar5Ext, .bar1Ext").css("background", color);colGradExt = color.toHexString();},
		move: function (color) {$(".num10Ext").css("color", colGradExt);$(".bar10Ext, .bar5Ext, .bar1Ext").css("background", color);colGradExt = color.toHexString();}
	});

	$("#colGradInt").spectrum({
		showInput: true,
		showInitial: true,
		showPalette: true,
		cancelText: "Annuler",
		chooseText: "Choisir",
		containerClassName: "colPickCnt",
		replacerClassName: "colPick",
		palette: maPalette,
		preferredFormat: "hex",
		change: function (color) {$(".num10Int").css("color", colGradInt);$(".bar10Int, .bar5Int, .bar1Int").css("background", color);colGradInt = color.toHexString();},
		move: function (color) {$(".num10Int").css("color", colGradInt);$(".bar10Int, .bar5Int, .bar1Int").css("background", color);colGradInt = color.toHexString();}
	});

	/***/

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
			$("#depoCompoBox, #digCompoBox, #formerBox, #propNbrBox").css("background", color);
			colObjet = color.toHexString();
		},
		move: function (color) {
			$("#depoCompoBox, #digCompoBox, #formerBox, #propNbrBox").css("background", color);
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
			$("#depoCompoBox, #digCompoBox, #formerBox, #propNbrBox, #motifPanel").css("border-color", color);
			colBord = color.toHexString();
		},
		move: function (color) {
			$("#depoCompoBox, #digCompoBox, #formerBox, #propNbrBox, #motifPanel").css("border-color", color);
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
	
	$("#rd180").click(function(){
		typRapp = $(this).val();
		creerRapp();
	});
	
	$("#rd360").click(function(){
		typRapp = $(this).val();
		creerRapp();
	});

	/* Slider Transparence */

	$("#sliderTemp").slider({
		min: 0,
		max: 10,
		value: 5,
		create: function() {
			$("#handTemp").text($(this).slider("value"));
		},
		slide: function(event, ui) {			
			$("#handTemp").text(ui.value);
			transparence = ui.value;
			$("#transparence").val(ui.value);
			$("#rapp, #btRappRot").css("background-color", "rgba(255, 255, 255, "+transparence/10+")");
		}
	});

	/***/

	$("#chkHor").change(function(){
		chkHor = $("#chkHor").prop("checked");	
		if (chkHor==true) {$("#chkHor").prop("checked", true);$("#gradExtBox").show();} else {$("#chkHor").prop("checked", false);$("#gradExtBox").hide();}	
	});

	$("#chkAntiHor").change(function(){
		chkAntiHor = $("#chkAntiHor").prop("checked");	
		if (chkAntiHor==true) {$("#chkAntiHor").prop("checked", true);$("#gradIntBox").show();} else {$("#chkAntiHor").prop("checked", false);$("#gradIntBox").hide();}	
	});

	$("#checkDigital").change(function(){
		checkDigital = $("#checkDigital").prop("checked");	
		if (checkDigital==true) {$("#digCompoBox").show();} else {$("#digCompoBox").hide();}	
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

	///// INIT /////

	/************************************************/

	if ($("#rd180").prop("checked", true)) {
		typRapp = 180;
	}
	else {
		typRapp = 360;
	}

	window.onresize = initSize;

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
			pseudoL = "rapporteur-"+$('#pseudoHd').html();
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
		pseudoL = "rapporteur-"+pseudo;
		lireStorageApparence();
		lireStorageProfil();
		verifStor();
	}

});

function lireOptions() {
	$("#"+typActivite).prop("checked", true);
	$("#"+typExercice).prop("checked", true);
	$(".pie1, .pie2, .pie3").css("background", colAngl);
	$(".barSeg1").css("background", colSeg1);
	$(".barSeg2").css("background", colSeg2);
	$("#depoCompoBox, #digCompoBox, #formerBox, #propNbrBox").css("background", colObjet);
	$("#depoCompoBox, #digCompoBox, #formerBox, #propNbrBox, #motifPanel").css("border-color", colBord);
	$("#page, #motifPanel").css("background", colPage);
	$("#colAngl").spectrum("set",colAngl);
	$("#colSeg1").spectrum("set",colSeg1);
	$("#colSeg2").spectrum("set",colSeg2);
	$("#colObjet").spectrum("set",colObjet);
	$("#colBord").spectrum("set",colBord);
	$("#colPage").spectrum("set",colPage);
	if (mtfClass!="") {
		$("#motif").removeClass();
		$("#motif").addClass(""+mtfClass);
		$("#mtfClass").val(mtfClass);
	}
	$("#nbMin").val(nbMin);
	$("#nbMax").val(nbMax);
	$("#segOrMin").val(segOrMin);
	$("#segOrMax").val(segOrMax);
	$("#rd"+typRapp).prop("checked", true);
	$("#sliderTemp").slider({value: transparence});
	$("#handTemp").text(transparence);	
	$("#rapp, #btRappRot").css("background-color", "rgba(255, 255, 255, "+transparence/10+")");
	$(".num10Ext").css("color", colGradExt);
	$(".bar10Ext, .bar5Ext, .bar1Ext").css("background", colGradExt);
	$("#colGradExt").spectrum("set",colGradExt);
	if (chkHor==true) {$("#chkHor").prop("checked", true);$("#gradExtBox").show();} else {$("#chkHor").prop("checked", false);$("#gradExtBox").hide();}
	$(".num10Int").css("color", colGradInt);
	$(".bar10Int, .bar5Int, .bar1Int").css("background", colGradInt);
	$("#colGradInt").spectrum("set",colGradInt);
	if (chkAntiHor==true) {$("#chkAntiHor").prop("checked", true);$("#gradIntBox").show();} else {$("#chkAntiHor").prop("checked", false);$("#gradIntBox").hide();}

	$("#nbMin, #nbMax").spinner();

	initSize();
	generer();
	affichage();
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

function initSize() {
		pageWidth = $("#page").width();
		pageHeight = $("#page").height();

		if (pageWidth>=pageHeight) {
			platoWidth = Math.floor(pageWidth*70/100);
			platoHeight = Math.floor(pageHeight*92/100);
			rappDiam = Math.floor(pageHeight*76/100);
			anglDiam = Math.floor(pageHeight*86/100);
		}
		else if (pageWidth<pageHeight) {
			platoWidth = Math.floor(pageWidth*75/100);
			platoHeight = Math.floor(pageHeight*70/100);
			rappDiam = Math.floor(pageWidth*60/100);
			anglDiam = Math.floor(pageWidth*70/100);
			$("#plato").css('padding-left', '1em');
		}
		$("#compoBox, #depoCompo").width(platoWidth);
		$("#depoCompo").height(platoHeight);

		creerAngle();
		creerRapp();
	}

function creerRapp() {

		$("#gradExtBox").html("");
		$("#gradIntBox").html("");
		$(".gradRepExt").remove();
		$(".gradRepInt").remove();
		$(".gradRepCtr").remove();
		
		for (var i=0; i<4; i++) {
			$("#gradRepBox").append('<div id="gradRepExt-'+i*90+'" class="gradRepExt"><div class="barRepExt"></div></div>');
			$("#gradRepExt-"+i*90).css('transform', 'translate(-50%, -50%) rotate('+i*90+'deg)');
			$("#gradRepBox").append('<div id="gradRepCtr-'+i*90+'" class="gradRepCtr"><div class="barRepCtr"></div></div>');
			$("#gradRepCtr-"+i*90).css('transform', 'translate(-50%, -50%) rotate('+i*90+'deg)');
		}

		if (typRapp==180) {

			// Ext

			for (var i=0; i<180; i++) {
				$("#gradExtBox").append('<div id="grad1Ext-'+i+'" class="grad1Ext"><div class="bar1Ext"></div></div>');
				$("#grad1Ext-"+i).css('transform', 'translate(-50%, -50%) rotate('+i+'deg)');
			}

			for (var i=0; i<18; i++) {
				$("#gradExtBox").append('<div id="grad5Ext-'+((i*10)+5)+'" class="grad5Ext"><div class="bar5Ext"></div></div>');
				$("#grad5Ext-"+((i*10)+5)).css('transform', 'translate(-50%, -50%) rotate('+((i*10)+5)+'deg)');
			}

			for (var i=0; i<=18; i++) {
				$("#gradExtBox").append('<div id="grad10Ext-'+i*10+'" class="grad10Ext"><div class="bar10Ext"></div><div id="num10Ext-'+i*10+'" class="num10Ext">'+i*10+'</div></div>');
				$("#grad10Ext-"+i*10).css('transform', 'translate(-50%, -50%) rotate('+i*10+'deg)');
				$("#num10Ext-"+i*10).css('transform', 'translate(-50%, -50%) rotate(-'+i*10+'deg)');
			}

			// Int

			for (var i=0; i<180; i++) {
				$("#gradIntBox").append('<div id="grad1Int-'+i+'" class="grad1Int"><div class="bar1Int"></div></div>');
				$("#grad1Int-"+i).css('transform', 'translate(-50%, -50%) rotate('+i+'deg)');
			}

			for (var i=0; i<18; i++) {
				$("#gradIntBox").append('<div id="grad5Int-'+((i*10)+5)+'" class="grad5Int"><div class="bar5Int"></div></div>');
				$("#grad5Int-"+((i*10)+5)).css('transform', 'translate(-50%, -50%) rotate('+((i*10)+5)+'deg)');
			}

			for (var i=0; i<=18; i++) {
				$("#gradIntBox").append('<div id="grad10Int-'+i*10+'" class="grad10Int"><div class="bar10Int"></div><div id="num10Int-'+i*10+'" class="num10Int">'+i*10+'</div></div>');
				$("#grad10Int-"+i*10).css('transform', 'translate(-50%, -50%) rotate('+((i*-10)+180)+'deg)');
				$("#num10Int-"+i*10).css('transform', 'translate(-50%, -50%) rotate(-'+((i*-10)+180)+'deg)');
			}
			$("#rapp").css('clip', 'rect(0px '+(rappDiam+40)+'px '+(rappDiam/2+30)+'px 0)').width(rappDiam).height(rappDiam);
		}
		else if (typRapp==360) {

			// Ext

			for (var i=0; i<360; i++) {
				$("#gradExtBox").append('<div id="grad1Ext-'+i+'" class="grad1Ext"><div class="bar1Ext"></div></div>');
				$("#grad1Ext-"+i).css('transform', 'translate(-50%, -50%) rotate('+i+'deg)');
			}

			for (var i=0; i<36; i++) {
				$("#gradExtBox").append('<div id="grad5Ext-'+((i*10)+5)+'" class="grad5Ext"><div class="bar5Ext"></div></div>');
				$("#grad5Ext-"+((i*10)+5)).css('transform', 'translate(-50%, -50%) rotate('+((i*10)+5)+'deg)');
			}

			for (var i=0; i<36; i++) {
				$("#gradExtBox").append('<div id="grad10Ext-'+i*10+'" class="grad10Ext"><div class="bar10Ext"></div><div id="num10Ext-'+i*10+'" class="num10Ext">'+i*10+'</div></div>');
				$("#grad10Ext-"+i*10).css('transform', 'translate(-50%, -50%) rotate('+i*10+'deg)');
				$("#num10Ext-"+i*10).css('transform', 'translate(-50%, -50%) rotate(-'+i*10+'deg)');
			}

			// Int

			for (var i=0; i<360; i++) {
				$("#gradIntBox").append('<div id="grad1Int-'+i+'" class="grad1Int"><div class="bar1Int"></div></div>');
				$("#grad1Int-"+i).css('transform', 'translate(-50%, -50%) rotate('+i+'deg)');
			}

			for (var i=0; i<36; i++) {
				$("#gradIntBox").append('<div id="grad5Int-'+((i*10)+5)+'" class="grad5Int"><div class="bar5Int"></div></div>');
				$("#grad5Int-"+((i*10)+5)).css('transform', 'translate(-50%, -50%) rotate('+((i*10)+5)+'deg)');
			}

			for (var i=0; i<36; i++) {
				$("#gradIntBox").append('<div id="grad10Int-'+i*10+'" class="grad10Int"><div class="bar10Int"></div><div id="num10Int-'+i*10+'" class="num10Int">'+i*10+'</div></div>');
				$("#grad10Int-"+i*10).css('transform', 'translate(-50%, -50%) rotate('+((i*-10)+180)+'deg)');
				if (i<=18) {
					$("#num10Int-"+i*10).css('transform', 'translate(-50%, -50%) rotate(-'+((i*-10)+180)+'deg)');
				}
				else {
					$("#num10Int-"+i*10).css('transform', 'translate(-50%, -50%) rotate('+((i*10)+180)+'deg)');
				}
			}
			$("#rapp").css('clip', 'rect(0px '+(rappDiam+40)+'px '+(rappDiam)+'px 0)').width(rappDiam).height(rappDiam);
		}

		$(".gradRepCtr, .gradRepExt, .grad10Ext, .grad5Ext, .grad1Ext, .gradRepInt, .grad10Int, .grad5Int, .grad1Int").width(rappDiam);

		$(".num10Ext").css("color", "#"+colGradExt);
		$(".bar10Ext, .bar5Ext, .bar1Ext").css("background", colGradExt);
		$(".num10Int").css("color", "#"+colGradInt);
		$(".bar10Int, .bar5Int, .bar1Int").css("background", colGradInt);

		$('#rappBox').draggable({
			handle: '#rapp',
			drag: function() {
				$(this).css('transform', 'translate(0%, 0%)');
				centreX = $('#anglBox').position().left + $('#anglBox').width()/2;
				centreY = $('#anglBox').position().top + $('#anglBox').height()/2;
			},
			stop: function() {
				if ($(this).position().left+($('#rapp').width()/2)>centreX-10 && $(this).position().left+($('#rapp').width()/2)<centreX+10 && $(this).position().top+($('#rapp').height()/2)>centreY-10 && $(this).position().top+($('#rapp').height()/2)<centreY+10) {
					$(this).css({'left':centreX-($('#rapp').width()/2)});
					$(this).css({'top':centreY-($('#rapp').height()/2)});
				}
				if ('ontouchstart' in window == false) {
					$("#propNbr").focus();
				}
			}
		});

		// Rotation 
		$('#rapp').draggable({
			handle: '#btRappRot',
			opacity: 0.001,
			helper: 'clone',
			drag: function(event) {
				var
				pw = document.getElementById('rapp'),
				pwBox = pw.getBoundingClientRect(),
				center_x = (pwBox.left + pwBox.right) / 2,
				center_y = (pwBox.top + pwBox.bottom) / 2,
				mouse_x = event.pageX,
				mouse_y = event.pageY,
				radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
				degree = Math.round((radians * (180 / Math.PI) * -1) + 90);
				var rotateCSS = 'rotate(' + (degree) + 'deg)';
				$('#rapp').css({
				'-moz-transform': rotateCSS,
				'-webkit-transform': rotateCSS
				});
			}
		});
	}

function affichage() {

	$("#digCompoBox, #propNbr, #formerDeg").removeClass("incorrect, correct");

	if (typActivite=="typInteractive") {
		$('#alertT').css({'display':'inline-block'});
		$("#optExercices").hide();
		if ($("#optApparence").css("display")=="inline-block") {
			$("#optSav").show();
		}
		if ($("#optApparence").css("display")=="none" && $("#optExercices").css("display")=="none") {
			$("#optSav").hide();
		}

		$("#propBtBox, #formerBox").hide(); // debug
		$("#digCompoBox").show();			
		$("#checkDigital").prop({'checked':true}).show();
		$("label[for='checkDigital']").show();
	}
	else if (typActivite=="typExercices") {
		$('#alertT').css({'display':'none'});

		$("#digCompoBox").hide(); // debug
		
		$("#optExercices").show();
		if ($("#optExercices").css("display")=="inline-block") {
			$("#optSav").show();
		}
		if ($("#optApparence").css("display")=="none" && $("#optExercices").css("display")=="none") {
			$("#optSav").hide();
		}

		$("#propBtBox").show();
		
		if (typExercice=="typMesurer") {

			$("#formerBox").hide();

			$("#propNbrBox").show();
			$("#propNbr").val('');
		}
		else if (typExercice=="typFormer") {
			$("#propNbrBox").hide();
			$("#formerBox").show();
		}
		
		$("#checkDigital").prop({'checked':true}).hide();
		$("label[for='checkDigital']").hide();
	}
}