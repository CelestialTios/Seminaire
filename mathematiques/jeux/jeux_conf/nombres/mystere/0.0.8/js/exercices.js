
/************************************************/

///// EXERCICES /////

/************************************************/

$("#propNbr").on('change input', function() {
	$(this).val($.trim($(this).val()).replace(/\s+/g,'').replace('.',','));			
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
	if (event.which == 13) {
		if (enterSuivant==true) {
			$("#btSuivant").click();
		}
		else {
			$("#btVerifier").click();
		}
	}
});

/* Générer */

function creerGrille() {
	contentWidth = $("#page").width();
	plateauWidth = Math.floor((contentWidth * 80) / 100);
	$("#compoBox").css({"width":plateauWidth+"px"});
	$("#depoCompoBox").removeClass("correct");
	$("#propNbr").val("");		
	/*if ('ontouchstart' in window == false) {
		$("#propNbr").focus();
	}*/
	$("#retPoint, #retour, #tentativ").hide();
	$("#tentativ").text("");

	/* Droites */
	droitePos = $("#droite").position();
	pointLeft = ((nbMyst*plateauWidth)/(nbMax-nbMin)) + droitePos.left - ($("#pointeur").width()/2) - ((nbMin*plateauWidth)/(nbMax-nbMin));
	$("#pointeur").css({'left':pointLeft});

	$("#affNbMin").text(nbMin);
	$("#affNbMax").text(nbMax);
}

function verifConfig() {

	if (nbMin>9998) {
		//alert("Le nombre minimum ne peut être supérieur à 9998.");
		nbMin = 9998;
		$("#nbMin").val(9998);
	}

	if (nbMax>10000) {
		//alert("Le nombre maximum ne peut être supérieur à 10000.");
		nbMax = 10000;
		$("#nbMax").val(10000);
	}

	if ($("#nbMin").is(":focus")==false) {
		if ($("#nbMin").val()=="") {
			//alert("Le nombre minimum ne peut être vide.");
			nbMin = 0;
			$("#nbMin").val(0);
		}
	}

	if ($("#nbMax").is(":focus")==false) {
		if ($("#nbMax").val()=="") {
			//alert("Le nombre maximum ne peut être vide.");
			nbMax = 100;
			$("#nbMax").val(100);
		}
	}
}

function generer() {

	$("#consigne").html("Ecris le nombre mystère compris entre "+nbMin+" et "+nbMax+".");

	nbVerif ++;

	/* Si on change d'exercice sur l'état "Suivant" */
	if (enterSuivant==true) {
		$("#btSuivant").click();
	}

	verifConfig();
	
	if (typNombre=="Entier") {
		nbMyst = Math.floor(Math.random()*(nbMax-nbMin+1)+nbMin);
	}
	else if (typNombre=="Decimal") {
		nbMyst = ((Math.random()*(nbMax-nbMin))+nbMin).toFixed(chApVirg);
	}
	creerGrille();
}

function verifStorExo() {
	if (typeof storExo=="undefined") {
		setTimeout(verifStorExo, 100);
	}
	else {
		generer();
	}
}
verifStorExo();

/* Véifier */

nbTentativ = nbSuccesMyst = nbVerif = 0;

var dOn = new Date();
var dateOn = dOn.getFullYear() + "-" + ("0"+(dOn.getMonth()+1)).slice(-2) + "-" + ("0" + dOn.getDate()).slice(-2) + " " + ("0" + dOn.getHours()).slice(-2) + ":" + ("0" + dOn.getMinutes()).slice(-2) + ":" + ("0" + dOn.getSeconds()).slice(-2);

function verifier() {

	enterSuivant = succesMyst = false;

	if ($("#propNbr").val()!="") {
		nbProp = $("#propNbr").val().replace(",",".");

		$("#retour, #tentativ").show();

		retPointLeft = ((nbProp*plateauWidth)/(nbMax-nbMin)) + droitePos.left - 10 - ((nbMin*plateauWidth)/(nbMax-nbMin));
		$("#retPoint").css({'left':retPointLeft, "border-bottom-color":"#E31C1C"}).show();

		if (nbProp<nbMyst) {
			$("#retour").text(""+nbProp.replace(".",",")+" est trop petit.");
			$("#propNbr").val("");
		}
		else if (nbProp>nbMyst) {
			$("#retour").text(""+nbProp.replace(".",",")+" est trop grand.");
			$("#propNbr").val("");
		}
		else if (nbProp==nbMyst) {
			$("#depoCompoBox").addClass("correct");
			$("#retour").hide();
			$("#retPoint").css({'left':retPointLeft, "border-bottom-color":"#A8D900"});
			succesMyst = true;
		}
		$("#tentativ").append(nbProp.replace(".",",")+" / ");
		nbCoups += 1;
	}
	else {
		alert("Indique un nombre dans le champ.")
	}			

	/* Réponse succes */

	if (succesMyst==true) {
		$("#btVerifier").hide();
		nbSuccesMyst += 1;
		$("#affSuccesMyst").show();
		$("#succesMyst").text("Nombre(s) découvert(s): "+nbSuccesMyst);
		affSucces();
		enterSuivant=true;

		if (sessUser && eleveId!='0') {

			var d = new Date();
			var dateIn = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);

			activiteResult = nbSuccesMyst+'/'+nbVerif;
			
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
			//'../apps/test/admin/ordonner/'+$("#version").html()+'/resultats-emojis-ajax.php',
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

	$("#graphExo1").text(scrExo1);

	$("#resultExo1").text("Nombres mystères découverts");

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
	
	nbSuccesMyst = 0;
	$("#succesMyst").text("");
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