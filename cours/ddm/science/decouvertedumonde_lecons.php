<?php include '../../../components/menu.php' ?>
		
		<nav aria-label="breadcrum">
			<ol class="breadcrumb bg-success">
				<li class="breadcrumb-item active text-white font-weight-bold titre" aria-current="page">Découverte du monde - Leçons</li>
			</ol>
		</nav>
		
		<table class="table font-weight-bold text-center">
		  <tbody>
		  <tr class="bg-success text-white text-center table-fontlarge">
			  <td>Découverte du monde 1</td>
			  <td><a href="./planete/notreplanete.php" class="col table-fontlarge"><b style="font-family:perso">Notre planète</b></a></td>
			</tr>
			<tr class="bg-success text-white text-center table-fontlarge">
			  <td>Découverte du monde 2</td>
			  <td><a href="./ocean/continentsetoceans.php" class="col table-fontlarge"><b style="font-family:perso">Les continents et les océans</b></a></td>
			</tr>
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
