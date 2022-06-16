
/************************************************/

///// EXERCICES /////

/************************************************/

$("#propEcrire").on('input change', function() {
	$("#digEcrire").removeClass("incorrect");
	$(this).val($.trim($(this).val()).replace(/\s+/g,''));
	dejaVerifEcrire = false;
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

valPreced = valExo = 0;

function generer() {

	if(typActivite=='Interactive') {
		$('#alertT').css({'display':'inline-block'});
	}
	else {
		$('#alertT').css({'display':'none'});
	}

	if (typActivite=="Exercices") {

		if (enterSuivant==true) {
			$("#btSuivant").click();
		}

		valCompo = 0;
		$(".box").remove();

		$("#digComposer").removeClass("correct").removeClass("incorrect");
		$("#digEcrire").removeClass("correct").removeClass("incorrect");

		/* Calcul du nombre à composer */

		if (nbMin>99) {
			alert("Le nombre minimum ne peut être supérieur à 99.");
			nbMin = 99;
			$("#nbMin").val(99);
		}

		if (nbMax>100) {
			alert("Le nombre maximum ne peut être supérieur à 100.");
			nbMax = 100;
			$("#nbMax").val(100);
		}

		if ($("#nbMin").is(":focus")==false) {
			if ($("#nbMin").val()=="") {
				alert("Le nombre minimum ne peut être vide.");
				nbMin = 1;
				$("#nbMin").val(1);
			}
		}

		if ($("#nbMax").is(":focus")==false && $("#nbMin").is(":focus")==false) {
			if ($("#nbMax").val()=="") {
				alert("Le nombre maximum ne peut être vide.");
				nbMax = 10;
				$("#nbMax").val(10);
			}
		}

		if ($("#nbMin").val()!="" && $("#nbMax").val()!="") {

			if (typActivite=="Exercices") {
				if (nbMin>=nbMax) {
					alert("Le nombre maximum doit être au moins 1 unité plus grand que le nombre minimum.");
					nbMax = nbMin + 1;
					$("#nbMax").val(nbMax);
					generer();
				}
				else {
					do {
						valExo = Math.floor(Math.random() * (nbMax +1 - nbMin) + nbMin);
					} while (valExo == valPreced);
				}					
			}
		}
		
		valPreced = valExo;

		sizeObjtW = sizeObjtH = 60;

		if (typActivite=="Exercices" && typExercice=="Composer") {
			$("#consigne").html("Déplace les objets sur le plateau pour composer le nombre ci-dessous.").show();
			valCompo = 0;
			$("#digComposer").html(valExo);
		}
		else if (typActivite=="Exercices" && typExercice=="Ecrire") {
			$("#consigne").html("Ecris le nombre correspondant aux objets sur le plateau.").show();
			$("#propEcrire").val("");
			$(".clonObjt").remove();
			$('#digVal').html(valExo);
			$("#propEcrire").css('width',$("#digVal").outerWidth()+30);

			if (slctObjt=="Form") {

				sizeObjtW = sizeObjtH = 60 * reduc;

				for (var i = 0; i < valExo; i++) {
					var clonObjt = $("#discB").clone();
					makeClone(clonObjt);
					if (typDisposition=="Vrac") {
						wDepo = 16 * sizeObjtW;
						hDepo = 10 * sizeObjtH;
						distribEcrire(clonObjt);
					}
					else {
						wDepo = 10 * sizeObjtW;
						hDepo = 10 * sizeObjtH;
						distribEcrire(clonObjt);
					}
					$("#depoEcrire").append(clonObjt);
				}
			}
			else if (slctObjt=="Des") {
				sizeObjtW = sizeObjtH = 60 * reduc;
				valExoTemp = valExo;
				for (var y = 5; y >= 1; y--) {
					if (valExoTemp>=y) {
						window["nbDe" + y] = Math.floor(valExoTemp/y);
						for (var i = 0; i < window["nbDe" + y]; i++) {
							var clonObjt = $("#de"+y).clone();
							makeClone(clonObjt);
							distribEcrire(clonObjt);
							$("#depoEcrire").append(clonObjt);
						}
					}
					valExoTemp = valExoTemp - (y * Math.floor(valExoTemp/y));
				}
			}
			else if (slctObjt=="Schem") {
				sizeObjtW = 80 * reduc;
				sizeObjtH = 40 * reduc;
				valExoTemp = valExo;
				for (var y = 10; y >= 1; y--) {
					if (valExoTemp>=y) {
						window["nb"+slctObjt+y] = Math.floor(valExoTemp/y);
						for (var i = 0; i < window["nb"+slctObjt+y]; i++) {
							var clonObjt = $("#"+slctObjt+y).clone();
							makeClone(clonObjt);
							distribEcrire(clonObjt);
							$("#depoEcrire").append(clonObjt);
						}
					}
					valExoTemp = valExoTemp - (y * Math.floor(valExoTemp/y));
				}
			}
			else if (slctObjt=="Dgts") {
				sizeObjtW = 60 * reduc;
				sizeObjtH = 60 * reduc;
				valExoTemp = valExo;
				var sym = false;
				for (var y = 5; y >= 1; y--) {
					if (valExoTemp>=y) {
						window["nb"+slctObjt+y] = Math.floor(valExoTemp/y);
						for (var i = 0; i < window["nb"+slctObjt+y]; i++) {
							var clonObjt = $("#"+slctObjt+y).clone();
							makeClone(clonObjt);
							distribEcrire(clonObjt);
							if (sym) {
								clonObjt.css('transform', 'scaleX(-1) translateX(25%)');
								sym = false;
							}
							else {
								sym = true;
							}
							$("#depoEcrire").append(clonObjt);
						}
					}
					valExoTemp = valExoTemp - (y * Math.floor(valExoTemp/y));
				}				
			}
			else if (slctObjt=="Nbr") {
				sizeObjtW = sizeObjtH = 60 * reduc;
				valExoTemp = valExo;
				for (var y = 10; y >= 1; y--) {
					if (valExoTemp>=y) {
						window["nb"+slctObjt+y] = Math.floor(valExoTemp/y);
						for (var i = 0; i < window["nb"+slctObjt+y]; i++) {
							var clonObjt = $("#"+slctObjt+y).clone();
							makeClone(clonObjt);
							distribEcrire(clonObjt);
							$("#depoEcrire").append(clonObjt);
						}
					}
					valExoTemp = valExoTemp - (y * Math.floor(valExoTemp/y));
				}
			}
		}
	}
	else if (typActivite=="Interactive") {
		$("#consigne").html("").hide();
	}
}

function distribEcrire(t) {
	
	$("#depoEcrire").css({'text-align':'center'});

	if (slctObjt=="Form") {
		if (typDisposition=="Vrac") {
			wDepo = 16 * sizeObjtW;
			hDepo = 10 * sizeObjtH;
		}
		else {
			wDepo = 10 * sizeObjtW;
			hDepo = 10 * sizeObjtH;
		}
		/**/
		if (valExo>=10) {
			$("#depoEcrire").css({'text-align':'left'});
		}
		else {
			$("#depoEcrire").css({'text-align':'center'});
		}
		$("#depoEcrireBox").css({'width':'auto', 'height':(Math.ceil(valExo/10)*t.height())+'px'});
	}
	else if (slctObjt=="Des") {
		wDepo = 8.5 * sizeObjtW * zoom;
		hDepo = 5 * sizeObjtH * zoom;
		$("#depoEcrireBox").css({'width':'auto', 'height':(Math.ceil(valExo/40)*t.height())+'px'});
	}
	else if (slctObjt=="Schem") {
		wDepo = 5.5 * sizeObjtW * zoom;
		hDepo = 8 * sizeObjtH * zoom;
		$("#depoEcrireBox").css({'width':'auto', 'height':(Math.ceil(valExo/50)*t.height())+'px'});
	}
	else if (slctObjt=="Dgts") {
		wDepo = 6.2 * sizeObjtW * zoom;
		hDepo = 3.2 * sizeObjtH * zoom;
		$("#depoEcrireBox").css({'width':'auto', 'height':(Math.ceil(valExo/30)*t.height())+'px'});
	}
	else if (slctObjt=="Nbr") {
		wDepo = 5.5 * sizeObjtW * zoom;
		hDepo = 5 * sizeObjtH * zoom;
		$("#depoEcrireBox").css({'width':'auto', 'height':(Math.ceil(valExo/50)*t.height())+'px'});
	}

	/**/
	
	if (typDisposition=="Vrac") {
		$("#depoEcrire").css({'width':wDepo+4, 'height':hDepo+4});
		wMax = $("#depoEcrire").width();
		hMax = $("#depoEcrire").height()-t.width();
		aleaWidth = Math.floor(Math.random() * wMax)-t.width();
		aleaHeight = Math.floor(Math.random() * hMax);
		t.css({'left':aleaWidth , 'top':aleaHeight, 'position':'absolute'});
		$("#depoEcrireBox").css({'width':'auto', 'height':($("#depoCompo").width()*45)/100+'px'});
	}
	else {
		$("#depoEcrire").css({'width':wDepo+4, 'height':hDepo+4});
		
	}
}

function makeClone(t) {
	t.css({'width':sizeObjtW, 'height':sizeObjtH})
	t.removeClass('ui-draggable-dragging')
	t.removeClass('distObjt');
	t.attr({"id":"clonObjt"});
	t.addClass("clonObjt");
	t.draggable();
	zoomObjt(t);
}

/************************************************/

///// VERIFIER /////

/************************************************/

nbSuccesComposer = nbVerifComposer = nbSuccesEcrire = nbVerifEcrire = 0;

var dOn = new Date();
var dateOn = dOn.getFullYear() + "-" + ("0"+(dOn.getMonth()+1)).slice(-2) + "-" + ("0" + dOn.getDate()).slice(-2) + " " + ("0" + dOn.getHours()).slice(-2) + ":" + ("0" + dOn.getMinutes()).slice(-2) + ":" + ("0" + dOn.getSeconds()).slice(-2);

function verifier() {

	succesComposer = succesEcrire = false;
	enterSuivant = false;			

	if (typExercice=="Composer") {

		if (valCompo!=0) {
			if (valCompo==valExo) {
				$("#digComposer").removeClass("incorrect").addClass("correct");
				succesComposer = true;
				nbSuccesComposer += 1;
				nbVerifComposer += 1;
			}
			else {
				$("#digComposer").removeClass("correct").addClass("incorrect");
				succesComposer = false;
				if (dejaVerifComposer==false) {
					nbVerifComposer += 1;
					dejaVerifComposer = true;
				}
			}
			$("#affSuccesComposer").show();
			$("#succesComposer").text("Composer le nombre: "+nbSuccesComposer+" / "+nbVerifComposer);
		}
		else {
			alert("Dépose des objets sur le plateau.");
		}
	}

	else if (typExercice=="Ecrire") {
		if ($("#propEcrire").val()!="") {

			if ($("#propEcrire").val()==valExo) {
				$("#digEcrire").removeClass("incorrect");
				$("#digEcrire").addClass("correct");
				succesEcrire = true;
				nbSuccesEcrire += 1;
				nbVerifEcrire += 1;
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
			$("#succesEcrire").text("Ecrire le nombre: "+nbSuccesEcrire+" / "+nbVerifEcrire);

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

			totSucces = nbSuccesComposer + nbSuccesEcrire;
			nbVerif = nbVerifComposer + nbVerifEcrire;
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
}

/* Ditribution des émoji */

var nbCoups = 0;

function affSucces() {
	$("#succesBox").show();
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
		var nbSuccesExo1 = nbSuccesComposer + savSuccesExo1;
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
	$("#resultExo1").text("Composer le nombre : "+scrExo1);

	$("#graphExo2").text(percentExo2);
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