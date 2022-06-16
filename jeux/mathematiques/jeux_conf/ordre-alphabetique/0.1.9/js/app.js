$(document).ready(function()
{
	/************************************************/

	///// OPTIONS /////

	/************************************************/

	/* Réglages pour l'accueil */

	/*  Liste select */
	$("#lstSelect").on("change", function () {
		listSelect = $(this).val();
		idxSelect = $(this).prop('selectedIndex');
		generer();
	});

	/*  Ajouter liste */
	$("#btAddList").click(function(){
		$("#listName, #listArea").val("");
		$("#addList").show();
	});

	$("#closeAddList").click(function(){
		$("#addList").hide();
	});

	$("#btSavList").click(function(){
		savList();
	});

	/*  Editer liste */
	$("#btEditList").click(function(){
		$("#editList").show();
		editList();
	});

	$("#closeEditList").click(function(){
		$("#editList").hide();
	});

	/* Ajouter série */
	nSeries = 1;
	$("#btAddSerie").click(function(){
		nSeries ++;
		$("#addSerie").append('<p>Série '+nSeries+':<textarea class="listArea" id="listArea-'+nSeries+'" rows="2" cols="50"></textarea></p>');
		var body = $('#addListForm');
		body.animate({scrollTop: $("#btAddSerie").offset().top});
	});

	/* Enregistrer série */

	tbListes = [];

	function savList() {
		if ($("#listName").val()!='') {
		
			listName = $("#listName").val();
			
			for (var i = 1; i <= nSeries; i++) {
				if ($("#listArea-"+i).val()!='') {
					tbListes.push($("#listArea-"+i).val().replace(/\s/g,'').split(","));
				}			
			}

			$("#addList").hide();

			$.post(
				'../apps/francais/lettres/ordre-alphabetique/listes-enregistrer-ajx.php',
				{
					profId : profId,
					listName : listName,
					tbListes : tbListes
				},
				function(data)
				{
					if(data != 'error')
					{
						//$("#plato").append(data);
						tbGlobalInit();
					}
					else
					{
						alert("Un problème est survenu lors de l'envoi des données.");
					}
				}
			);
		}
		else {
			alert('Complète le nom de la liste.');
		}
	}

	/* Editer Série */

	function editList() {

		$("#totList").html("");

		for (i=0; i<nList; i++) {
			$("#totList").append('<div id="list-'+i+'" class="listEdit">&#9656; <div class="listEditName inlBlk">'+tbPerso[i][0]+'</div> &#9666; <img src="img/icon/pk1/edit.png" id="btListEdit-'+i+'" class="icBg30 inlBlk" data-val="'+i+'"><img src="img/icon/pk1/corb.png" id="btListCorb-'+i+'" class="icBg30 inlBlk" data-val="'+i+'"><br></div>');

			$("#btListEdit-"+i).click(function(){

				$(".areaBox, #btConfListDel, #btAnnulListDel, #btAddSavBox").remove();
				
				numListEdit = $(this).attr("data-val");
				//
				$("#list-"+numListEdit).append('<p class="nameBox"><strong>Nom de la liste:</strong> <input type="text" id="listName-'+numListEdit+'" class="listName" value="'+tbPerso[numListEdit][0]+'"></p>');
				//

				nbSeries = 0;
				if (tbGlobal[numListEdit][1]!=null) {
					for (var j = 0; j < tbGlobal[numListEdit][1].length; j++) {
						nbSeries ++;
						$("#list-"+numListEdit).append('<div id="areaBox-'+nbSeries+'" class="areaBox">Série '+nbSeries+':<br><textarea id="listEditArea-'+nbSeries+'" class="listEditArea" rows="2" cols="50">'+tbGlobal[numListEdit][1][j]+'</textarea><img src="img/icon/pk1/corb.png" id="btDelPhrase-'+nbSeries+'" class="btDelPhrase icBg30 inlBlk" data-val="'+nbSeries+'"></div>');
					}
				}

				$("#list-"+numListEdit).append('<div id="btAddSavBox"><div id="btAddPhrase" class="btB">Ajouter une série</div> <div id="btSavEditList" class="btN">Enregistrer</div></div>');

				$("#btAddPhrase").click(function(){
					nbSeries ++;
					$("#list-"+numListEdit).append('<div id="areaBox-'+nbSeries+'" class="areaBox">Série '+nbSeries+':<br><textarea  id="listEditArea-'+nbSeries+'"class="listEditArea" rows="2" cols="50"></textarea><img src="img/icon/pk1/corb.png" id="btDelPhrase-'+nbSeries+'" class="btDelPhrase icBg30 inlBlk" data-val="'+nbSeries+'"></div>');
					$("#btAddSavBox").insertAfter('#areaBox-'+nbSeries);
					var body = $('#editListForm');
					body.animate({scrollTop: $("#btAddSavBox").offset().top});

					delPhrase();
				});

				delPhrase();

				$("#btSavEditList").click(function(){
					if ($('#listName-'+numListEdit).val()!='') {
						listEditName = $('#listName-'+numListEdit).val();
						tbSeries = [];
						var nbGrMots = 0;
						for (var k = 0; k < nbSeries; k++) {
							nbGrMots ++;
							if ($("#listEditArea-"+nbGrMots).val()!='') {
								tbSeries.push($("#listEditArea-"+nbGrMots).val().replace(/\s/g,'').split(','));
							}						
						}

						$.post(
							'../apps/francais/lettres/ordre-alphabetique/listes-editer-ajx.php',
							{
								profId : profId,
								listEditName : listEditName,
								numListEdit : numListEdit,
								tbSeries : tbSeries
							},
							function(data)
							{
								if(data != 'error')
								{
									//$("#plato").append(data); //debug
									listSelect = listEditName;
									numListMots = 0;
									tbGlobalInit();
								}
								else
								{
									alert("Un problème est survenu lors de l'envoi des données.");
								}
							}
						);

						$("#editList").hide();
					}
					else {
						alert('Complète le nom de la liste.');
					}
				});
			});

			function delPhrase() {
				$(".btDelPhrase").click(function(){
					$('#areaBox-'+$(this).attr('data-val')).hide();
					$('#listEditArea-'+$(this).attr('data-val')).val('');
				});
			}

			$("#btListCorb-"+i).click(function(){
				$(".areaBox, #btConfListDel, #btAnnulListDel, #btAddSavBox").remove();
				numListDel = $(this).attr("data-val");
				$("#list-"+numListDel).append('<div id="btConfListDel" class="btR">Confirmer</div> <div id="btAnnulListDel" class="btV">Annuler</div>');
				
				$("#btConfListDel").click(function(){
					$(this).parent().remove();
					listSelect = '';

					$.post(
						'../apps/francais/lettres/ordre-alphabetique/listes-supprimer-ajx.php',
						{
							profId : profId,
							numListDel : numListDel
						},
						function(data)
						{
							if(data != 'error')
							{
								//$("#plato").append(data); //debug
								tbGlobalInit();
								$('.listEdit').each(function(index) {
									$(this).children('img').attr('data-val', index);
									$(this).children('#btListEdit-'+(index+1)).attr('id', 'btListEdit-'+index);
									$(this).children('#btListCorb-'+(index+1)).attr('id', 'btListCorb-'+index);
									$(this).attr('id', 'list-'+index);
								});
							}
							else
							{
								alert("Un problème est survenu lors de l'envoi des données.");
							}
						}
					);
				});

				$("#btAnnulListDel").click(function(){
					$("#btConfListDel, #btAnnulListDel").remove();
				});
			});
		}
	}

	/* Options */

	$("#addListInfoBox").hide();
	$("#btAddListInfo, #addListInfoBox").click(function()
	{
		$("#addListInfoBox").toggle();
	});

	/* Apparence */

	// Spectrum

	$("#colObjet").spectrum({
		showInput: true,
		showInitial: true,
		showPalette: true,
		cancelText: "Annuler",
		chooseText: "Choisir",
		containerClassName: "colPickCnt",
		replacerClassName: "colPick",
		palette: maPalette,
		preferredFormat: "hex",
		change: function (color) {
			$("#depoCompoBox").css("background", color);
			colObjet = color.toHexString();
		},
		move: function (color) {
			$("#depoCompoBox").css("background", color);
			colObjet = color.toHexString();
		}
	});

	$("#colBord").spectrum({
		showInput: true,
		showInitial: true,
		showPalette: true,
		cancelText: "Annuler",
		chooseText: "Choisir",
		containerClassName: "colPickCnt",
		replacerClassName: "colPick",
		palette: maPalette,
		preferredFormat: "hex",
		change: function (color) {
			$("#depoCompoBox, .box, #motifPanel").css("border-color", color);
			colBord = color.toHexString();
		},
		move: function (color) {
			$("#depoCompoBox, .box, #motifPanel").css("border-color", color);
			colBord = color.toHexString();
		}
	});

	$("#colPage").spectrum({
		showInput: true,
		showInitial: true,
		showPalette: true,
		cancelText: "Annuler",
		chooseText: "Choisir",
		containerClassName: "colPickCnt",
		replacerClassName: "colPick",
		palette: maPalette,
		preferredFormat: "hex",
		change: function (color) {
			$("#page, #motifPanel").css("background", color);
			colPage = color.toHexString();
		},
		move: function (color) {
			$("#page, #motifPanel").css("background", color);
			colPage = color.toHexString();
		}
	});

	/* Slider Font */

	$("#sliderTemp").slider({
		min: 1,
		max: 9,
		value: 3,
		create: function() {
			$("#handTemp").text($(this).slider("value"));
		},
		slide: function(event, ui) {
			$("#handTemp").text(ui.value);
			$("#tailleFont").val(ui.value);
			tailleFont = ui.value;
			$(".box").css("font-size", "1."+tailleFont+"em");
		}
	});

	/* Enregistrer apparence*/

	$("#appSavSuccesBox").hide();
	$("#confDefStorApp").hide();

	$("#btStorApp").click(function()
	{
		ecrireStorageApparence();
	});

	$("#btDefStorApp").click(function()
	{
		$("#confDefStorApp").show();
	});

	$("#btConfDefStorApp").click(function()
	{
		defautStorageApparence();
		$("#confDefStorApp").hide();
		tbGlobalInit();
	});

	$("#btAnnulDefStorApp").click(function()
	{
		$("#confDefStorApp").hide();
	});

	/************************************************/

	///// DRAG & DROP /////

	/************************************************/

	$(".sortable").sortable({
		placeholder: "ui-state-highlight",
		start: function(e, ui){
			ui.placeholder.width(ui.helper.outerWidth());
			ui.placeholder.height(ui.helper.outerHeight());
		},
		update : function(){
			tSort = $(".sortable").sortable('toArray', {attribute: 'data-txt'});
			dejaVerif = false;
		}
	});

	//

	if ($('#hdBox').length && $('#pseudoHd').html()!='')
	{
		sessUser = true;
		sessProf = false;

		getUrl = $(location).attr('pathname');
		tbUrl = getUrl.split('/');
		if (tbUrl[tbUrl.length-1].length && tbUrl[tbUrl.length-1]!=0 && $.isNumeric(tbUrl.length-1))
		{
			profId = tbUrl[tbUrl.length-5];
			eleveId = tbUrl[tbUrl.length-4];
			classeId = tbUrl[tbUrl.length-3];
			groupeId = tbUrl[tbUrl.length-2];
			activiteId = tbUrl[tbUrl.length-1];

			$.post(
				'inc/options-activite-ajax.php',
				{
					profId : profId,
					classeId : classeId,
					groupeId : groupeId,
					activiteId : activiteId
				},
				function(data)
				{
					if(data != 'error')
					{
						tbOptions = data.split('|');
						$.each(tbOptions, function(index, value)
						{
							eachOpt = value.split(':');
							if (eachOpt[1].length!=0) // mtfClass
							{
								if (eachOpt[1]=='true')
								{
									window[eachOpt[0]] = true;
								}
								else if (eachOpt[1]=='false')
								{
									window[eachOpt[0]] = false;
								}
								else if (!isNaN(eachOpt[1])) // si numérique
								{
									window[eachOpt[0]] = Number(eachOpt[1]);
								}
								else
								{
									window[eachOpt[0]] = eachOpt[1];
								}
							}
							else
							{
								window[eachOpt[0]] = "";
							}
						});
						lireOptions();
					}
					else
					{
						alert("Un problème est survenu lors de l'envoi des données.");
					}
				},
				'text'
			);
		}
		else
		{
			sessUser = false;
			sessProf = true;
			profId = $("#pseudoHd").attr('idp');
			pseudoL = "ordre-alphabetique-"+$('#pseudoHd').html();
			lireStorageApparence();
			lireStorageProfil();
			verifStor();
		}

		if ($.isNumeric(tbUrl[tbUrl.length-3])) {
			classeId = tbUrl[tbUrl.length-3];
			$('#linkHome').attr('href', '../prof/?p=classe&c='+classeId);
		}

		$("#affPseudo").css({'display':'none'});
	}
	else
	{
		sessUser = false;
		sessProf = false;
		if ($("#affUser").text()!="") {pseudo = $("#affUser").text();}else {pseudo = "Invité";}
		$("#affPseudo").html('<img src="img/icon/pk1/elev.png" class="inlBlk icoEl">'+pseudo);
		pseudoL = "ordre-alphabetique-"+pseudo;
		lireStorageApparence();
		lireStorageProfil();
		verifStor();
	}
});

function lireOptions() {
	
	$("#tbSelect").val(listSelect);
	$("#depoCompoBox").css("background", colObjet);
	$("#depoCompoBox, .box, #motifPanel").css("border-color", colBord);
	$("#page, #motifPanel").css("background", colPage);
	$("#colObjet").spectrum("set",colObjet);
	$("#colBord").spectrum("set",colBord);
	$("#colPage").spectrum("set",colPage);
	if (mtfClass!="") {
		$("#motif").removeClass();
		$("#motif").addClass(""+mtfClass);
		$("#mtfClass").val(mtfClass);
	}
	$("#sliderTemp").slider({value: tailleFont});
	$("#handTemp").text(tailleFont);
	$(".box").css("font-size", "1."+tailleFont+"em");

	tbGlobalInit();
	chargement();
}

function chargement() {
	setTimeout(voirPage, 100);
}

function voirPage() {
	$("#accueil").hide();
	$("#page").show();
}

function verifStor() {
	if (typeof lireStorApp=="undefined") {
		setTimeout(verifStor, 100);
	}
	else if (typeof lireStorPrfl=="undefined") {
		setTimeout(verifStor, 100);
	}
	else {
		lireOptions();
	}
}

function tbGlobalInit() {

	var d = new Date();
	var dateIn = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);

	tbGlobal = [];
	nList = 0;
	$("#lstSelect").html('');

	idxSelect = 0;

	if (sessProf || sessUser) {
		tbPerso = [];
		$.getJSON("../datas/"+profId+"/src/json/ordre-alphabetique.json?"+dateIn, function(result){
			$.each(result, function(key, val) {
				if (val['titre']==listSelect) {
					idxSelect = key;
				}
				$("#lstSelect").append('<option value="'+val['titre']+'">'+val['titre']+'</option>');
				tbPerso.push([val['titre'],val['mots']]);
				nList ++;
			});
			tbGlobal = tbPerso;
			if (nList>0) {
				$('#btEditList').show();
			}
			else {
				$('#btEditList').hide();
			}
			$.getJSON("../apps/francais/lettres/ordre-alphabetique/ordre-alphabetique.json", function(result){
				$.each(result, function(key, val) {
					if (val['titre']==listSelect) {
						idxSelect = key+nList;
					}
					$("#lstSelect").append('<option value="'+val['titre']+'">'+val['titre']+'</option>');
					tbGlobal.push([val['titre'],val['mots']]);
				});
				//
				$('#lstSelect option[value="'+listSelect+'"]').prop('selected', true);
				//
				generer();
			});
		});		
	}
	else
	{
		$.getJSON("../apps/francais/lettres/ordre-alphabetique/ordre-alphabetique.json", function(result){
			$.each(result, function(key, val) {
				if (val['titre']==listSelect) {
					idxSelect = key;
				}
				$("#lstSelect").append('<option value="'+val['titre']+'">'+val['titre']+'</option>').prop('selectedIndex', listSelect);
				tbGlobal.push([val['titre'],val['mots']]);
			});
			//
			$('#lstSelect option[value="'+listSelect+'"]').prop('selected', true);
			//
			generer();
		});
	}		
}