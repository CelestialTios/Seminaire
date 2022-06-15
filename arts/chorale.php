<html> 
	<title>Classe de CE1</title>
	<link rel="icon" href="../img/favico.png" />
	<link href="../css/custom.css" rel="stylesheet">
	<link href="../css/all.css" rel="stylesheet">
	<script src="../js/popper.min.js"></script>
	<script src="../js/jquery.min.js"></script>
	<script src="../js/bootstrap.min.js"></script>
	<meta http-equiv="refresh" content="300" />
	<body>
		<?php
			readfile("menu.php");
		?>
		
		<nav aria-label="breadcrum">
			<ol class="breadcrumb bg-warning">
				<li class="breadcrumb-item active text-white font-weight-bold titre" aria-current="page">Arts - Chorale</li>
			</ol>
		</nav>
		
		<table class="table font-weight-bold text-center">
		  <tbody>
			<tr class="bg-warning text-white text-center table-fontlarge">
			  <td>Chorale 1</td>
			  <td><a href="armstrong.php" class="col table-fontlarge"><b style="font-family:perso">Armstrong, Claude Nougaro</b></a></td>
			</tr>
			<tr class="bg-warning text-white text-center table-fontlarge">
			  <td>Chorale 2</td>
			  <td><a href="jaidemandealalune.php" class="col table-fontlarge"><b style="font-family:perso">J'ai demandé à la lune, Kids United</b></a></td>
			 </tr>
			 <tr class="bg-warning text-white text-center table-fontlarge">
			  <td>Chorale 3</td>
			  <td><a href="lezoo.php" class="col table-fontlarge"><b style="font-family:perso">Le zoo, Vincent Morel</b></a></td>
			 </tr>
		  </tbody>
		</table>
	
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
