var points, etat, chrono;
chrono = 60;
started = 0;

function mart(){
	if(chrono > 1){
		setTimeout("mart();", 1000);
		points = $( "#points" );
		etat = $( "#status" );

		$.ajax({
			type: 'GET',
			url: 'launcher.php',
			success: function(reponse) {
				points.text(reponse);
			},
			error: function() {
				points.text('Echec de la requête');
			}
		});
		chrono--;
		etat.text(chrono);
	}else{
		etat.text("FINIT");
		started = 0;
	}
}

function lanceur(){
	if (started == 0){
		$.ajax({
			type: 'GET',
			url: 'points.php',
			success: function(reponse) {
				console.log("start");
			},
			error: function() {
				console.log('Echec de la requête');
			}
		});
		mart();
		started = 1;
	}
}



