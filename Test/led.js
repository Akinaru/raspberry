function led(state){
	var led1, led2, led3, pin;
	led1 = $( "#led1" );	
	led2 = $( "#led2" );	
	led3 = $( "#led3" );
	cb4 = document.getElementById('checkbox_4');
	if (cb4.checked){
		pin = 4;
	}
	if (document.getElementById('checkbox_17').checked){
		pin = 17;
	}
	if (document.getElementById('checkbox_27').checked){
		pin = 27;
	}
	$.ajax({
		type: 'GET',
		url: 'led.php',
        data: {state: state, pin: pin},
        dataType: 'html',
		success: function(reponse) {
			
			getstate();
		},
		error: function() {
			led1.text('Echec de la requête');
		}
	});
}

	
