var choixetap//e=2;
var choiximage=0;
var choixdeplacement=1;
var listedeplacement=[];
var lignes = 8;
var colonnes = 8;
var robotHorizontal = 4;
var robotVertical = 8;
var bougecase=0;
var robotOrientation="haut";
var nbrdeplacement = 1
var tictac = 0;
var reperetemps = 0;
var reperemouvement=0;
var robotDegre=0;
var ecart = tictac-reperetemps;
var erreur=0;
var fleur1prise=0;
var fleur2prise=0;
var fleur3prise=0;
var videostop=0;
var mission=0;
var aide=0;
var nbressai=0;

function retouraccueil()
{
	document.location.href="retouraccueil1.php?id="+nbressai;	
}

function efface()
{
robotHorizontal = 4;
robotVertical = 8;
listedeplacement=[];
fleur1prise=0;
fleur2prise=0;
fleur3prise=0;
robotOrientation="haut";
		switch(robotOrientation)
		{
		case "haut": 	robotOrientation="haut";robotDegre=0;break;
		case "bas": 	robotOrientation="bas";robotDegre=-180;break;
		case "gauche": 	robotOrientation="gauche";robotDegre=-90;break;
		case "droite": 	robotOrientation="droite";robotDegre=90;break;
		}

		document.getElementById("robot").style.transform="rotate("+robotDegre+")deg)";
		document.getElementById("robot").src="img/robot.png";
		document.getElementById("robot").style.transform="rotate("+(-(bougecase*2)+robotDegre)+"deg)";
		
document.getElementById("choix1").style.backgroundColor="white";
document.getElementById("choix2").style.backgroundColor="white";
document.getElementById("choix3").style.backgroundColor="white";
document.getElementById("choix4").style.backgroundColor="white";
document.getElementById("choix5").style.backgroundColor="white";
document.getElementById("choix6").style.backgroundColor="white";
document.getElementById("choix7").style.backgroundColor="white";
document.getElementById("choix8").style.backgroundColor="white";
document.getElementById("choix9").style.backgroundColor="white";
document.getElementById("choix10").style.backgroundColor="white";
document.getElementById("choix11").style.backgroundColor="white";
document.getElementById("choix12").style.backgroundColor="white";
document.getElementById("choix13").style.backgroundColor="white";
document.getElementById("choix14").style.backgroundColor="white";
document.getElementById("choix15").style.backgroundColor="white";
document.getElementById("choix16").style.backgroundColor="white";
document.getElementById("choix17").style.backgroundColor="white";
document.getElementById("choix18").style.backgroundColor="white";
document.getElementById("choix19").style.backgroundColor="white";
document.getElementById("choix20").style.backgroundColor="white";
document.getElementById("choix1image").src="";
document.getElementById("choix2image").src="";
document.getElementById("choix3image").src="";
document.getElementById("choix4image").src="";
document.getElementById("choix5image").src="";
document.getElementById("choix6image").src="";
document.getElementById("choix7image").src="";
document.getElementById("choix8image").src="";
document.getElementById("choix9image").src="";
document.getElementById("choix10image").src="";
document.getElementById("choix11image").src="";
document.getElementById("choix12image").src="";
document.getElementById("choix13image").src="";
document.getElementById("choix14image").src="";
document.getElementById("choix15image").src="";
document.getElementById("choix16image").src="";
document.getElementById("choix17image").src="";
document.getElementById("choix18image").src="";
document.getElementById("choix19image").src="";
document.getElementById("choix20image").src="";
choiximage=0;
choixdeplacement=1;
document.getElementById("robot").style.top=(robotVertical*52)+(-48)-(bougecase)+"px";
document.getElementById("robot").style.left=(robotHorizontal*51)+(-25)+(bougecase)+"px";	
}

function retourdepart()
{
robotHorizontal = 4;
robotVertical = 8;
robotOrientation="haut";
		switch(robotOrientation)
		{
		case "haut": 	robotOrientation="haut";robotDegre=0;break;
		case "bas": 	robotOrientation="bas";robotDegre=-180;break;
		case "gauche": 	robotOrientation="gauche";robotDegre=-90;break;
		case "droite": 	robotOrientation="droite";robotDegre=90;break;
		}

		document.getElementById("robot").style.transform="rotate("+robotDegre+")deg)";
		document.getElementById("robot").src="img/robot.png";
		document.getElementById("robot").style.transform="rotate("+(-(bougecase*2)+robotDegre)+"deg)";
document.getElementById("choix1").style.backgroundColor="white";
document.getElementById("choix2").style.backgroundColor="white";
document.getElementById("choix3").style.backgroundColor="white";
document.getElementById("choix4").style.backgroundColor="white";
document.getElementById("choix5").style.backgroundColor="white";
document.getElementById("choix6").style.backgroundColor="white";
document.getElementById("choix7").style.backgroundColor="white";
document.getElementById("choix8").style.backgroundColor="white";
document.getElementById("choix9").style.backgroundColor="white";
document.getElementById("choix10").style.backgroundColor="white";
document.getElementById("choix11").style.backgroundColor="white";
document.getElementById("choix12").style.backgroundColor="white";
document.getElementById("choix13").style.backgroundColor="white";
document.getElementById("choix14").style.backgroundColor="white";
document.getElementById("choix15").style.backgroundColor="white";
document.getElementById("choix16").style.backgroundColor="white";
document.getElementById("choix17").style.backgroundColor="white";
document.getElementById("choix18").style.backgroundColor="white";
document.getElementById("choix19").style.backgroundColor="white";
document.getElementById("choix20").style.backgroundColor="white";
document.getElementById("robot").style.top=(robotVertical*52)+(-48)-(bougecase)+"px";
document.getElementById("robot").style.left=(robotHorizontal*51)+(-25)+(bougecase)+"px";
}

function affichemission()
{
	if (mission==0)
	{
		document.getElementById("mission").style.display="";
		mission=1;
	}
	else
	{
		document.getElementById("mission").style.display="none";
		mission=0;
	}		
}

function afficheaide()
{
	if (aide==0)
	{
		document.getElementById("aide").style.display="";
		aide=1;
	}
	else
	{
		document.getElementById("aide").style.display="none";
		aide=0;
	}		
}

function arrivee()
{
	//fleur1prise++;fleur2prise++;fleur3prise++;
		if(robotHorizontal==4 && robotVertical==4 && fleur1prise==1 && fleur2prise==1 && fleur3prise==1)
		{
		bougecarre=0;
		document.getElementById("carregagne").style.display="";
		document.getElementById("carregagne").style.width=fenlarg+"px";
		document.getElementById("carregagne").style.height=fenhaut+"px";
		document.getElementById("carregagne").style.opacity=bougecarre;
		setTimeout(bougecarregagne,2000);		
		}
}

function attenteBougeCarre()
{
		bougecarre=bougecarre+0.005;
	if(bougecarre<1)
	{
	setTimeout(bougecarregagne,1);	
	}
	if(bougecarre==1 || bougecarre>1)
	{
	document.location.href="robot-niveau-1-comptage.php?id="+nbressai;
	}
}

function bougecarregagne()
{
if(bougecarre<1)
{
		document.getElementById("carregagne").style.opacity=bougecarre;
}
attenteBougeCarre();
}

function fleur1()
{
	if (fleur1prise==0)
	{
		if(robotHorizontal==4 && robotVertical==7)
		{
			fleur1prise++;
			document.getElementById("fleur1").src="img/fleuricone.png";
			document.getElementById("case7D").style.backgroundImage="url(img/sol.png)";	
		}
	}
}

function fleur2()
{
	if (fleur2prise==0)
	{
		if(robotHorizontal==4 && robotVertical==6)
		{
			fleur2prise++;
			document.getElementById("fleur2").src="img/fleuricone.png";
			document.getElementById("case6D").style.backgroundImage="url(img/sol2.png)";			
		}
	}
}

function fleur3()
{
	if (fleur3prise==0)
	{
		if(robotHorizontal==4 && robotVertical==5)
		{
			fleur3prise++;
			document.getElementById("fleur3").src="img/fleuricone.png";
			document.getElementById("case5D").style.backgroundImage="url(img/sol3.png)";			
		}
	}
}

function recompense1()
{
//document.getElementById("recompense1").style.display="";
setTimeout(recompense2,300);
}
function recompense2()
{
//document.getElementById("recompense2").style.display="";
setTimeout(recompense3,300);
}
function recompense3()
{
//document.getElementById("recompense3").style.display="";
}

function robotBougeson()
{
player = document.getElementById("robotbouge");
player.play();
}

function robotFinson()
{
	recompense1();
player = document.getElementById("robotfin");
player.play();
}

function robotPauseson()
{
player = document.getElementById("robotpause");
player.play();
}

function robotallume()
{
	document.getElementById("robot").src="img/robotallume.png";
}

function depart()
{
	//nbressai++;
	//document.getElementById("nbressai").innerHTML=nbressai;
	if(nbressai>1){
	document.getElementById("essaiortho").innerHTML="ESSAIS : ";	
	}
	reperemouvement=0;

	document.getElementById("choix1").style.backgroundColor="#9FFF9F";
reperemouvement++;
		switch(listedeplacement[0])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		
		if(erreur==0)
		{
			switch(listedeplacement[0])
			{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" : deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
			}
			setTimeout(robotallume,1000);
			if(reperemouvement<listedeplacement.length)
			{
			setTimeout(mouvement2,1500);
			}
			else
			{
				setTimeout(robotFinson,1500);
			}
		}
		else
		{
			document.getElementById("choix1").style.backgroundColor="#FF6A6A";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function mouvement2()
{

	document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[1])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		
		if(erreur==0)
		{		
			if(reperemouvement<listedeplacement.length)
			{
				switch(listedeplacement[1])
				{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
				}
				document.getElementById("choix2").style.backgroundColor="#9FFF9F";
				document.getElementById("choix1").style.backgroundColor="white";
				setTimeout(mouvement3,1500);
				reperemouvement++;
				setTimeout(robotallume,1000);	
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix1").style.backgroundColor="white";
			document.getElementById("choix2").style.backgroundColor="#FF6A6A";
			player = document.getElementById("robotfin");
			player.play();
		}		
}

function mouvement3()
{

	document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[2])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		
		if(erreur==0)
		{
			if(reperemouvement<listedeplacement.length)
			{
			switch(listedeplacement[2])
			{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
			}
				document.getElementById("choix3").style.backgroundColor="#9FFF9F";
				document.getElementById("choix2").style.backgroundColor="white";
				reperemouvement++;
				setTimeout(robotallume,1000);
				setTimeout(mouvement4,1500);
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix3").style.backgroundColor="#FF6A6A";
			document.getElementById("choix2").style.backgroundColor="white";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function mouvement4()
{
	document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[3])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		
		if(erreur==0)
		{
			if(reperemouvement<listedeplacement.length)
			{
			switch(listedeplacement[3])
			{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
			}
			document.getElementById("choix4").style.backgroundColor="#9FFF9F";
			document.getElementById("choix3").style.backgroundColor="white";
			reperemouvement++;
			setTimeout(robotallume,1000);
			setTimeout(mouvement5,1500);
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix4").style.backgroundColor="#FF6A6A";
			document.getElementById("choix3").style.backgroundColor="white";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function mouvement5()
{
	document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[4])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		if(erreur==0)
		{		
			if(reperemouvement<listedeplacement.length)
			{
			switch(listedeplacement[4])
			{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();robotBougeson();break;
			}
			document.getElementById("choix5").style.backgroundColor="#9FFF9F";
			document.getElementById("choix4").style.backgroundColor="white";
			reperemouvement++;
			setTimeout(robotallume,1000);
			setTimeout(mouvement6,1500);
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix5").style.backgroundColor="#FF6A6A";
			document.getElementById("choix4").style.backgroundColor="white";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function mouvement6()
{
	document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[5])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		if(erreur==0)
		{		
			if(reperemouvement<listedeplacement.length)
			{
			switch(listedeplacement[5])
			{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
			}
			document.getElementById("choix6").style.backgroundColor="#9FFF9F";
			document.getElementById("choix5").style.backgroundColor="white";
			reperemouvement++;
			setTimeout(robotallume,1000);
			setTimeout(mouvement7,1500);
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix6").style.backgroundColor="#FF6A6A";
			document.getElementById("choix5").style.backgroundColor="white";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function mouvement7()
{
	document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[6])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		if(erreur==0)
		{	
			if(reperemouvement<listedeplacement.length)
			{
			switch(listedeplacement[6])
			{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
			}
			document.getElementById("choix7").style.backgroundColor="#9FFF9F";
			document.getElementById("choix6").style.backgroundColor="white";
			reperemouvement++;
			setTimeout(robotallume,1000);
			setTimeout(mouvement8,1500);
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix7").style.backgroundColor="#FF6A6A";
			document.getElementById("choix6").style.backgroundColor="white";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function mouvement8()
{
	document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[7])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		if(erreur==0)
		{	
			if(reperemouvement<listedeplacement.length)
			{
			switch(listedeplacement[7])
			{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
			}
			document.getElementById("choix8").style.backgroundColor="#9FFF9F";
			document.getElementById("choix7").style.backgroundColor="white";
			reperemouvement++;
			setTimeout(robotallume,1000);
			setTimeout(mouvement9,1500);
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix8").style.backgroundColor="#FF6A6A";
			document.getElementById("choix7").style.backgroundColor="white";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function mouvement9()
{
	document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[8])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		if(erreur==0)
		{
			if(reperemouvement<listedeplacement.length)
			{
			switch(listedeplacement[8])
			{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
			}
			document.getElementById("choix9").style.backgroundColor="#9FFF9F";
			document.getElementById("choix8").style.backgroundColor="white";
			reperemouvement++;
			setTimeout(robotallume,1000);
			setTimeout(mouvement10,1500);
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix9").style.backgroundColor="#FF6A6A";
			document.getElementById("choix8").style.backgroundColor="white";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function mouvement10()
{
		document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[9])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		if(erreur==0)
		{
			if(reperemouvement<listedeplacement.length)
			{
			switch(listedeplacement[9])
			{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
			}
			document.getElementById("choix10").style.backgroundColor="#9FFF9F";
			document.getElementById("choix9").style.backgroundColor="white";
			reperemouvement++;
			setTimeout(robotallume,1000);
			setTimeout(mouvement11,1500);
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix10").style.backgroundColor="#FF6A6A";
			document.getElementById("choix9").style.backgroundColor="white";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function mouvement11()
{
		document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[10])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		if(erreur==0)
		{
			if(reperemouvement<listedeplacement.length)
			{
				switch(listedeplacement[10])
				{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
			}
			document.getElementById("choix11").style.backgroundColor="#9FFF9F";
			document.getElementById("choix10").style.backgroundColor="white";
			reperemouvement++;
			setTimeout(robotallume,1000);
			setTimeout(mouvement12,1500);
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix11").style.backgroundColor="#FF6A6A";
			document.getElementById("choix10").style.backgroundColor="white";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function mouvement12()
{
		document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[11])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		if(erreur==0)
		{
			if(reperemouvement<listedeplacement.length)
			{
				switch(listedeplacement[11])
				{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
			}
			document.getElementById("choix12").style.backgroundColor="#9FFF9F";
			document.getElementById("choix11").style.backgroundColor="white";
			reperemouvement++;
			setTimeout(robotallume,1000);
			setTimeout(mouvement13,1500);
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix12").style.backgroundColor="#FF6A6A";
			document.getElementById("choix11").style.backgroundColor="white";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function mouvement13()
{
		document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[12])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		if(erreur==0)
		{
			if(reperemouvement<listedeplacement.length)
			{
			switch(listedeplacement[12])
			{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
			}
			document.getElementById("choix13").style.backgroundColor="#9FFF9F";
			document.getElementById("choix12").style.backgroundColor="white";
			reperemouvement++;
			setTimeout(robotallume,1000);
			setTimeout(mouvement14,1500);
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix13").style.backgroundColor="#FF6A6A";
			document.getElementById("choix12").style.backgroundColor="white";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function mouvement14()
{
		document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[13])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		if(erreur==0)
		{
			if(reperemouvement<listedeplacement.length)
			{
			switch(listedeplacement[13])
			{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
			}
			document.getElementById("choix14").style.backgroundColor="#9FFF9F";
			document.getElementById("choix13").style.backgroundColor="white";
			reperemouvement++;
			setTimeout(robotallume,1000);
			setTimeout(mouvement15,1500);
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix14").style.backgroundColor="#FF6A6A";
			document.getElementById("choix13").style.backgroundColor="white";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function mouvement15()
{
		document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[14])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		if(erreur==0)
		{
			if(reperemouvement<listedeplacement.length)
			{
			switch(listedeplacement[14])
			{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
			}
			document.getElementById("choix15").style.backgroundColor="#9FFF9F";
			document.getElementById("choix14").style.backgroundColor="white";
			reperemouvement++;
			setTimeout(robotallume,1000);
			setTimeout(mouvement16,1500);
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix15").style.backgroundColor="#FF6A6A";
			document.getElementById("choix14").style.backgroundColor="white";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function mouvement16()
{
		document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[15])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		if(erreur==0)
		{
			if(reperemouvement<listedeplacement.length)
			{
			switch(listedeplacement[15])
			{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
			}
			document.getElementById("choix16").style.backgroundColor="#9FFF9F";
			document.getElementById("choix15").style.backgroundColor="white";
			reperemouvement++;
			setTimeout(robotallume,1000);
			setTimeout(mouvement17,1500);
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix16").style.backgroundColor="#FF6A6A";
			document.getElementById("choix15").style.backgroundColor="white";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function mouvement17()
{
		document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[16])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		if(erreur==0)
		{
			if(reperemouvement<listedeplacement.length)
			{
			switch(listedeplacement[16])
			{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
			}
			document.getElementById("choix17").style.backgroundColor="#9FFF9F";
			document.getElementById("choix16").style.backgroundColor="white";
			reperemouvement++;
			setTimeout(robotallume,1000);
			setTimeout(mouvement18,1500);
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix17").style.backgroundColor="#FF6A6A";
			document.getElementById("choix16").style.backgroundColor="white";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function mouvement18()
{
		document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[17])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		if(erreur==0)
		{
			if(reperemouvement<listedeplacement.length)
			{
			switch(listedeplacement[17])
			{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
			}
			document.getElementById("choix18").style.backgroundColor="#9FFF9F";
			document.getElementById("choix17").style.backgroundColor="white";
			reperemouvement++;
			setTimeout(robotallume,1000);
			setTimeout(mouvement19,1500);
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix18").style.backgroundColor="#FF6A6A";
			document.getElementById("choix17").style.backgroundColor="white";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function mouvement19()
{
		document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[18])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		if(erreur==0)
		{
			if(reperemouvement<listedeplacement.length)
			{
			switch(listedeplacement[18])
			{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
			}
			document.getElementById("choix19").style.backgroundColor="#9FFF9F";
			document.getElementById("choix18").style.backgroundColor="white";
			reperemouvement++;
			setTimeout(robotallume,1000);
			setTimeout(mouvement20,1500);
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix19").style.backgroundColor="#FF6A6A";
			document.getElementById("choix18").style.backgroundColor="white";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function mouvement20()
{
		document.getElementById("robot").src="img/robot.png";
		switch(listedeplacement[19])
		{
			case "haut" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
			case "bas" : 
				switch(robotOrientation)
				{
				case "haut":if(robotVertical<lignes){erreur=0;}
				else{erreur=1;};break;				
				case "bas":if(robotVertical>1){erreur=0;}
				else{erreur=1;};break;	
				case "gauche":if(robotHorizontal<colonnes){erreur=0;}
				else{erreur=1;};break;				
				case "droite":if(robotHorizontal>1){erreur=0;}
				else{erreur=1;};break;
				}
			;break;
		}
		if(erreur==0)
		{
			if(reperemouvement<listedeplacement.length)
			{
			switch(listedeplacement[19])
			{
				case "haut" : deplaceAvant();robotBougeson();break;
				case "bas" : deplaceArriere();robotBougeson();break;
				case "droite" :deplaceDroite();robotBougeson();break;
				case "gauche" : deplaceGauche();robotBougeson();break;
				case "pause" :deplacePause();break;
			}
			document.getElementById("choix20").style.backgroundColor="#9FFF9F";
			document.getElementById("choix19").style.backgroundColor="white";
			reperemouvement++;
			setTimeout(robotallume,1000);
			setTimeout(robotFinson,1500);				
			}
			else
			{
				robotFinson();
			}
		}
		else
		{
			document.getElementById("choix20").style.backgroundColor="#FF6A6A";
			document.getElementById("choix19").style.backgroundColor="white";
			player = document.getElementById("robotfin");
			player.play();
		}
}

function attentePause()
{
		bougecase++;
	if(bougecase<53)
	{
	setTimeout(deplacePause,20);	
	}
	if(bougecase>52)
	{
	bougecase=0;
	robotPauseson();
	}
}

function deplacePause()
{

attentePause();
}

function attenteAvant()
{
		bougecase++;
	if(bougecase<53)
	{
	setTimeout(deplaceAvant,20);	
	}
	if(bougecase>52)
	{
		switch(robotOrientation)
		{
		case "haut": 	robotVertical--;document.getElementById("robot").style.top=(robotVertical*52)+(-48)+"px";break;
		case "bas": 	robotVertical++;document.getElementById("robot").style.top=(robotVertical*52)+(-48)+"px";break;
		case "gauche": 	robotHorizontal--;break;
		case "droite": 	robotHorizontal++;break;
		}
	bougecase=0;
	//fleur1();
	//fleur2();
	//fleur3();
	// arrivee();
	}
}

function deplaceAvant()
{

switch(robotOrientation)
{
case "haut": 	document.getElementById("robot").style.top=(robotVertical*52)+(-48)-(bougecase)+"px";break;
case "bas": 	document.getElementById("robot").style.top=(robotVertical*52)+(-48)+(bougecase)+"px";break;
case "gauche": 	document.getElementById("robot").style.left=(robotHorizontal*51)+(-25)-(bougecase)+"px";break;
case "droite": 	document.getElementById("robot").style.left=(robotHorizontal*51)+(-25)+(bougecase)+"px";break;
}
attenteAvant();
}

function attenteArriere()
{
		bougecase++;
	if(bougecase<53)
	{
	setTimeout(deplaceArriere,20);	
	}
	if(bougecase>52)
	{
		switch(robotOrientation)
		{
		case "haut": 	robotVertical++;document.getElementById("robot").style.top=(robotVertical*52)+(-48)+"px";break;
		case "bas": 	robotVertical--;document.getElementById("robot").style.top=(robotVertical*52)+(-48)+"px";break;
		case "gauche": 	robotHorizontal++;break;
		case "droite": 	robotHorizontal--;break;
		}
	bougecase=0;
	//fleur1();
	//fleur2();
	//fleur3();
	// arrivee();
	}
}

function deplaceArriere()
{

switch(robotOrientation)
{
case "haut": 	document.getElementById("robot").style.top=(robotVertical*52)+(-48)+(bougecase)+"px";break;
case "bas": 	document.getElementById("robot").style.top=(robotVertical*52)+(-48)-(bougecase)+"px";break;
case "gauche": 	document.getElementById("robot").style.left=(robotHorizontal*51)+(-25)+(bougecase)+"px";break;
case "droite": 	document.getElementById("robot").style.left=(robotHorizontal*51)+(-25)-(bougecase)+"px";break;
}
attenteArriere();
}

function attenteDroite()
{
		bougecase++;
	if(bougecase<46)
	{
	setTimeout(deplaceDroite,22);	
	}
	if(bougecase>45)
	{
		switch(robotOrientation)
		{
		case "haut": 	robotOrientation="droite";robotDegre=90;break;
		case "bas": 	robotOrientation="gauche";robotDegre=-90;break;
		case "gauche": 	robotOrientation="haut";robotDegre=0;break;
		case "droite": 	robotOrientation="bas";robotDegre=180;break;
		}
		document.getElementById("robot").style.transform="rotate("+robotDegre+")deg)";
	bougecase=0;
	}
}

function deplaceDroite()
{
document.getElementById("robot").style.transform="rotate("+((bougecase*2)+robotDegre)+"deg)";

attenteDroite();
}

function attenteGauche()
{
		bougecase++;
	if(bougecase<46)
	{
	setTimeout(deplaceGauche,22);	
	}
	if(bougecase>45)
	{
		switch(robotOrientation)
		{
		case "haut": 	robotOrientation="gauche";robotDegre=-90;break;
		case "bas": 	robotOrientation="droite";robotDegre=90;break;
		case "gauche": 	robotOrientation="bas";robotDegre=-180;break;
		case "droite": 	robotOrientation="haut";robotDegre=0;break;
		}
		document.getElementById("robot").style.transform="rotate("+robotDegre+")deg)";
	bougecase=0;
	}
}

function deplaceGauche()
{
document.getElementById("robot").style.transform="rotate("+(-(bougecase*2)+robotDegre)+"deg)";

attenteGauche();
}

function choixhaut()
{
	switch(choixdeplacement)
	{
		case 1 : document.getElementById("choix1image").src="img/haut.png";listedeplacement.push("haut");break;
		case 2 : document.getElementById("choix2image").src="img/haut.png";listedeplacement.push("haut");break;
		case 3 : document.getElementById("choix3image").src="img/haut.png";listedeplacement.push("haut");break;
		case 4 : document.getElementById("choix4image").src="img/haut.png";listedeplacement.push("haut");break;
		case 5 : document.getElementById("choix5image").src="img/haut.png";listedeplacement.push("haut");break;
		case 6 : document.getElementById("choix6image").src="img/haut.png";listedeplacement.push("haut");break;
		case 7 : document.getElementById("choix7image").src="img/haut.png";listedeplacement.push("haut");break;
		case 8 : document.getElementById("choix8image").src="img/haut.png";listedeplacement.push("haut");break;
		case 9 : document.getElementById("choix9image").src="img/haut.png";listedeplacement.push("haut");break;
		case 10 : document.getElementById("choix10image").src="img/haut.png";listedeplacement.push("haut");break;
		case 11 : document.getElementById("choix11image").src="img/haut.png";listedeplacement.push("haut");break;
		case 12 : document.getElementById("choix12image").src="img/haut.png";listedeplacement.push("haut");break;
		case 13 : document.getElementById("choix13image").src="img/haut.png";listedeplacement.push("haut");break;
		case 14 : document.getElementById("choix14image").src="img/haut.png";listedeplacement.push("haut");break;
		case 15 : document.getElementById("choix15image").src="img/haut.png";listedeplacement.push("haut");break;
		case 16 : document.getElementById("choix16image").src="img/haut.png";listedeplacement.push("haut");break;
		case 17 : document.getElementById("choix17image").src="img/haut.png";listedeplacement.push("haut");break;
		case 18 : document.getElementById("choix18image").src="img/haut.png";listedeplacement.push("haut");break;
		case 19 : document.getElementById("choix19image").src="img/haut.png";listedeplacement.push("haut");break;
		case 20 : document.getElementById("choix20image").src="img/haut.png";listedeplacement.push("haut");break;
	}
	choixdeplacement++;
}

function choixbas()
{
	switch(choixdeplacement)
	{
		case 1 : document.getElementById("choix1image").src="img/bas.png";listedeplacement.push("bas");break;
		case 2 : document.getElementById("choix2image").src="img/bas.png";listedeplacement.push("bas");break;
		case 3 : document.getElementById("choix3image").src="img/bas.png";listedeplacement.push("bas");break;
		case 4 : document.getElementById("choix4image").src="img/bas.png";listedeplacement.push("bas");break;
		case 5 : document.getElementById("choix5image").src="img/bas.png";listedeplacement.push("bas");break;
		case 6 : document.getElementById("choix6image").src="img/bas.png";listedeplacement.push("bas");break;
		case 7 : document.getElementById("choix7image").src="img/bas.png";listedeplacement.push("bas");break;
		case 8 : document.getElementById("choix8image").src="img/bas.png";listedeplacement.push("bas");break;
		case 9 : document.getElementById("choix9image").src="img/bas.png";listedeplacement.push("bas");break;
		case 10 : document.getElementById("choix10image").src="img/bas.png";listedeplacement.push("bas");break;
		case 11 : document.getElementById("choix11image").src="img/bas.png";listedeplacement.push("bas");break;
		case 12 : document.getElementById("choix12image").src="img/bas.png";listedeplacement.push("bas");break;
		case 13 : document.getElementById("choix13image").src="img/bas.png";listedeplacement.push("bas");break;
		case 14 : document.getElementById("choix14image").src="img/bas.png";listedeplacement.push("bas");break;
		case 15 : document.getElementById("choix15image").src="img/bas.png";listedeplacement.push("bas");break;
		case 16 : document.getElementById("choix16image").src="img/bas.png";listedeplacement.push("bas");break;
		case 17 : document.getElementById("choix17image").src="img/bas.png";listedeplacement.push("bas");break;
		case 18 : document.getElementById("choix18image").src="img/bas.png";listedeplacement.push("bas");break;
		case 19 : document.getElementById("choix19image").src="img/bas.png";listedeplacement.push("bas");break;
		case 20 : document.getElementById("choix20image").src="img/bas.png";listedeplacement.push("bas");break;
	}
	choixdeplacement++;
}

function choixdroite()
{
	switch(choixdeplacement)
	{
		case 1 : document.getElementById("choix1image").src="img/droite.png";listedeplacement.push("droite");break;
		case 2 : document.getElementById("choix2image").src="img/droite.png";listedeplacement.push("droite");break;
		case 3 : document.getElementById("choix3image").src="img/droite.png";listedeplacement.push("droite");break;
		case 4 : document.getElementById("choix4image").src="img/droite.png";listedeplacement.push("droite");break;
		case 5 : document.getElementById("choix5image").src="img/droite.png";listedeplacement.push("droite");break;
		case 6 : document.getElementById("choix6image").src="img/droite.png";listedeplacement.push("droite");break;
		case 7 : document.getElementById("choix7image").src="img/droite.png";listedeplacement.push("droite");break;
		case 8 : document.getElementById("choix8image").src="img/droite.png";listedeplacement.push("droite");break;
		case 9 : document.getElementById("choix9image").src="img/droite.png";listedeplacement.push("droite");break;
		case 10 : document.getElementById("choix10image").src="img/droite.png";listedeplacement.push("droite");break;
		case 11 : document.getElementById("choix11image").src="img/droite.png";listedeplacement.push("droite");break;
		case 12 : document.getElementById("choix12image").src="img/droite.png";listedeplacement.push("droite");break;
		case 13 : document.getElementById("choix13image").src="img/droite.png";listedeplacement.push("droite");break;
		case 14 : document.getElementById("choix14image").src="img/droite.png";listedeplacement.push("droite");break;
		case 15 : document.getElementById("choix15image").src="img/droite.png";listedeplacement.push("droite");break;
		case 16 : document.getElementById("choix16image").src="img/droite.png";listedeplacement.push("droite");break;
		case 17 : document.getElementById("choix17image").src="img/droite.png";listedeplacement.push("droite");break;
		case 18 : document.getElementById("choix18image").src="img/droite.png";listedeplacement.push("droite");break;
		case 19 : document.getElementById("choix19image").src="img/droite.png";listedeplacement.push("droite");break;
		case 20 : document.getElementById("choix20image").src="img/droite.png";listedeplacement.push("droite");break;
	}
	choixdeplacement++;
}

function choixgauche()
{
	switch(choixdeplacement)
	{
		case 1 : document.getElementById("choix1image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 2 : document.getElementById("choix2image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 3 : document.getElementById("choix3image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 4 : document.getElementById("choix4image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 5 : document.getElementById("choix5image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 6 : document.getElementById("choix6image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 7 : document.getElementById("choix7image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 8 : document.getElementById("choix8image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 9 : document.getElementById("choix9image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 10 : document.getElementById("choix10image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 11 : document.getElementById("choix11image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 12 : document.getElementById("choix12image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 13 : document.getElementById("choix13image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 14 : document.getElementById("choix14image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 15 : document.getElementById("choix15image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 16 : document.getElementById("choix16image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 17 : document.getElementById("choix17image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 18 : document.getElementById("choix18image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 19 : document.getElementById("choix19image").src="img/gauche.png";listedeplacement.push("gauche");break;
		case 20 : document.getElementById("choix20image").src="img/gauche.png";listedeplacement.push("gauche");break;
	}
	choixdeplacement++;
}

function choixpause()
{
	switch(choixdeplacement)
	{
		case 1 : document.getElementById("choix1image").src="img/pause.png";listedeplacement.push("pause");break;
		case 2 : document.getElementById("choix2image").src="img/pause.png";listedeplacement.push("pause");break;
		case 3 : document.getElementById("choix3image").src="img/pause.png";listedeplacement.push("pause");break;
		case 4 : document.getElementById("choix4image").src="img/pause.png";listedeplacement.push("pause");break;
		case 5 : document.getElementById("choix5image").src="img/pause.png";listedeplacement.push("pause");break;
		case 6 : document.getElementById("choix6image").src="img/pause.png";listedeplacement.push("pause");break;
		case 7 : document.getElementById("choix7image").src="img/pause.png";listedeplacement.push("pause");break;
		case 8 : document.getElementById("choix8image").src="img/pause.png";listedeplacement.push("pause");break;
		case 9 : document.getElementById("choix9image").src="img/pause.png";listedeplacement.push("pause");break;
		case 10 : document.getElementById("choix10image").src="img/pause.png";listedeplacement.push("pause");break;
		case 11 : document.getElementById("choix11image").src="img/pause.png";listedeplacement.push("pause");break;
		case 12 : document.getElementById("choix12image").src="img/pause.png";listedeplacement.push("pause");break;
		case 13 : document.getElementById("choix13image").src="img/pause.png";listedeplacement.push("pause");break;
		case 14 : document.getElementById("choix14image").src="img/pause.png";listedeplacement.push("pause");break;
		case 15 : document.getElementById("choix15image").src="img/pause.png";listedeplacement.push("pause");break;
		case 16 : document.getElementById("choix16image").src="img/pause.png";listedeplacement.push("pause");break;
		case 17 : document.getElementById("choix17image").src="img/pause.png";listedeplacement.push("pause");break;
		case 18 : document.getElementById("choix18image").src="img/pause.png";listedeplacement.push("pause");break;
		case 19 : document.getElementById("choix19image").src="img/pause.png";listedeplacement.push("pause");break;
		case 20 : document.getElementById("choix20image").src="img/pause.png";listedeplacement.push("pause");break;
	}
	choixdeplacement++;
}

function choixclear()
{
go();
		reperemouvement=0;
		robotHorizontal = 2;
		robotVertical = 8;
		robotOrientation="haut";
		//document.getElementById("fleur1").src="fleurombre.png";
		//document.getElementById("fleur2").src="fleurombre.png";
		//document.getElementById("fleur3").src="fleurombre.png";
		document.getElementById("robot").style.left=(robotHorizontal*51)+(-25)+"px";
		document.getElementById("robot").style.top=(robotVertical*52)+(-48)+"px";

		fleur1prise=0;
		fleur2prise=0;
		fleur3prise=0;
		switch(robotOrientation)
		{
		case "haut": 	robotDegre=0;break;
		case "bas": 	robotDegre=180;break;
		case "gauche": 	robotDegre=-90;break;
		case "droite": 	robotDegre=90;break;
		}		
		document.getElementById("robot").style.transform="rotate("+robotDegre+"deg)";

		choixdeplacement=choixdeplacement-(listedeplacement.length+1);
		listedeplacement=[];
		document.getElementById("choix1").style.backgroundColor="";
		document.getElementById("choix2").style.backgroundColor="";
		document.getElementById("choix3").style.backgroundColor="";
		document.getElementById("choix4").style.backgroundColor="";
		document.getElementById("choix5").style.backgroundColor="";
		document.getElementById("choix6").style.backgroundColor="";
		document.getElementById("choix7").style.backgroundColor="";
		document.getElementById("choix8").style.backgroundColor="";
		document.getElementById("choix9").style.backgroundColor="";
		document.getElementById("choix10").style.backgroundColor="";
		document.getElementById("choix11").style.backgroundColor="";
		document.getElementById("choix12").style.backgroundColor="";
		document.getElementById("choix13").style.backgroundColor="";
		document.getElementById("choix14").style.backgroundColor="";
		document.getElementById("choix15").style.backgroundColor="";
		document.getElementById("choix16").style.backgroundColor="";
		document.getElementById("choix17").style.backgroundColor="";
		document.getElementById("choix18").style.backgroundColor="";
		document.getElementById("choix19").style.backgroundColor="";
		document.getElementById("choix20").style.backgroundColor="";
		document.getElementById("choix1image").src="";
		document.getElementById("choix2image").src="";
		document.getElementById("choix3image").src="";
		document.getElementById("choix4image").src="";
		document.getElementById("choix5image").src="";
		document.getElementById("choix6image").src="";
		document.getElementById("choix7image").src="";
		document.getElementById("choix8image").src="";
		document.getElementById("choix9image").src="";
		document.getElementById("choix10image").src="";
		document.getElementById("choix11image").src="";
		document.getElementById("choix12image").src="";
		document.getElementById("choix13image").src="";
		document.getElementById("choix14image").src="";
		document.getElementById("choix15image").src="";
		document.getElementById("choix16image").src="";
		document.getElementById("choix17image").src="";
		document.getElementById("choix18image").src="";
		document.getElementById("choix19image").src="";
		document.getElementById("choix20image").src="";
}

function go()
{
//document.getElementById("fleur1").src="fleurombre.png";
//document.getElementById("fleur2").src="fleurombre.png";
//document.getElementById("fleur3").src="fleurombre.png";
document.getElementById("robot").style.left=(robotHorizontal*51)+(-25)+"px";
document.getElementById("robot").style.top=(robotVertical*52)+(-48)+"px";

fleur1prise=0;
fleur2prise=0;
fleur3prise=0; 
document.getElementById("jeu").style.display="";
affichegrille();


}



function choixdeux()
{
choixetape=2;
document.getElementById("illustration").style.display="";
document.getElementById("recompense1").style.display="none";
document.getElementById("recompense2").style.display="none";
document.getElementById("recompense3").style.display="none";
go();
}

function affichegrille()
{

		switch(robotOrientation)
		{
		case "haut": 	robotOrientation="haut";robotDegre=0;break;
		case "bas": 	robotOrientation="bas";robotDegre=-180;break;
		case "gauche": 	robotOrientation="gauche";robotDegre=-90;break;
		case "droite": 	robotOrientation="droite";robotDegre=90;break;
		}

		document.getElementById("robot").style.transform="rotate("+robotDegre+")deg)";
		document.getElementById("robot").src="img/robot.png";
		document.getElementById("robot").style.transform="rotate("+(-(bougecase*2)+robotDegre)+"deg)";


document.getElementById("case1A").style.backgroundImage="url(img/sol.png)";
document.getElementById("case2A").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case3A").style.backgroundImage="url(img/sol2.png)";
document.getElementById("case4A").style.backgroundImage="url(img/sol.png)";
document.getElementById("case5A").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case6A").style.backgroundImage="url(img/sol2.png)";
document.getElementById("case7A").style.backgroundImage="url(img/sol.png)";
document.getElementById("case8A").style.backgroundImage="url(img/sol3.png)";

document.getElementById("case1B").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case2B").style.backgroundImage="url(img/sol2.png)";
document.getElementById("case3B").style.backgroundImage="url(img/sol.png)";
document.getElementById("case4B").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case5B").style.backgroundImage="url(img/sol2.png)";
document.getElementById("case6B").style.backgroundImage="url(img/sol.png)";
document.getElementById("case7B").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case8B").style.backgroundImage="url(img/sol2.png)";

document.getElementById("case1C").style.backgroundImage="url(img/sol2.png)";
document.getElementById("case2C").style.backgroundImage="url(img/sol.png)";
document.getElementById("case3C").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case4C").style.backgroundImage="url(img/sol2.png)";
document.getElementById("case5C").style.backgroundImage="url(img/sol.png)";
document.getElementById("case6C").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case7C").style.backgroundImage="url(img/sol2.png)";
document.getElementById("case8C").style.backgroundImage="url(img/sol.png)";

document.getElementById("case1D").style.backgroundImage="url(img/sol.png)";
document.getElementById("case2D").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case3D").style.backgroundImage="url(img/sol2.png)";
document.getElementById("case4D").style.backgroundImage="url(img/sol.png)";
document.getElementById("case5D").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case6D").style.backgroundImage="url(img/sol2.png)";
document.getElementById("case7D").style.backgroundImage="url(img/sol.png)";
document.getElementById("case8D").style.backgroundImage="url(img/sol3.png)";

document.getElementById("case1E").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case2E").style.backgroundImage="url(img/sol2.png)";
document.getElementById("case3E").style.backgroundImage="url(img/sol.png)";
document.getElementById("case4E").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case5E").style.backgroundImage="url(img/sol2.png)";
document.getElementById("case6E").style.backgroundImage="url(img/sol.png)";
document.getElementById("case7E").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case8E").style.backgroundImage="url(img/sol2.png)";

document.getElementById("case1F").style.backgroundImage="url(img/sol2.png)";
document.getElementById("case2F").style.backgroundImage="url(img/sol.png)";
document.getElementById("case3F").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case4F").style.backgroundImage="url(img/sol2.png)";
document.getElementById("case5F").style.backgroundImage="url(img/sol.png)";
document.getElementById("case6F").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case7F").style.backgroundImage="url(img/sol2.png)";
document.getElementById("case8F").style.backgroundImage="url(img/sol.png)";

document.getElementById("case1G").style.backgroundImage="url(img/sol.png)";
document.getElementById("case2G").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case3G").style.backgroundImage="url(img/sol2.png)";
document.getElementById("case4G").style.backgroundImage="url(img/sol.png)";
document.getElementById("case5G").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case6G").style.backgroundImage="url(img/sol2.png)";
document.getElementById("case7G").style.backgroundImage="url(img/sol.png)";
document.getElementById("case8G").style.backgroundImage="url(img/sol3.png)";

document.getElementById("case1H").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case2H").style.backgroundImage="url(img/sol2.png)";
document.getElementById("case3H").style.backgroundImage="url(img/sol.png)";
document.getElementById("case4H").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case5H").style.backgroundImage="url(img/sol2.png)";
document.getElementById("case6H").style.backgroundImage="url(img/sol.png)";
document.getElementById("case7H").style.backgroundImage="url(img/sol3.png)";
document.getElementById("case8H").style.backgroundImage="url(img/sol2.png)";

switch(lignes)
{
case 1 :
document.getElementById("ligne2").style.display="none";
document.getElementById("ligne3").style.display="none";
document.getElementById("ligne4").style.display="none";
document.getElementById("ligne5").style.display="none";
document.getElementById("ligne6").style.display="none";
document.getElementById("ligne7").style.display="none";
document.getElementById("ligne8").style.display="none";break;
case 2 :
document.getElementById("ligne3").style.display="none";
document.getElementById("ligne4").style.display="none";
document.getElementById("ligne5").style.display="none";
document.getElementById("ligne6").style.display="none";
document.getElementById("ligne7").style.display="none";
document.getElementById("ligne8").style.display="none";break;
case 3 : document.getElementById("ligne4").style.display="none";
document.getElementById("ligne5").style.display="none";
document.getElementById("ligne6").style.display="none";
document.getElementById("ligne7").style.display="none";
document.getElementById("ligne8").style.display="none";break;
case 4 : document.getElementById("ligne5").style.display="none";
document.getElementById("ligne6").style.display="none";
document.getElementById("ligne7").style.display="none";
document.getElementById("ligne8").style.display="none";break;
case 5 : document.getElementById("ligne6").style.display="none";
document.getElementById("ligne7").style.display="none";
document.getElementById("ligne8").style.display="none";break;
case 6 : document.getElementById("ligne7").style.display="none";
document.getElementById("ligne8").style.display="none";
break;
case 7 : document.getElementById("ligne8").style.display="none";break;
}
if(colonnes<8)
{
document.getElementById("case1H").style.display="none";
document.getElementById("case2H").style.display="none";
document.getElementById("case3H").style.display="none";
document.getElementById("case4H").style.display="none";
document.getElementById("case5H").style.display="none";
document.getElementById("case6H").style.display="none";
document.getElementById("case7H").style.display="none";
document.getElementById("case8H").style.display="none";
}
if(colonnes<7)
{
document.getElementById("case1G").style.display="none";
document.getElementById("case2G").style.display="none";
document.getElementById("case3G").style.display="none";
document.getElementById("case4G").style.display="none";
document.getElementById("case5G").style.display="none";
document.getElementById("case6G").style.display="none";
document.getElementById("case7G").style.display="none";
document.getElementById("case8G").style.display="none";
}
if(colonnes<6)
{
document.getElementById("case1F").style.display="none";
document.getElementById("case2F").style.display="none";
document.getElementById("case3F").style.display="none";
document.getElementById("case4F").style.display="none";
document.getElementById("case5F").style.display="none";
document.getElementById("case6F").style.display="none";
document.getElementById("case7F").style.display="none";
document.getElementById("case8F").style.display="none";
}
if(colonnes<5)
{
document.getElementById("case1E").style.display="none";
document.getElementById("case2E").style.display="none";
document.getElementById("case3E").style.display="none";
document.getElementById("case4E").style.display="none";
document.getElementById("case5E").style.display="none";
document.getElementById("case6E").style.display="none";
document.getElementById("case7E").style.display="none";
document.getElementById("case8E").style.display="none";
}
if(colonnes<4)
{
document.getElementById("case1D").style.display="none";
document.getElementById("case2D").style.display="none";
document.getElementById("case3D").style.display="none";
document.getElementById("case4D").style.display="none";
document.getElementById("case5D").style.display="none";
document.getElementById("case6D").style.display="none";
document.getElementById("case7D").style.display="none";
document.getElementById("case8D").style.display="none";
}
if(colonnes<3)
{
document.getElementById("case1C").style.display="none";
document.getElementById("case2C").style.display="none";
document.getElementById("case3C").style.display="none";
document.getElementById("case4C").style.display="none";
document.getElementById("case5C").style.display="none";
document.getElementById("case6C").style.display="none";
document.getElementById("case7C").style.display="none";
document.getElementById("case8C").style.display="none";
}
if(colonnes<2)
{
document.getElementById("case1B").style.display="none";
document.getElementById("case2B").style.display="none";
document.getElementById("case3B").style.display="none";
document.getElementById("case4B").style.display="none";
document.getElementById("case5B").style.display="none";
document.getElementById("case6B").style.display="none";
document.getElementById("case7B").style.display="none";
document.getElementById("case8B").style.display="none";
}
}