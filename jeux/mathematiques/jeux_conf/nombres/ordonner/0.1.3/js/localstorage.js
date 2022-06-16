
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
			typOrdre = user.typOrdre;
			typNombre = user.typNombre;
			chApVirg = user.chApVirg;
			nbItems = user.nbItems;
			nbMin = user.nbMin;
			nbMax = user.nbMax;
			chkForcDecimal = user.chkForcDecimal;

			lireStorExo = 'ok';
		}
		else {
			typActivite = "typInteractive";
			typOrdre = "Croissant";
			typNombre = "Entier";
			chApVirg = 1;
			nbItems = 10;
			nbMin = 0;
			nbMax = 50;
			chkForcDecimal:false;

			lireStorExo = 'ok';
		}

	} else alert("La fonction LocalStorage n'est pas supportée sur votre appareil.");
}

function ecrireStorageExercices() {

	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-exercices";		
		
		user = {
			typActivite:typActivite,
			typOrdre:typOrdre,
			typNombre:typNombre,
			chApVirg:chApVirg,
			nbItems:nbItems,
			nbMin:nbMin,
			nbMax:nbMax,
			chkForcDecimal:chkForcDecimal
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
			tailleFont = user.tailleFont;
			//handleTemp.text(tailleFont);
			
			lireStorApp = 'ok';
		}
		else {
			colObjet = "#eee";
			colBord = "#ccc";
			colPage = "#fff";
			mtfClass = "";
			tailleFont = 3;
			
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
			tailleFont:tailleFont,
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

		if (typOrdre=="Croissant") {
			var savExo1 = scrExo1.split('/');
			var savSuccesExo1 = parseInt(savExo1[0]);
			var nbSuccesExo1 = totSuccesCroissant + savSuccesExo1;
			var savVerifExo1 = parseInt(savExo1[1]);
			var nbVerifExo1 = nbVerifCroissant + savVerifExo1;
			newExo1 = nbSuccesExo1+"/"+nbVerifExo1;
		}
		else if (typOrdre=="Decroissant") {
			var savExo2 = scrExo2.split('/');
			var savSuccesExo2 = parseInt(savExo2[0]);
			var nbSuccesExo2 = totSuccesDecroissant + savSuccesExo2;
			var savVerifExo2 = parseInt(savExo2[1]);
			var nbVerifExo2 = nbVerifDecroissant + savVerifExo2;
			newExo2 = nbSuccesExo2+"/"+nbVerifExo2;
		}

		if (typeof newExo1=="undefined") {
			newExo1 = scrExo1;
		}

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