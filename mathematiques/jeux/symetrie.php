<html lang="fr">
	<head>
		<meta charset="utf-8">
		<title>Symétrie</title>
		<script src="modeles.js"></script>
		<link rel="icon" href="../../img/favico.png" />
		<link href="../../css/custom.css" rel="stylesheet">
		<link href="../../css/all.css" rel="stylesheet">
		<script src="../../js/popper.min.js"></script>
		<script src="../../js/jquery.min.js"></script>
		<script src="../../js/bootstrap.min.js"></script>
		<style>
			#container {margin:auto;}					
		</style>
		<script>			
			var colorfill = '#3366FF';
			var largeur_cellule = 30;
			var hauteur_cellule = 30;
			var hauteur = 10;
			var largeur = 10;
			var axeHorizontal = false;
			var axeVertical = true;
			var fini = false;
			var edit = false;
			var num_modele = -2;
			var cellules = [];
			var solution = [];
			var monModele = {};
			var montre_symetrie = false;
			var nb_verifie = 0;
			var min_verifie = 10;
			var synchro_taille = false;
			var fileAPI = false;
						
			$(document).ready(function()
			{
				//console.log('num_modele:',num_modele);
				// Check for the various File API support.
				if (window.File && window.FileReader && window.FileList && window.Blob) {
					fileAPI=true;	 
				}
				else
				{
					$("#btn_charger").hide();
					alert('Désolé. La version de votre navigateur internet ne vous permet pas de télécharger de fichier. Vous ne pourrez donc pas utiliser vos propres modèles.');					
				}
				var canvas = document.getElementById('canvas');	
				var context = canvas.getContext('2d');
				context.save();
				//if (!edit) 
				//{
					$(".edit").hide();
					$(".no-edit").show();
					if (num_modele>modele.length-1 || num_modele<0) {num_modele = Math.floor((Math.random() * modele.length));}
					init_select();
					init(num_modele);
				//}
				/*else
				{
					
				}*/
				
				function init_edit()
				{
					edit=true;
					fini=false;
					$(".no-edit").hide();
					$(".edit").show();
					if (montre_symetrie) {$("#btn_symetrie").hide();}
					else {$("#btn_symetrie").show();}						
					//init_cellules(-1);
					if (num_modele==-2)
					{
						for (var i=0; i<hauteur; i++)
						{
							cellules[i] = monModele.cellules[i].slice();
						}
					}
					else
					{
						init_cellules(num_modele);
					}
					//copie_cellules();
					//prepare_canvas();
					//dessine_quadrillage();
					dessine_modele();
					if (montre_symetrie) {dessine_symetrie();}
				}
				
				function init(num_modele)
				{
					
					//console.log('num_modele:',num_modele);
					fini=false;
					$("#btn_solution").hide();
					nb_verifie=0;
					if (num_modele==-2)
					{
						hauteur = monModele.cellules.length;
						largeur = monModele.cellules[0].length;
						for (var i=0; i<hauteur; i++)
						{
							cellules[i] = monModele.cellules[i].slice();
						}
						axeHorizontal = monModele.axeHorizontal;
						axeVertical = monModele.axeVertical;
						largeur_cellule = monModele.largeur_cellule;
						hauteur_cellule = monModele.hauteur_cellule;						
						$('#num_sel option[value=""]').prop('selected', true);
						ajuste_taille();
					}
					else
					{
						hauteur = modele[num_modele].cellules.length;	
						largeur = modele[num_modele].cellules[0].length;
						hauteur_cellule = modele[num_modele].hauteur_cellule;
						largeur_cellule = modele[num_modele].largeur_cellule;	
						axeHorizontal = modele[num_modele].axeHorizontal;
						axeVertical = modele[num_modele].axeVertical;
						init_cellules(num_modele);											
					}
					copie_cellules();
					cree_symetrie();	
					if (axeHorizontal && axeVertical) {$("#consigne").text('Construis les parties symétriques de cette figure par rapport aux axes rouges.');}				
					else {$("#consigne").text('Construis la partie symétrique de cette figure par rapport à l\'axe rouge.');}
					prepare_canvas();
					dessine_quadrillage();
					dessine_modele();				
				}
								
				$("#num_sel").change(function()
				{ // changement de modèle
					if ($(this).val()!="")
					{
						num_modele=$(this).val();
						init(num_modele);
					}
					else
					{
						$('#num_sel option[value="'+num_modele+'"]').prop('selected', true);
					}
					//console.log('num_sel:',num_modele);					
				});
				
				function init_select()
				{ // initialisation de la liste des modèles
					var texte = '';
					for (var i=0; i<modele.length; i++)
					{
						texte += '<option value='+i;
						if (num_modele==i) {texte+=' selected';}
						texte+=' >'+(i+1)+'</option>';
					}
					$("#num_sel").append(texte);
				}
				
				$("#btn_creation").click(function()
				{ // MODE EDITION : création d'un nouveau modèle					
					$("#largeur").val(largeur);
					$("#hauteur").val(hauteur);
					$("#largcell").val(largeur_cellule);
					$("#hautcell").val(hauteur_cellule);
					if (axeHorizontal) {$("#horizontal").prop("checked",true);}
					if (axeVertical) {$("#vertical").prop("checked",true);}
					if (montre_symetrie) {$("#montre_symetrie").prop("checked",true);}												
					$("#dialogParam").dialog("open");
				});
				
				$("#btn_taille").click(function(){
					$("#taille_largeur").slider('value',largeur_cellule);
					$("#taille_hauteur").slider('value',hauteur_cellule);															
					$("#dialogTaille").dialog("open");
				});
								
				function valide_valeurs()
				{ // MODE EDITION : validation des paramètres sélectionnés
					if ($("#vertical").is(':checked')) {axeVertical = true;} else {axeVertical = false;}
					if ($("#horizontal").is(':checked') || !axeVertical) {axeHorizontal = true; $("#horizontal").prop("checked", true);} else {axeHorizontal = false;}		
					if ($("#montre_symetrie").is(":checked")) {montre_symetrie = true;} else {montre_symetrie = false;}
					largeur = $("#largeur").val();
					hauteur = $("#hauteur").val();
					largeur_cellule = $("#largcell").val();
					hauteur_cellule = $("#hautcell").val();
					ajuste_taille();
					$("#largeur").val(largeur);
					$("#hauteur").val(hauteur);
					$("#largcell").val(largeur_cellule);
					$("#hautcell").val(hauteur_cellule);						
				}
				
				function ajuste_taille()
				{ // Ajustement des différentes valeurs de taille
					var infos = [];
					if (largeur<4) {largeur=4; infos.push('La largeur était trop petite et a été augmentée à 4.');}
					else if (largeur>20) {largeur=20; infos.push('La largeur était trop grande et a été diminuée à 20.');}
					if (hauteur<4) {hauteur=4; infos.push('La hauteur était trop petite et a été augmentée à 4.');}
					else if (hauteur>20) {hauteur=20; infos.push('La hauteur était trop grande et a été diminuée à 20.');}
					if (largeur_cellule<10) {largeur_cellule=10; infos.push('La largeur de cellule était trop petite et a été augmentée à 10.');}
					else if (largeur_cellule>100) {largeur_cellule=100; infos.push('La largeur de cellule était trop grande et a été diminuée à 100.');}
					else if (largeur_cellule%5!=0) {largeur_cellule=Math.floor(largeur_cellule/5)*5; infos.push('La largeur de cellule a été arrondie au multiple de 5 inférieur ('+largeur_cellule+').');}
					if (hauteur_cellule<10) {hauteur_cellule=10; infos.push('La hauteur de cellule était trop petite et a été augmentée à 10.');}
					else if (hauteur_cellule>100) {hauteur_cellule=100; infos.push('La hauteur de cellule était trop grande et a été diminuée à 100.');}
					else if (hauteur_cellule%5!=0) {hauteur_cellule=Math.floor(hauteur_cellule/5)*5; infos.push('La hauteur de cellule a été arrondie au multiple de 5 inférieur ('+hauteur_cellule+').');}
					if (largeur%2!=0 && axeVertical) {largeur++; infos.push('L\'axe de symétrie est vertical et la largeur était de '+(largeur-1)+'. Elle a été augmentée à '+largeur+'.');}
					if (hauteur%2!=0 && axeHorizontal) {hauteur++; infos.push('L\'axe de symétrie est horizontal et la hauteur était de '+(hauteur-1)+'. Elle a été augmentée à '+hauteur+'.');} 
					if (infos.length>0) {$("#dialogBox").html('<p>'+infos.join('<br />')+'</p>').dialog('open');}
				}	
							
				function prepare_canvas()
				{ // Ajustement de la taille du canvas
					canvas.height=hauteur*hauteur_cellule+2;
					canvas.width=largeur*largeur_cellule+2;
					$("#container").css('width',canvas.width);	
				}
				
				function init_cellules(num_modele)
				{ // Initialisation des cellules selon le modèle sélectionné ou vides si -1
					cellules = [];
					for (y=0; y<hauteur; y++)
					{		
						cellules[y]=[];				
						for (x=0; x<largeur; x++)
						{
							if (num_modele>=0) {cellules[y][x] = modele[num_modele].cellules[y][x];}
							else {cellules[y][x] = 0;}
						}
					}
					//console.log(cellules);
				}
				
				function copie_cellules()
				{ // Copie du contenu des cellules dans le tableau solution
					solution = [];
					for (y=0; y<hauteur; y++)
					{
						solution[y] = cellules[y].slice();
					}
				}
				
				$("#canvas").click(function (ev) 
				{ // Clic sur le canvas
					if (fini) {return;}
					if (ev.pageX || ev.pageY) { 
					  x = ev.pageX;
					  y = ev.pageY;
					}
					else { 
					  x = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
					  y = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
					} 
					x -= canvas.offsetLeft;
					y -= canvas.offsetTop;
					if (x>largeur*largeur_cellule || y>hauteur*hauteur_cellule)
					{
						console.log('hors quadrillage');
						return;
					}					
					var xCell = 0;
					var yCell = 0;
					if (x>largeur_cellule) {xCell = Math.floor(x/largeur_cellule);} else {xCell = 0;}
					if (y>hauteur_cellule) {yCell = Math.floor(y/hauteur_cellule);} else {yCell = 0;}
					if (edit && axeVertical && axeHorizontal && (xCell>=largeur/2 || yCell>=hauteur/2))
					{
						console.log('double symétrie, hors de la zone d\'édition');
						return;
					}
					else if (edit && axeVertical && xCell>=largeur/2)
					{
						console.log('symétrie verticale, hors zone');
						return;
					}
					else if (edit && axeHorizontal && yCell>=hauteur/2)
					{
						console.log('symétrie horizontale, hors zone');
						return;
					}
					else if (!edit && ((axeVertical && !axeHorizontal && xCell<largeur/2) || (axeHorizontal && !axeVertical && yCell<hauteur/2)
					|| (axeVertical && axeHorizontal && xCell<largeur/2 && yCell<hauteur/2)))
					{
						console.log('clic sur la mauvaise moitié');
						return;
					}
					//console.log('x:',x,'y:',y,'xCell:',xCell,'yCell:',yCell);
					cellules[yCell][xCell]=1-cellules[yCell][xCell];
					if (cellules[yCell][xCell]==0) {couleur='white';} else {couleur=colorfill;}
					trace_rect(context, xCell*largeur_cellule, yCell*hauteur_cellule, largeur_cellule, hauteur_cellule, couleur);	
					//console.log('cellules['+yCell+']['+xCell+']:',cellules[yCell][xCell]);		
					if (montre_symetrie && edit) {update_symetrie(xCell, yCell, cellules[yCell][xCell]);}
				});
				
				function cree_symetrie()
				{ // Création des parties symétriques et mise à jour dans le tableau solution
					if (axeVertical) {
						for (y=0; y<hauteur; y++)
						{
							for (x=0; x<largeur/2; x++)
							{
								solution[y][largeur-1-x]=solution[y][x];
							}
						}						
					}
					if (axeHorizontal) {
						for (x=0; x<largeur; x++)
						{
							for (y=0; y<hauteur/2; y++)
							{
								solution[hauteur-1-y][x]=solution[y][x];
							}
						}
					}
					//console.log(solution);
				}
				
				function update_symetrie(x, y, valeur)
				{ // Mise à jour de la symétrique de la cellule donnée
					solution[y][x]=valeur;
					if (solution[y][x]==0) {couleur='white';} else {couleur=colorfill;}					
					if (axeVertical)
					{
						y2 = y;
						x2 = largeur-1-x;
						solution[y2][x2] = solution[y][x];
						trace_rect(context, x2*largeur_cellule, y2*hauteur_cellule, largeur_cellule, hauteur_cellule, couleur);
					}
					if (axeHorizontal)
					{
						y2 = hauteur-1-y;
						x2 = x;
						solution[y2][x2] = solution[y][x];
						trace_rect(context, x2*largeur_cellule, y2*hauteur_cellule, largeur_cellule, hauteur_cellule, couleur);
						if (axeVertical)
						{
							y2 = y2;
							x2 = largeur-1-x2;
							solution[y2][x2] = solution[y][x];
							trace_rect(context, x2*largeur_cellule, y2*hauteur_cellule, largeur_cellule, hauteur_cellule, couleur);
						}					
					}
				}
				
				function dessine_symetrie()
				{
					for (y=0; y<hauteur; y++)
					{
						for (x=0; x<largeur; x++)
						{
							if (solution[y][x]==0) {couleur='white';} else {couleur=colorfill;}
							trace_rect(context, x*largeur_cellule, y*hauteur_cellule, largeur_cellule, hauteur_cellule, couleur);
						}
					}
				}
				
				$("#btn_symetrie").click(function()
				{
					copie_cellules();
					cree_symetrie();
					dessine_symetrie();					
				});
												
				$("#btn_cellules").click(function()
				{
					var texte = exporte_modele();
					console.log(texte);
				});
				
				function exporte_modele()
				{ // MODE EDITION : Affichage des variables dans la console
					//texte="{\n";
					texte="© Clicmaclasse.fr - Activité de symétrie\n";
					texte+="Ne pas modifier ce fichier sous risque de dysfonctionnement\n";
					texte+="-----------------------------------------------------------\n";
					texte+="hauteur_cellule:"+hauteur_cellule+"\n";
					texte+="largeur_cellule:"+largeur_cellule+"\n";
					//texte+='[';
					for (var y=0; y<hauteur; y++)
					{
						texte+='[';
						for (var x=0; x<largeur; x++)
						{
							if (x>0) {texte+=',';}
							texte+=cellules[y][x];							
						}
						texte+="]\n";
						//if (y<hauteur-1) {texte+="\n";}
					}
					//texte+="],\n";
					texte+="axeHorizontal:"+Boolean(axeHorizontal)+"\n";
					texte+="axeVertical:"+Boolean(axeVertical)+"\n";
					//texte+="}\n";
					return texte;
				}
				
				$("#btn_enregistrer").click(function(){
					if (cellules_pleines('')>0)
					{
						texte = exporte_modele();					
						// Start file download.
						download("modele_symetrie",texte);	
					}
					else
					{
						$("#dialogBox").html('<p>Vous ne pouvez pas enregistrer un modèle vide.</p>').dialog('open');
					}				
				});
				
				function download(filename, text) {
					var element = document.createElement('a');
					element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
					element.setAttribute('download', filename);

					element.style.display = 'none';
					document.body.appendChild(element);

					element.click();

					document.body.removeChild(element);
				}
						
				function loadFileAsText()
				{
					var fileToLoad = document.getElementById("fileToLoad").files[0];		
					if (fileToLoad==undefined)
					{return;}
					//console.log(fileToLoad.name);
					fileName=fileToLoad.name;		
					var fileReader = new FileReader();
					fileReader.onload = function(fileLoadedEvent) 
					{
						var textFromFileLoaded = fileLoadedEvent.target.result;		
						//console.log(textFromFileLoaded);
						var lignes = textFromFileLoaded.split('\n');
						//console.log(lignes);
						interprete_fichier(lignes);						
					};
					fileReader.readAsText(fileToLoad, "UTF-8");					
				}
				
				function interprete_fichier(fichier)
				{ // Interprètation des données du fichier chargé
					var cell = 0;					
					monModele.cellules = [];
					for (var i=0; i<fichier.length; i++)
					{
						if (fichier[i].indexOf('largeur_cellule:')!==-1)
						{ // largeur_cellule
							//console.log('largeur_cellule');
							monModele.largeur_cellule=fichier[i].replace('largeur_cellule:','');
						}
						else if (fichier[i].indexOf('hauteur_cellule:')!==-1)
						{ // hauteur_cellule
							//console.log('hauteur_cellule');
							monModele.hauteur_cellule=fichier[i].replace('hauteur_cellule:','');
						}
						else if (fichier[i].indexOf('[')!==-1)
						{ // ligne du tableau
							//console.log('cellules');
							var ligne_cellules = fichier[i].replace('[','');
							ligne_cellules = ligne_cellules.replace(']','');
							//console.log('ligne_cellules:',ligne_cellules);
							var mesCellules = ligne_cellules.split(',');
							//console.log('mesCellules:',mesCellules);
							monModele.cellules[cell] = [];
							for (var j=0; j<mesCellules.length; j++)
							{
								monModele.cellules[cell][j]=parseInt(mesCellules[j]);
								//console.log('cell:',cell,'j:',j,'mesCellules['+j+']:',mesCellules[j],'monModele.cellules['+cell+']['+j+']:',monModele.cellules[cell][j]);
							}
							cell++;
						}
						else if (fichier[i].indexOf('axeHorizontal:')!==-1)
						{ // axeHorizontal
							//console.log('axeHorizontal');
							if (fichier[i].replace('axeHorizontal:','')=='true')  {monModele.axeHorizontal=true;} else {monModele.axeHorizontal=false;}
						}
						else if (fichier[i].indexOf('axeVertical:')!==-1)
						{ // axeVertical
							//console.log('axeVertical');
							if (fichier[i].replace('axeVertical:','')=='true')  {monModele.axeVertical=true;} else {monModele.axeVertical=false;}
						}				
					}	
					num_modele=-2;					
					init(num_modele);
					//console.log(monModele);
				}
					
				function dessine_modele()
				{ // Préparation du modèle sur le canvas
					for (var y=0; y<hauteur; y++)
					{
						for (var x=0; x<largeur; x++)
						{
							if (cellules[y][x]==1)
							{
								trace_rect(context, x*largeur_cellule, y*hauteur_cellule, largeur_cellule, hauteur_cellule, colorfill);								
							}
							else
							{
								trace_rect(context, x*largeur_cellule, y*hauteur_cellule, largeur_cellule, hauteur_cellule, 'white');	
							}
						}
					}
				}				
				
				$("#btn_verifie").click(function()
				{ // Comparaison du travail de l'utilisateur à la solution
					var erreurs = 0;
					nb_verifie++;
					if (nb_verifie==min_verifie) {$("#btn_solution").show();}
					for (var y=0; y<hauteur; y++)
					{
						for (var x=0; x<largeur; x++)
						{
							if (solution[y][x]!=cellules[y][x])
							{
								erreurs++;
							}
						}
					}
					//console.log('Erreurs :',erreurs);
					if (erreurs==0)
					{
						fini=true;
						//console.log('Bravo ! C\'est terminé !');
						var msg = '<p style="color:#00AA00;">Bravo ! Tu as terminé !</p>';
						document.getElementById("btn_success").style.display = "";
						document.getElementById("btn_error").style.display = "none";
					}
					else
					{
						if (erreurs>1) {						
							document.getElementById("btn_error").innerHTML = "Il y a encore " + erreurs + " cases qui ne sont pas correctes";
						}else{
							document.getElementById("btn_error").innerHTML = "Il y a encore une case qui n'est pas correcte";
						}
						document.getElementById("btn_success").style.display = "none";
						document.getElementById("btn_error").style.display = "";
						
					}
					
				});
				
				function montre_erreurs()
				{ // Mise en évidence des erreurs (croix sur cases coloriées par erreur ; carré sur cases oubliées)
					fini=true;
					for (var y=0; y<hauteur; y++)
					{
						for (var x=0; x<largeur; x++)
						{
							if (solution[y][x]!=cellules[y][x])
							{
								if (solution[y][x]==0)
								{
									trace_ligne(context, x*largeur_cellule+7, y*hauteur_cellule+7, (x+1)*largeur_cellule-5, (y+1)*largeur_cellule-5, 'red', 3);
									trace_ligne(context, x*largeur_cellule+7, (y+1)*hauteur_cellule-5, (x+1)*largeur_cellule-5, y*largeur_cellule+7, 'red', 3);
								}
								else
								{
									trace_rect(context, x*largeur_cellule+5, y*hauteur_cellule+5, largeur_cellule-10, hauteur_cellule-10, 'red');
								}
							}
						}
					}
				}	
				
				function cellules_pleines(source)
				{
					nb_cellules=0;
					if (source=='')
					{
						for (var y=0; y<hauteur; y++)
						{
							for (var x=0; x<largeur; x++)
							{
								if (cellules[y][x]==1)
								{
									nb_cellules++;
								}
							}
						}
					}
					else
					{
						for (var i=0; i<source.length; i++)
						{
							if (source[i].indexOf('[')!==-1)
							{
								for (var j=0; j<source[i].length; j++)
								{
									if (source[i].charAt(j)=='1')
									{
										nb_cellules++;
									}
								}
							}
						}
					}
					//console.log('nb_cellules:',nb_cellules);
					return nb_cellules;
				}
				
				$("#btn_solution").click(function(){
					montre_erreurs();
				});
					
				$("#btn_recommencer").click(function(){
					document.getElementById("btn_success").style.display = "none";
					document.getElementById("btn_error").style.display = "none";
					fini
					init(num_modele);
				});
				
				$("#btn_charger").click(function(){
					$("#dialogCharger").dialog("open");
				});
				
				$("#btn_commencer").click(function(){
					edit=false;
					$(".no-edit").show();
					$(".edit").hide();
					init(num_modele);
				});
				
				$("#btn_creer").click(function(){
					init_edit();
				});
				
				$("#btn_appliquer").click(function(){					
					var texte = exporte_modele();
					var liste = texte.split("\n");
					if (cellules_pleines(liste)==0)
					{
						$("#dialogBox").html('<p>Vous ne pouvez pas utiliser un modèle vide.</p>').dialog('open');
					}
					else
					{
						interprete_fichier(liste);
						edit=false;
						$(".edit").hide();
						$(".no-edit").show();
						num_modele=-2;
						init(num_modele);
					}					
				});
				
				function dessine_quadrillage()
				{ // dessin du quadrillage sur le canvas		
					epaisseur=2;		
					y=1;					
					while (y<hauteur)
					{
						if (y==0 || y==hauteur) {couleur='black';} else {couleur='lightgray';}
						trace_ligne(context, 0, y*hauteur_cellule+1, largeur*largeur_cellule+2, y*hauteur_cellule+1, couleur, epaisseur);
						y+=1;
					}
					x=1;
					while (x<largeur)
					{
						if (x==0 || x==largeur) {couleur='black';} else {couleur='lightgray';}
						trace_ligne(context, x*largeur_cellule+1, 0, x*largeur_cellule+1, hauteur*hauteur_cellule+2, couleur, epaisseur);
						x+=1;
					}	
					if (axeHorizontal) {trace_ligne(context, 0, (hauteur/2)*hauteur_cellule+1, largeur*largeur_cellule+2, (hauteur/2)*hauteur_cellule+1, 'red', epaisseur);}
					if (axeVertical) {trace_ligne(context, (largeur/2)*largeur_cellule+1, 0, (largeur/2)*largeur_cellule+1, hauteur*hauteur_cellule+2, 'red', epaisseur);}
					trace_cadre('black', epaisseur);					
				}
				
				function trace_cadre(couleur, epaisseur)
				{ // Tracé du cadre du canvas
					trace_ligne(context, 0, 1, largeur*largeur_cellule+2, 1, couleur, epaisseur);
					trace_ligne(context, 0, hauteur*hauteur_cellule+1, largeur*largeur_cellule+2, hauteur*hauteur_cellule+1, couleur, epaisseur);
					trace_ligne(context, 1, 1, 1, hauteur*hauteur_cellule+1, couleur, epaisseur);
					trace_ligne(context, largeur*largeur_cellule+1, 1, largeur*largeur_cellule+1, hauteur*hauteur_cellule+1, couleur, epaisseur);						
				}
				
				function trace_ligne(context, x1, y1, x2, y2, colorline, linewidth)
				{ // Tracé de ligne
					context.beginPath();
					context.moveTo(x1,y1);
					context.lineTo(x2,y2);
					context.strokeStyle = colorline;
					context.lineWidth = linewidth;
					context.stroke();
				}
				
				function trace_rect(context, x, y, larg_taille, haut_taille, colorfill)
				{ // Tracé de rectangle
					//console.log('x:',x,'y:',y,'larg_taille:',larg_taille,'haut_taille:',haut_taille,'colorfill:',colorfill);
					context.beginPath();
					context.fillStyle = colorfill;
					context.rect(x+2, y+2, larg_taille-2, haut_taille-2);
					context.fill();
				}	
				
				
				$("#synchro").change(function(){
					if ($("#synchro").is(':checked')) 
					{
						synchro_taille=true;						
						$("#taille_hauteur").hide();
						$("#hauteur_valeur").text($("#largeur_valeur").text());
					} 
					else {
						synchro_taille=false;
						$("#taille_hauteur").slider("value",$("#hauteur_valeur").text());
						$("#taille_hauteur").show();
					}
				});
				
				function update_slider(taille)
				{
					if (taille=='largeur')
					{												
						$("#largeur_valeur").text($("#taille_largeur").slider("value"));
						if (synchro_taille) 
						{
							$("#hauteur_valeur").text($("#taille_largeur").slider("value"));
						}
					}
					else
					{
						$("#hauteur_valeur").text($("#taille_hauteur").slider("value"));						
					}
				}
				

				
				
			});
		</script>
	</head>
	<?php
			include 'menu.php';
		?>
	<body>

		
		<nav aria-label="breadcrum">
			<ol class="breadcrumb bg-info">
				<li class="breadcrumb-item active text-white font-weight-bold titre" aria-current="page">Mathématiques - Jeux - Symetrie</li>
			</ol>
		</nav>
		
			
		<nav aria-label="breadcrum" class="nav nav-pills flex-column flex-sm-row">
			<ol class="breadcrumb bg-info">
				<li class="breadcrumb-item active text-white font-weight-bold titre" aria-current="page">Sélectionne un numéro de modèle : <select id="num_sel"><option value=""></option></select></li>		
			</ol>
		</nav>
		
		<div id="container">
			<canvas id="canvas"></canvas>
		</div>
			<p style="text-align:center;">
			
			<span class="edit">				
			<button id="btn_creation">Nouveau modèle</button>
			<!--<button id="btn_cellules">Afficher les données</button>-->
			<button id="btn_symetrie">Créer la symétrie</button><br />
			<button id="btn_enregistrer">Enregistrer le modèle</button>
			<button id="btn_appliquer">Utiliser ce modèle</button>
			<button id="btn_commencer">Quitter l'éditeur</button>
			</span>
		
			<span class="no-edit">
			<button class="btn btn-info consignes2" type="button" id="btn_verifie">Vérifier</button>
			<button class="btn btn-info consignes2" type="button" id="btn_recommencer">Recommencer</button>
			</span>	
			</p>					
		
		<div id="dialogBox" title="Information"></div>
		<div id="dialogParam" title="Paramètres">
		</div>
		<div id="dialogCharger" title="Charger">
		</div>
		<div id="dialogTaille" title="Taille des cellules">
		</div>
		
		<button class="btn btn-success consignes2" type="button" style="display:none;" id="btn_success">Bravo tu as terminé !</button>
		<button class="btn btn-danger consignes2" type="button" style="display:none;" id="btn_error">Il reste des erreurs</button>
	</body>
	
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-166118568-1"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());
		  gtag('config', 'UA-166118568-1');
		</script>
</html>
