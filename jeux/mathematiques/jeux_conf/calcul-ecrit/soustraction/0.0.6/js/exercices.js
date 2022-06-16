
/************************************************/

///// EXERCICES /////

/************************************************/

/* Grille */

function affGrille() {
	if (chkGrille==true) {

		var hBox = $("#calculBox").height()-20;

		if (typNombre=="Entier") {
			if (typeof nbChmpPropN!="undefined") {
				for (var i=0; i<=nbChmpPropN; i++) {
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

function aleaNbs() {

	for (var i=0; i<tbTerms.length; i++) {

		var term = tbTerms[i];

		if (window['chk1'+term]==true) {
			window['t1'+term] = Math.floor(Math.random()*5)+4;
		}
		else {
			window['t1'+term] = 0;
		}

		if (window['chk2'+term]==true) {
			window['t2'+term] = (Math.floor(Math.random()*4)+1);
		}
		else {
			window['t2'+term] = 0;
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
		}
	}
	
	/* pas de retenue */
	

		
	n1 = Number(""+t1M+""+t1C+""+t1D+""+t1U);
	n2 = Number(""+t2M+""+t2C+""+t2D+""+t2U);
}

function verifDix() {
	if (chk1M==false) {
		chk2M = false;
		$("#chk2M").prop("checked", false);

		if (chk1C==false) {
			chk2C = false;
			$("#chk2C").prop("checked", false);

			if (chk1D==false) {
				chk2D = false;
				$("#chk2D").prop("checked", false);

				if (chk1U==false) {
					chk1U = true;
					chk2U = true;
					$("#chk1U, #chk2U").prop("checked", true);
					
				}
			}
		}
	}
	
	if (chk2M==false && chk2C==false && chk2D==false && chk2U==false) {
		chk2U = true;
		$("#chk2U").prop("checked", true);
	}
}

function generer() {

	/* Si on change d'exercice sur l'état "Suivant" */
	if (enterSuivant==true) {
		$("#btSuivant").click();
	}

	dejaVerif = false;
	
	tbTerms = ["M", "C", "D", "U"];

	if (typNombre=="Entier") {
		$("#tblOpD").hide();
	}
	else if (typNombre=="Decimal") {
		$("#tblOpD").show();
	}

	/* Construction opération */

	verifDix();

	do {
		aleaNbs();
	}
	while (n1<n2);		

	/* Chiffres*/
	
	lPropRep = l1 = l2 = lProp = '';
	lPropRepD = l1D = l2D = lPropD = '';
	lRang = '<div id="rangM" class="rang">M</div><div id="rangC" class="rang">C</div><div id="rangD" class="rang">D</div><div id="rangU" class="rang">U</div>';
	lRangD = '<div id="rangVirg" class="virg">,</div><div id="rangUd" class="rang">d</div><div id="rangUc" class="rang">c</div><div id="rangUm" class="rang">m</div>';		
	lSep = '<div class="plus">-</div><div class="egal">=</div>';
	lSepD = '';

	if (n1>=1000) {
		l1 = '<div id="t1M" class="chiff">'+t1M+'</div><div id="t1C" class="chiff">'+t1C+'</div><div id="t1D" class="chiff">'+t1D+'</div><div id="t1U" class="chiff">'+t1U+'</div>';
	}
	else if(n1>=100) {
		l1 = '<div id="t1C" class="chiff">'+t1C+'</div><div id="t1D" class="chiff">'+t1D+'</div><div id="t1U" class="chiff">'+t1U+'</div>';
	}
	else if(n1>=10) {
		l1 = '<div id="t1D" class="chiff">'+t1D+'</div><div id="t1U" class="chiff">'+t1U+'</div>';
	}
	else if(n1>=1) {
		l1 = '<div id="t1U" class="chiff">'+t1U+'</div>';
	}

	/**/

	if (n2>=1000) {
		l2 = '<div id="t2M" class="chiff">'+t2M+'</div><div id="t2C" class="chiff">'+t2C+'</div><div id="t2D" class="chiff">'+t2D+'</div><div id="t2U" class="chiff">'+t2U+'</div>';
	}
	else if(n2>=100) {
		l2 = '<div id="t2C" class="chiff">'+t2C+'</div><div id="t2D" class="chiff">'+t2D+'</div><div id="t2U" class="chiff">'+t2U+'</div>';
	}
	else if(n2>=10) {
		l2 = '<div id="t2D" class="chiff">'+t2D+'</div><div id="t2U" class="chiff">'+t2U+'</div>';
	}
	else if(n2>=1) {
		l2 = '<div id="t2U" class="chiff">'+t2U+'</div>';
	}

	if (typNombre=="Decimal") {

		if (chk1Ud==true) {
			if (chk2Um==false) {
				l1D = '<div class="virg">,</div><div id="t1Ud" class="chiff">'+t1Ud+'</div><div id="t1Uc" class="chiff">&nbsp;</div>';
				if (chk2Uc==false) {
					l1D = '<div class="virg">,</div><div id="t1Ud" class="chiff">'+t1Ud+'</div>';
					if (chk2Ud==false) {
						l1D = '<div class="virg">,</div><div class="chiff">'+t1Ud+'</div>';
					}
				}
			}
			else {
				l1D = '<div class="virg">,</div><div id="t1Ud" class="chiff">'+t1Ud+'</div><div id="t1Uc" class="chiff">&nbsp;</div><div id="t1Um" class="chiff">&nbsp;</div>';
			}
		}
		if (chk1Uc==true) {
			if (chk2Um==false) {
				l1D = '<div class="virg">,</div><div id="t1Ud" class="chiff">'+t1Ud+'</div><div id="t1Uc" class="chiff">'+t1Uc+'</div>';
			}
			else {
				l1D = '<div class="virg">,</div><div id="t1Ud" class="chiff">'+t1Ud+'</div><div id="t1Uc" class="chiff">'+t1Uc+'</div><div id="t1Um" class="chiff">&nbsp;</div>'
			}
		}
		if (chk1Um==true) {
			l1D = '<div class="virg">,</div><div id="t1Ud" class="chiff">'+t1Ud+'</div><div id="t1Uc" class="chiff">'+t1Uc+'</div><div id="t1Um" class="chiff">'+t1Um+'</div>';
		}
		if (chk1Ud==false && chk1Uc==false && chk1Um==false && n1!=0) {
			if (chk2Um==true) {
				l1D = '<div class="virg"></div><div id="t1Ud" class="chiff">&nbsp;</div><div id="t1Uc" class="chiff">&nbsp;</div><div id="t1Um" class="chiff">&nbsp;</div>';
			}
			else if (chk2Uc==true) {
				l1D = '<div class="virg"></div><div id="t1Ud" class="chiff">&nbsp;</div><div id="t1Uc" class="chiff">&nbsp;</div>';
			}
			else if (chk2Ud==true) {
				l1D = '<div class="virg"></div><div id="t1Ud" class="chiff">&nbsp;</div>';
			}				
		}

		/**/

		if (chk2Ud==true) {
			l2D = '<div class="virg">,</div><div id="t2Ud" class="chiff">'+t2Ud+'</div>';
		}
		if (chk2Uc==true) {
			l2D = '<div class="virg">,</div><div id="t2Ud" class="chiff">'+t2Ud+'</div><div id="t2Uc" class="chiff">'+t2Uc+'</div>';
		}
		if (chk2Um==true) {
			l2D = '<div class="virg">,</div><div id="t2Ud" class="chiff">'+t2Ud+'</div><div id="t2Uc" class="chiff">'+t2Uc+'</div><div id="t2Um" class="chiff">'+t2Um+'</div>';
		}
		if (chk2Ud==false && chk2Uc==false && chk2Um==false && n2!=0) {
			l2D = '<div class="virg"></div><div class="chiff"></div>';
		}
	}					

	/* Champs*/

	nbChmpPropN = nbChmpPropD = 0;

	if (chk1M==true) {
		lPropRep = '<div class="inptRepM"></div><div class="inptRepC"></div><div class="inptRepD"></div><div class="inptRepU"></div>';
		lProp = '<div class="inptPropM"><input type="tel" id="propM" name="propM" maxlength="1"></div><div class="inptPropC"><input type="tel" id="propC" name="propC" maxlength="1"></div><div class="inptPropD"><input type="tel" id="propD" name="propD" maxlength="1"></div><div class="inptPropU"><input type="tel" id="propU" name="propU" maxlength="1"></div>';
	}
	else if (chk1C==true) {
		lPropRep = '<div class="inptRepC"></div><div class="inptRepD"></div><div class="inptRepU"></div>';
		lProp = '<div class="inptPropM"><input type="tel" id="propM" name="propM" maxlength="1"></div><div class="inptPropC"><input type="tel" id="propC" name="propC" maxlength="1"></div><div class="inptPropD"><input type="tel" id="propD" name="propD" maxlength="1"></div><div class="inptPropU"><input type="tel" id="propU" name="propU" maxlength="1"></div>';
	}
	else if (chk1D==true) {
		lPropRep = '<div class="inptRepD"></div><div class="inptRepU"></div>';
		lProp = '<div class="inptPropC"><input type="tel" id="propC" name="propC" maxlength="1"></div><div class="inptPropD"><input type="tel" id="propD" name="propD" maxlength="1"></div><div class="inptPropU"><input type="tel" id="propU" name="propU" maxlength="1"></div>';
	}
	else if (chk1U==true) {
		lPropRep = '<div class="inptRepU"></div>';
		lProp = '<div class="inptPropD"><input type="tel" id="propD" name="propD" maxlength="1"></div><div class="inptPropU"><input type="tel" id="propU" name="propU" maxlength="1"></div>';
	}

	/* D */

	if (typNombre=="Decimal") {
		if (chk1Ud==true || chk2Ud==true) {
			lPropRepD = '<div class="virgVid"></div><div class="inptRepUd"></div>';
			lPropD = '<div class="virg">,</div><div class="inptPropUd"><input type="tel" id="propUd" name="propUd" maxlength="1"></div>';
			nbChmpPropD += 1;
		}
		if (chk1Uc==true || chk2Uc==true) {
			lPropRepD = '<div class="virgVid"></div><div class="inptRepUd"></div><div class="inptRepUc"></div>';
			lPropD = '<div class="virg">,</div><div class="inptPropUd"><input type="tel" id="propUd" name="propUd" maxlength="1"></div><div class="inptPropUc"><input type="tel" id="propUc" name="propUc" maxlength="1"></div>';
			nbChmpPropD += 1;
		}
		if (chk1Um==true || chk2Um==true) {
			lPropRepD = '<div class="virgVid"></div><div class="inptRepUd"></div><div class="inptRepUc"></div><div class="inptRepUm"></div>';
			lPropD = '<div class="virg">,</div><div class="inptPropUd"><input type="tel" id="propUd" name="propUd" maxlength="1"></div><div class="inptPropUc"><input type="tel" id="propUc" name="propUc" maxlength="1"></div><div class="inptPropUm"><input type="tel" id="propUm" name="propUm" maxlength="1"></div>';
			nbChmpPropD += 1;
		}
	}

	/* Affichage opération*/

	if (typNombre=="Entier") {
		$("#calculBox").html("").append('<div id="calculN"><div class="lRang">'+lRang+'</div><div class="lPropRep">'+lPropRep+'</div><div class="l1">'+l1+'</div><div class="l2">'+l2+'</div><div class="lSep">'+lSep+'</div><div class="lProp">'+lProp+'</div></div>');
	}
	else if (typNombre=="Decimal") {
		$("#calculBox").html("").append('<div id="calculN"><div class="lRang">'+lRang+'</div><div class="lPropRep">'+lPropRep+'</div><div class="l1">'+l1+'</div><div class="l2">'+l2+'</div><div class="lSep">'+lSep+'</div><div class="lProp">'+lProp+'</div></div><div id="calculD"><div class="lRang">'+lRangD+'</div><div class="lPropRepD">'+lPropRepD+'</div><div class="l1D">'+l1D+'</div><div class="l2D">'+l2D+'</div><div class="lSepD">'+lSepD+'</div><div class="lPropD">'+lPropD+'</div></div>');
	}

	/*************/
	/* Résultats */
	/*************/

	/* D */

	if (typNombre=="Decimal") {

		totUm = t1Um - t2Um;
		if (totUm<0) {
			resUm = (10 + t1Um) - t2Um;
			repUm = 1;
			$(".inptPropUm").append('<div class="imp">✗</div>');
			$(".inptPropUc").append('<div class="imp2">✗</div>');
			$("#t1Um").append('<div class="ptR"></div>');
			$("#t1Um .ptR, .inptPropUm .imp").mouseover(function(){
				emprunter("Um");
			});	
		}
		else {
			resUm = totUm;
			repUm = 0;
		}

		totUc = (t1Uc- repUm) - t2Uc ;
		if (totUc<0) {
			resUc = (10 + (t1Uc- repUm)) - t2Uc;
			repUc = 1;
			$(".inptPropUc").append('<div class="imp">✗</div>');
			$(".inptPropUd").append('<div class="imp2">✗</div>');
			$("#t1Uc").append('<div class="ptR"></div>');
			$("#t1Uc .ptR, .inptPropUc .imp").mouseover(function(){
				emprunter("Uc");
			});	
		}
		else {
			resUc = totUc;
			repUc = 0;
		}

		totUd = (t1Ud - repUc) - t2Ud;
		if (totUd<0) {
			resUd = (10 + (t1Ud - repUc)) - t2Ud;
			repUd = 1;
			$(".inptPropUd").append('<div class="imp">✗</div>');
			$(".inptPropU").append('<div class="imp2">✗</div>');
			$("#t1Ud").append('<div class="ptR"></div>');
			$("#t1Ud .ptR, .inptPropUd .imp").mouseover(function(){
				emprunter("Ud");
			});	
		}
		else {
			resUd = totUd;
			repUd = 0;
		}
	}

	/* N */

	if (typNombre=="Entier") {
		totU = t1U - t2U;
		totUd = repUd = t1Ud = t2Ud = t1Uc = t2Uc = t1Um = t2Um = 0;
	}
	else if (typNombre=="Decimal") {
		totU = (t1U - repUd) - t2U;
	}		

	if (totU<0) {
		resU = (10 + (t1U - repUd)) - t2U;
		repU = 1;
		$(".inptPropU").append('<div class="imp">✗</div>');	
		$(".inptPropD").append('<div class="imp2">✗</div>');
		$("#t1U").append('<div class="ptR"></div>');
		$("#t1U .ptR, .inptPropU .imp").mouseover(function(){
			emprunter("U");
		});		
	}
	else {
		resU = totU;
		repU = 0;
	}

	/***/

	totD = (t1D - repU) - t2D;
	if (totD<0) {
		resD = (10 + (t1D - repU)) - t2D;
		repD = 1;
		$(".inptPropD").append('<div class="imp">✗</div>');	
		$(".inptPropC").append('<div class="imp2">✗</div>');
		$("#t1D").append('<div class="ptR"></div>');
		$("#t1D .ptR, .inptPropD .imp").mouseover(function(){
			emprunter("D");
		});
	}
	else {
		resD = totD;
		repD = 0;
	}

	totC = (t1C - repD) - t2C;
	if (totC<0) {
		resC = (10 + (t1C - repD)) - t2C;
		repC = 1;
		$(".inptPropC").append('<div class="imp">✗</div>');	
		$(".inptPropM").append('<div class="imp2">✗</div>');	
		$("#t1C").append('<div class="ptR"></div>');
		$("#t1C .ptR, .inptPropC .imp").mouseover(function(){
			emprunter("C");
		});
	}
	else {
		resC = totC;
		repC = 0;
	}

	/***/

	resM = (t1M - repC) - t2M;	

	/***/

	t1Cemp = t1C;
	t1Demp = t1D;
	t1Uemp = t1U;
	t1Udemp = t1Ud;
	t1Ucemp = t1Uc;
	t1Umemp = t1Um;

	function emprunter(e) {

		if (e=="Um") {
			$("#t1Um").append('<div class="bullBox"><div class="bull">Clique pour ajouter un centième</div><div class="flEmp">➜</div><div class="flEmp2">➜</div></div>');
			$("#t1Um .ptR, .inptPropUm .imp").click(function(){
				$("#t1Um .bullBox, #t1Um .ptR, .inptPropUm .imp, .inptPropUc .imp2").remove();
				if (chk1Um==false && $("#t1Um").html()=="&nbsp;") {
					$("#t1Um").append('<div class="ajt">10</div>');
				}
				else {
					$("#t1Um").append('<div class="ajt">1</div>');
				}
				$(".inptRepUc").append('<div class="empUc emp">+1</div>');
				t1Umemp = t1Um + 10;
			});
			$("#t1Um .ptR, .inptPropUm .imp").mouseout(function(){
				$("#t1Um .bullBox").remove();
			});
		}
		else if (e=="Uc") {
			$("#t1Uc").append('<div class="bullBox"><div class="bull">Clique pour ajouter un dixième</div><div class="flEmp">➜</div><div class="flEmp2">➜</div></div>');
			$("#t1Uc .ptR, .inptPropUc .imp").click(function(){
				$("#t1Uc .bullBox, #t1Uc .ptR, .inptPropUc .imp, .inptPropUd .imp2").remove();
				if (chk1Uc==false && $("#t1Uc").html()=="&nbsp;") {
					$("#t1Uc").append('<div class="ajt">10</div>');
				}
				else {
					$("#t1Uc").append('<div class="ajt">1</div>');
				}
				$(".inptRepUd").append('<div class="empUc emp">+1</div>');
				t1Ucemp = t1Uc + 10;
			});
			$("#t1Uc .ptR, .inptPropUc .imp").mouseout(function(){
				$("#t1Uc .bullBox").remove();
			});
		}
		else if (e=="Ud") {
			$("#t1Ud").append('<div class="bullBox"><div class="bull">Clique pour ajouter une unité</div><div class="flEmp">➜</div><div class="flEmp2">➜</div></div>');
			$("#t1Ud .ptR, .inptPropUd .imp").click(function(){
				$("#t1Ud .bullBox, #t1Ud .ptR, .inptPropUd .imp, .inptPropU .imp2").remove();
				if (chk1Ud==false && $("#t1Ud").html()=="&nbsp;") {
					$("#t1Ud").append('<div class="ajt">10</div>');
				}
				else {
					$("#t1Ud").append('<div class="ajt">1</div>');
				}
				$(".inptRepU").append('<div class="empUd emp">+1</div>');
				t1Udemp = t1Ud + 10;
			});
			$("#t1Ud .flEmp").css("left", "-1.2em");
			$("#t1Ud .ptR, .inptPropUd .imp").mouseout(function(){
				$("#t1Ud .bullBox").remove();
			});
		}
		else if (e=="U") {
			$("#t1U").append('<div class="bullBox"><div class="bull">Clique pour ajouter une dizaine</div><div class="flEmp">➜</div><div class="flEmp2">➜</div></div>');
			$("#t1U .ptR, .inptPropU .imp").click(function(){
				$("#t1U .bullBox, #t1U .ptR, .inptPropU .imp, .inptPropD .imp2").remove();
				$("#t1U").append('<div class="ajt">1</div>');
				$(".inptRepD").append('<div class="empU emp">+1</div>');
				t1Uemp = t1U + 10;
			});
			$("#t1U .ptR, .inptPropU .imp").mouseout(function(){
				$("#t1U .bullBox").remove();
			});
		}
		else if (e=="D") {
			$("#t1D").append('<div class="bullBox"><div class="bull">Clique pour ajouter une centaine</div><div class="flEmp">➜</div><div class="flEmp2">➜</div></div>');
			$("#t1D .ptR, .inptPropD .imp").click(function(){
				$("#t1D .bullBox, #t1D .ptR, .inptPropD .imp, .inptPropC .imp2").remove();
				$("#t1D").append('<div class="ajt">1</div>');						
				$(".inptRepC").append('<div class="empD emp">+1</div>');
				t1Demp = t1D + 10;
			});
			$("#t1D .ptR, .inptPropD .imp").mouseout(function(){
				$("#t1D .bullBox").remove();
			});
		}
		else if (e=="C") {
			$("#t1C").append('<div class="bullBox"><div class="bull">Clique pour ajouter mille</div><div class="flEmp">➜</div><div class="flEmp2">➜</div></div>');
			$("#t1C .ptR, .inptPropC .imp").click(function(){
				$("#t1C .bullBox, #t1C .ptR, .inptPropC .imp, .inptPropM .imp2").remove();
				$("#t1C").append('<div class="ajt">1</div>');					
				$(".inptRepM").append('<div class="empC emp">+1</div>');
				t1Cemp = t1C + 10;
			});
			$("#t1C .ptR, .inptPropC .imp").mouseout(function(){
				$("#t1C .bullBox").remove();
			});
		}
	}		

	/* Colonnes de l'opération */

	if (chk1M==false && chk2M==false) {
		tbTerms = ["C", "D", "U"];
		nbChmpPropN = 3;
		$(".inptPropM, #rangM").hide();
		if (chk1C==false && chk2C==false) {
			tbTerms = ["D", "U"];
			nbChmpPropN = 2;
			$(".inptPropC, #rangC").hide();
			if (chk1D==false && chk2D==false) {
				tbTerms = ["U"];
				nbChmpPropN = 1;
				$(".inptPropD, #rangD").hide();
			}
		}
	}
	else {
		tbTerms = ["M", "C", "D", "U"];
		nbChmpPropN = 4;
	}

	/* Rang */

	if (chkRang==true) {$("#chkRang").prop("checked", true);$(".lRang").show();} else {$("#chkRang").prop("checked", false);$(".lRang").hide();}

	if (chk1Um==false && chk2Um==false) {
		$("#rangUm").hide();

		if (chk1Uc==false && chk2Uc==false) {
			$("#rangUc").hide();

				if (chk1Ud==false && chk2Ud==false) {
					$("#calculD").hide();
				}
		}
	}

	affichage();

	/* Grille */

	affGrille();

	/* Correction */

	for (var i=0; i<tbTerms.length; i++) {
		var term = tbTerms[i];
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

	$(".chiff, .rang, .vid, .vidRep, .inptRepM, .inptRepC, .inptRepD, .inptRepU, .inptPropM, .inptPropC, .inptPropD, .inptPropU, .rangD, .inptRepUd, .inptRepUc, .inptRepUm, .inptPropUd, .inptPropUc, .inptPropUm").css("width", colWidth+'px');

	$(".virg, .virgVid").css("width", virgWidth+'px');

	$("#propM, #propC, #propD, #propU, #propUd, #propUc, #propUm").css("width", propWidth+'px');

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

		if (typeof window['res'+term]!='') {
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

			if (typeof window['res'+term]!='') {
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

	if (nbSucces==nbChmpPropN + nbChmpPropD) {
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