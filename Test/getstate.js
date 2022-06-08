function getstate(){
	var led1, led2, led3;
	led1 = $( "#led1" );	
	led2 = $( "#led2" );	
	led3 = $( "#led3" );	
	
	$.ajax({
		type: 'GET',
		url: 'led.php',
        data: {state: 'getstate', pin: '4'},
        dataType: 'text',
		success: function(reponse) {
			led1.text(reponse);
			
			if (reponse == 'La led est allumée !'){
				console.log(reponse);
			}
		},
		error: function() {
			led1.text('Echec de la requête');
		}
	});
	$.ajax({
		type: 'GET',
		url: 'led.php',
        data: {state: 'getstate', pin: '17'},
        dataType: 'text',
		success: function(reponse) {
			led2.text(reponse);
		},
		error: function() {
			led2.text('Echec de la requête');
		}
	});
	$.ajax({
		type: 'GET',
		url: 'led.php',
        data: {state: 'getstate', pin: '27'},
        dataType: 'text',
		success: function(reponse) {
			led3.text(reponse);
		},
		error: function() {
			led3.text('Echec de la requête');
		}
	});
	
	
}

	
