
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
			nbChifEnt = user.nbChifEnt;
			nbChifDec = user.nbChifDec;
			chkAleaEnt = user.chkAleaEnt;
			chkAleaDec = user.chkAleaDec;
			slctGrdrsIndex = user.slctGrdrsIndex;
			slctUntDepIndex = user.slctUntDepIndex;
			slctUntArrIndex = user.slctUntArrIndex;
			
			lireStorExo = 'ok';
			
		}
		else {
			typActivite = "Interactive";
			typExercice = "Lire";
			typNombre = "Entier";
			nbChifEnt = 1;
			nbChifDec = 1;
			chkAleaEnt = false;
			chkAleaDec = false;
			slctGrdrsIndex = 0;
			slctUntDepIndex = 7;
			slctUntArrIndex = 3;
			
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
			nbChifEnt:nbChifEnt,
			nbChifDec:nbChifDec,
			chkAleaEnt:chkAleaEnt,
			chkAleaDec:chkAleaDec,
			slctGrdrsIndex:slctGrdrsIndex,
			slctUntDepIndex:slctUntDepIndex,
			slctUntArrIndex:slctUntArrIndex
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
			chkTab = user.chkTab;
			
			lireStorApp = 'ok';
		}
		else {
			colObjet = "#eee";
			colBord = "#ccc";
			colPage = "#fff";
			mtfClass = "";
			chkTab = true;
			
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
			chkTab:chkTab,
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
			scrExo3 = user.scrExo3;
			collectSmiley = user.collectSmiley;
			collectAlim = user.collectAlim;
			collectAnimal = user.collectAnimal;
			
			lireStorPrfl = 'ok';
		}
		else {
			scrExo1 = "0/0";
			scrExo2 = "0/0";
			scrExo3 = "0/0";
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
		var nbSuccesExo1 = nbSuccesEcrire + savSuccesExo1;
		var savVerifExo1 = parseInt(savExo1[1]);
		var nbVerifExo1 = nbVerifEcrire + savVerifExo1;
		newExo1 = nbSuccesExo1+"/"+nbVerifExo1;

		if (typeof newExo1=="undefined") {
			newExo1 = scrExo1;
		}

		var savExo2 = scrExo2.split('/');
		var savSuccesExo2 = parseInt(savExo2[0]);
		var nbSuccesExo2 = nbSuccesCompleter + savSuccesExo2;
		var savVerifExo2 = parseInt(savExo2[1]);
		var nbVerifExo2 = nbVerifCompleter + savVerifExo2;
		newExo2 = nbSuccesExo2+"/"+nbVerifExo2;

		if (typeof newExo2=="undefined") {
			newExo2 = scrExo2;
		}

		var savExo3 = scrExo3.split('/');
		var savSuccesExo3 = parseInt(savExo3[0]);
		var nbSuccesExo3 = nbSuccesConvertir + savSuccesExo3;
		var savVerifExo3 = parseInt(savExo3[1]);
		var nbVerifExo3 = nbVerifConvertir + savVerifExo3;
		newExo3 = nbSuccesExo3+"/"+nbVerifExo3;

		if (typeof newExo3=="undefined") {
			newExo3 = scrExo3;
		}				

		user = {
			scrExo1:newExo1,
			scrExo2:newExo2,
			scrExo3:newExo3,
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