<?php
    include "../../../components/menu.php";
?>
		
		<nav aria-label="breadcrum">
			<ol class="breadcrumb bg-danger">
				<li class="breadcrumb-item active text-white font-weight-bold titre" aria-current="page">Français - Leçons</li>
			</ol>
		</nav>
		
		<div class="container">
			<div class="row bg-danger">
				<a href="./conjugaison/francais_lecons_conjugaison.php" class="col text-center table-perso-francais fa fa-hippo"><b style="font-family:perso"><br><br>Conjugaison</b></a>
				<a href="./grammaire/francais_lecons_grammaire.php" class="col text-center table-perso-francais fab fa-gofore"><b style="font-family:perso"><br><br>Grammaire</b></a>
				<a href="./orthographe/francais_lecons_orthographe.php" class="col text-center table-perso-francais fa fa-pencil-alt"><b style="font-family:perso"><br><br>Orthographe</b></a>
				<a href="./vocabulaire/francais_lecons_vocabulaire.php" class="col text-center table-perso-francais fa fa-comment-dots"><b style="font-family:perso"><br><br>Vocabulaire</b></a>
				<a href="./sons/francais_lecons_s.php" class="col text-center table-perso-francais fa fa-comments"><b style="font-family:perso"><br><br>Sons</b></a>
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