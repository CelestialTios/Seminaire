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
			<ol class="breadcrumb bg-info">
				<li class="breadcrumb-item active text-white font-weight-bold titre" aria-current="page">Mathématiques - Jeux - Autres</li>
			</ol>
		</nav>
		
		<table class="table font-weight-bold text-center">
		  <tbody>
			<tr class="bg-info text-white text-center table-fontlarge">
			  <td>Symétrie</td>
			  <td><a href="mathematiques/jeux/symetrie.php" class="col table-fontlarge"><b style="font-family:perso">Clique ici</b></a></td>
			</tr>
			<tr class="bg-info text-white text-center table-fontlarge">
			  <td>Sudoku</td>
			  <td><a href="mathematiques/jeux/mathematiques_jeux_sudoku.php" class="col table-fontlarge"><b style="font-family:perso">Clique ici</b></a></td>
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
