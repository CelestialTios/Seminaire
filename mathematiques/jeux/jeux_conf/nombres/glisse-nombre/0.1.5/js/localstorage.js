
/************************************************/

// LOCAL STORAGE //

/************************************************/

/*********************/

/* OPTIONS EXERCICES */

/*********************/

function lireStorageExercices() {
	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-exercices";

		user = JSON.parse(localStorage.getItem(dataUser));
		if (user!=null) {

			typActivite = user.typActivite;
			typExercice = user.typExercice;
			chkMult10 = user.chkMult10;
			chkMult100 = user.chkMult100;
			chkMult1000 = user.chkMult1000;
			chkDiv10 = user.chkDiv10;
			chkDiv100 = user.chkDiv100;
			chkDiv1000 = user.chkDiv1000;
			nbMin = user.nbMin;
			nbMax = user.nbMax;
			typNombre = user.typNombre;
			nbChifDec = user.nbChifDec;
			chkAleaDec = user.chkAleaDec;

			lireStorExo = 'ok';
		}
		else {
			typActivite = "Interactive";
			typExercice = "Exo1";
			chkMult10 = true;
			chkMult100 = true;
			chkMult1000 = true;
			chkDiv10 = true;
			chkDiv100 = true;
			chkDiv1000 = true;
			nbMin = 1;
			nbMax = 99;
			typNombre = "Entier";
			nbChifDec = 1;
			chkAleaDec = false;
			
			lireStorExo = 'ok';
		}

	} else alert("La fonction LocalStorage n'est pas supportée sur votre appareil.");
}

function ecrireStorageExercices() {

	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-exercices";		
		
		user = {
			typActivite:typActivite,
			typExercice:typExercice,
			chkMult10:chkMult10,
			chkMult100:chkMult100,
			chkMult1000:chkMult1000,
			chkDiv10:chkDiv10,
			chkDiv100:chkDiv100,
			chkDiv1000:chkDiv1000,
			nbMin:nbMin,
			nbMax:nbMax,
			typNombre:typNombre,
			nbChifDec:nbChifDec,
			chkAleaDec:chkAleaDec
		};

		localStorage.setItem(dataUser,JSON.stringify(user));
		$("#exoSavSuccesBox").show();
		$("#exoSavSuccesBox").fadeOut(4000, "swing");

	} else alert("La fonction LocalStorage n'est pas supportée sur votre appareil.");
}

function defautStorageExercices() {
	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-exercices";
		localStorage.removeItem(dataUser);
		lireStorageExercices();

	} else alert("La fonction LocalStorage n'est pas supportée sur votre appareil.");
}

/*************/

/* APPARENCE */

/*************/

function lireStorageApparence() {
	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-apparence";

		user = JSON.parse(localStorage.getItem(dataUser));
		if (user!=null) {

			colObjet = user.colObjet;
			colBord = user.colBord;
			colPage = user.colPage;
			colTapis = user.colTapis;
			colMultiplier = user.colMultiplier;
			colDiviser = user.colDiviser;
			mtfClass = user.mtfClass;
			typVisu = user.typVisu;
			
			lireStorApp = 'ok';
		}
		else {
			colObjet = "#eee";
			colBord = "#ddd";
			colPage = "#fff";
			colTapis = "#aaa";
			colTapis = "#aaa";
			colMultiplier = "#A8D900";
			colDiviser = "#D92E00";
			mtfClass = "";
			mtfClass = "";
			typVisu = "Visu1";
			
			lireStorApp = 'ok';
		}

	} else alert("La fonction LocalStorage n'est pas supportée sur votre appareil.");
}

function ecrireStorageApparence() {
	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-apparence";		
		
		user = {
			colObjet:colObjet,
			colBord:colBord,
			colPage:colPage,
			colTapis:colTapis,
			colMultiplier:colMultiplier,
			colDiviser:colDiviser,
			mtfClass:mtfClass,
			typVisu:typVisu
		};

		localStorage.setItem(dataUser,JSON.stringify(user));
		$("#appSavSuccesBox").show();
		$("#appSavSuccesBox").fadeOut(4000, "swing");

	} else alert("La fonction LocalStorage n'est pas supportée sur votre appareil.");
}

function defautStorageApparence() {
	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-apparence";
		localStorage.removeItem(dataUser);
		lireStorageApparence();

	} else alert("La fonction LocalStorage n'est pas supportée sur votre appareil.");
}

/*************/

/* PROFIL */

/*************/

function lireStorageProfil() {
	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-profil";

		user = JSON.parse(localStorage.getItem(dataUser));
		if (user!=null) {

			scrExo1 = user.scrExo1;
			scrExo2 = user.scrExo2;
			collectSmiley = user.collectSmiley;
			collectAlim = user.collectAlim;
			collectAnimal = user.collectAnimal;
			
			lireStorPrfl = 'ok';
		}
		else {
			scrExo1 = "0/0";
			scrExo2 = "0/0";
			collectSmiley = collectSmiley;
			collectAlim = collectAlim;
			collectAnimal = collectAnimal;
			
			lireStorPrfl = 'ok';
		}

	} else alert("La fonction LocalStorage n'est pas supportée sur votre appareil.");
}

function ecrireStorageprofil() {
	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-profil";

		var savExo1 = scrExo1.split('/');
		var savSuccesExo1 = parseInt(savExo1[0]);
		var nbSuccesExo1 = totSuccesExo1 + savSuccesExo1;
		var savVerifExo1 = parseInt(savExo1[1]);
		var nbVerifExo1 = totVerifExo1 + savVerifExo1;
		newExo1 = nbSuccesExo1+"/"+nbVerifExo1;

		if (typeof newExo1=="undefined") {
			newExo1 = scrExo1;
		}	

		var savExo2 = scrExo2.split('/');
		var savSuccesExo2 = parseInt(savExo2[0]);
		var nbSuccesExo2 = totSuccesExo2 + savSuccesExo2;
		var savVerifExo2 = parseInt(savExo2[1]);
		var nbVerifExo2 = totVerifExo2 + savVerifExo2;
		newExo2 = nbSuccesExo2+"/"+nbVerifExo2;

		if (typeof newExo2=="undefined") {
			newExo2 = scrExo2;
		}				

		user = {
			scrExo1:newExo1,
			scrExo2:newExo2,
			collectSmiley:collectSmiley,
			collectAlim:collectAlim,
			collectAnimal:collectAnimal,
		};

		localStorage.setItem(dataUser,JSON.stringify(user));

	} else alert("La fonction LocalStorage n'est pas supportée sur votre appareil.");
}

function defautStorageProfil() {
	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-profil";
		localStorage.removeItem(dataUser);
		lireStorageProfil();

	} else alert("La fonction LocalStorage n'est pas supportée sur votre appareil.");
}