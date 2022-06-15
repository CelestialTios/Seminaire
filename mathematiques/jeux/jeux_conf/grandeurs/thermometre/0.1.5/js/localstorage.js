
/************************************************/

// LOCAL STORAGE //

/************************************************/

/*********************/

/* Options exercices */

/*********************/

function lireStorageExercices() {
	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-exercices";

		user = JSON.parse(localStorage.getItem(dataUser));
		if (user!=null) {

			typActivite = user.typActivite;
			typExercice = user.typExercice;
			typNombre = user.typNombre;

			lireStorExo = 'ok';
			
		}
		else {
			typActivite = "typInteractive";
			typExercice = "typEcrire";
			typNombre = "rdPosNeg";

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
			typNombre:typNombre,
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

/* Apparence */

/*************/

function lireStorageApparence() {
	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-apparence";

		user = JSON.parse(localStorage.getItem(dataUser));
		if (user!=null) {

			colMercure = user.colMercure;
			colObjet = user.colObjet;
			colBord = user.colBord;
			colPage = user.colPage;
			mtfClass = user.mtfClass;
			checkMercure = user.checkMercure;
			checkDigital = user.checkDigital;
			checkCoul = user.checkCoul;
			
			lireStorApp = 'ok';
		}
		else {
			colMercure = "#E42222";
			colObjet = "#eee";
			colBord = "#ccc";
			colPage = "#fff";
			mtfClass = "";
			checkMercure = true;
			checkDigital = true;
			checkCoul = false;
			
			lireStorApp = 'ok';
		}

	} else alert("La fonction LocalStorage n'est pas supportée sur votre appareil.");
}

function ecrireStorageApparence() {
	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-apparence";		
		
		user = {
			colMercure:colMercure,
			colObjet:colObjet,
			colBord:colBord,
			colPage:colPage,
			mtfClass:mtfClass,
			checkMercure:checkMercure,
			checkDigital:checkDigital,
			checkCoul:checkCoul,
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

			ecrireTemp = user.ecrireTemp;
			composerTemp = user.composerTemp;
			collectSmiley = user.collectSmiley;
			collectAlim = user.collectAlim;
			collectAnimal = user.collectAnimal;
			
			lireStorPrfl = 'ok';
		}
		else {
			ecrireTemp = "0/0";
			composerTemp = "0/0";
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

		if (typExercice=="typEcrire") {
			var savEcrireTemp = ecrireTemp.split('/');
			var savSuccesEcrireTemp = parseInt(savEcrireTemp[0]);
			var nbSuccesEcrireNew = nbSuccesTemp + savSuccesEcrireTemp;
			var savVerifEcrireTemp = parseInt(savEcrireTemp[1]);
			var nbVerifEcrireNew = nbVerifTemp + savVerifEcrireTemp;
			ecrireTempNew = nbSuccesEcrireNew+"/"+nbVerifEcrireNew;
		}
		else if (typExercice=="typMercure") {
			var savComposerTemp = composerTemp.split('/');
			var savSuccesComposerTemp = parseInt(savComposerTemp[0]);
			var nbSuccesComposerNew = nbSuccesMerc + savSuccesComposerTemp;
			var savVerifComposerTemp = parseInt(savComposerTemp[1]);
			var nbVerifComposerNew = nbVerifMerc + savVerifComposerTemp;
			composerTempNew = nbSuccesComposerNew+"/"+nbVerifComposerNew;
		}

		if (typeof ecrireTempNew=="undefined") {
			ecrireTempNew = ecrireTemp;
		}

		if (typeof composerTempNew=="undefined") {
			composerTempNew = composerTemp;
		}			

		user = {
			ecrireTemp:ecrireTempNew,
			composerTemp:composerTempNew,
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