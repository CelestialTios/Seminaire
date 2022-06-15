<html> 
	<title>Classe de CE1</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../../imprime.css" media="print"/>
	<link rel="stylesheet" href="jeux_conf/responsive.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/apps/spectrum.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/apps/style.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/apps/responsive.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/apps/css/motifs.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/calcul-ecrit/addition/0.1.7/css/style.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/calcul-ecrit/addition/0.1.7/css/responsive.css">
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
	<meta property="og:title" content="Calcul écrit : l'addition" />
	<meta property="og:type" content="article" />
	<meta property="og:description" content="L’appli présente des additions à résoudre en calcul écrit" />


<body class="body">
				
				<?php include 'menu.php'; ?>
	<div id="mainpage">
		<main>
		<nav aria-label="breadcrum">
			<ol class="breadcrumb bg-info">
				<li class="breadcrumb-item active text-white font-weight-bold" aria-current="page">Mathématiques - Jeux - Calculs</li>
			</ol>
		</nav>
		<button type="button" class="btn btn-success consignes" id="consigne">Complète l'addition ci-dessous</button><br>
		<br><br>
					<button type="button" >
					<div id="plato">
						<div class="plato-1-1">
							<div id="compoBox" class="scaleIn">
								<div id="depoCompoBox">
									<div id="depoCompo">
										<div id="calculBox">											
										</div>
									</div>
								</div>
							</div>							
						</div>
					</div></button>
						<button type="button" class="btn btn-info consignes">
								<div><strong>Structure de l'opération</strong></div>
								<table id="tblOp">
									<tr>
										<td><strong>M</strong></td>
										<td><strong>C</strong></td>
										<td><strong>D</strong></td>
										<td><strong>U</strong></td>
									</tr>
									<tr>
										<td><input type="checkbox" id="chk1M" name="chk1M"></td>
										<td><input type="checkbox" id="chk1C" name="chk1C"></td>
										<td><input type="checkbox" id="chk1D" name="chk1D" checked></td>
										<td><input type="checkbox" id="chk1U" name="chk1U" checked></td>
									</tr>
									<tr>
										<td><input type="checkbox" id="chk2M" name="chk2M"></td>
										<td><input type="checkbox" id="chk2C" name="chk2C"></td>
										<td><input type="checkbox" id="chk2D" name="chk2D" checked></td>
										<td><input type="checkbox" id="chk2U" name="chk2U" checked></td>
									</tr>
									<tr>
										<td><input type="checkbox" id="chk3M" name="chk3M"></td>
										<td><input type="checkbox" id="chk3C" name="chk3C"></td>
										<td><input type="checkbox" id="chk3D" name="chk3D"></td>
										<td><input type="checkbox" id="chk3U" name="chk3U"></td>
									</tr>
								</table>
								<table id="tblOpD">
									<tr>
										<td><strong>,</strong></td>
										<td><strong>d</strong></td>
										<td><strong>c</strong></td>
										<td><strong>m</strong></td>
									</tr>
									<tr>
										<td>,</td>
										<td><input type="checkbox" id="chk1Ud" name="chk1Ud" checked></td>
										<td><input type="checkbox" id="chk1Uc" name="chk1Uc" checked></td>
										<td><input type="checkbox" id="chk1Um" name="chk1Um"></td>
									</tr>
									<tr>
										<td>,</td>
										<td><input type="checkbox" id="chk2Ud" name="chk2Ud" checked></td>
										<td><input type="checkbox" id="chk2Uc" name="chk2Uc"></td>
										<td><input type="checkbox" id="chk2Um" name="chk2Um"></td>
									</tr>
									<tr>
										<td>,</td>
										<td><input type="checkbox" id="chk3Ud" name="chk3Ud"></td>
										<td><input type="checkbox" id="chk3Uc" name="chk3Uc"></td>
										<td><input type="checkbox" id="chk3Um" name="chk3Um"></td>
									</tr>
								</table>
								
							<div class="blocOpt inlBlk">
								<div class="lignOpt">
									<input type="checkbox" id="chkRang" name="chkRang"> <label class="labelBtBc" for="chkRang">Rangs</label>
								</div>
							</div>
							</button>
												<div id="propBtBox" class="slidTop">
							<div id="btVerifier" class="btV">Vérifier</div>
							<div id="succesBox">
								<div id="smileyBox" class="bounceIn">
									<div id="smiley" class="smiley hover-shadow"></div>
								</div>
								<div id="btSuivant" class="btV">Suivant</div>		
							</div>
						</div>


			<script src="jeux_conf/calcul-ecrit/addition/0.1.7/js/exercices.js"></script>
			<script src="jeux_conf/calcul-ecrit/addition/0.1.7/js/localstorage.js"></script>
			<script src="jeux_conf/calcul-ecrit/addition/0.1.7/js/app.js"></script>		</main>
		

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