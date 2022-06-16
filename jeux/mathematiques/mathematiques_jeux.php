<html> 
	<title>Classe de CE1</title>
	<link rel="icon" href="img/favico.png" />
	<link href="css/custom.css" rel="stylesheet">
	<link href="css/all.css" rel="stylesheet">
	<script src="js/popper.min.js"></script>
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<body>
		<?php
			include 'menu.php';
		?>
		
		<nav aria-label="breadcrum">
			<ol class="breadcrumb bg-info">
				<li class="breadcrumb-item active text-white font-weight-bold titre" aria-current="page">Mathématiques - Jeux</li>
			</ol>
		</nav>
		
		<div class="container">
			<div class="row bg-info">
				<a href="mathematiques_jeux_numeration.php" class="col text-center table-perso-mathematiques fa fa-dice"><b style="font-family:perso"><br><br>Numération</b></a>
				<a href="mathematiques_jeux_calculs.php" class="col text-center table-perso-mathematiques fas fa-calculator"><b style="font-family:perso"><br><br>Calculs</b></a>
				<a href="mathematiques_jeux_grandeursetmesures.php" class="col text-center table-perso-mathematiques fa fa-balance-scale"><b style="font-family:perso"><br>Grandeurs et mesures</b></a>
				<a href="mathematiques/jeux/robot.php" class="col text-center table-perso-mathematiques fa fa-pencil-ruler"><b style="font-family:perso"><br>Se repérer dans l'espace</b></a>
				<a href="mathematiques_jeux_geometrie.php" class="col text-center table-perso-mathematiques fas fa-border-all"><b style="font-family:perso"><br><br>Géométrie<br></b></a>
				<a href="mathematiques_jeux_autres.php" class="col text-center table-perso-mathematiques fas fa-box"><b style="font-family:perso"><br><br>Autres<br></b></a>

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