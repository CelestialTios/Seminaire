<?php include '../../../components/menu.php' ?>

		<audio controls>
		<source src="armstrong.mp3" type="audio/mpeg"></source>
		Your browser does not support the audio element.
		</audio>
		<audio controls>
			<source src="armstrong_piano.mp3" type="audio/mpeg"></source>
			Your browser does not support the audio element.
		</audio>

		<br>

		<img src="armstrong.jpg" style="width:55%;">
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

