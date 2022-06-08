$(document).ready(function () {

    $( "#formulaire" ).submit(function( event ) {

        var status, argument, som;
        status = $( "input[name=status]" ).val();
        argument = $( "input[name=argument]" ).val();
        som = $( "#somme" );     

        $.ajax({
            type: 'GET',
            url: 'main.php',
            data: {status: status, argument: argument},
            dataType: 'html',
            success: function(reponse) {
                som.text(reponse);
            },
            error: function() {
                som.text('Echec de la requête');
            }
        });   
        
        event.preventDefault();
    });
    
    function capteurjs(){
        window.alert("Bonjour&nbsp;!");
        var capteur;
        capteur = $( "#capteur" );
        capteur.text("oui");
    }
});

