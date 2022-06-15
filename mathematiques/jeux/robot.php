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
		<meta name="description" content="Robot" />
		<meta charset="utf-8" />
		<title>Robot</title>
		<link rel="stylesheet" href="style.css" />
		<script type="text/javascript" src="robot.js"></script>
	</head>
	<?php
			include 'menu.php';
		?>
	<style>
	body
	{
	font-family:cursive,Calibri;
	font-size:12px;
	}
	.button
	{
		background: white;
		border : 1px solid #D8D8D8;
		color: #32ABDD;
		padding: 5px;
		font-size: 10px;
		border-radius: 2px;
		font-weight: bold;
		transition:0.5s;
	}
	.button:hover
	{
		background: #32ABDD;
		color: white;
		transition:0.5s;
		cursor:pointer;
	}

	.bouton-bas{
		background: white;
		color: black;
		cursor:pointer;
	}


	.bouton-bas:hover{
		background: #3F8EAD;
		color: white;
		cursor:pointer;
	}

	</style>
	
	
	<audio id="robotbouge"><source src="audio/robotbouge.mp3"></source><source src="audio/robotbouge.ogg"></source></audio>
	<audio id="robotfin"><source src="audio/robotfin.mp3"></source><source src="audio/robotfin.ogg"></source></audio>
	<audio id="robotpause"><source src="audio/robotpause.mp3"></source><source src="audio/robotpause.ogg"></source></audio>

<body onload="go()" >

<script>
		if (document.body)
		{
		fenlarg = (window.innerWidth);
		fenhaut = (window.innerHeight);
		}
		else
		{
		fenlarg = (document.body.clientWidth);
		fenhaut = (document.body.clientHeight);
		}
		if(fenlarg>fenhaut)
		{
		fenmax=fenlarg;
		}
		else
		{
		fenmax=fenhaut;
		}
</script>

<div id="jeu" style="display:none; width:960px;margin:auto;margin-top:5px">

	<div id="espace-jeu" style="float:left;position:relative">
		<div style="float:left;width:638px;margin-top:5px">
			<div id="aide" style="display:none;width:250px; left:50px;top:100px;height:80px;line-height:25px;position:absolute;z-index:10;padding:10px;cursor:pointer" onclick="afficheaide();" >
			<img src="img/aide.png" style="width:500px">
			</div>
			<div style="clear:both"></div>
			<img src="img/fond1.png" style="width:617px">
			<div style="float:left;margin-top:-6px;margin-left:-6px;">
				<img src="img/fond2.png" style="width:100px;height:417px">
			</div>
			<div style="float:left;margin-top:-6px;margin-left:-20px;position:relative">

				<div id="ligne1" style="margin-left:20px;">
					<div id="case1A" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" ></div>
					<div id="case1B" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" ></div>
					<div id="case1C" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left"></div>
					<div id="case1D" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" ></div>
					<div id="case1E" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" ></div>
					<div id="case1F" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" ></div>
					<div id="case1G" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left"></div>
					<div id="case1H" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" ></div>
					<div style="clear:both"></div>
				</div>
				<div id="ligne2" style="margin-left:20px">
					<div id="case2A" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase2A();"></div>
					<div id="case2B" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase2B();"></div>
					<div id="case2C" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase2C();"></div>
					<div id="case2D" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase2D();"></div>
					<div id="case2E" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase2E();"></div>
					<div id="case2F" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase2F();"></div>
					<div id="case2G" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase2G();"></div>
					<div id="case2H" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase2H();"></div>
					<div style="clear:both"></div>
				</div>
				<div id="ligne3" style="margin-left:20px">
					<div id="case3A" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase3A();"></div>
					<div id="case3B" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase3B();"></div>
					<div id="case3C" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase3C();"></div>
					<div id="case3D" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase3D();"></div>
					<div id="case3E" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase3E();"></div>
					<div id="case3F" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase3F();"></div>
					<div id="case3G" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase3G();"></div>
					<div id="case3H" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase3H();"></div>
					<div style="clear:both"></div>
				</div>
				<div id="ligne4" style="margin-left:20px">
					<div id="case4A" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase4A();"></div>
					<div id="case4B" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase4B();"></div>
					<div id="case4C" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase4C();"></div>
					<div id="case4D" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase4D();"></div>
					<div id="case4E" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase4E();"></div>
					<div id="case4F" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase4F();"></div>
					<div id="case4G" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase4G();"></div>
					<div id="case4H" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase4H();"></div>
					<div style="clear:both"></div>
				</div>
				<div id="ligne5" style="margin-left:20px">
					<div id="case5A" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase5A();"></div>
					<div id="case5B" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase5B();"></div>
					<div id="case5C" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase5C();"></div>
					<div id="case5D" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase5D();"></div>
					<div id="case5E" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase5E();"></div>
					<div id="case5F" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase5F();"></div>
					<div id="case5G" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase5G();"></div>
					<div id="case5H" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase5H();"></div>
					<div style="clear:both"></div>
				</div>
				<div id="ligne6" style="margin-left:20px">
					<div id="case6A" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase6A();"></div>
					<div id="case6B" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase6B();"></div>
					<div id="case6C" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase6C();"></div>
					<div id="case6D" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase6D();"></div>
					<div id="case6E" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase6E();"></div>
					<div id="case6F" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase6F();"></div>
					<div id="case6G" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase6G();"></div>
					<div id="case6H" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase6H();"></div>
					<div style="clear:both"></div>
				</div>
				<div id="ligne7" style="margin-left:20px">
					<div id="case7A" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase7A();"></div>
					<div id="case7B" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase7B();"></div>
					<div id="case7C" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase7C();"></div>
					<div id="case7D" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase7D();"></div>
					<div id="case7E" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase7E();"></div>
					<div id="case7F" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase7F();"></div>
					<div id="case7G" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase7G();"></div>
					<div id="case7H" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase7H();"></div>
					<div style="clear:both"></div>
				</div>
				<div id="ligne8" style="margin-left:20px">
					<div id="case8A" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase8A();"></div>
					<div id="case8B" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase8B();"></div>
					<div id="case8C" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase8C();"></div>
					<div id="case8D" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase8D();"></div>
					<div id="case8E" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase8E();"></div>
					<div id="case8F" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase8F();"></div>
					<div id="case8G" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase8G();"></div>
					<div id="case8H" style="width:50px;height:50px;border:1px solid #C0C0C0;float:left" onclick="icase8H();"></div>
					<div style="clear:both"></div>
				</div>
				<img src="img/robot.png" id="robot" style="position:absolute;height:45px;left:0px;">
			</div>

			<div style="float:left;margin-top:-6px;">
				<img src="img/fond3.png" style="width:100px;height:417px">
			</div>
			<img src="img/fond4.png" style="width:563px;margin-top:-4px;margin-left:21px">

		</div>
	</div>

	<div id="espace-joueur" style="float:left;width:320px;margin-top:5px">
		<div style="clear:both;height:5px"></div>
		<img src="img/commandes.png" usemap="#boutons">
		<map name="boutons" id="boutons">
			<area shape="rect" coords="110,0,170,90" onclick="choixhaut();"/>
			<area shape="rect" coords="5,100,95,160" onclick="choixgauche();"/>
		    <area shape="circle" coords="140,135,32" onclick="depart();"/>
			<area shape="rect" coords="185,100,275,160" onclick="choixdroite();"/>
			<area shape="rect" coords="110,180,170,270" onclick="choixbas();"/>
			<area shape="rect" coords="0,205,100,250" onclick="javascript:window.location.reload()"/>
		    <area shape="rect" coords="180,205,280,250" onclick="choixpause();"/>
		</map>

		<div>
		<div class="bouton-bas" style="background:#95C450;color:white;text-align:center;float:right;font-size:24px;margin-top:15px;border-radius:5px;width:240px;" onclick="retourdepart();">RETOUR DÉPART</div>
		<div class="bouton-bas" style="background:#95C450;color:white;text-align:center;float:right;font-size:24px;margin-top:15px;border-radius:5px;width:130px;" onclick="javascript:history.back()">ACCUEIL</div>
		<div style="clear:both"></div>
		<div class="bouton-bas" style="background:#95C450;color:white;text-align:center;float:right;font-size:24px;margin-top:15px;border-radius:5px;width:90px;" onclick="afficheaide();">AIDE</div>
		</div>
		<div style="clear:both"></div>
		<div style="background:#95C450;color:white;text-align:left;font-size:21px;margin-top:15px;margin-bottom:10px">Mes déplacements</div>

		
		<span id="temps"></span>
		<div id ="choix1" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;margin-left:0px;"><img id="choix1image"></div>
		<div id ="choix2" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;"><img id="choix2image"></div>
		<div id ="choix3" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;"><img id="choix3image"></div>
		<div id ="choix4" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;"><img id="choix4image"></div>
		<div id ="choix5" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;"><img id="choix5image"></div>
		<div id ="choix6" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;"><img id="choix6image"></div>
		<div id ="choix7" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;"><img id="choix7image"></div>
		<div id ="choix8" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;"><img id="choix8image"></div>
		<div id ="choix9" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;"><img id="choix9image"></div>
		<div id ="choix10" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;"><img id="choix10image"></div>
		<div style="margin-top:10px;clear:both"></div>
		<div id ="choix11" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;margin-left:0px;"><img id="choix11image"></div>
		<div id ="choix12" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;"><img id="choix12image"></div>
		<div id ="choix13" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;"><img id="choix13image"></div>
		<div id ="choix14" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;"><img id="choix14image"></div>
		<div id ="choix15" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;"><img id="choix15image"></div>
		<div id ="choix16" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;"><img id="choix16image"></div>
		<div id ="choix17" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;"><img id="choix17image"></div>
		<div id ="choix18" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;"><img id="choix18image"></div>
		<div id ="choix19" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;"><img id="choix19image"></div>
		<div id ="choix20" style="height:30px;width:25px;background:white;border-radius:5px;float:left;margin-right:3px;"><img id="choix20image"></div>

	</div>



	






<div id="elements" style="position:absolute;margin-left:375px;top:9px;">

</div>

</div>
<div id="carregagne" style="display:none;width:1px;height:1px;background:#FFEB66;position:absolute;top:0px;left:0px">
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