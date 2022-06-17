 <?php include dirname(__FILE__).'/components/menu.php' ?>

  <script>
    function initComparisons() {
      var x, i;
      /*find all elements with an "overlay" class:*/
      x = document.getElementsByClassName("img-comp-overlay");
      for (i = 0; i < x.length; i++) {
        /*once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function:*/
        compareImages(x[i]);
      }
      function compareImages(img) {
        var slider, img, clicked = 0, w, h;
        /*get the width and height of the img element*/
        w = img.offsetWidth;
        h = img.offsetHeight;
        /*set the width of the img element to 50%:*/
        img.style.width = (w / 2) + "px";
        /*create slider:*/
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        /*insert slider*/
        img.parentElement.insertBefore(slider, img);
        /*position the slider in the middle:*/
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
        /*execute a function when the mouse button is pressed:*/
        slider.addEventListener("mousedown", slideReady);
        /*and another function when the mouse button is released:*/
        window.addEventListener("mouseup", slideFinish);
        /*or touched (for touch screens:*/
        slider.addEventListener("touchstart", slideReady);
        /*and released (for touch screens:*/
        window.addEventListener("touchend", slideFinish);
        function slideReady(e) {
          /*prevent any other actions that may occur when moving over the image:*/
          e.preventDefault();
          /*the slider is now clicked and ready to move:*/
          clicked = 1;
          /*execute a function when the slider is moved:*/
          window.addEventListener("mousemove", slideMove);
          window.addEventListener("touchmove", slideMove);
        }
        function slideFinish() {
          /*the slider is no longer clicked:*/
          clicked = 0;
        }
        function slideMove(e) {
          var pos;
          /*if the slider is no longer clicked, exit this function:*/
          if (clicked == 0) return false;
          /*get the cursor's x position:*/
          pos = getCursorPos(e)
          /*prevent the slider from being positioned outside the image:*/
          if (pos < 0) pos = 0;
          if (pos > w) pos = w;
          /*execute a function that will resize the overlay image according to the cursor:*/
          slide(pos);
        }
        function getCursorPos(e) {
          var a, x = 0;
          e = (e.changedTouches) ? e.changedTouches[0] : e;
          /*get the x positions of the image:*/
          a = img.getBoundingClientRect();
          /*calculate the cursor's x coordinate, relative to the image:*/
          x = e.pageX - a.left;
          /*consider any page scrolling:*/
          x = x - window.pageXOffset;
          return x;
        }
        function slide(x) {
          /*resize the image:*/
          img.style.width = x + "px";
          /*position the slider:*/
          slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
      }
    }
  </script>

<div><span id="conseil" style="font-size:16px"></span>
    <nav aria-label="breadcrum">
        <ol class="breadcrumb bg-info">
            <li class="breadcrumb-item active text-white font-weight-bold" aria-current="page">Bienvenue à toi sur Pot de colle !</li>
        </ol>
    <div class="img-comp-container">
        <div class="img-comp-img">
            <img src="/Seminaire/Content/img/classe2.JPG" width="980" height="600">
        </div>
        <div class="img-comp-img img-comp-overlay">
            <img src="/Seminaire/Content/img/classe1.JPG" width="980" height="600">
        </div>
    </div>
</body>		
		
	<script>
    /*Execute a function that will execute an image compare function for each element with the img-comp-overlay class:*/
    initComparisons();
    </script>
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
