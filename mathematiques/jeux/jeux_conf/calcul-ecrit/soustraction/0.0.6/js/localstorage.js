
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

			colObjet = user.colObjet;
			colBord = user.colBord;
			colPage = user.colPage;
			mtfClass = user.mtfClass;

			typNombre = user.typNombre;

			chk1M = user.chk1M;
			chk1C = user.chk1C;
			chk1D = user.chk1D;
			chk1U = user.chk1U;
			chk2M = user.chk2M;
			chk2C = user.chk2C;
			chk2D = user.chk2D;
			chk2U = user.chk2U;
			chk1Ud = user.chk1Ud;
			chk1Uc = user.chk1Uc;
			chk1Um = user.chk1Um;
			chk2Ud = user.chk2Ud;
			chk2Uc = user.chk2Uc;
			chk2Um = user.chk2Um;

			chkRang = user.chkRang;			

			chkGrille = user.chkGrille;
			
			lireStorApp = 'ok';
		}
		else {
			colObjet = "#eee";
			colBord = "#ccc";
			colPage = "#fff";
			mtfClass = "";
			typNombre = "Entier";
			chk1M = false;
			chk1C = false;
			chk1D = true;
			chk1U = true;
			chk2M = false;
			chk2C = false;
			chk2D = true;
			chk2U = true;
			chk1Ud = true;
			chk1Uc = true;
			chk1Um = false;
			chk2Ud = true;
			chk2Uc = true;
			chk2Um = false;
			chkRang = "false";
			chkGrille = "false";
			
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
			typNombre:typNombre,
			chk1M:chk1M,
			chk1C:chk1C,
			chk1D:chk1D,
			chk1U:chk1U,
			chk2M:chk2M,
			chk2C:chk2C,
			chk2D:chk2D,
			chk2U:chk2U,
			chk1Ud:chk1Ud,
			chk1Uc:chk1Uc,
			chk1Um:chk1Um,
			chk2Ud:chk2Ud,
			chk2Uc:chk2Uc,
			chk2Um:chk2Um,
			chkRang:chkRang,
			chkGrille:chkGrille
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
			collectSmiley = user.collectSmiley;
			collectAlim = user.collectAlim;
			collectAnimal = user.collectAnimal;
			
			lireStorPrfl = 'ok';
		}
		else {
			
			scrExo1 = "0/0";
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
		var nbSuccesExo1 = totSucces + savSuccesExo1;
		var savVerifExo1 = parseInt(savExo1[1]);
		var nbVerifExo1 = nbVerif + savVerifExo1;
		newExo1 = nbSuccesExo1+"/"+nbVerifExo1;

		if (typeof newExo1=="undefined") {
			newExo1 = scrExo1;
		}			

		user = {
			scrExo1:newExo1,
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