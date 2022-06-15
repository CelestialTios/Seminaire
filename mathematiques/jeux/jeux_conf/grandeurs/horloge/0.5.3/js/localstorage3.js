
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
			typMinutes = user.typMinutes;

			lireStorExo = 'ok';
			
		}
		else {
			typActivite = "typInterne";
			typExercice = "typEcrire";
			typMinutes = "rdMin1";

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
			typMinutes:typMinutes,
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

			typAmPm = user.typAmPm;
			colObjet = user.colObjet;
			colBord = user.colBord;
			colPage = user.colPage;

			mtfClass = user.mtfClass;
			colHre = user.colHre;
			colMin = user.colMin;
			colSec = user.colSec;
			checkAigHre = user.checkAigHre;

			checkAigMin = user.checkAigMin;
			checkAigSec = user.checkAigSec;
			checkChifHreAm = user.checkChifHreAm;
			checkChifHrePm = user.checkChifHrePm;
			checkChifMin = user.checkChifMin;
			checkChifMinNeg = user.checkChifMinNeg;
			checkGradHre = user.checkGradHre;
			checkGradMin = user.checkGradMin;
			checkDigHre = user.checkDigHre;
			checkDigMin = user.checkDigMin;
			checkDigSec = user.checkDigSec;
			checkFracEq = user.checkFracEq;
			checkFracEd = user.checkFracEd;
			checkFracMq = user.checkFracMq;	
			
			lireStorApp = 'ok';		
		}
		else {
			typAmPm = "rdAmPm";
			colObjet = "#fff";
			colBord = "#ccc";
			colPage = "#fff";
			mtfClass = "";
			colHre = "#4a86e8";
			colMin = "#ff9900";
			colSec = "#DF2929";
			checkAigHre = true;
			checkAigMin = true;
			checkAigSec = false;
			checkChifHreAm = true;
			checkChifHrePm = false;
			checkChifMin = false;
			checkChifMinNeg = false;
			checkGradHre = true;
			checkGradMin = true;
			checkDigHre = true;
			checkDigMin = true;
			checkDigSec = false;
			checkFracEq = false;
			checkFracEd = false;
			checkFracMq = false;
			
			lireStorApp = 'ok';
		}

	} else alert("La fonction LocalStorage n'est pas supportée sur votre appareil.");
}

function ecrireStorageApparence() {
	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-apparence";		
		
		user = {
			typAmPm:typAmPm,
			colObjet:colObjet,
			colBord:colBord,
			colPage:colPage,
			mtfClass:mtfClass,
			colHre:colHre,
			colMin:colMin,
			colSec:colSec,
			checkAigHre:checkAigHre,
			checkAigMin:checkAigMin,
			checkAigSec:checkAigSec,
			checkChifHreAm:checkChifHreAm,
			checkChifHrePm:checkChifHrePm,
			checkChifMin:checkChifMin,
			checkChifMinNeg:checkChifMinNeg,
			checkGradHre:checkGradHre,
			checkGradMin:checkGradMin,
			checkDigHre:checkDigHre,
			checkDigMin:checkDigMin,
			checkDigSec:checkDigSec,
			checkFracEq:checkFracEq,
			checkFracEd:checkFracEd,
			checkFracMq:checkFracMq,
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

			succesHeure = user.succesHeure;
			succesMinute = user.succesMinute;
			succesSeconde = user.succesSeconde;
			collectSmiley = user.collectSmiley;
			collectAlim = user.collectAlim;
			collectAnimal = user.collectAnimal;
			
			lireStorPrfl = 'ok';
		}
		else {
			succesHeure = "0/0";
			succesMinute = "0/0";
			succesSeconde = "0/0";
			collectSmiley = collectSmiley;
			collectAlim = collectAlim;
			collectAnimal = collectAnimal;
			
			lireStorPrfl = 'ok';
		}

		//affichage();

	} else alert("La fonction LocalStorage n'est pas supportée sur votre appareil.");
}

function ecrireStorageprofil() {
	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-profil";

		var savHeure = succesHeure.split('/');
		var savSuccesHeure = parseInt(savHeure[0]);
		var nbSuccesHeureNew = nbSuccesHre + savSuccesHeure;
		var savVerifHeure = parseInt(savHeure[1]);
		var nbVerifHeureNew = nbVerifHre + savVerifHeure;
		succesHeureNew = nbSuccesHeureNew+"/"+nbVerifHeureNew;

		var savMinute = succesMinute.split('/');
		var savSuccesMinute = parseInt(savMinute[0]);
		var nbSuccesMinuteNew = nbSuccesMin + savSuccesMinute;
		var savVerifMinute = parseInt(savMinute[1]);
		var nbVerifMinuteNew = nbVerifMin + savVerifMinute;
		succesMinuteNew = nbSuccesMinuteNew+"/"+nbVerifMinuteNew;

		var savSeconde = succesSeconde.split('/');
		var savSuccesSeconde = parseInt(savSeconde[0]);
		var nbSuccesSecondeNew = nbSuccesSec + savSuccesSeconde;
		var savVerifSeconde = parseInt(savSeconde[1]);
		var nbVerifSecondeNew = nbVerifSec + savVerifSeconde;
		succesSecondeNew = nbSuccesSecondeNew+"/"+nbVerifSecondeNew;

		if (typeof succesHeureNew=="undefined") {
			succesHeureNew = succesHeure;
		}

		if (typeof succesMinuteNew=="undefined") {
			succesMinuteNew = succesMinute;
		}

		if (typeof succesSecondeNew=="undefined") {
			succesSecondeNew = succesSeconde;
		}
			

		user = {
			succesHeure:succesHeureNew,
			succesMinute:succesMinuteNew,
			succesSeconde:succesSecondeNew,
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