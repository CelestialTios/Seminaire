<table class="table font-weight-bold text-center">
	<title>Classe de CE1</title>
	<link rel="icon" href="../img/favico.png" />
	<link href="../css/custom.css" rel="stylesheet">
	<link href="../css/all.css" rel="stylesheet">
	<script src="../js/popper.min.js"></script>
	<script src="../js/jquery.min.js"></script>
	<script src="../js/bootstrap.min.js"></script>
<tbody>

<?php

$liste_conjugaison = array(
    "Passé, Présent, Futur",
    "Comment conjuguer un verbe ?",
    "Le verbe en -er au présent",
    "Le verbe en -er au présent - Vidéo explicative",
    "Le verbe être au présent",
    "Le verbe avoir au présent",
    "Le verbe finir au présent",
    "Les verbes aller et venir au présent",
    "Les verbes  dire, faire et pouvoir au présent",
    "Les verbes au futur",
    "Les verbes être et avoir au futur",
    "Les verbes -er à l'imparfait",
    "Les verbes être et avoir à l'imparfait") ; 

    echo("<div>") ; 
    echo("--------------") ; 
    //echo($_GET['page']);
    echo("<div>") ; 

    if ( $_GET['page'] >= -1 ) {
        echo("") ;
        echo( $liste_conjugaison[$_GET['page']] ) ;
        echo("<div>") ; 
        echo("<a " . "href=" . '"' . "test_menu2.php" . '"' . 'class="col table-fontlarge"> <b style="font-family:perso"> ' . "Menu" . "</b></a>"  );
        echo("<div>") ; 
    }
    else {
        for ( $i = 0 ; $i < sizeof($liste_conjugaison) ; $i++  ) {
            echo('<tr class="bg-danger text-white text-center table-fontlarge">');
            echo("Conjugaison $i <td>");
            //echo("<a " . "href=" . '"' . "francais_lecons_conjugaison_.php?page=$i" . '"' . 'class="col table-fontlarge"> <b style="font-family:perso"> ' . $liste_conjugaison[$i] . "</b></a>"  );
            echo("<a " . "href=" . '"' . "test_menu2.php?page=$i" . '"' . 'class="col table-fontlarge"> <b style="font-family:perso"> ' . $liste_conjugaison[$i] . "</b></a>"  );
            echo("</td> </tr>");
        }
    }

include 'menu.php';
 ?>

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


</table>




