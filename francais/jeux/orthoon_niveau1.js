var tour=1;selection1=0;note=0;aideok=0;aidevok=0;tour1=0;

var vMot1="… est à l’école.";
var vMot2="… va au cinéma.";
var vMot3="Aujourd’hui, … va faire de la pâtisserie.";
var vMot4="A l’école, … apprends les multiplications.";
var vMot5=" … part en voyage.";
var vMot6="Demain, … aura oublié. ";
var vMot7="… fête la nouvelle année.";
var vMot8=" … découpe les citrouilles pour les décorer.";
var vMot9="Dans la semaine, … passera te voir.";
var vMot10="… est parti ce matin.";
var vMot11="Demain, … distribuera des boissons fraîches.";
var vMot12="Dans la maison,  … mes des chaussons.";
var vMot13="… va au musée.";
var vMot14="… a de la chance.";
var vMot15="Demain, … fera le ménage.";
var vMot16="Ils … mangé trop de bonbons.";
var vMot17="Papa et maman … quatre enfants.";
var vMot18="Ils … les yeux qui brillent.";
var vMot19="Elles … les cheveux tressés.";
var vMot20="Elles … oublié leur parapluie.";
var vMot21="Paul et Emma … leurs grands-parent à La Rochelle.";
var vMot22="Natacha et Noémie … loué une maison.";
var vMot23="Ils … attrapé de gros poissons.";
var vMot24="Pierre et son père … pêché ensemble.";
var vMot25="Ils … acheté une maison à la campagne.";
var vMot26="Nicolas et son amis … grimpé en haut d’une montagne.";
var vMot27="Ils … fait du ski dans les Alpes.";
var vMot28="Ils … annoncé leur mariage.";
var vMot29="Elles … de beaux cheveux.";
var vMot30="Samuel et Maïmouna … de l’imagination.";

function go()
{
		document.getElementById("go1").style.display = "none";
		document.getElementById("tour").style.display = "";
		document.getElementById("tour").innerHTML = "Exercice n°"+tour+" sur 5";
		switch (tour)
		{
		case 1 :
			nbr1=Math.floor(Math.random()*30)+1;
			if(nbr1==1)
			{
				verbe1 = vMot1;
			}
			if(nbr1==2)
			{
				verbe1 = vMot2;
			}
			if(nbr1==3)
			{
				verbe1 = vMot3;
			}
			if(nbr1==4)
			{
				verbe1 = vMot4;
			}
			if(nbr1==5)
			{
				verbe1 = vMot5;
			}
			if(nbr1==6)
			{
				verbe1 = vMot6;
			}
			if(nbr1==7)
			{
				verbe1 = vMot7;
			}
			if(nbr1==8)
			{
				verbe1 = vMot8;
			}
			if(nbr1==9)
			{
				verbe1 = vMot9;
			}
			if(nbr1==10)
			{
				verbe1 = vMot10;
			}
			if(nbr1==11)
			{
				verbe1 = vMot11;
			}
			if(nbr1==12)
			{
				verbe1 = vMot12;
			}
			if(nbr1==13)
			{
				verbe1 = vMot13;
			}
			if(nbr1==14)
			{
				verbe1 = vMot14;
			}
			if(nbr1==15)
			{
				verbe1 = vMot15;
			}
			if(nbr1==16)
			{
				verbe1 = vMot16;
			}
			if(nbr1==17)
			{
				verbe1 = vMot17;
			}
			if(nbr1==18)
			{
				verbe1 = vMot18;
			}
			if(nbr1==19)
			{
				verbe1 = vMot19;
			}
			if(nbr1==20)
			{
				verbe1 = vMot20;
			}
			if(nbr1==21)
			{
				verbe1 = vMot21;
			}
			if(nbr1==22)
			{
				verbe1 = vMot22;
			}
			if(nbr1==23)
			{
				verbe1 = vMot23;
			}
			if(nbr1==24)
			{
				verbe1 = vMot24;
			}
			if(nbr1==25)
			{
				verbe1 = vMot25;
			}
			if(nbr1==26)
			{
				verbe1 = vMot26;
			}
			if(nbr1==27)
			{
				verbe1 = vMot27;
			}
			if(nbr1==28)
			{
				verbe1 = vMot28;
			}
			if(nbr1==29)
			{
				verbe1 = vMot29;
			}
			if(nbr1==30)
			{
				verbe1 = vMot30;
			}
			
			document.getElementById("exo1").style.display = "";
			document.getElementById("go1").style.display = "none";
			document.getElementById("go1blanc").style.display = "none";
			document.getElementById("correction1").style.display = "none";
			document.getElementById("verbe1").innerHTML = verbe1;				
		break;
		
		case 2 :
			nbr2=Math.floor(Math.random()*30)+1;
			if(nbr1==nbr2)
			{
			nbr2++;
			}
			if(nbr2==1)
			{
				verbe1 = vMot1;
			}
			if(nbr2==2)
			{
				verbe1 = vMot2;
			}
			if(nbr2==3)
			{
				verbe1 = vMot3;
			}
			if(nbr2==4)
			{
				verbe1 = vMot4;
			}
			if(nbr2==5)
			{
				verbe1 = vMot5;
			}
			if(nbr2==6)
			{
				verbe1 = vMot6;
			}
			if(nbr2==7)
			{
				verbe1 = vMot7;
			}
			if(nbr2==8)
			{
				verbe1 = vMot8;
			}
			if(nbr2==9)
			{
				verbe1 = vMot9;
			}
			if(nbr2==10)
			{
				verbe1 = vMot10;
			}
			if(nbr2==11)
			{
				verbe1 = vMot11;
			}
			if(nbr2==12)
			{
				verbe1 = vMot12;
			}
			if(nbr2==13)
			{
				verbe1 = vMot13;
			}
			if(nbr2==14)
			{
				verbe1 = vMot14;
			}
			if(nbr2==15)
			{
				verbe1 = vMot15;
			}
			if(nbr2==16)
			{
				verbe1 = vMot16;
			}
			if(nbr2==17)
			{
				verbe1 = vMot17;
			}
			if(nbr2==18)
			{
				verbe1 = vMot18;
			}
			if(nbr2==19)
			{
				verbe1 = vMot19;
			}
			if(nbr2==20)
			{
				verbe1 = vMot20;
			}
			if(nbr2==21)
			{
				verbe1 = vMot21;
			}
			if(nbr2==22)
			{
				verbe1 = vMot22;
			}
			if(nbr2==23)
			{
				verbe1 = vMot23;
			}
			if(nbr2==24)
			{
				verbe1 = vMot24;
			}
			if(nbr2==25)
			{
				verbe1 = vMot25;
			}
			if(nbr2==26)
			{
				verbe1 = vMot26;
			}
			if(nbr2==27)
			{
				verbe1 = vMot27;
			}
			if(nbr2==28)
			{
				verbe1 = vMot28;
			}
			if(nbr2==29)
			{
				verbe1 = vMot29;
			}
			if(nbr2==30)
			{
				verbe1 = vMot30;
			}
		document.getElementById("go1").style.display = "none";
		document.getElementById("go1blanc").style.display = "none";
		document.getElementById("correction1").style.display = "none";
		document.getElementById("verbe1").innerHTML = verbe1;
		break;
		
		case 3 :
			nbr3=Math.floor(Math.random()*30)+1;
			if(nbr3==nbr1)
			{
			nbr3++;
			}
			if(nbr3==nbr2)
			{
			nbr3++;
			}
			if(nbr3==1)
			{
				verbe1 = vMot1;
			}
			if(nbr3==2)
			{
				verbe1 = vMot2;
			}
			if(nbr3==3)
			{
				verbe1 = vMot3;
			}
			if(nbr3==4)
			{
				verbe1 = vMot4;
			}
			if(nbr3==5)
			{
				verbe1 = vMot5;
			}
			if(nbr3==6)
			{
				verbe1 = vMot6;
			}
			if(nbr3==7)
			{
				verbe1 = vMot7;
			}
			if(nbr3==8)
			{
				verbe1 = vMot8;
			}
			if(nbr3==9)
			{
				verbe1 = vMot9;
			}
			if(nbr3==10)
			{
				verbe1 = vMot10;
			}
			if(nbr3==11)
			{
				verbe1 = vMot11;
			}
			if(nbr3==12)
			{
				verbe1 = vMot12;
			}
			if(nbr3==13)
			{
				verbe1 = vMot13;
			}
			if(nbr3==14)
			{
				verbe1 = vMot14;
			}
			if(nbr3==15)
			{
				verbe1 = vMot15;
			}
			if(nbr3==16)
			{
				verbe1 = vMot16;
			}
			if(nbr3==17)
			{
				verbe1 = vMot17;
			}
			if(nbr3==18)
			{
				verbe1 = vMot18;
			}
			if(nbr3==19)
			{
				verbe1 = vMot19;
			}
			if(nbr3==20)
			{
				verbe1 = vMot20;
			}
			if(nbr3==21)
			{
				verbe1 = vMot21;
			}
			if(nbr3==22)
			{
				verbe1 = vMot22;
			}
			if(nbr3==23)
			{
				verbe1 = vMot23;
			}
			if(nbr3==24)
			{
				verbe1 = vMot24;
			}
			if(nbr3==25)
			{
				verbe1 = vMot25;
			}
			if(nbr3==26)
			{
				verbe1 = vMot26;
			}
			if(nbr3==27)
			{
				verbe1 = vMot27;
			}
			if(nbr3==28)
			{
				verbe1 = vMot28;
			}
			if(nbr3==29)
			{
				verbe1 = vMot29;
			}
			if(nbr3==30)
			{
				verbe1 = vMot30;
			}
		document.getElementById("go1").style.display = "none";
		document.getElementById("go1blanc").style.display = "none";
		document.getElementById("correction1").style.display = "none";
		document.getElementById("verbe1").innerHTML = verbe1;
		break;
		
		case 4 :
			nbr4=Math.floor(Math.random()*30)+1;
			if(nbr4==nbr1)
			{
			nbr4++;
			}
			if(nbr4==nbr2)
			{
			nbr4++;
			}
			if(nbr4==nbr3)
			{
			nbr4++;
			}
			if(nbr4==1)
			{
				verbe1 = vMot1;
			}
			if(nbr4==2)
			{
				verbe1 = vMot2;
			}
			if(nbr4==3)
			{
				verbe1 = vMot3;
			}
			if(nbr4==4)
			{
				verbe1 = vMot4;
			}
			if(nbr4==5)
			{
				verbe1 = vMot5;
			}
			if(nbr4==6)
			{
				verbe1 = vMot6;
			}
			if(nbr4==7)
			{
				verbe1 = vMot7;
			}
			if(nbr4==8)
			{
				verbe1 = vMot8;
			}
			if(nbr4==9)
			{
				verbe1 = vMot9;
			}
			if(nbr4==10)
			{
				verbe1 = vMot10;
			}
			if(nbr4==11)
			{
				verbe1 = vMot11;
			}
			if(nbr4==12)
			{
				verbe1 = vMot12;
			}
			if(nbr4==13)
			{
				verbe1 = vMot13;
			}
			if(nbr4==14)
			{
				verbe1 = vMot14;
			}
			if(nbr4==15)
			{
				verbe1 = vMot15;
			}
			if(nbr4==16)
			{
				verbe1 = vMot16;
			}
			if(nbr4==17)
			{
				verbe1 = vMot17;
			}
			if(nbr4==18)
			{
				verbe1 = vMot18;
			}
			if(nbr4==19)
			{
				verbe1 = vMot19;
			}
			if(nbr4==20)
			{
				verbe1 = vMot20;
			}
			if(nbr4==21)
			{
				verbe1 = vMot21;
			}
			if(nbr4==22)
			{
				verbe1 = vMot22;
			}
			if(nbr4==23)
			{
				verbe1 = vMot23;
			}
			if(nbr4==24)
			{
				verbe1 = vMot24;
			}
			if(nbr4==25)
			{
				verbe1 = vMot25;
			}
			if(nbr4==26)
			{
				verbe1 = vMot26;
			}
			if(nbr4==27)
			{
				verbe1 = vMot27;
			}
			if(nbr4==28)
			{
				verbe1 = vMot28;
			}
			if(nbr4==29)
			{
				verbe1 = vMot29;
			}
			if(nbr4==30)
			{
				verbe1 = vMot30;
			}
		document.getElementById("go1").style.display = "none";
		document.getElementById("go1blanc").style.display = "none";
		document.getElementById("correction1").style.display = "none";
		document.getElementById("verbe1").innerHTML = verbe1;
		break;
		
		case 5 :
			nbr5=Math.floor(Math.random()*30)+1;
			if(nbr5==nbr1)
			{
			nbr5++;
			}
			if(nbr5==nbr2)
			{
			nbr5++;
			}
			if(nbr5==nbr3)
			{
			nbr5++;
			}
			if(nbr5==nbr4)
			{
			nbr5++;
			}
			if(nbr5==1)
			{
				verbe1 = vMot1;
			}
			if(nbr5==2)
			{
				verbe1 = vMot2;
			}
			if(nbr5==3)
			{
				verbe1 = vMot3;
			}
			if(nbr5==4)
			{
				verbe1 = vMot4;
			}
			if(nbr5==5)
			{
				verbe1 = vMot5;
			}
			if(nbr5==6)
			{
				verbe1 = vMot6;
			}
			if(nbr5==7)
			{
				verbe1 = vMot7;
			}
			if(nbr5==8)
			{
				verbe1 = vMot8;
			}
			if(nbr5==9)
			{
				verbe1 = vMot9;
			}
			if(nbr5==10)
			{
				verbe1 = vMot10;
			}
			if(nbr5==11)
			{
				verbe1 = vMot11;
			}
			if(nbr5==12)
			{
				verbe1 = vMot12;
			}
			if(nbr5==13)
			{
				verbe1 = vMot13;
			}
			if(nbr5==14)
			{
				verbe1 = vMot14;
			}
			if(nbr5==15)
			{
				verbe1 = vMot15;
			}
			if(nbr5==16)
			{
				verbe1 = vMot16;
			}
			if(nbr5==17)
			{
				verbe1 = vMot17;
			}
			if(nbr5==18)
			{
				verbe1 = vMot18;
			}
			if(nbr5==19)
			{
				verbe1 = vMot19;
			}
			if(nbr5==20)
			{
				verbe1 = vMot20;
			}
			if(nbr5==21)
			{
				verbe1 = vMot21;
			}
			if(nbr5==22)
			{
				verbe1 = vMot22;
			}
			if(nbr5==23)
			{
				verbe1 = vMot23;
			}
			if(nbr5==24)
			{
				verbe1 = vMot24;
			}
			if(nbr5==25)
			{
				verbe1 = vMot25;
			}
			if(nbr5==26)
			{
				verbe1 = vMot26;
			}
			if(nbr5==27)
			{
				verbe1 = vMot27;
			}
			if(nbr5==28)
			{
				verbe1 = vMot28;
			}
			if(nbr5==29)
			{
				verbe1 = vMot29;
			}
			if(nbr5==30)
			{
				verbe1 = vMot30;
			}
		document.getElementById("go1").style.display = "none";
		document.getElementById("go1blanc").style.display = "none";
		document.getElementById("correction1").style.display = "none";
		document.getElementById("verbe1").innerHTML = verbe1;
		break;
		
		case 6 : resultat();
		break;
		}
}
		
function correction1()
{
		switch(tour)
		{
			case 1 :
				if(nbr1<16)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr1>15)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : ont ";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
			document.getElementById("correction1").style.display = "";
			break;
			
			case 2 :
				if(nbr2<16)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr2>15)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : ont ";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
			document.getElementById("correction1").style.display = "";
			break;
			
			case 3 :
				if(nbr3<16)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr3>15)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : ont ";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
			document.getElementById("correction1").style.display = "";
			break;
			
			case 4 :
				if(nbr4<16)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr4>15)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : ont ";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
			document.getElementById("correction1").style.display = "";
			break;
			
			case 5 :
				if(nbr5<16)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr5>15)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : ont ";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
			document.getElementById("correction1").style.display = "";
			resultat();
			break;
		}

}

function correction2()
{
		switch(tour)
		{
			case 1 :
				if(nbr1>15)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr1<16)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : on ";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
			document.getElementById("correction1").style.display = "";
			break;
			
			case 2 :
				if(nbr2>15)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr2<16)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : on ";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
			document.getElementById("correction1").style.display = "";
			break;
			
			case 3 :
				if(nbr3>15)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr3<16)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : on ";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
			document.getElementById("correction1").style.display = "";
			break;
			
			case 4 :
				if(nbr4>15)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr4<16)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : on ";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
			document.getElementById("correction1").style.display = "";
			break;
			
			case 5 :
				if(nbr5>15)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr5<16)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : on ";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
			document.getElementById("correction1").style.display = "";
			resultat();
			break;
		}

}
function resultat()
{
			document.getElementById("tour").style.display = "none";
			document.getElementById("note").style.display = "";	
			document.getElementById("noteimage").style.display = "";
			document.getElementById("go1").style.display = "none";						
			document.getElementById("imprime").style.display = "";			

	switch (note)
			{
				case 0 : document.getElementById("note").innerHTML = "Note : 0 sur 5<br>Trop difficile pour toi";
				document.getElementById("dur").style.display = "";
				break;
				
				case 1: document.getElementById("note").innerHTML = "Note : 1 sur 5<br>Trop difficile pour toi";
				document.getElementById("dur").style.display = "";
				break;
				
				case 2 : document.getElementById("note").innerHTML = "Note : 2 sur 5<br>Continue tes efforts";
				document.getElementById("effort").style.display = "";
				break;
				
				case 3 : document.getElementById("note").innerHTML = "Note : 3 sur 5<br>Continue tes efforts";
				document.getElementById("effort").style.display = "";
				break;
				
				case 4 : document.getElementById("note").innerHTML = "Note : 4 sur 5<br>Bien";
				document.getElementById("bien").style.display = "";
				break;
				
				case 5 : document.getElementById("note").innerHTML = "Note : 5 sur 5<br>Bravo !";
				document.getElementById("champion").style.display = "";
				break;
				
			}			
}
