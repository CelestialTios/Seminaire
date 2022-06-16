<html>
<title>Classe de CE1</title>
<link rel="icon" href="../img/favico.png" />
<link href="../css/custom.css" rel="stylesheet">
<link href="../css/all.css" rel="stylesheet">
<script src="../js/popper.min.js"></script>
<script src="../js/jquery.min.js"></script>
<script src="../js/bootstrap.min.js"></script>

<body>
  <?php
  include 'menu.php';
  ?>

  <style>
    * {
      box-sizing: border-box;
    }

    img {
      vertical-align: middle;
    }

    /* Position the image container (needed to position the left and right arrows) */
    .container {
      position: relative;
      background-color: #212528;
    }

    /* Hide the images by default */
    .mySlides {
      display: none;
      text-align: center;
    }

    /* Add a pointer when hovering over the thumbnail images */
    .cursor {
      cursor: pointer;
    }

    /* Next & previous buttons */
    .prev,
    .next {
      cursor: pointer;
      position: absolute;
      top: 0%;
      width: auto;
      padding: 16px;
      margin-top: -50px;
      color: white;
      font-weight: bold;
      font-size: 20px;
      border-radius: 0 3px 3px 0;
      user-select: none;
      -webkit-user-select: none;
      background-color: white;
    }

    /* Position the "next button" to the right */
    .next {
      right: 0;
      border-radius: 3px 0 0 3px;
    }

    /* On hover, add a black background color with a little bit see-through */
    .prev:hover,
    .next:hover {
      background-color: white;
    }

    /* Number text (1/3 etc) */
    .numbertext {
      color: #f2f2f2;
      font-size: 12px;
      padding: 8px 12px;
      position: absolute;
      top: 0;
    }

    /* Six columns side by side */
    .column {
      float: left;
      width: 10%;
    }

    /* Add a transparency effect for thumnbail images */
    .demo {
      opacity: 1;
    }

    .active,
    .demo:hover {
      opacity: 1;
    }
  </style>

  <body>
    <h2 style="text-align:center ; color: white ">Photos des classes de CE1</h2>

    <?php
      //scan du repertoire contenant les photos
      $list=scandir("../photos/");
      $nb_photos=0;
      $incplusun=0;
      $liste_photos=[];

      foreach ($list as $a) {
        if (fnmatch("*.[JjMm][PpOo][Gg4Vv]",$a,0)) {
          $liste_photos[$nb_photos]=$a;
          $nb_photos=$nb_photos+1;
          }
      }

      //debut main div
      echo('<div class="container">');
      
      //div slide
      for ( $inc=0 ; $inc < count($liste_photos) ; $inc++)  {
        echo('<div class="mySlides">');
        $incplusun=1 + $inc;
        echo('<div class="numbertext">' . $incplusun . "/" . count($liste_photos) . '</div>');
		if (fnmatch("*.[Mm][PpOo][4Vv]",$liste_photos[$inc],0)) {
			echo('<video controls width="100%">');
			echo('<source src="' . $liste_photos[$inc] . '" type="video/mp4">');
			echo('</video>');
		} else {
			echo('<img src="' . $liste_photos[$inc] . '" style="width:60%">');
		}
        echo('</div>');
      }
      echo('<a class="prev" onclick="plusSlides(-1)">❮</a>');
      echo('<a class="next" onclick="plusSlides(1)">❯</a>');

      echo('<div class="caption-container">');
      echo('<p id="caption"></p>');
      echo('</div>');
      echo('<div class="row">');
      echo('</div>');

      $incplusun=0;

      //div column
      for ( $inc=0 ; $inc < count($liste_photos) ; $inc++)  {
        echo('<div class="column">');
        $incplusun=1 + $inc ;
        //echo('<img class="demo cursor" src="' . $liste_photos[$inc] . '" style="width: 100% ; border: 1px solid grey; "   onclick="currentSlide('. $incplusun .')">');
		if (fnmatch("*.[Mm][PpOo][4Vv]",$liste_photos[$inc],0)) {
			echo('<video style="width: 100px ; height: 80px ; object-fit: cover; border: 1px solid grey; " onclick="currentSlide('. $incplusun .')">');
			echo('<source src="' . $liste_photos[$inc] . '" type="video/mp4">');
			echo('</video>');
		} else {
			echo('<img class="demo cursor" src="' . $liste_photos[$inc] . '" loading=lazy style="width: 100px ; height: 80px ; object-fit: cover; border: 1px solid grey; "   onclick="currentSlide('. $incplusun .')">');
		}

        echo('</div>');
      }


      //fin main div
      echo('</div>');
    ?>


    <script>
      var slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      function currentSlide(n) {
        showSlides(slideIndex = n);
      }

      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {
          slideIndex = 1
        }
        if (n < 1) {
          slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
      }
    </script>

  </body>

</html>