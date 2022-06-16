<html> 	
	<title>Classe de CE1</title>
	<link rel="icon" href="../../img/favico.png" />
	<link href="../../css/custom.css" rel="stylesheet">
	<link href="../../css/all.css" rel="stylesheet">
	<script src="../../js/popper.min.js"></script>
	<script src="../../js/jquery.min.js"></script>
	<script src="../../js/bootstrap.min.js"></script>
	<script type="text/javascript" src="imparfait_niveau3.js"></script>

	<audio id="bonnereponse"><source src="audio\bonnereponse.mp3"></source><source src="francais\audio\bonnereponse.ogg"></source></audio>
	<audio id="mauvaisereponse"><source src="audio\mauvaisereponse.mp3"></source><source src="francais\audio\mauvaisereponse.ogg"></source></audio>
	
	<body onload="jecoute();">
		<?php
			include 'menu.php';
		?>		
		<nav aria-label="breadcrum">
			<ol class="breadcrumb bg-danger">
				<li class="breadcrumb-item active text-white font-weight-bold titre" aria-current="page">Français - Conjugaison - Les verbes à l'imparfait - niveau 3</li>
			</ol>
		</nav>		
		<br>		
		<button type="button" class="btn btn-success consignes" id="consigne">Conjugue les verbes entre parenthèses avec le pronom personnel à l'imparfait.</button>
		<button type="button" class="btn btn-danger consignes" id="tour">Exercice n°1 sur 10</button>
		<br><br>
		<button type="button" class="btn btn-success consignes2" onclick="jecoute();"id="jecoute">Suivant</button>
		<br><br>
		
		
		<button class="btn btn-danger consignes2" type="button" id="questionn1" ></button>
		<button class="btn btn-danger consignes2" type="button" id="questionn2" style="display:none"></button>
		<button class="btn btn-danger consignes2" type="button" id="questionn3" style="display:none"></button>
		<button class="btn btn-danger consignes2" type="button" id="questionn4" style="display:none"></button>
		<button class="btn btn-danger consignes2" type="button" id="questionn5" style="display:none"></button>
		<button class="btn btn-danger consignes2" type="button" id="questionn6" style="display:none"></button>
		<button class="btn btn-danger consignes2" type="button" id="questionn7" style="display:none"></button>
		<button class="btn btn-danger consignes2" type="button" id="questionn8" style="display:none"></button>
		<button class="btn btn-danger consignes2" type="button" id="questionn9" style="display:none"></button>
		<button class="btn btn-danger consignes2" type="button" id="questionn10" style="display:none"></button>
		

			<input type="text" autocomplete="off" id="reponsee1" class="form-control" placeholder=""  aria-label="Recipient's username" aria-describedby="button-addon2">
			<input type="text" autocomplete="off" id="reponsee2" class="form-control" placeholder="" style="display:none" aria-label="Recipient's username" aria-describedby="button-addon2">
			<input type="text" autocomplete="off" id="reponsee3" class="form-control" placeholder="" style="display:none" aria-label="Recipient's username" aria-describedby="button-addon2">
			<input type="text" autocomplete="off" id="reponsee4" class="form-control" placeholder="" style="display:none" aria-label="Recipient's username" aria-describedby="button-addon2">
			<input type="text" autocomplete="off" id="reponsee5" class="form-control" placeholder="" style="display:none" aria-label="Recipient's username" aria-describedby="button-addon2">
			<input type="text" autocomplete="off" id="reponsee6" class="form-control" placeholder="" style="display:none" aria-label="Recipient's username" aria-describedby="button-addon2">
			<input type="text" autocomplete="off" id="reponsee7" class="form-control" placeholder="" style="display:none" aria-label="Recipient's username" aria-describedby="button-addon2">
			<input type="text" autocomplete="off" id="reponsee8" class="form-control" placeholder="" style="display:none" aria-label="Recipient's username" aria-describedby="button-addon2">
			<input type="text" autocomplete="off" id="reponsee9" class="form-control" placeholder="" style="display:none" aria-label="Recipient's username" aria-describedby="button-addon2">
			<input type="text" autocomplete="off" id="reponsee10" class="form-control" placeholder="" style="display:none" aria-label="Recipient's username" aria-describedby="button-addon2">
			<div class="input-group-append">
				<button class="btn btn-success consignes2" type="button" onclick="correction();" id="correction" style="display:none">Valider</button>
			</div>	
		
		<button class="btn btn-danger consignes2" type="button" id="correction1" style="display:none"></button>
		<button class="btn btn-danger consignes2" type="button" id="correction2" style="display:none"></button>
		<button class="btn btn-danger consignes2" type="button" id="correction3" style="display:none"></button>
		<button class="btn btn-danger consignes2" type="button" id="correction4" style="display:none"></button>
		<button class="btn btn-danger consignes2" type="button" id="correction5" style="display:none"></button>
		<button class="btn btn-danger consignes2" type="button" id="correction6" style="display:none"></button>
		<button class="btn btn-danger consignes2" type="button" id="correction7" style="display:none"></button>
		<button class="btn btn-danger consignes2" type="button" id="correction8" style="display:none"></button>
		<button class="btn btn-danger consignes2" type="button" id="correction9" style="display:none"></button>
		<button class="btn btn-danger consignes2" type="button" id="correction10" style="display:none"></button>
		
		<br><br>
		<button type="button" class="btn btn-success consignes2" id="note" style="display:none">note</button>
		<div class="noteimage6" id="noteimage" style="display:none">
		<img src="img/champion.png" id="champion" style="display:none">
		<img src="img/bien.png" id="bien" style="display:none">
		<img src="img/effort.png" id="effort" style="display:none">
		<img src="img/dur.png" id="dur" style="display:none">
		<br>
		<br>
		<INPUT type="button" class="btn btn-danger" value="Recommencer" onclick="javascript:window.location.reload()">
		<INPUT type="button" class="btn btn-info" value="Quitter" onclick="javascript:history.back()">
		<br>
		<br></div>

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
