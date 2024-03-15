$(document).ready(function(){
	$("#langages").addClass("animated fadeInDownBig"); 		
	
	// Fonction pour avoir un effet de machine à écrire
	$.fn.machineEcrire = function(option) { 	
		function caract (element, text, content) { 
			//  Si le texte a une taille supérieure à 0, c'est qu'il reste encore des caractères
			if(text.length > 0) { 
				// On récupère le caractère 
				var next = text.substr(0,1); 
				// On enlève le caractère pour garder uniquement le reste
				text = text.substr(1); 
				// On ajoute les caractères 1 par 1
				$(element).html(content+next); 
				// On répète la fonction après le delai
				setTimeout(function(){
					caract(element, text, content+next);
				}, option['delai']);
			}
		}
 
		// On configure l'élément par défaut
		option = option || { 'delai': 50 };
		// On exécute pour la 1er fois la fonction
		caract(this, $(this).html(), ''); 
	}
	
	$("#ecrire").machineEcrire({ 'delai' : 30 });
	
	$('.langages').addClass('animated rotateInDownLeft');
	
});
			