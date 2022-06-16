<html>
<head>
    <meta charset="utf-8">
    <!-- importer le fichier de style -->
    <link rel="stylesheet" href="style.css" media="screen" type="text/css" />
</head>
<body>
<div id="container">
    <!-- zone de connexion -->

    <form action="createuser.php" method="POST">
        <h1>Inscription</h1>

        <label><b>Nom</b></label>
        <input type="text" placeholder="Entrer le nom" name="nom" required>

        <label><b>Prenom</b></label>
        <input type="text" placeholder="Entrer le prenom" name="prenom" required>

        <label><b>Role</b></label>
        <input type="text" placeholder="Entrer le role" name="role" required>

        <label><b>Date de naissance</b></label>
        <input type="text" placeholder="Entrer la date de naissance" name="birthdate" required>

        <label><b>Login</b></label>
        <input type="text" placeholder="Entrer le login" name="username" required>

        <label><b>Mot de passe</b></label>
        <input type="password" placeholder="Entrer le mot de passe" name="password" required>

        <input type="submit" id='submit' value='REGISTER' >
    </form>
</div>
</body>
</html>
