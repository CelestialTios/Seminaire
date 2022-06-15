<html> 
	<title>Classe de CE1</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../../imprime.css" media="print"/>
	<link rel="stylesheet" href="jeux_conf/responsive.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/apps/spectrum.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/apps/style.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/apps/responsive.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/apps/css/motifs.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/grandeurs/regle/0.1.0/css/style.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/grandeurs/regle/0.1.0/css/responsive.css">
	<link rel="icon" href="img/favico.png" />
	<link rel="manifest" href="jeux_conf/manifest.json">
	<link href="../../css/custom.css" rel="stylesheet">
	<link href="../../css/all.css" rel="stylesheet">
	<script src="../../js/popper.min.js"></script>
	<script src="../../js/jquery.min.js"></script>
	<script src="../../js/bootstrap.min.js"></script>

	<script src="../../../js/jquery-3.4.1.min.js"></script>
	<script src="jeux_conf/apps/js/jquery-ui.min.js"></script>

	<script src="jeux_conf/apps/js/jquery-ui-touch-punch-min.js"></script>

	<script src="jeux_conf/apps/js/spectrum.js"></script>

	<script src="jeux_conf/apps/js/paint.js"></script>

	<script src="jeux_conf/apps/js/apps.js"></script>
	</head>
	
	<body class="body">
				
				<?php
			include 'menu.php';
		?>
	<div id="mainpage">
			<main>
		<nav aria-label="breadcrum">
			<ol class="breadcrumb bg-info">
				<li class="breadcrumb-item active text-white font-weight-bold" aria-current="page">Mathématiques - Jeux - Grandeurs et mesures</li>
			</ol>
		</nav>
		<button type="button" class="btn btn-success consignes" id="consigne">Mesures les traits avec la règle</button><br>
		<br><br>
	
	
	
	<main>

				<div id="loader"</div>
				</div>
			
						<button type="button" class="btn btn-info consignes">
							<label class="labelBtBc" for="rdEntier">Entier</label>
							<input type="radio" id="rdEntier" name="typNombre" value="Entier" checked="checked">
						</button>

						<button type="button" class="btn btn-info consignes">
									<label class="labelBtBc" for="rdDecimal">Décimal</label>
									<input type="radio" id="rdDecimal" name="typNombre" value="Decimal">
						</button>

						<button type="button" class="btn btn-info consignes">
							<label class="labelBtB" for="typInteractive">Manipuler</label>
							<input type="radio" id="typInteractive" name="typActivite" value="typInteractive" checked="checked">
						</button>	

						<button type="button" class="btn btn-info consignes">
							<label class="labelBtB" for="typExercices">Exercices</label>
							<input type="radio" id="typExercices" name="typActivite" value="typExercices">
						</button>
						
					<div id="page">
					</div>	
						
					<div id="plato">
						<div class="plato-1-1">
							<div id="compoBox"
								<div id="depoCompoBox">
									<div id="depoCompo">
									</div>
								</div>
							</div>					
						</div>

						<div id="propBtBox" class="slidTop">
							<div id="propNbrBox">
								<input type="tel" id="propNbr" name="propNbr" value="" maxlength="7"><div id="unite">cm</div>
							</div>
							<div id="btVerifier" class="btV">Vérifier</div>
							<div id="succesBox">
								<div id="smileyBox" class="bounceIn">
									<div id="smiley" class="smiley hover-shadow"></div>
								</div>
								<div id="btSuivant" class="btV">Suivant</div>
							</div>
						</div>

					</div>

					<div id="rglBox">
						<div id="rglDrag" class="slidTop">
							<div id="regle">
								<div id="grad"></div>
								<div id="btRgl">
									<div id="btRglHrz" class="btRgl">&#8596</div>
									<div id="btRglVrt" class="btRgl">&#8597</div>
									<div id="btRglRot" class="btRgl">&#8634</div>
								</div>
							</div>
							
						</div>
					</div>		
	
			<script src="jeux_conf/grandeurs/regle/0.1.0/js/exercices.js"></script>
			<script src="jeux_conf/grandeurs/regle/0.1.0/js/localstorage.js"></script>
			<script src="jeux_conf/grandeurs/regle/0.1.0/js/app.js"></script>
			</main>
			
			<script type="text/javascript" src="../../../js/main.js"></script>
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