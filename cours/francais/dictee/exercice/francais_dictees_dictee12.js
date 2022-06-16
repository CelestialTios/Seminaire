var vMot1="enfin";
var vMot2="encore";
var vMot3="ensuite";
var vMot4="pendant";
var vMot5="quand";
var vMot6="comment";
var vMot7="longtemps";
var vMot8="une chambre";
var vMot9="demander";
var vMot10="grand";
var lequel1=0; select=0; valid=0;lequel2=0;valid2=0;lequel3=0;valid3=0;lequel4=0;valid4=0;lequel5=0;valid5=0;lequel6=0;valid6=0;lequel7=0;valid7=0;lequel8=0;valid8=0;lequel9=0;valid9=0;lequel10=0;valid10=0;note=0;efface2=0;efface3=0;tour=1;
var lequelunite=0;lequelunite2=0;lequelunite3=0;lequelunite4=0;
var lequelunite5=0;lequelunite6=0;lequelunite7=0;lequelunite8=0;lequelunite9=0;lequelunite10=0;note=0;

function fMot1()
{
player = document.getElementById("1");
player.play();
}
function fMot2()
{
player = document.getElementById("2");
player.play();
}
function fMot3()
{
player = document.getElementById("3");
player.play();
}
function fMot4()
{
player = document.getElementById("4");
player.play();
}
function fMot5()
{
player = document.getElementById("5");
player.play();
}
function fMot6()
{
player = document.getElementById("6");
player.play();
}
function fMot7()
{
player = document.getElementById("7");
player.play();
}
function fMot8()
{
player = document.getElementById("8");
player.play();
}
function fMot9()
{
player = document.getElementById("9");
player.play();
}
function fMot10()
{
player = document.getElementById("10");
player.play();
}

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
				lettre=Math.floor(Math.random()*10)+1; 
				lequel1++;
				}
				switch(lettre)
				{
				case 1: fMot1(); reponse1 = vMot1;
				break;
				case 2: fMot2(); reponse1 = vMot2;
				break;
				case 3: fMot3(); reponse1 = vMot3;
				break;
				case 4: fMot4(); reponse1 = vMot4;
				break;
				case 5: fMot5(); reponse1 = vMot5;
				break;
				case 6: fMot6(); reponse1 = vMot6;
				break;
				case 7: fMot7(); reponse1 = vMot7;
				break;
				case 8: fMot8(); reponse1 = vMot8;
				break;
				case 9: fMot9(); reponse1 = vMot9;
				break;
				case 10: fMot10(); reponse1 = vMot10;
				break;
				}
				break;
			
			case 2 :
				document.getElementById("correction1").style.display= "none";
				document.getElementById("reponsee1").style.display= "none";
				document.getElementById("reponsee2").style.display= "";
                document.getElementById("correction").style.display= "";
                document.getElementById("reponsee2").focus()
                while(true)
				{
				if (lequel2===0)
				{
				lettre2=Math.floor(Math.random()*10)+1; 
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
				case 1: fMot1(); reponse2 = vMot1;
				break;
				case 2: fMot2(); reponse2 = vMot2;
				break;
				case 3: fMot3(); reponse2 = vMot3;
				break;
				case 4: fMot4(); reponse2 = vMot4;
				break;
				case 5: fMot5(); reponse2 = vMot5;
				break;
				case 6: fMot6(); reponse2 = vMot6;
				break;
				case 7: fMot7(); reponse2 = vMot7;
				break;
				case 8: fMot8(); reponse2 = vMot8;
				break;
				case 9: fMot9(); reponse2 = vMot9;
				break;
				case 10: fMot10(); reponse2 = vMot10;
				break;
			}
			break;
			
			case 3 :
				document.getElementById("correction2").style.display= "none";
				document.getElementById("reponsee2").style.display= "none";
				document.getElementById("reponsee3").style.display= "";
				document.getElementById("reponsee3").focus()
				while(true)
				{
				if (lequel3===0)
				{
				lettre3=Math.floor(Math.random()*10)+1; 
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
				case 1: fMot1(); reponse3 = vMot1;
				break;
				case 2: fMot2(); reponse3 = vMot2;
				break;
				case 3: fMot3(); reponse3 = vMot3;
				break;
				case 4: fMot4(); reponse3 = vMot4;
				break;
				case 5: fMot5(); reponse3 = vMot5;
				break;
				case 6: fMot6(); reponse3 = vMot6;
				break;
				case 7: fMot7(); reponse3 = vMot7;
				break;
				case 8: fMot8(); reponse3 = vMot8;
				break;
				case 9: fMot9(); reponse3 = vMot9;
				break;
				case 10: fMot10(); reponse3 = vMot10;
				break;
			}
			break;
			
			case 4 :
				document.getElementById("correction3").style.display= "none";
				document.getElementById("reponsee3").style.display= "none";
				document.getElementById("reponsee4").style.display= "";
				document.getElementById("reponsee4").focus()
				while(true)
				{
					if (lequel4===0)
				{
				lettre4=Math.floor(Math.random()*10)+1; 
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
				case 1: fMot1(); reponse4 = vMot1;
				break;
				case 2: fMot2(); reponse4 = vMot2;
				break;
				case 3: fMot3(); reponse4 = vMot3;
				break;
				case 4: fMot4(); reponse4 = vMot4;
				break;
				case 5: fMot5(); reponse4 = vMot5;
				break;
				case 6: fMot6(); reponse4 = vMot6;
				break;
				case 7: fMot7(); reponse4 = vMot7;
				break;
				case 8: fMot8(); reponse4 = vMot8;
				break;
				case 9: fMot9(); reponse4 = vMot9;
				break;
				case 10: fMot10(); reponse4 = vMot10;
				break;
			}
			break;
			
			case 5 :
				document.getElementById("correction4").style.display= "none";
				document.getElementById("reponsee4").style.display= "none";
				document.getElementById("reponsee5").style.display= "";
				document.getElementById("reponsee5").focus()
				while(true)
				{
					if (lequel5===0)
				{
				lettre5=Math.floor(Math.random()*10)+1; 
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
				case 1: fMot1(); reponse5 = vMot1;
				break;
				case 2: fMot2(); reponse5 = vMot2;
				break;
				case 3: fMot3(); reponse5 = vMot3;
				break;
				case 4: fMot4(); reponse5 = vMot4;
				break;
				case 5: fMot5(); reponse5 = vMot5;
				break;
				case 6: fMot6(); reponse5 = vMot6;
				break;
				case 7: fMot7(); reponse5 = vMot7;
				break;
				case 8: fMot8(); reponse5 = vMot8;
				break;
				case 9: fMot9(); reponse5 = vMot9;
				break;
				case 10: fMot10(); reponse5 = vMot10;
				break;
			}
			break;
			
			case 6 :
				document.getElementById("correction5").style.display= "none";
				document.getElementById("reponsee5").style.display= "none";
				document.getElementById("reponsee6").style.display= "";
				document.getElementById("reponsee6").focus()
				while(true)
				{
					if (lequel6===0)
				{
				lettre6=Math.floor(Math.random()*10)+1; 
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
				case 1: fMot1(); reponse6 = vMot1;
				break;
				case 2: fMot2(); reponse6 = vMot2;
				break;
				case 3: fMot3(); reponse6 = vMot3;
				break;
				case 4: fMot4(); reponse6 = vMot4;
				break;
				case 5: fMot5(); reponse6 = vMot5;
				break;
				case 6: fMot6(); reponse6 = vMot6;
				break;
				case 7: fMot7(); reponse6 = vMot7;
				break;
				case 8: fMot8(); reponse6 = vMot8;
				break;
				case 9: fMot9(); reponse6 = vMot9;
				break;
				case 10: fMot10(); reponse6 = vMot10;
				break;
			}
			break;
			
			case 7 :
				document.getElementById("correction6").style.display= "none";
				document.getElementById("reponsee6").style.display= "none";
				document.getElementById("reponsee7").style.display= "";
				document.getElementById("reponsee7").focus()
				while(true)
				{
					if (lequel7===0)
				{
				lettre7=Math.floor(Math.random()*10)+1; 
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
				case 1: fMot1(); reponse7 = vMot1;
				break;
				case 2: fMot2(); reponse7 = vMot2;
				break;
				case 3: fMot3(); reponse7 = vMot3;
				break;
				case 4: fMot4(); reponse7 = vMot4;
				break;
				case 5: fMot5(); reponse7 = vMot5;
				break;
				case 6: fMot6(); reponse7 = vMot6;
				break;
				case 7: fMot7(); reponse7 = vMot7;
				break;
				case 8: fMot8(); reponse7 = vMot8;
				break;
				case 9: fMot9(); reponse7 = vMot9;
				break;
				case 10: fMot10(); reponse7 = vMot10;
				break;
			}
			break;
			
			case 8 :
				document.getElementById("correction7").style.display= "none";
				document.getElementById("reponsee7").style.display= "none";
				document.getElementById("reponsee8").style.display= "";
				document.getElementById("reponsee8").focus()
				while(true)
				{
					if (lequel8===0)
				{
				lettre8=Math.floor(Math.random()*10)+1; 
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
				case 1: fMot1(); reponse8 = vMot1;
				break;
				case 2: fMot2(); reponse8 = vMot2;
				break;
				case 3: fMot3(); reponse8 = vMot3;
				break;
				case 4: fMot4(); reponse8 = vMot4;
				break;
				case 5: fMot5(); reponse8 = vMot5;
				break;
				case 6: fMot6(); reponse8 = vMot6;
				break;
				case 7: fMot7(); reponse8 = vMot7;
				break;
				case 8: fMot8(); reponse8 = vMot8;
				break;
				case 9: fMot9(); reponse8 = vMot9;
				break;
				case 10: fMot10(); reponse8 = vMot10;
				break;
			}
			break;
			
			
			case 9 :
				document.getElementById("correction8").style.display= "none";
				document.getElementById("reponsee8").style.display= "none";
				document.getElementById("reponsee9").style.display= "";
				document.getElementById("reponsee9").focus()
				while(true)
				{
					if (lequel9===0)
				{
				lettre9=Math.floor(Math.random()*10)+1; 
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
				case 1: fMot1(); reponse9 = vMot1;
				break;
				case 2: fMot2(); reponse9 = vMot2;
				break;
				case 3: fMot3(); reponse9 = vMot3;
				break;
				case 4: fMot4(); reponse9 = vMot4;
				break;
				case 5: fMot5(); reponse9 = vMot5;
				break;
				case 6: fMot6(); reponse9 = vMot6;
				break;
				case 7: fMot7(); reponse9 = vMot7;
				break;
				case 8: fMot8(); reponse9 = vMot8;
				break;
				case 9: fMot9(); reponse9 = vMot9;
				break;
				case 10: fMot10(); reponse9 = vMot10;
				break;
			}
			break;
			
			
			case 10 :
				document.getElementById("correction9").style.display= "none";
				document.getElementById("reponsee9").style.display= "none";
				document.getElementById("reponsee10").style.display= "";
				document.getElementById("reponsee10").focus()
				while(true)
				{
				if (lequel10===0)
				{
				lettre10=Math.floor(Math.random()*10)+1; 
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
					case 1: fMot1(); reponse10 = vMot1;
					break;
					case 2: fMot2(); reponse10 = vMot2;
					break;
					case 3: fMot3(); reponse10 = vMot3;
					break;
					case 4: fMot4(); reponse10 = vMot4;
					break;
					case 5: fMot5(); reponse10 = vMot5;
					break;
					case 6: fMot6(); reponse10 = vMot6;
					break;
					case 7: fMot7(); reponse10 = vMot7;
					break;
					case 8: fMot8(); reponse10 = vMot8;
					break;
					case 9: fMot9(); reponse10 = vMot9;
					break;
					case 10: fMot10(); reponse10 = vMot10;
					break;
				}
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
	

