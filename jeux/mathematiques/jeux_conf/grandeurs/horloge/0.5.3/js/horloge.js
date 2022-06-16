
/************************************************/

///// HORLOGE /////

/************************************************/

/* Apparence */

function apparenceHorloge() {
	/* Graduations */

	for (var i = 0; i < 60; i++) {
		var degRot = i*6;
		$('#gradMin').append('<div class="gradMinBox gradMinBox'+[i]+'" style="transform:rotate('+degRot+'deg);"><div class="p'+[i]+'" style="background-color: #222;border-radius: 2px;height: 15px;"></div></div>');
	}

	for (var i = 0; i < 12; i++) {
		var degRot = i*30;
		$('#gradHre').append('<div class="gradHreBox gradHreBox'+[i]+'" style="transform:rotate('+degRot+'deg);"><div class="p'+[i]+'" style="background-color: #222;border-radius: 2px;height: 20px;"></div></div>');
	}

	/* Chiffres */

	for (var i = 0; i < 12; i++) {
		var degRot = (i*30)+30;
		var chifHreAm = i+1;
		$('#chifHreAm').append('<div class="chifHreAmBox chifHreAmBox'+[i]+'" style="transform:rotate('+degRot+'deg);"><div class="chifHreAm chifHreAm'+[i]+'" style="transform:rotate(-'+degRot+'deg);">'+chifHreAm+'</div></div>');
	}

	for (var i = 0; i < 12; i++) {
		var degRot = (i*30)+30;
		var chifHrePm = i+13;
		$('#chifHrePm').append('<div class="chifHrePmBox chifHrePmBox'+[i]+'" style="transform:rotate('+degRot+'deg);"><div class="chifHrePm chifHrePm'+[i]+'" style="transform:rotate(-'+degRot+'deg);">'+chifHrePm+'</div></div>');
	}

	for (var i = 0; i < 12; i++) {
		var degRot = (i*30)+30;
		var chifMin = (i*5)+5;
		$('#chifMin').append('<div class="chifMinBox chifMinBox'+[i]+'" style="transform:rotate('+degRot+'deg);"><div class="chifMin chifMin'+[i]+'" style="transform:rotate(-'+degRot+'deg);">'+chifMin+'</div></div>');
	}

	// Négatifs

	for (var i = 0; i < 6; i++) {
		var degRotM = (i*30)+30;
		var chifMinNeg = (i*5)+5;
		$('#chifMinNeg').append('<div class="chifMinBox chifMinBox'+[i]+'" style="transform:rotate('+degRotM+'deg);"><div class="chifMinNeg chifMinNeg'+[i]+'" style="transform:rotate(-'+degRotM+'deg);">'+chifMinNeg+'</div></div>');
	}

	for (var i = 0; i < 6; i++) {
		var degRotM = (i*30)+210;
		var chifMinNeg = (i*5)-25;
		$('#chifMinNeg').append('<div class="chifMinBox chifMinBox'+[i]+'" style="transform:rotate('+degRotM+'deg);"><div class="chifMinNeg chifMinNeg'+[i]+'" style="transform:rotate(-'+degRotM+'deg);">'+chifMinNeg+'</div></div>');
	}
}	

/************************************************/

///// HORLOGE INTERNE /////

/************************************************/

function clock() {
	date = new Date;

	var sec = date.getSeconds();
	var min = date.getMinutes();
	var hre  = date.getHours();


	h = date.getHours();
	m = date.getMinutes();
	s = date.getSeconds();

	/* 24H / AM / PM */
	if (typAmPm=="rdAm") {
		if (h>=12 && h<=24) {
			h = h - 12;
		}
	}
	else if (typAmPm=="rdPm") {
		if (h>=0 && h<=12) {
			h = h + 12;
		}
	}

    //var mil = date.getMilliseconds(); // pour une rotation en continu
	//var rotSec = sec*6+(mil/(1000/6)); // pour une rotation en continu
	var rotSec = sec * 6;

	/* Rotation des aiguilles */

	$('#aigSecBox').css({'-webkit-transform' : 'rotate('+ rotSec +'deg)',
             '-moz-transform' : 'rotate('+ rotSec +'deg)',
             '-ms-transform' : 'rotate('+ rotSec +'deg)',
             'transform' : 'rotate('+ rotSec +'deg)'});

	var rotMin = min*6+(sec/10);
	$('#aigMinBox').css({'-webkit-transform' : 'rotate('+ rotMin +'deg)',
             '-moz-transform' : 'rotate('+ rotMin +'deg)',
             '-ms-transform' : 'rotate('+ rotMin +'deg)',
             'transform' : 'rotate('+ rotMin +'deg)'});

	var rotHre = hre*30+(min/2);
	$('#aigHreBox').css({'-webkit-transform' : 'rotate('+ rotHre +'deg)',
             '-moz-transform' : 'rotate('+ rotHre +'deg)',
             '-ms-transform' : 'rotate('+ rotHre +'deg)',
             'transform' : 'rotate('+ rotHre +'deg)'});

	/* Affichage digital */

	$('#digHre').val(minDeuxChiffres(h));
	$('#digMin').val(minDeuxChiffres(m));
	$('#digSec').val(minDeuxChiffres(s));

}

//setInterval(clock, 100); // pour une rotation en continu
/*clock();
intervalClock = setInterval(clock, 1000);*/

/************************************************/

///// HORLOGE INTERACTIVE /////

/************************************************/

/**********************/

/* Drag des aiguilles */

/**********************/

tHre = 0;
tourHre = 0;
tourHrePlus = true;

matin = true;
transitMatin = false;
apresmidi = false;
transitSoir = false;

tSec = true;
tSecSwich = false;
tMin = true;
tMinSwich = false;

//function dragAiguilles() {
$('#aigHreBox').draggable({
	handle: '#aigHre',
	opacity: 0.001,
	helper: 'clone',
	drag: function(event) {

		stoperSliders();

		if ((typActivite!="typInterne") && (typActivite=="typInteractive" || typExercice=="typAiguilles")) {
			pw = document.getElementById('aigHreBox'),
			pwBox = pw.getBoundingClientRect(),
			center_x = (pwBox.left + pwBox.right) / 2,
			center_y = (pwBox.top + pwBox.bottom) / 2,
			mouse_x = event.pageX,
			mouse_y = event.pageY,
			radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
			degree = Math.round((radians * (180 / Math.PI) * -1) + 180);
			if (degree==360) {
				degree = 0;
			}

			degRot = 'rotate(' + degree + 'deg)';
			$('#aigHreBox').css({'-moz-transform': degRot,'-webkit-transform': degRot});

			/* Rendu digital */

			/* Adaptation des heures pour l'exercice Aiguilles */

			if (typAmPm=="rdAm") {
				resultH = Math.floor(degree/30);
			}
			else if (typAmPm=="rdPm") {
				resultH = Math.floor(degree/30)+12;
			}

			/* passage à 0 du drag de l'aiguille */

			else if (typAmPm=="rdAmPm") {
				
				if (typActivite=="typExercices" && typExercice=="typAiguilles") {
					resultH = Math.floor(degree/30);
					if (nbHre>=12) {
						resultH = resultH + 12;
					}
				}
				else {
					if (matin==true) {
						resultH = Math.floor(degree/30);
						if ($('#digHre').val()==0) {
							$('#digHre').val()==12;
							matin = false;
							transitMatin=true;
						}
					}
					if (transitMatin==true) {
						resultH = Math.floor(degree/30)+12;
						if ($('#digHre').val()>=13) {
							transitMatin = false;
							apresmidi = true;
						}
					}
					else if (apresmidi==true) {
						resultH = Math.floor(degree/30)+12;
						if ($('#digHre').val()==12) {
							//$('#digHre').val()==0;
							resultH = Math.floor(degree/30);
							apresmidi = false;
							transitMatin = false;
							transitSoir = true;
						}
					}
					else if (transitSoir==true) {
						resultH = Math.floor(degree/30);
						if ($('#digHre').val()>=1) {
							transitSoir = false;
							matin = true;
						}
					}
				}
			}

			resultH = minDeuxChiffres(resultH);
			$('#digHre').val(resultH);

			$("#digAigHre").removeClass("incorrect");
			$("#digAigHre").removeClass("correct");
		}
	}
});

$('#aigMinBox').draggable({
	handle: '#aigMin',
	opacity: 0.001,
	helper: 'clone',
	drag: function(event) {

		stoperSliders();

		if ((typActivite!="typInterne") && (typActivite=="typInteractive" || typExercice=="typAiguilles")) {
			pw = document.getElementById('aigMinBox'),
			pwBox = pw.getBoundingClientRect(),
			center_x = (pwBox.left + pwBox.right) / 2,
			center_y = (pwBox.top + pwBox.bottom) / 2,
			mouse_x = event.pageX,
			mouse_y = event.pageY,
			radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
			degree = Math.round((radians * (180 / Math.PI) * -1) + 180);
			if (degree==360) {
				degree = 0;
			}	     

			degRot = 'rotate(' + degree + 'deg)';
			$('#aigMinBox').css({'-moz-transform': degRot,'-webkit-transform': degRot});

			/* Rendu digital */
			resultM = Math.floor(degree/6);
			resultM = minDeuxChiffres(Math.floor(degree/6));
			$('#digMin').val(resultM);

			/* Aiguilles correspondantes */

			nbSec = parseInt($('#digSec').val());
			nbMin = parseInt($('#digMin').val());
			nbHre = parseInt($('#digHre').val());

			if (typActivite=="typExercices") {
				if (tMin==true) {
					coefRotHr = (nbHre * 30) + ( (nbMin * 6) / 12 );
					degRotH = 'rotate(' + coefRotHr + 'deg)';
					$('#aigHreBox').css({
						'-moz-transform': degRotH,
						'-webkit-transform': degRotH
					});

					if ($('#digMin').val()==0) {
						tMin = false;
						if (typActivite!="typExercices") {
							nbHre += 1;
							$('#digHre').val(nbHre);
							
							if (nbHre==24) {
								nbHre = 0;
								$('#digHre').val(0);
							}
						}
						tMinSwich=true;
					}
				}
				if (tMinSwich==true) {
					coefRotHr = (nbHre * 30) + ( (nbMin * 6) / 12 );
					degRotH = 'rotate(' + coefRotHr + 'deg)';
					$('#aigHreBox').css({
						'-moz-transform': degRotH,
						'-webkit-transform': degRotH
					});
					
					if ($('#digMin').val()>=10) {
						tMinSwich = false;
						tMin = true;
					}
				}
			}
			convertAmPm();
			$('#digMin').val(minDeuxChiffres(parseInt($('#digMin').val())));
			$('#digHre').val(minDeuxChiffres(parseInt($('#digHre').val())));

			$("#digAigMin").removeClass("incorrect");
			$("#digAigMin").removeClass("correct");
		}
	}
});

$('#aigSecBox').draggable({
	handle: '#aigSec',
	opacity: 0.001,
	helper: 'clone',
	drag: function(event) {

		stoperSliders();

		if ((typActivite!="typInterne") && (typActivite=="typInteractive" || typExercice=="typAiguilles")) {
			pw = document.getElementById('aigSecBox'),
			pwBox = pw.getBoundingClientRect(),
			center_x = (pwBox.left + pwBox.right) / 2,
			center_y = (pwBox.top + pwBox.bottom) / 2,
			mouse_x = event.pageX,
			mouse_y = event.pageY,
			radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
			degree = Math.round((radians * (180 / Math.PI) * -1) + 180);

			/*if (degree==360) {
				degree = 0;
			}*/

			//window.document.title = degree;

			/* Déplacement de l'aiguille correspondante */
			degRot = 'rotate(' + degree + 'deg)';
			$('#aigSecBox').css({'-moz-transform': degRot,'-webkit-transform': degRot});

			/* Rendu digital */
			coefRotS = Math.floor(degree/6);

			//$('#digSec').val(minDeuxChiffres(coefRotS));
			$('#digSec').val(coefRotS);

			/* Aiguilles correspondantes */

			nbSec = parseInt($('#digSec').val());
			nbMin = parseInt($('#digMin').val());
			nbHre = parseInt($('#digHre').val());

			if (typActivite=="typExercices") {
			//if (true) {

				rotAigSec();
				
				/*if (tSec==true) {
					coefRotMin = ((nbMin * 6) + ( (nbSec * 6) / 60 ));
					degRotM = 'rotate(' + coefRotMin + 'deg)';
					$('#aigMinBox').css({
						'-moz-transform': degRotM,
						'-webkit-transform': degRotM
					});

					coefRotHr = (nbHre * 30) + ( (nbMin * 6) / 12 );
					degRotH = 'rotate(' + coefRotHr + 'deg)';
					$('#aigHreBox').css({
						'-moz-transform': degRotH,
						'-webkit-transform': degRotH
					});

					if ($('#digSec').val()==1) {
						tSec1 = 1;
					}
					else if ($('#digSec').val()==59) {
						tSec1 = 59;
					}

					if ($('#digSec').val()==0) {
						tSec = false;
						if (typActivite!="typExercices") {
							if (tSec1==59) {
								nbMin += 1;
								$('#digMin').val(nbMin);
								if (nbMin==60) {
									nbMin = 0;
									$('#digMin').val(0);
									nbHre += 1;
									$('#digHre').val(nbHre);
									if (nbHre==24) {
										nbHre = 0;
										$('#digHre').val(0);
									}
								}
							}
							else if (tSec1==1) {
								nbMin -= 1;
								$('#digMin').val(nbMin);
								if (nbMin==60) {
									nbMin = 0;
									$('#digMin').val(0);
									nbHre -= 1;
									$('#digHre').val(nbHre);
									if (nbHre==24) {
										nbHre = 0;
										$('#digHre').val(0);
									}
								}
							}
						}	
						tSecSwich=true;			
					}*/

					/*if (tSec1==59) {
						if ($('#digSec').val()==0) {
							tSec = false;
							nbMin += 1;
							$('#digMin').val(nbMin);
							if (nbMin==60) {
								nbMin = 0;
								$('#digMin').val(0);
								nbHre += 1;
								$('#digHre').val(nbHre);
								if (nbHre==24) {
									nbHre = 0;
									$('#digHre').val(0);
								}
							}
						}
						tSecSwich=true;
					}
					else if (tSec1==1) {
						if ($('#digSec').val()==0) {
						tSecSwich=true;
							nbMin -= 1;
							$('#digMin').val(nbMin);
							if (nbMin==60) {
								nbMin = 0;
								$('#digMin').val(0);
								nbHre -= 1;
								$('#digHre').val(nbHre);
								if (nbHre==24) {
									nbHre = 0;
									$('#digHre').val(0);
								}
							}
						}
					}*/
				/*}
				if (tSecSwich==true) {
					coefRotMin = ((nbMin * 6) + ( (nbSec * 6) / 60 ));
					degRotM = 'rotate(' + coefRotMin + 'deg)';
					$('#aigMinBox').css({
						'-moz-transform': degRotM,
						'-webkit-transform': degRotM
					});

					coefRotHr = (nbHre * 30) + ( (nbMin * 6) / 12 );
					degRotH = 'rotate(' + coefRotHr + 'deg)';
					$('#aigHreBox').css({
						'-moz-transform': degRotH,
						'-webkit-transform': degRotH
					});
					
					if ($('#digSec').val()>=1) {
						tSecSwich = false;
						tSec = true;
					}
				}*/
			}
			convertAmPm();
			$('#digSec').val(minDeuxChiffres(parseInt($('#digSec').val())));
			$('#digMin').val(minDeuxChiffres(parseInt($('#digMin').val())));
			$('#digHre').val(minDeuxChiffres(parseInt($('#digHre').val())));

			$("#digAigSec").removeClass("incorrect");
			$("#digAigSec").removeClass("correct");			
		}
	}
});
//}

/**************************/

/* Rotation des aiguilles */

/**************************/

//function rotatAiguilles() {

	/* Rotation des aiguilles depuis l'écran digital */

	/* Incrémentation des Heures */

	function rotAigHre() {
		nbMin = parseInt($('#digMin').val());
		nbHre = parseInt($('#digHre').val());

		degRotAjust = (nbHre * 30) + ((nbMin * 6) / 12);
		degRot = 'rotate(' + degRotAjust + 'deg)';
		$('#aigHreBox').css({
			'-moz-transform': degRot,
			'-webkit-transform': degRot
		});

		if (nbHre<=-1) {
			nbHre = 23;
			$('#digHre').val(23);
		}
		else if (nbHre>=24) {
			nbHre = 0;
			$('#digHre').val(0);
		}
		convertAmPm();
		$('#digHre').val(minDeuxChiffres(parseInt($('#digHre').val())));
	}

	$('#digHre').on('input', function() {
		stoperSliders();
		rotAigHre();
	});

	/* Incrémentation des Minutes */

	function rotAigMin() {
		nbSec = parseInt($('#digSec').val());
		nbMin = parseInt($('#digMin').val());
		nbHre = parseInt($('#digHre').val());

		degRotAjust = (nbMin * 6) + ((nbSec * 6) / 60);
		degRot = 'rotate(' + degRotAjust + 'deg)';
		$('#aigMinBox').css({
			'-moz-transform': degRot,
			'-webkit-transform': degRot
		});

		coefRotHr = (nbHre * 30) + ( (nbMin * 6) / 12 );

		if (nbMin<=-1) {
			$('#digMin').val(59);
			nbMin = 59;
			nbHre -= 1;
			$('#digHre').val(nbHre);
			if (nbHre<=-1) {
				nbHre = 23;
				$('#digHre').val(23);
			}
		}
		else if (nbMin>=60) {
			$('#digMin').val(0);
			nbMin = 0;
			nbHre += 1;
			$('#digHre').val(nbHre);
			if (nbHre>=24) {
				nbHre = 0;
				$('#digHre').val(0);
			}
		}
		else {
			degRotH = 'rotate(' + coefRotHr + 'deg)';
			$('#aigHreBox').css({
				'-moz-transform': degRotH,
				'-webkit-transform': degRotH
			});
		}
		convertAmPm();
		$('#digMin').val(minDeuxChiffres(parseInt($('#digMin').val())));
		$('#digHre').val(minDeuxChiffres(parseInt($('#digHre').val())));
	}

	$('#digMin').on('input', function() {
		stoperSliders();
		rotAigMin();
	});

	/* Incrémentation des secondes */

	function rotAigSec() {
		nbSec = parseInt($('#digSec').val());
		nbMin = parseInt($('#digMin').val());
		nbHre = parseInt($('#digHre').val());

		degRot = 'rotate(' + nbSec * 6 + 'deg)';
		$('#aigSecBox').css({
			'-moz-transform': degRot,
			'-webkit-transform': degRot
		});

		coefRotMin = ((nbMin * 6) + ( (nbSec * 6) / 60 ));
		coefRotHr = (nbHre * 30) + ( (nbMin * 6) / 12 );

		if (nbSec<=-1) {
			$('#digSec').val(59);
			nbSec = 59;
			nbMin -= 1;
			$('#digMin').val(nbMin);
			if (nbMin<=-1) {
				$('#digMin').val(59);
				nbMin = 59;
				nbHre -= 1;
				$('#digHre').val(nbHre);
				if (nbHre<=-1) {
					$('#digHre').val(23);
					nbHre = 23;
				}
			}
		}
		else if (nbSec>=60) {
			nbSec=0;
			$('#digSec').val(0);
			//nbSec = 0;
			nbMin += 1;
			$('#digMin').val(nbMin);
			if (nbMin>=60) {
				$('#digMin').val(0);
				nbMin = 0;
				nbHre += 1;
				$('#digHre').val(nbHre);
				if (nbHre>=24) {
					$('#digHre').val(0);
					nbHre = 0;
				}
			}
		}
		else {
			degRotM = 'rotate(' + coefRotMin + 'deg)';
			$('#aigMinBox').css({
				'-moz-transform': degRotM,
				'-webkit-transform': degRotM
			});

			degRotH = 'rotate(' + coefRotHr + 'deg)';
			$('#aigHreBox').css({
				'-moz-transform': degRotH,
				'-webkit-transform': degRotH
			});
		}
		convertAmPm();
		$('#digSec').val(minDeuxChiffres(parseInt($('#digSec').val())));
		$('#digMin').val(minDeuxChiffres(parseInt($('#digMin').val())));
		$('#digHre').val(minDeuxChiffres(parseInt($('#digHre').val())));
	}

	$('#digSec').on('input', function() {
		stoperSliders();
		rotAigSec();
	});

	/* Rotation des aiguilles depuis les sliders */

	/* Incrémentation des heures */

	function slidHre() {

		if (slidHreCount>0) {
			nbHre += 1;
		}
		else if (slidHreCount<0) {
			nbHre -= 1;
		}
		$('#digHre').val(nbHre);

		rotAigHre();
	}

	handleHre = $( "#handHre" );
	sliderHre = $( "#sliderHre" ).slider({
		min: -10,
		max: 10,
		value: 0,
		create: function() {
		handleHre.text( $( this ).slider( "value" ) );
		},
		slide: function( event, ui ) {
			handleHre.text( ui.value );

			sliderMin.slider( "value", 0 );
			handleMin.text(0);
			sliderSec.slider( "value", 0 );
			handleSec.text(0);
				
			if( typeof(intervalSlidHre) != 'undefined' ){
				clearInterval(intervalSlidHre);
			}
				
			if( typeof(intervalSlidMin) != 'undefined' ){
				clearInterval(intervalSlidMin);
			}
				
			if( typeof(intervalSlidSec) != 'undefined' ){
				clearInterval(intervalSlidSec);
			}
			
			delaiHre = 0;
			slidHreCount = ui.value;
			nbHre = parseInt($('#digHre').val());

			if (slidHreCount==0) {
				clearInterval(intervalSlidHre);
			} else {

				slidHre();

				if (slidHreCount<0) {
					delaiHre = parseInt(1000/((slidHreCount*-1)));
				}
				else {
					delaiHre = parseInt(1000/(slidHreCount));
				}
			
				intervalSlidHre = setInterval(slidHre, delaiHre);
			}
		}
	});

	/* Incrémentation des minutes */

	function slidMin() {

		if (slidMinCount>0) {
			nbMin += 1;
		}
		else if (slidMinCount<0) {
			nbMin -= 1;
		}

		$('#digMin').val(nbMin);

		rotAigMin();
	}
	handleMin = $( "#handMin" );
	sliderMin = $( "#sliderMin" ).slider({
		min: -10,
		max: 10,
		value: 0,
		create: function() {
		handleMin.text( $( this ).slider( "value" ) );
		},
		slide: function( event, ui ) {
			handleMin.text( ui.value );

			sliderHre.slider( "value", 0 );
			handleHre.text(0);
			sliderSec.slider( "value", 0 );
			handleSec.text(0);
				
			if( typeof(intervalSlidHre) != 'undefined' ){
				clearInterval(intervalSlidHre);
			}
				
			if( typeof(intervalSlidMin) != 'undefined' ){
				clearInterval(intervalSlidMin);
			}
				
			if( typeof(intervalSlidSec) != 'undefined' ){
				clearInterval(intervalSlidSec);
			}
			
			delaiMin = 0;
			slidMinCount = ui.value;
			nbMin = parseInt($('#digMin').val());

			if (slidMinCount==0) {
				clearInterval(intervalSlidMin);
			} else {

				slidMin();

				if (slidMinCount<0) {
					delaiMin = parseInt(1000/((slidMinCount*-1)*(slidMinCount*-1)));
				}
				else {
					delaiMin = parseInt(1000/(slidMinCount*slidMinCount));
				}
			
				intervalSlidMin = setInterval(slidMin, delaiMin);
			}
		}
	});

	/* Incrémentation des secondes */

	function slidSec() {

		if (slidSecCount>0) {
			nbSec += 1;
		}
		else if (slidSecCount<0) {
			nbSec -= 1;
		}

		$('#digSec').val(nbSec);

		rotAigSec();
	}

	handleSec = $( "#handSec" );
	sliderSec = $( "#sliderSec" ).slider({
		min: -10,
		max: 10,
		value: 0,
		create: function() {
		handleSec.text( $( this ).slider( "value" ) );
		},
		slide: function( event, ui ) {
			handleSec.text( ui.value );

			sliderHre.slider( "value", 0 );
			handleHre.text(0);
			sliderMin.slider( "value", 0 );
			handleMin.text(0);
				
			if( typeof(intervalSlidHre) != 'undefined' ){
				clearInterval(intervalSlidHre);
			}
				
			if( typeof(intervalSlidMin) != 'undefined' ){
				clearInterval(intervalSlidMin);
			}
				
			if( typeof(intervalSlidSec) != 'undefined' ){
				clearInterval(intervalSlidSec);
			}
			
			delaiSec = 0;
			slidSecCount = ui.value;
			nbSec = parseInt($('#digSec').val());

			if (slidSecCount==0) {
				clearInterval(intervalSlidSec);
			} else {

				slidSec();

				if (slidSecCount<0) {
					delaiSec = parseInt(1000/((slidSecCount*-1)*(slidSecCount*-1)));
				}
				else {
					delaiSec = parseInt(1000/(slidSecCount*slidSecCount));
				}
			
				intervalSlidSec = setInterval(slidSec, delaiSec);
			}
		}
	});
//}