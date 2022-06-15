//#region Configuration
//Possible chiffres du jeu
var chiffres = {
    1 : "un",
    2 : "deux",
    3 : "trois",
    4 : "quatre",
    5 : "cinq",
    6 : "six",
    7 : "sept",
    8 : "huit",
    9 : "neuf",
    10 : "dix"
}
var nbTour = 10;
var flags = { 
    1 : true, 2 : true, 3 : true, 4 : true, 5 : true, 6 : true, 7 : true, 8 : true, 9 : true, 10 : true
}
//#endregion

var note = 0; 
var tour = 1;
var response = new Array(nbTour).fill(0);

/**
 * Get audio with the same id as parameter and play his sound
 * @param {string} id 
 */
function numberSound(id){
    //Get the audio element
	player = document.getElementById("number-sound");
    //Get source and update it to id;
	source1 = player.getElementsByClassName("source1");
	source2 = player.getElementsByClassName("source2");
    source1.src = `audio\\${chiffres[id]}.mp3`;
    source2.src = `audio\\${chiffres[id]}.ogg`;
    //Load and play sound
    player.load();
	player.play();
}


function jecoute()
{
		document.getElementById("tour").innerHTML = "Exercice n°"+tour+" sur 10";
        document.getElementById("correction").style.display= "";
        document.getElementById("reponse").focus()
        if (flags[tour])
        {
            let lettre = DiffBefore(); 
            response[tour-1] = chiffres[lettre];
            flags[tour] = false;
        }
        numberSound(getKeyByValue(chiffres, response[tour-1]));
}


function correction()
{
    document.getElementById("correction").style.display= "none";            // Tout le temps présente, non nécessaire de faire de réitérer
    document.getElementById("jecoute").style.display= "";                   // Tout le temps présente, non nécessaire de faire de réitérer
    reponse = document.getElementById("reponse").value;                     // Change selon le tour // Peut être mis que comme un seul input qu'on nettoie
    document.getElementById("reponse").value = "";                          // Nettoyage de l'input
    let s = "";
    if(reponse==response[tour-1])
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
        s = `Erreur, il fallait écrire : ${response[tour]}`;
    }
    document.getElementById("correction").style.display= "";
    document.getElementById("correction").innerHTML = s;

    if( tour == nbTour) { resultat(); } 
    tour++;


}


function resultat()
{
	var noteElem = document.getElementById("note");
	document.getElementById("noteimage").style.display = "";
	var imageElem = document.getElementById("note-image");
    noteElem.style.display = "";

    var message = `Note : ${note} sur ${nbTour}<br>`;

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
    let lettre = Math.floor(Math.random()*10)+1;
    while( response.includes(lettre) )
    {
        lettre = Math.floor(Math.random()*10)+1; 
    }
    return lettre;
}