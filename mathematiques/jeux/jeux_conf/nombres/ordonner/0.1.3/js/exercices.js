
/************************************************/

///// EXERCICES /////

/************************************************/

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

chkForcDecimal = false;

function hasardunique(n){
	tbl = new Array();

	for(var i=0;i<nbItems;i++){
		if (typNombre=="Entier") {
			var a = Math.floor(Math.random()*n)+nbMin;
		}
		else if (typNombre=="Decimal") {
			if (chkForcDecimal==true) {
				var a = ((Math.random()*n)+nbMin).toFixed(chApVirg);
			}
			else {
				var a = Number(((Math.random()*n)+nbMin).toFixed(chApVirg));
			}
		}
			
		if( tbl["z"+a]==undefined ){
			tbl["z"+a]=a;
			tbl[i]=a;
		}
		else {
			i--;
		}
	}
	return tbl;
}

function isCroissant(arr = []) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i + 1] <= arr[i]) {
			return false;
		}
	}
	return true;
}

function isDecroissant(arr = []) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] <= arr[i + 1]) {
			return false;
		}
	}
	return true;
}

function distrib() {

	t=hasardunique(nbDif);

	/* Vérifier si t désordre */

	if (typOrdre=="Croissant" && isCroissant(t)) {
		distrib();
	}

	if (typOrdre=="Decroissant" && isDecroissant(t)) {
		distrib();
	}

	$("#depoCompo").text("");

	for (var i = 0; i < nbItems; i++) {
		
		if (typNombre=="Entier") {
			$("#depoCompo").append('<div id="box'+t[i]+'" class="box draggable" data-val="'+t[i]+'">'+t[i]+'</div>');
		}
		else if (typNombre=="Decimal") {
			var affVal = ""+t[i];
			var affId = ""+t[i];
			if (affVal.indexOf(".")!=-1) {
				affId = affId.replace('.','-');
				affVal = affVal.replace('.',',');
			}
			$("#depoCompo").append('<div id="box'+affId+'" class="box draggable" data-val="'+t[i]+'">'+affVal+'</div>');
		}
		$(".box").css({"border-color":colBord, "font-size":tailleFont+"em"});
	}
}

function generer() {

	if(typActivite=='typInteractive') {
		$('#alertT').css({'display':'inline-block'});
	}
	else {
		$('#alertT').css({'display':'none'});
	}

	/* Si on change d'exercice sur l'état "Suivant" */
	if (enterSuivant==true) {
		$("#btSuivant").click();
	}

	dejaVerif = false;

	if (typOrdre=='Croissant') {strOrdre='croissant';} else if (typOrdre=='Decroissant') {strOrdre='décroissant';}

	$("#consigne").html("Range les nombres dans l'ordre "+strOrdre+".");

	if (typNombre=="Entier") {
		nbDif = (nbMax-nbMin+1);
		if (nbDif/nbItems>=1) {
			distrib();
		}
		else {
			alert("Les réglages choisis (Nombre d'items, Min, Max) ne permettent pas de générer l'exercice.")
		}
	}
	else if (typNombre=="Decimal") {
		var limit = 1/(Math.pow(10, chApVirg));
		nbDif = (nbMax-nbMin);
		if (nbDif/nbItems>=limit) {
			distrib();
		}
		else {
			alert("Les réglages choisis (Nombre d'items, Min, Max) ne permettent pas de générer l'exercice.")
		}
	}
}

/* Véifier */

nbVerifCroissant = nbVerifDecroissant = 0;
nbSuccesCroissant = nbSuccesDecroissant = totSuccesCroissant = totSuccesDecroissant = 0;
dejaVerifCroissant = false;
dejaVerifDecroissant = false;

var dOn = new Date();
var dateOn = dOn.getFullYear() + "-" + ("0"+(dOn.getMonth()+1)).slice(-2) + "-" + ("0" + dOn.getDate()).slice(-2) + " " + ("0" + dOn.getHours()).slice(-2) + ":" + ("0" + dOn.getMinutes()).slice(-2) + ":" + ("0" + dOn.getSeconds()).slice(-2);

function verifier() {

	nbSuccesCroissant = nbSuccesDecroissant = 0;

	if (typOrdre=="Croissant") {
		if (!dejaVerifCroissant)
		{
			nbVerifCroissant += 1;
			dejaVerifCroissant=true;
		}
	}
	else if (typOrdre=="Decroissant") {
		if (!dejaVerifDecroissant)
		{
			nbVerifDecroissant += 1;
			dejaVerifDecroissant=true;
		}
}

	enterSuivant = false;

	tOrdre = t.sort(function(a, b){return a-b});

	if (typOrdre=="Decroissant") {
		tOrdre.reverse();
	}

	for (var i = 0; i < nbItems; i++) {
		var affId = ""+tOrdre[i];
		if (affId.indexOf(".")!=-1) {
			affId = affId.replace('.','-');
		}
		if (tOrdre[i]==tSort[i]) {
			if (typNombre=="Entier") {
				$("#box"+tOrdre[i]).removeClass("incorrect").addClass("correct");
			}
			else if (typNombre=="Decimal") {
				$("#box"+affId.replace('.','-')).removeClass("incorrect").addClass("correct");
			}

			if (typOrdre=="Croissant") {
				nbSuccesCroissant += 1;
			}
			else if (typOrdre=="Decroissant") {
				nbSuccesDecroissant += 1;
			}
		}
		else {
			if (typNombre=="Entier") {
				$("#box"+tOrdre[i]).removeClass("correct").addClass("incorrect");
			}
			else if (typNombre=="Decimal") {
				$("#box"+affId.replace('.','-')).removeClass("correct").addClass("incorrect");
			}
		}
	}

	/* Réponse succes */

	if (nbSuccesCroissant==nbItems) {
		$("#btVerifier").hide();
		totSuccesCroissant += 1;
		$("#affSuccesCroissant").show();
		$("#succesCroissant").text("Ordre croissant: "+totSuccesCroissant+" / "+nbVerifCroissant);
		affSucces();
		enterSuivant=true;			
	}

	if (nbSuccesDecroissant==nbItems) {
		$("#btVerifier").hide();
		totSuccesDecroissant += 1;
		$("#affSuccesDecroissant").show();
		$("#succesDecroissant").text("Ordre décroissant: "+totSuccesDecroissant+" / "+nbVerifDecroissant);
		affSucces();
		enterSuivant=true;			
	}

	if (sessUser && eleveId!='0') {

		var d = new Date();
		var dateIn = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);

		if (typOrdre=="Croissant") {
			activiteResult = totSuccesCroissant+'/'+nbVerifCroissant;
			nbVerif = nbVerifCroissant;
		}
		else if (typOrdre=="Decroissant") {
			activiteResult = totSuccesDecroissant+'/'+nbVerifDecroissant;
			nbVerif = nbVerifDecroissant;
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
		var nbSuccesExo1 = totSuccesCroissant + savSuccesExo1;
		var savVerifExo1 = parseInt(savExo1[1]);
		var percentExo1 = Math.floor((savSuccesExo1 * 100) / savVerifExo1)+"%";
	}
	else {
		var percentExo1 = "";
	}
		

	if (scrExo2!="0/0") {
		var savExo2 = scrExo2.split('/');
		var savSuccesExo2 = parseInt(savExo2[0]);
		var nbSuccesExo2 = totSuccesCroissant + savSuccesExo2;
		var savVerifExo2 = parseInt(savExo2[1]);
		var percentExo2 = Math.floor((savSuccesExo2 * 100) / savVerifExo2)+"%";
	}
	else {
		var percentExo2 = "";
	}

	$("#graphExo1").text(percentExo1);
	$("#graphExo2").text(percentExo2);

	$("#resultExo1").text("Ordre croissant : "+scrExo1);
	$("#resultExo2").text("Ordre décroissant : "+scrExo2);

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
	
	nbVerifCroissant = nbVerifDecroissant = totSuccesCroissant = totSuccesDecroissant = 0;
	$("#succesCroissant").text("");
	$("#succesDecroissant").text("");
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