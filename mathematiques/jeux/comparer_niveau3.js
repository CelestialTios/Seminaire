var tour=1;selection1=0;note=0;aideok=0;aidevok=0;tour1=0;


function go()
{
		document.getElementById("go1").style.display = "none";
		document.getElementById("tour").style.display = "";
		document.getElementById("tour").innerHTML = "Exercice n°"+tour+" sur 5";
		switch (tour)
		{
		case 1 :
		nbr1=Math.floor(Math.random()*9999);
		nbr2=Math.floor(Math.random()*9999);
		if(nbr1==nbr2)
		{
		nbr2++;
		}
		document.getElementById("exo1").style.display = "";
		document.getElementById("go1").style.display = "none";
		document.getElementById("go1blanc").style.display = "none";
		document.getElementById("correction1").style.display = "none";
		document.getElementById("nbr1").innerHTML = nbr1;
        document.getElementById("nbr2").innerHTML = nbr2;

		tour1++;
		break;
		
		case 2 :
		nbr1=Math.floor(Math.random()*9999);
		nbr2=Math.floor(Math.random()*9999);
		if(nbr1==nbr2)
		{
		nbr2++;
		}
		document.getElementById("go1").style.display = "none";
		document.getElementById("go1blanc").style.display = "none";
		document.getElementById("correction1").style.display = "none";
		document.getElementById("nbr1").innerHTML = nbr1;
        document.getElementById("nbr2").innerHTML = nbr2;
		
		case 3 :
		nbr1=Math.floor(Math.random()*9999);
		nbr2=Math.floor(Math.random()*9999);
		if(nbr1==nbr2)
		{
		nbr2++;
		}
		document.getElementById("go1").style.display = "none";
		document.getElementById("go1blanc").style.display = "none";
		document.getElementById("correction1").style.display = "none";
		document.getElementById("nbr1").innerHTML = nbr1;
        document.getElementById("nbr2").innerHTML = nbr2;
		break;
		
		case 4 :
		nbr1=Math.floor(Math.random()*9999);
		nbr2=Math.floor(Math.random()*9999);
		if(nbr1==nbr2)
		{
		nbr2++;
		}
		document.getElementById("go1").style.display = "none";
		document.getElementById("go1blanc").style.display = "none";
		document.getElementById("correction1").style.display = "none";
		document.getElementById("nbr1").innerHTML = nbr1;
        document.getElementById("nbr2").innerHTML = nbr2;
		break;
		
		case 5 :
		nbr1=Math.floor(Math.random()*9999);
		nbr2=Math.floor(Math.random()*9999);
		if(nbr1==nbr2)
		{
		nbr2++;
		}
		document.getElementById("go1").style.display = "none";
		document.getElementById("go1blanc").style.display = "none";
		document.getElementById("correction1").style.display = "none";
		document.getElementById("nbr1").innerHTML = nbr1;
        document.getElementById("nbr2").innerHTML = nbr2;
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
				if(nbr1 > nbr2)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr1 < nbr2)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : < ";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
			document.getElementById("correction1").style.display = "";
			break;
			
			case 2 :
				if(nbr1 > nbr2)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr1 < nbr2)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : < ";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
			document.getElementById("correction1").style.display = "";
			break;
			
			case 3 :
				if(nbr1 > nbr2)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr1 < nbr2)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : < ";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
			document.getElementById("correction1").style.display = "";
			break;
			
			case 4 :
				if(nbr1 > nbr2)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr1 < nbr2)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : < ";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
			document.getElementById("correction1").style.display = "";
			break;
			
			case 5 :
				if(nbr1 > nbr2)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr1 < nbr2)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : < ";
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
				if(nbr1 < nbr2)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr1 > nbr2)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : > ";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
			document.getElementById("correction1").style.display = "";
			break;
			
			case 2 :
				if(nbr1 < nbr2)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr1 > nbr2)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : > ";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
			document.getElementById("correction1").style.display = "";
			break;
			
			case 3 :
				if(nbr1 < nbr2)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr1 > nbr2)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : < ";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
			document.getElementById("correction1").style.display = "";
			break;
			
			case 4 :
				if(nbr1 < nbr2)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr1 > nbr2)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : < ";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
			document.getElementById("correction1").style.display = "";
			break;
			
			case 5 :
				if(nbr1 < nbr2)
				{
				note++;
				document.getElementById("correction1").innerHTML = "Bonne réponse";
				document.getElementById("go1").style.display = "";
				document.getElementById("go1blanc").style.display = "none";
				tour++;
				}
				if(nbr1 > nbr2)
				{
				document.getElementById("correction1").innerHTML = "Erreur, il fallait choisir : < ";
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
