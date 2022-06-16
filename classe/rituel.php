<?php
	include "../components/menu.php";
?>

	<style>

			h1{
				color: blue;
				font-size: 40px;
				border-bottom: 4px solid rgb(255,51,51);
				padding-bottom: 10px;
				text-decoration-color: red;
				font-family: cursive;
				left: 5.2em;
				top: 2.7em;
				position:absolute;

			}
			h2{
				color: blue;
				font-size: 40px;
				font-family: cursive;
				left: 5.2em;
				top: 4.5em;
				position:absolute;				
			}
			h3{
				color: blue;
				font-size: 40px;
				font-family: cursive;
				left: 5.2em;
				top: 6.4em;
				position:absolute;				
			}
			h4{
				color: blue;
				font-size: 40px;
				font-family: cursive;
				left: 5.2em;
				top: 8.5em;
				position:absolute;				
			}
			h5{
				color: white;
				font-size: 40px;
				border-bottom: 4px solid rgb(255,51,51);
				padding-bottom: 10px;
				text-decoration-color: red;
				font-family: cursive;
				left: 5.2em;
				top: 12.2em;
				position:absolute;				
			}
			
			d1{
				color:black;
				font-size: 26px;
				font-family: cursive;
				position:absolute;
				left: 2%;
				top: 4.8em;
			}
			d2{
				color:black;
				font-size: 26px;
				font-family: cursive;
				position:absolute;
				left: 0.5%;
				top: 19.5em;
			}
			
		@media only screen and (max-width: 1500px) {
		h1 {
		font-size: 28px;
		left: 6em;
		top: 3em;
		padding-bottom: 10px;
		}
		h2 {
		font-size: 28px;
		left: 6em;
		top: 5.1em;
		}
		h3 {
		font-size: 28px;
		left: 6em;
		top: 7.2em;
		}
		h4 {
		font-size: 28px;
		left: 6em;
		top: 9.2em;
		}
		h5 {
		font-size: 28px;
		left: 6em;
		top: 13.2em;
		border-bottom: 4px solid rgb(255,51,51);
		padding-bottom: 10px;
		text-decoration-color: red;
		}
		d1 {
		font-size: 27px;
		top: 3.2em;
		}
		d2 {
		font-size: 27px;
		top: 14em;
		}

		body {
			font-size: 75%;
		}

	</style>
			
	<div>
	<d1>Devoirs :</d1>
	<d2>Date du jour :</d2>
	
	<h1>Pour lundi 10/01</h1>
	<h2>_ lire la dictée 15</h2>
	<h3>_ calculer en colonne 247 + 48 + 681 =</h3>
	<h4>    et 764 - 439 =</h4>
	<h5> ...........................................................................................</h5>
	<br>


</div>

<script type="text/javascript">
	function createCountDown(elementId, date) 
	{
		// Set the date we're counting down to
		var countDownDate = new Date(date).getTime();
		//console.log(countDownDate.getTime());
		// Update the count down every 1 second
		var x = setInterval(function() 
		{

			// Get todays date and time


			var now = new Date().getTime();

			// Find the distance between now an the count down date
			var distance = (countDownDate) - (now);

			//Hint on converting from object to the string.
			//var distance = Date.parse(countDownDate) - Date.parse(now);

			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 
			60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Display the result in the element with id="demo"
			document.getElementById(elementId).innerHTML = "Il vous reste "
			+ minutes + "m " + seconds + "s pour terminer les rituels.";

			// If the count down is finished, write some text 
			if (distance < 0) 
			{
			clearInterval(x);
			document.getElementById(elementId).innerHTML = "Temps terminé";
			}
			}, 1000);
	}
	createCountDown('form1', "12-12-2022 9:00:00Z");
</script>

<button type="button" class="btn btn-success consignes" id="consigne" style="width:600;height:60;float: right;">	
<div id="form1"></div>
	</button>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	
<img src="img/rituel1.jpg" alt="image1" style="display:inline-block;width:507px;height:507px"/> <!-- Image à gauche -->
<img src="img/rituel2.jpg" alt="image2" style="display:inline-block;width:507px;height:507px"/> <!-- Image à droite -->

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
