<html> 	
    <head>
        <title>Classe de CE1</title>
        <link rel="icon" href="../../../img/favico.png" />
        <link href="../../../css/custom.css" rel="stylesheet">
        <link href="../../../css/all.css" rel="stylesheet">
        <script src="../../../js/popper.min.js"></script>
        <script src="../../../js/jquery.min.js"></script>
        <script src="../../../js/bootstrap.min.js"></script>

        <!--A modifier pour l'accès vers les infos du jeu-->
        <script type="text/javascript" src="./data/dictee2_niveau2.js"></script>

        <script type="text/javascript" src="mathematiques_jeux_dictee.js"></script>
    </head>
	<body>
        <audio id="1"><source src="..\audio\un.mp3"></source><source src="..\audio\un.ogg"></source></audio>
        <audio id="2"><source src="..\audio\deux.mp3"></source><source src="..\audio\deux.ogg"></source></audio>
        <audio id="3"><source src="..\audio\trois.mp3"></source><source src="..\audio\trois.ogg"></source></audio>
        <audio id="4"><source src="..\audio\quatre.mp3"></source><source src="..\audio\quatre.ogg"></source></audio>
        <audio id="5"><source src="..\audio\cinq.mp3"></source><source src="..\audio\cinq.ogg"></source></audio>
        <audio id="6"><source src="..\audio\six.mp3"></source><source src="..\audio\six.ogg"></source></audio>
        <audio id="7"><source src="..\audio\sept.mp3"></source><source src="..\audio\sept.ogg"></source></audio>
        <audio id="8"><source src="..\audio\huit.mp3"></source><source src="..\audio\huit.ogg"></source></audio>
        <audio id="9"><source src="..\audio\neuf.mp3"></source><source src="..\audio\neuf.ogg"></source></audio>
        <audio id="10"><source src="..\audio\dix.mp3"></source><source src="..\audio\dix.ogg"></source></audio>
        <audio id="11"><source src="..\audio\onze.mp3"></source><source src="..\audio\onze.ogg"></source></audio>
        <audio id="12"><source src="..\audio\douze.mp3"></source><source src="..\audio\douze.ogg"></source></audio>
        <audio id="13"><source src="..\audio\treize.mp3"></source><source src="..\audio\treize.ogg"></source></audio>
        <audio id="14"><source src="..\audio\quatorze.mp3"></source><source src="..\audio\douze.ogg"></source></audio>
        <audio id="15"><source src="..\audio\quinze.mp3"></source><source src="..\audio\treize.ogg"></source></audio>
        <audio id="16"><source src="..\audio\seize.mp3"></source><source src="..\audio\douze.ogg"></source></audio>
        <audio id="17"><source src="..\audio\dix-sept.mp3"></source><source src="..\audio\treize.ogg"></source></audio>
        <audio id="18"><source src="..\audio\dix-huit.mp3"></source><source src="..\audio\douze.ogg"></source></audio>
        <audio id="19"><source src="..\audio\dix-neuf.mp3"></source><source src="..\audio\treize.ogg"></source></audio>
        <audio id="20"><source src="..\audio\vingt.mp3"></source><source src="..\audio\treize.ogg"></source></audio>

        <audio id="bonnereponse"><source src="audio\bonnereponse.mp3"></source><source src="francais\audio\bonnereponse.ogg"></source></audio>
        <audio id="mauvaisereponse"><source src="audio\mauvaisereponse.mp3"></source><source src="francais\audio\mauvaisereponse.ogg"></source></audio>

        <?php
            include '..\menu.php';
        ?>		
        <nav aria-label="breadcrum">
            <ol class="breadcrumb bg-info">
                <li class="breadcrumb-item active text-white font-weight-bold titre" aria-current="page">Mathématiques - Dictées de nombres - Niveau 1</li>
            </ol>
        </nav>		
        <br>		

        <button type="button" class="btn btn-success consignes2" onclick="jecoute();"id="jecoute">Clique ici pour écouter le nombre</button>
        <br><br>
        <button type="button" class="btn btn-info consignes" id="tour">Exercice n°1 sur 10</button>
        <br><br>
        
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <button class="btn btn-info consignes2" type="button" id="inputGroupFileAddon03">Saisir la réponse :</button>
            </div>
            <input type="text" id="reponse" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2">
            <div class="input-group-append">
                <button class="btn btn-success consignes2" type="button" onclick="correction();" id="validation" style="display:none">Valider</button>
            </div>
        </div>		
        
        <button class="btn btn-info consignes2" type="button" id="correction" style="display:none"></button>
        
        <br><br>
        <button type="button" class="btn btn-success consignes2" id="note" style="display:none">note</button>
        <div class="noteimage6" id="noteimage" style="display:none">
            <img src="img/champion.png" id="champion" style="display:none">
            <img src="img/bien.png" id="bien" style="display:none">
            <img src="img/effort.png" id="effort" style="display:none">
            <img src="img/dur.png" id="dur" style="display:none">
            <br>
            <br>
            <INPUT type="button" class="btn btn-info" value="Recommencer" onclick="javascript:window.location.reload()">
            <INPUT type="button" class="btn btn-info" value="Quitter" onclick="javascript:history.back()">
            <br>
            <br>
        </div>
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
