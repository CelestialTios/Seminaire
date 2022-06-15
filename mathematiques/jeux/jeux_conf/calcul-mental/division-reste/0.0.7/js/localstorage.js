
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

			nbMin1C = user.nbMin1C;
			nbMin1D = user.nbMin1D;
			nbMin1U = user.nbMin1U;
			nbMax1C = user.nbMax1C;
			nbMax1D = user.nbMax1D;
			nbMax1U = user.nbMax1U;
			nbMin2C = user.nbMin2C;
			nbMin2D = user.nbMin2D;
			nbMin2U = user.nbMin2U;
			nbMax2C = user.nbMax2C;
			nbMax2D = user.nbMax2D;
			nbMax2U = user.nbMax2U;

			dataV = user.dataV;
			
			lireStorApp = 'ok';
		}
		else {
			colObjet = "#eee";
			colBord = "#ccc";
			colPage = "#fff";
			mtfClass = "";
			nbMin1C = 0;
			nbMin1D = 0;
			nbMin1U = 2;
			nbMax1C = 0;
			nbMax1D = 0;
			nbMax1U = 9;
			nbMin2C = 0;
			nbMin2D = 0;
			nbMin2U = 2;
			nbMax2C = 0;
			nbMax2D = 0;
			nbMax2U = 9;
			dataV = "min";
			
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
			nbMin1C:nbMin1C,
			nbMin1D:nbMin1D,
			nbMin1U:nbMin1U,
			nbMax1C:nbMax1C,
			nbMax1D:nbMax1D,
			nbMax1U:nbMax1U,
			nbMin2C:nbMin2C,
			nbMin2D:nbMin2D,
			nbMin2U:nbMin2U,
			nbMax2C:nbMax2C,
			nbMax2D:nbMax2D,
			nbMax2U:nbMax2U,
			dataV:dataV
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