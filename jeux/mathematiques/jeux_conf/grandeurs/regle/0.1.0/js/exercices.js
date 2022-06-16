
/************************************************/

///// EXERCICES /////

/************************************************/

$("#propNbr").on('input change', function() {
	$("#propNbrBox").removeClass("incorrect correct");
	$(this).val($.trim($(this).val()).replace(/\s+/g,'').replace('.',','));
	dejaVerif = false;
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

/* Générer */

countCol = 0;

tbObjet = [["bic", 750], ["linge", 375], ["cle", 275], ["allumette", 250], ["cuter", 711], ["crayon", 710], ["trombone", 211], ["lunette", 700], ["cle2", 450], ["crayonCoul", 850], ["manette", 775], ["stylo", 651], ["tennis", 324], ["photo", 639], ["marqueur", 768]];
idObjet = 0;

function generer() {

	/* Si on change d'exercice sur l'état "Suivant" */
	if (enterSuivant==true) {
		$("#btSuivant").click();
	}

	dejaVerif = false;
	
	aleaTop = Math.floor(Math.random()*20)+30;
	aleaLeft = Math.floor(Math.random()*20)+10;

	$("#depoCompo").html('<div id="objt"></div>');

	if (typObjet=="Trait") {
		if (typNombre=="Entier") {
			aleaWidth = ((Math.floor(Math.random()*19))*grad10Decal)+grad10Decal;
			if (typOrientation=="Vertical" || typOrientation=="Aleatoire") {
				if (aleaWidth>(11*grad10Decal)) {
					aleaWidth = aleaWidth - (10 * grad10Decal);
				}					
			}
			mesure = Math.round((aleaWidth/grad1Decal)/10);
		}
		else if (typNombre=="Decimal") {
			aleaWidth = ((Math.floor(Math.random()*190))*grad1Decal);
			mesure = ((aleaWidth/grad1Decal)/10).toFixed(1);
		}
		$("#objt").css({
			"background-color":""+tbCouleurs[countCol]+"",
			"height":""+(Math.floor(Math.random()*15)+5)+"px",
			"width":+aleaWidth+"px",
		});
	}
	else if (typObjet=="Objet") {
		imgWidth = tbObjet[idObjet][1];
		if (typNombre=="Entier") {
			mesure = Math.round(imgWidth/grad10Decal);
			cssWidth = Math.ceil(mesure * grad10Decal);
		}
		else if (typNombre=="Decimal") {
			mesure = (Math.floor(imgWidth/grad10Decal) + Math.random()).toFixed(1);
			cssWidth = Math.ceil(mesure * grad10Decal);
		}

		$("#objt")
		.html('<div id="objet"><img src="../apps/mathematiques/grandeurs/regle/img/'+tbObjet[idObjet][0]+'.png" class="img"></div>')
		.css({
			"width":+cssWidth+"px",
		});

		if (checkCote==true) {
			$("#objet").addClass("objet");
		}
		else {
			$("#objet").removeClass("objet");
		}

		idObjet += 1;
		if (idObjet>14) {
			idObjet = 0;
		}
	}

	$("#objt")
	.css({
		"left":""+aleaLeft+"%",
		"top":""+aleaTop+"%",
	})
	.draggable({		
		stop: function() {
			if ('ontouchstart' in window == false) {
				$("#propNbr").focus();
			}
		}
	});		

	if (typOrientation=="Vertical") {
		$("#objt").css({"transform":"rotate(90deg"});
	}
	else if (typOrientation=="Aleatoire") {
		$("#objt").css({"transform":"rotate("+Math.floor(Math.random()*360)+"deg"});
	}

	countCol += 1;
	if (countCol>10) {
		countCol = 0;
	}

	$("#propNbrBox").removeClass("correct incorrect");
	$("#propNbr").val("");
}

/* Véifier */

nbVerifProp = totSuccesProp = 0;
dejaVerif = false;

var dOn = new Date();
var dateOn = dOn.getFullYear() + "-" + ("0"+(dOn.getMonth()+1)).slice(-2) + "-" + ("0" + dOn.getDate()).slice(-2) + " " + ("0" + dOn.getHours()).slice(-2) + ":" + ("0" + dOn.getMinutes()).slice(-2) + ":" + ("0" + dOn.getSeconds()).slice(-2);

function verifier() {

	succesProp = false;
	enterSuivant = false;

	if ($("#propNbr").val()!="") {		

		nbProp = $("#propNbr").val().replace(",",".");

		if (Number(nbProp)==Number(mesure)) {
			$("#propNbrBox").addClass("correct").removeClass("incorrect");
			succesProp = true;
			nbVerifProp += 1;
		}
		else {
			$("#propNbrBox").addClass("incorrect").removeClass("correct");
			succesProp = false;
			if (!dejaVerif)
			{
				nbVerifProp += 1;
				dejaVerif=true;
			}
		}
	}
	else {
		alert("Indique un nombre dans le champ.")
	}

	/* Réponse succes */

	if (succesProp==true) {
		$("#btVerifier").hide();
		totSuccesProp += 1;
		$("#affSuccesProp").show();
		$("#succesProp").text("Mesures: "+totSuccesProp+" / "+nbVerifProp);
		affSucces();
		enterSuivant=true;

		if (sessUser && eleveId!='0') {

			var d = new Date();
			var dateIn = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);

			activiteResult = totSuccesProp+'/'+nbVerifProp;
			
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
					nbVerif : nbVerifProp
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
				if(data != 'invalid')
				{
					//$("#groupSelect").empty();
					$("#plato").append(data);
				}
				else
				{
					alert('ca marche pas')
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
		var nbSuccesExo1 = totSuccesProp + savSuccesExo1;
		var savVerifExo1 = parseInt(savExo1[1]);
		var percentExo1 = Math.floor((savSuccesExo1 * 100) / savVerifExo1)+"%";
	}
	else {
		var percentExo1 = "";
	}

	$("#graphExo1").text(percentExo1);

	$("#resultExo1").text("Mesures : "+scrExo1);

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
	
	nbVerifProp = totSuccesProp = 0;
	$("#succesProp").text("");
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
