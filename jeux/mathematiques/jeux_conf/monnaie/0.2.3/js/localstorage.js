
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
			typNombre = user.typNombre;
			nbMin = user.nbMin;
			nbMax = user.nbMax;

			lireStorExo = 'ok';
			
		}
		else {
			typActivite = "typInteractive";
			typExercice = "typComposer";
			typNombre = "rdEntier";
			nbMin = 0;
			nbMax = 50;

			lireStorExo = 'ok';
		}

		affichage();

	} else alert("La fonction LocalStorage n'est pas supportée sur votre appareil.");
}

function ecrireStorageExercices() {

	if(typeof localStorage!='undefined' && JSON) {
		dataUser = pseudoL+"-exercices";		
		user = {
			typActivite:typActivite,
			typExercice:typExercice,
			typNombre:typNombre,
			nbMin:nbMin,
			nbMax:nbMax,
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
			mtfClass = user.mtfClass;
			checkDigital = user.checkDigital;
			
			lireStorApp = 'ok';
		}
		else {
			colObjet = "#eee";
			colBord = "#ccc";
			colPage = "#fff";
			mtfClass = "";
			checkDigital = true;
			
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
			mtfClass:mtfClass,
			checkDigital:checkDigital,
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
			composerSomme = user.composerSomme;
			ecrireSomme = user.ecrireSomme;
			rendreMonnaie = user.rendreMonnaie;
			collectSmiley = user.collectSmiley;
			collectAlim = user.collectAlim;
			collectAnimal = user.collectAnimal;
			
			lireStorPrfl = 'ok';
		}
		else {
			composerSomme = "0/0";
			ecrireSomme = "0/0";
			rendreMonnaie = "0/0";
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

		if (typExercice=="typComposer") {
			var savComposerSomme = composerSomme.split('/');
			var savSuccesComposerSomme = parseInt(savComposerSomme[0]);
			var nbSuccesComposerNew = nbSuccesComposer + savSuccesComposerSomme;
			var savVerifComposerSomme = parseInt(savComposerSomme[1]);
			var nbVerifComposerNew = nbVerifComposer + savVerifComposerSomme;
			composerSommeNew = nbSuccesComposerNew+"/"+nbVerifComposerNew;
		}
		else if (typExercice=="typEcrire") {
			var savEcrireSomme = ecrireSomme.split('/');
			var savSuccesEcrireSomme = parseInt(savEcrireSomme[0]);
			var nbSuccesEcrireNew = nbSuccesEcrire + savSuccesEcrireSomme;
			var savVerifEcrireSomme = parseInt(savEcrireSomme[1]);
			var nbVerifEcrireNew = nbVerifEcrire + savVerifEcrireSomme;
			ecrireSommeNew = nbSuccesEcrireNew+"/"+nbVerifEcrireNew;
		}
		else if (typExercice=="typRendre") {
			var savRendreMonnaie = rendreMonnaie.split('/');
			var savSuccesRendreMonnaie = parseInt(savRendreMonnaie[0]);
			var nbSuccesRendreNew = nbSuccesRendre + savSuccesRendreMonnaie;
			var savVerifRendreMonnaie = parseInt(savRendreMonnaie[1]);
			var nbVerifRendreNew = nbVerifRendre + savVerifRendreMonnaie;
			rendreMonnaieNew = nbSuccesRendreNew+"/"+nbVerifRendreNew;
		}

		if (typeof composerSommeNew=="undefined") {
			composerSommeNew = composerSomme;
		}

		if (typeof ecrireSommeNew=="undefined") {
			ecrireSommeNew = ecrireSomme;
		}

		if (typeof rendreMonnaieNew=="undefined") {
			rendreMonnaieNew = rendreMonnaie;
		}			

		user = {
			composerSomme:composerSommeNew,
			ecrireSomme:ecrireSommeNew,
			rendreMonnaie:rendreMonnaieNew,
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