
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

			typInconnu = user.typInconnu;

			nbMin1M = user.nbMin1M;
			nbMin1C = user.nbMin1C;
			nbMin1D = user.nbMin1D;
			nbMin1U = user.nbMin1U;
			nbMax1M = user.nbMax1M;
			nbMax1C = user.nbMax1C;
			nbMax1D = user.nbMax1D;
			nbMax1U = user.nbMax1U;
			nbMin2M = user.nbMin2M;
			nbMin2C = user.nbMin2C;
			nbMin2D = user.nbMin2D;
			nbMin2U = user.nbMin2U;
			nbMax2M = user.nbMax2M;
			nbMax2C = user.nbMax2C;
			nbMax2D = user.nbMax2D;
			nbMax2U = user.nbMax2U;

			chkPassM = user.chkPassM;
			chkPassC = user.chkPassC;
			chkPassD = user.chkPassD;
			chkPassU = user.chkPassU;

			chkJustM = user.chkJustM;
			chkJustC = user.chkJustC;
			chkJustD = user.chkJustD;
			chkJustU = user.chkJustU;
			
			lireStorApp = 'ok';
		}
		else {
			colObjet = "#eee";
			colBord = "#ccc";
			colPage = "#fff";
			mtfClass = "";
			typInconnu = "2emT";
			nbMin1M = 0;
			nbMin1C = 0;
			nbMin1D = 1;
			nbMin1U = 1;
			nbMax1M = 0;
			nbMax1C = 0;
			nbMax1D = 9;
			nbMax1U = 9;
			nbMin2M = 0;
			nbMin2C = 0;
			nbMin2D = 1;
			nbMin2U = 1;
			nbMax2M = 0;
			nbMax2C = 0;
			nbMax2D = 9;
			nbMax2U = 9;
			chkPassM = false;
			chkPassC = false;
			chkPassD = false;
			chkPassU = false;
			chkJustM = false;
			chkJustC = false;
			chkJustD = false;
			chkJustU = false;
			
			lireStorApp = 'ok';
		}

	} else alert("La fonction LocalStorage n'est pas supporté sur votre appareil.");
}

function ecrireStorageApparence() {
	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-apparence";		
		
		user = {
			colObjet:colObjet,
			colBord:colBord,
			colPage:colPage,
			mtfClass:mtfClass,
			typInconnu:typInconnu,
			nbMin1M:nbMin1M,
			nbMin1C:nbMin1C,
			nbMin1D:nbMin1D,
			nbMin1U:nbMin1U,
			nbMax1M:nbMax1M,
			nbMax1C:nbMax1C,
			nbMax1D:nbMax1D,
			nbMax1U:nbMax1U,
			nbMin2M:nbMin2M,
			nbMin2C:nbMin2C,
			nbMin2D:nbMin2D,
			nbMin2U:nbMin2U,
			nbMax2M:nbMax2M,
			nbMax2C:nbMax2C,
			nbMax2D:nbMax2D,
			nbMax2U:nbMax2U,
			chkPassM:chkPassM,
			chkPassC:chkPassC,
			chkPassD:chkPassD,
			chkPassU:chkPassU,
			chkJustM:chkJustM,
			chkJustC:chkJustC,
			chkJustD:chkJustD,
			chkJustU:chkJustU
		};

		localStorage.setItem(dataUser,JSON.stringify(user));
		$("#appSavSuccesBox").show();
		$("#appSavSuccesBox").fadeOut(4000, "swing");

	} else alert("La fonction LocalStorage n'est pas supporté sur votre appareil.");
}

function defautStorageApparence() {
	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-apparence";
		localStorage.removeItem(dataUser);
		lireStorageApparence();

	} else alert("La fonction LocalStorage n'est pas supporté sur votre appareil.");
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

	} else alert("La fonction LocalStorage n'est pas supporté sur votre appareil.");
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

	} else alert("La fonction LocalStorage n'est pas supporté sur votre appareil.");
}

function defautStorageProfil() {
	if(typeof localStorage!='undefined' && JSON) {

		dataUser = pseudoL+"-profil";
		localStorage.removeItem(dataUser);
		lireStorageProfil();

	} else alert("La fonction LocalStorage n'est pas supporté sur votre appareil.");
}