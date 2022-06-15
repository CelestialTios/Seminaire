
/************************************************/

///// EXERCICES /////

/************************************************/

$("#digEcrire").on('input change', function() {
	$("#digEcrireBox").removeClass("incorrect");
	$("#digEcrireBox").removeClass("correct");
	dejaVerifEcrire = false;
	$(this).val($.trim($(this).val()).replace(/\s+/g,''));
});

$("#affValG").change(function() {
	$("#digCompoBoxG").removeClass("incorrect");
	$("#digCompoBoxG").removeClass("correct");
	dejaVerifComposer = false;
});

$("#affValD").change(function() {
	$("#digCompoBoxD").removeClass("incorrect");
	$("#digCompoBoxD").removeClass("correct");
	dejaVerifComposer = false;
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
	if (event.which == 13 && typActivite=='typExercices') {
		if (enterSuivant==true) {
			$("#btSuivant").click();
		}
		else {
			$("#btVerifier").click();
		}
	}
});

/* Générer */

valPreced = valComposer = 0;
tbColMasse = ['#1791EF','blue','green','#CE586D','purple','orange','gray','#36D0A3','#dd1458','#84B01D','#FA7354'];
comptColMasse = 0;

function generer() {

	/* Si on change d'exercice sur l'état "Suivant" */
	if (enterSuivant==true) {
		$("#btSuivant").click();
	}

	dejaVerifComposer = dejaVerifEcrire= false;

	/* Calcul de la masse à composer */

	if (nbMin>9990) {
		alert("Le nombre minimum ne peut être supérieur à 9990.");
		nbMin = 9990;
		$("#nbMin").val(9990);
	}

	if (nbMax>10000) {
		alert("Le nombre maximum ne peut être supérieur à 10000.");
		nbMax = 10000;
		$("#nbMax").val(10000);
	}
	
	valPreced = valComposer;
	valCompoG = valCompoD = 0;

	if (typActivite=="typExercices") {
		if (nbMin>=nbMax-1) {
			alert("Le nombre maximum doit être plus grand que le nombre minimum d'au moins 2 unités.");
			nbMax = nbMin + 2;
			$("#nbMax").val(nbMax);
			generer();
		}
		else {
			do {
				valComposer = Math.floor(Math.random() * (nbMax - nbMin) + nbMin) + 1;
			} while (valComposer == valPreced);
		}

		$("#affValG").html(valComposer + " g");
		masseAlea = '<div id="masseAlea" class="dam"></div>';
		$("#platoG").append(masseAlea);
		
		colAlea = tbColMasse[comptColMasse];
		comptColMasse += 1;
		if (comptColMasse==11) {
			comptColMasse = 0;
		}

		if ((nbMax - nbMin) + nbMin + 50 >= 280) {
			xAlea = Math.floor(Math.random() * 200) + 50 + "px";
			yAlea = Math.floor(Math.random() * 200) + 50 + "px";
		}
		else {
			xAlea = Math.floor(Math.random() * (nbMax - nbMin) + nbMin) + 50 + "px";
			yAlea = Math.floor(Math.random() * (nbMax - nbMin) + nbMin) + 50 + "px";
		}

		$("#masseAlea").css({"border-radius":"6px", "width":xAlea, "height":yAlea, "background-color":colAlea, "position":"absolute", "bottom":"0", "left":"50%", "transform":"translateX(-50%)"});

		valCompoG = valComposer;
		$("#masseAlea").attr("data-val", valCompoG);
		if (valCompoG>=valCompoD) {
			valCompo = valCompoG - valCompoD;
			if (valCompo>=16) {
				valCompo = 16;
			}
			if (valCompo<=-16) {
				valCompo = -16;
			}				
			valRot = -valCompo;
			valY = valCompo * 5;
			vitesse = 20/valY;
		}
		else if (valCompoD>=valCompoG) {
			valCompo = valCompoD - valCompoG;
			if (valCompo>=16) {
				valCompo = 16;
			}
			if (valCompo<=-16) {
				valCompo = -16;
			}
			valRot = valCompo;
			valY = -valCompo * 5;
			vitesse = 20/-valY;
		}
		balance(valRot, valY);
	}
}

/* Véifier */

nbSuccesComposer = nbVerifComposer = nbSuccesEcrire = nbVerifEcrire = 0;

var dOn = new Date();
var dateOn = dOn.getFullYear() + "-" + ("0"+(dOn.getMonth()+1)).slice(-2) + "-" + ("0" + dOn.getDate()).slice(-2) + " " + ("0" + dOn.getHours()).slice(-2) + ":" + ("0" + dOn.getMinutes()).slice(-2) + ":" + ("0" + dOn.getSeconds()).slice(-2);

function verifier() {
	succesComposer = succesEcrire = false;
	enterSuivant = false;
	if (typExercice=="typComposer") {
		if ($("#affValD").html()!="0 g") {
			if ($("#affValD").html()==$("#affValG").html()) {
				$("#digCompoBoxG, #digCompoBoxD, #digEcrireBox").removeClass("incorrect");
				$("#digCompoBoxG, #digCompoBoxD, #digEcrireBox").addClass("correct");
				succesComposer = true;
				if (dejaVerifComposer==false) {
					nbSuccesComposer += 1;
					nbVerifComposer += 1;
					dejaVerifComposer = true;
				}
			}
			else {
				$("#digCompoBoxG, #digCompoBoxD, #digEcrireBox").removeClass("correct");
				$("#digCompoBoxG, #digCompoBoxD, #digEcrireBox").addClass("incorrect");
				succesComposer = false;
				if (dejaVerifComposer==false) {
					nbVerifComposer += 1;
					dejaVerifComposer = true;
				}
			}
			$("#affSuccesComposer").show();
			$("#succesComposer").text("Composer la masse: "+nbSuccesComposer+" / "+nbVerifComposer);
		}
		else {
			alert("Dépose les poids sur le plateau de la balance.");
		}
	}
	else if (typExercice=="typEcrire") {
		if ($("#digEcrire").val()!="") {
			if ($("#digEcrire").val()+" g"==$("#affValG").html()) {
				$("#digCompoBoxG, #digCompoBoxD, #digEcrireBox").removeClass("incorrect");
				$("#digCompoBoxG, #digCompoBoxD, #digEcrireBox").addClass("correct");
				succesEcrire = true;
				if (dejaVerifEcrire==false) {
					nbSuccesEcrire += 1;
					nbVerifEcrire += 1;
					dejaVerifEcrire = true;
				}
			}
			else {
				$("#digCompoBoxG, #digCompoBoxD, #digEcrireBox").removeClass("correct");
				$("#digCompoBoxG, #digCompoBoxD, #digEcrireBox").addClass("incorrect");
				succesEcrire = false;
				if (dejaVerifEcrire==false) {
					nbVerifEcrire += 1;
					dejaVerifEcrire = true;
				}
			}
			$("#affSuccesEcrire").show();
			$("#succesEcrire").text("Ecrire la somme: "+nbSuccesEcrire+" / "+nbVerifEcrire);
		}
		else {
			alert("Complète le champ.")
		}
	}

	/* Réponse succes */

	if (succesComposer==true || succesEcrire==true) {
		$("#btVerifier").hide();
		affSucces();
		enterSuivant=true;

		if (sessUser && eleveId!='0') {

			var d = new Date();
			var dateIn = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);

			if (typExercice=="typComposer") {
				activiteResult = nbSuccesComposer+'/'+nbVerifComposer;
				nbVerif = nbVerifComposer;
			}
			else if (typExercice=="typEcrire") {
				activiteResult = nbSuccesEcrire+'/'+nbVerifEcrire;
				nbVerif = nbVerifEcrire;
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
		nbSucces = nbSuccesComposer + nbSuccesEcrire;
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

	if (composerSomme!="0/0") {
		var savComposerSomme = composerSomme.split('/');
		var savSuccesComposerSomme = parseInt(savComposerSomme[0]);
		var nbSuccesComposerNew = nbSuccesComposer + savSuccesComposerSomme;
		var savVerifComposerSomme = parseInt(savComposerSomme[1]);
		var percentComposer = Math.floor((savSuccesComposerSomme * 100) / savVerifComposerSomme)+"%";
	}
	else {
		var percentComposer = "";
	}
		

	if (ecrireSomme!="0/0") {
		var savEcrireSomme = ecrireSomme.split('/');
		var savSuccesEcrireSomme = parseInt(savEcrireSomme[0]);
		var nbSuccesEcrireNew = nbSuccesEcrire + savSuccesEcrireSomme;
		var savVerifEcrireSomme = parseInt(savEcrireSomme[1]);
		var percentEcrire = Math.floor((savSuccesEcrireSomme * 100) / savVerifEcrireSomme)+"%";
	}
	else {
		var percentEcrire = "";
	}

	$("#graphComposer").text(percentComposer);
	$("#graphEcrire").text(percentEcrire);

	$("#resultComposer").text("Composer la masse : "+composerSomme);
	$("#resultEcrire").text("Ecrire la masse : "+ecrireSomme);

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
	
	nbSuccesComposer = nbVerifComposer = nbSuccesEcrire = nbVerifEcrire = 0;
	$("#succesComposer").text("");
	$("#succesEcrire").text("");
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