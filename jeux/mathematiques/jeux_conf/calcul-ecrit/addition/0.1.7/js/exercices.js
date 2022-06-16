
/************************************************/

///// EXERCICES /////

/************************************************/

/* Grille */

function affGrille() {
	if (chkGrille==true) {

		var hBox = $("#calculBox").height()-20;

		if (typNombre=="Entier") {
			if (typeof nbChmpProp!="undefined") {
				for (var i=0; i<=nbChmpProp; i++) {
					$("#calculN").append('<div class="colGril'+i+' colGril"></div>');
					var decal = i * colWidth;
					$(".colGril"+i).css({"height":hBox, "top":"20px", "right": decal+"px"});
				}
			}
		}
		else if (typNombre=="Decimal") {
			if (typeof nbChmpPropD!="undefined") {
				for (var i=0; i<=nbChmpPropD; i++) {
					$("#calculD").append('<div class="colGril'+i+' colGril"></div>');
					var decal = i * colWidth;
					$(".colGril"+i).css({"height":hBox, "top":"20px", "right": decal+"px"});
				}

				for (var i=0; i<=nbChmpPropN; i++) {
					$("#calculN").append('<div class="colGril'+i+' colGril"></div>');
					var decal = i * colWidth;
					$(".colGril"+i).css({"height":hBox, "top":"20px", "right": decal+"px"});
				}
			}
		}
	}
}

$("#chkGrille").change(function(){
	chkGrille = $(this).prop("checked");
	$(".colGril").toggle().remove();
	affGrille();
});

/* Boutons */

$("#btGenerer").click(function(){
	generer();
});

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

/************************************************/

///// GENERER /////

/************************************************/

function generer() {

	/* Si on change d'exercice sur l'état "Suivant" */
	if (enterSuivant==true) {
		$("#btSuivant").click();
	}

	dejaVerif = false;

	if (typNombre=="Entier") {
		$("#tblOpD").hide();
	}
	else if (typNombre=="Decimal") {
		$("#tblOpD").show();
	}

	/* Construction opération */

	for (var i=0; i<tbTerms.length; i++) {

		var term = tbTerms[i];

		if (window['chk1'+term]==true) {
			window['t1'+term] = Math.floor(Math.random()*9)+1;
		}
		else {
			window['t1'+term] = 0;
		}

		if (window['chk2'+term]==true) {
			window['t2'+term] = Math.floor(Math.random()*9)+1;
		}
		else {
			window['t2'+term] = 0;
		}

		if (window['chk3'+term]==true) {
			window['t3'+term] = Math.floor(Math.random()*9)+1;
		}
		else {
			window['t3'+term] = 0;
		}
	}

	/* D */

	if (typNombre=="Decimal") {
		for (var i=0; i<tbTermsD.length; i++) {

			var term = tbTermsD[i];

			if (window['chk1'+term]==true) {
				window['t1'+term] = Math.floor(Math.random()*9)+1;
			}
			else {
				window['t1'+term] = 0;
			}

			if (window['chk2'+term]==true) {
				window['t2'+term] = Math.floor(Math.random()*9)+1;
			}
			else {
				window['t2'+term] = 0;
			}

			if (window['chk3'+term]==true) {
				window['t3'+term] = Math.floor(Math.random()*9)+1;
			}
			else {
				window['t3'+term] = 0;
			}
		}
	}

	/* Chiffres*/
	
	lPropRep = l1 = l2 = l3 = lProp = '';
	lPropRepD = l1D = l2D = l3D = lPropD = '';
	lRang = '<div id="rangDM" class="rang">DM</div><div id="rangM" class="rang">M</div><div id="rangC" class="rang">C</div><div id="rangD" class="rang">D</div><div id="rangU" class="rang">U</div>';
	lRangD = '<div id="rangVirg" class="virg">,</div><div id="rangUd" class="rang">d</div><div id="rangUc" class="rang">c</div><div id="rangUm" class="rang">m</div>';		
	lSep = '<div class="plus">+</div><div class="egal">=</div>';
	lSepD = '';

	n1 = Number(""+t1M+""+t1C+""+t1D+""+t1U);
	if (n1>=1000) {
		l1 = '<div class="chiff">'+t1M+'</div><div class="chiff">'+t1C+'</div><div class="chiff">'+t1D+'</div><div class="chiff">'+t1U+'</div>';
	}
	else if(n1>=100) {
		l1 = '<div class="chiff">'+t1C+'</div><div class="chiff">'+t1D+'</div><div class="chiff">'+t1U+'</div>';
	}
	else if(n1>=10) {
		l1 = '<div class="chiff">'+t1D+'</div><div class="chiff">'+t1U+'</div>';
	}
	else if(n1>=1) {
		l1 = '<div class="chiff">'+t1U+'</div>';
	}

	n2 = Number(""+t2M+""+t2C+""+t2D+""+t2U);
	if (n2>=1000) {
		l2 = '<div class="chiff">'+t2M+'</div><div class="chiff">'+t2C+'</div><div class="chiff">'+t2D+'</div><div class="chiff">'+t2U+'</div>';
	}
	else if(n2>=100) {
		l2 = '<div class="chiff">'+t2C+'</div><div class="chiff">'+t2D+'</div><div class="chiff">'+t2U+'</div>';
	}
	else if(n2>=10) {
		l2 = '<div class="chiff">'+t2D+'</div><div class="chiff">'+t2U+'</div>';
	}
	else if(n2>=1) {
		l2 = '<div class="chiff">'+t2U+'</div>';
	}

	n3 = Number(""+t3M+""+t3C+""+t3D+""+t3U);
	if (n3>=1000) {
		l3 = '<div class="chiff">'+t3M+'</div><div class="chiff">'+t3C+'</div><div class="chiff">'+t3D+'</div><div class="chiff">'+t3U+'</div>';
	}
	else if(n3>=100) {
		l3 = '<div class="chiff">'+t3C+'</div><div class="chiff">'+t3D+'</div><div class="chiff">'+t3U+'</div>';
	}
	else if(n3>=10) {
		l3 = '<div class="chiff">'+t3D+'</div><div class="chiff">'+t3U+'</div>';
	}
	else if(n3>=1) {
		l3 = '<div class="chiff">'+t3U+'</div>';
	}

	if (typNombre=="Decimal") {

		if (chk1Ud==true) {
			l1D = '<div class="virg">,</div><div class="chiff">'+t1Ud+'</div>';
		}
		if (chk1Uc==true) {
			l1D = '<div class="virg">,</div><div class="chiff">'+t1Ud+'</div><div class="chiff">'+t1Uc+'</div>';
		}
		if (chk1Um==true) {
			l1D = '<div class="virg">,</div><div class="chiff">'+t1Ud+'</div><div class="chiff">'+t1Uc+'</div><div class="chiff">'+t1Um+'</div>';
		}
		if (chk1Ud==false && chk1Uc==false && chk1Um==false && n1!=0) {
			l1D = '<div class="virg"></div><div class="chiff"></div>';
		}

		if (chk2Ud==true) {
			l2D = '<div class="virg">,</div><div class="chiff">'+t2Ud+'</div>';
		}
		if (chk2Uc==true) {
			l2D = '<div class="virg">,</div><div class="chiff">'+t2Ud+'</div><div class="chiff">'+t2Uc+'</div>';
		}
		if (chk2Um==true) {
			l2D = '<div class="virg">,</div><div class="chiff">'+t2Ud+'</div><div class="chiff">'+t2Uc+'</div><div class="chiff">'+t2Um+'</div>';
		}
		if (chk2Ud==false && chk2Uc==false && chk2Um==false && n2!=0) {
			l2D = '<div class="virg"></div><div class="chiff"></div>';
		}

		if (chk3Ud==true) {
			l3D = '<div class="virg">,</div><div class="chiff">'+t3Ud+'</div>';
		}
		if (chk3Uc==true) {
			l3D = '<div class="virg">,</div><div class="chiff">'+t3Ud+'</div><div class="chiff">'+t3Uc+'</div>';
		}
		if (chk3Um==true) {
			l3D = '<div class="virg">,</div><div class="chiff">'+t3Ud+'</div><div class="chiff">'+t3Uc+'</div><div class="chiff">'+t3Um+'</div>';
		}
		if (chk3Ud==false && chk3Uc==false && chk3Um==false && n3!=0) {
			l3D = '<div class="virg"></div><div class="chiff"></div>';
		}
	}					

	/* Champs*/

	nbChmpRep = nbChmpProp = nbChmpPropN = nbChmpPropD = 0;

	if (n1>=1000 || n2>=1000 || n3>=1000) {
		lPropRep = '<div class="inptRepM"><input type="tel" id="propRepM" val="" maxlength="1"></div><div class="inptRepC"><input type="tel" id="propRepC" val="" maxlength="1"></div><div class="inptRepD"><input type="tel" id="propRepD" val="" maxlength="1"></div><div class="inptRepU"><input type="tel" id="propRepU" val="" maxlength="1"></div><div class="vidRep"></div>';
		lProp = '<div class="inptPropDM"><input type="tel" id="propDM" val="" maxlength="1"></div><div class="inptPropM"><input type="tel" id="propM" val="" maxlength="1"></div><div class="inptPropC"><input type="tel" id="propC" val="" maxlength="1"></div><div class="inptPropD"><input type="tel" id="propD" val="" maxlength="1"></div><div class="inptPropU"><input type="tel" id="propU" val="" maxlength="1"></div>';
	}
	else if (n1>=100 || n2>=100 || n3>=100) {
		lPropRep = '<div class="inptRepC"><input type="tel" id="propRepC" val="" maxlength="1"></div><div class="inptRepD"><input type="tel" id="propRepD" val="" maxlength="1"></div><div class="inptRepU"><input type="tel" id="propRepU" val="" maxlength="1"></div><div class="vidRep"></div>';
		lProp = '<div class="inptPropM"><input type="tel" id="propM" val="" maxlength="1"></div><div class="inptPropC"><input type="tel" id="propC" val="" maxlength="1"></div><div class="inptPropD"><input type="tel" id="propD" val="" maxlength="1"></div><div class="inptPropU"><input type="tel" id="propU" val="" maxlength="1"></div>';
	}
	else if (n1>10 || n2>10 || n3>10) {
		lPropRep = '<div class="inptRepD"><input type="tel" id="propRepD" val="" maxlength="1"></div><div class="inptRepU"><input type="tel" id="propRepU" val="" maxlength="1"></div><div class="vidRep"></div>';
		lProp = '<div class="inptPropC"><input type="tel" id="propC" val="" maxlength="1"></div><div class="inptPropD"><input type="tel" id="propD" val="" maxlength="1"></div><div class="inptPropU"><input type="tel" id="propU" val="" maxlength="1"></div>';
	}
	else if (n1>=1 || n2>=1 || n3>=1) {
		lPropRep = '<div class="inptRepU"><input type="tel" id="propRepU" val="" maxlength="1"></div><div class="vidRep"></div>';
		lProp = '<div class="inptPropD"><input type="tel" id="propD" val="" maxlength="1"></div><div class="inptPropU"><input type="tel" id="propU" val="" maxlength="1"></div>';
	}

	/* D */

	if (typNombre=="Decimal") {
		if (chk1Ud==true || chk2Ud==true || chk3Ud==true) {
			lPropRepD = '<div class="virgVid"></div>';
			lPropD = '<div class="virg">,</div><div class="inptPropUd"><input type="tel" id="propUd" val="" maxlength="1"></div>';
			nbChmpProp += 1;
			nbChmpPropD += 1;
		}
		if (chk1Uc==true || chk2Uc==true || chk3Uc==true) {
			lPropRepD = '<div class="virgVid"></div><div class="inptRepUc"><input type="tel" id="propRepUc" val="" maxlength="1"></div>';
			lPropD = '<div class="virg">,</div><div class="inptPropUd"><input type="tel" id="propUd" val="" maxlength="1"></div><div class="inptPropUc"><input type="tel" id="propUc" val="" maxlength="1"></div>';
			nbChmpProp += 1;
			nbChmpPropD += 1;
		}
		if (chk1Um==true || chk2Um==true || chk3Um==true) {
			lPropRepD = '<div class="virgVid"></div><div class="inptRepUc"><input type="tel" id="propRepUc" val="" maxlength="1"></div><div class="inptRepUm"><input type="tel" id="propRepUm" val="" maxlength="1"></div>';
			lPropD = '<div class="virg">,</div><div class="inptPropUd"><input type="tel" id="propUd" val="" maxlength="1"></div><div class="inptPropUc"><input type="tel" id="propUc" val="" maxlength="1"></div><div class="inptPropUm"><input type="tel" id="propUm" val="" maxlength="1"></div>';
			nbChmpProp += 1;
			nbChmpPropD += 1;
		}
	}

	/* Affichage opération*/

	if (typNombre=="Entier") {
		$("#calculBox").html("").append('<div id="calculN"><div class="lPropRep">'+lPropRep+'</div><div class="lRang">'+lRang+'</div><div class="l1">'+l1+'</div><div class="l2">'+l2+'</div><div class="l3">'+l3+'</div><div class="lSep">'+lSep+'</div><div class="lProp">'+lProp+'</div></div>');
	}
	else if (typNombre=="Decimal") {
		$("#calculBox").html("").append('<div id="calculN"><div class="lPropRep">'+lPropRep+'</div><div class="lRang">'+lRang+'</div><div class="l1">'+l1+'</div><div class="l2">'+l2+'</div><div class="l3">'+l3+'</div><div class="lSep">'+lSep+'</div><div class="lProp">'+lProp+'</div></div><div id="calculD"><div class="lPropRepD">'+lPropRepD+'</div><div class="lRang">'+lRangD+'</div><div class="l1D">'+l1D+'</div><div class="l2D">'+l2D+'</div><div class="l3D">'+l3D+'</div><div class="lSepD">'+lSepD+'</div><div class="lPropD">'+lPropD+'</div></div>');
	}

	/* Lignes de chiffres */

	if((n1==0 && n2==0) || (n1==0 && n3==0) || (n2==0 && n3==0)) {
		alert("L'opération ne comporte qu'un seul terme.")
	}

	if(n1==0) {
		$(".l1, .l1D").hide();
		$("#chk1Ud, #chk1Uc, #chk1Um").prop({"disabled":true, "checked":false});
		chk1Ud = chk1Uc = chk1Um = false;
	}
	else {
		$("#chk1Ud, #chk1Uc, #chk1Um").prop("disabled", false);
	}
	
	if(n2==0) {
		$(".l2, .l2D").hide();
		$("#chk2Ud, #chk2Uc, #chk2Um").prop({"disabled":true, "checked":false});
		chk2Ud = chk2Uc = chk2Um = false;
	}
	else {
		$("#chk2Ud, #chk2Uc, #chk2Um").prop("disabled", false);
	}
	
	if(n3==0) {
		$(".l3, .l3D").hide();
		$("#chk3Ud, #chk3Uc, #chk3Um").prop({"disabled":true, "checked":false});
		chk3Ud = chk3Uc = chk3Um = false;
	}
	else {
		$("#chk3Ud, #chk3Uc, #chk3Um").prop("disabled", false);
	}

	/* Résultats */

	totU = t1U + t2U + t3U;

	if (totU>=10) {
		resU = totU.toString().substr(1, 1);
		repU = totU.toString().substr(0, 1);
		nbChmpRep += 1;
	}
	else {
		resU = totU;
		repU = 0;
		$("#propRepU").hide();
	}

	totD = t1D + t2D + t3D + Number(repU);
	if (totD>=10) {
		resD = totD.toString().substr(1, 1);
		repD = totD.toString().substr(0, 1);
		nbChmpRep += 1;
	}
	else {
		resD = totD;
		repD = 0;
		$("#propRepD").hide();
	}

	totC = t1C + t2C + t3C + Number(repD);
	if (totC>=10) {
		resC = totC.toString().substr(1, 1);
		repC = totC.toString().substr(0, 1);
		nbChmpRep += 1;
	}
	else {
		resC = totC;
		repC = 0;
		$("#propRepC").hide();
	}

	totM = t1M + t2M + t3M + Number(repC);
	if (totM>=10) {
		resM = totM.toString().substr(1, 1);
		repM = totM.toString().substr(0, 1);
		nbChmpRep += 1;
	}
	else {
		resM = totM;
		repM = 0;
		$(".inptRepM").hide();
	}

	resDM = repM;		

	/* D */

	if (typNombre=="Decimal") {

		totUm = t1Um + t2Um + t3Um;
		if (totUm>=10) {
			resUm = totUm.toString().substr(1, 1);
			repUm = totUm.toString().substr(0, 1);
			nbChmpRep += 1;
		}
		else {
			resUm = totUm;
			repUm = 0;
			$("#propRepUm").hide();
		}

		totUc = t1Uc + t2Uc + t3Uc + Number(repUm);
		if (totUc>=10) {
			resUc = totUc.toString().substr(1, 1);
			repUc = totUc.toString().substr(0, 1);
			nbChmpRep += 1;
		}
		else {
			resUc = totUc;
			repUc = 0;
			$("#propRepUc").hide();
		}

		totUd = t1Ud + t2Ud + t3Ud + Number(repUc);
		if (totUd>=10) {
			$(".vidRep").remove();
			$(".lPropRep").append('<div class="inptRepUd"><input type="tel" id="propRepUd" val="" maxlength="1"></div>');
			resUd = totUd.toString().substr(1, 1);
			repUd = totUd.toString().substr(0, 1);
			nbChmpRep += 1;

			totU = t1U + t2U + t3U + Number(repUd);
			if (totU>=10) {
				resU = totU.toString().substr(1, 1);
				repU = totU.toString().substr(0, 1);
			}
			else {
				resU = totU;
				repU = 0;
				$("#propRepU").hide();
			}
		}
		else {
			resUd = totUd;
			repUd = 0;
			$("#propRepUd").hide();
		}
	}		

	/* Colonnes de l'opération */
	
	total = Number(""+resDM+""+resM+""+resC+""+resD+""+resU+"");

	if (total>=10000) {
		nbChmpProp += 5;
		nbChmpPropN += 5;
	}
	else if (total>=1000) {
		$(".inptRepM").hide();
		$(".inptPropDM, #rangDM").hide();
		nbChmpProp += 4;
		nbChmpPropN += 4;
	}
	else if (total>=100) {
		$(".inptRepC").hide();
		$(".inptPropM, #rangM, #rangDM").hide();
		nbChmpProp += 3;
		nbChmpPropN += 3;
	}
	else if (total>=10) {
		$(".inptRepD").hide();
		$(".inptPropC, #rangC, #rangM, #rangDM").hide();
		nbChmpProp += 2;
		nbChmpPropN += 2;
	}
	else if (total>=1) {
		$(".inptRepU").hide();
		$(".inptPropD, #rangD, #rangC, #rangM, #rangDM").hide();
		nbChmpProp += 1;
		nbChmpPropN += 1;
	}

	/* Rang */

	if (chkRang==true) {$("#chkRang").prop("checked", true);$(".lRang").show();} else {$("#chkRang").prop("checked", false);$(".lRang").hide();}

	if (chk1Um==false && chk2Um==false && chk3Um==false) {
		$("#rangUm").hide();

		if (chk1Uc==false && chk2Uc==false && chk3Uc==false) {
			$("#rangUc").hide();

				if (chk1Ud==false && chk2Ud==false && chk3Ud==false) {
					$("#calculD").hide();
				}
		}
	}

	affichage();

	/* Grille */

	affGrille();

	/* Correction */

	for (var i=0; i<tbProp.length; i++) {
		var term = tbProp[i];
		$("#prop"+term).on('input change', function(){
			$(this).removeClass("incorrect");
			dejaVerif = false;
		});
	}	

}

function affichage() {

	pageWidth = $("#page").width();

	if (pageWidth>1400) {
		colWidth = 120;
		virgWidth = 30;
		propWidth = 100;
		propRepWidth = 55;
		fontSize = 3.5;
	}
	else if (pageWidth>1300) {
		colWidth = 100;
		virgWidth = 20;
		propWidth = 80;
		propRepWidth = 50;
		fontSize = 3;
	}
	else if (pageWidth>1200) {
		colWidth = 90;
		virgWidth = 15;
		propWidth = 60;
		propRepWidth = 40;
		fontSize = 2.5;
	}
	else if (pageWidth>1024) {
		colWidth = 80;
		virgWidth = 15;
		propWidth = 60;
		propRepWidth = 35;
		fontSize = 2.2;
	}
	else {
		colWidth = 70;
		virgWidth = 15;
		propWidth = 55;
		propRepWidth = 30;
		fontSize = 1.8;
	}			

	$(".chiff, .rang, .vid, .vidRep, .inptRepM, .inptRepC, .inptRepD, .inptRepU, .inptPropDM, .inptPropM, .inptPropC, .inptPropD, .inptPropU, .rangD, .inptRepUd, .inptRepUc, .inptRepUm, .inptPropUd, .inptPropUc, .inptPropUm").css("width", colWidth+'px');

	$(".virg, .virgVid").css("width", virgWidth+'px');

	$("#propDM, #propM, #propC, #propD, #propU, #propUd, #propUc, #propUm").css("width", propWidth+'px');

	$("#propRepM, #propRepC, #propRepD, #propRepU, #propRepUd, #propRepUc, #propRepUm").css("width", propRepWidth+'px');

	$("#calculBox").css("font-size", fontSize+'em');
}

/************************************************/

///// VERIFIER /////

/************************************************/

totSucces = nbVerif = 0;
dejaVerif = false;
alertChmpVid = false;

var dOn = new Date();
var dateOn = dOn.getFullYear() + "-" + ("0"+(dOn.getMonth()+1)).slice(-2) + "-" + ("0" + dOn.getDate()).slice(-2) + " " + ("0" + dOn.getHours()).slice(-2) + ":" + ("0" + dOn.getMinutes()).slice(-2) + ":" + ("0" + dOn.getSeconds()).slice(-2);

function verifier() {

	nbSucces = 0;
	alertChmpVid = false;

	for (var i=0; i<tbTerms.length; i++) {

		var term = tbTerms[i];

		if (window['rep'+term]!='') {
			if ($("#propRep"+term).val()!="") {
				if ($("#propRep"+term).val()==window['rep'+term]) {
					$('#propRep'+term).removeClass("incorrect").addClass("correct");
					nbSucces += 1;
				}
				else {
					$('#propRep'+term).removeClass("correct").addClass("incorrect");
				}
			}
			else {
				alertChmpVid = true;
			}
		}
	}

	for (var i=0; i<tbProp.length; i++) {

		var term = tbProp[i];

		if (window['res'+term]!='') {
			if ($("#prop"+term).val()!="") {
				if ($("#prop"+term).val()==window['res'+term]) {
					$('#prop'+term).removeClass("incorrect").addClass("correct");
					nbSucces += 1;
				}
				else {
					$('#prop'+term).removeClass("correct").addClass("incorrect");
				}
			}
			else {
				alertChmpVid = true;
			}
		}				
	}

	/* D */

	if (typNombre=="Decimal") {

		for (var i=0; i<tbTermsD.length; i++) {

			var term = tbTermsD[i];

			if (window['rep'+term]!='') {
				if ($("#propRep"+term).val()!="") {
					if ($("#propRep"+term).val()==window['rep'+term]) {
						$('#propRep'+term).removeClass("incorrect").addClass("correct");
						nbSucces += 1;
					}
					else {
						$('#propRep'+term).removeClass("correct").addClass("incorrect");
					}
				}
				else {
					alertChmpVid = true;
				}
			}
		}

		for (var i=0; i<tbPropD.length; i++) {

			var term = tbPropD[i];

			if (window['res'+term]!='') {
				if ($("#prop"+term).val()!="") {
					if ($("#prop"+term).val()==window['res'+term]) {
						$('#prop'+term).removeClass("incorrect").addClass("correct");
						nbSucces += 1;
					}
					else {
						$('#prop'+term).removeClass("correct").addClass("incorrect");
					}
				}
				else {
					alertChmpVid = true;
				}
			}				
		}
	}

	if (alertChmpVid==true) {
		alert('Un champ de réponse est vide.');
	}
	else {
		if (!dejaVerif)
		{
			nbVerif += 1;
			dejaVerif=true;
		}
	}
		
	/* Réponse succes */

	if (nbSucces==nbChmpProp + nbChmpRep) {
		$("#btVerifier").hide();
		totSucces += 1;
		$("#affSuccesExo").show();
		$("#succesExo").text("Résultat: "+totSucces+" / "+nbVerif);
		affSucces();
		enterSuivant=true;

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