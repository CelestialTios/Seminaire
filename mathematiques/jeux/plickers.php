<html>

 <head>

<link rel="stylesheet" href="../../style.css" media="screen" />
<link rel="stylesheet" href="../../imprime.css" media="print"/>
<script type="text/javascript"></script>
<link rel="icon" href="../../img/favico.png" />
<link href="../../css/custom.css" rel="stylesheet">
<link href="../../css/all.css" rel="stylesheet">
<script src="../../js/popper.min.js"></script>
<script src="../../js/jquery.min.js"></script>
<script src="../../js/bootstrap.min.js"></script>
 
<title>Plickers</title>

	</head>
				
				<?php
			include 'menu.php';
		?>

			<div><span id="conseil" style="font-size:16px"></span>
		<nav aria-label="breadcrum">
			<ol class="breadcrumb bg-info">
				<li class="breadcrumb-item active text-white font-weight-bold" aria-current="page">Plickers</li>
			</ol>
		</nav>	<div id="liste">
				<button type="button" class="btn btn-success consignes" >Clique sur ton prénom</button><br><br>

				<button type="button" class="btn btn-success consignes" > CE1 A</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers1();">Noham ATTOU</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Kenzo DAI</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers3();">Yasmine DJEZIRI</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers4();">Zeynep EROGLU</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers5();">Inès KANOUNE</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers6();">Amine LATRACH</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers7();">Yassine MUSTAFA</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers8();">Mahamadou N'DIAYE</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers9();">Mathis TOUATI</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers10();">Amira TOURABI</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers11();">Marwane ZAOUI</button>
				<br><br>
				<button type="button" class="btn btn-success consignes" > CE1 B</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers12();">Inès BELGAT</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers13();">Ilyess BERZAQUE</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers14();">Balqis BOUHIA</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Anis ECHAOUKI</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Lilia HEMMAL</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Isabella MAIZEL</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Djamila NELAA</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Linda NGUYEN</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Wissal SAARI</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Olivia SAINT LOUIS UFENS</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Iyad ZINI</button>
				<br><br>
				<button type="button" class="btn btn-success consignes" > CE1 C</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers1();">Mohamed AAMRI</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Naila ABADA</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Limou DEMBELE</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Fatna-Romaïssa DJENDAR</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Hamza EL MHAMDI</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Ismael FOFANA</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Imrân HAMMOU</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Iliana HIRAKI</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Amira Jenna JEBBARI</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Anisha SOUMARE</button>
				<button type="button" class="btn btn-info consignes" onclick="plickers2();">Ismael SYLLA</button>
			</div>
			<div id="iframe1" style="display:none">
				<iframe src="https://my.plickers.com/718855752" height="400" width="800">
				<p>Votre navigateur ne supporte aucune iframe !</p>
				</iframe>	
			</div>
<script>
function plickers1()
{
		document.getElementById("liste").style.display = "none";
		document.getElementById("iframe1").style.display = "";
		
}
</script>

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
