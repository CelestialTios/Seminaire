
<html>

 <head>

<script type="text/javascript" src="decomposer_niveau1.js"></script>
<link rel="stylesheet" href="../../style.css" media="screen" />
<link rel="stylesheet" href="../../imprime.css" media="print"/>
<script type="text/javascript"></script>
<link rel="icon" href="../../img/favico.png" />
<link href="../../css/custom.css" rel="stylesheet">
<link href="../../css/all.css" rel="stylesheet">
<script src="../../js/popper.min.js"></script>
<script src="../../js/jquery.min.js"></script>
<script src="../../js/bootstrap.min.js"></script>
 

	<body onload="go();">
				
				<?php
			include 'menu.php';
		?>

			<div><span id="conseil" style="font-size:16px"></span>
		<nav aria-label="breadcrum">
			<ol class="breadcrumb bg-info">
				<li class="breadcrumb-item active text-white font-weight-bold" aria-current="page">Mathématiques - Jeux - Numération</li>
			</ol>
		</nav>
		<br>
	<div>
		<div class="presentation">


			<button class="btn btn-success consignes" type="button" id="consigne">Décompose le nombre en paquets de dizaines et en paquets d'unités</button>


			<br><br>	

			<button type="button" class="btn btn-info consignes" id="tour">Exercice n°1 sur 10</button>
			<br>

			<button type="button" class="btn btn-success consignes2" id="go1blanc" style="display:none">suivant 2 </button>
			<br><br>


			<div id="exo1" style="display:none" class="encadrecasemillion">
			<button class="btn btn-info consignes2" type="button"><div id="nbr1" text-white font-weight-bold"></div></button>
			
			<button class="btn btn-success consignes2" type="button"> = </a></button><INPUT type="Nom du champ" placeholder="?" id="reponse1"></input>

			<button class="btn btn-success consignes2" type="button"> + </a></button><INPUT type="Nom du champ" placeholder="?" id="reponse2"></input>
			</div>
			
			<button class="btn btn-info consignes2" type="button" id="correction1" style="display:none"></button>
			
			
			<div id="exo2" style="display:none" class="encadrecasemillion">
			<button class="btn btn-info consignes2" type="button"><div id="nbr2" text-white font-weight-bold"></div></a></button>
			
			<button class="btn btn-success consignes2" type="button"> = </a></button><INPUT type="Nom du champ" placeholder="?" id="reponse3"></input>

			<button class="btn btn-success consignes2" type="button"> + </a></button><INPUT type="Nom du champ" placeholder="?" id="reponse4"></input>
			</div>
			
			<button class="btn btn-info consignes2" type="button" id="correction2" style="display:none"></button>

			<div id="exo3" style="display:none" class="encadrecasemillion">
			<button class="btn btn-info consignes2" type="button"><div id="nbr3" text-white font-weight-bold"></div></a></button>
			
			<button class="btn btn-success consignes2" type="button"> = </a></button><INPUT type="Nom du champ" placeholder="?" id="reponse5"></input>

			<button class="btn btn-success consignes2" type="button"> + </a></button><INPUT type="Nom du champ" placeholder="?" id="reponse6"></input>
			</div>
			
			<button class="btn btn-info consignes2" type="button" id="correction3" style="display:none"></button>

			<div id="exo4" style="display:none" class="encadrecasemillion">
			<button class="btn btn-info consignes2" type="button"><div id="nbr4" text-white font-weight-bold"></div></a></button>
			
			<button class="btn btn-success consignes2" type="button"> = </a></button><INPUT type="Nom du champ" placeholder="?" id="reponse7"></input>

			<button class="btn btn-success consignes2" type="button"> + </a></button><INPUT type="Nom du champ" placeholder="?" id="reponse8"></input>
			</div>
			
			<button class="btn btn-info consignes2" type="button" id="correction4" style="display:none"></button>
			
			<div id="exo5" style="display:none" class="encadrecasemillion">
			<button class="btn btn-info consignes2" type="button"><div id="nbr5" text-white font-weight-bold"></div></a></button>
			
			<button class="btn btn-success consignes2" type="button"> = </a></button><INPUT type="Nom du champ" placeholder="?" id="reponse9"></input>

			<button class="btn btn-success consignes2" type="button"> + </a></button><INPUT type="Nom du champ" placeholder="?" id="reponse10"></input>
			</div>
			
			<button class="btn btn-info consignes2" type="button" id="correction5" style="display:none"></button>
						
			<button type="button" class="btn btn-success consignes2" onclick="go();" id="go1" style="display:none">suivant</button>
			<div>
			<button class="btn btn-info consignes2" type="button" id="correction" style="display:none"></button>
			<button type="button" class="btn btn-success consignes2" id="note" style="display:none">note</button>
			</div>
			<div class="noteimage6" id="noteimage" style="display:none">
			<img src="img/champion.png" id="champion" style="display:none">
			<img src="img/bien.png" id="bien" style="display:none">
			<img src="img/effort.png" id="effort" style="display:none">
			<img src="img/dur.png" id="dur" style="display:none">
			</div>
		
			<div class="bouton2" id="imprime" style="display:none; text-align: center">
				<br>
				<br>
				<INPUT type="button" class="btn btn-info" value="Recommencer" onclick="javascript:window.location.reload()">
				<INPUT type="button" class="btn btn-info" value="Quitter" onclick="javascript:history.back()">
				<br>
				<br>
			</div>	
		</div>
		<div class="jecoutedictee">
			<INPUT class="btn btn-success consignes2" type="button" value="Valide" onclick="correction1();" id="verification1" style="display:none">
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