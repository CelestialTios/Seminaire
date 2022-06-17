<?php
	include "../../components/menu.php";
?>
		<nav aria-label="breadcrum">
			<ol class="breadcrumb bg-info">
				<li class="breadcrumb-item active text-white font-weight-bold titre" aria-current="page">Mathématiques - Leçons</li>
			</ol>
		</nav>
		
		<div class="container">
			<div class="row bg-info">
				<a href="./numeration/mathematiques_lecons_numeration.php" class="col text-center table-perso-mathematiques fa fa-dice"><b style="font-family:perso"><br><br>Numération<br></b></a>
				<a href="./calculs/mathematiques_lecons_calculs.php" class="col text-center table-perso-mathematiques fas fa-calculator"><b style="font-family:perso"><br><br>Calculs<br></b></a>
				<a href="./mesures/mathematiques_lecons_grandeurs.php" class="col text-center table-perso-mathematiques fa fa-balance-scale"><b style="font-family:perso"><br>Grandeurs et mesures</b></a>
				<a href="./geometrie/mathematiques_lecons_geometrie.php" class="col text-center table-perso-mathematiques fa fa-pencil-ruler"><b style="font-family:perso"><br><br>Géométrie<br></b></a>
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
