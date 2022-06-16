<html> 
	<title>Classe de CE1</title>
	<link rel="icon" href="img/favico.png" />
	<link href="css/custom.css" rel="stylesheet">
	<link href="css/all.css" rel="stylesheet">
	<script src="js/popper.min.js"></script>
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<meta http-equiv="refresh" content="300" />
	<body>
		<?php
			include 'menu.php';
		?>
		
		<nav aria-label="breadcrum">
			<ol class="breadcrumb bg-danger">
				<li class="breadcrumb-item active text-white font-weight-bold titre" aria-current="page">Français - Leçons</li>
			</ol>
		</nav>
		
		<div class="container">
			<div class="row bg-danger">
				<a href="francais_lecons_s_gdl.php" class="col text-center table-perso-francais fa fa-hourglass-start"><b style="font-family:perso"><br><br>Gammes de lecture</b></a>
				<a href="francais_lecons_s_sons.php" class="col text-center table-perso-francais fa fa-deaf"><b style="font-family:perso"><br><br>Sons</b></a>
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