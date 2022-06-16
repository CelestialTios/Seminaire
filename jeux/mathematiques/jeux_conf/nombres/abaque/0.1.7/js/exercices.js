
/************************************************/

///// EXERCICES /////

/************************************************/

$("#propExo2").on('input change', function() {
	$('#digBox').removeClass("incorrect");
	$(this).val($.trim($(this).val()).replace(/\s+/g,''));
	dejaVerifExo2 = false;
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

function generer() {

	if(typActivite=='Interactive') {
		$('#alertT').css({'display':'inline-block'});
	}
	else {
		$('#alertT').css({'display':'none'});
	}

	/* Vérifier Suivant */
	if (enterSuivant==true) {
		$("#btSuivant").click();
	}

	/* Remove class */

	$("#digBox").removeClass("correct").removeClass("incorrect");

	dejaVerifExo1 = dejaVerifExo2 = false;

	$("#digFtm").remove();
	$("#digital").prepend('<div id="digFtm"></div>');

	$("#btVider").click();

	/* Generer */

	$('.boxE').each(function(){
		$(this).fadeOut(300, function () {
			$(this).remove();
		});
	});

	if (typActivite=='Exercices' && typExercice=='Composer') {
		$("#consigne").html("Déplace les blocs dans l'abaque pour composer le nombre ci-dessous.").show();
		valExo1 = Math.floor(Math.random() * (nbMax + 1 - nbMin) + nbMin);
		$('#digExo1').html(valExo1);
	}
	else if (typActivite=='Exercices' && typExercice=='Ecrire') {
		$("#consigne").html("Ecris le nombre composé dans l'abaque.").show();
		if ('ontouchstart' in window == false) {
			$("#propExo2").focus();
		}
		valExo2 = Math.floor(Math.random() * (nbMax + 1 - nbMin) + nbMin);
		$('#digVal').html(valExo2);
		$('#propExo2').val('');
		$('#propExo2').css({'width':$('#tdD').width()-24});

		valTemp = valExo2;

		if (valTemp>=100) {
			var nbCent = Math.floor(valTemp/100);
			for (var i = 0; i < nbCent; i++) {
				newCent = $('#blocC').clone();
				newCent.addClass("boxE")
				.css({"position":"absolute", "opacity":"1", "z-index":1});
				if ($("#page").width()<=1200) {
					newCent.css("left", +20 +(i*15) +"px");
					newCent.css("top", 50 +(i*15) +"px");
				}
				if ($("#page").width()<=1300) {
					newCent.css("left", +20 +(i*20) +"px");
					newCent.css("top", 70 +(i*20) +"px");
				}
				else {
					newCent.css("left", +40 +(i*20) +"px");
					newCent.css("top", 90 +(i*20) +"px");
				}
				
				makeDrag(newCent);
				$("#dropC").append(newCent);
			}
		}
		valTemp = valTemp - (100 * Math.floor(valTemp/100));

		if (valTemp>=10) {
			var nbDiz = Math.floor(valTemp/10);
			for (var i = 0; i < nbDiz; i++) {
				newDiz = $('#blocD').clone();
				newDiz.addClass("boxE")
				.css({"position":"absolute", "opacity":"1", "z-index":1})
				.css({"left":"50%", "transform":"translateX(-50%)"})
				.css("top", 90 +(i*22) +"px");
				makeDrag(newDiz);
				$("#dropD").append(newDiz);
			}
		}
		valTemp = valTemp - (10 * Math.floor(valTemp/10));

		if (valTemp>=1) {
			var nbUnit = Math.floor(valTemp);
			for (var i = 0; i < nbUnit; i++) {
				newUnit = $('#blocU').clone();
				newUnit.addClass("boxE")
				.css({"position":"absolute", "opacity":"1", "z-index":1})
				.css("left", 40 +(i*21) +"px")
				.css("top", 90 +"px");
				makeDrag(newUnit);
				$("#dropU").append(newUnit);
			}
		}
		valTemp = valTemp - Math.floor(valTemp);
	}
	else {
		$("#consigne").html("").hide();
	}
}

function makeDrag(t) {	
	$(t).draggable();
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

	if (typExercice=="Composer") {

		if (valCompo!=0) {
			if (valExo1==valCompo) {
				$("#digBox").removeClass("incorrect").addClass("correct");
				succesExo1 = true;
				if (dejaVerifExo1==false) {
					totSuccesExo1 += 1;
					totVerifExo1 += 1;
					dejaVerifExo1 = true;
				}
			}
			else {
				$("#digBox").removeClass("correct").addClass("incorrect");
				succesExo1 = false;
				if (dejaVerifExo1==false) {
					totVerifExo1 += 1;
					dejaVerifExo1 = true;
				}
			}
			$("#affSuccesExo1").show();
			$("#succesExo1").text("Composer le nombre: "+totSuccesExo1+" / "+totVerifExo1);
		}
		else {
			alert("Dépose des blocs sur le plateau.");
		}
	}
	else if (typExercice=="Ecrire") {

		if ($('#propExo2').val()!='') {
			if ($('#propExo2').val()==valExo2) {
				$("#digBox").removeClass("incorrect").addClass("correct");
				succesExo2 = true;
				if (dejaVerifExo2==false) {
					totSuccesExo2 += 1;
					totVerifExo2 += 1;
					dejaVerifExo2 = true;
				}
			}
			else {
				$("#digBox").removeClass("correct").addClass("incorrect");
				succesExo2 = false;
				if (dejaVerifExo2==false) {
					totVerifExo2 += 1;
					dejaVerifExo2 = true;
				}
			}
			$("#affSuccesExo2").show();
			$("#succesExo2").text("Ecrire le nombre: "+totSuccesExo2+" / "+totVerifExo2);
		}
		else {
			alert("Complète le champ.");
		}
	}

	/* Réponse succes */

	if (succesExo1==true || succesExo2==true) {
		affSucces();
		enterSuivant=true;

		if (sessUser && eleveId!='0') {

			var d = new Date();
			var dateIn = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);

			if (typExercice=="Composer") {
				activiteResult = totSuccesExo1+'/'+totVerifExo1;
				nbVerif = totVerifExo1;
			}
			else if (typExercice=="Ecrire") {
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
	$("#digFtm").remove();
	$("#btVerifier").hide();
	$("#btSuivant").show();
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
	$("#graphExo2").text(percentExo2);

	$("#resultExo1").text("Composer le nombre : "+scrExo1);
	$("#resultExo2").text("Ecrire le nombre : "+scrExo2);

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