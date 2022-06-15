
/************************************************/

///// EXERCICES /////

/************************************************/

propVal = '';

$("#propVal").on('input', function() {
	$(this).val($.trim($(this).val()).replace(/\s+/g,'').replace('.',','));
	propVal = $(this).val();
	generer();
});

/* Boutons */

$("#btVerifier").click(function()
{
	verifier();
});

$("#btSuivant").click(function()
{
	$("#propVal").val('');
	propVal = '';
	$(".chifBox").remove();
	$("#succesBox").hide();
	$("#btVerifier").show();
	enterSuivant = false;
	affichage();
	generer();
});

/* Touche Enter du clavier */

enterSuivant = false;

$(document).keyup(function (event) {
	if (event.which == 13 && typActivite=="Exercices") {
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

tbUnitEnt = ['U', 'Du', 'Cu', 'Mu','Dm','Cm','M'];
tbUnitDec = ['Di', 'Ci', 'Mi', 'DMi','CMi'];

$("#propVal").val('');

function generer() {

	if(typActivite=='Interactive') {
		$('#alertT').css({'display':'inline-block'});
	}
	else {
		$('#alertT').css({'display':'none'});
	}

	/* Focus */

	if (typActivite=='Interactive') {
		if ('ontouchstart' in window == false) {
			$("#propVal").focus();
		}
	}		

	/* Vérifier si "Suivant" */
	if (enterSuivant==true) {
		$("#btSuivant").click();
	}

	/* Remove class */

	$("#propExo1").removeClass("correct").removeClass("incorrect");
	$("#propExo2").removeClass("correct").removeClass("incorrect");

	dejaVerifExo1 = dejaVerifExo2 = false;

	/* Generer */

	$('.chifBox').remove();
	rang = val = valEnt = 0;
	nbEnt = nbDec = 0;
	nbAddEnt = nbAddDec = 0;

	$("#roulBox").css({'top':topRoul+'px', 'width':$("#depoCompo").width()});

	tbValEnt = [];
	propValSplit = propVal.toString().split(',');
	tbValEnt = propValSplit[0].toString().split('').reverse();
	nbEnt = tbValEnt.length;

	if (propValSplit.length>1) {
		tbValDec = propValSplit[1].toString().split('');
		nbDec = tbValDec.length;

		for (var i = 0; i < nbDec; i++) {
			$('#bd'+tbUnitDec[i]).append('<div class="chifBox">'+tbValDec[i]+'</div>');
		}
	}

	// ajout des entiers

	for (var i = nbEnt-1; i >= 0; i--) {
		$('#bd'+tbUnitEnt[i]).append('<div class="chifBox">'+tbValEnt[i]+'</div>');
	}

	$('.chifBox').css({'top':topRoul - $('.chifBox').outerHeight()+'px'})

	/***/

	topAdd = topRoul - $('.chifBox').outerHeight();

	verifRang();

	/* Visuel */
	if (typVisu=='Visu1') {
		$('.tdHd').css({'border-right':'2px dotted rgba(00, 00, 00, 0.3)', 'border-left':'2px solid transparent', 'margin':'0'});
		$('#bdM, #bdMu, #bdMi').css({'border-right':'2px solid rgba(00, 00, 00, 0.3)'});
		$('#bdU').css({'background-color':'transparent', 'border-right':'2px solid #D92E00'});
		$('#virg').css({'color':'#D92E00', 'left':($('#bdU').width()-($('#virg').width()/2)+'px')});
		colW = $('.tdHd').outerWidth();

	} else if(typVisu=='Visu2') {
		$('.tdHd').css({'border-right':'2px solid rgba(00, 00, 00, 0.3)', 'border-left':'2px solid rgba(00, 00, 00, 0.3)', 'margin':'0 7px'});
		$('#bdU').css({'background-color':'rgba(00, 00, 00, 0.1)'});
		$('#virg').css({'color':'#555', 'left':($('#bdU').width()-($('#virg').width()/2)+9+'px')});
		colW = $('.tdHd').outerWidth() + 14;
	}
}

function genExo() {

	$('#propVal').val('');
	propVal = '';
	$('.chifBox').remove();

	if (typNombre=='Entier') {
		valExo = Math.floor(Math.random() * (nbMax + 1 - nbMin) + nbMin);
	}
	else {
		valEnt = Math.floor(Math.random() * (nbMax - nbMin) + nbMin);
		if (chkAleaDec) {
			nbChifDec = Math.floor(Math.random() * (2) + 1);
		}

		if (nbChifDec==1) {
			valDec = Math.floor(Math.random() * 9) + 1;
		}
		else if (nbChifDec==2) {
			valDec = (Math.floor(Math.random() * 9) + 1)+''+(Math.floor(Math.random() * 9) + 1);
		}
		
		valExo = valEnt+'.'+valDec;
	}

	if (typExercice=='Exo1') {
		tbMult = [];
		if (chkMult10) {
			tbMult.push(10);
		}
		if (chkMult100) {
			tbMult.push(100);
		}
		if (chkMult1000) {
			tbMult.push(1000);
		}
		aleaMult = tbMult[Math.floor(Math.random() * (tbMult.length))];
		$('#propExoBox').html(''+aleaMult+' x '+valExo.toString().replace('.',',')+' = <input type="tel" id="propExo1" value="" maxlength="13">');
		$("#propExo1").on('input change', function() {
			$(this).removeClass("incorrect");
			$(this).val($.trim($(this).val()).replace(/\s+/g,'').replace('.',','));
			dejaVerifExo1 = false;
		});
		if ('ontouchstart' in window == false) {
			$("#propExo1").focus();
		}
		repExo1 = valExo*aleaMult;
	}
	else if (typExercice=='Exo2') {
		tbDiv = [];
		if (chkDiv10) {
			tbDiv.push(1);
		}
		if (chkDiv100) {
			tbDiv.push(2);
		}
		if (chkDiv1000) {
			tbDiv.push(3);
		}
		aleaDiv = tbDiv[Math.floor(Math.random() * (tbDiv.length))];
		$('#propExoBox').html(''+valExo.toString().replace('.',',')+' : '+Math.pow(10, aleaDiv)+' = <input type="tel" id="propExo2" value="" maxlength="13">');
		$("#propExo2").on('input change', function() {
			$(this).removeClass("incorrect");
			$(this).val($.trim($(this).val()).replace(/\s+/g,'').replace('.',','));
			dejaVerifExo2 = false;
		});
		if ('ontouchstart' in window == false) {
			$("#propExo2").focus();
		}

		repExo2 = Math.ceil((valExo*Math.pow(10, aleaDiv+2)/Math.pow(10, aleaDiv)))/Math.pow(10, aleaDiv+2).toFixed(aleaDiv);
	}

}

$('#btX10, #btX100, #btX1000').click(function(){
	val = Number($(this).attr('val'));
	
	$('.chifBox, #tapis').animate({
		left: '-='+ val * colW+'px'
	}, 1000 );

	$('.ax').animate({  borderSpacing: -90 }, {
		step: function(now,fx) {
			$(this).css('-webkit-transform','rotate('+now+'deg)'); 
			$(this).css('-moz-transform','rotate('+now+'deg)');
			$(this).css('transform','rotate('+now+'deg)');
		},
		duration:1000
	},'linear');

	if (nbDec>rang) {
		valEnt = val + rang - nbDec;
	}
	else {
		valEnt = val;
	}

	rang += val;

	// supprimer les 0 à gauche
	if (rang+nbEnt>=-nbAddDec) {
		for (var i = 0; i < val; i++) {
			$('#chifAddDec-'+(nbAddDec-1)).fadeOut(300, function () {
				$(this).remove();
			});

			if (nbAddDec>0) {
				nbAddDec -= 1;
			}
		}
	}

	// ajout des 0
	if (rang > nbDec +  nbAddEnt) {
		for (var i = valEnt; i > 0; i--) {
			$('#bd'+tbUnitEnt[i-1]).append('<div id="chifAddEnt-'+nbAddEnt+'" class="chifBox chifAdd chifAddEnt">0</div>');
			$('.chifAdd').css({'top':'-100px', 'color':colMultiplier});
			$('.chifAdd').animate({
				top: topAdd
			}, 1000 );
			$('.chifBox').removeClass('chifAdd');
			nbAddEnt += 1;
		}
	}
	
	verifRang();
});

$('#btD10, #btD100, #btD1000').click(function(){
	val = Number($(this).attr('val'));

	$('.chifBox, #tapis').animate({
		left: '+='+ val *colW+'px'
	}, 1000 );

	$('.ax').animate({  borderSpacing: -90 }, {
		step: function(now,fx) {
			$(this).css('-webkit-transform','rotate('+-now+'deg)'); 
			$(this).css('-moz-transform','rotate('+-now+'deg)');
			$(this).css('transform','rotate('+-now+'deg)');
		},
		duration:1000
	},'linear');

	// supprimer 0 à droite
	for (var i = 0; i < val; i++) {
		if (rang >= -nbAddEnt) {
			$('#chifAddEnt-'+(nbAddEnt-1)).fadeOut(300, function () {
				$(this).remove();
			});
			if (nbAddEnt>0) {
				nbAddEnt -= 1;
			}
		}
	}

	rang -= val;

	if (rang <= -nbEnt - nbAddDec) {

		if (val>1) {
			for (var i = val-1; i > 0 ; i--) {
				if (rang<=-nbEnt-i && nbAddDec>=0) {
					$('#bd'+tbUnitDec[i-1]).append('<div id="chifAddDec-'+nbAddDec+'" class="chifBox chifAdd chifAddDec">0</div>');
					$('.chifAdd').css({'top':'-100px', 'color':colDiviser});
					$('.chifAdd').animate({
						top: topAdd
					}, 1000 );
					$('.chifBox').removeClass('chifAdd');
					nbAddDec += 1;
				}
			}
		}

		$('#bdU').append('<div id="chifAddDec-'+nbAddDec+'" class="chifBox chifAdd chifAddDec">0</div>');
		$('.chifAdd').css({'top':'-100px', 'color':colDiviser});
		$('.chifAdd').animate({
			top: topAdd
		}, 1000 );
		$('.chifBox').removeClass('chifAdd');
		nbAddDec += 1;
	}

	verifRang();
});

function verifRang() {

	if (rang>=5 - nbEnt) {
		$('#btX1000').hide();
	}
	else {
		$('#btX1000').show();
	}
	if (rang>=6 - nbEnt) {
		$('#btX100').hide();
	}
	else {
		$('#btX100').show();
	}
	if (rang>=7- nbEnt) {
		$('#btX10').hide();
	}
	else {
		$('#btX10').show();
	}

	/**/

	if (rang<=-2+-nbEnt) {
		$('#btD1000').hide();
	}
	else {
		$('#btD1000').show();
	}
	if (rang<=-3+-nbEnt) {
		$('#btD100').hide();
	}
	else {
		$('#btD100').show();
	}
	if (rang<=-4+-nbEnt) {
		$('#btD10').hide();
	}
	else {
		$('#btD10').show();
	}
}

/************************************************/

///// VERIFIER /////

/************************************************/

totSuccesExo1 = totVerifExo1 = totSuccesExo2 = totVerifExo2 = 0;

var dOn = new Date();
var dateOn = dOn.getFullYear() + "-" + ("0"+(dOn.getMonth()+1)).slice(-2) + "-" + ("0" + dOn.getDate()).slice(-2) + " " + ("0" + dOn.getHours()).slice(-2) + ":" + ("0" + dOn.getMinutes()).slice(-2) + ":" + ("0" + dOn.getSeconds()).slice(-2);

function verifier() {

	succesExo1 = succesExo2 = false;
	enterSuivant = false;

	if (typExercice=="Exo1") {

		if ($("#propExo1").val()!="") {
			if ($("#propExo1").val().replace(',','.')==repExo1) {
				$("#propExo1").removeClass("incorrect").addClass("correct");
				succesExo1 = true;
				if (dejaVerifExo1==false) {
					totSuccesExo1 += 1;
					totVerifExo1 += 1;
					dejaVerifExo1 = true;
				}
			}
			else {
				$("#propExo1").removeClass("correct").addClass("incorrect");
				succesExo1 = false;
				if (dejaVerifExo1==false) {
					totVerifExo1 += 1;
					dejaVerifExo1 = true;
				}
			}
			$("#affSuccesExo1").show();
			$("#succesExo1").text("Multiplier: "+totSuccesExo1+" / "+totVerifExo1);
		}
		else {
			alert("Complète le champ.");
		}
	}
	else if (typExercice=="Exo2") {

		if ($("#propExo2").val()!="") {
			if ($("#propExo2").val().replace(',','.')==repExo2) {
				$("#propExo2").removeClass("incorrect").addClass("correct");
				succesExo2 = true;
				if (dejaVerifExo2==false) {
					totSuccesExo2 += 1;
					totVerifExo2 += 1;
					dejaVerifExo2 = true;
				}
			}
			else {
				$("#propExo2").removeClass("correct").addClass("incorrect");
				succesExo2 = false;
				if (dejaVerifExo2==false) {
					totVerifExo2 += 1;
					dejaVerifExo2 = true;
				}
			}
			$("#affSuccesExo2").show();
			$("#succesExo2").text("Diviser: "+totSuccesExo2+" / "+totVerifExo2);
		}
		else {
			alert("Complète le champ.");
		}
	}

	/* Réponse succes */

	if (succesExo1==true || succesExo2==true) {
		$("#btVerifier").hide();
		affSucces();
		enterSuivant=true;

		if (sessUser && eleveId!='0') {

			var d = new Date();
			var dateIn = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);

			if (typExercice=="Exo1") {
				activiteResult = totSuccesExo1+'/'+totVerifExo1;
				nbVerif = totVerifExo1;
			}
			else if (typExercice=="Exo2") {
				activiteResult = totSuccesExo2+'/'+totVerifExo2;
				nbVerif = totVerifExo2;
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

var nbCoups = 0;

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
				if(data != 'invalid')
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

	if (scrExo1!="0/0") {
		var savExo1 = scrExo1.split('/');
		var savSuccesExo1 = parseInt(savExo1[0]);
		var nbSuccesExo1 = totSuccesExo1 + savSuccesExo1;
		var savVerifExo1 = parseInt(savExo1[1]);
		var percentExo1 = Math.floor((savSuccesExo1 * 100) / savVerifExo1)+"%";
	}
	else {
		var percentExo1 = "";
	}

	if (scrExo2!="0/0") {
		var savExo2 = scrExo2.split('/');
		var savSuccesExo2 = parseInt(savExo2[0]);
		var nbSuccesExo2 = totSuccesExo2 + savSuccesExo2;
		var savVerifExo2 = parseInt(savExo2[1]);
		var percentExo2 = Math.floor((savSuccesExo2 * 100) / savVerifExo2)+"%";
	}
	else {
		var percentExo2 = "";
	}

	$("#graphExo1").text(percentExo1);
	$("#resultExo1").text("Multiplier : "+scrExo1);

	$("#graphExo2").text(percentExo2);
	$("#resultExo2").text("Diviser : "+scrExo2);

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
	
	totSuccesExo1 = totVerifExo1 = totSuccesExo2 = totVerifExo2 = 0;
	$("#succesExo1").text("");
	$("#succesExo2").text("");
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