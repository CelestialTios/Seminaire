<html> 
	<title>Classe de CE1</title>
	<link rel="icon" href="../img/favico.png" />
	<link href="css/custom.css" rel="stylesheet">
	<link href="css/all.css" rel="stylesheet">
	<link href="css/hourglass.css" rel="stylesheet" />
	<script src="js/popper.min.js"></script>
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<meta http-equiv="refresh" content="300" />
	<style>

</style>
	<body>
		<?php
			include 'menu.php';
		?>
		<table class="table table-borderless bg-#212529">
			<tbody>
				<td><img src="francais/GDL_12.jpg" style="width:100%;" class="center"></td>
				<td>
					<div id="container">
						<div id="glass-container">
							<div id="glass">
								<div class="top half-glass triangle"></div>
								<div class="bottom half-glass triangle rotate"></div>
							</div>
							<div id="layer-1">
								<div>
									<div class="top layer-1 triangle"></div>
								</div>
								<div class="rotate">
									<div class="bottom layer-1 triangle"></div>
								</div>
							</div>
							<div id="layer-2">
								<div>
									<div class="top layer-2 triangle"></div>
								</div>
								<div class="rotate">
									<div class="bottom layer-2 triangle"></div>
								</div>
							</div>
							<div id="sand-stream"></div>
						</div>
					</div>
				</td>
            
			</tbody>
		</table>

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
