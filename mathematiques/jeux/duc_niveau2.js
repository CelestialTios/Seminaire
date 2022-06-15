
var tour=1;selection1=0;note=0;

function consigne()
{
player = document.getElementById("consigne");
player.play();
}
function consignestop()
{
player = document.getElementById("consigne");
player.pause();
player.currentTime = 0;
}

function go()
{
		document.getElementById("tour").innerHTML = "Exercice n°"+tour+" sur 5";
		switch (tour)
		{
		case 1 :
		nbr1=Math.floor(Math.random()*899)+101;

		document.getElementById("exo1").style.display = "";
		document.getElementById("go1").style.display = "none";
		document.getElementById("go1blanc").style.display = "none";
		document.getElementById("verification1").style.display = "";
        document.getElementById("nbr1").innerHTML = nbr1;
		break;
		
		case 2 :
		nbr2=Math.floor(Math.random()*899)+101;
		document.getElementById("exo2").style.display = "";
		document.getElementById("exo1").style.display = "none";
		document.getElementById("go1").style.display = "none";	
		document.getElementById("correction1").style.display = "none";
		document.getElementById("go1blanc").style.display = "none";
		document.getElementById("verification1").style.display = "";
        document.getElementById("nbr2").innerHTML = nbr2;
		break;
		
		case 3 :
		nbr3=Math.floor(Math.random()*899)+101;
		document.getElementById("exo3").style.display = "";
		document.getElementById("exo2").style.display = "none";
		document.getElementById("go1").style.display = "none";	
		document.getElementById("correction2").style.display = "none";
		document.getElementById("go1blanc").style.display = "none";
		document.getElementById("verification1").style.display = "";
        document.getElementById("nbr3").innerHTML = nbr3;
		break;
		
		case 4 :
		nbr4=Math.floor(Math.random()*899)+101;
		document.getElementById("exo4").style.display = "";
		document.getElementById("exo3").style.display = "none";
		document.getElementById("go1").style.display = "none";	
		document.getElementById("correction3").style.display = "none";
		document.getElementById("go1blanc").style.display = "none";
		document.getElementById("verification1").style.display = "";
        document.getElementById("nbr4").innerHTML = nbr4;
		break;
		
		case 5 :
		nbr5=Math.floor(Math.random()*899)+101;
		document.getElementById("exo5").style.display = "";
		document.getElementById("exo4").style.display = "none";
		document.getElementById("go1").style.display = "none";	
		document.getElementById("correction4").style.display = "none"
		document.getElementById("go1blanc").style.display = "none";
		document.getElementById("verification1").style.display = "";
        document.getElementById("nbr5").innerHTML = nbr5;
		break;
		
		case 6 : resultat();
		break;
		}
}


function correction1()
{
		document.getElementById("verification1").style.display = "none";
		document.getElementById("go1").style.display = "";
		document.getElementById("go1blanc").style.display = "none";
		
		switch(tour)
		{
			case 1 :
			document.getElementById("correction1").style.display = "";
			var juste1=Math.floor(nbr1/100);juste2=Math.floor((nbr1-100*Math.floor(nbr1/100))/10);juste3=nbr1-100*Math.floor(nbr1/100)-10*Math.floor((nbr1-100*Math.floor(nbr1/100))/10);
			rep1 = document.getElementById("reponse1").value;
			rep2 = document.getElementById("reponse2").value;
			rep3 = document.getElementById("reponse3").value;
			if(rep1==juste1 && rep2==juste2 && rep3==juste3)
			{
			note++;
			document.getElementById("correction1").innerHTML = "Bonne réponse";
			}
			else
			{
			document.getElementById("correction1").innerHTML ="Erreur(s) : centaine(s) = "+juste1+" dizaine(s) = "+juste2+" unité(s) = "+juste3;
			}
			break;
			
			case 2 :
			document.getElementById("correction2").style.display = "";
			var juste4=Math.floor(nbr2/100);juste5=Math.floor((nbr2-100*Math.floor(nbr2/100))/10);juste6=nbr2-100*Math.floor(nbr2/100)-10*Math.floor((nbr2-100*Math.floor(nbr2/100))/10);
			rep4 = document.getElementById("reponse4").value;
			rep5 = document.getElementById("reponse5").value;
			rep6 = document.getElementById("reponse6").value;
			if(rep4==juste4 && rep5==juste5 && rep6==juste6)
			{
			note++;
			document.getElementById("correction2").innerHTML = "Bonne réponse";
			}
			else
			{
			document.getElementById("correction2").innerHTML ="Erreur(s) : centaine(s) = "+juste4+" dizaine(s) = "+juste5+" unité(s) = "+juste6;
			}
			break;
			
			case 3 :
			document.getElementById("correction3").style.display = "";
			var juste7=Math.floor(nbr3/100);juste8=Math.floor((nbr3-100*Math.floor(nbr3/100))/10);juste9=nbr3-100*Math.floor(nbr3/100)-10*Math.floor((nbr3-100*Math.floor(nbr3/100))/10);
			rep7 = document.getElementById("reponse7").value;
			rep8 = document.getElementById("reponse8").value;
			rep9 = document.getElementById("reponse9").value;
			if(rep7==juste7 && rep8==juste8 && rep9==juste9)
			{
			note++;
			document.getElementById("correction2").innerHTML = "Bonne réponse";
			}
			else
			{
			document.getElementById("correction3").innerHTML ="Erreur(s) : centaine(s) = "+juste7+" dizaine(s) = "+juste8+" unité(s) = "+juste9;
			}
			break;
			
			case 4 :
			document.getElementById("correction4").style.display = "";
			var juste10=Math.floor(nbr4/100);juste11=Math.floor((nbr4-100*Math.floor(nbr4/100))/10);juste12=nbr4-100*Math.floor(nbr4/100)-10*Math.floor((nbr4-100*Math.floor(nbr4/100))/10);
			rep10 = document.getElementById("reponse10").value;
			rep11 = document.getElementById("reponse11").value;
			rep12 = document.getElementById("reponse12").value;
			if(rep10==juste10 && rep11==juste11 && rep12==juste12)
			{
			note++;
			document.getElementById("correction4").innerHTML = "Bonne réponse";
			}
			else
			{
			document.getElementById("correction4").innerHTML ="Erreur(s) : centaine(s) = "+juste10+" dizaine(s) = "+juste11+" unité(s) = "+juste12;
			}
			break;
			
			case 5 :
			document.getElementById("correction5").style.display = "";
			var juste13=Math.floor(nbr5/100);juste14=Math.floor((nbr5-100*Math.floor(nbr5/100))/10);juste15=nbr5-100*Math.floor(nbr5/100)-10*Math.floor((nbr5-100*Math.floor(nbr5/100))/10);
			rep13 = document.getElementById("reponse13").value;
			rep14 = document.getElementById("reponse14").value;
			rep15 = document.getElementById("reponse15").value;
			if(rep13==juste13 && rep14==juste14 && rep15==juste15)
			{
			note++;
			document.getElementById("correction5").innerHTML = "Bonne réponse";
			}
			else
			{
			document.getElementById("correction5").innerHTML ="Erreur(s) : centaine(s) = "+juste13+" dizaine(s) = "+juste14+" unité(s) = "+juste15;
			}
			break;
		}
		tour++;
}

function resultat()
{
			document.getElementById("exo5").style.display = "none";
			document.getElementById("tour").style.display = "none";
			document.getElementById("note").style.display = "";	
			document.getElementById("noteimage").style.display = "";
			document.getElementById("go1").style.display = "none";				
			document.getElementById("correction5").style.display = "none";		
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
