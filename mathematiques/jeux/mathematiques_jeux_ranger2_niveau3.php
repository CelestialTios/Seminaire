<html>

 <head>

<script type="text/javascript" src="mathematiques_jeux_ranger2_niveau3.js"></script>
<link rel="stylesheet" href="../../style.css" media="screen" />
<link rel="stylesheet" href="../../imprime.css" media="print"/>
<script type="text/javascript"></script>
<link rel="icon" href="../../img/favico.png" />
<link href="../../css/custom.css" rel="stylesheet">
<link href="../../css/all.css" rel="stylesheet">
<script src="../../js/popper.min.js"></script>
<script src="../../js/jquery.min.js"></script>
<script src="../../js/bootstrap.min.js"></script>
 
	</head>

	<body onload="go();">
				
				<?php
			include 'menu.php';
		?>
		<INPUT onclick="go();" id="go1">
			<div><span id="conseil" style="font-size:16px"></span>
		<nav aria-label="breadcrum">
			<ol class="breadcrumb bg-info">
				<li class="breadcrumb-item active text-white font-weight-bold" aria-current="page">Mathématiques - Jeux - Calculs</li>
			</ol>
		</nav>
		<br>
	<div class="page" id="page">
		<div class="presentation">
			<div id="question" class="reponserange"" style="display:none">
			<button class="btn btn-success consignes" type="button" id="consigne">Range les nombres du plus grand au plus petit<br>Tu peux colorier chaque nombre en cliquant dessus.<br>Ca t'aidera à te souvenir des nombres déjà placés.</button>
			<button class="btn btn-info consignes2" type="button"><a href="javascript:selec1();"><div id="nbr1" class="question2 text-white font-weight-bold"></div></a></button>
			<button class="btn btn-info consignes2" type="button"><a href="javascript:selec2();"><div id="nbr2" class="question2 text-white font-weight-bold"></div></a></button>
			<button class="btn btn-info consignes2" type="button"><a href="javascript:selec3();"><div id="nbr3" class="question2 text-white font-weight-bold"></div></a></button>
			<button class="btn btn-info consignes2" type="button"><a href="javascript:selec4();"><div id="nbr4" class="question2 text-white font-weight-bold"></div></a></button>
			<button class="btn btn-info consignes2" type="button"><a href="javascript:selec5();"><div id="nbr5" class="question2 text-white font-weight-bold"></div></a></button>
			</div>
			<br>
		<nav aria-label="breadcrum">
			<ol class="breadcrumb bg-success">
				<li class="breadcrumb-item active text-white font-weight-bold" aria-current="page">Réponse de l'élève :</li>
			</ol>
		</nav>			
			<div id="reponse" class="reponserange text-white" style="display:none">
				<INPUT type="Nom du champ" placeholder="?" id="reponse1">
				<span>></span>
				<INPUT type="Nom du champ" placeholder="?" id="reponse2">
				<span>></span>
				<INPUT type="Nom du champ" placeholder="?" id="reponse3">
				<span>></span>
				<INPUT type="Nom du champ" placeholder="?" id="reponse4">
				<span>></span>
				<INPUT type="Nom du champ" placeholder="?" id="reponse5">
			</div>		
			<br>
			<div>
			<button class="btn btn-info consignes2" type="button" id="correction" style="display:none"></button>
			<button type="button" class="btn btn-success consignes2" id="note" style="display:none">note</button>
			</div>
			<div class="noteimage6" id="noteimage" style="display:none">
			<img src="img/champion.png" id="champion" style="display:none">
			<img src="img/bien.png" id="bien" style="display:none">
			<img src="img/effort.png" id="effort" style="display:none">
			<img src="img/dur.png" id="dur" style="display:none">
			</div>
			
			<div class="jecoutedictee">
		<INPUT class="btn btn-success consignes2" type="button" value="Valide" onclick="correction();" id="verification" style="display:none">
		</div>
		
		<div class="bouton2" id="imprime" style="display:none; text-align: center">
		<br>
		<br>
		<INPUT type="button" class="btn btn-info" value="Recommencer" onclick="javascript:window.location.reload()">
		<INPUT type="button" class="btn btn-info" value="Quitter" onclick="javascript:history.back()">
		<br>
		<br>
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