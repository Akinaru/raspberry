function capteurjs(){
	
	var capteur;
	capteur = $( "#capteur" );
	
	
	$.ajax({
		type: 'GET',
		url: 'capteur.php',
		success: function(reponse) {
			capteur.text(reponse);
		},
		error: function() {
			capteur.text('Echec de la requête');
		}
	});
	
}

