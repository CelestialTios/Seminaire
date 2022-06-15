<html>
	<head>
		<title>Carré magique</title>>
		<style type="text/css">	</style>	
		<script type="text/javascript"</script>
		<link rel="stylesheet" href="../../style.css" media="screen" />
		<link rel="stylesheet" href="../../imprime.css" media="print"/>
		<script type="text/javascript"></script>
		<link rel="icon" href="../../img/favico.png" />
		<link href="../../css/custom.css" rel="stylesheet">
		<link href="../../css/all.css" rel="stylesheet">
		<script src="../../js/popper.min.js"></script>
		<script src="../../js/jquery.min.js"></script>
		<script src="../../js/bootstrap.min.js"></script>
		
</head>
	<body>
	<div id="global">
	<div class="entete"><h1 style="text-align:center;margin-bottom:20px;">Carré magique</h1></div>
	<p>En additionnant les nombres, tu dois trouver la même somme dans chaque ligne, chaque colonne et chaque diagonale de trois cases. Un même nombre peut être utilisé plusieurs fois.</p>
	<p style="text-align:center;font-weight:bold">Somme à trouver : <span style="color:maroon;">9</span></p>
<form action="carre_magique.php" autocomplete="off" method="post"><table><tr><td class="cellule" style="font-weight:bold;color:maroon;">2<input type="hidden" name="cellule11" value="2" /></td><td class="cellule" style="font-weight:bold;color:maroon;">2<input type="hidden" name="cellule12" value="2" /></td><td class="cellule"><input type="text" name="cellule13" value="" size="1"/></td></tr><tr><td class="cellule" style="font-weight:bold;color:maroon;">6<input type="hidden" name="cellule21" value="6" /></td><td class="cellule"><input type="text" name="cellule22" value="" size="1"/></td><td class="cellule"><input type="text" name="cellule23" value="" size="1"/></td></tr><tr><td class="cellule"><input type="text" name="cellule31" value="" size="1"/></td><td class="cellule"><input type="text" name="cellule32" value="" size="1"/></td><td class="cellule"><input type="text" name="cellule33" value="" size="1"/></td></tr><tr><td colspan="3""><input id="envoi" name="envoi" type="submit" alt="Vérifier" value="Vérifier" /></td></tr></table></form><p><img style="margin:0" src="../images/icon-pdf.png" alt="" /> <a href="dompdf1.php/carre.pdf" target="carrePDF">Exporter en PDF</a></p><p><img src="fleche.gif" alt="- " />&nbsp;Nouveau carré magique :</p>
<p style="text-align:center">
<a href="carre_magique.php?action=nouveau&amp;niveau=1"><img src="carre_magique1.jpg" alt="niveau 1" title="de 6 à 12" /></a>&nbsp;
<a href="carre_magique.php?action=nouveau&amp;niveau=2"><img src="carre_magique2.jpg" alt="niveau 2" title="de 12 à 21" /></a>&nbsp;
<a href="carre_magique.php?action=nouveau&amp;niveau=3"><img src="carre_magique3.jpg" alt="niveau 3" title="de 21 à 33" /></a>&nbsp;
<a href="carre_magique.php?action=nouveau&amp;niveau=4"><img src="carre_magique4.jpg" alt="niveau 4" title="de 33 à 51" /></a>&nbsp;
<a href="carre_magique.php?action=nouveau&amp;niveau=5"><img src="carre_magique5.jpg" alt="niveau 5" title="de 51 à 69" /></a>

</div>
</body>
</html>

