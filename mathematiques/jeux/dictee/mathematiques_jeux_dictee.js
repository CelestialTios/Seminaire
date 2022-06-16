var player;
var reponse;
var note = 0; 
var tour = 1;
var response = new Array(data["nbtour"]).fill(0);

window.addEventListener("DOMContentLoaded", function(){
    //Get the audio element
    reponse = document.getElementById("reponse");
},false);


/**
 * Get audio with the same id as parameter and play his sound
 * @param {string} id 
 */
function numberSound(id){
    console.log("sound" + id);
    player = document.getElementById(id);
    //Load and play sound
    player.play();
}

function jecoute()
{
        document.getElementById("tour").innerHTML = "Exercice n°"+tour+" sur 10";
        document.getElementById("validation").style.display= "";
        document.getElementById("correction").style.display= "none";
        reponse.focus()
        if (data['flags'][tour])
        {
            let lettre = DiffBefore(); 
            response[tour-1] = data['chiffres'][lettre];
            data['flags'][tour] = false;
        }
        numberSound(getKeyByValue(data['chiffres'], response[tour-1]));
}


function correction()
{
    document.getElementById("validation").style.display= "none";            // Tout le temps présente, non nécessaire de faire de réitérer
    document.getElementById("jecoute").style.display= "";                   // Tout le temps présente, non nécessaire de faire de réitérer
    value = reponse.value;                                                  // Change selon le tour // Peut être mis que comme un seul input qu'on nettoie
    console.log(value);
    document.getElementById("reponse").value = "";                          // Nettoyage de l'input
    let s = "";
    if(value==response[tour-1])
    {
        player = document.getElementById("bonnereponse");
        player.play();
        note++;
        s = "Bonne réponse";
    
    }
    else
    {
        player = document.getElementById("mauvaisereponse");
        player.play();
        s = `Erreur, il fallait écrire : ${response[tour-1]}`;
    }
    document.getElementById("correction").style.display= "";
    document.getElementById("correction").innerHTML = s;

    if( tour == data["nbTour"]) { resultat(); } 
    tour++;


}


function resultat()
{
    var noteElem = document.getElementById("note");
    document.getElementById("noteimage").style.display = "";
    var imageElem = document.getElementById("note-image");
    noteElem.style.display = "";

    var message = `Note : ${note} sur ${data["nbTour"]}<br>`;

    switch (note)
    {
        case 0 :
        case 1 : 
            message += `Trop difficile pour toi`;
            imageElem.src = "img/dur.png";
            break;
        
        case 2 : 
        case 3 :
            message += "Trop difficile pour toi";
            imageElem.src = "img/effort.png";
            break;
        
        case 4 : 
            message += "Trop difficile pour toi";
            imageElem.src = "img/bien.png";
            break;
        
        case 5 :
        case 6 :
        case 7 :  
            message += "Continue tes efforts";
            imageElem.src = "img/champion.png";
            break;
        
        case 8 :
        case 9 :
        case 10 : 
            message += "Bravo !";
            imageElem.src = "img/champion.png";
            break;
        
    }

    noteElem.innerHTML = message;
    imageElem.style.display = "";
}


/**
 * Get the string key for a value in a object
 * @param {Object} object 
 * @param {string|number} value 
 * @returns {number} Key of the value given
 */
function getKeyByValue(object, value) 
{
    return Object.keys(object).find(key => object[key] === value);
}


function DiffBefore(){
    let lettre = Math.floor(Math.random() * Object.keys(data['chiffres']).length)+1;
    while( response.includes(lettre) )
    {
        lettre = Math.floor(Math.random() * Object.keys(data['chiffres']).length)+1; 
    }
    return lettre;
}
