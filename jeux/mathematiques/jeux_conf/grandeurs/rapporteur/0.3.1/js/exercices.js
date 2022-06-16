
/************************************************/

///// EXERCICES /////

/************************************************/

$("#propNbr").on('input change', function() {
	$("#propNbr").removeClass("incorrect");
	$("#propNbr").removeClass("correct");
	dejaVerifMesurer = false;
	$(this).val($.trim($(this).val()).replace(/\s+/g,''));
});

/* Boutons */

$("#btVerifier").click(function()
{
	verifier();
});

$("#btSuivant").click(function()
{
	$("#succesBox").hide();
	$("#btVerifier").show();
	enterSuivant = false;
	generer();
});

/* Touche Enter du clavier */

enterSuivant = false;

$(document).keyup(function (event) {
	if (event.which == 13 && typActivite=="typExercices") {
		if (enterSuivant==true) {
			$("#btSuivant").click();
		}
		else {
			$("#btVerifier").click();
		}
	}
});

/************************************************/

///// GENERER /////

/************************************************/

function creerAngle() {

	$("#angl").html('');
	$("#angl").append('<div id="seg1" class="seg1"><div class="bar1"><div class="barSeg1"></div></div></div><div id="seg2" class="seg2"><div class="bar2"><div class="barSeg2"></div></div></div>');

	/***/

	$('#anglBox').width(anglDiam).height(anglDiam);
	$('.pieBox').height(anglDiam/2);
	$('.hold1').width(anglDiam/2).height(anglDiam/2).css('clip', 'rect('+anglDiam/4+'px, '+anglDiam/2+'px, '+anglDiam/2+'px, 0px)');
	$('.pie1').width(anglDiam/2).height(anglDiam/2).css('clip', 'rect(0px, '+anglDiam/2+'px, '+anglDiam/4+'px, 0px)');
	$('.hold2').width(anglDiam/2).height(anglDiam/2).css('clip', 'rect(0px, '+anglDiam/2+'px, '+anglDiam/2+'px, 0px)');
	$('.pie2').width(anglDiam/2).height(anglDiam/2).css('clip', 'rect(0px, '+anglDiam/2+'px, '+anglDiam/4+'px, 0px)');
	$('.hold3').width(anglDiam/2).height(anglDiam/2).css('clip', 'rect('+anglDiam/4+'px, '+anglDiam/2+'px, '+anglDiam/2+'px, 0px)');
	$('.pie3').width(anglDiam/2).height(anglDiam/2).css('clip', 'rect(0px, '+anglDiam/2+'px, '+anglDiam/2+'px, 0px)');
	$('.seg1, .seg2').height(anglDiam);
	$('.bar1, .bar2, .barSeg1, .barSeg2').height(anglDiam/2);

	/***/
	
	$(".barSeg1").css("background", colSeg1);
	$(".barSeg2").css("background", colSeg2);

	/* Position Angle */

	if (typActivite=="typInteractive") {
		$('.bar1, .bar2, .pieBox').css("cursor", "move");
		$('#anglBox').draggable({ disabled: false });
		$('#anglBox').css({'left':'50%', 'top':'50%', 'transform':'translate(-50%, -50%)'});
	}
	else {
		$('.bar1, .bar2, .pieBox').css("cursor", "default");
		$('#anglBox').draggable({ disabled: true });
		var leftX = Math.floor(Math.random()*30)+30;
		var leftY = Math.floor(Math.random()*20)+40;
		$('#anglBox').css({'left':'50%', 'top':'50%', 'transform':'translate(-'+leftX+'%, -'+leftY+'%)'});
	}

	$('#anglBox').draggable({
		handle: '.pieBox',
		drag: function() {
			$(this).css('transform', 'translate(0%, 0%)');
		}
	});			

	/* Calcul Angle */

	aleaAngl = Math.floor(Math.random()*(nbMax-nbMin))+nbMin;

	segOr = Math.floor(Math.random()*(segOrMax-segOrMin))+segOrMin;

	degre1 = 360 - 90 + segOr;
	if (degre1>360) {
		degre1 = degre1 - 360;
	}		
	$("#seg1").css('transform', 'translate(-50%, -50%) rotate('+(degre1)+'deg)');

	degre2 = degre1 + aleaAngl;
	if (degre2>360) {
		degre2 = degre1 + aleaAngl - 360;
	}
	$("#seg2").css('transform', 'translate(-50%, -50%) rotate('+(degre2)+'deg)');

	pie();

	if (typActivite=="typInteractive" || typExercice=="typFormer") {

		$('.bar1, .bar2').css("cursor", "move");

		/* Rotation */

		$('#seg2').draggable({
			handle: '.bar2',
			opacity: 0.001,
			helper: 'clone',
			drag: function(event) {
				var
				pw = document.getElementById('seg2'),
				pwBox = pw.getBoundingClientRect(),
				center_x = (pwBox.left + pwBox.right) / 2,
				center_y = (pwBox.top + pwBox.bottom) / 2,
				mouse_x = event.pageX,
				mouse_y = event.pageY,
				radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
				degre2 = Math.round((radians * (180 / Math.PI) * -1) + 180);
				var rotateCSS = 'translate(-50%, -50%) rotate(' +degre2+ 'deg)';
				$('#seg2').css({
				'-moz-transform': rotateCSS,
				'-webkit-transform': rotateCSS
				});
				pie();
			}
		});

		$('#seg1').draggable({
			handle: '.bar1',
			opacity: 0.001,
			helper: 'clone',
			drag: function(event) {
				var
				pw = document.getElementById('seg1'),
				pwBox = pw.getBoundingClientRect(),
				center_x = (pwBox.left + pwBox.right) / 2,
				center_y = (pwBox.top + pwBox.bottom) / 2,
				mouse_x = event.pageX,
				mouse_y = event.pageY,
				radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
				degre1 = Math.round((radians * (180 / Math.PI) * -1) + 180);
				var rotateCSS = 'translate(-50%, -50%) rotate(' +degre1+ 'deg)';
				$('#seg1').css({
				'-moz-transform': rotateCSS,
				'-webkit-transform': rotateCSS
				});
				pie();
			}
		});
	}
	else {
		$("#barSeg2").css('cursor', 'default');
	}

	/* Former l'angle */

	if (typExercice=="typFormer") {
		do {
			formerAngl = Math.floor(Math.random()*(nbMax-nbMin))+nbMin;
		}
		while (formerAngl==valAngl && formerAngl==0);
		
		$("#formerDeg").val(formerAngl+'°');
	}
}

function pie() {

	$("#formerDeg").removeClass("incorrect");
	$("#formerDeg").removeClass("correct");
	dejaVerifFormer = false;

	if (degre1==degre2) {
		valAngl = 360;
	}
	else if (degre1<degre2) {
		valAngl = degre2-degre1;
	}
	else {
		valAngl = 360-(degre1-degre2);
	}

	$("#affDeg").val(valAngl+'°');

	$("#pieBox1 .pie1").css('transform', 'rotate('+valAngl+'deg)');
	$(".hold1").css('transform', 'rotate('+(degre1)+'deg)');

	$("#pieBox3 .pie3").css('transform', 'rotate('+valAngl+'deg)');
	$(".hold3").css('transform', 'rotate('+(degre1)+'deg)');

	$("#pieBox2 .pie2").css('transform', 'rotate('+valAngl+'deg)');
	$(".hold2").css('transform', 'rotate('+(degre1)+'deg)');

	if (degre1==degre2) {
		$("#pieBox2 .pie2, #pieBox3 .pie3").show();
	}
	else if (degre1>=0 && degre1<180) {

		if (degre2 >= degre1 + 180) {
			$("#pieBox2 .pie2, #pieBox3 .pie3").show();
		}
		else if (degre2 <= degre1) {
			$("#pieBox2 .pie2, #pieBox3 .pie3").show();
		}
		else {
			$("#pieBox2 .pie2, #pieBox3 .pie3").hide();
		}
	}
	else {
		if (degre2 >= degre1) {
			$("#pieBox2 .pie2, #pieBox3 .pie3").hide();
		}
		else if (degre2 >= 0 && degre2 < degre1 - 180) {
			$("#pieBox2 .pie2, #pieBox3 .pie3").hide();
		}
		else {
			$("#pieBox2 .pie2, #pieBox3 .pie3").show();
		}
	}			
}

function generer() {

	/* Si on change d'exercice sur l'état "Suivant" */
	if (enterSuivant==true) {
		$("#btSuivant").click();
	}

	dejaVerifMesurer = dejaVerifFormer = false;

	creerAngle();

	affichage();
	
}

/************************************************/

///// VERIFIER /////

/************************************************/

nbSuccesMesurer = nbVerifMesurer = nbSuccesFormer = nbVerifFormer = 0;

var dOn = new Date();
var dateOn = dOn.getFullYear() + "-" + ("0"+(dOn.getMonth()+1)).slice(-2) + "-" + ("0" + dOn.getDate()).slice(-2) + " " + ("0" + dOn.getHours()).slice(-2) + ":" + ("0" + dOn.getMinutes()).slice(-2) + ":" + ("0" + dOn.getSeconds()).slice(-2);

function verifier() {

	succesMesurer = succesFormer = false;
	enterSuivant = false;

	if (typExercice=="typMesurer") {
		if ($("#propNbr").val()!="") {
			if ($("#propNbr").val()==valAngl) {
				$("#propNbr").removeClass("incorrect");
				$("#propNbr").addClass("correct");
				succesMesurer = true;
				if (dejaVerifMesurer==false) {
					nbSuccesMesurer += 1;
					nbVerifMesurer += 1;
					dejaVerifMesurer = true;
				}
			}
			else {
				$("#propNbr").removeClass("correct");
				$("#propNbr").addClass("incorrect");
				succesMesurer = false;
				if (dejaVerifMesurer==false) {
					nbVerifMesurer += 1;
					dejaVerifMesurer = true;
				}
			}
			$("#affSuccesMesurer").show();
			$("#succesMesurer").text("Mesurer l'angle: "+nbSuccesMesurer+" / "+nbVerifMesurer);
		}
		else {
			alert("Complète le champ.");
		}
	}
	else if (typExercice=="typFormer") {
			if (valAngl==formerAngl) {
				$("#formerDeg").removeClass("incorrect");
				$("#formerDeg").addClass("correct");
				succesFormer = true;
				if (dejaVerifFormer==false) {
					nbSuccesFormer += 1;
					nbVerifFormer += 1;
					dejaVerifFormer = true;
				}
			}
			else {
				$("#formerDeg").removeClass("correct");
				$("#formerDeg").addClass("incorrect");
				succesFormer = false;
				if (dejaVerifFormer==false) {
					nbVerifFormer += 1;
					dejaVerifFormer = true;
				}
			}
			$("#affSuccesFormer").show();
			$("#succesFormer").text("Former l'angle: "+nbSuccesFormer+" / "+nbVerifFormer);
	}

	/* Réponse succes */

	if (succesMesurer==true || succesFormer==true) {
		$("#btVerifier").hide();
		affSucces();
		enterSuivant=true;

		if (sessUser && eleveId!='0') {

			var d = new Date();
			var dateIn = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);

			if (typExercice=="typMesurer") {
				activiteResult = nbSuccesMesurer+'/'+nbVerifMesurer;
				nbVerif = nbVerifMesurer;
			}
			else if (typExercice=="typFormer") {
				activiteResult = nbSuccesFormer+'/'+nbVerifFormer;
				nbVerif = nbVerifFormer;
			}	
			
			$.post(
				'inc/resultats-activite-ajax.php',
				{
					profId : profId,
					eleveId : eleveId,
					classeId : classeId,
					groupeId : groupeId,
					activiteId : activiteId,
					dateOn : dateOn,
					dateIn : dateIn,
					activiteResult : activiteResult,
					nbVerif : nbVerif
				},
				function(data)
				{
					if(data!='')
					{
						$(".alert").remove();
						$("#plato").append('<div class="alert">'+data+'</div>');
						$(".alert").click(function() {
							$(this).hide();
						});
					}
				},
				'text'
			);
		}
		else {
			ecrireStorageprofil();
		}
	}
}

/* Ditribution des émoji */

nbCoups = 0;


function affSucces() {
	$("#succesBox").show();

	if (sessUser) {

		nbCoups = Math.floor(Math.random()*20);

		var aleaSport = Math.floor(Math.random()*tbTabs[0][1].length);
		var aleaDessert = Math.floor(Math.random()*tbTabs[1][1].length);
		var aleaNature = Math.floor(Math.random()*tbTabs[2][1].length);
		var aleaFruit = Math.floor(Math.random()*tbTabs[3][1].length);
		var aleaFood = Math.floor(Math.random()*tbTabs[4][1].length);
		var aleaZik = Math.floor(Math.random()*tbTabs[5][1].length);
		var aleaJeu = Math.floor(Math.random()*tbTabs[6][1].length);
		var aleaAnimaux = Math.floor(Math.random()*tbTabs[7][1].length);
		var aleaSap = Math.floor(Math.random()*tbTabs[8][1].length);
		var aleaTransport = Math.floor(Math.random()*tbTabs[9][1].length);

		var niveau1 = 2;
		var niveau2 = 4;
		var niveau3 = 6;
		var niveau4 = 8;
		var niveau5 = 10;
		var niveau6 = 12;
		var niveau7 = 14;
		var niveau8 = 16;
		var niveau9 = 18;

		nbCoups += 1;

		if (nbCoups>20) {
			nbCoups = 1;
		}

		if (nbCoups<=niveau1) {
			emoji = tbTabs[0][1][aleaSport]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabSport';
		}
		else if (nbCoups>niveau1 && nbCoups<=niveau2) {
			emoji = tbTabs[1][1][aleaDessert]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabDessert';
		}
		else if (nbCoups>niveau2 && nbCoups<=niveau3) {
			emoji = tbTabs[2][1][aleaNature]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabNature';
		}
		else if (nbCoups>niveau3 && nbCoups<=niveau4) {
			emoji = tbTabs[3][1][aleaFruit]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabFruit';
		}
		else if (nbCoups>niveau4 && nbCoups<=niveau5) {
			emoji = tbTabs[4][1][aleaFood]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabFood';
		}
		else if (nbCoups>niveau5 && nbCoups<=niveau6) {
			emoji = tbTabs[5][1][aleaZik]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabZik';
		}
		else if (nbCoups>niveau6 && nbCoups<=niveau7) {
			emoji = tbTabs[6][1][aleaJeu]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabJeu';
		}
		else if (nbCoups>niveau7 && nbCoups<=niveau8) {
			emoji = tbTabs[7][1][aleaAnimaux]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabAnimaux';
		}
		else if (nbCoups>niveau8 && nbCoups<=niveau9) {
			emoji = tbTabs[8][1][aleaSap]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabSap';
		}
		else if (nbCoups>niveau9) {
			emoji = tbTabs[9][1][aleaTransport]
			$("#smiley").html("&#"+emoji);
			listNom = 'tabTransport';
		}
		
		$.post(
			'inc/resultats-emojis-ajax.php',
			{
				profId : profId,
				eleveId : eleveId,
				listNom : listNom,
				emoji : emoji
			}/*,
			function(data)
			{
				if(data != 'error')
				{
					//$("#groupSelect").empty();
					$("#plato").append(data);
				}
				else
				{
					alert('marche pas')
				}
			},
			'text'*/
		);
	}
	else
	{
		var aleaSmiley = Math.floor(Math.random()*tabSmiley.length);
		var aleaAlim = Math.floor(Math.random()*tabAlim.length);
		var aleaAnimal = Math.floor(Math.random()*tabAnimal.length);

		var niveau1 = 3;
		var niveau2 = 5;

		nbSucces = nbSuccesMesurer + nbSuccesFormer;
		nbCoups += 1;

		if (nbCoups>(niveau1+niveau2)) {
			nbCoups = 1;
		}

		if (nbCoups<=niveau1) {
			var emoji = tabSmiley[aleaSmiley]
			$("#smiley").html("&#"+emoji);
			if (collectSmiley.indexOf(emoji)==-1) {
				collectSmiley.push(emoji);
			}
			
		}
		else if (nbCoups>niveau1 && nbCoups<=niveau2) {
			var emoji = tabAlim[aleaAlim]
			$("#smiley").html("&#"+emoji);
			if (collectAlim.indexOf(emoji)==-1) {
				collectAlim.push(emoji);
			}
		}
		else if (nbCoups>niveau2) {
			var emoji = tabAnimal[aleaAnimal]
			$("#smiley").html("&#"+emoji);
			if (collectAnimal.indexOf(emoji)==-1) {
				collectAnimal.push(emoji);
			}
		}
	}
}

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

	if (mesurerAngle!="0/0") {
		var savMesurerAngle = mesurerAngle.split('/');
		var savSuccesMesurerAngle = parseInt(savMesurerAngle[0]);
		var nbSuccesComposerNew = nbSuccesMesurer + savSuccesMesurerAngle;
		var savVerifMesurerAngle = parseInt(savMesurerAngle[1]);
		var percentComposer = Math.floor((savSuccesMesurerAngle * 100) / savVerifMesurerAngle)+"%";
	}
	else {
		var percentComposer = "";
	}
		

	if (formerAngle!="0/0") {
		var savFormerAngle = formerAngle.split('/');
		var savSuccesFormerAngle = parseInt(savFormerAngle[0]);
		var nbSuccesEcrireNew = nbSuccesFormer + savSuccesFormerAngle;
		var savVerifFormerAngle = parseInt(savFormerAngle[1]);
		var percentEcrire = Math.floor((savSuccesFormerAngle * 100) / savVerifFormerAngle)+"%";
	}
	else {
		var percentEcrire = "";
	}

	$("#graphExo1").text(percentComposer);
	$("#graphExo2").text(percentEcrire);

	$("#resultExo1").text("Mesurer l'angle : "+mesurerAngle);
	$("#resultExo2").text("Former l'angle : "+formerAngle);

	$(".collectBox").css({"background-color":colObjet, "border-color":colBord});
	$(".emojiX").css({"background-color":"rgba(255, 255, 255, 0.3)"});

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
	
	nbSuccesMesurer = nbVerifMesurer = nbSuccesFormer = nbVerifFormer = 0;
	$("#succesMesurer").text("");
	$("#succesFormer").text("");
}

/* Réinitialiser */

$("#rstProfil").click(function(){
	$("#alrtConf").toggle();
});

$("#btConf").click(function(){
	defautStorageProfil();
	$(this).parent().hide();
	initProfil();
	affProfil();
});

$("#btAnul").click(function(){
	$(this).parent().hide();
});