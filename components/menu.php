<?php
	$ROOT = "/~gommettes/Seminaire/";
	$_ENV['ROOT'] = $ROOT;
	$_SERVER['ROOT'] = $ROOT;
?>

<html> 
	<head>
		<title>Classe de CE1</title>
		<link rel="icon" href="<?=$_ENV['ROOT']?>Content/img/favico.png" />
		<link href="<?=$_ENV['ROOT']?>Content/css/custom.css" rel="stylesheet">
		<link href="<?=$_ENV['ROOT']?>Content/css/all.css" rel="stylesheet">
		<script src="<?=$_ENV['ROOT']?>Content/js/popper.min.js"></script>
		<script src="<?=$_ENV['ROOT']?>Content/js/jquery.min.js"></script>
		<script src="<?=$_ENV['ROOT']?>Content/js/bootstrap.min.js"></script>
		<meta http-equiv="refresh" content="300" />
	</head>
	
	<body>
		<style>
			body {
				background-image: url('../Content/img/background.png');
				background-size: 100%;
			}
		</style>
			
			<script type="text/javascript">
			document.oncontextmenu = new Function("return false");
			</script>
			<div class="btn-group d-flex menu" role="group" aria-label="Basic example">
				<a href="index.php" class="menu btn btn-dark font-weight-bold fas fa-home"><b style="font-family:perso"><br> Accueil</b></a>
				<div class="btn-group" role="group">
					<button id="btnGroupDrop1" type="button" class="menu btn btn-danger dropdown-toggle font-weight-bold fa fa-book-open" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b style="font-family:perso"><br> Français</b></button>
					<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
						<a class="dropdown-item" href="<?=$_ENV['ROOT']?>cours/francais/lecons/francais_lecons.php">Leçons</a>
						<a class="dropdown-item" href="<?=$_ENV['ROOT']?>cours/dictee/francais_dictees.php">Dictées</a>
						<a class="dropdown-item" href="<?=$_ENV['ROOT']?>jeux/francais/francais_jeux.php">Jeux</a>
					</div>
				</div>
				
				<div class="btn-group" role="group">
					<button id="btnGroupDrop1" type="button" class="menu btn btn-info dropdown-toggle font-weight-bold fa fa-plus" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b style="font-family:perso"><br> Mathématiques</b></button>
					<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
						<a class="dropdown-item" href="<?=$_ENV['ROOT']?>cours/mathematiques/mathematiques_lecons.php">Leçons</a>
						<a class="dropdown-item" href="<?=$_ENV['ROOT']?>jeux/mathematiques/mathematiques_jeux.php">Jeux</a>
					</div>
				</div>
				
				<div class="btn-group" role="group">
					<button id="btnGroupDrop1" type="button" class="menu btn btn-primary dropdown-toggle font-weight-bold fas fa-globe-americas" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b style="font-family:perso"><br> Anglais</b></button>
					<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
						<a class="dropdown-item" href="<?=$_ENV['ROOT']?>cours/anglais/anglais_lecons.php">Leçons</a>
						<a class="dropdown-item" href="<?=$_ENV['ROOT']?>jeux/anglais/anglais_jeux.php">Jeux</a>					
					</div>
				</div>
				
				<div class="btn-group" role="group">
					<button id="btnGroupDrop1" type="button" class="menu btn btn-success dropdown-toggle font-weight-bold fas fa-rocket" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b style="font-family:perso"><br> Découverte du monde</b></button>
					<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
						<a class="dropdown-item" href="<?=$_ENV['ROOT']?>cours/ddm/ddm_lecons.php">Leçons</a>
						<a class="dropdown-item" href="<?=$_ENV['ROOT']?>jeux/ddm/ddm_jeux.php">Jeux</a>					
					</div>
				</div>
				<a href="/Seminaire/cours/arts/chorale.php" class="menu btn btn-warning font-weight-bold fa fa-music">
					<b style="font-family:perso"><br> Chorale</b>
				</a>
				<div class="btn-group" role="group">
					<button id="btnGroupDrop1" type="button" class="menu btn btn-light  dropdown-toggle font-weight-bold fas fa-camera-retro" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<b style="font-family:perso"><br> Classe</b>
					</button>				
					<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
						<a class="dropdown-item" href="<?=$_ENV['ROOT']?>classe/rituel.php">Devoirs</a>
						<a class="dropdown-item" href="<?=$_ENV['ROOT']?>classe/quadrillage.php">Quadrillage</a>
						<a class="dropdown-item" href="<?=$_ENV['ROOT']?>classe/ecriture.php">Ecriture</a>
						<a class="dropdown-item" href="<?=$_ENV['ROOT']?>classe/tbi.php">TBI</a>
						<a class="dropdown-item" href="<?=$_ENV['ROOT']?>photos/photos.php">Photos</a>
					</div>
				</div>
				<a href="javascript:history.go(-1)" class="menu btn btn-dark font-weight-bold fa fa-arrow-circle-left">
					<b style="font-family:perso"><br> Retour</b>
				</a>
				
			</div>
			<br>
			<br>