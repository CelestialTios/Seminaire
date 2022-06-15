<html> 
	<title>Classe de CE1</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../../imprime.css" media="print"/>
	<link rel="stylesheet" href="jeux_conf/responsive.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/apps/spectrum.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/apps/style.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/apps/responsive.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/apps/css/motifs.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/grandeurs/monnaie/0.2.3/css/style.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/grandeurs/monnaie/0.2.3/css/responsive.css">
	<link rel="icon" href="img/favico.png" />
	<link rel="manifest" href="jeux_conf/manifest.json">
	<link href="../../css/custom.css" rel="stylesheet">
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
	<body>
<title>accueil</title>

	</head>
				
				<?php
			include 'menu.php';
		?>

			<div><span id="conseil" style="font-size:16px"></span>
		<nav aria-label="breadcrum">
			<ol class="breadcrumb bg-info">
				<li class="breadcrumb-item active text-white font-weight-bold" aria-current="page">Mathématiques - Jeux - Grandeurs et mesures</li>
			</ol>
			<body onload="go();">
				<script type="text/javascript">
			function go()
			{
		document.getElementById("typExercices").style.display = "none";
		document.getElementById("1").style.display = "none";
		document.getElementById("2").style.display = "none";
		document.getElementById("3").style.display = "none";
			}
			
			function go2()
			{
		document.getElementById("0").style.display = "none";
		document.getElementById("1").style.display = "";
		document.getElementById("2").style.display = "";
		document.getElementById("3").style.display = "";
			}
			
						function go3()
			{
		document.getElementById("4").style.display = "none";
			}
			
			</script>
						<button type="button" id=0 class="btn btn-success consignes" onclick="go2();">
								<label for="typExercices">Cliques ici pour faire des exercices</label>
								<input id="typExercices"  value="typExercices">
							</button>
			
				
						<button type="button" id=1 class="btn btn-success consignes">
									<label for="typComposer">Composer la somme</label>
									<input type="radio" id="typComposer" name="typExercice" value="typComposer">
						</button>
						
							<button type="button" id=2 class="btn btn-success consignes">
									<label for="typEcrire">Calculer la somme</label>
									<input type="radio" id="typEcrire" name="typExercice" value="typEcrire">
						</button>
						
							<button type="button" id=3 class="btn btn-success consignes">
									<label for="typRendre">Rendre la monnaie</label>
									<input type="radio" id="typRendre" name="typExercice" value="typRendre">
						</button>
							<button type="button" id=4 class="btn btn-success consignes" onclick="go3();">
									<label for="rdDecimal">Avec des centimes ?</label>
									<input type="radio" id="rdDecimal" name="typNombre" value="rdDecimal" style="display:none">
						</button>
							</div>
					<div id="plato">
						<div class="plato-1-1">
							<div id="compoBox"">
								<div id="depoCompoBox">
									<div id="depoCompo" class="droppable">
									</div>
								</div>
								<div id="corb" class="icBg40 inlBlk"><img src="img/corb.png" class="imgBt"></div>
							</div>

							<div id="depoEcrireBox" class="scaleIn">
								<div id="depoEcrire" class="ctrVerti"></div>
							</div>

							<div id="digital" class="slidLeft">
								<div id="digitalBox" class="slidLeft">
									<div id="digRendreBox" class="slidBottom">
										<div id="jeDois" class="infBul1"></div>
										<div id="jeDonne" class="infBul1"></div>
										<div id="onRend" class="infBul1"><span class="numInfBul">3</span>On me rend:</div>
									</div>
									<div id="digCompoBox" class="slidTop">
										<span class="fl1D">&#10148;</span>
										<input type="text" id="affSomme" name="affSomme" value="">
									</div>
									<div id="digEcrireBox" class="inlBlk slidTop">
										<span class="fl1D">&#10148;</span>
										<input type="tel" id="digEcrire" name="digEcrire" value="" maxlength="7"><span class="euro">€</span>
									</div>
									<div id="digComposerBox" class="slidTop">
										<span class="fl1G">&#10148;</span>
										<div id="affComposer">0,00 €</div>
									</div>
								</div>

								<div id="propBtBox" class="slidTop">
									<div id="btVerifier" class="btV">Vérifier</div>
									<div id="succesBox">
										<div id="smileyBox" class="bounceIn">
											<div id="smiley" class="smiley hover-shadow"></div>
										</div>
										<div id="btSuivant" class="btV">Suivant</div>								
									</div>						
								</div>
							</div>
						</div>



					<div id="distrib" class="slidTop">
						<div id="distP">
							<div class="pieceBox"><img class="p2 draggable piece" data-val="2" id="p2e" src="img/piece-2e.png" width="70"></div>
							<div class="pieceBox"><img class="p1 draggable piece" data-val="1" src="img/piece-1e.png" width="62.5"></div>
							<div class="pieceBox"><img class="p50c draggable piece" data-val="0.5" src="img/piece-50c.png" width="65.2"></div>
							<div class="pieceBox"><img class="p20c draggable piece" data-val="0.2" src="img/piece-20c.png" width="60.2"></div>
							<div class="pieceBox"><img class="p10c draggable piece" data-val="0.1" src="img/piece-10c.png" width="54.5"></div>
							<div class="pieceBox"><img class="p5c draggable piece" data-val="0.05" src="img/piece-5c.png" width="54.4"></div>
							<div class="pieceBox"><img class="p2c draggable piece" data-val="0.02" src="img/piece-2c.png" width="49.7"></div>
							<div class="pieceBox"><img class="p1c draggable piece" data-val="0.01" src="img/piece-1c.png" width="45.2"></div>
						</div>
								<div class="slidBox">
									<div id="sliderTemp" class="slid">
										<div id="handTemp" class="ui-slider-handle slidHandle"></div>
									</div>
								</div>
						<div id="distB">
							<div class="billetBox"><img class="b500 draggable billet" data-val="500" src="img/billet-500e.png" width="154.32"></div>
							<div class="billetBox"><img class="b200 draggable billet" data-val="200" src="img/billet-200e.png" width="147.5"></div>
							<div class="billetBox"><img class="b100 draggable billet" data-val="100" src="img/billet-100e.png" width="142"></div>
							<div class="billetBox"><img class="b50 draggable billet" data-val="50" src="img/billet-50e.png" width="135.22"></div>
							<div class="billetBox"><img class="b20 draggable billet" data-val="20" src="img/billet-20e.png" width="128.18"></div>
							<div class="billetBox"><img class="b10 draggable billet" data-val="10" src="img/billet-10e.png" width="122.73"></div>
							<div class="billetBox"><img class="b5 draggable billet" data-val="5" id="b5e" src="img/billet-5e.png" width="115.91"></div>
						</div>
					</div>

				</div>
			</div>
			<script src="jeux_conf/grandeurs/monnaie/0.2.3/js/exercices.js"></script>
			<script src="jeux_conf/grandeurs/monnaie/0.2.3/js/dragdrop.js"></script>
			<script src="jeux_conf/grandeurs/monnaie/0.2.3/js/localstorage.js"></script>
			<script src="jeux_conf/grandeurs/monnaie/0.2.3/js/app.js"></script>		</main>
		</div>
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
