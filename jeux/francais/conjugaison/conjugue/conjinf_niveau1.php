<html>

 <head>

<script type="text/javascript" src="conjinf_niveau1.js"></script>
<link rel="stylesheet" href="../../style.css" media="screen" />
<link rel="stylesheet" href="../../imprime.css" media="print"/>
<script type="text/javascript"></script>
<link rel="icon" href="../../img/favico.png" />
<link href="../../css/custom.css" rel="stylesheet">
<link href="../../css/all.css" rel="stylesheet">
<script src="../../js/popper.min.js"></script>
<script src="../../js/jquery.min.js"></script>
<script src="../../js/bootstrap.min.js"></script>
 
<title>Infinitif ou conjugué ?</title>

	</head>

	<body onload="go();">
				
				<?php
			include 'menu.php';
		?>

			<div><span id="conseil" style="font-size:16px"></span>
		<nav aria-label="breadcrum">
			<ol class="breadcrumb bg-danger">
				<li class="breadcrumb-item active text-white font-weight-bold" aria-current="page">Français - Jeux - Conjugaison</li>
			</ol>
		</nav>
		<button type="button" class="btn btn-success consignes" id="consigne">Le verbe est-il conjugué ou à l'infinitif ?</button><br>
		<button type="button" class="btn btn-danger consignes" id="tour">Exercice n°1 sur 5</button>
		<br><br>

			<button id="go1blanc"></button>

			
			<div id="exo1" style="display:none">
			
				<div><button type="button" class="btn btn-danger consignes2" id="verbe1"></button></div>
	
				<button type="button" class="btn btn-success consignes2" onclick="correction1();" id="choix1"> Conjugué </button>
				<button type="button" class="btn btn-success consignes2" onclick="correction2();" id="choix2"> Infinitif </button>
				
			</div>
	<br>
		<button class="btn btn-danger consignes2" type="button" id="correction1"></button>
		<button type="button" class="btn btn-success consignes2" onclick="go();" id="go1">Suivant</button>

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
		<INPUT type="button" class="btn btn-danger" value="Recommencer" onclick="javascript:window.location.reload()">
		<INPUT type="button" class="btn btn-info" value="Quitter" onclick="javascript:history.back()">
		<br>
		<br>
		</div>
</div>
</body>
	<script type="text/javascript">
		$(document).ready(function(){
			$('[data-toggle="tooltip"]').tooltip();   
		});
	</script>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-166118568-1"></script>
	<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-166118568-1');
	</script>

</html>
