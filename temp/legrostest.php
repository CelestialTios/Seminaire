<?php

    $liste = array("voiture",
        "chien",
        "chat",
        "bouteille") ;
       

    for ( $i = 1 ; $i < sizeof($liste) ; $i++  ) {
        echo("<br>") ;
        echo($liste[$i]);
        echo("<br />") ;
    }

    echo("<br />") ;
    print_r($liste);

?>
