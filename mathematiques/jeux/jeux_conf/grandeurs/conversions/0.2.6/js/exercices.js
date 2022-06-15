
/************************************************/

///// EXERCICES /////

/************************************************/

$("#propVal").on('input change', function() {
	$(this).removeClass("incorrect");
	dejaVerifEcrireVal = false;
});

$("#propUnt").on('input change', function() {
	$(this).removeClass("incorrect");
	dejaVerifEcrireUnt = false;
});

$("#propValConv").on('input change', function() {
	$(this).removeClass("incorrect");
	dejaVerifConvertir = false;
});

/* Boutons */

$("#btGenerer").click(function() {
	affichage();
	generer();
});

$("#btVerifier").click(function() {
	verifier();
});

$("#btSuivant").click(function() {
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

	/* Si on change d'exercice sur l'état "Suivant" */
	if (enterSuivant==true) {
		$("#btSuivant").click();
	}

	dejaVerifEcrireVal = dejaVerifEcrireUnt = dejaVerifConvertir = false;

	$("#propVal, #propUnt, #propValConv, .propTab").val("").removeClass("incorrect").removeClass("correct").css("border-color", colBord);

	/*if (typExercice=="Ecrire") {
		if ('ontouchstart' in window == false) {
			$("#propVal").focus();
		}
	}
	else if (typExercice=="Convertir") {
		if ('ontouchstart' in window == false) {
			$("#propValConvfd").focus();
		}
	}*/

	/*  */

	for (var i = 0; i < tbInpts.length; i++) {
		$("#bd"+tbInpts[i]+"0").html("");
		$("#bd"+tbInpts[i]+"1").html("");
		$("#bd"+tbInpts[i]+"2").html("");
		$("#bd"+tbInpts[i]+"3").html("");
		$("#bd"+tbInpts[i]+"4").html("");
		$("#bd"+tbInpts[i]+"5").html("");
	}

	for (var i = 0; i < 6; i++) {
		$("#bdAu"+i).html("");
		$("#bdBu"+i).html("");
		$("#bdPu"+i).html("");
		$("#bdQu"+i).html("");
		$("#bdRu"+i).html("");
	}

	$("#thBu, #thAu, #bdBu, #bdAu").hide();
	$("#thPu, #thQu, #thRu, #bdPu, #bdQu, #bdRu").hide();

	if (slctUntDepIndex==7 && slctUntArrIndex!=7) {
		untArrIndex = slctUntArrIndex;
		do {
			untDepIndex = Math.floor(Math.random()*7)
		}
		while(untDepIndex==untArrIndex);
	}
	else if (slctUntDepIndex!=7 && slctUntArrIndex==7) {
		untDepIndex = slctUntDepIndex;
		do {
			untArrIndex = Math.floor(Math.random()*7);
		}
		while(untArrIndex==untDepIndex);
	}
	else if (slctUntDepIndex==7 && slctUntArrIndex==7) {
		untDepIndex = Math.floor(Math.random()*7);
		do {
			untArrIndex = Math.floor(Math.random()*7);
		}
		while(untArrIndex==untDepIndex);
	}
	else if (slctUntDepIndex!=7 && slctUntArrIndex!=7) {
		untDepIndex = slctUntDepIndex;
		untArrIndex = slctUntArrIndex;
	}

	if (chkAleaEnt) {
		nbChifEnt = Math.floor(Math.random()*3)+1;
	}

	nbEntU = Math.floor(Math.random()*9)+1;
	nbEntD = Math.floor(Math.random()*9)+1;
	nbEntC = Math.floor(Math.random()*9)+1;

	if (slctGrdrsIndex!=3 && slctGrdrsIndex!=4) {

		$(".tabVol, .tabSurf").hide();
		$(".tabLong").show();

		if (nbChifEnt==1) {
			$("#bd"+tbInpts[untDepIndex]+"0").html(nbEntU);
		}
		else if (nbChifEnt==2) {
			$("#bd"+tbInpts[untDepIndex]+"0").html(nbEntU);
			$("#bd"+tbInpts[untDepIndex-1]+"0").html(nbEntD);
		}
		else if (nbChifEnt==3) {
			$("#bd"+tbInpts[untDepIndex]+"0").html(nbEntU);
			$("#bd"+tbInpts[untDepIndex-1]+"0").html(nbEntD);
			$("#bd"+tbInpts[untDepIndex-2]+"0").html(nbEntC);
		}

		/**/

		if (untDepIndex==1 && nbChifEnt==3) {
			$("#thAu, #bdAu").show();
			$("#bdAu0").html(nbEntC);
		}
		else if (untDepIndex==0 && nbChifEnt==2) {
			$("#thAu, #bdAu").show();
			$("#bdAu0").html(nbEntD);
		}
		else if (untDepIndex==0 && nbChifEnt==3) {
			$("#thBu, #thAu, #bdBu, #bdAu").show();
			$("#bdAu0").html(nbEntD);
			$("#bdBu0").html(nbEntC);
		}
	}
	else if (slctGrdrsIndex==3) {

		$(".tabVol, .tabLong").hide();
		$(".tabSurf").show();

		if (nbChifEnt==1) {
			$("#bd"+tbInpts[untDepIndex]+"1").html(nbEntU);
		}
		else if (nbChifEnt==2) {
			$("#bd"+tbInpts[untDepIndex]+"1").html(nbEntU);
			$("#bd"+tbInpts[untDepIndex]+"2").html(nbEntD);
		}
		else if (nbChifEnt==3) {
			$("#bd"+tbInpts[untDepIndex]+"1").html(nbEntU);
			$("#bd"+tbInpts[untDepIndex]+"2").html(nbEntD);
			$("#bd"+tbInpts[untDepIndex-1]+"1").html(nbEntC);
		}

		/**/

		if (untDepIndex==0 && nbChifEnt==3) {
			$("#thAu, #bdAu").show();
			$("#bdAu1").html(nbEntC);
		}
	}
	else if (slctGrdrsIndex==4) {

		$(".tabSurf, .tabLong").hide();
		$(".tabVol").show();

		if (nbChifEnt==1) {
			$("#bd"+tbInpts[untDepIndex]+"3").html(nbEntU);
		}
		else if (nbChifEnt==2) {
			$("#bd"+tbInpts[untDepIndex]+"3").html(nbEntU);
			$("#bd"+tbInpts[untDepIndex]+"4").html(nbEntD);
		}
		else if (nbChifEnt==3) {
			$("#bd"+tbInpts[untDepIndex]+"3").html(nbEntU);
			$("#bd"+tbInpts[untDepIndex]+"4").html(nbEntD);
			$("#bd"+tbInpts[untDepIndex]+"5").html(nbEntC);
		}
	}		

	/**/

	if (typNombre=="Decimal") {			

		if (chkAleaDec) {
			nbChifDec = Math.floor(Math.random()*3)+1;
		}
		else {
			nbChifDec = $("#nbChifDec").val();
		}

		nbDecU = Math.floor(Math.random()*9)+1;
		nbDecD = Math.floor(Math.random()*9)+1;
		nbDecC = Math.floor(Math.random()*9)+1;

		if (slctGrdrsIndex!=3 && slctGrdrsIndex!=4) {

			$("#bd"+tbInpts[untDepIndex]+"0").append(",");

			if (nbChifDec==1) {
				$("#bd"+tbInpts[untDepIndex+1]+"0").html(nbDecU);
			}
			else if (nbChifDec==2) {
				$("#bd"+tbInpts[untDepIndex+1]+"0").html(nbDecU);
				$("#bd"+tbInpts[untDepIndex+2]+"0").html(nbDecD);
			}
			else if (nbChifDec==3) {
				$("#bd"+tbInpts[untDepIndex+1]+"0").html(nbDecU);
				$("#bd"+tbInpts[untDepIndex+2]+"0").html(nbDecD);
				$("#bd"+tbInpts[untDepIndex+3]+"0").html(nbDecC);
			}

			/**/

			if (untDepIndex==4 && nbChifDec==3) {
				$("#thPu, #bdPu").show();
				$("#bdPu0").html(nbDecC);
			}
			else if (untDepIndex==5 && nbChifDec==2) {
				$("#thPu, #bdPu").show();
				$("#bdPu0").html(nbDecD);
			}
			else if (untDepIndex==5 && nbChifDec==3) {
				$("#thPu, #bdPu, #thQu, #bdQu").show();
				$("#bdPu0").html(nbDecD);
				$("#bdQu0").html(nbDecC);
			}
			else if (untDepIndex==6 && nbChifDec==1) {
				$("#thPu, #bdPu").show();
				$("#bdPu0").html(nbDecU);
			}
			else if (untDepIndex==6 && nbChifDec==2) {
				$("#thPu, #bdPu, #thQu, #bdQu").show();
				$("#bdPu0").html(nbDecU);
				$("#bdQu0").html(nbDecD);
			}
			else if (untDepIndex==6 && nbChifDec==3) {
				$("#thPu, #bdPu, #thQu, #bdQu, #thRu, #bdRu").show();
				$("#bdPu0").html(nbDecU);
				$("#bdQu0").html(nbDecD);
				$("#bdRu0").html(nbDecC);
			}
		}
		else if (slctGrdrsIndex==3) {

			$("#bd"+tbInpts[untDepIndex]+"1").append(",");

			if (nbChifDec==1) {
				$("#bd"+tbInpts[untDepIndex+1]+"2").html(nbDecU);
			}
			else if (nbChifDec==2) {
				$("#bd"+tbInpts[untDepIndex+1]+"2").html(nbDecU);
				$("#bd"+tbInpts[untDepIndex+1]+"1").html(nbDecD);
			}
			else if (nbChifDec==3) {
				$("#bd"+tbInpts[untDepIndex+1]+"2").html(nbDecU);
				$("#bd"+tbInpts[untDepIndex+1]+"1").html(nbDecD);
				$("#bd"+tbInpts[untDepIndex+2]+"2").html(nbDecC);
			}

			/**/

			if (untDepIndex==5 && nbChifDec==3) {
				$("#thPu, #bdPu").show();
				$("#bdPu2").html(nbDecC);
			}
			else if (untDepIndex==6 && nbChifDec==1) {
				$("#thPu, #bdPu").show();
				$("#bdPu2").html(nbDecU);
			}
			else if (untDepIndex==6 && nbChifDec==2) {
				$("#thPu, #bdPu").show();
				$("#bdPu2").html(nbDecU);
				$("#bdPu1").html(nbDecD);
			}
			else if (untDepIndex==6 && nbChifDec==3) {
				$("#thPu, #bdPu, #thQu, #bdQu").show();
				$("#bdPu2").html(nbDecU);
				$("#bdPu1").html(nbDecD);
				$("#bdQu2").html(nbDecC);
			}
		}
		else if (slctGrdrsIndex==4) {

			$("#bd"+tbInpts[untDepIndex]+"3").append(",");

			if (nbChifDec==1) {
				$("#bd"+tbInpts[untDepIndex+1]+"5").html(nbDecU);
			}
			else if (nbChifDec==2) {
				$("#bd"+tbInpts[untDepIndex+1]+"5").html(nbDecU);
				$("#bd"+tbInpts[untDepIndex+1]+"4").html(nbDecD);
			}
			else if (nbChifDec==3) {
				$("#bd"+tbInpts[untDepIndex+1]+"5").html(nbDecU);
				$("#bd"+tbInpts[untDepIndex+1]+"4").html(nbDecD);
				$("#bd"+tbInpts[untDepIndex+1]+"3").html(nbDecC);
			}

			/**/

			if (untDepIndex==6 && nbChifDec==1) {
				$("#thPu, #bdPu").show();
				$("#bdPu5").html(nbDecU);
			}
			else if (untDepIndex==6 && nbChifDec==2) {
				$("#thPu, #bdPu").show();
				$("#bdPu5").html(nbDecU);
				$("#bdPu4").html(nbDecD);
			}
			else if (untDepIndex==6 && nbChifDec==3) {
				$("#thPu, #bdPu").show();
				$("#bdPu5").html(nbDecU);
				$("#bdPu4").html(nbDecD);
				$("#bdPu3").html(nbDecC);
			}
		}				
	}
	else if (typNombre=="Entier") {
		nbChifDec = 0;
	}

	/**/

	val = "";

	for (var i = 0; i < 6; i++) {
		if (typeof $("#bdBu"+i).html()!="undefined") {
			val += $("#bdBu"+i).html();
		}
		if (typeof $("#bdAu"+i).html()!="undefined") {
			val += $("#bdAu"+i).html();
		}
	}

	for (var i = 0; i < tbInpts.length; i++) {
		if (typeof $("#bd"+tbInpts[i]+"5").html()!="undefined") {
			val += $("#bd"+tbInpts[i]+"5").html();
		}
		if (typeof $("#bd"+tbInpts[i]+"4").html()!="undefined") {
			val += $("#bd"+tbInpts[i]+"4").html();
		}
		if (typeof $("#bd"+tbInpts[i]+"3").html()!="undefined") {
			val += $("#bd"+tbInpts[i]+"3").html();
		}
		if (typeof $("#bd"+tbInpts[i]+"2").html()!="undefined") {
			val += $("#bd"+tbInpts[i]+"2").html();
		}
		if (typeof $("#bd"+tbInpts[i]+"1").html()!="undefined") {
			val += $("#bd"+tbInpts[i]+"1").html();
		}
		if (typeof $("#bd"+tbInpts[i]+"0").html()!="undefined") {
			val += $("#bd"+tbInpts[i]+"0").html();
		}
	}

	for (var i = 5; i >= 0; i--) {
		if (typeof $("#bdPu"+i).html()!="undefined") {
			val += $("#bdPu"+i).html();
		}
	}

	for (var i = 5; i >= 0; i--) {
		if (typeof $("#bdQu"+i).html()!="undefined") {
			val += $("#bdQu"+i).html();
		}
	}

	for (var i = 5; i >= 0; i--) {
		if (typeof $("#bdRu"+i).html()!="undefined") {
			val += $("#bdRu"+i).html();
		}
	}

	/**/

	if (typActivite=="Exercices" && typExercice=="Lire") {
		$("#digitalBox").hide();
	}
	
	$("#affVal").html(val);
	if (typActivite=="Interactive" || typExercice=="Lire") {
		if (Number(val.toString().replace(",", "."))>=2) {
			$("#affUnt").html(tbUnts[untDepIndex][0]+tbGrndrs[slctGrdrsIndex][1]+'<span id="untMot"> ('+tbUnts[untDepIndex][1]+tbGrndrs[slctGrdrsIndex][2]+'s</span>');
		}
		else {
			$("#affUnt").html(tbUnts[untDepIndex][0]+tbGrndrs[slctGrdrsIndex][1]+'<span id="untMot"> ('+tbUnts[untDepIndex][1]+tbGrndrs[slctGrdrsIndex][2]+'</span>');
		}

		if (slctGrdrsIndex==3) {
			$("#untMot").append(" carré)");
		}
		else if (slctGrdrsIndex==4) {
			$("#untMot").append(" cube)");
		}
		else {
			$("#untMot").append(")");
		}
		
	}
	else {
		$("#affUnt").html(tbUnts[untDepIndex][0]+tbGrndrs[slctGrdrsIndex][1]);
	}
		

	/**/

	valConv  = 0;

	if (typExercice=="Convertir") {
		if (untArrIndex>untDepIndex) {
			var diff = untArrIndex - untDepIndex;
			valConv = val.toString().replace(",", ".");
			
			if (slctGrdrsIndex==3) {

				valConv = Math.round(valConv * Math.pow(10, nbChifDec));
				
				if (nbChifDec>diff*2) {
					var f = parseInt(nbChifDec)-parseInt(diff*2);
					valConv = (valConv * Math.pow(10, diff*2-nbChifDec)).toFixed(f);
				}
				else {
					valConv = Math.round(valConv * Math.pow(10, diff*2-nbChifDec));
				}

			}
			else if (slctGrdrsIndex==4) {
				valConv = Math.round(valConv * Math.pow(10, nbChifDec));
				valConv = Math.round(valConv * Math.pow(10, diff*3-nbChifDec));
			}
			else {

				valConv = Math.round(valConv * Math.pow(10, nbChifDec));
				
				if (nbChifDec>diff) {
					var f = parseInt(nbChifDec)-parseInt(diff);
					valConv = (valConv * Math.pow(10, diff-nbChifDec)).toFixed(f);
				}
				else {
					valConv = Math.round(valConv * Math.pow(10, diff-nbChifDec));
				}
			}

			valConv = valConv.toString().replace(".", ",");
		}
		else if (untArrIndex<untDepIndex) {
			var diff = untDepIndex - untArrIndex;
			val = val.toString().replace(",", ".");
			
			if (slctGrdrsIndex==3) {
				var f = parseInt(diff*2)+parseInt(nbChifDec);
				valConv = (val / Math.pow(100, diff)).toFixed(f).toString().replace(".", ",");
			}
			else if (slctGrdrsIndex==4) {
				var f = parseInt(diff*3)+parseInt(nbChifDec);
				valConv = (val / Math.pow(1000, diff)).toFixed(f).toString().replace(".", ",");
			}
			else {
				var f = parseInt(diff)+parseInt(nbChifDec);
				valConv = (val / Math.pow(10, diff)).toFixed(f).toString().replace(".", ",");
			}
		}
		
		$("#temValConv").html(valConv);
		$("#propValConv").css("width", $("#temValConv").width()+40);
		$("#affUntConv").html(tbUnts[untArrIndex][0]+tbGrndrs[slctGrdrsIndex][1]);
	}

	if (typActivite=="Exercices" && typExercice=="Completer") {
		$(".vTab").hide();
		$(".pTab").show();
		$(".propTab").css({"height":"30px", "opacity":.5});
		$("#chkTab").parent().parent().hide();
		$("#chkTab").prop("checked", true).hide();
		//$("label[for='chkTab']").hide();
		$(".propTab").on("focus", function() {
			$(this).css({"width":"1em", "height":"80px", "border-color":colBord, "opacity":1});
			$(this).parent().children(".addProp").remove();
		});
		$(".propTab").on("click", function() {
			$(this).css({"height":"80px", "opacity":1});
		});
		$(".propTab").css({"width":"0", "height":"0", "border-color":"transparent"});
		$(".addProp").remove();
		$(".pTab").append('<div class="addProp">+</div>');
		$(".addProp").on("click", function() {
			$(this).parent().children(".propTab").css({"width":"1em", "height":"80px", "border-color":colBord, "opacity":1}).focus();
			$(this).remove();
		});
	}
	else {
		$(".pTab").hide();
		if (typActivite=="Exercices" && (typExercice=="Lire" || typExercice=="Ecrire"/* || typExercice=="Convertir"*/ )) {
			$("#chkTab").parent().parent().hide();
			$("#chkTab").prop("checked", true).hide();
			//$("label[for='chkTab']").hide();
			$(".vTab").show();
		}
		else {
			$("#chkTab").parent().parent().show();
			$("#chkTab").prop("checked", true).show();
			$("label[for='chkTab']").show();
			if (chkTab==true) {$(".vTab").show();$("#chkTab").prop("checked",true);} else {$(".vTab").hide();$("#chkTab").prop("checked",false);}
		}
	}

	if (slctGrdrsIndex==3) {
		$(".propTab").css({"font-size":".9em"});
	}
	else if (slctGrdrsIndex==4) {
		$(".propTab").css({"font-size":".8em"});
	}
	else {
		$(".propTab").css({"font-size":"1em"});
	}

	//alert($("#affVal").width())
	if (typExercice=="Convertir") {
		//alert($("#temValConv").width())
		//alert(($("#temValConv").text()).length)
		if ($("#temValConv").width()>0) {
			$("#propValConv").css("width", $("#temValConv").width()+100);
		}
		else {
			$("#propValConv").css("width", (($("#temValConv").text()).length)*50);
		}
	}
	else {
		if ($("#affVal").width()>0) {
			$("#propVal").css("width", $("#affVal").width()+100);
			$("#propUnt").css("width", $("#affUnt").width()+40);
		}
		else {
			$("#propVal").css("width", ($("#affVal").text().length)*50);
			$("#propUnt").css("width", ($("#affUnt").text().length)*70);
		}
	}
			
	//$("#propVal").css("width", $("#affVal").width()+100);
	//$("#propUnt").css("width", $("#affUnt").width()+40);
}

/************************************************/

///// VERIFIER /////

/************************************************/

nbSuccesEcrire = nbVerifEcrire = nbSuccesEcrireVal = nbVerifEcrireVal = nbSuccesEcrireUnt = nbVerifEcrireUnt = nbSuccesConvertir = nbVerifConvertir = nbSuccesCompleter = nbVerifCompleter = 0;

var dOn = new Date();
var dateOn = dOn.getFullYear() + "-" + ("0"+(dOn.getMonth()+1)).slice(-2) + "-" + ("0" + dOn.getDate()).slice(-2) + " " + ("0" + dOn.getHours()).slice(-2) + ":" + ("0" + dOn.getMinutes()).slice(-2) + ":" + ("0" + dOn.getSeconds()).slice(-2);

function verifier() {

	succesEcrire = succesEcrireVal = succesEcrireUnt = succesConvertir = succesCompleter = false;
	enterSuivant = false;

	if (typExercice=="Lire") {
		$("#digitalBox").show();
		$("#btVerifier").hide();
		enterSuivant=true;
		$("#succesBox").show();
	}
	else if (typExercice=="Ecrire") {
		if ($("#propVal").val()!="" && $("#propUnt").val()!="") {
			if ($("#propVal").val()==val) {
				$("#propVal").removeClass("incorrect").addClass("correct");
				succesEcrireVal = true;
				/*if (dejaVerifEcrireVal==false) {
					//nbSuccesEcrireVal += 1;
					//nbVerifEcrireVal += 1;
					//dejaVerifEcrireVal = true;
				}*/
			}
			else {
				$("#propVal").removeClass("correct").addClass("incorrect");
				succesEcrireVal = false;
				nbVerifEcrireVal += 1;
				/*if (dejaVerifEcrireVal==false) {
					//nbVerifEcrireVal += 1;
					//dejaVerifEcrireVal = true;
				}*/
			}
			
			if ($("#propUnt").val()==$("#affUnt").html()) {
				$("#propUnt").removeClass("incorrect").addClass("correct");
				succesEcrireUnt = true;
				/*if (dejaVerifEcrireUnt==false) {
					//nbSuccesEcrireUnt += 1;
					//nbVerifEcrireUnt += 1;
					//dejaVerifEcrireUnt = true;
				}*/
			}
			else {
				$("#propUnt").removeClass("correct").addClass("incorrect");
				succesEcrireUnt = false;
				nbVerifEcrireUnt += 1;
				/*if (dejaVerifEcrireUnt==false) {
					nbVerifEcrireUnt += 1;
					dejaVerifEcrireUnt = true;
				}*/
			}

			//nbVerifEcrire ++;
			if (succesEcrireVal && succesEcrireUnt) {
				nbVerifEcrire += 1;
			}
			else if (succesEcrireVal && !succesEcrireUnt && nbVerifEcrireUnt<2) {
				nbVerifEcrire += 1;
			}
			else if (!succesEcrireVal && nbVerifEcrireVal<2 && succesEcrireUnt) {
				nbVerifEcrire += 1;
			}

			/*if ($("#propVal").val()==val && $("#propUnt").val()==$("#affUnt").html()) {
				$("#propVal, #propUnt").removeClass("incorrect").addClass("correct");
				succesEcrireVal = true;
				succesEcrireUnt = true;
				nbSuccesEcrire += 1;
				nbVerifEcrire += 1;
			}
			else {
				if ($("#propVal").val()!=val) {
					$("#propVal").removeClass("correct").addClass("incorrect");
					succesEcrireVal = false;
					if (!dejaVerifEcrireVal) {
						//nbVerifEcrireVal += 1;
						dejaVerifEcrireVal = true;
					}
				}
				if ($("#propUnt").val()!=$("#affUnt").html()) {
					$("#propUnt").removeClass("correct").addClass("incorrect");
					succesEcrireUnt = false;
					if (!dejaVerifEcrireUnt) {
						//nbVerifEcrireUnt += 1;
						dejaVerifEcrireUnt = true;
					}
				}
				if (!dejaVerifEcrireVal && !dejaVerifEcrireUnt) {
					nbVerifEcrire += 1;
				}
			}*/

			//

			if (succesEcrireVal==true && succesEcrireUnt==true) {
				succesEcrire = true;
				nbSuccesEcrire ++;
				$("#affSuccesEcrire").show();
				$("#succesEcrire").text("Ecrire la mesure: "+nbSuccesEcrire+" / "+nbVerifEcrire);
			}
		}
		else {
			alert("Complète les deux champs.");
		}
	}
	else if (typExercice=="Completer") {
		nbSuccesComp = nbFailCompleter = 0;

		for (var y = 0; y <= 5; y++) {
			if ($("#propBu"+y).val()!="") {
				if ($("#propBu"+y).val()==$("#bdBu"+y).html()) {
					$("#propBu"+y).removeClass("incorrect").addClass("correct");
					nbSuccesComp ++;
				}
				else {
					$("#propBu"+y).removeClass("correct").addClass("incorrect");
					nbFailCompleter ++;
				}
			}
			if ($("#propAu"+y).val()!="") {
				if ($("#propAu"+y).val()==$("#bdAu"+y).html()) {
					$("#propAu"+y).removeClass("incorrect").addClass("correct");
					nbSuccesComp ++;
				}
				else {
					$("#propAu"+y).removeClass("correct").addClass("incorrect");
					nbFailCompleter ++;
				}
			}				
				
			for (var i = 0; i < tbInpts.length; i++) {
				if ($("#prop"+tbInpts[i]+y).val()!="") {
					if ($("#prop"+tbInpts[i]+y).val()==$("#bd"+tbInpts[i]+y).html()) {
						$("#prop"+tbInpts[i]+y).removeClass("incorrect").addClass("correct");
						nbSuccesComp ++;
					}
					else {
						$("#prop"+tbInpts[i]+y).removeClass("correct").addClass("incorrect");
						nbFailCompleter ++;
					}
				}					
			}

			if ($("#propPu"+y).val()!="") {
				if ($("#propPu"+y).val()==$("#bdPu"+y).html()) {
					$("#propPu"+y).removeClass("incorrect").addClass("correct");
					nbSuccesComp ++;
				}
				else {
					$("#propPu"+y).removeClass("correct").addClass("incorrect");
					nbFailCompleter ++;
				}
			}
			if ($("#propQu"+y).val()!="") {
				if ($("#propQu"+y).val()==$("#bdQu"+y).html()) {
					$("#propQu"+y).removeClass("incorrect").addClass("correct");
					nbSuccesComp ++;
				}
				else {
					$("#propQu"+y).removeClass("correct").addClass("incorrect");
					nbFailCompleter ++;
				}
			}
			if ($("#propRu"+y).val()!="") {
				if ($("#propRu"+y).val()==$("#bdRu"+y).html()) {
					$("#propRu"+y).removeClass("incorrect").addClass("correct");
					nbSuccesComp ++;
				}
				else {
					$("#propRu"+y).removeClass("correct").addClass("incorrect");
					nbFailCompleter ++;
				}
			}
		}

		if (nbSuccesComp == 0 && nbFailCompleter == 0) {
			alert("Complète les champs dans le tableau.");
		}

		nbVerifCompleter ++;

		if (typNombre=="Entier") {
			nbCar = parseInt(nbChifEnt);
		}
		else if (typNombre=="Decimal") {
			nbCar = parseInt(nbChifEnt) + parseInt(nbChifDec);
		}
		if (nbFailCompleter==0 && nbSuccesComp==nbCar) {
			succesCompleter = true;
			nbSuccesCompleter ++;
			$("#affSuccesCompleter").show();
			$("#succesCompleter").text("Compléter le tableau: "+nbSuccesCompleter+" / "+nbVerifCompleter);
		}
				
	}
	else if (typExercice=="Convertir") {
		if ($("#propValConv").val()!="") {
			if ($("#propValConv").val()==valConv) {
				$("#propValConv").removeClass("incorrect").addClass("correct");
				succesConvertir = true;
				if (dejaVerifConvertir==false) {
					nbSuccesConvertir += 1;
					nbVerifConvertir += 1;
					dejaVerifConvertir = true;
				}
				$("#affSuccesConvertir").show();
				$("#succesConvertir").text("Convertir la mesure: "+nbSuccesConvertir+" / "+nbVerifConvertir);
			}
			else {
				$("#propValConv").removeClass("correct").addClass("incorrect");
				succesConvertir = false;
				if (dejaVerifConvertir==false) {
					nbVerifConvertir += 1;
					dejaVerifConvertir = true;
				}
			}
		}
		else {
			alert("Complète le champ.");
		}
	}

	/* Réponse succes */

	if (succesEcrire==true || succesConvertir==true || succesCompleter==true) {
		$("#btVerifier").hide();
		affSucces();
		enterSuivant=true;

		if (sessUser && eleveId!='0') {

			var d = new Date();
			var dateIn = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);

			totSucces = nbSuccesEcrire + nbSuccesCompleter + nbSuccesConvertir;
			nbVerif = nbVerifEcrire + nbVerifCompleter + nbVerifConvertir;
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
		var nbSuccesExo1 = nbSuccesEcrire + savSuccesExo1;
		var savVerifExo1 = parseInt(savExo1[1]);
		var percentExo1 = Math.floor((savSuccesExo1 * 100) / savVerifExo1)+"%";
	}
	else {
		var percentExo1 = "";
	}

	if (scrExo2!="0/0") {
		var savExo2 = scrExo2.split('/');
		var savSuccesExo2 = parseInt(savExo2[0]);
		var nbSuccesExo2 = nbSuccesCompleter + savSuccesExo2;
		var savVerifExo2 = parseInt(savExo2[1]);
		var percentExo2 = Math.floor((savSuccesExo2 * 100) / savVerifExo2)+"%";
	}
	else {
		var percentExo2 = "";
	}

	if (scrExo3!="0/0") {
		var savExo3 = scrExo3.split('/');
		var savSuccesExo3 = parseInt(savExo3[0]);
		var nbSuccesExo3 = nbSuccesConvertir + savSuccesExo3;
		var savVerifExo3 = parseInt(savExo3[1]);
		var percentExo3 = Math.floor((savSuccesExo3 * 100) / savVerifExo3)+"%";
	}
	else {
		var percentExo3 = "";
	}

	$("#graphExo1").text(percentExo1);
	$("#graphExo2").text(percentExo2);
	$("#graphExo3").text(percentExo3);

	$("#resultExo1").text("Ecrire la mesure : "+scrExo1);
	$("#resultExo2").text("Compléter le tableau : "+scrExo2);
	$("#resultExo3").text("Convertir la mesure : "+scrExo3);

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
	
	nbSuccesEcrire = nbVerifEcrire = nbSuccesConvertir = nbVerifConvertir = nbSuccesCompleter = nbVerifCompleter = 0;
	$("#succesEcrire").text("");
	$("#succesCompleter").text("");
	$("#succesConvertir").text("");
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