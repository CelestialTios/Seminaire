<html>
<head>
	<meta charset="utf-8">
	<title>L'horloge</title>
	<meta name="description" content="L’appli présente une horloge ainsi que l’affichage digital de l’heure.">
	<link rel="manifest" href="jeux_conf/manifest.json">
	<link href="../../css/custom.css" rel="stylesheet">
	<link href="../../css/all.css" rel="stylesheet">
	<script src="../../js/popper.min.js"></script>
	<script src="../../js/jquery.min.js"></script>
	<script src="../../js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="jeux_conf/apps/spectrum.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/apps/style.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/apps/responsive.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/apps/motifs.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/grandeurs/horloge/0.5.3/css/style.css">
	<link rel="stylesheet" type="text/css" href="jeux_conf/grandeurs/horloge/0.5.3/css/responsive.css">
	<script src="../../js/jquery-3.4.1.min.js"></script>
	<script src="jeux_conf/apps/js/jquery-ui.min.js"></script>
	<script src="jeux_conf/apps/js/jquery-ui-touch-punch-min.js"></script>
	<script src="jeux_conf/apps/js/spectrum.js"></script>
	<script src="jeux_conf/apps/js/paint.js"></script>
	<script src="jeux_conf/apps/js/apps.js"></script>
	<script src="jeux_conf/grandeurs/horloge/0.5.3/js/apps.js"></script>
</head>

<body class="body">

				<?php
			include 'menu.php';
		?>
		
		<button type="button" class="btn btn-warning consignes2"><label class="labelBtB" for="typExercices">Clique ici pour commencer les exercices</label>			<input type="radio" id="typExercices" name="typActivite" value="typExercices"></button>					<button type="button" class="btn btn-light consignes2"><label class="labelBtBc" for="typEcrire">Ecrire l'heure</label>									<input type="radio" id="typEcrire" name="typExercice" value="typEcrire" checked="checked"></button>					<button type="button" class="btn btn-light consignes2"><label class="labelBtBc" for="typAiguilles">Placer les aiguilles</label>									<input type="radio" id="typAiguilles" name="typExercice" value="typAiguilles"></button><br><br><br><br><br>
	<div id="mainpage">
		<main>

					<div id="plato">
						<div class="plato-1-1">
							<div id="horlogeBord" class="scaleIn">
								<div id="horloge">
									<div id="fracEqBox" class="fracBox">
										<div class="fracEq"></div>
									</div>

									<div id="fracEdBox" class="fracBox">
										<div class="fracEd"></div>
									</div>

									<div id="fracMqBox" class="fracBox rot-90">
										<div class="fracMq"></div>
									</div>

									<div id="fracEdBox" class="fracEdBox"></div>
									<div id="fracMqBox" class="fracMqBox"></div>

									<div id="gradMin"></div>
									<div id="gradHre"></div>

									<div id="chifHreAm"></div>
									<div id="chifHrePm"></div>
									<div id="chifMinBox">
										<div id="chifMin"></div>
										<div id="chifMinNeg"></div>
									</div>

									<div id="aigMinBox">
										<div id="aigMin"></div>
									</div>
									<div id="aigHreBox">
										<div id="aigHre"></div>
									</div>				
									<div id="aigSecBox">
										<div id="aigSec"><div id="detectSec"></div></div>
									</div>

									<div id="centre"></div>

								</div>
							</div>

							<div id="digital" class="slidLeft">
								<div id="affAmPm"></div>

								<div id="digitalBox">

									<div id="digitInterne">
										<div id="digHreBox">
											<input type="number" id="digHre" name="digHre" class="form-control bfh-number" min="" max="24" step="1" value="0">

										</div>
											<span class="sepDigit1"> : </span>
										<div id="digMinBox">
											<input type="number" id="digMin" name="digMin" min="" max="60" step="1" value="0">

										</div>
											<span class="sepDigit2"> : </span>
										<div id="digSecBox">
											<input type="number" id="digSec" name="digSec" min="" max="60" step="1" value="0">

										</div>
									</div>

									<div id="digitProp">
										<input type="tel" id="propHre" name="propHre" min="0" max="23" value="0" maxlength="2">
										<span class="sepDigit1"> : </span>
										<input type="tel" id="propMin" name="propMin" min="0" max="59" value="0" maxlength="2">
										<span class="sepDigit2"> : </span>
										<input type="tel" id="propSec" name="propSec" min="0" max="59" value="0" maxlength="2">						
									</div>

									<div id="digitAig">
										<div id="digAigHre" class="inlBlk">00</div>
										<span class="sepDigit1"> : </span>
										<div id="digAigMin" class="inlBlk">00</div>
										<span class="sepDigit2"> : </span>			
									</div>							

								</div>

								<div id="propBtBox">
									<div id="btVerifier" class="btV">Vérifier</div>
									<div id="succesBox">
										<div id="smileyBox" class="bounceIn">
											<div id="smiley" class="smiley hover-shadow"></div>
										</div>
										<div id="btSuivant" class="btV">Suivant</div>								
									</div>						
								</div>
	
						<div id="optApparence" class="inlBlk slidBottom">

							<div class="blocOptMenu2 inlBlk">
								<div class="opt-1">
									<label class="labelBtBc" for="rdAmPm">24H</label>
									<input type="radio" id="rdAmPm" name="typAmPm" value="rdAmPm" checked>
								</div>
								<div class="opt-1">
									<label class="labelBtBc" for="rdAm">AM</label>
									<input type="radio" id="rdAm" name="typAmPm" value="rdAm">
								</div>
								<div class="opt-1">
									<label class="labelBtBc" for="rdPm">PM</label>
									<input type="radio" id="rdPm" name="typAmPm" value="rdPm">
								</div>
							</div>
							
							<div class="blocOpt inlBlk">
								<div id="colHorlogeBox" class="lignOpt">
									<input type="text" id="colObjet" name="colObjet" value="#fff"><span>Horloge</span>
								</div>
								<div id="colBordBox" class="lignOpt">
									<input type="text" id="colBord" name="colBord" value="#ccc"><span>Bordures</span>
								</div>
								<div id="colPageBox" class="lignOpt">
									<input type="text" id="colPage" name="colPage" value="#fff"><span>Page</span>
									<div id="btMotif"></div><span>Motif</span>
									<input type="hidden" id="mtfClass" name="mtfClass" value="">
								</div>
							</div>

							<div class="blocOpt inlBlk">
								<div id="colHreBox" class="lignOpt">
									<input type="text" id="colHre" name="colHre" value="#333333"><span>Heures</span>
								</div>
								<div id="colMinBox" class="lignOpt">
									<input type="text" id="colMin" name="colMin" value="#333333"><span>Minutes</span>
								</div>
								<div id="colSecBox" class="lignOpt">
									<input type="text" id="colSec" name="colSec" value="#DF2929"><span>Secondes</span>
								</div>
							</div>

							<div class="blocOpt inlBlk">
								<div class="opt-1-1-1-1-1">
									<div><span><b>Aiguilles:</b></span></div>
									<div><input type="checkbox" id="checkAigHre" name="checkAigHre" value="1" checked> <label class="labelBtBc" for="checkAigHre">Heures</label></div>
									<div><input type="checkbox" id="checkAigMin" name="checkAigMin" value="1" checked> <label class="labelBtBc" for="checkAigMin">Minutes</label></div>
									<div><input type="checkbox" id="checkAigSec" name="checkAigSec" value="1" checked> <label class="labelBtBc" for="checkAigSec">Secondes</label></div>
								</div>
								<div class="opt-1-1-1-1-1">
									<div><span><b>Chiffres:</b></span></div>
									<div><input type="checkbox" id="checkChifHreAm" name="checkChifHreAm" value="1" checked> <label class="labelBtBc" for="checkChifHreAm">Heures AM</label></div>
									<div><input type="checkbox" id="checkChifHrePm" name="checkChifHrePm" value="0"> <label class="labelBtBc" for="checkChifHrePm">Heures PM</label></div>
									<div><input type="checkbox" id="checkChifMin" name="checkChifMin" value="0"> <label class="labelBtBc" for="checkChifMin">Minutes</label> <input type="checkbox" id="checkChifMinNeg" name="checkChifMinNeg" value="0" disabled> <label class="labelBtBc" for="checkChifMinNeg">Négatifs</label></div>
								</div>
								<div class="opt-1-1-1-1-1">
									<div><span><b>Graduations:</b></span></div>
									<div><input type="checkbox" id="checkGradHre" name="checkGradHre" value="1" checked> <label class="labelBtBc" for="checkGradHre">Heures</label></div>
									<div><input type="checkbox" id="checkGradMin" name="checkGradMin" value="1" checked> <label class="labelBtBc" for="checkGradMin">Minutes</label></div>
								</div>
								<div class="opt-1-1-1-1-1">
									<div><span><b>&Eacute;cran digital:</b></span></div>
									<div><input type="checkbox" id="checkDigHre" name="checkDigHre" value="1" checked> <label class="labelBtBc" for="checkDigHre">Heures</label></div>
									<div><input type="checkbox" id="checkDigMin" name="checkDigMin" value="1" checked> <label class="labelBtBc" for="checkDigMin">Minutes</label></div>
									<div><input type="checkbox" id="checkDigSec" name="checkDigSec" value="1" checked> <label class="labelBtBc" for="checkDigSec">Secondes</label></div>
								</div>
							</div>

							<div class="blocOpt inlBlk">
								<div class="lignOpt">
									<input type="checkbox" id="checkFracEq" name="checkFracEq" value="0"> <label class="labelBtBc" for="checkFracEq">1/4</label>
								</div>
								<div class="lignOpt">
									<input type="checkbox" id="checkFracEd" name="checkFracEd" value="0"> <label class="labelBtBc" for="checkFracEd">1/2</label>
								</div>
								<div class="lignOpt">
									<input type="checkbox" id="checkFracMq" name="checkFracMq" value="0"> <label class="labelBtBc" for="checkFracMq">-1/4</label>
								</div>
							</div>

							<div class="blocOptFin inlBlk">
								<div class="lignOpt">
									<div id="btStorApp" class="btN">Enregistrer</div>
									<div id="appSavSuccesBox">
										<div class="appSavSucces">OK</div>
									</div>
								</div>
								<div class="lignOpt">
									<div id="btDefStorApp" class="btG">Valeurs par défaut</div>
								</div>
								<div id="confDefStorApp" class="lignOpt">
									<div id="btConfDefStorApp" class="btR">Confirmer</div>
									<div id="btAnnulDefStorApp" class="btV">Annuler</div>
								</div>
							</div>
						</div>
		
								<div id="propAig">
									<div id="propAigBox">
									</div>
								</div>
							</div>
						</div>

				</div>		
			</div>
			<script src="jeux_conf/grandeurs/horloge/0.5.3/js/horloge.js"></script>
			<script src="jeux_conf/grandeurs/horloge/0.5.3/js/exercices.js"></script>
			<script src="jeux_conf/grandeurs/horloge/0.5.3/js/localstorage3.js"></script>
			<script src="jeux_conf/grandeurs/horloge/0.5.3/js/app.js"></script>		</main>

	</div>

	<script type="text/javascript" src="../../../js/main.js"></script>
</body>

</html>