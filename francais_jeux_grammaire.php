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
				<li class="breadcrumb-item active text-white font-weight-bold titre" aria-current="page">Français - Jeux - Grammaire</li>
			</ol>
		</nav>
		
		<table class="table font-weight-bold text-center">
		  <tbody>
		  
			<tr class="bg-danger text-white text-center table-fontlarge">
			  <td>Est-ce une phrase ?</td>
			  <td><a href="francais/jeux/phrase_niveau1.php" class="col table-fontlarge"><b style="font-family:perso">Niveau 1</b></a></td>
			  <td><a href="francais/jeux/phrase_niveau2.php" class="col table-fontlarge"><b style="font-family:perso">Niveau 2</b></a></td>
			  <td><a href="francais/jeux/phrase_niveau3.php" class="col table-fontlarge"><b style="font-family:perso">Niveau 3</b></a></td>
			</tr>
			<tr class="bg-danger text-white text-center table-fontlarge">
			  <td>Les mots sont tous collés !</td>
			  <td><a href="francais/jeux/espaces.php" class="col table-fontlarge"><b style="font-family:perso">Niveau 1</b></a></td>
			</tr>
			  <tr class="bg-danger text-white text-center table-fontlarge">
			  <td>Le singulier / le pluriel</td>
			  <td><a href="francais/jeux/singplu_niveau1.php" class="col table-fontlarge"><b style="font-family:perso">Niveau 1</b></a></td>
			</tr>
			<tr class="bg-danger text-white text-center table-fontlarge">
			  <td>Le masculin / le féminin</td>
			  <td><a href="francais/jeux/mascfem_niveau1.php" class="col table-fontlarge"><b style="font-family:perso">Niveau 1</b></a></td>
			</tr>
			<tr class="bg-danger text-white text-center table-fontlarge">
			  <td>Les types de phrases</td>
			  <td><a href="francais/jeux/typesphrases_niveau1.php" class="col table-fontlarge"><b style="font-family:perso">Déclarative / interrogative</b></a></td>
			  <td><a href="francais/jeux/typesphrases_niveau2.php" class="col table-fontlarge"><b style="font-family:perso">Déclarative / interrogative / exclamative</b></a></td>
			  <td><a href="francais/jeux/typesphrases_niveau3.php" class="col table-fontlarge"><b style="font-family:perso">Déclarative / interrogative / exclamative / injonctive</b></a></td>
			</tr>
			<tr class="bg-danger text-white text-center table-fontlarge">
			  <td>La nature des mots</td>
			  <td><a href="francais/jeux/nature_niveau1.php" class="col table-fontlarge"><b style="font-family:perso">DET / NC / NP</b></a></td>
			  <td><a href="francais/jeux/nature_niveau2.php" class="col table-fontlarge"><b style="font-family:perso">DET / NC / NP / ADJ</b></a></td>
			  <td><a href="francais/jeux/nature_niveau3.php" class="col table-fontlarge"><b style="font-family:perso">DET / NC / NP / ADJ / V</b></a></td>
			</tr>
			<tr class="bg-danger text-white text-center table-fontlarge">
			  <td>L'accord dans le GN</td>
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
