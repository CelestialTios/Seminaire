<?php
session_start();
if(isset($_POST['username']) && isset($_POST['password']))
{
    // connexion à la base de données
    $db_username = 'gommettes';
    $db_password = 'jSzB1iHFdNcd';
    $db_name     = 'a2122_sclp_gommettes';
    $db_host     = 'localhost';
    $db = mysqli_connect($db_host, $db_username, $db_password,$db_name)
    or die('could not connect to database');

    // on applique les deux fonctions mysqli_real_escape_string et htmlspecialchars
    // pour éliminer toute attaque de type injection SQL et XSS
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $role = $_POST['role'];
    $birthdate = $_POST['birthdate'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $hashed_password = password_hash($password,PASSWORD_DEFAULT);

    if($username !== "" && $password !== "")
    {
        $requete = "INSERT INTO user(login,password,nom,prenom,role,date_naissance) values('".$username."','".$hashed_password."','".$nom."','".$prenom."','".$role."','".$birthdate."')";
        $exec_requete = mysqli_query($db,$requete);
        $reponse      = mysqli_fetch_array($exec_requete);
        $count = $reponse['count(*)'];
        if($count!=0) // nom d'utilisateur et mot de passe correctes
        {
            $_SESSION['username'] = $username;
            header('Location: ..\index.php');
        }
        else
        {
            header('Location: login.php?erreur=1'); // utilisateur ou mot de passe incorrect
        }
    }
    else
    {
        header('Location: login.php?erreur=2'); // utilisateur ou mot de passe vide
    }
}
else
{
    header('Location: login.php');
}
mysqli_close($db); // fermer la connexion
?>
