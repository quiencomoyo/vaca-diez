var ancho_pantalla, alto_pantalla, alto_menu;

var acciones = {
	listo : function(){
		
		jQuery("#conocenos .boton-amarillo").click(acciones.clickbtnamarillo);
		//jQuery("#conocenos .contenedor-cuadrado").find("img").eq(0).click(acciones.obtenersrc); //especificamos con el eq la primera imagen
		//jQuery("#conocenos .contenedor-cuadrado").click(acciones.obtenersrc); 
		jQuery(".cabecera .menu a[href*='#']").click(acciones.irancla);
		
		jQuery(".btn-enviar").click(acciones.enviar);
		
		jQuery(".cabecera .buses").click(acciones.abrirmenu);
		
		jQuery(".cerrarimagen").click(acciones.cerrarimagen);
		jQuery(".titulo-acordion").click(acciones.abriracordion);
	},


	abriracordion:function(){
		//jQuery(this).next(".cuerpo-acordion").slideDown("slow");
		//jQuery(this).next(".cuerpo-acordion").slideDown("slow");
		//jQuery(this).slideDown("slow");
		jQuery(this).next(".cuerpo-acordion").slideDown("slow");
		//jQuery(document).on('click','.cuerpo-acordion',function(){ 
		//jQuery(".cuerpo-acordion").modal('toggle'); 
		//}); 
	},
	abrirmenu:function(e){
		e.preventDefault();
		//jQuery(".cabecera .menu").addClass("abierto");
		//jQuery(".cabecera .menu").removeClass("abierto");
		//jQuery(".cabecera .menu").toogleClass("abierto");
		//jQuery(".cabecera .menu").toggleClass("abierto otraclase");//de preferencia
		//jQuery("body").toggleClass("abierto")
		//jQuery(this).find("i").toggleClass("fa-times");
		jQuery(".cabecera .menu").fadeToggle("slow");
		/*if(jQuery(".cabecera .menu").hasClass("abierto")){

			jQuery(".cabecera .menu").removeClass("abierto");
		}else{
			jQuery(".cabecera .menu").addClass("abierto");
		}*/
	},
	enviar:function()
	{
		//jQuery("#contacto").css({"background-color":"#ccc","color":"white"});
		//var nombre = jQuery("#nombre").val();
		//var email = jQuery("#email").val();
		//var asunto = jQuery("#asunto").val();
		//var mensaje = jQuery("#mensaje").val();
		//console.log(nombre+"-"+email+"-"+asunto+"-"+mensaje);
		//jQuery("#nombre").val("quiencomoyo");

	},
	obtenersrc:function(){
		//var src = jQuery(this).find("img").attr("src"); //get
		//jQuery(this).find("img").attr("src","img/milton.jpg");//set
		//var html = jQuery(this).html();
		//console.log(html);
		//jQuery(this).html("<h3>Hola mundo</h3>");
		//var text = jQuery(this).find("h2").text();
		//console.log(text);
		//jQuery(this).find("h2").text("prueba de seteo");

	},
	irancla:function(e){
		e.preventDefault();
		var ancla = this.hash;
		alert(ancla);

	},
	
	clickbtnamarillo : function(e){
		e.preventDefault();
		var src = jQuery(this).closest(".contenedor-cuadrado").find("img").attr("src");
		jQuery(".cuerpoimagen").find("img").attr("src",src);
		
		jQuery(".trama").fadeIn("slow",function(){
			jQuery(".cuerpoimagen").fadeIn("fast");
		});
	//	jQuery(".trama").fadeToogle("slow",function(){	
		
	//	});
		}
		
	
	cerrarimagen:function(e){
		e.preventDefault();
		jQuery(".cuerpoimagen").fadeOut("slow",function(){
			jQuery(".cuerpoimagen").find("img").attr("src","");
			jQuery(".trama").fadeOut("fast");
		});
	},
	precarga:function(){
		acciones.redimensionar();
	},
	redimensionar:function(){
		ancho_pantalla = jQuery(window).width();
		alto_menu = jQuery(".cabecera").innerHeight();
		if (ancho_pantalla < 768) 
		{
			jQuery(".cabecera .menu").css({"padding-top":alto_menu,"padding-bottom":alto_menu});
		}else{
			jQuery(".cabecera .menu").css({"padding-top":0,"padding-bottom":0});
		}
		//alto_pantalla = jQuery(window).height();

		//console.log(ancho_pantalla+" - "+alto_pantalla);
		//alto_menu = jQuery(".cabecera").height();
		//alto_menu = jQuery(".cabecera").innerHeight();
		//alto_menu = jQuery(".cabecera").outerHeight(true);
		/*jQuery(".cabecera").height("200");
		console.log(alto_menu);*/
	},
	scrollventana:function(){
		if (jQuery(window).scrollTop() > alto_menu) {
			
			jQuery(".cabecera").addClass("fondo");
		}else{
			jQuery(".cabecera").removeClass("fondo");
		}
	}
	


	jQuery(document).ready(acciones.listo);

	jQuery(window).on("load",acciones.precarga);

	jQuery(window).resize(acciones.redimensionar);

	jQuery(window).scroll(acciones.scrollventana);
