
/************************************************/

// LOCAL STORAGE //

/************************************************/

/*************/

/* APPARENCE */

/*************/

function lireStorageApparence() {
	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-apparence";

		user = JSON.parse(localStorage.getItem(dataUser));
		if (user!=null) {

			typActivite = user.typActivite;
			typExercice = user.typExercice;
			colAngl = user.colAngl;
			colSeg1 = user.colSeg1;
			colSeg2 = user.colSeg2;
			colObjet = user.colObjet;
			colBord = user.colBord;
			colPage = user.colPage;
			mtfClass = user.mtfClass;
			nbMin = user.nbMin;
			nbMax = user.nbMax;
			segOrMin = user.segOrMin;
			segOrMax = user.segOrMax;
			typRapp = user.typRapp;
			transparence = user.transparence;
			colGradExt = user.colGradExt;
			chkHor = user.chkHor;
			colGradInt = user.colGradInt;
			chkAntiHor = user.chkAntiHor;
			
			lireStorApp = 'ok';
		}
		else {
			typActivite = "typInteractive";
			typExercice = "typMesurer";
			colAngl = "#f9bdbd";
			colSeg1 = "#F40E0E";
			colSeg2 = "#F40E0E";
			colObjet = "#eee";
			colBord = "#ccc";
			colPage = "#fff";
			mtfClass = "";
			nbMin = 0;
			nbMax = 180;
			segOrMin = 0;
			segOrMax = 0;
			typRapp = 180;
			transparence = 5;
			colGradExt = "#222";
			chkHor = true;
			colGradInt = "#222";
			chkAntiHor = false;
			
			lireStorApp = 'ok';
		}

	} else alert("La fonction LocalStorage n'est pas supportée sur votre appareil.");
}

function ecrireStorageApparence() {
	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-apparence";		
		
		user = {
			typActivite:typActivite,
			typExercice:typExercice,
			colAngl:colAngl,
			colSeg1:colSeg1,
			colSeg2:colSeg2,
			colObjet:colObjet,
			colBord:colBord,
			colPage:colPage,
			mtfClass:mtfClass,
			nbMin:nbMin,
			nbMax:nbMax,
			segOrMin:segOrMin,
			segOrMax:segOrMax,
			typRapp:typRapp,
			transparence:transparence,
			colGradExt:colGradExt,
			chkHor:chkHor,
			colGradInt:colGradInt,
			chkAntiHor:chkAntiHor,
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

			mesurerAngle = user.mesurerAngle;
			formerAngle = user.formerAngle;
			collectSmiley = user.collectSmiley;
			collectAlim = user.collectAlim;
			collectAnimal = user.collectAnimal;
			
			lireStorPrfl = 'ok';
		}
		else {
			mesurerAngle = "0/0";
			formerAngle = "0/0";
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

		if (typExercice=="typMesurer") {
			var savMesurerAngle = mesurerAngle.split('/');
			var savSuccesMesurerAngle = parseInt(savMesurerAngle[0]);
			var nbSuccesComposerNew = nbSuccesMesurer + savSuccesMesurerAngle;
			var savVerifMesurerAngle = parseInt(savMesurerAngle[1]);
			var nbVerifComposerNew = nbVerifMesurer + savVerifMesurerAngle;
			mesurerAngleNew = nbSuccesComposerNew+"/"+nbVerifComposerNew;
		}
		else if (typExercice=="typFormer") {
			var savFormerAngle = formerAngle.split('/');
			var savSuccesFormerAngle = parseInt(savFormerAngle[0]);
			var nbSuccesEcrireNew = nbSuccesFormer + savSuccesFormerAngle;
			var savVerifFormerAngle = parseInt(savFormerAngle[1]);
			var nbVerifEcrireNew = nbVerifFormer + savVerifFormerAngle;
			formerAngleNew = nbSuccesEcrireNew+"/"+nbVerifEcrireNew;
		}

		if (typeof mesurerAngleNew=="undefined") {
			mesurerAngleNew = mesurerAngle;
		}

		if (typeof formerAngleNew=="undefined") {
			formerAngleNew = formerAngle;
		}			

		user = {
			mesurerAngle:mesurerAngleNew,
			formerAngle:formerAngleNew,
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
		lireStorageApparence();

	} else alert("La fonction LocalStorage n'est pas supportée sur votre appareil.");
}