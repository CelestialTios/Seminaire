var aideok=0;aidevok=0;nbr1=0;nbr2=0;nbr3=0;nbr4=0;nbr5=0;select1=0;select2=0;select3=0;select4=0;select5=0;note=0;

function aide()
{

if(aideok==0)
	{
		document.getElementById("aideecrite").style.display = "";
		aideok++;
	}	
else
	{
		document.getElementById("aideecrite").style.display = "none";
		aideok=0;	
	}
}

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
		document.getElementById("go1").style.display = "none";
		document.getElementById("reponse").style.display = "";
		nbr1=Math.floor(Math.random()*1000);
		while(true)
		{
		nbr2=Math.floor(Math.random()*1000);
			if (nbr2!==nbr1)
			{
			break;
			}
		}
		while(true)
		{
		nbr3=Math.floor(Math.random()*1000);
			if (nbr3!==nbr1 && nbr3!==nbr2)
			{
			break;
			}
		}
		while(true)
		{
		nbr4=Math.floor(Math.random()*1000);
			if (nbr4!==nbr1 && nbr4!==nbr2 && nbr4!==nbr3)
			{
			break;
			}
		}
		while(true)
		{
		nbr5=Math.floor(Math.random()*1000);
			if (nbr5!==nbr1 && nbr5!==nbr2 && nbr5!==nbr3 && nbr5!==nbr4)
			{
			break;
			}
		}
		document.getElementById("question").style.display = "";		
		document.getElementById("verification").style.display = "";	
		document.getElementById("nbr1").innerHTML = nbr1;
		document.getElementById("nbr2").innerHTML = nbr2;
		document.getElementById("nbr3").innerHTML = nbr3;
		document.getElementById("nbr4").innerHTML = nbr4;
		document.getElementById("nbr5").innerHTML = nbr5;

}

function selec1()
{
if(select1==0)
	{
		document.getElementById("nbr1").style.backgroundColor="rgb(192,192,192)";
		select1++;
	}
else
	{
		document.getElementById("nbr1").style.backgroundColor="white";
		select1=0;
	}
}

function selec2()
{
if(select2==0)
	{
		document.getElementById("nbr2").style.backgroundColor="rgb(192,192,192)";
		select2++;
	}
else
	{
		document.getElementById("nbr2").style.backgroundColor="white";
		select2=0;
	}
}

function selec3()
{
if(select3==0)
	{
		document.getElementById("nbr3").style.backgroundColor="rgb(193,193,193)";
		select3++;
	}
else
	{
		document.getElementById("nbr3").style.backgroundColor="white";
		select3=0;
	}
}

function selec4()
{
if(select4==0)
	{
		document.getElementById("nbr4").style.backgroundColor="rgb(194,194,194)";
		select4++;
	}
else
	{
		document.getElementById("nbr4").style.backgroundColor="white";
		select4=0;
	}
}

function selec5()
{
if(select5==0)
	{
		document.getElementById("nbr5").style.backgroundColor="rgb(195,195,195)";
		select5++;
	}
else
	{
		document.getElementById("nbr5").style.backgroundColor="white";
		select5=0;
	}
}

function compare(x, y) {
    return x - y;
}

function correction()
{
var nombres = new Array(nbr1, nbr2, nbr3, nbr4, nbr5);
nombres.sort(compare);

var rep1 = document.getElementById("reponse1").value;
var rep2 = document.getElementById("reponse2").value;
var rep3 = document.getElementById("reponse3").value;
var rep4 = document.getElementById("reponse4").value;
var rep5 = document.getElementById("reponse5").value;

if(nombres[0]==rep1)
{
note++
}
if(nombres[1]==rep2)
{
note++
}
if(nombres[2]==rep3)
{
note++
}
if(nombres[3]==rep4)
{
note++
}
if(nombres[4]==rep5)
{
note++
}
		document.getElementById("verification").style.display = "none";
if (note==5)
{
		document.getElementById("correction").innerHTML = "Correction : tout est juste";
}
else
{
		document.getElementById("correction").innerHTML = "Correction : tu as fait des erreurs<br>"+nombres[0]+" < "+nombres[1]+" < "+nombres[2]+" < "+nombres[3]+" < "+nombres[4];
}

			document.getElementById("note").style.display = "";	
			document.getElementById("noteimage").style.display = "";
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
				
				case 4 : document.getElementById("note").innerHTML = "Note : 4 sur 5<br>Continue tes efforts";
				document.getElementById("effort").style.display = "";
				break;
				
				case 5 : document.getElementById("note").innerHTML = "Note : 5 sur 5<br>Bravo !";
				document.getElementById("champion").style.display = "";
				break;
				
			}			
}

function resultat()
{
			document.getElementById("tour").style.display = "none";
			document.getElementById("note").style.display = "";	
			document.getElementById("noteimage").style.display = "";
			document.getElementById("go1").style.display = "none";			
			document.getElementById("exo1").style.display = "";		
			document.getElementById("exo2").style.display = "";	
			document.getElementById("exo3").style.display = "";	
			document.getElementById("exo4").style.display = "";	
			document.getElementById("exo5").style.display = "";			
			document.getElementById("correction1").style.display = "";		
			document.getElementById("correction2").style.display = "";		
			document.getElementById("correction3").style.display = "";		
			document.getElementById("correction4").style.display = "";		
			document.getElementById("correction5").style.display = "";		
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
