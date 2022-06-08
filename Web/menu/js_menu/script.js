function afficher() {
    var niv1;
    var niv2;
    var niv3;
    var j1;
    var j2;
    var redirec = document.getElementById("red");
  
    if (document.getElementById('toggle1').checked && document.getElementById('toggle4').checked) {
        niv1 = document.getElementById('toggle1').value;
        j1 =document.getElementById('toggle4').checked;
        redirec.setAttribute('href', '../page_niveau/niveau1-1joueur.html');
    }

    if (document.getElementById('toggle1').checked && document.getElementById('toggle5').checked) {
        niv1 = document.getElementById('toggle1').value;
        j2 =document.getElementById('toggle5').checked
        redirec.setAttribute('href', '../page_niveau/niveau1-2joueur.html');
    }
    

    if (document.getElementById('toggle2').checked && document.getElementById('toggle4').checked) {
        niv2 = document.getElementById('toggle2').value;
        j1 =document.getElementById('toggle4').checked
        redirec.setAttribute('href', '../page_niveau/niveau2-1joueur.html');
    }

    if (document.getElementById('toggle2').checked && document.getElementById('toggle5').checked) {
        niv2 = document.getElementById('toggle2').value;
        j2 =document.getElementById('toggle5').checked
        redirec.setAttribute('href', '../page_niveau/niveau2-2joueur.html');
    }

    if (document.getElementById('toggle3').checked && document.getElementById('toggle4').checked) {
        niv3 = document.getElementById('toggle3').value;
        j1 =document.getElementById('toggle4').checked
        redirec.setAttribute('href', '../page_niveau/niveau3-1joueur.html');
    }

    if (document.getElementById('toggle3').checked && document.getElementById('toggle5').checked) {
        niv3 = document.getElementById('toggle3').value;
        j2 =document.getElementById('toggle5').checked
        redirec.setAttribute('href', '../page_niveau/niveau3-2joueur.html');
    }

    if (document.getElementById('toggle1').checked == false && document.getElementById('toggle2').checked == false && document.getElementById('toggle3').checked == false && document.getElementById('toggle4').checked == false && document.getElementById('toggle5').checked == false ) {
        Toast.show('Selectionnez un niveau et le nombre de joueurs ' , 'faux')
    }

    else if (document.getElementById('toggle4').checked == false && document.getElementById('toggle5').checked == false ) {
        Toast.show('Selectionnez le nombre de joueurs ' , 'faux')
    }

    else  {
        Toast.show('Selectionnez un niveau ' , 'faux')
    }

}
