<?php
	$ROOT = "/Seminaire/"; // /~gommettes/Seminaire/
	$_ENV['ROOT'] = $ROOT;
	$_SERVER['ROOT'] = $ROOT;
?>

<html lang="fr"> 
	<head>
		<title>Classe de CE1</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link 
			href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
			rel="stylesheet">
		<link rel="stylesheet" href="<?=$_ENV['ROOT']?>Content/css/style.css">
		<link rel="apple-touch-icon" sizes="180x180" href="<?=$_ENV['ROOT']?>Content/img/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="<?=$_ENV['ROOT']?>Content/img/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="<?=$_ENV['ROOT']?>Content/img/favicon-16x16.png">
		<link rel="manifest" href="<?=$_ENV['ROOT']?>Content/site.webmanifest">
		<link rel="mask-icon" href="<?=$_ENV['ROOT']?>Content/img/safari-pinned-tab.svg" color="#5bbad5">
		<meta name="msapplication-TileColor" content="#da532c">
		<meta name="theme-color" content="#ffffff"> 
	</head>
	
	<body class="bg">
		<script type="text/javascript">
			document.oncontextmenu = new Function("return false");
		</script>
		
		<header>
			<div class="nav-header">
				<div class="wrapper-logo">
					<div class="container-logo">
						<img src="<?=$_ENV['ROOT']?>Content/img/pot_2_colle_LOGO_RVB.svg" alt="Logo du site">
					</div>
					<div class="container-user x-hide-desktop">
						<svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M38.8636 20.7273C38.8636 23.4759 37.7717 26.1119 35.8282 28.0555C33.8846 29.999 31.2486 31.0909 28.5 31.0909C25.7514 31.0909 23.1153 29.999 21.1718 28.0555C19.2282 26.1119 18.1364 23.4759 18.1364 20.7273C18.1364 17.9787 19.2282 15.3426 21.1718 13.3991C23.1153 11.4555 25.7514 10.3636 28.5 10.3636C31.2486 10.3636 33.8846 11.4555 35.8282 13.3991C37.7717 15.3426 38.8636 17.9787 38.8636 20.7273ZM33.6818 20.7273C33.6818 22.1016 33.1359 23.4196 32.1641 24.3914C31.1923 25.3632 29.8743 25.9091 28.5 25.9091C27.1257 25.9091 25.8077 25.3632 24.8359 24.3914C23.8641 23.4196 23.3182 22.1016 23.3182 20.7273C23.3182 19.353 23.8641 18.035 24.8359 17.0632C25.8077 16.0914 27.1257 15.5455 28.5 15.5455C29.8743 15.5455 31.1923 16.0914 32.1641 17.0632C33.1359 18.035 33.6818 19.353 33.6818 20.7273Z"
								fill="#51B9CA" />
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M28.5 0C12.7602 0 0 12.7602 0 28.5C0 44.2398 12.7602 57 28.5 57C44.2398 57 57 44.2398 57 28.5C57 12.7602 44.2398 0 28.5 0ZM5.18182 28.5C5.18182 33.915 7.02914 38.8999 10.1253 42.8588C12.2996 40.0034 15.1047 37.6893 18.3214 36.0974C21.5381 34.5054 25.0793 33.6787 28.6684 33.6818C32.211 33.6785 35.7077 34.4838 38.892 36.0364C42.0762 37.589 44.8641 39.848 47.0431 42.6412C49.288 39.6969 50.7995 36.2603 51.4526 32.6159C52.1056 28.9714 51.8815 25.2239 50.7986 21.6833C49.7158 18.1427 47.8054 14.9108 45.2256 12.2551C42.6457 9.59939 39.4706 7.59618 35.9628 6.41123C32.4551 5.22627 28.7156 4.89364 25.0537 5.44084C21.3919 5.98804 17.913 7.39935 14.9049 9.558C11.8968 11.7166 9.44596 14.5606 7.75518 17.8545C6.0644 21.1483 5.18229 24.7975 5.18182 28.5ZM28.5 51.8182C23.1471 51.8262 17.9557 49.9847 13.8044 46.6053C15.4753 44.2132 17.6994 42.2601 20.2873 40.9122C22.8753 39.5644 25.7505 38.8616 28.6684 38.8636C31.5499 38.8613 34.3904 39.5465 36.9539 40.8623C39.5175 42.1781 41.7301 44.0865 43.4081 46.4291C39.2245 49.9183 33.9476 51.8258 28.5 51.8182Z"
								fill="#51B9CA" />
						</svg>
					</div>
					<nav class="container-link x-hide-tablette x-hide-mobile">
						<ol>
							<li><a class="h2-title" href="<?=$_ENV['ROOT']?>index.php">Accueil</a></li>
							<li><a class="h2-title" href="<?=$_ENV['ROOT']?>photos/photos.php">Classes</a></li>
							<!--TODO-->
							<li><a class="h2-title" href="">Se connecter</a></li>
						</ol>
					</nav>
				</div>
			</div>
			<div class="nav-matieres">
				<ol>
					<li class="x-grid-16 buttons-nav">
						<img class="cl-1-17 rw-1-17" src="<?=$_ENV['ROOT']?>Content/img/Pattern__Maths_normale.svg" alt="pattern svg de Maths"> 
						<a href="<?=$_ENV['ROOT']?>cours/mathematiques/mathematiques_lecons.php" class="cl-1-17 rw-1-17 h2-title">Mathématiques</a>
					</li>
					<li class="x-grid-16 buttons-nav">
						<img class="cl-1-17 rw-1-17" src="<?=$_ENV['ROOT']?>Content/img/Pattern__Francais_normale.svg" alt="pattern svg de Français">
						<a href="<?=$_ENV['ROOT']?>cours/francais/lecons/francais_lecons.php" class="cl-1-17 rw-1-17 h2-title">Français</a>
					</li>
					<li class="x-grid-16 buttons-nav">
						<img class="cl-1-17 rw-1-17" src="<?=$_ENV['ROOT']?>Content/img/Pattern__Anglais_normale.svg" alt="pattern svg d'Anglais">
						<a href="<?=$_ENV['ROOT']?>cours/anglais/anglais_lecons.php" class="cl-1-17 rw-1-17 h2-title">Anglais</a>
					</li>
					<li class="x-grid-16 buttons-nav">
						<img class="cl-1-17 rw-1-17" src="<?=$_ENV['ROOT']?>Content/img/Pattern__Chorale_normale.svg" alt="pattern svg de Chorale">
						<a href="<?=$_ENV['ROOT']?>cours/arts/chorale.php" class="cl-1-17 rw-1-17 h2-title">Chorale</a>
					</li>
					<li class="x-grid-16 buttons-nav">
						<img class="cl-1-17 rw-1-17" src="<?=$_ENV['ROOT']?>Content/img/Pattern__Decouvertedumonde_normale.svg" alt="pattern svg de Découverte">
						<a href="<?=$_ENV['ROOT']?>cours/ddm/ddm_lecons.php" class="cl-1-17 rw-1-17 h2-title">Découverte du monde</a>
					</li>
					<li class="x-grid-16 buttons-nav">
						<!-- <img class="cl-1-17 rw-1-17" src="<?=$_ENV['ROOT']?>Content/img/Pattern__Maths_normale.svg" alt="pattern svg de maths"> !-->
						<a href="<?=$_ENV['ROOT']?>jeux/mathematiques/numeration/mathematiques_jeux_numeration.php" class="cl-1-17 rw-1-17 h1-title">Jeux</a>
					</li>
				</ol>
			</div>
			<nav class="navbar-mobile x-hide-desktop">
				<ol>
					<li>
						<!-- FORUM -->
						<!--TODO-->
						<a href="">
							<img src="<?=$_ENV['ROOT']?>Content/img/forum.svg" alt="svg du bouton forum">
						</a>
					</li>
					<li>
						<!-- HOME -->
						<a href="<?=$_ENV['ROOT']?>index.php">
							<img src="<?=$_ENV['ROOT']?>Content/img/home.svg" alt="svg du bouton d'accueil">
						</a>
					</li>
					<li>
						<!-- DEVOIRS -->
						<a href="<?=$_ENV['ROOT']?>classe/rituel.php">
							<img src="<?=$_ENV['ROOT']?>Content/img/devoirs.svg" alt="svg du bouton de devoirs">
						</a>
					</li>
				</ol>
			</nav>
		</header>

    	<script src="https://cdn.tailwindcss.com"></script>