<?php include '../../../../components/menu.php' ?>

	<audio id="1"><source src="..\..\audio\ilya.mp3"></source><source src="..\..\audio\ilya.ogg"></source></audio>
	<audio id="2"><source src="..\..\audio\avec.mp3"></source><source src="..\..\audio\avec.ogg"></source></audio>
	<audio id="3"><source src="..\..\audio\alors.mp3"></source><source src="..\..\audio\alors.ogg"></source></audio>
	<audio id="4"><source src="..\..\audio\parceque.mp3"></source><source src="..\..\audio\parceque.ogg"></source></audio>
	<audio id="5"><source src="..\..\audio\mardi.mp3"></source><source src="..\..\audio\mardi.ogg"></source></audio>
	<audio id="6"><source src="..\..\audio\ici.mp3"></source><source src="..\..\audio\ici.ogg"></source></audio>
	<audio id="7"><source src="..\..\audio\plus.mp3"></source><source src="..\..\audio\plus.ogg"></source></audio>
	<audio id="8"><source src="..\..\audio\sur.mp3"></source><source src="..\..\audio\sur.ogg"></source></audio>
	<audio id="9"><source src="..\..\audio\samedi.mp3"></source><source src="..\..\audio\samedi.ogg"></source></audio>
	<audio id="10"><source src="..\..\audio\dessus.mp3"></source><source src="..\..\audio\dessus.ogg"></source></audio>
	<audio id="bonnereponse"><source src="..\..\audio\bonnereponse.mp3"></source><source src="..\..\audio\bonnereponse.ogg"></source></audio>
	<audio id="mauvaisereponse"><source src="..\..\audio\mauvaisereponse.mp3"></source><source src="..\..\audio\mauvaisereponse.mp3"></source></audio>
	
		<nav aria-label="breadcrum">
			<ol class="breadcrumb bg-danger">
				<li class="breadcrumb-item active text-white font-weight-bold titre" aria-current="page">Français - Dictées - Dictée 1</li>
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
			<input type="text" autocomplete="off" id="reponsee1" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2">
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
