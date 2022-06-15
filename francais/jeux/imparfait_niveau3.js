var vMot1="allais";
var vque1="Je (aller)";
var vMot2="allais";
var vque2="Tu (aller)";
var vMot3="allait";
var vque3="Il / Elle (aller)";
var vMot4="allions";
var vque4="Nous (aller)";
var vMot5="alliez";
var vque5="Vous (aller)";
var vMot6="allaient";
var vque6="Ils / Elles (aller)";
var vMot7="venais";
var vque7="Je (venir)";
var vMot8="venais";
var vque8="Tu (venir)";
var vMot9="venait";
var vque9="Il / Elle (venir)";
var vMot10="venions";
var vque10="Nous (venir)";
var vMot11="veniez";
var vque11="Vous (venir)";
var vMot12="venaient";
var vque12="Ils / Elles (venir)";
var vMot13="disais";
var vque13="Je (dire)";
var vMot14="disais";
var vque14="Tu (dire)";
var vMot15="disait";
var vque15="Il / Elle (dire)";
var vMot16="disions";
var vque16="Nous (dire)";
var vMot17="disiez"
var vque17="Vous (dire)";
var vMot18="disaient";
var vque18="Ils / Elles (dire)";
var vMot19="faisais"
var vque19="Je (faisre)";
var vMot20="faisais";
var vque20="Tu (faisre)";
var vMot21="faisait";
var vque21="Il / Elle (faisre)";
var vMot22="faisions";
var vque22="Nous (faisre)";
var vMot23="faisiez";
var vque23="Vous (faisre)";
var vMot24="faisaient";
var vque24="Ils / Elles (faisre)";
var vMot25="pouvais";
var vque25="Je (pouvoir)";
var vMot26="pouvais";
var vque26="Tu (pouvoir)";
var vMot27="pouvait";
var vque27="Il / Elle (pouvoir)";
var vMot28="pouvions";
var vque28="Nous (pouvoir)";
var vMot29="pouviez";
var vque29="Vous (pouvoir)";
var vMot30="pouvaient";
var vque30="Ils / Elles (pouvoir)";

var lequel1=0; select=0; valid=0;lequel2=0;valid2=0;lequel3=0;valid3=0;lequel4=0;valid4=0;lequel5=0;valid5=0;lequel6=0;valid6=0;lequel7=0;valid7=0;lequel8=0;valid8=0;lequel9=0;valid9=0;lequel10=0;valid10=0;note=0;efface2=0;efface3=0;tour=1;
var lequelunite=0;lequelunite2=0;lequelunite3=0;lequelunite4=0;
var lequelunite5=0;lequelunite6=0;lequelunite7=0;lequelunite8=0;lequelunite9=0;lequelunite10=0;note=0;


function jecoute()
		{
		document.getElementById("correction").style.display= "";
		document.getElementById("tour").innerHTML = "Exercice n°"+tour+" sur 10";

		
		switch (tour)
		{
			case 1 :
			document.getElementById("reponsee1").focus()
				if (lequel1===0)
				{
				lettre=Math.floor(Math.random()*30)+1; 
				lequel1++;
				}
				switch(lettre)
				{
				case 1: question1 = vque1 ; reponse1 = vMot1;
				break;
				case 2: question1 = vque2 ; reponse1 = vMot2;
				break;
				case 3: question1 = vque3 ; reponse1 = vMot3;
				break;
				case 4: question1 = vque4 ; reponse1 = vMot4;
				break;
				case 5: question1 = vque5 ; reponse1 = vMot5;
				break;
				case 6: question1 = vque6 ; reponse1 = vMot6;
				break;
				case 7: question1 = vque7 ; reponse1 = vMot7;
				break;
				case 8: question1 = vque8 ; reponse1 = vMot8;
				break;
				case 9: question1 = vque9 ; reponse1 = vMot9;
				break;
				case 10: question1 = vque10 ; reponse1 = vMot10;
				break;
				case 11: question1 = vque11 ; reponse1 = vMot11;
				break;
				case 12: question1 = vque12 ; reponse1 = vMot12;
				break;
				case 13: question1 = vque13 ; reponse1 = vMot13;
				break;
				case 14: question1 = vque14 ; reponse1 = vMot14;
				break;
				case 15: question1 = vque15 ; reponse1 = vMot15;
				break;
				case 16: question1 = vque16 ; reponse1 = vMot16;
				break;
				case 17: question1 = vque17 ; reponse1 = vMot17;
				break;
				case 18: question1 = vque18 ; reponse1 = vMot18;
				break;
				case 19: question1 = vque19 ; reponse1 = vMot19;
				break;
				case 20: question1 = vque20 ; reponse1 = vMot20;
				break;
				case 21: question1 = vque21 ; reponse1 = vMot21;
				break;
				case 22: question1 = vque22 ; reponse1 = vMot22;
				break;
				case 23: question1 = vque23 ; reponse1 = vMot23;
				break;
				case 24: question1 = vque24 ; reponse1 = vMot24;
				break;
				case 25: question1 = vque25 ; reponse1 = vMot25;
				break;
				case 26: question1 = vque26 ; reponse1 = vMot26;
				break;
				case 27: question1 = vque27 ; reponse1 = vMot27;
				break;
				case 28: question1 = vque28 ; reponse1 = vMot28;
				break;
				case 29: question1 = vque29 ; reponse1 = vMot29;
				break;
				case 30: question1 = vque30 ; reponse1 = vMot30;
				break;
				}				
				document.getElementById("questionn1").style.display= "";
				document.getElementById("questionn1").innerHTML = question1;
				break;

			case 2 :
				document.getElementById("correction1").style.display= "none";
				document.getElementById("reponsee1").style.display= "none";
				document.getElementById("reponsee2").style.display= "";
				document.getElementById("correction").style.display= "";
				document.getElementById("reponsee2").focus()
				document.getElementById("questionn1").style.display= "none"
				while(true)
				{
				if (lequel2===0)
				{
				lettre2=Math.floor(Math.random()*30)+1; 
				lequel2++;
				}
				if(lettre2===lettre)
				{
				lequel2=0;
				}
				else
				{
				break;
				}
				}
				switch(lettre2)
				{
				case 1: question2 = vque1 ; reponse2 = vMot1;
				break;
				case 2: question2 = vque2 ; reponse2 = vMot2;
				break;
				case 3: question2 = vque3 ; reponse2 = vMot3;
				break;
				case 4: question2 = vque4 ; reponse2 = vMot4;
				break;
				case 5: question2 = vque5 ; reponse2 = vMot5;
				break;
				case 6: question2 = vque6 ; reponse2 = vMot6;
				break;
				case 7: question2 = vque7 ; reponse2 = vMot7;
				break;
				case 8: question2 = vque8 ; reponse2 = vMot8;
				break;
				case 9: question2 = vque9 ; reponse2 = vMot9;
				break;
				case 10: question2 = vque10 ; reponse2 = vMot10;
				break;
				case 11: question2 = vque11 ; reponse2 = vMot11;
				break;
				case 12: question2 = vque12 ; reponse2 = vMot12;
				break;
				case 13: question2 = vque13 ; reponse2 = vMot13;
				break;
				case 14: question2 = vque14 ; reponse2 = vMot14;
				break;
				case 15: question2 = vque15 ; reponse2 = vMot15;
				break;
				case 16: question2 = vque16 ; reponse2 = vMot16;
				break;
				case 17: question2 = vque17 ; reponse2 = vMot17;
				break;
				case 18: question2 = vque18 ; reponse2 = vMot18;
				break;
				case 19: question2 = vque19 ; reponse2 = vMot19;
				break;
				case 20: question2 = vque20 ; reponse2 = vMot20;
				break;
				case 21: question2 = vque21 ; reponse2 = vMot21;
				break;
				case 22: question2 = vque22 ; reponse2 = vMot22;
				break;
				case 23: question2 = vque23 ; reponse2 = vMot23;
				break;
				case 24: question2 = vque24 ; reponse2 = vMot24;
				break;
				case 25: question2 = vque25 ; reponse2 = vMot25;
				break;
				case 26: question2 = vque26 ; reponse2 = vMot26;
				break;
				case 27: question2 = vque27 ; reponse2 = vMot27;
				break;
				case 28: question2 = vque28 ; reponse2 = vMot28;
				break;
				case 29: question2 = vque29 ; reponse2 = vMot29;
				break;
				case 30: question2 = vque30 ; reponse2 = vMot30;
				break;
				}		
			document.getElementById("questionn2").style.display= "";
			document.getElementById("questionn2").innerHTML = question2;
			break;
			
			case 3 :
				document.getElementById("correction2").style.display= "none";
				document.getElementById("reponsee2").style.display= "none";
				document.getElementById("reponsee3").style.display= "";
				document.getElementById("reponsee3").focus()
				document.getElementById("questionn2").style.display= "none"
				while(true)
				{
				if (lequel3===0)
				{
				lettre3=Math.floor(Math.random()*30)+1; 
				lequel3++;
				}
				if(lettre3===lettre || lettre3===lettre2)
				{
				lequel3=0;
				}
				else
				{
				break;
				}
				}
				switch(lettre3)
				{
				case 1: question3 = vque1 ; reponse3 = vMot1;
				break;
				case 2: question3 = vque2 ; reponse3 = vMot2;
				break;
				case 3: question3 = vque3 ; reponse3 = vMot3;
				break;
				case 4: question3 = vque4 ; reponse3 = vMot4;
				break;
				case 5: question3 = vque5 ; reponse3 = vMot5;
				break;
				case 6: question3 = vque6 ; reponse3 = vMot6;
				break;
				case 7: question3 = vque7 ; reponse3 = vMot7;
				break;
				case 8: question3 = vque8 ; reponse3 = vMot8;
				break;
				case 9: question3 = vque9 ; reponse3 = vMot9;
				break;
				case 10: question3 = vque10 ; reponse3 = vMot10;
				break;
				case 11: question3 = vque11 ; reponse3 = vMot11;
				break;
				case 12: question3 = vque12 ; reponse3 = vMot12;
				break;
				case 13: question3 = vque13 ; reponse3 = vMot13;
				break;
				case 14: question3 = vque14 ; reponse3 = vMot14;
				break;
				case 15: question3 = vque15 ; reponse3 = vMot15;
				break;
				case 16: question3 = vque16 ; reponse3 = vMot16;
				break;
				case 17: question3 = vque17 ; reponse3 = vMot17;
				break;
				case 18: question3 = vque18 ; reponse3 = vMot18;
				break;
				case 19: question3 = vque19 ; reponse3 = vMot19;
				break;
				case 20: question3 = vque20 ; reponse3 = vMot20;
				break;
				case 21: question3 = vque21 ; reponse3 = vMot21;
				break;
				case 22: question3 = vque22 ; reponse3 = vMot22;
				break;
				case 23: question3 = vque23 ; reponse3 = vMot23;
				break;
				case 24: question3 = vque24 ; reponse3 = vMot24;
				break;
				case 25: question3 = vque25 ; reponse3 = vMot25;
				break;
				case 26: question3 = vque26 ; reponse3 = vMot26;
				break;
				case 27: question3 = vque27 ; reponse3 = vMot27;
				break;
				case 28: question3 = vque28 ; reponse3 = vMot28;
				break;
				case 29: question3 = vque29 ; reponse3 = vMot29;
				break;
				case 30: question3 = vque30 ; reponse3 = vMot30;
				break;
				}		
			document.getElementById("questionn3").style.display= "";
			document.getElementById("questionn3").innerHTML = question3;
			break;
			
			case 4 :
				document.getElementById("correction3").style.display= "none";
				document.getElementById("reponsee3").style.display= "none";
				document.getElementById("reponsee4").style.display= "";
				document.getElementById("reponsee4").focus()
				document.getElementById("questionn3").style.display= "none"
				while(true)
				{
					if (lequel4===0)
				{
				lettre4=Math.floor(Math.random()*30)+1; 
				lequel4++;
				}
				if(lettre4===lettre || lettre4===lettre2 || lettre4===lettre3)
				{
				lequel4=0;
				}
				else
				{
				break;
				}
				}
				switch(lettre4)
				{
				case 1: question4 = vque1 ; reponse4 = vMot1;
				break;
				case 2: question4 = vque2 ; reponse4 = vMot2;
				break;
				case 3: question4 = vque3 ; reponse4 = vMot3;
				break;
				case 4: question4 = vque4 ; reponse4 = vMot4;
				break;
				case 5: question4 = vque5 ; reponse4 = vMot5;
				break;
				case 6: question4 = vque6 ; reponse4 = vMot6;
				break;
				case 7: question4 = vque7 ; reponse4 = vMot7;
				break;
				case 8: question4 = vque8 ; reponse4 = vMot8;
				break;
				case 9: question4 = vque9 ; reponse4 = vMot9;
				break;
				case 10: question4 = vque10 ; reponse4 = vMot10;
				break;
				case 11: question4 = vque11 ; reponse4 = vMot11;
				break;
				case 12: question4 = vque12 ; reponse4 = vMot12;
				break;
				case 13: question4 = vque13 ; reponse4 = vMot13;
				break;
				case 14: question4 = vque14 ; reponse4 = vMot14;
				break;
				case 15: question4 = vque15 ; reponse4 = vMot15;
				break;
				case 16: question4 = vque16 ; reponse4 = vMot16;
				break;
				case 17: question4 = vque17 ; reponse4 = vMot17;
				break;
				case 18: question4 = vque18 ; reponse4 = vMot18;
				break;
				case 19: question4 = vque19 ; reponse4 = vMot19;
				break;
				case 20: question4 = vque20 ; reponse4 = vMot20;
				break;
				case 21: question4 = vque21 ; reponse4 = vMot21;
				break;
				case 22: question4 = vque22 ; reponse4 = vMot22;
				break;
				case 23: question4 = vque23 ; reponse4 = vMot23;
				break;
				case 24: question4 = vque24 ; reponse4 = vMot24;
				break;
				case 25: question4 = vque25 ; reponse4 = vMot25;
				break;
				case 26: question4 = vque26 ; reponse4 = vMot26;
				break;
				case 27: question4 = vque27 ; reponse4 = vMot27;
				break;
				case 28: question4 = vque28 ; reponse4 = vMot28;
				break;
				case 29: question4 = vque29 ; reponse4 = vMot29;
				break;
				case 30: question4 = vque30 ; reponse4 = vMot30;
				break;
				}		
			document.getElementById("questionn4").style.display= "";
			document.getElementById("questionn4").innerHTML = question4;
			break;
			
			case 5 :
				document.getElementById("correction4").style.display= "none";
				document.getElementById("reponsee4").style.display= "none";
				document.getElementById("reponsee5").style.display= "";
				document.getElementById("reponsee5").focus()
				document.getElementById("questionn4").style.display= "none"
				while(true)
				{
					if (lequel5===0)
				{
				lettre5=Math.floor(Math.random()*30)+1; 
				lequel5++;
				}
				if(lettre5===lettre || lettre5===lettre2 || lettre5===lettre3 || lettre5===lettre4)
				{
				lequel5=0;
				}
				else
				{
				break;
				}
				}
				switch(lettre5)
				{
				case 1: question5 = vque1 ; reponse5 = vMot1;
				break;
				case 2: question5 = vque2 ; reponse5 = vMot2;
				break;
				case 3: question5 = vque3 ; reponse5 = vMot3;
				break;
				case 4: question5 = vque4 ; reponse5 = vMot4;
				break;
				case 5: question5 = vque5 ; reponse5 = vMot5;
				break;
				case 6: question5 = vque6 ; reponse5 = vMot6;
				break;
				case 7: question5 = vque7 ; reponse5 = vMot7;
				break;
				case 8: question5 = vque8 ; reponse5 = vMot8;
				break;
				case 9: question5 = vque9 ; reponse5 = vMot9;
				break;
				case 10: question5 = vque10 ; reponse5 = vMot10;
				break;
				case 11: question5 = vque11 ; reponse5 = vMot11;
				break;
				case 12: question5 = vque12 ; reponse5 = vMot12;
				break;
				case 13: question5 = vque13 ; reponse5 = vMot13;
				break;
				case 14: question5 = vque14 ; reponse5 = vMot14;
				break;
				case 15: question5 = vque15 ; reponse5 = vMot15;
				break;
				case 16: question5 = vque16 ; reponse5 = vMot16;
				break;
				case 17: question5 = vque17 ; reponse5 = vMot17;
				break;
				case 18: question5 = vque18 ; reponse5 = vMot18;
				break;
				case 19: question5 = vque19 ; reponse5 = vMot19;
				break;
				case 20: question5 = vque20 ; reponse5 = vMot20;
				break;
				case 21: question5 = vque21 ; reponse5 = vMot21;
				break;
				case 22: question5 = vque22 ; reponse5 = vMot22;
				break;
				case 23: question5 = vque23 ; reponse5 = vMot23;
				break;
				case 24: question5 = vque24 ; reponse5 = vMot24;
				break;
				case 25: question5 = vque25 ; reponse5 = vMot25;
				break;
				case 26: question5 = vque26 ; reponse5 = vMot26;
				break;
				case 27: question5 = vque27 ; reponse5 = vMot27;
				break;
				case 28: question5 = vque28 ; reponse5 = vMot28;
				break;
				case 29: question5 = vque29 ; reponse5 = vMot29;
				break;
				case 30: question5 = vque30 ; reponse5 = vMot30;
				break;
				}		
			document.getElementById("questionn5").style.display= "";
			document.getElementById("questionn5").innerHTML = question5;
			break;
			
			case 6 :
				document.getElementById("correction5").style.display= "none";
				document.getElementById("reponsee5").style.display= "none";
				document.getElementById("reponsee6").style.display= "";
				document.getElementById("reponsee6").focus()
				document.getElementById("questionn5").style.display= "none"
				while(true)
				{
					if (lequel6===0)
				{
				lettre6=Math.floor(Math.random()*30)+1; 
				lequel6++;
				}
				if(lettre6===lettre || lettre6===lettre2 || lettre6===lettre3 || lettre6===lettre4 || lettre6===lettre5)
				{
				lequel6=0;
				}
				else
				{
				break;
				}
				}
				switch(lettre6)
				{
				case 1: question6 = vque1 ; reponse6 = vMot1;
				break;
				case 2: question6 = vque2 ; reponse6 = vMot2;
				break;
				case 3: question6 = vque3 ; reponse6 = vMot3;
				break;
				case 4: question6 = vque4 ; reponse6 = vMot4;
				break;
				case 5: question6 = vque5 ; reponse6 = vMot5;
				break;
				case 6: question6 = vque6 ; reponse6 = vMot6;
				break;
				case 7: question6 = vque7 ; reponse6 = vMot7;
				break;
				case 8: question6 = vque8 ; reponse6 = vMot8;
				break;
				case 9: question6 = vque9 ; reponse6 = vMot9;
				break;
				case 10: question6 = vque10 ; reponse6 = vMot10;
				break;
				case 11: question6 = vque11 ; reponse6 = vMot11;
				break;
				case 12: question6 = vque12 ; reponse6 = vMot12;
				break;
				case 13: question6 = vque13 ; reponse6 = vMot13;
				break;
				case 14: question6 = vque14 ; reponse6 = vMot14;
				break;
				case 15: question6 = vque15 ; reponse6 = vMot15;
				break;
				case 16: question6 = vque16 ; reponse6 = vMot16;
				break;
				case 17: question6 = vque17 ; reponse6 = vMot17;
				break;
				case 18: question6 = vque18 ; reponse6 = vMot18;
				break;
				case 19: question6 = vque19 ; reponse6 = vMot19;
				break;
				case 20: question6 = vque20 ; reponse6 = vMot20;
				break;
				case 21: question6 = vque21 ; reponse6 = vMot21;
				break;
				case 22: question6 = vque22 ; reponse6 = vMot22;
				break;
				case 23: question6 = vque23 ; reponse6 = vMot23;
				break;
				case 24: question6 = vque24 ; reponse6 = vMot24;
				break;
				case 25: question6 = vque25 ; reponse6 = vMot25;
				break;
				case 26: question6 = vque26 ; reponse6 = vMot26;
				break;
				case 27: question6 = vque27 ; reponse6 = vMot27;
				break;
				case 28: question6 = vque28 ; reponse6 = vMot28;
				break;
				case 29: question6 = vque29 ; reponse6 = vMot29;
				break;
				case 30: question6 = vque30 ; reponse6 = vMot30;
				break;
				}		
			document.getElementById("questionn6").style.display= "";
			document.getElementById("questionn6").innerHTML = question6;
			break;
			
			case 7 :
				document.getElementById("correction6").style.display= "none";
				document.getElementById("reponsee6").style.display= "none";
				document.getElementById("reponsee7").style.display= "";
				document.getElementById("reponsee7").focus()
				document.getElementById("questionn6").style.display= "none"
				while(true)
				{
					if (lequel7===0)
				{
				lettre7=Math.floor(Math.random()*30)+1; 
				lequel7++;
				}
				if(lettre7===lettre || lettre7===lettre2 || lettre7===lettre3 || lettre7===lettre4 || lettre7===lettre5 || lettre7===lettre6)
				{
				lequel7=0;
				}
				else
				{
				break;
				}
				}
				switch(lettre7)
				{
				case 1: question7 = vque1 ; reponse7 = vMot1;
				break;
				case 2: question7 = vque2 ; reponse7 = vMot2;
				break;
				case 3: question7 = vque3 ; reponse7 = vMot3;
				break;
				case 4: question7 = vque4 ; reponse7 = vMot4;
				break;
				case 5: question7 = vque5 ; reponse7 = vMot5;
				break;
				case 6: question7 = vque6 ; reponse7 = vMot6;
				break;
				case 7: question7 = vque7 ; reponse7 = vMot7;
				break;
				case 8: question7 = vque8 ; reponse7 = vMot8;
				break;
				case 9: question7 = vque9 ; reponse7 = vMot9;
				break;
				case 10: question7 = vque10 ; reponse7 = vMot10;
				break;
				case 11: question7 = vque11 ; reponse7 = vMot11;
				break;
				case 12: question7 = vque12 ; reponse7 = vMot12;
				break;
				case 13: question7 = vque13 ; reponse7 = vMot13;
				break;
				case 14: question7 = vque14 ; reponse7 = vMot14;
				break;
				case 15: question7 = vque15 ; reponse7 = vMot15;
				break;
				case 16: question7 = vque16 ; reponse7 = vMot16;
				break;
				case 17: question7 = vque17 ; reponse7 = vMot17;
				break;
				case 18: question7 = vque18 ; reponse7 = vMot18;
				break;
				case 19: question7 = vque19 ; reponse7 = vMot19;
				break;
				case 20: question7 = vque20 ; reponse7 = vMot20;
				break;
				case 21: question7 = vque21 ; reponse7 = vMot21;
				break;
				case 22: question7 = vque22 ; reponse7 = vMot22;
				break;
				case 23: question7 = vque23 ; reponse7 = vMot23;
				break;
				case 24: question7 = vque24 ; reponse7 = vMot24;
				break;
				case 25: question7 = vque25 ; reponse7 = vMot25;
				break;
				case 26: question7 = vque26 ; reponse7 = vMot26;
				break;
				case 27: question7 = vque27 ; reponse7 = vMot27;
				break;
				case 28: question7 = vque28 ; reponse7 = vMot28;
				break;
				case 29: question7 = vque29 ; reponse7 = vMot29;
				break;
				case 30: question7 = vque30 ; reponse7 = vMot30;
				break;
				}		
			document.getElementById("questionn7").style.display= "";
			document.getElementById("questionn7").innerHTML = question7;
			break;
			
			case 8 :
				document.getElementById("correction7").style.display= "none";
				document.getElementById("reponsee7").style.display= "none";
				document.getElementById("reponsee8").style.display= "";
				document.getElementById("reponsee8").focus()
				document.getElementById("questionn7").style.display= "none"
				while(true)
				{
					if (lequel8===0)
				{
				lettre8=Math.floor(Math.random()*30)+1; 
				lequel8++;
				}
				if(lettre8===lettre || lettre8===lettre2 || lettre8===lettre3 || lettre8===lettre4 || lettre8===lettre5 || lettre8===lettre6 || lettre8===lettre7)
				{
				lequel8=0;
				}
				else
				{
				break;
				}
				}
				switch(lettre8)
				{
				case 1: question8 = vque1 ; reponse8 = vMot1;
				break;
				case 2: question8 = vque2 ; reponse8 = vMot2;
				break;
				case 3: question8 = vque3 ; reponse8 = vMot3;
				break;
				case 4: question8 = vque4 ; reponse8 = vMot4;
				break;
				case 5: question8 = vque5 ; reponse8 = vMot5;
				break;
				case 6: question8 = vque6 ; reponse8 = vMot6;
				break;
				case 7: question8 = vque7 ; reponse8 = vMot7;
				break;
				case 8: question8 = vque8 ; reponse8 = vMot8;
				break;
				case 9: question8 = vque9 ; reponse8 = vMot9;
				break;
				case 10: question8 = vque10 ; reponse8 = vMot10;
				break;
				case 11: question8 = vque11 ; reponse8 = vMot11;
				break;
				case 12: question8 = vque12 ; reponse8 = vMot12;
				break;
				case 13: question8 = vque13 ; reponse8 = vMot13;
				break;
				case 14: question8 = vque14 ; reponse8 = vMot14;
				break;
				case 15: question8 = vque15 ; reponse8 = vMot15;
				break;
				case 16: question8 = vque16 ; reponse8 = vMot16;
				break;
				case 17: question8 = vque17 ; reponse8 = vMot17;
				break;
				case 18: question8 = vque18 ; reponse8 = vMot18;
				break;
				case 19: question8 = vque19 ; reponse8 = vMot19;
				break;
				case 20: question8 = vque20 ; reponse8 = vMot20;
				break;
				case 21: question8 = vque21 ; reponse8 = vMot21;
				break;
				case 22: question8 = vque22 ; reponse8 = vMot22;
				break;
				case 23: question8 = vque23 ; reponse8 = vMot23;
				break;
				case 24: question8 = vque24 ; reponse8 = vMot24;
				break;
				case 25: question8 = vque25 ; reponse8 = vMot25;
				break;
				case 26: question8 = vque26 ; reponse8 = vMot26;
				break;
				case 27: question8 = vque27 ; reponse8 = vMot27;
				break;
				case 28: question8 = vque28 ; reponse8 = vMot28;
				break;
				case 29: question8 = vque29 ; reponse8 = vMot29;
				break;
				case 30: question8 = vque30 ; reponse8 = vMot30;
				break;
				}		
			document.getElementById("questionn8").style.display= "";
			document.getElementById("questionn8").innerHTML = question8;
			break;
			
			
			case 9 :
				document.getElementById("correction8").style.display= "none";
				document.getElementById("reponsee8").style.display= "none";
				document.getElementById("reponsee9").style.display= "";
				document.getElementById("reponsee9").focus()
				document.getElementById("questionn8").style.display= "none"
				while(true)
				{
					if (lequel9===0)
				{
				lettre9=Math.floor(Math.random()*30)+1; 
				lequel9++;
				}
				if(lettre9===lettre || lettre9===lettre2 || lettre9===lettre3 || lettre9===lettre4 || lettre9===lettre5 || lettre9===lettre6 || lettre9===lettre7 || lettre9===lettre8)
				{
				lequel9=0;
				}
				else
				{
				break;
				}
				}
				switch(lettre9)
				{
				case 1: question9 = vque1 ; reponse9 = vMot1;
				break;
				case 2: question9 = vque2 ; reponse9 = vMot2;
				break;
				case 3: question9 = vque3 ; reponse9 = vMot3;
				break;
				case 4: question9 = vque4 ; reponse9 = vMot4;
				break;
				case 5: question9 = vque5 ; reponse9 = vMot5;
				break;
				case 6: question9 = vque6 ; reponse9 = vMot6;
				break;
				case 7: question9 = vque7 ; reponse9 = vMot7;
				break;
				case 8: question9 = vque8 ; reponse9 = vMot8;
				break;
				case 9: question9 = vque9 ; reponse9 = vMot9;
				break;
				case 10: question9 = vque10 ; reponse9 = vMot10;
				break;
				case 11: question9 = vque11 ; reponse9 = vMot11;
				break;
				case 12: question9 = vque12 ; reponse9 = vMot12;
				break;
				case 13: question9 = vque13 ; reponse9 = vMot13;
				break;
				case 14: question9 = vque14 ; reponse9 = vMot14;
				break;
				case 15: question9 = vque15 ; reponse9 = vMot15;
				break;
				case 16: question9 = vque16 ; reponse9 = vMot16;
				break;
				case 17: question9 = vque17 ; reponse9 = vMot17;
				break;
				case 18: question9 = vque18 ; reponse9 = vMot18;
				break;
				case 19: question9 = vque19 ; reponse9 = vMot19;
				break;
				case 20: question9 = vque20 ; reponse9 = vMot20;
				break;
				case 21: question9 = vque21 ; reponse9 = vMot21;
				break;
				case 22: question9 = vque22 ; reponse9 = vMot22;
				break;
				case 23: question9 = vque23 ; reponse9 = vMot23;
				break;
				case 24: question9 = vque24 ; reponse9 = vMot24;
				break;
				case 25: question9 = vque25 ; reponse9 = vMot25;
				break;
				case 26: question9 = vque26 ; reponse9 = vMot26;
				break;
				case 27: question9 = vque27 ; reponse9 = vMot27;
				break;
				case 28: question9 = vque28 ; reponse9 = vMot28;
				break;
				case 29: question9 = vque29 ; reponse9 = vMot29;
				break;
				case 30: question9 = vque30 ; reponse9 = vMot30;
				break;
				}		
			document.getElementById("questionn9").style.display= "";
			document.getElementById("questionn9").innerHTML = question9;
			break;
			
			
			case 10 :
				document.getElementById("correction9").style.display= "none";
				document.getElementById("reponsee9").style.display= "none";
				document.getElementById("reponsee10").style.display= "";
				document.getElementById("reponsee10").focus()
				document.getElementById("questionn9").style.display= "none"
				while(true)
				{
				if (lequel10===0)
				{
				lettre10=Math.floor(Math.random()*30)+1; 
				lequel10++;
				}
				if(lettre10===lettre || lettre10===lettre2 || lettre10===lettre3 || lettre10===lettre4 || lettre10===lettre5 || lettre10===lettre6 || lettre10===lettre7 || lettre10===lettre8 || lettre10===lettre9)
				{
				lequel10=0;
				}
				else
				{
				break;
				}
				}
				switch(lettre10)
				{
				case 1: question10 = vque1 ; reponse10 = vMot1;
				break;
				case 2: question10 = vque2 ; reponse10 = vMot2;
				break;
				case 3: question10 = vque3 ; reponse10 = vMot3;
				break;
				case 4: question10 = vque4 ; reponse10 = vMot4;
				break;
				case 5: question10 = vque5 ; reponse10 = vMot5;
				break;
				case 6: question10 = vque6 ; reponse10 = vMot6;
				break;
				case 7: question10 = vque7 ; reponse10 = vMot7;
				break;
				case 8: question10 = vque8 ; reponse10 = vMot8;
				break;
				case 9: question10 = vque9 ; reponse10 = vMot9;
				break;
				case 10: question10 = vque10 ; reponse10 = vMot10;
				break;
				case 11: question10 = vque11 ; reponse10 = vMot11;
				break;
				case 12: question10 = vque12 ; reponse10 = vMot12;
				break;
				case 13: question10 = vque13 ; reponse10 = vMot13;
				break;
				case 14: question10 = vque14 ; reponse10 = vMot14;
				break;
				case 15: question10 = vque15 ; reponse10 = vMot15;
				break;
				case 16: question10 = vque16 ; reponse10 = vMot16;
				break;
				case 17: question10 = vque17 ; reponse10 = vMot17;
				break;
				case 18: question10 = vque18 ; reponse10 = vMot18;
				break;
				case 19: question10 = vque19 ; reponse10 = vMot19;
				break;
				case 20: question10 = vque20 ; reponse10 = vMot20;
				break;
				case 21: question10 = vque21 ; reponse10 = vMot21;
				break;
				case 22: question10 = vque22 ; reponse10 = vMot22;
				break;
				case 23: question10 = vque23 ; reponse10 = vMot23;
				break;
				case 24: question10 = vque24 ; reponse10 = vMot24;
				break;
				case 25: question10 = vque25 ; reponse10 = vMot25;
				break;
				case 26: question10 = vque26 ; reponse10 = vMot26;
				break;
				case 27: question10 = vque27 ; reponse10 = vMot27;
				break;
				case 28: question10 = vque28 ; reponse10 = vMot28;
				break;
				case 29: question10 = vque29 ; reponse10 = vMot29;
				break;
				case 30: question10 = vque30 ; reponse10 = vMot30;
				break;
				}		
			document.getElementById("questionn10").style.display= "";
			document.getElementById("questionn10").innerHTML = question10;
			break;
			
		
		}
}


	
function correction()
	{
	switch (tour)
	{
	case 1 :
	document.getElementById("correction").style.display= "none";
	document.getElementById("jecoute").style.display= "";
	reponsee1=document.getElementById("reponsee1").value;
		if(reponse1==reponsee1)
		{
		player = document.getElementById("bonnereponse");
		player.play();
		note++;
		document.getElementById("correction1").style.display= "";
		document.getElementById("correction1").innerHTML = "Bonne réponse";
		
				}
		else
		{
		player = document.getElementById("mauvaisereponse");
		player.play();
		document.getElementById("correction1").style.display= "";
		document.getElementById("correction1").innerHTML = "Erreur, il fallait écrire : "+reponse1;
		}
		break;
		
		case 2 :
	document.getElementById("correction").style.display= "none";
	document.getElementById("jecoute").style.display= "";
	reponsee2=document.getElementById("reponsee2").value;
		if(reponse2==reponsee2)
		{
		player = document.getElementById("bonnereponse");
		player.play();
		note++;
		document.getElementById("correction2").style.display= "";
		document.getElementById("correction2").innerHTML = "Bonne réponse";
		
				}
		else
		{
		player = document.getElementById("mauvaisereponse");
		player.play();
		document.getElementById("correction2").style.display= "";
		document.getElementById("correction2").innerHTML = "Erreur, il fallait écrire : "+reponse2;
		}
		break;
		
		case 3 :
	document.getElementById("correction").style.display= "none";
	document.getElementById("jecoute").style.display= "";
	reponsee3=document.getElementById("reponsee3").value;
		if(reponse3==reponsee3)
		{
		player = document.getElementById("bonnereponse");
		player.play();
		note++;
		document.getElementById("correction3").style.display= "";
		document.getElementById("correction3").innerHTML = "Bonne réponse";
		
				}
		else
		{
		player = document.getElementById("mauvaisereponse");
		player.play();
		document.getElementById("correction3").style.display= "";
		document.getElementById("correction3").innerHTML = "Erreur, il fallait écrire : "+reponse3;
		}
		break;
		
		case 4 :
	document.getElementById("correction").style.display= "none";
	document.getElementById("jecoute").style.display= "";
	reponsee4=document.getElementById("reponsee4").value;
		if(reponse4==reponsee4)
		{
		player = document.getElementById("bonnereponse");
		player.play();
		note++;
		document.getElementById("correction4").style.display= "";
		document.getElementById("correction4").innerHTML = "Bonne réponse";
		
				}
		else
		{
		player = document.getElementById("mauvaisereponse");
		player.play();
		document.getElementById("correction4").style.display= "";
		document.getElementById("correction4").innerHTML = "Erreur, il fallait écrire : "+reponse4;
		}
		break;
		
		case 5 :
	document.getElementById("correction").style.display= "none";
	document.getElementById("jecoute").style.display= "";
	reponsee5=document.getElementById("reponsee5").value;
		if(reponse5==reponsee5)
		{
		player = document.getElementById("bonnereponse");
		player.play();
		note++;
		document.getElementById("correction5").style.display= "";
		document.getElementById("correction5").innerHTML = "Bonne réponse";
		
				}
		else
		{
		player = document.getElementById("mauvaisereponse");
		player.play();
		document.getElementById("correction5").style.display= "";
		document.getElementById("correction5").innerHTML = "Erreur, il fallait écrire : "+reponse5;
		}
		break;
		
		case 6 :
	document.getElementById("correction").style.display= "none";
	document.getElementById("jecoute").style.display= "";
	reponsee6=document.getElementById("reponsee6").value;
		if(reponse6==reponsee6)
		{
		player = document.getElementById("bonnereponse");
		player.play();
		note++;
		document.getElementById("correction6").style.display= "";
		document.getElementById("correction6").innerHTML = "Bonne réponse";
		
				}
		else
		{
		player = document.getElementById("mauvaisereponse");
		player.play();
		document.getElementById("correction6").style.display= "";
		document.getElementById("correction6").innerHTML = "Erreur, il fallait écrire : "+reponse6;
		}
		break;
		
		case 7 :
	document.getElementById("correction").style.display= "none";
	document.getElementById("jecoute").style.display= "";
	reponsee7=document.getElementById("reponsee7").value;
		if(reponse7==reponsee7)
		{
		player = document.getElementById("bonnereponse");
		player.play();
		note++;
		document.getElementById("correction7").style.display= "";
		document.getElementById("correction7").innerHTML = "Bonne réponse";
		
				}
		else
		{
		player = document.getElementById("mauvaisereponse");
		player.play();
		document.getElementById("correction7").style.display= "";
		document.getElementById("correction7").innerHTML = "Erreur, il fallait écrire : "+reponse7;
		}
		break;
		
		case 8 :
	document.getElementById("correction").style.display= "none";
	document.getElementById("jecoute").style.display= "";
	reponsee8=document.getElementById("reponsee8").value;
		if(reponse8==reponsee8)
		{
		player = document.getElementById("bonnereponse");
		player.play();
		note++;
		document.getElementById("correction8").style.display= "";
		document.getElementById("correction8").innerHTML = "Bonne réponse";
		
				}
		else
		{
		player = document.getElementById("mauvaisereponse");
		player.play();
		document.getElementById("correction8").style.display= "";
		document.getElementById("correction8").innerHTML = "Erreur, il fallait écrire : "+reponse8;
		}
		break;
		
		case 9 :
	document.getElementById("correction").style.display= "none";
	document.getElementById("jecoute").style.display= "";
	reponsee9=document.getElementById("reponsee9").value;
		if(reponse9==reponsee9)
		{
		player = document.getElementById("bonnereponse");
		player.play();
		note++;
		document.getElementById("correction9").style.display= "";
		document.getElementById("correction9").innerHTML = "Bonne réponse";
		
				}
		else
		{
		player = document.getElementById("mauvaisereponse");
		player.play();
		document.getElementById("correction9").style.display= "";
		document.getElementById("correction9").innerHTML = "Erreur, il fallait écrire : "+reponse9;
		}
		break;
		
		case 10 :
	document.getElementById("correction").style.display= "none";
	document.getElementById("jecoute").style.display= "";
	reponsee10=document.getElementById("reponsee10").value;
		if(reponse10==reponsee10)
		{
		player = document.getElementById("bonnereponse");
		player.play();
		note++;
		document.getElementById("correction10").style.display= "";
		document.getElementById("correction10").innerHTML = "Bonne réponse";
		
				}
		else
		{
		player = document.getElementById("mauvaisereponse");
		player.play();
		document.getElementById("correction10").style.display= "";
		document.getElementById("correction10").innerHTML = "Erreur, il fallait écrire : "+reponse10;
		}
		resultat();
		break;
		
		
	}
tour++;


	}
	

function resultat()
{
			document.getElementById("note").style.display = "";	
			document.getElementById("noteimage").style.display = "";			

	switch (note)
			{
				case 0 : document.getElementById("note").innerHTML = "Note : 0 sur 10<br>Trop difficile pour toi";
				document.getElementById("dur").style.display = "";
				break;
				
				case 1: document.getElementById("note").innerHTML = "Note : 1 sur 10<br>Trop difficile pour toi";
				document.getElementById("dur").style.display = "";
				break;
				
				case 2 : document.getElementById("note").innerHTML = "Note : 2 sur 10<br>Trop difficile pour toi";
				document.getElementById("effort").style.display = "";
				break;
				
				case 3 : document.getElementById("note").innerHTML = "Note : 3 sur 10<br>Trop difficile pour toi";
				document.getElementById("effort").style.display = "";
				break;
				
				case 4 : document.getElementById("note").innerHTML = "Note : 4 sur 10<br>Trop difficile pour toi";
				document.getElementById("bien").style.display = "";
				break;
				
				case 5 : document.getElementById("note").innerHTML = "Note : 5 sur 10<br>Continue tes efforts";
				document.getElementById("champion").style.display = "";
				break;
				
				case 6 : document.getElementById("note").innerHTML = "Note : 6 sur 10<br>Continue tes efforts";
				document.getElementById("champion").style.display = "";
				break;
				
				case 7 : document.getElementById("note").innerHTML = "Note : 7 sur 10<br>Continue tes efforts";
				document.getElementById("champion").style.display = "";
				break;
				
				case 8 : document.getElementById("note").innerHTML = "Note : 8 sur 10<br>Bravo !";
				document.getElementById("champion").style.display = "";
				break;
				
				case 9 : document.getElementById("note").innerHTML = "Note : 9 sur 10<br>Bravo !";
				document.getElementById("champion").style.display = "";
				break;
				
				case 10 : document.getElementById("note").innerHTML = "Note : 10 sur 10<br>Bravo !";
				document.getElementById("champion").style.display = "";
				break;
				
			}
}
	

