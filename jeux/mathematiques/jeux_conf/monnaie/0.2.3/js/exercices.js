
/************************************************/

///// EXERCICES /////

/************************************************/

$("#digEcrire").on('input change', function() {
	$("#digEcrire").removeClass("incorrect");
	$("#digEcrire").removeClass("correct");
	dejaVerifEcrire = false;
	$(this).val($.trim($(this).val()).replace(/\s+/g,'').replace('.',','));
});

$("#affSomme").change(function() {
	$("#digCompoBox").removeClass("incorrect");
	$("#digCompoBox").removeClass("correct");
	dejaVerifRendre = false;
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
	affichage();
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

function generer() {

	/* Si on change d'exercice sur l'état "Suivant" */
	if (enterSuivant==true) {
		$("#btSuivant").click();
	}

	dejaVerifComposer = dejaVerifEcrire = dejaVerifRendre = false;

	/* Calcul de la somme à composer */

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

	if ($("#nbMin").is(":focus")==false) {
		if ($("#nbMin").val()=="") {
			alert("Le nombre minimum ne peut être vide.");
			nbMin = 0;
			$("#nbMin").val(0);
		}
	}

	if ($("#nbMax").is(":focus")==false && $("#nbMin").is(":focus")==false) {
		if ($("#nbMax").val()=="") {
			alert("Le nombre maximum ne peut être vide.");
			nbMax = 50;
			$("#nbMax").val(50);
		}
	}

	if ($("#nbMin").val()!="" && $("#nbMax").val()!="") {

		if (typActivite=="typExercices" && typNombre=="rdEntier") {
			if (nbMin>=nbMax-1) {
				alert("Avec les entiers, le nombre maximum doit être au moins 2 unités plus grand que le nombre minimum.");
				nbMax = nbMin + 2;
				$("#nbMax").val(nbMax);
				generer();
			}
			else {
				do {
					valComposer = Math.floor(Math.random() * (nbMax - nbMin) + nbMin) + 1;
				} while (valComposer == valPreced/*  || valComposer == 0*/);
			}
				
		}
		else if (typActivite=="typExercices" && typNombre=="rdDecimal") {
			if (nbMin>=nbMax) {
				alert("Avec les décimaux, le nombre maximum doit être au moins 1 unité plus grand que le nombre minimum.");
				nbMax = nbMin + 1;
				$("#nbMax").val(nbMax);
				generer();
			}
			else {
				do {
					valComposer = Math.random() * (nbMax - nbMin) + nbMin;
				} while (valComposer == valCompo  || valComposer == 0);
			}
		}
	}
	
	valPreced = valComposer;

	if (typExercice=="typComposer") {

		$("#affComposer").text(valComposer.toFixed(2).replace(".",",") + " €");
	}

	else if (typExercice=="typEcrire") {

		$("#affComposer").text(valComposer.toFixed(2).replace(".",",") + " €");

		str = "";

		valComposer = valComposer.toFixed(2);

		if (valComposer>=500) {
			nb500e = Math.floor(valComposer/500);
			for (var i = 0; i < nb500e; i++) {
				str += '<img class="b500 monnaie slidRightRot" src="../apps/mathematiques/grandeurs/monnaie/'+$("#version").text()+'/img/billet-500e.png" width="154.32">';
			}
		}
		valComposer = valComposer - (500 * Math.floor(valComposer/500));
		valComposer = valComposer.toFixed(2);

		if (valComposer>=200) {
			nb200e = Math.floor(valComposer/200);
			for (var i = 0; i < nb200e; i++) {
				str += '<img class="b200 monnaie slidRightRot" src="../apps/mathematiques/grandeurs/monnaie/'+$("#version").text()+'/img/billet-200e.png" width="147.5">';
			}
		}
		valComposer = valComposer - (200 * Math.floor(valComposer/200));
		valComposer = valComposer.toFixed(2);

		if (valComposer>=100) {
			nb100e = Math.floor(valComposer/100);
			for (var i = 0; i < nb100e; i++) {
				str += '<img class="b100 monnaie slidRightRot" src="../apps/mathematiques/grandeurs/monnaie/'+$("#version").text()+'/img/billet-100e.png" width="142">';
			}
		}
		valComposer = valComposer - (100 * Math.floor(valComposer/100));
		valComposer = valComposer.toFixed(2);

		if (valComposer>=50) {
			nb50e = Math.floor(valComposer/50);
			for (var i = 0; i < nb50e; i++) {
				str += '<img class="b50 monnaie slidRightRot" src="../apps/mathematiques/grandeurs/monnaie/'+$("#version").text()+'/img/billet-50e.png" width="135.22">';
			}
		}
		valComposer = valComposer - (50 * Math.floor(valComposer/50));
		valComposer = valComposer.toFixed(2);

		if (valComposer>=20) {
			nb20e = Math.floor(valComposer/20);
			for (var i = 0; i < nb20e; i++) {
				str += '<img class="b20 monnaie slidRightRot" src="../apps/mathematiques/grandeurs/monnaie/'+$("#version").text()+'/img/billet-20e.png" width="122.18">';
			}
		}
		valComposer = valComposer - (20 * Math.floor(valComposer/20));
		valComposer = valComposer.toFixed(2);

		if (valComposer>=10) {
			nb10e = Math.floor(valComposer/10);
			for (var i = 0; i < nb10e; i++) {
				str += '<img class="b10 monnaie slidRightRot" src="../apps/mathematiques/grandeurs/monnaie/'+$("#version").text()+'/img/billet-10e.png" width="122.73">';
			}
		}
		valComposer = valComposer - (10 * Math.floor(valComposer/10));
		valComposer = valComposer.toFixed(2);

		if (valComposer>=5) {
			nb5e = Math.floor(valComposer/5);
			for (var i = 0; i < nb5e; i++) {
				str += '<img class="b5 monnaie slidRightRot" src="../apps/mathematiques/grandeurs/monnaie/'+$("#version").text()+'/img/billet-5e.png" width="115.91">';
			}
		}
		valComposer = valComposer - (5 * Math.floor(valComposer/5));
		valComposer = valComposer.toFixed(2);

		if (valComposer>=2) {
			nb2e = Math.floor(valComposer/2);
			for (var i = 0; i < nb2e; i++) {
				str += '<img class="p2 monnaie slidRightRot" src="../apps/mathematiques/grandeurs/monnaie/'+$("#version").text()+'/img/piece-2e.png" width="70">';
			}
		}
		valComposer = valComposer - (2 * Math.floor(valComposer/2));
		valComposer = valComposer.toFixed(2);

		if (valComposer>=1) {
			nb1e = Math.floor(valComposer/1);
			for (var i = 0; i < nb1e; i++) {
				str += '<img class="p1 monnaie slidRightRot" src="../apps/mathematiques/grandeurs/monnaie/'+$("#version").text()+'/img/piece-1e.png" width="62.5">';
			}
		}
		valComposer = valComposer - (1 * Math.floor(valComposer/1));
		valComposer = valComposer.toFixed(2);

		if (valComposer>=0.5) {
			nb50c = Math.floor(valComposer/0.5);
			for (var i = 0; i < nb50c; i++) {
				str += '<img class="p50c monnaie slidRightRot" src="../apps/mathematiques/grandeurs/monnaie/'+$("#version").text()+'/img/piece-50c.png" width="62.5">';
			}
		}
		valComposer = valComposer - (0.5 * Math.floor(valComposer/0.5));
		valComposer = valComposer.toFixed(2);

		if (valComposer>=0.2) {
			nb20c = Math.floor(valComposer/0.2);
			for (var i = 0; i < nb20c; i++) {
				str += '<img class="p20c monnaie slidRightRot" src="../apps/mathematiques/grandeurs/monnaie/'+$("#version").text()+'/img/piece-20c.png" width="60.5">';
			}
		}
		valComposer = valComposer - (0.2 * Math.floor(valComposer/0.2));
		valComposer = valComposer.toFixed(2);

		if (valComposer>=0.1) {
			nb10c = Math.floor(valComposer/0.1);
			for (var i = 0; i < nb10c; i++) {
				str += '<img class="p10c monnaie slidRightRot" src="../apps/mathematiques/grandeurs/monnaie/'+$("#version").text()+'/img/piece-10c.png" width="54.5">';
			}
		}
		valComposer = valComposer - (0.1 * Math.floor(valComposer/0.1));
		valComposer = valComposer.toFixed(2);

		if (valComposer>=0.05) {
			nb5c = Math.floor(valComposer/0.05);
			for (var i = 0; i < nb5c; i++) {
				str += '<img class="p5c monnaie slidRightRot" src="../apps/mathematiques/grandeurs/monnaie/'+$("#version").text()+'/img/piece-5c.png" width="54.4">';
			}
		}
		valComposer = valComposer - (0.05 * Math.floor(valComposer/0.05));
		valComposer = valComposer.toFixed(2);

		if (valComposer>=0.02) {
			nb2c = Math.floor(valComposer/0.02);
			for (var i = 0; i < nb2c; i++) {
				str += '<img class="p2c monnaie slidRightRot" src="../apps/mathematiques/grandeurs/monnaie/'+$("#version").text()+'/img/piece-2c.png" width="49.7">';
			}
		}
		valComposer = valComposer - (0.02 * Math.floor(valComposer/0.02));
		valComposer = valComposer.toFixed(2);

		if (valComposer>=0.01) {
			nb1c = Math.floor(valComposer/0.01);
			for (var i = 0; i < nb1c; i++) {
				str += '<img class="p1c monnaie slidRightRot" src="../apps/mathematiques/grandeurs/monnaie/'+$("#version").text()+'/img/piece-1c.png" width="45.2">';
			}
		}

		$("#depoEcrire").html(str);
	}

	else if (typExercice=="typRendre") {
		jeDois = valComposer.toFixed(2);
		$("#jeDois").html('<span class="numInfBul">1</span>Je dois <strong>'+jeDois+' €</strong>');

		if (valComposer<1) {
			jeDonne = 1;
		}
		else if (valComposer>=1  && valComposer<2) {
			jeDonne = 2;
		}
		else if (valComposer>=2  && valComposer<5) {
			jeDonne = 5;
		}
		else if (valComposer>=5  && valComposer<10) {
			jeDonne = 10;
		}
		else if (valComposer>=10  && valComposer<20) {
			jeDonne = 20;
		}
		else if (valComposer>=20  && valComposer<50) {
			jeDonne = 50;
		}
		else if (valComposer>=50  && valComposer<100) {
			jeDonne = 100;
		}
		else if (valComposer>=100  && valComposer<200) {
			jeDonne = 200;
		}
		else if (valComposer>=200  && valComposer<500) {
			jeDonne = 500;
		}
		else if (valComposer>=500) {
			jeDonne = (Math.ceil(valComposer/500))*500;
		}

		jeDonne = jeDonne.toFixed(2);

		$("#jeDonne").html('<span class="numInfBul">2</span>Je donne <strong>'+jeDonne+' €</strong>');

		soluce = (jeDonne - jeDois).toFixed(2);
	}

}

str = "";

/* Véifier */

nbSuccesComposer = nbVerifComposer = nbSuccesEcrire = nbVerifEcrire = nbSuccesRendre = nbVerifRendre = nbVerif = 0;

var dOn = new Date();
var dateOn = dOn.getFullYear() + "-" + ("0"+(dOn.getMonth()+1)).slice(-2) + "-" + ("0" + dOn.getDate()).slice(-2) + " " + ("0" + dOn.getHours()).slice(-2) + ":" + ("0" + dOn.getMinutes()).slice(-2) + ":" + ("0" + dOn.getSeconds()).slice(-2);

function verifier() {

	succesComposer = succesEcrire = succesRendre = false;
	enterSuivant = false;

	if (typExercice=="typComposer") {

		if ($("#affSomme").val()!="0,00 €") {
			if ($("#affComposer").text()==$("#affSomme").val()) {
				$("#affComposer").removeClass("incorrect");
				$("#affComposer").addClass("correct");
				succesComposer = true;
				if (dejaVerifComposer==false) {
					nbSuccesComposer += 1;
					nbVerifComposer += 1;
					dejaVerifComposer = true;
				}
			}
			else {
				$("#affComposer").removeClass("correct");
				$("#affComposer").addClass("incorrect");
				succesComposer = false;
				if (dejaVerifComposer==false) {
					nbVerifComposer += 1;
					dejaVerifComposer = true;
				}
			}
			$("#affSuccesComposer").show();
			$("#succesComposer").text("Composer la somme: "+nbSuccesComposer+" / "+nbVerifComposer);
		}
		else {
			alert("Dépose la monnaie sur le plateau.");
		}
	}

	else if (typExercice=="typEcrire") {
		if ($("#digEcrire").val()!="") {

			convertAffComposer = Number($("#affComposer").text().replace(",",".").replace(" €",""));
			convertDigEcrire = Number($("#digEcrire").val().replace(",","."));

			if (convertDigEcrire==convertAffComposer) {
				$("#digEcrire").removeClass("incorrect");
				$("#digEcrire").addClass("correct");
				succesEcrire = true;
				if (dejaVerifEcrire==false) {
					nbSuccesEcrire += 1;
					nbVerifEcrire += 1;
					dejaVerifEcrire = true;
				}
			}
			else {
				$("#digEcrire").removeClass("correct");
				$("#digEcrire").addClass("incorrect");
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

	else if (typExercice=="typRendre") {
		if ($("#affSomme").val()!="0,00 €") {
			convertAffSomme = Number($("#affSomme").val().replace(",",".").replace(" €",""));
			if (convertAffSomme==soluce) {
				$("#digCompoBox").removeClass("incorrect");
				$("#digCompoBox").addClass("correct");
				succesRendre = true;
				if (dejaVerifRendre==false) {
					nbSuccesRendre += 1;
					nbVerifRendre += 1;
					dejaVerifRendre = true;
				}
			}
			else {
				$("#digCompoBox").removeClass("correct");
				$("#digCompoBox").addClass("incorrect");
				succesRendre = false;
				if (dejaVerifRendre==false) {
					nbVerifRendre += 1;
					dejaVerifRendre = true;
				}
			}
			$("#affSuccesRendre").show();
			$("#succesRendre").text("Rendre la monnaie: "+nbSuccesRendre+" / "+nbVerifRendre);
		}
		else {
			alert("Dépose la monnaie sur le plateau.");
		}
	}

	/* Réponse succes */

	if (succesComposer==true || succesEcrire==true || succesRendre==true) {
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
			else if (typExercice=="typRendre") {
				activiteResult = nbSuccesRendre+'/'+nbVerifRendre;
				nbVerif = nbVerifRendre;
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

		nbSucces = nbSuccesComposer + nbSuccesEcrire + nbSuccesRendre;
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

	if (rendreMonnaie!="0/0") {
		var savRendreMonnaie = rendreMonnaie.split('/');
		var savSuccesRendreMonnaie = parseInt(savRendreMonnaie[0]);
		var nbSuccesRendreNew = nbSuccesRendre + savSuccesRendreMonnaie;
		var savVerifRendreMonnaie = parseInt(savRendreMonnaie[1]);
		var percentRendre = Math.floor((savSuccesRendreMonnaie * 100) / savVerifRendreMonnaie)+"%";
	}
	else {
		var percentRendre = "";
	}

	$("#graphComposer").text(percentComposer);
	$("#graphEcrire").text(percentEcrire);
	$("#graphRendre").text(percentRendre);

	$("#resultComposer").text("Composer la somme : "+composerSomme);
	$("#resultEcrire").text("Ecrire la somme : "+ecrireSomme);
	$("#resultRendre").text("Rendre la monnaie : "+rendreMonnaie);

	$(".collectBox").css({"background-color":colObjet, "border-color":colBord});
	$(".emojiX").css({"background-color":"rgba(255, 255, 255, 0.3)"/*, "color":colPage*/});

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
	
	nbSuccesComposer = nbVerifComposer = nbSuccesEcrire = nbVerifEcrire = nbSuccesRendre = nbVerifRendre = nbVerif = 0;
	$("#succesComposer").text("");
	$("#succesEcrire").text("");
	$("#succesRendre").text("");
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