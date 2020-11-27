$(document).ready(function(){
	var contador = 1;
	$(".menu-bar").click(function(){
		if (contador == 1) {
			$("nav").animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$("nav").animate({
				left: '-100%'
			});
		}

	});

	// inicia el efecto de la animación

	$("#mover").click(function(){
		$("#animacion").animate({
			right: '-250'
		});
	});
// Comienzan los animate scroll

	$("#start").click(function(){
		$("#start-nav").animatescroll();
	});

	$("#sol").click(function(){
		$("#sol-nav").animatescroll();
	});

	$("#mercurio").click(function(){
		$("#mercurio-nav").animatescroll();
	});

	$("#venus").click(function(){
		$("#venus-nav").animatescroll();
	});

	$("#tierra").click(function(){
		$("#tierra-nav").animatescroll();
	});

	$("#marte").click(function(){
		$("#marte-nav").animatescroll();
	});
	
	$("#jupiter").click(function(){
		$("#jupiter-nav").animatescroll();
	});

	$("#saturno").click(function(){
		$("#saturno-nav").animatescroll();
	});

	$("#urano").click(function(){
		$("#urano-nav").animatescroll();
	});

	$("#neptuno").click(function(){
		$("#neptuno-nav").animatescroll();
	});

	$("#pluton").click(function(){
		$("#pluton-nav").animatescroll();
	});

});

