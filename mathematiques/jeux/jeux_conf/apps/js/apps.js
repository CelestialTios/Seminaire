$(document).ready(function() {

	/**********************************************/

	/* JS COMMUN A TOUTES LES APPLIS */

	/**********************************************/

	if ($("#page").width()<900) {
		$('#motif').prepend('<div class="alertRes">monAppli.net nécessite une résolution d\'écran minimum de 1024x768px pour s\'afficher correctement.</div>');
		$('#header').css('margin-top','2em');
	}
	else if ($("#page").height()<600) {
		$('#motif').prepend('<div class="alertRes">monAppli.net nécessite une résolution d\'écran minimum de 1024x768px pour s\'afficher correctement.</div>');
		$('#header').css('margin-top','2em');
	}

	//$("input").spinner();

	/************************************************/

	///// HEADER /////

	/************************************************/

	$("#options").hide(); // debug

	$("#botTbi").click(function()
	{
		$("#botTbi").hide();
		$("#topTbi").show();
		$("#header").removeClass("headerT").addClass("headerB");
		$("#options").removeClass("optionsT").addClass("optionsB");
		$("#header, #options, #optExercices, #optApparence").removeClass("slidBottom").addClass("slidTop");
		$("header, #hd, nav, footer").hide();//firefox

	});

	$("#topTbi").click(function()
	{
		$("#topTbi").hide();
		$("#botTbi").show();
		$("#header").removeClass("headerB").addClass("headerT");
		$("#options").removeClass("optionsB").addClass("optionsT");
		$("#header, #options, #optExercices, #optApparence").removeClass("slidTop").addClass("slidBottom");
		$("header, #hd, nav, footer").show();//firefox
	});

	$("#btOptions").click(function()
	{
		$("#options").toggle();
		if ($("#options").is(":visible")) {
			$("#btOptions").css('border', '3px solid rgb(255, 155, 38)');
		}
		else {
			$("#btOptions").css('border', 'none');
		}
	});

	$("#paintBox, #paintTools").hide();
	$("#btPaint").click(function(){
		$("#paintBox, #paintTools").toggle();
		if ($("#paintTools").is(":visible")) {
			$("#btPaint").css('border', '3px solid rgb(255, 155, 38)');
		}
		else {
			$("#btPaint").css('border', 'none');
		}
	});

	$("#infoBox").hide();
	$("#btInfo, #infoBox").click(function()
	{
		$("#infoBox").toggle();
	});

	/************************************************/

	///// OPTIONS /////

	/************************************************/

	// Spectrum

	maPalette = [
		["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)", "rgb(153, 153, 153)","rgb(183, 183, 183)",
		"rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(239, 239, 239)", "rgb(243, 243, 243)", "rgb(255, 255, 255)"],
		["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
		"rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
		["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
		"rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
		"rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
		"rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
		"rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
		"rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
		"rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
		"rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
		"rgb(133, 32, 12)", "rgb(153, 0, 0)", "rgb(180, 95, 6)", "rgb(191, 144, 0)", "rgb(56, 118, 29)",
		"rgb(19, 79, 92)", "rgb(17, 85, 204)", "rgb(11, 83, 148)", "rgb(53, 28, 117)", "rgb(116, 27, 71)",
		"rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
		"rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
	];

	/* Motif */

	$("#motifPanel, #avertMotif").hide();

	$("#btMotif").click(function(){
		if (colPage=="#fff") {
			$("#avertMotif").show();
		}
		else {
			$("#avertMotif").hide();
		}
		$("#motifPanel").toggle();
	});	

	$(".mtfBox").click(function(){
		mtfClass = $(this).attr("data-motif");
		$("#motif").removeClass();
		$("#motif").addClass(""+mtfClass);
		$("#mtfClass").val(mtfClass);
	});

	/* Bouton close */

	$(".icBgClose").click(function(){
		$(this).parent().hide();
	});

	/* Drag Only */

	$(".dragOnly").draggable();
	

	/************************************************/

	///// PROFIL /////

	/************************************************/

	tabSmiley = [128513, 128514, 128515, 128516, 128517, 128518, 128519, 128520, 128521, 128522, 128523, 128524, 128525, 128526, 128527, 128536, 128540, 128541];
	tabAlim = [127813,127814,127815,127822,127825,127826,127827,127828,127829,127839,127841,127848,127853,127856];
	tabAnimal = [128012,128013,128014,128017,128018,128020,128023,128024,128025,128028,128031,128034,128036,128039,128040,128043,128044,128045,128046,128047,128048,128049,128051];

	tbTabs = [
		["tabSport", ["9917", "9918", "9971", "9973", "127934", "127935", "127936", "127938", "127939", "127940", "127944", "127946"]],
		["tabDessert", ["127829", "127841", "127842", "127846", "127847", "127848", "127849", "127850", "127851", "127852", "127853", "127854", "127856", "127874"]],
		["tabNature", ["127799", "127800", "127801", "127802", "127803", "127804", "127793", "127796", "127797", "127805", "127806", "127807", "127808", "127809", "127810", "127811", "127812"]],
		["tabFruit", ["127815", "127816", "127817", "127818", "127820", "127821", "127822", "127823", "127825", "127826", "127827"]],
		["tabFood", ["127828", "127830", "127831", "127837", "127839", "127858", "127859", "127814", "127861", "127813"]],
		["tabZik", ["127908", "127911", "127925", "127926", "127927", "127928", "127929", "127930", "127931", "127932"]],
		["tabJeu", ["127918", "127919", "127921", "127922", "127923"]],
		["tabAnimaux", ["128012", "128013", "128014", "128017", "128018", "128020", "128023", "128024", "128025", "128027", "128028", "128029", "128030", "128031", "128032", "128033", "128034", "128035", "128036", "128037", "128038", "128039", "128040", "128041", "128043", "128044", "128045", "128046", "128047", "128048", "128049", "128050", "128051", "128052", "128053", "128054", "128055", "128056", "128057", "128058", "128059", "128060"]],
		["tabSap", ["128083", "128085", "128086", "128087", "128088", "128090", "128094", "128095", "128098"]],
		["tabTransport", ["128640", "128643", "128644", "128645", "128647", "128649", "128652", "128657", "128658", "128659", "128661", "128663", "128665", "128666", "128674", "128676", "128690"]]
	];

	$("#profilBox").hide();

	initProfil();		

	/************************************************/

	///// APPELS AUX JS EXTERNES /////

	/************************************************/

	paint();	

});

function initProfil() {
	
	collectSmiley = [];
	collectAlim = [];
	collectAnimal = [];

	/*collectSport = [];
	collectDessert = [];
	collectNature = [];
	collectFruit = [];
	collectFood = [];
	collectZik = [];
	collectJeu = [];
	collectAnimaux = [];
	collectSap = [];
	collectTransport = [];*/

	$("#closeProfil").click(function(){
		$("#profilBox").hide();
	});

	for (var i = 0; i < tabSmiley.length; i++) {
		$("#collectSmiley").append('<div id="emojiBox-'+tabSmiley[i]+'" class="emojiBox"></div>');
		$("#emojiBox-"+tabSmiley[i]).html('<div class="emojiX">?</div>');
	}

	for (var i = 0; i < tabAlim.length; i++) {
		$("#collectAlim").append('<div id="emojiBox-'+tabAlim[i]+'" class="emojiBox"></div>');
		$("#emojiBox-"+tabAlim[i]).html('<div class="emojiX">?</div>');
	}

	for (var i = 0; i < tabAnimal.length; i++) {
		$("#collectAnimal").append('<div id="emojiBox-'+tabAnimal[i]+'" class="emojiBox"></div>');
		$("#emojiBox-"+tabAnimal[i]).html('<div class="emojiX">?</div>');
	}
}