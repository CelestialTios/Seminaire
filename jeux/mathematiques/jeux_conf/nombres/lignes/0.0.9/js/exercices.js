
/************************************************/

///// EXERCICES /////

/************************************************/

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

/************************************************/

///// GENERER /////

/************************************************/

function arrondir(nombre, precision){
	var precision = precision || 2;
	var tmp = Math.pow(10, precision);
	return Math.round( nombre*tmp )/tmp;
}

function adaptStep() {
	if (nbDiff<0.001) {
		$('.alertOpt').remove();
		$('#options').append('<div class="alertOpt">La différence entre le nombre maximal et le nombre minimal doit être supérieure à 0,001.</div>');
	}
	else if (nbDiff<=0.01) {
		$('.alertOpt').remove();
		$("#nbMin, #nbMax").attr('step',0.001);
	}
	else if (nbDiff<=0.1) {
		$('.alertOpt').remove();
		$("#nbMin, #nbMax").attr('step',0.01);
	}
	else if (nbDiff<=1) {
		$('.alertOpt').remove();
		$("#nbMin, #nbMax").attr('step',0.1);
	}
	else {
		$('.alertOpt').remove();
		$("#nbMin, #nbMax").attr('step',1);
	}
}

function generer(min, max) {

	/* Si on change d'exercice sur l'état "Suivant" */
	if (enterSuivant==true) {
		$("#btSuivant").click();
	}

	dejaVerifSituer = dejaVerifEcrire = false;

	/**/

	nbDiff = max - min;

	adaptStep();
	
	nbChifApVirg = 4;	

	etalon = Math.floor((platoWidth * 90) / 100)/(nbDiv);
	/*if (nbDiff<=0.01) {
		etalon = arrondir(etalon, 3);
	}
	else if (nbDiff<=0.1) {
		etalon = arrondir(etalon, 2);
	}
	else if (nbDiff<=1) {
		etalon = arrondir(etalon, 1);
	}
	else {
		etalon = arrondir(etalon, 0);
	}*/
	$("#lign").html('<div id="drt"></div>').css({"width":etalon*nbDiv});
		
	$("#lign").append('<div id="box-0" class="box boxDeb"><div id="grd-'+i+'" class="grd"></div><div id="nbr-'+i+'" class="nbrDeb">'+nbMin.toString().replace('.',',')+'</div></div>');
	$("#lign").append('<div id="box-'+nbDiv+'" class="box boxDeb"><div id="grd-'+nbDiv+'" class="grd"></div><div id="nbr-'+nbDiv+'" class="nbrDeb">'+nbMax.toString().replace('.',',')+'</div></div>');
	$('#box-'+nbDiv).css({"left":nbDiv*etalon}).fadeIn(1000);

	for (var i = 1; i < nbDiv; i++) {

		var val = arrondir((min+(i*(nbDiff/nbDiv))), nbChifApVirg).toString().replace('.',',');
		
		$("#lign").append('<div id="box-'+i+'" class="box"><div id="grd-'+i+'" class="grd"></div><div id="nbr-'+i+'" class="nbr">'+val+'</div></div>');
		
		$("#box-"+i).hide().css({"left":i*etalon}).fadeIn(1000);
		
		if (chkDiv==false) {
			$(".nbr").hide();
		}		
		if (chkGrad==false) {
			$(".grd").hide();
		}
	}

	if (nbDivS!=0) {
		etalonS = Math.floor((platoWidth * 90) / 100)/(nbDivS);
		for (var i = 0; i <= nbDivS; i++) {
			var valS = arrondir((min+(i*(nbDiff/nbDivS))), nbChifApVirg).toString().replace('.',',');
			$("#lign").append('<div id="boxS-'+i+'" class="boxS"><div id="grdS-'+i+'" class="grdS"></div><div id="nbrS-'+i+'" class="nbrS">'+valS+'</div></div>');
			$("#boxS-"+i).hide().css({"left":i*etalonS}).fadeIn(1000);
		}
		if (chkDivS==false) {
			$(".nbrS").hide();
		}		
		if (chkGradS==false) {
			$(".grdS").hide();
		}
	}

	/**/

	if (typActivite=='Exercices') {

		if (nbDivS!=0 && nbDivS>nbDiv) {
			unite = nbDiff/nbDivS;
			nbUnite = nbDiff/unite;
			multMyst = Math.floor(Math.random() * nbUnite) + 1;
		}
		else {
			unite = nbDiff/nbDiv;
			nbUnite = nbDiff/unite;
			multMyst = Math.floor(Math.random() * nbUnite) + 1;
		}
		
		if (unite<=0.001) {
			nbrMyst = arrondir(nbMin + (multMyst*unite), 4);
		}
		else if (unite<=0.01) {
			nbrMyst = arrondir(nbMin + (multMyst*unite), 3);
		}
		else if (unite<=0.1) {
			nbrMyst = arrondir(nbMin + (multMyst*unite), 2);
		}
		else if (unite<=1) {
			nbrMyst = arrondir(nbMin + (multMyst*unite), 1);
		}
		else {
			nbrMyst = arrondir(nbMin + (multMyst*unite), 0);
		}
		nbrMyst = nbrMyst.toString().replace('.', ',');
		
		if (typExercice=='Situer') {
			$("#consigne").html("Situe le nombre <span class='nbrSit'>"+nbrMyst+"</span> avec le curseur.");

			$("#lign").append('<div id="boxSitu" class="boxSitu">?</div>');
			movCurs();
		}
		else if (typExercice=='Ecrire') {
			$("#tem").html(nbrMyst);
			$("#consigne").html("Ecris le nombre correspondant à l'emplacement du curseur.");
			$("#lign").append('<div id="boxEcrire" class="boxEcrire"><input type="tel" id="inptProp" class="inptProp"></div>');

			$("#inptProp").on('input change', function() {
				$("#inptProp").removeClass("incorrect");
				$("#inptProp").removeClass("correct");
				$(this).val($.trim($(this).val()).replace(/\s+/g,'').replace('.',','));
				dejaVerifEcrire = false;
			});

			nbrMyst = Number(nbrMyst.replace(',', '.'));
			
			if (nbDivS!=0 && nbDivS>nbDiv) {
				$("#boxEcrire").css('left', (((nbrMyst-nbMin)/unite)*etalonS)-($("#boxEcrire").width()/2));
			}
			else {
				$("#boxEcrire").css('left', (((nbrMyst-nbMin)/unite)*etalon)-($("#boxEcrire").width()/2));
			}

			nbrMyst = nbrMyst.toString().replace('.', ',');

			$("#inptProp").css('width', $("#tem").outerWidth()+'px').focus();
		}
		
		$("#consigne").css('display','inline-block');
	}
	else {
		$("#consigne").css('display','none');
	}

	function movCurs() {

		if (nbDivS!=0 && nbDivS>nbDiv) {
			gridEtalon = etalonS;
		}
		else {
			gridEtalon = etalon;
		}

		prop = '';

		$('#boxSitu').draggable({
			axis: "x",
			grid: [gridEtalon, 0],
			containment: "#depoCompo",
			start: function(e)
			{
				$("#boxSitu").removeClass("incorrectCurs");
				$("#boxSitu").removeClass("correctCurs");
				$("#boxSitu").html("?");
				dejaVerifSituer = false;
			},
			stop: function(e)
			{
				if (nbDivS!=0 && nbDivS>nbDiv) {
					prop = nbMin + (Math.round(($(this).position().left+($("#boxSitu").width()/2))/etalonS)*unite);
				}
				else {
					prop = nbMin + (Math.round(($(this).position().left+($("#boxSitu").width()/2))/etalon)*unite);
				}
				
				if (unite<=0.001) {
					prop = arrondir(prop, 4);
				}
				else if (unite<=0.01) {
					prop = arrondir(prop, 3);
				}
				else if (unite<=0.1) {
					prop = arrondir(prop, 2);
				}
				else if (unite<=1) {
					prop = arrondir(prop, 1);
				}
				else {
					prop = arrondir(prop, 0);
				}
				prop = prop.toString().replace('.', ',');
			}
		});
	}
		
}

/************************************************/

///// VERIFIER /////

/************************************************/

nbSuccesSituer = nbVerifSituer = nbSuccesEcrire = nbVerifEcrire = 0;

var dOn = new Date();
var dateOn = dOn.getFullYear() + "-" + ("0"+(dOn.getMonth()+1)).slice(-2) + "-" + ("0" + dOn.getDate()).slice(-2) + " " + ("0" + dOn.getHours()).slice(-2) + ":" + ("0" + dOn.getMinutes()).slice(-2) + ":" + ("0" + dOn.getSeconds()).slice(-2);

function verifier() {

	succesSituer = succesEcrire = false;
	enterSuivant = false;

	if (typExercice=="Situer") {

		if (prop!="") {
			
			$('.boxSitu').html(prop);
			
			if (prop==nbrMyst) {
				$("#boxSitu").removeClass("incorrectCurs");
				$("#boxSitu").addClass("correctCurs");
				succesSituer = true;
				if (dejaVerifSituer==false) {
					nbSuccesSituer += 1;
					nbVerifSituer += 1;
					dejaVerifSituer = true;
				}
			}
			else {
				$("#boxSitu").removeClass("correctCurs");
				$("#boxSitu").addClass("incorrectCurs");
				succesSituer = false;
				if (dejaVerifSituer==false) {
					nbVerifSituer += 1;
					dejaVerifSituer = true;
				}
			}
			$("#affsuccesSituer").show();
			$("#succesSituer").text("Situer le nombre: "+nbSuccesSituer+" / "+nbVerifSituer);
		}
		else {
			alert("Déplace le curseur bleu sur la graduation du nombre "+nbrMyst+".");
		}
	}

	else if (typExercice=="Ecrire") {
		if ($("#inptProp").val()!="") {

			if ($("#inptProp").val()==nbrMyst) {
				$("#inptProp").removeClass("incorrect");
				$("#inptProp").addClass("correct");
				succesEcrire = true;
				if (dejaVerifEcrire==false) {
					nbSuccesEcrire += 1;
					nbVerifEcrire += 1;
					dejaVerifEcrire = true;
				}
			}
			else {
				$("#inptProp").removeClass("correct");
				$("#inptProp").addClass("incorrect");
				succesEcrire = false;
				if (dejaVerifEcrire==false) {
					nbVerifEcrire += 1;
					dejaVerifEcrire = true;
				}
			}
			$("#affSuccesEcrire").show();
			$("#succesEcrire").text("Ecrire le nombre: "+nbSuccesEcrire+" / "+nbVerifEcrire);

		}
		else {
			alert("Complète le champ.")
		}
	}

	/* Réponse succes */

	if (succesSituer==true || succesEcrire==true) {
		$("#btVerifier").hide();
		affSucces();
		enterSuivant=true;

		if (sessUser && eleveId!='0') {

			var d = new Date();
			var dateIn = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);

			totSucces = nbSuccesSituer + nbSuccesEcrire;
			totVerif = nbVerifSituer + nbVerifEcrire;

			if (typExercice=="Situer") {
				activiteResult = nbSuccesSituer+'/'+nbVerifSituer;
				nbVerif = nbVerifSituer;
			}
			else if (typExercice=="Ecrire") {
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
					nbVerif : totVerif
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

		nbSucces = nbSuccesSituer + nbSuccesEcrire;
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
		var nbSuccesExo1 = nbSuccesSituer + savSuccesExo1;
		var savVerifExo1 = parseInt(savExo1[1]);
		var percentExo1 = Math.floor((savSuccesExo1 * 100) / savVerifExo1)+"%";
	}
	else {
		var percentExo1 = "";
	}
		

	if (scrExo2!="0/0") {
		var savExo2 = scrExo2.split('/');
		var savSuccesExo2 = parseInt(savExo2[0]);
		var nbSuccesExo2 = nbSuccesEcrire + savSuccesExo2;
		var savVerifExo2 = parseInt(savExo2[1]);
		var percentExo2 = Math.floor((savSuccesExo2 * 100) / savVerifExo2)+"%";
	}
	else {
		var percentExo2 = "";
	}

	$("#graphExo1").text(percentExo1);
	$("#graphExo2").text(percentExo2);

	$("#resultExo1").text("Situer le nombre : "+scrExo1);
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
	
	nbVerifSituer = nbVerifEcrire = nbSuccesSituer = nbSuccesSituer = 0;
	$("#succesSituer").text("");
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