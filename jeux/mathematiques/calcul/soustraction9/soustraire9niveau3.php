<html>
	<head>
		<link rel="stylesheet" href="../../style.css" media="screen" />
		<link rel="stylesheet" href="../../imprime.css" media="print"/>
		<script type="text/javascript"></script>
		<link rel="icon" href="../../img/favico.png" />
		<link href="../../css/custom.css" rel="stylesheet">
		<link href="../../css/all.css" rel="stylesheet">
		<script src="../../js/popper.min.js"></script>
		<script src="../../js/jquery.min.js"></script>
		<script src="../../js/bootstrap.min.js"></script>
		<meta name="description" content="Jeu de la soustraction de 9, niveau expert" />
		<meta charset="utf-8" />
		<title>Soustraction de 9 niveau expert</title>
	</head>
<?php
			include 'menu.php';
		?>
	<style>
		body
		{
		font-family:cursive,Calibri;
		}
		.bouton
		{
		background:#F1E791;width:94px;height:33px;float:left;border-radius:5%;border:1px solid black;
		line-height:33px;text-align:center;cursor:pointer;
		}
	</style>
	
	<body onload="rebours();">
		<div style="width:960px;margin:auto;position:relative">
			<div id="indication" style="float:left;">
				<div id="chrono" style="background:#95C450;text-align:right;width:120px;height:25px;line-height:25px;color:white;padding-right:5px;float:left;margin-right:210px"></div>
			</div>
		
		<div id="operation" style="height:100px;width:300px;font-size:60px;float:left;color:white;background:#95C450;text-align:center;line-height:100px;;float:left;margin-right:50px"></div>
		<img src="fond.jpg">
		<img src="kangourou_1.png" id="voiture1" style="position:absolute;left:10px;top:180px;width:50px">
		<img src="kangourou_2.png" id="voiture2" style="position:absolute;left:10px;top:215px;width:50px">
		<div id="compterebours" style="display:none;font-size:300px;position:absolute;top:100px;left:230px;color:white;background:black;width:500px;border-radius:10px;text-align:center"></div>
		<div id="encore" style="display:none;position:absolute; top:200px;left:300px">
			<form action="soustraire9niveau3.php" method="POST">
				<input type="submit" value="Recommencer" name="Recommencer" style="width:150px;height:50px;border-radius:10px;border:none;color:white;background:#95C450;font-size:18px;cursor:pointer">
				<input type="hidden" name="temps" value="tempsenregistre" id="tempsenregistre1">
			</form>
		</div>
		<div id="quitter" style="display:none;position:absolute; top:200px;left:500px">
			<form action="../../mathematiques_jeux_calculs.php" method="POST">
				<input type="submit" value="Quitter" name="Quitter" style="width:150px;height:50px;border-radius:10px;border:none;color:white;background:#95C450;font-size:18px;cursor:pointer">		
				<input type="hidden" name="temps" value="tempsenregistre" id="tempsenregistre2">
			</form>
		</div>
		<br>
		<br>
	<div style="margin-top:-4px">	
		<div class="bouton" id="nbr1" onclick="avanceok1()">1</div>
		<div class="bouton" id="nbr2" onclick="avanceok2()">2</div>
		<div class="bouton" id="nbr3" onclick="avanceok3()">3</div>
		<div class="bouton" id="nbr4"  onclick="avanceok4()">4</div>
		<div class="bouton" id="nbr5"  onclick="avanceok5()">5</div>
		<div class="bouton" id="nbr6"  onclick="avanceok6()">6</div>
		<div class="bouton" id="nbr7"  onclick="avanceok7()">7</div>
		<div class="bouton" id="nbr8"  onclick="avanceok8()">8</div>
		<div class="bouton" id="nbr9"  onclick="avanceok9()">9</div>
		<div class="bouton" id="nbr10"  onclick="avanceok10()">10</div>
		<div class="bouton" id="nbr11" onclick="avanceok11()">11</div>
		<div class="bouton" id="nbr12"  onclick="avanceok12()">12</div>
		<div class="bouton" id="nbr13"  onclick="avanceok13()">13</div>
		<div class="bouton" id="nbr14"  onclick="avanceok14()">14</div>
		<div class="bouton" id="nbr15"  onclick="avanceok15()">15</div>
		<div class="bouton" id="nbr16"  onclick="avanceok16()">16</div>
		<div class="bouton" id="nbr17"  onclick="avanceok17()">17</div>
		<div class="bouton" id="nbr18"  onclick="avanceok18()">18</div>
		<div class="bouton" id="nbr19"  onclick="avanceok19()">19</div>
		<div class="bouton" id="nbr20"  onclick="avanceok20()">20</div>
		<div class="bouton" id="nbr21" onclick="avanceok21()">21</div>
		<div class="bouton" id="nbr22"  onclick="avanceok22()">22</div>
		<div class="bouton" id="nbr23"  onclick="avanceok23()">23</div>
		<div class="bouton" id="nbr24"  onclick="avanceok24()">24</div>
		<div class="bouton" id="nbr25"  onclick="avanceok25()">25</div>
		<div class="bouton" id="nbr26"  onclick="avanceok26()">26</div>
		<div class="bouton" id="nbr27"  onclick="avanceok27()">27</div>
		<div class="bouton" id="nbr28"  onclick="avanceok28()">28</div>
		<div class="bouton" id="nbr29"  onclick="avanceok29()">29</div>
		<div class="bouton" id="nbr30"  onclick="avanceok30()">30</div>
		<div class="bouton" id="nbr31" onclick="avanceok31()">31</div>
		<div class="bouton" id="nbr32"  onclick="avanceok32()">32</div>
		<div class="bouton" id="nbr33"  onclick="avanceok33()">33</div>
		<div class="bouton" id="nbr34"  onclick="avanceok34()">34</div>
		<div class="bouton" id="nbr35"  onclick="avanceok35()">35</div>
		<div class="bouton" id="nbr36"  onclick="avanceok36()">36</div>
		<div class="bouton" id="nbr37"  onclick="avanceok37()">37</div>
		<div class="bouton" id="nbr38"  onclick="avanceok38()">38</div>
		<div class="bouton" id="nbr39"  onclick="avanceok39()">39</div>
		<div class="bouton" id="nbr40"  onclick="avanceok40()">40</div>
		<div class="bouton" id="nbr41" onclick="avanceok41()">41</div>
		<div class="bouton" id="nbr42"  onclick="avanceok42()">42</div>
		<div class="bouton" id="nbr43"  onclick="avanceok43()">43</div>
		<div class="bouton" id="nbr44"  onclick="avanceok44()">44</div>
		<div class="bouton" id="nbr45"  onclick="avanceok45()">45</div>
		<div class="bouton" id="nbr46"  onclick="avanceok46()">46</div>
		<div class="bouton" id="nbr47"  onclick="avanceok47()">47</div>
		<div class="bouton" id="nbr48"  onclick="avanceok48()">48</div>
		<div class="bouton" id="nbr49"  onclick="avanceok49()">49</div>
		<div class="bouton" id="nbr50"  onclick="avanceok50()">50</div>
		<div class="bouton" id="nbr51" onclick="avanceok51()">51</div>
		<div class="bouton" id="nbr52"  onclick="avanceok52()">52</div>
		<div class="bouton" id="nbr53"  onclick="avanceok53()">53</div>
		<div class="bouton" id="nbr54"  onclick="avanceok54()">54</div>
		<div class="bouton" id="nbr55"  onclick="avanceok55()">55</div>
		<div class="bouton" id="nbr56"  onclick="avanceok56()">56</div>
		<div class="bouton" id="nbr57"  onclick="avanceok57()">57</div>
		<div class="bouton" id="nbr58"  onclick="avanceok58()">58</div>
		<div class="bouton" id="nbr59"  onclick="avanceok59()">59</div>
		<div class="bouton" id="nbr60"  onclick="avanceok60()">60</div>
		<div class="bouton" id="nbr61" onclick="avanceok61()">61</div>
		<div class="bouton" id="nbr62"  onclick="avanceok62()">62</div>
		<div class="bouton" id="nbr63"  onclick="avanceok63()">63</div>
		<div class="bouton" id="nbr64"  onclick="avanceok64()">64</div>
		<div class="bouton" id="nbr65"  onclick="avanceok65()">65</div>
		<div class="bouton" id="nbr66"  onclick="avanceok66()">66</div>
		<div class="bouton" id="nbr67"  onclick="avanceok67()">67</div>
		<div class="bouton" id="nbr68"  onclick="avanceok68()">68</div>
		<div class="bouton" id="nbr69"  onclick="avanceok69()">69</div>
		<div class="bouton" id="nbr70"  onclick="avanceok70()">70</div>
		<div class="bouton" id="nbr71" onclick="avanceok71()">71</div>
		<div class="bouton" id="nbr72"  onclick="avanceok72()">72</div>
		<div class="bouton" id="nbr73"  onclick="avanceok73()">73</div>
		<div class="bouton" id="nbr74"  onclick="avanceok74()">74</div>
		<div class="bouton" id="nbr75"  onclick="avanceok75()">75</div>
		<div class="bouton" id="nbr76"  onclick="avanceok76()">76</div>
		<div class="bouton" id="nbr77"  onclick="avanceok77()">77</div>
		<div class="bouton" id="nbr78"  onclick="avanceok78()">78</div>
		<div class="bouton" id="nbr79"  onclick="avanceok79()">79</div>
		<div class="bouton" id="nbr80"  onclick="avanceok80()">80</div>
		<div class="bouton" id="nbr81" onclick="avanceok81()">81</div>
		<div class="bouton" id="nbr82"  onclick="avanceok82()">82</div>
		<div class="bouton" id="nbr83"  onclick="avanceok83()">83</div>
		<div class="bouton" id="nbr84"  onclick="avanceok84()">84</div>
		<div class="bouton" id="nbr85"  onclick="avanceok85()">85</div>
		<div class="bouton" id="nbr86" onclick="avanceok86()">86</div>
		<div class="bouton" id="nbr87"  onclick="avanceok87()">87</div>
		<div class="bouton" id="nbr88"  onclick="avanceok88()">88</div>
		<div class="bouton" id="nbr89"  onclick="avanceok89()">89</div>
		<div class="bouton" id="nbr90"  onclick="avanceok90()">90</div>
		<div class="bouton" id="nbr91" onclick="avanceok91()">91</div>
		<div class="bouton" id="nbr92"  onclick="avanceok92()">92</div>
		<div class="bouton" id="nbr93"  onclick="avanceok93()">93</div>
		<div class="bouton" id="nbr94"  onclick="avanceok94()">94</div>
		<div class="bouton" id="nbr95"  onclick="avanceok95()">95</div>
		<div class="bouton" id="nbr96" onclick="avanceok96()">96</div>
		<div class="bouton" id="nbr97"  onclick="avanceok97()">97</div>
		<div class="bouton" id="nbr98"  onclick="avanceok98()">98</div>
		<div class="bouton" id="nbr99"  onclick="avanceok99()">99</div>
		<div class="bouton" id="nbr100"  onclick="avanceok100()">100</div>
	</div>
</div>
</body>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-166118568-1"></script>
	<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-166118568-1');
	</script>

</html>

<script>
var i=10
var tictac=0;
var moi=0;
var avancevoiture=0;
var ouestmavoiture=10;
var liste=[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109];
var listehasard=[];
var nbroperation=0;
var operateur = 9;
var reponseautorise=1;
var tempsarrivee;
var arrivee1=0;
var arrivee2=0;
var tempsrebours=3;
var record = -0.02;
var recordperso = 0;

function rebours()
{
document.getElementById("compterebours").style.display="";	
document.getElementById("compterebours").innerHTML=tempsrebours;
timerrebours = setInterval('attenterebours()',1000);
}

function attenterebours()
{
	tempsrebours--;
	document.getElementById("compterebours").innerHTML=tempsrebours;
	if(tempsrebours==0)
	{
		clearInterval(timerrebours);
		document.getElementById("compterebours").style.display="none";
		depart();
	}
}

function vroum()
{
player = document.getElementById("s1");player.play()
}

function depart()
{
timerId = setInterval('chrono()',10);
	for(var i=0;i<10;i++)
	{
	aleatoire=Math.floor(Math.random()*liste.length);
	listehasard.push(liste[aleatoire]);
	retire = liste.splice(aleatoire,1);
	}
	
deplaceAvant();
	go();
}

function fin()
{
arrivee2++;
if(arrivee1==0)
{
	document.getElementById("operation").innerHTML="Victoire !";	
}
else
{
	document.getElementById("operation").innerHTML="Perdu !";	
}
clearInterval(timerId);
	tempsarrivee=tictac;
	document.getElementById("encore").style.display="";
	document.getElementById("quitter").style.display="";
	document.getElementById("tempsenregistre1").value=tempsarrivee;
	document.getElementById("tempsenregistre2").value=tempsarrivee;
	if(tempsarrivee/100<recordperso)
	{
		document.getElementById("recordpersooupas").style.display="";
	}
	if(tempsarrivee/100<record)
	{
		document.getElementById("recorddumondeoupas").style.display="";
		document.getElementById("recordpersooupas").style.display="none";
	}
}

function go()
{
	if(nbroperation>9)
	{
	setTimeout(fin,1000);
	finmoi();
	}
	else
	{
		document.getElementById("operation").innerHTML=listehasard[nbroperation]+" - "+operateur;
	}


}

function chrono()
{
    document.getElementById("chrono").innerHTML = tictac/100+" s";
 
    tictac++;

}

function finavancemoi()
{
	moi++;
	if(moi<45)
	{
	setTimeout(finmoi,5);	
	}
else
{
	ouestmavoiture=ouestmavoiture+moi;
moi=0;
suite();
	}
}

function finmoi()
{
	document.getElementById("voiture2").style.left=ouestmavoiture+moi+"px";
	finavancemoi();	
}

function avancemoi()
{
	moi++;
	if(moi<85 && avancevoiture==1)
	{
	setTimeout(avance,5);	
	}
else
{
avancevoiture=0;
	ouestmavoiture=ouestmavoiture+moi;
moi=0;
suite();
	}
}

function avancego()
{
avancevoiture=1;
avance();
}

function avance()
{
	document.getElementById("voiture2").style.left=ouestmavoiture+moi+"px";
	avancemoi();
}
function suite()
{}

function attente()
{
		i++;
	if(i<861 && arrivee2==0)
	{
	setTimeout(deplaceAvant,70);	
	}
	if(i>860)
	{
	arrivee1++;
	finordi();
	}
}

function deplaceAvant()
{

document.getElementById("voiture1").style.left=i+"px";
attente();
}

function attentefin()
{
		i++;
	if(i<911)
	{
	setTimeout(finordi,70);	
	}
	if(i>910)
	{

	suite();
	}
}

function finordi()
{
document.getElementById("voiture1").style.left=i+"px";
attentefin();	
}

function avanceok1()
{
	if(listehasard[nbroperation]-operateur!==1 && reponseautorise==1)
	{
		document.getElementById("nbr1").style.background="red";
		reponsefausseattente1();
	}
	if(listehasard[nbroperation]-operateur==1 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente1()
{
	reponseautorise=0;
	setTimeout(reponseok1,500);
}
function reponseok1()
{
	document.getElementById("nbr1").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok2()
{
	if(listehasard[nbroperation]-operateur!==2 && reponseautorise==1)
	{
		document.getElementById("nbr2").style.background="red";
		reponsefausseattente2();
	}
	if(listehasard[nbroperation]-operateur==2 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente2()
{
	reponseautorise=0;
	setTimeout(reponseok2,500);
}
function reponseok2()
{
	document.getElementById("nbr2").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok3()
{
	if(listehasard[nbroperation]-operateur!==3 && reponseautorise==1)
	{
		document.getElementById("nbr3").style.background="red";
		reponsefausseattente3();
	}
	if(listehasard[nbroperation]-operateur==3 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente3()
{
	reponseautorise=0;
	setTimeout(reponseok3,500);
}
function reponseok3()
{
	document.getElementById("nbr3").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok4()
{
	if(listehasard[nbroperation]-operateur!==4 && reponseautorise==1)
	{
		document.getElementById("nbr4").style.background="red";
		reponsefausseattente4();
	}
	if(listehasard[nbroperation]-operateur==4 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente4()
{
	reponseautorise=0;
	setTimeout(reponseok4,500);
}
function reponseok4()
{
	document.getElementById("nbr4").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok5()
{
	if(listehasard[nbroperation]-operateur!==5 && reponseautorise==1)
	{
		document.getElementById("nbr5").style.background="red";
		reponsefausseattente5();
	}
	if(listehasard[nbroperation]-operateur==5 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente5()
{
	reponseautorise=0;
	setTimeout(reponseok5,500);
}
function reponseok5()
{
	document.getElementById("nbr5").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok6()
{
	if(listehasard[nbroperation]-operateur!==6 && reponseautorise==1)
	{
		document.getElementById("nbr6").style.background="red";
		reponsefausseattente6();
	}
	if(listehasard[nbroperation]-operateur==6 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente6()
{
	reponseautorise=0;
	setTimeout(reponseok6,500);
}
function reponseok6()
{
	document.getElementById("nbr6").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok7()
{
	if(listehasard[nbroperation]-operateur!==7 && reponseautorise==1)
	{
		document.getElementById("nbr7").style.background="red";
		reponsefausseattente7();
	}
	if(listehasard[nbroperation]-operateur==7 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente7()
{
	reponseautorise=0;
	setTimeout(reponseok7,500);
}
function reponseok7()
{
	document.getElementById("nbr7").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok8()
{
	if(listehasard[nbroperation]-operateur!==8 && reponseautorise==1)
	{
		document.getElementById("nbr8").style.background="red";
		reponsefausseattente8();
	}
	if(listehasard[nbroperation]-operateur==8 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}

}
function reponsefausseattente8()
{
	reponseautorise=0;
	setTimeout(reponseok8,500);
}
function reponseok8()
{
	document.getElementById("nbr8").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok9()
{
	if(listehasard[nbroperation]-operateur!==9 && reponseautorise==1)
	{
		document.getElementById("nbr9").style.background="red";
		reponsefausseattente9();
	}
	if(listehasard[nbroperation]-operateur==9 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente9()
{
	reponseautorise=0;
	setTimeout(reponseok9,500);
}
function reponseok9()
{
	document.getElementById("nbr9").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok10()
{
	if(listehasard[nbroperation]-operateur!==10 && reponseautorise==1)
	{
		document.getElementById("nbr10").style.background="red";
		reponsefausseattente10();
	}
	if(listehasard[nbroperation]-operateur==10 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente10()
{
	reponseautorise=0;
	setTimeout(reponseok10,500);
}
function reponseok10()
{
	document.getElementById("nbr10").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok11()
{
	if(listehasard[nbroperation]-operateur!==11 && reponseautorise==1)
	{
		document.getElementById("nbr11").style.background="red";
		reponsefausseattente11();
	}
	if(listehasard[nbroperation]-operateur==11 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente11()
{
	reponseautorise=0;
	setTimeout(reponseok11,500);
}
function reponseok11()
{
	document.getElementById("nbr11").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok12()
{
	if(listehasard[nbroperation]-operateur!==12 && reponseautorise==1)
	{
		document.getElementById("nbr12").style.background="red";
		reponsefausseattente12();
	}
	if(listehasard[nbroperation]-operateur==12 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente12()
{
	reponseautorise=0;
	setTimeout(reponseok12,500);
}
function reponseok12()
{
	document.getElementById("nbr12").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok13()
{
	if(listehasard[nbroperation]-operateur!==13 && reponseautorise==1)
	{
		document.getElementById("nbr13").style.background="red";
		reponsefausseattente13();
	}
	if(listehasard[nbroperation]-operateur==13 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente13()
{
	reponseautorise=0;
	setTimeout(reponseok13,500);
}
function reponseok13()
{
	document.getElementById("nbr13").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok14()
{
	if(listehasard[nbroperation]-operateur!==14 && reponseautorise==1)
	{
		document.getElementById("nbr14").style.background="red";
		reponsefausseattente14();
	}
	if(listehasard[nbroperation]-operateur==14 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente14()
{
	reponseautorise=0;
	setTimeout(reponseok14,500);
}
function reponseok14()
{
	document.getElementById("nbr14").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok15()
{
	if(listehasard[nbroperation]-operateur!==15 && reponseautorise==1)
	{
		document.getElementById("nbr15").style.background="red";
		reponsefausseattente15();
	}
	if(listehasard[nbroperation]-operateur==15 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente15()
{
	reponseautorise=0;
	setTimeout(reponseok15,500);
}
function reponseok15()
{
	document.getElementById("nbr15").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok16()
{
	if(listehasard[nbroperation]-operateur!==16 && reponseautorise==1)
	{
		document.getElementById("nbr16").style.background="red";
		reponsefausseattente16();
	}
	if(listehasard[nbroperation]-operateur==16 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente16()
{
	reponseautorise=0;
	setTimeout(reponseok16,500);
}
function reponseok16()
{
	document.getElementById("nbr16").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok17()
{
	if(listehasard[nbroperation]-operateur!==17 && reponseautorise==1)
	{
		document.getElementById("nbr17").style.background="red";
		reponsefausseattente17();
	}
	if(listehasard[nbroperation]-operateur==17 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente17()
{
	reponseautorise=0;
	setTimeout(reponseok17,500);
}
function reponseok17()
{
	document.getElementById("nbr17").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok18()
{
	if(listehasard[nbroperation]-operateur!==18 && reponseautorise==1)
	{
		document.getElementById("nbr18").style.background="red";
		reponsefausseattente18();
	}
	if(listehasard[nbroperation]-operateur==18 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente18()
{
	reponseautorise=0;
	setTimeout(reponseok18,500);
}
function reponseok18()
{
	document.getElementById("nbr18").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok19()
{
	if(listehasard[nbroperation]-operateur!==19 && reponseautorise==1)
	{
		document.getElementById("nbr19").style.background="red";
		reponsefausseattente19();
	}
	if(listehasard[nbroperation]-operateur==19 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente19()
{
	reponseautorise=0;
	setTimeout(reponseok19,500);
}
function reponseok19()
{
	document.getElementById("nbr19").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok20()
{
	if(listehasard[nbroperation]-operateur!==20 && reponseautorise==1)
	{
		document.getElementById("nbr20").style.background="red";
		reponsefausseattente20();
	}
	if(listehasard[nbroperation]-operateur==20 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente20()
{
	reponseautorise=0;
	setTimeout(reponseok20,500);
}
function reponseok20()
{
	document.getElementById("nbr20").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok21()
{
	if(listehasard[nbroperation]-operateur!==21 && reponseautorise==1)
	{
		document.getElementById("nbr21").style.background="red";
		reponsefausseattente21();
	}
	if(listehasard[nbroperation]-operateur==21 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente21()
{
	reponseautorise=0;
	setTimeout(reponseok21,500);
}
function reponseok21()
{
	document.getElementById("nbr21").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok22()
{
	if(listehasard[nbroperation]-operateur!==22 && reponseautorise==1)
	{
		document.getElementById("nbr22").style.background="red";
		reponsefausseattente22();
	}
	if(listehasard[nbroperation]-operateur==22 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente22()
{
	reponseautorise=0;
	setTimeout(reponseok22,500);
}
function reponseok22()
{
	document.getElementById("nbr22").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok23()
{
	if(listehasard[nbroperation]-operateur!==23 && reponseautorise==1)
	{
		document.getElementById("nbr23").style.background="red";
		reponsefausseattente23();
	}
	if(listehasard[nbroperation]-operateur==23 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente23()
{
	reponseautorise=0;
	setTimeout(reponseok23,500);
}
function reponseok23()
{
	document.getElementById("nbr23").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok24()
{
	if(listehasard[nbroperation]-operateur!==24 && reponseautorise==1)
	{
		document.getElementById("nbr24").style.background="red";
		reponsefausseattente24();
	}
	if(listehasard[nbroperation]-operateur==24 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente24()
{
	reponseautorise=0;
	setTimeout(reponseok24,500);
}
function reponseok24()
{
	document.getElementById("nbr24").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok25()
{
	if(listehasard[nbroperation]-operateur!==25 && reponseautorise==1)
	{
		document.getElementById("nbr25").style.background="red";
		reponsefausseattente25();
	}
	if(listehasard[nbroperation]-operateur==25 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente25()
{
	reponseautorise=0;
	setTimeout(reponseok25,500);
}
function reponseok25()
{
	document.getElementById("nbr25").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok26()
{
	if(listehasard[nbroperation]-operateur!==26 && reponseautorise==1)
	{
		document.getElementById("nbr26").style.background="red";
		reponsefausseattente26();
	}
	if(listehasard[nbroperation]-operateur==26 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente26()
{
	reponseautorise=0;
	setTimeout(reponseok26,500);
}
function reponseok26()
{
	document.getElementById("nbr26").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok27()
{
	if(listehasard[nbroperation]-operateur!==27 && reponseautorise==1)
	{
		document.getElementById("nbr27").style.background="red";
		reponsefausseattente27();
	}
	if(listehasard[nbroperation]-operateur==27 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente27()
{
	reponseautorise=0;
	setTimeout(reponseok27,500);
}
function reponseok27()
{
	document.getElementById("nbr27").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok28()
{
	if(listehasard[nbroperation]-operateur!==28 && reponseautorise==1)
	{
		document.getElementById("nbr28").style.background="red";
		reponsefausseattente28();
	}
	if(listehasard[nbroperation]-operateur==28 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente28()
{
	reponseautorise=0;
	setTimeout(reponseok28,500);
}
function reponseok28()
{
	document.getElementById("nbr28").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok29()
{
	if(listehasard[nbroperation]-operateur!==29 && reponseautorise==1)
	{
		document.getElementById("nbr29").style.background="red";
		reponsefausseattente29();
	}
	if(listehasard[nbroperation]-operateur==29 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente29()
{
	reponseautorise=0;
	setTimeout(reponseok29,500);
}
function reponseok29()
{
	document.getElementById("nbr29").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok30()
{
	if(listehasard[nbroperation]-operateur!==30 && reponseautorise==1)
	{
		document.getElementById("nbr30").style.background="red";
		reponsefausseattente30();
	}
	if(listehasard[nbroperation]-operateur==30 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente30()
{
	reponseautorise=0;
	setTimeout(reponseok30,500);
}
function reponseok30()
{
	document.getElementById("nbr30").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok31()
{
	if(listehasard[nbroperation]-operateur!==31 && reponseautorise==1)
	{
		document.getElementById("nbr31").style.background="red";
		reponsefausseattente31();
	}
	if(listehasard[nbroperation]-operateur==31 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente31()
{
	reponseautorise=0;
	setTimeout(reponseok31,500);
}
function reponseok31()
{
	document.getElementById("nbr31").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok32()
{
	if(listehasard[nbroperation]-operateur!==32 && reponseautorise==1)
	{
		document.getElementById("nbr32").style.background="red";
		reponsefausseattente32();
	}
	if(listehasard[nbroperation]-operateur==32 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente32()
{
	reponseautorise=0;
	setTimeout(reponseok32,500);
}
function reponseok32()
{
	document.getElementById("nbr32").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok33()
{
	if(listehasard[nbroperation]-operateur!==33 && reponseautorise==1)
	{
		document.getElementById("nbr33").style.background="red";
		reponsefausseattente33();
	}
	if(listehasard[nbroperation]-operateur==33 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente33()
{
	reponseautorise=0;
	setTimeout(reponseok33,500);
}
function reponseok33()
{
	document.getElementById("nbr33").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok34()
{
	if(listehasard[nbroperation]-operateur!==34 && reponseautorise==1)
	{
		document.getElementById("nbr34").style.background="red";
		reponsefausseattente34();
	}
	if(listehasard[nbroperation]-operateur==34 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente34()
{
	reponseautorise=0;
	setTimeout(reponseok34,500);
}
function reponseok34()
{
	document.getElementById("nbr34").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok35()
{
	if(listehasard[nbroperation]-operateur!==35 && reponseautorise==1)
	{
		document.getElementById("nbr35").style.background="red";
		reponsefausseattente35();
	}
	if(listehasard[nbroperation]-operateur==35 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente35()
{
	reponseautorise=0;
	setTimeout(reponseok35,500);
}
function reponseok35()
{
	document.getElementById("nbr35").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok36()
{
	if(listehasard[nbroperation]-operateur!==36 && reponseautorise==1)
	{
		document.getElementById("nbr36").style.background="red";
		reponsefausseattente36();
	}
	if(listehasard[nbroperation]-operateur==36 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente36()
{
	reponseautorise=0;
	setTimeout(reponseok36,500);
}
function reponseok36()
{
	document.getElementById("nbr36").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok37()
{
	if(listehasard[nbroperation]-operateur!==37 && reponseautorise==1)
	{
		document.getElementById("nbr37").style.background="red";
		reponsefausseattente37();
	}
	if(listehasard[nbroperation]-operateur==37 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente37()
{
	reponseautorise=0;
	setTimeout(reponseok37,500);
}
function reponseok37()
{
	document.getElementById("nbr37").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok38()
{
	if(listehasard[nbroperation]-operateur!==38 && reponseautorise==1)
	{
		document.getElementById("nbr38").style.background="red";
		reponsefausseattente38();
	}
	if(listehasard[nbroperation]-operateur==38 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente38()
{
	reponseautorise=0;
	setTimeout(reponseok38,500);
}
function reponseok38()
{
	document.getElementById("nbr38").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok39()
{
	if(listehasard[nbroperation]-operateur!==39 && reponseautorise==1)
	{
		document.getElementById("nbr39").style.background="red";
		reponsefausseattente39();
	}
	if(listehasard[nbroperation]-operateur==39 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente39()
{
	reponseautorise=0;
	setTimeout(reponseok39,500);
}
function reponseok39()
{
	document.getElementById("nbr39").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok40()
{
	if(listehasard[nbroperation]-operateur!==40 && reponseautorise==1)
	{
		document.getElementById("nbr40").style.background="red";
		reponsefausseattente40();
	}
	if(listehasard[nbroperation]-operateur==40 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente40()
{
	reponseautorise=0;
	setTimeout(reponseok40,500);
}
function reponseok40()
{
	document.getElementById("nbr40").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok41()
{
	if(listehasard[nbroperation]-operateur!==41 && reponseautorise==1)
	{
		document.getElementById("nbr41").style.background="red";
		reponsefausseattente41();
	}
	if(listehasard[nbroperation]-operateur==41 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente41()
{
	reponseautorise=0;
	setTimeout(reponseok41,500);
}
function reponseok41()
{
	document.getElementById("nbr41").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok42()
{
	if(listehasard[nbroperation]-operateur!==42 && reponseautorise==1)
	{
		document.getElementById("nbr42").style.background="red";
		reponsefausseattente42();
	}
	if(listehasard[nbroperation]-operateur==42 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente42()
{
	reponseautorise=0;
	setTimeout(reponseok42,500);
}
function reponseok42()
{
	document.getElementById("nbr42").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok43()
{
	if(listehasard[nbroperation]-operateur!==43 && reponseautorise==1)
	{
		document.getElementById("nbr43").style.background="red";
		reponsefausseattente43();
	}
	if(listehasard[nbroperation]-operateur==43 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente43()
{
	reponseautorise=0;
	setTimeout(reponseok43,500);
}
function reponseok43()
{
	document.getElementById("nbr43").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok44()
{
	if(listehasard[nbroperation]-operateur!==44 && reponseautorise==1)
	{
		document.getElementById("nbr44").style.background="red";
		reponsefausseattente44();
	}
	if(listehasard[nbroperation]-operateur==44 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente44()
{
	reponseautorise=0;
	setTimeout(reponseok44,500);
}
function reponseok44()
{
	document.getElementById("nbr44").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok45()
{
	if(listehasard[nbroperation]-operateur!==45 && reponseautorise==1)
	{
		document.getElementById("nbr45").style.background="red";
		reponsefausseattente45();
	}
	if(listehasard[nbroperation]-operateur==45 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente45()
{
	reponseautorise=0;
	setTimeout(reponseok45,500);
}
function reponseok45()
{
	document.getElementById("nbr45").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok46()
{
	if(listehasard[nbroperation]-operateur!==46 && reponseautorise==1)
	{
		document.getElementById("nbr46").style.background="red";
		reponsefausseattente46();
	}
	if(listehasard[nbroperation]-operateur==46 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente46()
{
	reponseautorise=0;
	setTimeout(reponseok46,500);
}
function reponseok46()
{
	document.getElementById("nbr46").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok47()
{
	if(listehasard[nbroperation]-operateur!==47 && reponseautorise==1)
	{
		document.getElementById("nbr47").style.background="red";
		reponsefausseattente47();
	}
	if(listehasard[nbroperation]-operateur==47 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente47()
{
	reponseautorise=0;
	setTimeout(reponseok47,500);
}
function reponseok47()
{
	document.getElementById("nbr47").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok48()
{
	if(listehasard[nbroperation]-operateur!==48 && reponseautorise==1)
	{
		document.getElementById("nbr48").style.background="red";
		reponsefausseattente48();
	}
	if(listehasard[nbroperation]-operateur==48 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente48()
{
	reponseautorise=0;
	setTimeout(reponseok48,500);
}
function reponseok48()
{
	document.getElementById("nbr48").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok49()
{
	if(listehasard[nbroperation]-operateur!==49 && reponseautorise==1)
	{
		document.getElementById("nbr49").style.background="red";
		reponsefausseattente49();
	}
	if(listehasard[nbroperation]-operateur==49 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente49()
{
	reponseautorise=0;
	setTimeout(reponseok49,500);
}
function reponseok49()
{
	document.getElementById("nbr49").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok50()
{
	if(listehasard[nbroperation]-operateur!==50 && reponseautorise==1)
	{
		document.getElementById("nbr50").style.background="red";
		reponsefausseattente50();
	}
	if(listehasard[nbroperation]-operateur==50 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente50()
{
	reponseautorise=0;
	setTimeout(reponseok50,500);
}
function reponseok50()
{
	document.getElementById("nbr50").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok51()
{
	if(listehasard[nbroperation]-operateur!==51 && reponseautorise==1)
	{
		document.getElementById("nbr51").style.background="red";
		reponsefausseattente51();
	}
	if(listehasard[nbroperation]-operateur==51 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente51()
{
	reponseautorise=0;
	setTimeout(reponseok51,500);
}
function reponseok51()
{
	document.getElementById("nbr51").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok52()
{
	if(listehasard[nbroperation]-operateur!==52 && reponseautorise==1)
	{
		document.getElementById("nbr52").style.background="red";
		reponsefausseattente52();
	}
	if(listehasard[nbroperation]-operateur==52 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente52()
{
	reponseautorise=0;
	setTimeout(reponseok52,500);
}
function reponseok52()
{
	document.getElementById("nbr52").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok53()
{
	if(listehasard[nbroperation]-operateur!==53 && reponseautorise==1)
	{
		document.getElementById("nbr53").style.background="red";
		reponsefausseattente53();
	}
	if(listehasard[nbroperation]-operateur==53 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente53()
{
	reponseautorise=0;
	setTimeout(reponseok53,500);
}
function reponseok53()
{
	document.getElementById("nbr53").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok54()
{
	if(listehasard[nbroperation]-operateur!==54 && reponseautorise==1)
	{
		document.getElementById("nbr54").style.background="red";
		reponsefausseattente54();
	}
	if(listehasard[nbroperation]-operateur==54 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente54()
{
	reponseautorise=0;
	setTimeout(reponseok54,500);
}
function reponseok54()
{
	document.getElementById("nbr54").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok55()
{
	if(listehasard[nbroperation]-operateur!==55 && reponseautorise==1)
	{
		document.getElementById("nbr55").style.background="red";
		reponsefausseattente55();
	}
	if(listehasard[nbroperation]-operateur==55 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente55()
{
	reponseautorise=0;
	setTimeout(reponseok55,500);
}
function reponseok55()
{
	document.getElementById("nbr55").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok56()
{
	if(listehasard[nbroperation]-operateur!==56 && reponseautorise==1)
	{
		document.getElementById("nbr56").style.background="red";
		reponsefausseattente56();
	}
	if(listehasard[nbroperation]-operateur==56 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente56()
{
	reponseautorise=0;
	setTimeout(reponseok56,500);
}
function reponseok56()
{
	document.getElementById("nbr56").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok57()
{
	if(listehasard[nbroperation]-operateur!==57 && reponseautorise==1)
	{
		document.getElementById("nbr57").style.background="red";
		reponsefausseattente57();
	}
	if(listehasard[nbroperation]-operateur==57 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente57()
{
	reponseautorise=0;
	setTimeout(reponseok57,500);
}
function reponseok57()
{
	document.getElementById("nbr57").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok58()
{
	if(listehasard[nbroperation]-operateur!==58 && reponseautorise==1)
	{
		document.getElementById("nbr58").style.background="red";
		reponsefausseattente58();
	}
	if(listehasard[nbroperation]-operateur==58 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente58()
{
	reponseautorise=0;
	setTimeout(reponseok58,500);
}
function reponseok58()
{
	document.getElementById("nbr58").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok59()
{
	if(listehasard[nbroperation]-operateur!==59 && reponseautorise==1)
	{
		document.getElementById("nbr59").style.background="red";
		reponsefausseattente59();
	}
	if(listehasard[nbroperation]-operateur==59 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente59()
{
	reponseautorise=0;
	setTimeout(reponseok59,500);
}
function reponseok59()
{
	document.getElementById("nbr59").style.background="#F1E791";
	reponseautorise=1;
}
function avanceok60()
{
	if(listehasard[nbroperation]-operateur!==60 && reponseautorise==1)
	{
		document.getElementById("nbr60").style.background="red";
		reponsefausseattente60();
	}
	if(listehasard[nbroperation]-operateur==60 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente60()
{
	reponseautorise=0;
	setTimeout(reponseok60,500);
}
function reponseok60()
{
	document.getElementById("nbr60").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok61()
{
	if(listehasard[nbroperation]-operateur!==61 && reponseautorise==1)
	{
		document.getElementById("nbr61").style.background="red";
		reponsefausseattente61();
	}
	if(listehasard[nbroperation]-operateur==61 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente61()
{
	reponseautorise=0;
	setTimeout(reponseok61,500);
}
function reponseok61()
{
	document.getElementById("nbr61").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok62()
{
	if(listehasard[nbroperation]-operateur!==62 && reponseautorise==1)
	{
		document.getElementById("nbr62").style.background="red";
		reponsefausseattente62();
	}
	if(listehasard[nbroperation]-operateur==62 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente62()
{
	reponseautorise=0;
	setTimeout(reponseok62,500);
}
function reponseok62()
{
	document.getElementById("nbr62").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok63()
{
	if(listehasard[nbroperation]-operateur!==63 && reponseautorise==1)
	{
		document.getElementById("nbr63").style.background="red";
		reponsefausseattente63();
	}
	if(listehasard[nbroperation]-operateur==63 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente63()
{
	reponseautorise=0;
	setTimeout(reponseok63,500);
}
function reponseok63()
{
	document.getElementById("nbr63").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok64()
{
	if(listehasard[nbroperation]-operateur!==64 && reponseautorise==1)
	{
		document.getElementById("nbr64").style.background="red";
		reponsefausseattente64();
	}
	if(listehasard[nbroperation]-operateur==64 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente64()
{
	reponseautorise=0;
	setTimeout(reponseok64,500);
}
function reponseok64()
{
	document.getElementById("nbr64").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok65()
{
	if(listehasard[nbroperation]-operateur!==65 && reponseautorise==1)
	{
		document.getElementById("nbr65").style.background="red";
		reponsefausseattente65();
	}
	if(listehasard[nbroperation]-operateur==65 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente65()
{
	reponseautorise=0;
	setTimeout(reponseok65,500);
}
function reponseok65()
{
	document.getElementById("nbr65").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok66()
{
	if(listehasard[nbroperation]-operateur!==66 && reponseautorise==1)
	{
		document.getElementById("nbr66").style.background="red";
		reponsefausseattente66();
	}
	if(listehasard[nbroperation]-operateur==66 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente66()
{
	reponseautorise=0;
	setTimeout(reponseok66,500);
}
function reponseok66()
{
	document.getElementById("nbr66").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok67()
{
	if(listehasard[nbroperation]-operateur!==67 && reponseautorise==1)
	{
		document.getElementById("nbr67").style.background="red";
		reponsefausseattente67();
	}
	if(listehasard[nbroperation]-operateur==67 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente67()
{
	reponseautorise=0;
	setTimeout(reponseok67,500);
}
function reponseok67()
{
	document.getElementById("nbr67").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok68()
{
	if(listehasard[nbroperation]-operateur!==68 && reponseautorise==1)
	{
		document.getElementById("nbr68").style.background="red";
		reponsefausseattente68();
	}
	if(listehasard[nbroperation]-operateur==68 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente68()
{
	reponseautorise=0;
	setTimeout(reponseok68,500);
}
function reponseok68()
{
	document.getElementById("nbr68").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok69()
{
	if(listehasard[nbroperation]-operateur!==69 && reponseautorise==1)
	{
		document.getElementById("nbr69").style.background="red";
		reponsefausseattente69();
	}
	if(listehasard[nbroperation]-operateur==69 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente69()
{
	reponseautorise=0;
	setTimeout(reponseok69,500);
}
function reponseok69()
{
	document.getElementById("nbr69").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok70()
{
	if(listehasard[nbroperation]-operateur!==70 && reponseautorise==1)
	{
		document.getElementById("nbr70").style.background="red";
		reponsefausseattente70();
	}
	if(listehasard[nbroperation]-operateur==70 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente70()
{
	reponseautorise=0;
	setTimeout(reponseok70,500);
}
function reponseok70()
{
	document.getElementById("nbr70").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok71()
{
	if(listehasard[nbroperation]-operateur!==71 && reponseautorise==1)
	{
		document.getElementById("nbr71").style.background="red";
		reponsefausseattente71();
	}
	if(listehasard[nbroperation]-operateur==71 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente71()
{
	reponseautorise=0;
	setTimeout(reponseok71,500);
}
function reponseok71()
{
	document.getElementById("nbr71").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok72()
{
	if(listehasard[nbroperation]-operateur!==72 && reponseautorise==1)
	{
		document.getElementById("nbr72").style.background="red";
		reponsefausseattente72();
	}
	if(listehasard[nbroperation]-operateur==72 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente72()
{
	reponseautorise=0;
	setTimeout(reponseok72,500);
}
function reponseok72()
{
	document.getElementById("nbr72").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok73()
{
	if(listehasard[nbroperation]-operateur!==73 && reponseautorise==1)
	{
		document.getElementById("nbr73").style.background="red";
		reponsefausseattente73();
	}
	if(listehasard[nbroperation]-operateur==73 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente73()
{
	reponseautorise=0;
	setTimeout(reponseok73,500);
}
function reponseok73()
{
	document.getElementById("nbr73").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok74()
{
	if(listehasard[nbroperation]-operateur!==74 && reponseautorise==1)
	{
		document.getElementById("nbr74").style.background="red";
		reponsefausseattente74();
	}
	if(listehasard[nbroperation]-operateur==74 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente74()
{
	reponseautorise=0;
	setTimeout(reponseok74,500);
}
function reponseok74()
{
	document.getElementById("nbr74").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok75()
{
	if(listehasard[nbroperation]-operateur!==75 && reponseautorise==1)
	{
		document.getElementById("nbr75").style.background="red";
		reponsefausseattente75();
	}
	if(listehasard[nbroperation]-operateur==75 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente75()
{
	reponseautorise=0;
	setTimeout(reponseok75,500);
}
function reponseok75()
{
	document.getElementById("nbr75").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok76()
{
	if(listehasard[nbroperation]-operateur!==76 && reponseautorise==1)
	{
		document.getElementById("nbr76").style.background="red";
		reponsefausseattente76();
	}
	if(listehasard[nbroperation]-operateur==76 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente76()
{
	reponseautorise=0;
	setTimeout(reponseok76,500);
}
function reponseok76()
{
	document.getElementById("nbr76").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok77()
{
	if(listehasard[nbroperation]-operateur!==77 && reponseautorise==1)
	{
		document.getElementById("nbr77").style.background="red";
		reponsefausseattente77();
	}
	if(listehasard[nbroperation]-operateur==77 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente77()
{
	reponseautorise=0;
	setTimeout(reponseok77,500);
}
function reponseok77()
{
	document.getElementById("nbr77").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok78()
{
	if(listehasard[nbroperation]-operateur!==78 && reponseautorise==1)
	{
		document.getElementById("nbr78").style.background="red";
		reponsefausseattente78();
	}
	if(listehasard[nbroperation]-operateur==78 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente78()
{
	reponseautorise=0;
	setTimeout(reponseok78,500);
}
function reponseok78()
{
	document.getElementById("nbr78").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok79()
{
	if(listehasard[nbroperation]-operateur!==79 && reponseautorise==1)
	{
		document.getElementById("nbr79").style.background="red";
		reponsefausseattente79();
	}
	if(listehasard[nbroperation]-operateur==79 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente79()
{
	reponseautorise=0;
	setTimeout(reponseok79,500);
}
function reponseok79()
{
	document.getElementById("nbr79").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok80()
{
	if(listehasard[nbroperation]-operateur!==80 && reponseautorise==1)
	{
		document.getElementById("nbr80").style.background="red";
		reponsefausseattente80();
	}
	if(listehasard[nbroperation]-operateur==80 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente80()
{
	reponseautorise=0;
	setTimeout(reponseok80,500);
}
function reponseok80()
{
	document.getElementById("nbr80").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok81()
{
	if(listehasard[nbroperation]-operateur!==81 && reponseautorise==1)
	{
		document.getElementById("nbr81").style.background="red";
		reponsefausseattente81();
	}
	if(listehasard[nbroperation]-operateur==81 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente81()
{
	reponseautorise=0;
	setTimeout(reponseok81,500);
}
function reponseok81()
{
	document.getElementById("nbr81").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok82()
{
	if(listehasard[nbroperation]-operateur!==82 && reponseautorise==1)
	{
		document.getElementById("nbr82").style.background="red";
		reponsefausseattente82();
	}
	if(listehasard[nbroperation]-operateur==82 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente82()
{
	reponseautorise=0;
	setTimeout(reponseok82,500);
}
function reponseok82()
{
	document.getElementById("nbr82").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok83()
{
	if(listehasard[nbroperation]-operateur!==83 && reponseautorise==1)
	{
		document.getElementById("nbr83").style.background="red";
		reponsefausseattente83();
	}
	if(listehasard[nbroperation]-operateur==83 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente83()
{
	reponseautorise=0;
	setTimeout(reponseok83,500);
}
function reponseok83()
{
	document.getElementById("nbr83").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok84()
{
	if(listehasard[nbroperation]-operateur!==84 && reponseautorise==1)
	{
		document.getElementById("nbr84").style.background="red";
		reponsefausseattente84();
	}
	if(listehasard[nbroperation]-operateur==84 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente84()
{
	reponseautorise=0;
	setTimeout(reponseok84,500);
}
function reponseok84()
{
	document.getElementById("nbr84").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok85()
{
	if(listehasard[nbroperation]-operateur!==85 && reponseautorise==1)
	{
		document.getElementById("nbr85").style.background="red";
		reponsefausseattente85();
	}
	if(listehasard[nbroperation]-operateur==85 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente85()
{
	reponseautorise=0;
	setTimeout(reponseok85,500);
}
function reponseok85()
{
	document.getElementById("nbr85").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok86()
{
	if(listehasard[nbroperation]-operateur!==86 && reponseautorise==1)
	{
		document.getElementById("nbr86").style.background="red";
		reponsefausseattente86();
	}
	if(listehasard[nbroperation]-operateur==86 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente86()
{
	reponseautorise=0;
	setTimeout(reponseok86,500);
}
function reponseok86()
{
	document.getElementById("nbr86").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok87()
{
	if(listehasard[nbroperation]-operateur!==87 && reponseautorise==1)
	{
		document.getElementById("nbr87").style.background="red";
		reponsefausseattente87();
	}
	if(listehasard[nbroperation]-operateur==87 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente87()
{
	reponseautorise=0;
	setTimeout(reponseok87,500);
}
function reponseok87()
{
	document.getElementById("nbr87").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok88()
{
	if(listehasard[nbroperation]-operateur!==88 && reponseautorise==1)
	{
		document.getElementById("nbr88").style.background="red";
		reponsefausseattente88();
	}
	if(listehasard[nbroperation]-operateur==88 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente88()
{
	reponseautorise=0;
	setTimeout(reponseok88,500);
}
function reponseok88()
{
	document.getElementById("nbr88").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok89()
{
	if(listehasard[nbroperation]-operateur!==89 && reponseautorise==1)
	{
		document.getElementById("nbr89").style.background="red";
		reponsefausseattente89();
	}
	if(listehasard[nbroperation]-operateur==89 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente89()
{
	reponseautorise=0;
	setTimeout(reponseok89,500);
}
function reponseok89()
{
	document.getElementById("nbr89").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok90()
{
	if(listehasard[nbroperation]-operateur!==90 && reponseautorise==1)
	{
		document.getElementById("nbr90").style.background="red";
		reponsefausseattente90();
	}
	if(listehasard[nbroperation]-operateur==90 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente90()
{
	reponseautorise=0;
	setTimeout(reponseok90,500);
}
function reponseok90()
{
	document.getElementById("nbr90").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok91()
{
	if(listehasard[nbroperation]-operateur!==91 && reponseautorise==1)
	{
		document.getElementById("nbr91").style.background="red";
		reponsefausseattente91();
	}
	if(listehasard[nbroperation]-operateur==91 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente91()
{
	reponseautorise=0;
	setTimeout(reponseok91,500);
}
function reponseok91()
{
	document.getElementById("nbr91").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok92()
{
	if(listehasard[nbroperation]-operateur!==92 && reponseautorise==1)
	{
		document.getElementById("nbr92").style.background="red";
		reponsefausseattente92();
	}
	if(listehasard[nbroperation]-operateur==92 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente92()
{
	reponseautorise=0;
	setTimeout(reponseok92,500);
}
function reponseok92()
{
	document.getElementById("nbr92").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok93()
{
	if(listehasard[nbroperation]-operateur!==93 && reponseautorise==1)
	{
		document.getElementById("nbr93").style.background="red";
		reponsefausseattente93();
	}
	if(listehasard[nbroperation]-operateur==93 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente93()
{
	reponseautorise=0;
	setTimeout(reponseok93,500);
}
function reponseok93()
{
	document.getElementById("nbr93").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok94()
{
	if(listehasard[nbroperation]-operateur!==94 && reponseautorise==1)
	{
		document.getElementById("nbr94").style.background="red";
		reponsefausseattente94();
	}
	if(listehasard[nbroperation]-operateur==94 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente94()
{
	reponseautorise=0;
	setTimeout(reponseok94,500);
}
function reponseok94()
{
	document.getElementById("nbr94").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok95()
{
	if(listehasard[nbroperation]-operateur!==95 && reponseautorise==1)
	{
		document.getElementById("nbr95").style.background="red";
		reponsefausseattente95();
	}
	if(listehasard[nbroperation]-operateur==95 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente95()
{
	reponseautorise=0;
	setTimeout(reponseok95,500);
}
function reponseok95()
{
	document.getElementById("nbr95").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok96()
{
	if(listehasard[nbroperation]-operateur!==96 && reponseautorise==1)
	{
		document.getElementById("nbr96").style.background="red";
		reponsefausseattente96();
	}
	if(listehasard[nbroperation]-operateur==96 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente96()
{
	reponseautorise=0;
	setTimeout(reponseok96,500);
}
function reponseok96()
{
	document.getElementById("nbr96").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok97()
{
	if(listehasard[nbroperation]-operateur!==97 && reponseautorise==1)
	{
		document.getElementById("nbr97").style.background="red";
		reponsefausseattente97();
	}
	if(listehasard[nbroperation]-operateur==97 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente97()
{
	reponseautorise=0;
	setTimeout(reponseok97,500);
}
function reponseok97()
{
	document.getElementById("nbr97").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok98()
{
	if(listehasard[nbroperation]-operateur!==98 && reponseautorise==1)
	{
		document.getElementById("nbr98").style.background="red";
		reponsefausseattente98();
	}
	if(listehasard[nbroperation]-operateur==98 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente98()
{
	reponseautorise=0;
	setTimeout(reponseok98,500);
}
function reponseok98()
{
	document.getElementById("nbr98").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok99()
{
	if(listehasard[nbroperation]-operateur!==99 && reponseautorise==1)
	{
		document.getElementById("nbr99").style.background="red";
		reponsefausseattente99();
	}
	if(listehasard[nbroperation]-operateur==99 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente99()
{
	reponseautorise=0;
	setTimeout(reponseok99,500);
}
function reponseok99()
{
	document.getElementById("nbr99").style.background="#F1E791";
	reponseautorise=1;
}

function avanceok100()
{
	if(listehasard[nbroperation]-operateur!==100 && reponseautorise==1)
	{
		document.getElementById("nbr100").style.background="red";
		reponsefausseattente100();
	}
	if(listehasard[nbroperation]-operateur==100 && reponseautorise==1)
	{
		avancego();
		
		nbroperation++;
		go();
	}
}
function reponsefausseattente100()
{
	reponseautorise=0;
	setTimeout(reponseok100,500);
}
function reponseok100()
{
	document.getElementById("nbr100").style.background="#F1E791";
	reponseautorise=1;
}
</script>