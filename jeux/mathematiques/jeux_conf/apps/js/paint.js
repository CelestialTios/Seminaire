
/****************************************************/

/* PAINT */

/****************************************************/

function paint() {

	var nbPaint = 0;
	var idPaint = 0;
	var colPen = "#222";
	var colBg = "#ccc";
	var sizePen = 4;
	var painting = false;
	var started = false;
	var canvas, ctx, canvasTmp, ctxTmp, cursorX, cursorY;
	var tool = "paintPen";
	var typForm = "typ1";
	var typLign = "lign1";

	//tbCouleurs = new Array();
	tbCouleurs = ['#1791EF','blue','green','#CE586D','purple','orange','gray','#36D0A3','#dd1458','#84B01D','#FA7354'];
	comptCouleur = 0;

	actionExt = false;

	
	var canvasWidth = $(window).width()/3;
	var canvasHeight = $(window).height()/3;

	$("#paintBox").css("width", 0);
	$("#paintBox").css("height", 0);

	/************************************************/

	///// FONCTIONS DESSINS /////

	/************************************************/

	/* Pen */
	function paintPen() {
		if (!started) {
			ctxTmp.beginPath();
			ctxTmp.filter = 'blur(0.5px)';
			//ctx.globalCompositeOperation = "source-over";
			ctxTmp.moveTo(startX, startY);
			started = true;
		}
		else {
			ctxTmp.lineTo(cursorX, cursorY);
			ctxTmp.stroke();
		}
	}

	/* Texte */
	function paintTexte() {
		if (!started) {
			started = true;
		}
		else {
			if (textStep=="step1") {
				ctxTmp.strokeStyle = colPen;
				ctxTmp.lineWidth = 0.5;
				ctxTmp.setLineDash([5, 3]);
				var x = Math.min(startX,  cursorX),
				y = Math.min(startY,  cursorY),
				w = Math.abs(startX - cursorX),
				h = Math.abs(startY - cursorY);
				ctxTmp.clearRect(0, 0, canvasWidth, canvasHeight);
				ctxTmp.strokeRect(x, y, w, h);
			}				
		}
	}

	function editTexte() {
		if (textStep=="step1") {

			sizeFont = 20;
			slctFont = "Arial";

			ctxTmp.strokeStyle = colPen;
			ctxTmp.fillStyle = colPen;
			ctxTmp.lineWidth = sizeFont;
			ctxTmp.setLineDash([]);
			paintActif.append('<textarea id="textareaPaint"></textarea>');
			textareaWidth = cursorX - startX;
			textareaHeight = cursorY - startY;
			textareaPosX = startX;
			textareaPosY = startY;
			$("#textareaPaint")
			.focus()
			.css({
				/*"z-index":"4",*/
				"position":"absolute",
				"left":+startX+"px",
				"top":+startY+"px",
				"width":textareaWidth,
				"height":textareaHeight,
				"background":"rgba(255, 255, 255, 0.5)",
				"border":"dashed 0.5px "+colPen,
				"color":""+colPen,
				"-moz-user-select": "text",
				"-webkit-user-select": "text"
			});

			strSelectFonts = '<option value="Arial">Arial</option>';
			strSelectFonts += '<option value="Comic Sans MS">Comic Sans MS</option>';

			strSizeFontSelect = '<option value="10">10</option>';
			strSizeFontSelect += '<option value="12">12</option>';
			strSizeFontSelect += '<option value="14">14</option>';
			strSizeFontSelect += '<option value="16">16</option>';
			strSizeFontSelect += '<option value="18">18</option>';
			strSizeFontSelect += '<option value="20" selected>20</option>';
			strSizeFontSelect += '<option value="22">22</option>';
			strSizeFontSelect += '<option value="30">30</option>';
			strSizeFontSelect += '<option value="50">50</option>';

			paintActif.append('<div id="toolsText"><select id="fontSelect">'+strSelectFonts+'</select><select id="sizeFontSelect">'+strSizeFontSelect+'</select></div>');
			//paintActif.append('<div id="toolsText" class="dragText"><select id="fontSelect">'+strSelectFonts+'</select><select id="sizeFontSelect">'+strSizeFontSelect+'</select></div>');

			/*$("#toolsText").draggable({			
				//handle: "#toolsText",
				containment: "#page",
				drag: function(e, mobile, obj) {
					$("#textareaPaint").css({"top":cursorY});
					document.title = cursorY;
				}
			});*/

			$("#toolsText").css({
				"left":+startX+"px",
				"top":+startY-30+"px"
			});

			$("#fontSelect").on('input change', function() {
				slctFont = $(this).val();
		    	$('#textareaPaint').css("font-family", $(this).val()).focus();
			});

			$("#sizeFontSelect").on('input change', function() {
				sizeFont = $(this).val();
			    $('#textareaPaint').css("font-size", $(this).val() + "px").focus();
			});

			//$("#toolsText").show();

			ctxTmp.clearRect(0, 0, canvasWidth, canvasHeight);

			textStep = "step2";
		}
		else if (textStep=="step2") {

			$("#toolsText").remove();

			/*slctFont = "Arial";
			sizeFont = 20;*/

			//ctx.font = "30px Arial";
			ctx.font = ""+sizeFont+"px "+slctFont+"";
			ctx.textAlign = "left";
			ctx.textBaseline  = "top";
			ctx.fillStyle = colPen;

			var strTxt = $("#textareaPaint").val();

			if (strTxt!="") {
				ctx.fillText(strTxt, textareaPosX+2, textareaPosY-22);
				$("#textareaPaint").remove();
				textStep = "step1";
			}
			else {
				$("#textareaPaint").remove();
				textStep = "step1";
			}						
		}
	}

	/* Image */
  	$("#inputImage").on('input change', function() {
		if (this.files && this.files[0]) {
			img = new Image();
			img.onload = function () {
				heightImg = img.height;
    			widthImg = img.width;
				imageStep = "step2";
				editImage();
			};
			img.src = URL.createObjectURL(this.files[0]);
		}
  	});

	function editImage() {
		if (imageStep=="step1" && typeof cursorX!="undefined" && typeof cursorY!="undefined" && createImage==false) {
			ctxTmp.clearRect(0, 0, canvasWidth, canvasHeight);
			$("#inputImage").click();
			createImage = true;
		}
		else if (imageStep=="step2") {
			if (widthImg>=heightImg) {
				if (widthImg<rectImgWidth) {
					rectImgWidth = widthImg;
				}
				rectImgHeight = (heightImg * rectImgWidth) / widthImg;
			}
			else if (widthImg<heightImg) {
				if (heightImg<rectImgHeight) {
					rectImgHeight = heightImg;
				}
				rectImgWidth = (widthImg * rectImgHeight) / heightImg;
			}
			if (cursorX>startX && cursorY>startY) {
				ctx.drawImage(img, startX, startY, rectImgWidth, rectImgHeight);
			}
			else if (cursorX>startX && cursorY<startY) {
				ctx.drawImage(img, startX, cursorY, rectImgWidth, rectImgHeight);
			}
			else if (cursorX<startX && cursorY<startY) {
				ctx.drawImage(img, startX, startY, rectImgWidth, rectImgHeight);
			}
			else if (cursorX<startX && cursorY>startY) {
				ctx.drawImage(img, startX, cursorY, rectImgWidth, rectImgHeight);
			}
			
			ctx.fillStyle = "rgba(0, 0, 0, 0)";
			ctx.fillRect(0, 0, canvasWidth, canvasHeight);			
			imageStep = "step1";
		}
	}

	function paintImage() {
		if (!started) {
			started = true;
			createImage = false;
		}
		else {
			if (imageStep=="step1") {
				ctxTmp.strokeStyle = colPen;
				ctxTmp.lineWidth = 0.5;
				ctxTmp.setLineDash([5, 3]);
				var x = Math.min(startX,  cursorX),
				y = Math.min(startY,  cursorY),
				w = Math.abs(startX - cursorX),
				h = Math.abs(startY - cursorY);
				ctxTmp.clearRect(0, 0, canvasWidth, canvasHeight);
				ctxTmp.strokeRect(x, y, w, h);

				rectImgWidth = cursorX - startX;
				rectImgHeight = cursorY - startY;
			}				
		}
	}

	/* Ligne */

	function paintLigne() {
		if (!started) {
			started = true;
			comptCouleur += 1;
			if (comptCouleur==11) {
				comptCouleur = 0;
			}
			ctxTmp.filter = "none";
		}
		else {
			ctxTmp.clearRect(0, 0, canvasWidth, canvasHeight);
			//ctxTmp.beginPath();
			//ctxTmp.moveTo(startX, startY);

			if (typLign=="lign1") {
				ctxTmp.beginPath();
				ctxTmp.moveTo(startX, startY);
				ctxTmp.lineTo(cursorX, cursorY);
				ctxTmp.stroke();
			}
			else if (typLign=="lign2") {
				ArrowLength=sizePen*2;ArrowWidth=sizePen*2;ArrowInset=sizePen*5; 
				Vecteur(startX,startY,cursorX,cursorY,ArrowLength,ArrowWidth,ArrowInset);
			}
			else if (typLign=="lign3") {
				ctxTmp.beginPath();
				ctxTmp.moveTo(startX, startY);
				ctxTmp.bezierCurveTo(startX+50,startY+90,cursorX-50,cursorY-90,cursorX,cursorY);
				ctxTmp.strokeStyle =  tbCouleurs[comptCouleur];
				ctxTmp.stroke();
			}
			
			//ctxTmp.stroke();
			//ctxTmp.closePath();
		}
	}

	/* Flèche */
	function Norm(xA,yA,xB,yB) {return Math.sqrt(Math.pow(xB-xA,2)+Math.pow(yB-yA,2));} 
	function Vecteur (xA,yA,xB,yB,ArrowLength,ArrowWidth,ArrowInset) { 
		if (ArrowLength === undefined) {ArrowLength=10;} 
		if (ArrowWidth === undefined) {ArrowWidth=8;} 
		if (ArrowInset === undefined) {ArrowInset=10;} 
		ctxTmp.lineCap="round";
		ctxTmp.fillStyle=ctxTmp.strokeStyle; 

		AB=Norm(xA,yA,xB,yB); 
		xBp=xB+ArrowInset*(xB-xA)/AB;yBp=yB+ArrowInset*(yB-yA)/AB; 
		xC=xB+ArrowLength*(xA-xB)/AB;yC=yB+ArrowLength*(yA-yB)/AB; 
		xD=xC+ArrowWidth*(-(yB-yA))/AB;yD=yC+ArrowWidth*((xB-xA))/AB; 
		xE=xC-ArrowWidth*(-(yB-yA))/AB;yE=yC-ArrowWidth*((xB-xA))/AB; 

		ctxTmp.beginPath(); 
		ctxTmp.moveTo(xA,yA);
		ctxTmp.lineTo(xB,yB); 
		ctxTmp.stroke(); 
		ctxTmp.beginPath(); 
		ctxTmp.moveTo(xD,yD);
		ctxTmp.lineTo(xB,yB);
		ctxTmp.lineTo(xE,yE);
		ctxTmp.lineTo(xBp,yBp); 
		ctxTmp.fill(); 
	}

	/* Rectangle */
	function paintRectangle() {
		if (!started) {
			started = true;
			ctxTmp.filter = "none";
		}
		else {
			var x = Math.min(startX,  cursorX),
			y = Math.min(startY,  cursorY),
			w = Math.abs(startX - cursorX),
			h = Math.abs(startY - cursorY);
			ctxTmp.clearRect(0, 0, canvasWidth, canvasHeight);
			ctxTmp.beginPath();

			if (typForm=="typ1") {
				ctxTmp.strokeRect(x, y, w, h);
			}
			else if (typForm=="typ2") {
				ctxTmp.fillRect(x, y, w, h);
			}
			else if (typForm=="typ3") {
				ctxTmp.fillRect(x, y, w, h);
				ctxTmp.strokeRect(x, y, w, h);
			}			
		}
	}

	/* Cercle */
	function paintCercle(ctx, cx, cy, w, h) {

		if (!started) {
			started = true;
			ctxTmp.filter = "none";
		}
		else {

			// ellipse
			x = startX;
			y = startY;
			w = cursorX-startX;
			h = cursorY-startY;
			var offset = .5522848,
				ox = (w / 2) * offset,
				oy = (h / 2) * offset,
				xe = x + w,
				ye = y + h,
				xm = x + w / 2,
				ym = y + h / 2;

			ctxTmp.clearRect(0, 0, canvasWidth, canvasHeight);
			ctxTmp.beginPath();
			ctxTmp.moveTo(x, ym);
			ctxTmp.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
			ctxTmp.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
			ctxTmp.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
			ctxTmp.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);

			if (typForm=="typ1") {
				ctxTmp.stroke();
			}
			else if (typForm=="typ2") {
				ctxTmp.fill();
			}
			else if (typForm=="typ3") {
				ctxTmp.fill();
				ctxTmp.stroke();
			}
		}
	}

	/* Gomme */
	function paintGomme() {
		if (!started) {
			ctx.beginPath();
			//ctx.filter = 'blur(4px)';
			ctx.moveTo(startX, startY);
			started = true;
		}
		else {
			ctx.lineTo(cursorX, cursorY);
			ctx.stroke();
		}
	}

	/* Effacer le canvas */
	function effacerCanvas() {
		ctx.clearRect(0,0, canvasWidth, canvasHeight);
	}

	/* Undo */

	/*var cPushArray = new Array();
	var cStep = -1;

	function cPush() {
		cStep++;
		if (cStep < cPushArray.length) { cPushArray.length = cStep; }
		cPushArray.push(document.getElementById("canvas-"+idPaint).toDataURL());
		document.title = cStep + ":" + cPushArray.length;
	}

	function cUndo() {
		if (cStep > 0) {
			cStep--;
			ctx.clearRect(0,0, canvasWidth, canvasHeight);
			var canvasPic = new Image();
			canvasPic.src = cPushArray[cStep+1];
			canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0, canvasWidth, canvasHeight-25); }
			//cPushArray.pop();
			document.title = cStep + ":" + cPushArray.length;
		}
	}


	function cRedo() {
		if (cStep < cPushArray.length-1) {
			ctx.clearRect(0,0, canvasWidth, canvasHeight);
			cStep++;
			var canvasPic = new Image();
			canvasPic.src = cPushArray[cStep];
			canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0, canvasWidth, canvasHeight-25); }
			document.title = cStep + ":" + cPushArray.length;
		}
	}*/

	//function updateRender (e) {
	function updateRender () {

		if (tool!="paintTexte" && tool!="paintImage") {
			/* Ci-dessous, code qui se retrouve plusieurs fois -> à unifier ???*/
			var canvasUrl = document.getElementById("canvasTmp-"+idPaint);
			var dataURL = canvasUrl.toDataURL("image/png");
			var image = new Image();
			image.src = dataURL;
			image.onload = function() {
				ctx.drawImage(image,0,0);
			}
			ctxTmp.clearRect(0, 0, canvasWidth, canvasHeight);
		}
		else if (tool=="paintTexte") {
			editTexte();						
		}
		else if (tool=="paintImage") {
			editImage();						
		}
		//cPush();
				
	}

	/************************************************/

	///// EVENTS /////

	/************************************************/

	function moveStart(e, mobile) {
		painting = true;

		if (mobile) {
			var ev = e.originalEvent;
			e.preventDefault();
			startX = (ev.targetTouches[0].pageX - paintActif.offset().left);
			startY = (ev.targetTouches[0].pageY - paintActif.offset().top)-25;
		}
		else {
			startX = (e.pageX - paintActif.offset().left);
			startY = (e.pageY - paintActif.offset().top)-25;
		}

		if (tool=="paintGomme") {
			ctx.globalCompositeOperation = "destination-out";
		}
		else {
			ctx.globalCompositeOperation = "source-over";
		}
	}

	function move(e, mobile, obj) {

		if (painting) {
			if (mobile) {
				var ev = e.originalEvent;
				e.preventDefault();
				cursorX = (ev.targetTouches[0].pageX - paintActif.offset().left);
				cursorY = (ev.targetTouches[0].pageY - paintActif.offset().top)-25;
			}
			else {
				cursorX = (e.pageX - paintActif.offset().left);
				cursorY = (e.pageY - paintActif.offset().top)-25;
			}
			if (tool=="paintPen") {
				paintPen();
			}
			if (tool=="paintTexte") {
				paintTexte();
			}
			else if (tool=="paintLigne") {
				paintLigne();
			}
			else if (tool=="paintRectangle") {
				paintRectangle();
			}
			else if (tool=="paintCercle") {
				paintCercle();
			}
			else if (tool=="paintImage") {
				paintImage();
			}
			else if (tool=="paintGomme") {
				paintGomme();
			}
			//$(".btResize").hide();
		}
	}

	//function moveEnd() {
	function moveEnd(e) {
		painting = false;
		started = false;
		updateRender();
		e.stopImmediatePropagation();// la console dit que e est indéfini, donc évidemment ça arrête le sript et donne l'effet escompté(img_udapte que sur le calque concerné) mais en réalité le stopPropagetion ne fonctionne pas vraiment -> corrigé en rajoutant e dans le mouseup de la fonction evenements !!!!!!!!!!!
		//e.stopPropagation();
		//e.preventDefault();

			$(".btResize").show();
	}

	function evenements(cible) {
		/* Mobile */
		cible.bind('touchstart', function(e) {
			moveStart(e, true);
		});
		//$(this).bind('touchend', function() {
		cible.bind('touchend', function() {
			moveEnd();
		});
		cible.bind('touchmove', function(e) {
			move(e, true, this);
		});

		/* Souris */
		cible.mousedown(function(e) {
			moveStart(e, false);
		});
		//$(this).mouseup(function() {
		cible.mouseup(function(e) {// ajout e
			moveEnd(e, false, this);// ajout e, false, this
		});
		cible.mousemove(function(e) {
			move(e, false, this);
		});
	}

	/************************************************/

	///// TOOLS /////

	/************************************************/

	/* FONCTIONS */

	function newPaint() {

		nbPaint += 1;
		idPaint = nbPaint;
		resize = false;
		/*btMoinsClick = false;*/

		var paintBoxX = ($(window).width() - canvasWidth) / 2;
		var paintBoxY = ($(window).height() - canvasHeight) / 2;

		$("#paintBox").append('<div id="paint-'+idPaint+'" class="paint" window="open" viewer="view"></div>');
		paintActif = $("#paint-"+idPaint+"");
		paintActif.css({"position":"absolute", "top":paintBoxY, "left":paintBoxX, "width":canvasWidth, "height":canvasHeight, "border":"solid 1.5px rgba(0, 0, 0, 0.1)", "border-radius":"4px", "z-index":3});

		paintActif.append('<div id="paintHd" class="drag"></div>');
		paintActif.append('<div class="icClose"><img src="img/icon/pk1/croix.png" class="imgBt"></div>');
		paintActif.append('<div class="icWinClose"><img src="img/icon/pk1/moins.png" class="imgBt"></div>');
		paintActif.append('<div class="icWinOpen"><img src="img/icon/pk1/carre.png" class="imgBt"></div>');
		$(".icWinOpen").hide();
		paintActif.append('<div class="icView"><img src="img/icon/pk1/voir.png" class="imgBt"></div>');
		$(".icView").hide();
		paintActif.append('<div class="icMasq"><img src="img/icon/pk1/masquer.png" class="imgBt"></div>');
		//paintActif.append('<div class="icUndo"><img src="img/icon/pk1/undo.png" class="imgBt"></div>');
		//paintActif.append('<div class="icRedo"><img src="img/icon/pk1/redo.png" class="imgBt"></div>');
		paintActif.append('<div class="icCorb"><img src="img/icon/pk1/corb.png" class="imgBt"></div>');

		paintActif.css("z-index", 4);

		$(".drag").removeClass("actif");
		paintActif.children("#paintHd").addClass("actif");

		paintActif.append('<canvas id="canvas-'+idPaint+'" width="' + canvasWidth + '" height="' + (canvasHeight-25) + '"></canvas>');
		$("#canvas-"+idPaint).css({"position":"absolute", "top":"25px"});
		canvas = $("#canvas-"+idPaint);
		ctx = canvas[0].getContext('2d');

		//cPush();
		//drawImage();

		paintActif.append('<canvas id="canvasTmp-'+idPaint+'" class="canvasTmp" width="' + canvasWidth + '" height="' + (canvasHeight-25) + '"></canvas>');
		$("#canvasTmp-"+idPaint).css({"position":"absolute", "top":"25px", "cursor":"url(img/icon/pk1/point1.png) 17 16, pointer"});
		canvasTmp = $("#canvasTmp-"+idPaint);
		ctxTmp = canvasTmp[0].getContext('2d');
		ctxTmp.lineJoin = 'round';
		ctxTmp.lineCap = 'round';
		ctxTmp.strokeStyle = colPen;
		ctxTmp.fillStyle = colBg;
		ctxTmp.lineWidth = sizePen;
		evenements(canvasTmp);

		paintActif.append('<div class="btResize"><img src="img/icon/pk1/size.png" class="imgBt"></div>');

		/* Survol du paint */

		paintActif.mouseover(function(){

			/*if(painting==false && resize==false && actionExt==false) {

				idPaint = ($(this).attr("id").replace("paint-", ""));
				paintActif = $(this);

				if ($(this).attr("window")=="hidden") {
					$(this).css({"border":"solid 1.5px rgba(0, 0, 0, 0.1)"});
					$(this).children("#paintHd, .btResize, .icClose, .icWinOpen").show();
					if($(this).attr("viewer")=="view") {
						$(this).children(".icView").hide();
						$(this).children(".icMasq").show();
					}
					else if($(this).attr("viewer")=="masq") {
						$(this).children(".icMasq").hide();
						$(this).children(".icView").show();
					}
				}

				canvasTmp = $("#canvasTmp-"+idPaint);
				ctxTmp = canvasTmp[0].getContext('2d');
				paintActif.children("#paintHd").addClass("actif");

				ctxTmp.lineJoin = 'round';
				ctxTmp.lineCap = 'round';
				ctxTmp.strokeStyle = colPen;
				ctxTmp.fillStyle = colBg;
				ctxTmp.lineWidth = sizePen;

				canvas = $("#canvas-"+idPaint);
				ctx = canvas[0].getContext('2d');
				ctx.lineWidth = sizePen;
			}*/
		});

		paintActif.mouseout(function(){

			/*paintActif.children("#paintHd").removeClass("actif");

			if ($(this).attr("window")=="hidden") {
				$(this).css({"border":"solid 2px transparent"});
				paintActif.children("#paintHd, .btResize, .icClose, .icWinOpen, .icView, .icMasq").hide();
			}*/

			//btMoinsClick = false;
		});

		paintActif.mouseenter(function(){

			if(painting==false && resize==false/* && btMoinsClick==false */&& actionExt==false) {

				$(".drag").removeClass("actif");

				idPaint = ($(this).attr("id").replace("paint-", ""));
				paintActif = $(this);

				if ($(this).attr("window")=="hidden") {
					$(this).css({"border":"solid 1.5px rgba(0, 0, 0, 0.1)"});
					$(this).children("#paintHd, .btResize, .icClose, .icWinOpen, .icUndo, .icRedo, .icCorb").show();
					if($(this).attr("viewer")=="view") {
						$(this).children(".icView").hide();
						$(this).children(".icMasq").show();
					}
					else if($(this).attr("viewer")=="masq") {
						$(this).children(".icMasq").hide();
						$(this).children(".icView").show();
					}
				}

				canvasTmp = $("#canvasTmp-"+idPaint);
				ctxTmp = canvasTmp[0].getContext('2d');
				paintActif.children("#paintHd").addClass("actif");

				ctxTmp.lineJoin = 'round';
				ctxTmp.lineCap = 'round';
				ctxTmp.strokeStyle = colPen;
				ctxTmp.fillStyle = colBg;
				ctxTmp.lineWidth = sizePen;

				canvas = $("#canvas-"+idPaint);
				ctx = canvas[0].getContext('2d');
				ctx.lineWidth = sizePen;
			}
		    $('.paint').css("z-index", 3);
		    $(this).css("z-index", 4);
		});

		paintActif.mouseleave(function(){
			//paintActif.children("#paintHd").removeClass("actif");

			if ($(this).attr("window")=="hidden") {
				$(this).css({"border":"solid 1.5px transparent"});
				paintActif.children("#paintHd, .btResize, .icClose, .icWinOpen, .icView, .icMasq, .icUndo, .icRedo, .icCorb").hide();
			}			
		});

		/*paintActif.mousedown(function(){
			if (tool=="paintCorb") {
				effacerCanvas();
			}			
		});*/

		$(".icClose").click(function(){
			$(this).parent().hide();

		});

		$(".icWinClose").click(function(){
			$(this).hide();
			$(this).parent().attr("window", "hidden");
			$(this).parent().css({"border":"solid 1.5px transparent"});
			$(this).parent().children("#paintHd, .btResize, .icClose, .icWinClose, icView, .icMasq, .icUndo, .icRedo, .icCorb").hide();
			/*btMoinsClick = true;*/
		});

		$(".icWinOpen").click(function(){
			$(this).hide();
			$(this).parent().attr("window", "open");
			$(this).parent().css({"border":"solid 1.5px rgba(0, 0, 0, 0.1)"});
			$(this).parent().children(".btResize, .icClose, .icWinClose, icView, .icMasq, .icUndo, .icRedo, .icCorb").show();
		});

		$(".icView").click(function(){
			$(this).hide();
			$(this).parent().children(".icMasq").show();
			$(this).parent().attr("viewer", "view");
			$(this).parent().children("#canvas-"+idPaint+", #canvasTmp-"+idPaint).show();
			$(this).parent().css("z-index",2);
		});

		$(".icMasq").click(function(){
			$(this).hide();
			$(this).parent().children(".icView").show();
			$(this).parent().attr("viewer", "masq");
			$(this).parent().children("#canvas-"+idPaint+", #canvasTmp-"+idPaint).hide();
			$(this).parent().css("z-index",0);
		});

		$(".icCorb").click(function(){
			/*tool = "paintCorb";
			toolActif();*/
			effacerCanvas();
		});

		paintActif.draggable({			
			handle: ".drag",
			containment: "#page"
		});

		$(".btResize").draggable({
			cursorAt: {top: 12, left: 12},
			start: function() {
				resize = true;
				var canvasUrl = document.getElementById("canvas-"+idPaint);
				dataURL = canvasUrl.toDataURL("image/png");
			},
			drag: function( event, ui ) {
				canvasWidth = event.pageX - paintActif.offset().left + $(".btResize").width()/2;
				canvasHeight = event.pageY - paintActif.offset().top + $(".btResize").height()/2;
				paintActif.css({"width":canvasWidth, "height":canvasHeight});
				$("#canvas-"+idPaint).attr({"width":canvasWidth, "height":canvasHeight});
				$("#canvasTmp-"+idPaint).attr({"width":canvasWidth, "height":canvasHeight});
				var image = new Image();
				image.src = dataURL;
				image.onload = function() {
				  ctxTmp.drawImage(image,0,0);
				};
			},
			stop: function() {
				resize = false;
				var image = new Image();
				image.src = dataURL;
				image.onload = function() {
				  ctx.drawImage(image,0,0);
				};
				canvasTmp = $("#canvasTmp-"+idPaint);
				ctxTmp = canvasTmp[0].getContext('2d');
				evenements(canvasTmp);
				ctxTmp.lineJoin = 'round';
				ctxTmp.lineCap = 'round';
				ctxTmp.strokeStyle = colPen;
				ctxTmp.fillStyle = colBg;
				ctxTmp.lineWidth = sizePen;
			}
		});

		$(".btResize").mouseenter(function(){
			if (painting) {
				$(this).hide();
			}
		});
	}

	newPaint();

	/* TOOLS PAINT */

	$("#newPaint").click(function(){
		newPaint();
		toolActif();	
	});

	$("#slidSizePen").on('input change', function(){
		sizePen = $(this).val();
		//document.title = sizePen;
		ctxTmp.lineWidth = sizePen;
		$("#temSizePen").css({
			"height":sizePen, 
			"width":sizePen, 
			"left":"-"+sizePen/2+"px", 
			"top":"-"+sizePen/2+"px"
		});
		$("#affSizePen").text(sizePen);	
	});

	$("#sizePencil").click(function(){
		//tool = "selSizePen";
		//toolActif();
		$(".optTool").hide();
		$("#sizePenBox, #slidSizePenBox").show();
	});

	$("#colPaintPenBox").click(function(){
		//tool = "colPen";
		//toolActif();

		$(".optTool").hide(); // ????????????????????? marche pas ??????????????????????????
	});

	$("#colPaintPen").spectrum({
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
			colPen = color.toHexString();
			ctxTmp.strokeStyle = colPen;
			ctxTmp.fillStyle = colPen;
		},
		move: function (color) {
			colPen = color.toHexString();
			ctxTmp.strokeStyle = colPen;
			ctxTmp.fillStyle = colPen;
		}
	});

	$("#colPaintBg").spectrum({
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
			colBg = color.toHexString();
			//ctxTmp.strokeStyle = colBg;
			//ctxTmp.fillStyle = colBg;
		},
		move: function (color) {
			colBg = color.toHexString();
			//ctxTmp.strokeStyle = colBg;
			//ctxTmp.fillStyle = colBg;
		}
	});

	$("#btPen").click(function(){
		tool = "paintPen";
		toolActif();
	});

	$("#btTexte").click(function(){
		tool = "paintTexte";
		textStep = "step1";
		toolActif();
	});

	$("#btLigne").click(function(){
		tool = "paintLigne";
		toolActif();
	});

	$("#lign1").click(function(){
		typLign = "lign1";
		$(".lignBox").removeClass("actif");
		$(this).parent().addClass("actif");

	});

	$("#lign2").click(function(){
		typLign = "lign2";
		$(".lignBox").removeClass("actif");
		$(this).parent().addClass("actif");

	});

	$("#lign3").click(function(){
		typLign = "lign3";
		$(".lignBox").removeClass("actif");
		$(this).parent().addClass("actif");

	});

	$("#btRectangle").click(function(){
		tool = "paintRectangle";
		toolActif();
	});

	$("#btCercle").click(function(){
		tool = "paintCercle";
		toolActif();
	});

	$("#typ1").click(function(){
		typForm = "typ1";
		$(".typBox").removeClass("actif");
		$(this).parent().addClass("actif");

	});

	$("#typ2").click(function(){
		typForm = "typ2";
		$(".typBox").removeClass("actif");
		$(this).parent().addClass("actif");
	});

	$("#typ3").click(function(){
		typForm = "typ3";
		$(".typBox").removeClass("actif");
		$(this).parent().addClass("actif");
	});

	$("#btImage").click(function(){
		tool = "paintImage";
		imageStep = "step1";
		toolActif();
	});

	$("#btGomme").click(function(){
		tool = "paintGomme";
		toolActif();
	});

	$("#btUndo").click(function(){
		cUndo();
	});

	$("#btRedo").click(function(){
		cRedo();
	});

	/*$("#btCorb").click(function(){
		tool = "paintCorb";
		toolActif();
	});*/

	function toolActif() {
		/*if (tool=="selSizePen") {
			$(".optTool").hide();
			$("#sizePenBox, #slidSizePenBox").show();
		}
		else if (tool=="colPen") {
			$(".optTool").hide();
		}
		else */if (tool=="paintPen") {
			$("#btTexte, #btLigne, #btRectangle, #btCercle, #btImage, #btGomme, #btCorb").removeClass("actif");
			$("#btPen").addClass("actif");
			$(".canvasTmp").css("cursor","url(img/icon/pk1/point1.png) 17 16, pointer");
			$(".optTool").hide();
		}
		else if (tool=="paintTexte") {
			$("#btPen, #btLigne, #btRectangle, #btCercle, #btImage, #btGomme, #btCorb").removeClass("actif");
			$("#btTexte").addClass("actif");
			$(".canvasTmp").css("cursor","crosshair");
			$(".optTool").hide();
		}
		else if (tool=="paintLigne") {
			$("#btPen, #btTexte, #btRectangle, #btCercle, #btImage, #btGomme, #btCorb").removeClass("actif");
			$("#btLigne").addClass("actif");
			$(".canvasTmp").css("cursor","url(img/icon/pk1/point1.png) 17 16, pointer");
			$(".optTool").hide();
			$("#typLign").show();
		}
		else if (tool=="paintRectangle") {
			$("#btPen, #btTexte, #btLigne, #btCercle, #btImage, #btGomme, #btCorb").removeClass("actif");
			$("#btRectangle").addClass("actif");
			$(".canvasTmp").css("cursor","crosshair");
			$(".optTool").hide();
			$("#typForm").show();
			$("#typ1, #typ2, #typ3").removeClass("radius50");
		}
		else if (tool=="paintCercle") {
			$("#btPen, #btTexte, #btLigne, #btRectangle, #btImage, #btGomme, #btCorb").removeClass("actif");
			$("#btCercle").addClass("actif");
			$(".canvasTmp").css("cursor","crosshair");
			$(".optTool").hide();
			$("#typForm").show();
			$("#typ1, #typ2, #typ3").addClass("radius50");
		}
		else if (tool=="paintImage") {
			$("#btPen, #btTexte, #btLigne, #btRectangle, #btCercle, #btGomme, #btCorb").removeClass("actif");
			$("#btImage").addClass("actif");
			$(".canvasTmp").css("cursor","crosshair");
			$(".optTool").hide();
		}
		else if (tool=="paintGomme") {
			$("#btPen, #btTexte, #btLigne, #btRectangle, #btCercle, #btImage, #btCorb").removeClass("actif");
			$("#btGomme").addClass("actif");
			$(".canvasTmp").css("cursor","url(img/icon/pk1/gomme.png) 17 16, pointer");
			$(".optTool").hide();
		}
		else if (tool=="paintCorb") {
			$("#btPen, #btTexte, #btLigne, #btRectangle, #btCercle, #btImage, #btGomme").removeClass("actif");
			$("#btCorb").addClass("actif");
			$(".canvasTmp").css("cursor","url(img/icon/pk1/corb.png) 17 16, pointer");
			$(".optTool").hide();
		}
	}
	toolActif();

	/* TOOLS TEXTE */


	
}