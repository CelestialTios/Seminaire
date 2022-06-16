<html> 	
	<title>Classe de CE1</title>
	<link rel="icon" href="img/favico.png" />
	<link href="css/custom.css" rel="stylesheet">
	<link href="css/all.css" rel="stylesheet">
	<script src="js/popper.min.js"></script>
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="francais_dictees_dictee24.js"></script>

	<audio id="1"><source src="francais\audio\loreille.mp3"></source><source src="francais\audio\loreille.ogg"></source></audio>
	<audio id="2"><source src="francais\audio\uneregle.mp3"></source><source src="francais\audio\uneregle.ogg"></source></audio>
	<audio id="3"><source src="francais\audio\unogre.mp3"></source><source src="francais\audio\unogre.ogg"></source></audio>
	<audio id="4"><source src="francais\audio\gris.mp3"></source><source src="francais\audio\gris.ogg"></source></audio>
	<audio id="5"><source src="francais\audio\gros.mp3"></source><source src="francais\audio\gros.ogg"></source></audio>
	<audio id="6"><source src="francais\audio\unmagasin.mp3"></source><source src="francais\audio\unmagasin.ogg"></source></audio>
	<audio id="7"><source src="francais\audio\uneguitare.mp3"></source><source src="francais\audio\uneguitare.ogg"></source></audio>
	<audio id="8"><source src="francais\audio\unebaguette.mp3"></source><source src="francais\audio\unebaguette.ogg"></source></audio>
	<audio id="9"><source src="francais\audio\leslegumes.mp3"></source><source src="francais\audio\leslegumes.ogg"></source></audio>
	<audio id="10"><source src="francais\audio\naviguer.mp3"></source><source src="francais\audio\naviguer.ogg"></source></audio>
	<audio id="bonnereponse"><source src="francais\audio\bonnereponse.mp3"></source><source src="francais\audio\bonnereponse.ogg"></source></audio>
	<audio id="mauvaisereponse"><source src="francais\audio\mauvaisereponse.mp3"></source><source src="francais\audio\mauvaisereponse.ogg"></source></audio>

	<body>
		<?php
			include 'menu.php';
		?>		
		<nav aria-label="breadcrum">
			<ol class="breadcrumb bg-danger">
				<li class="breadcrumb-item active text-white font-weight-bold titre" aria-current="page">Français - Dictées - Dictée 24</li>
			</ol>
		</nav>		
		<br>		

		<button type="button" class="btn btn-danger consignes" id="tour">Exercice n°1 sur 10</button>
		<br><br>
		<button type="button" class="btn btn-success consignes2" onclick="jecoute();" id="jecoute">Clique ici pour écouter le mot</button>
		<br><br>
		
		<div class="input-group mb-3">
			<div class="input-group-prepend">
				<button class="btn btn-danger consignes2" type="button" id="inputGroupFileAddon03">Saisir la réponse :</button>
			</div>
			<input type="text" autocomplete="off" id="reponsee1" class="form-control" placeholder="" style="display:" aria-label="Recipient's username" aria-describedby="button-addon2">
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
