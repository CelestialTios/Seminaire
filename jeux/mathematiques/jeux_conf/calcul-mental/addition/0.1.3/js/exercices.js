
/************************************************/

///// EXERCICES /////

/************************************************/

tbTerms = ["M", "C", "D", "U"];

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
	verifPassDix();
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

/************************************************/

///// GENERER /////

/************************************************/

dataV = "min";

function verifPassDix() {

	for (var i=0; i<tbTerms.length; i++) {

		term = tbTerms[i];

		if ($("#nbMin1"+term).is(":focus")==false) {
			if ($("#nbMin1"+term).val()=="") {
				$("#nbMin1"+term).val(window['nbMin1'+term]);
			}
		}

		if ($("#nbMax1"+term).is(":focus")==false) {
			if ($("#nbMax1"+term).val()=="") {
				$("#nbMax1"+term).val(window['nbMax1'+term]);
			}
		}

		if ($("#nbMin2"+term).is(":focus")==false) {
			if ($("#nbMin2"+term).val()=="") {
				$("#nbMin2"+term).val(window['nbMin2'+term]);
			}
		}

		if ($("#nbMax2"+term).is(":focus")==false) {
			if ($("#nbMax2"+term).val()=="") {
				$("#nbMax2"+term).val(window['nbMax2'+term]);
			}
		}

		if (dataV=="min") {
			if (window['nbMin1'+term]>window['nbMax1'+term]) {
				window['nbMax1'+term] = window['nbMin1'+term];
				$("#nbMax1"+term).val(window['nbMax1'+term]);
			}
			if (window['nbMin2'+term]>window['nbMax2'+term]) {
				window['nbMax2'+term] = window['nbMin2'+term];
				$("#nbMax2"+term).val(window['nbMax2'+term]);
			}
		}
		else if (dataV=="max") {
			if (window['nbMax1'+term]<window['nbMin1'+term]) {
				window['nbMin1'+term] = window['nbMax1'+term];
				$("#nbMin1"+term).val(window['nbMin1'+term]);
			}
			if (window['nbMax2'+term]<window['nbMin2'+term]) {
				window['nbMin2'+term] = window['nbMax2'+term];
				$("#nbMin2"+term).val(window['nbMin2'+term]);
			}
		}
			

		if (window['nbMin1'+term]+window['nbMin2'+term]>=10 && window['nbMax1'+term]+window['nbMax2'+term]>=10) {
			window['chkPass'+term] = true;
			$("#chkPass"+term).prop({"disabled":false, "checked":true});
		}
		if (window['nbMin1'+term]+window['nbMin2'+term]<10 && window['nbMax1'+term]+window['nbMax2'+term]>=10) {
			if (window['chkPass'+term]==true) {
				$("#chkPass"+term).prop({"disabled":false, "checked":true});
			}
			else {
				$("#chkPass"+term).prop({"disabled":false, "checked":false});
			}
		}
		if (window['nbMin1'+term]+window['nbMin2'+term]>=10 && window['nbMax1'+term]+window['nbMax2'+term]<10) {
			if (window['chkPass'+term]==false) {
				window['chkPass'+term] = true;
				$("#chkPass"+term).prop({"disabled":false, "checked":true});
			}			
		}
		if (window['nbMin1'+term]+window['nbMin2'+term]<10 && window['nbMax1'+term]+window['nbMax2'+term]<10) {
			if (window['chkPass'+term]==true) {
				window['chkPass'+term] = false;	
			}
			$("#chkPass"+term).prop({"disabled":true, "checked":false});
		}

		if (window['chkPass'+term]==true) {
			$("#chkJust"+term).prop({"disabled":false});
		}
		else {
			$("#chkJust"+term).prop({"disabled":true, "checked":false});
			window['chkJust'+term] = false;				
		}
	}

	generer();
}

function generer() {

	/* Si on change d'exercice sur l'état "Suivant" */
	if (enterSuivant==true) {
		$("#btSuivant").click();
	}

	dejaVerif = false;

	/* Passage 10 */

	for (var i=0; i<tbTerms.length; i++) {

		term = tbTerms[i];

		if (window['chkPass'+term]==false) {
			do {
				window['t1'+term] = Math.floor(Math.random()*(window['nbMax1'+term]-window['nbMin1'+term]+1))+window['nbMin1'+term];
				window['t2'+term] = Math.floor(Math.random()*(window['nbMax2'+term]-window['nbMin2'+term]+1))+window['nbMin2'+term];
			} while (window['t1'+term]+window['t2'+term]>=10);
		}
		else if (window['chkPass'+term]==true) {
			if (window['chkJust'+term]==true) {
				do {
					window['t1'+term]= Math.floor(Math.random()*(window['nbMax1'+term]-window['nbMin1'+term]+1))+window['nbMin1'+term];
					window['t2'+term]= Math.floor(Math.random()*(window['nbMax2'+term]-window['nbMin2'+term]+1))+window['nbMin2'+term];
				} while (window['t1'+term]+window['t2'+term]!=10);
			}
			else do {
				window['t1'+term]= Math.floor(Math.random()*(window['nbMax1'+term]-window['nbMin1'+term]+1))+window['nbMin1'+term];
				window['t2'+term]= Math.floor(Math.random()*(window['nbMax2'+term]-window['nbMin2'+term]+1))+window['nbMin2'+term];
			} while (window['t1'+term]+window['t2'+term]<10);
		}
	}

	n1 = Number(""+t1M+""+t1C+""+t1D+""+t1U);
	n2 = Number(""+t2M+""+t2C+""+t2D+""+t2U);
	soluc = n1 + n2;

	$("#depoCompo").html("").append('<div id="calculBox"><div id="calcul">'+n1+' + '+n2+' = </div> <input type="tel" id="prop" value="" maxlength="6"><div id="soluc">'+soluc+'</div></div>');

	$("#prop").css("width", ($("#soluc").width()+100)+'px');

	$("#calculBox").css("border-color", colBord);

	$("#prop").on('input change', function(){
		$(this).removeClass("incorrect");
		dejaVerif = false;
		$(this).val($.trim($(this).val()).replace(/\s+/g,''));
		$('#btVerifier').show();
	});

	if ('ontouchstart' in window == false) {
		$("#prop").focus();
	}
}

/************************************************/

///// VERIFIER /////

/************************************************/

totSucces = nbVerif = 0;
dejaVerif = false;

var dOn = new Date();
var dateOn = dOn.getFullYear() + "-" + ("0"+(dOn.getMonth()+1)).slice(-2) + "-" + ("0" + dOn.getDate()).slice(-2) + " " + ("0" + dOn.getHours()).slice(-2) + ":" + ("0" + dOn.getMinutes()).slice(-2) + ":" + ("0" + dOn.getSeconds()).slice(-2);

function verifier() {

	nbSucces = 0;
	
	if ($("#prop").val()!="") {
		if ($("#prop").val()>20000) {
			alert("Le nombre proposé est trop grand.");
		}		
		else if ($("#prop").val()==n1+n2) {
			$('#prop').removeClass("incorrect").addClass("correct");
			nbSucces += 1;
			nbVerif += 1;
			totSucces += 1;
		}
		else {
			$('#prop').removeClass("correct").addClass("incorrect");
			if (!dejaVerif)
			{
				nbVerif += 1;
				dejaVerif=true;
			}
			$('#btVerifier').hide();
		}
		$("#affSuccesExo").show();
		$("#succesExo").text("Résultat: "+totSucces+" / "+nbVerif);

		/* Réponse succes */

		if (nbSucces==1) {
			$("#btVerifier").hide();
			affSucces();
			enterSuivant=true;
		}

		if (sessUser && eleveId!='0') {

			var d = new Date();
			var dateIn = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);

			activiteResult = totSucces+'/'+nbVerif;		
			
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
	else {
		alert("Le champ de réponse est vide.");
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
		var nbSuccesExo1 = totSucces + savSuccesExo1;
		var savVerifExo1 = parseInt(savExo1[1]);
		var percentExo1 = Math.floor((savSuccesExo1 * 100) / savVerifExo1)+"%";
	}
	else {
		var percentExo1 = "";
	}

	$("#graphExo1").text(percentExo1);

	$("#resultExo1").text("Résultat : "+scrExo1);

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
	
	nbVerif = totSucces = 0;
	$("#succesExo").text("");
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