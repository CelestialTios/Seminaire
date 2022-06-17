<?php
	include "../../../components/menu.php";
?>
		
	<video width="1020" height="573" autoplay controls>
  <source src="<?=$_ENV['ROOT']?>Content/videos/spot.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>	</body>
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
