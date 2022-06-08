var numero_gauche = 0;
var numerod_gauche = 0;
var numero_droit = 0;
var numerod_droit = 0;
var numero = 0;
var numerod = 0;


function bpappuye(){
    numero ++;
    if (numero == 10){
        numero = 0;
        numerod ++;
    }
    changeNumber('afficheur6', numero);
    changeNumber('afficheur5', numerod);
}

function bpappuye_gauche(){
    numero_gauche ++;
    if (numero_gauche == 10){
        numero_gauche = 0;
        numerod_gauche ++;
    }
    changeNumber('afficheur2', numero_gauche);
    changeNumber('afficheur1', numerod_gauche);
}

function bpappuye_droit(){
    numero_droit ++;
    if (numero_droit == 10){
        numero_droit = 0;
        numerod_droit ++;
    }
    changeNumber('afficheur4', numero_droit);
    changeNumber('afficheur3', numerod_droit);
}

function reset() {

    numero = 0;
    numerod = 0;


    changeNumber('afficheur6', numero);
    changeNumber('afficheur5', numerod);
}

function reset2p () {
    numero_droit = 0;
    numerod_droit = 0;
    numerod_gauche = 0;
    numero_gauche = 0;

    changeNumber('afficheur2', numero_gauche);
    changeNumber('afficheur1', numerod_gauche);
    changeNumber('afficheur4', numero_droit);
    changeNumber('afficheur3', numerod_droit);
}

function changeNumber(identifiant, numero){
    if(numero == '0'){
        this.afficheur = document.getElementById(identifiant);
        showSegment(identifiant, "a");
        showSegment(identifiant, "b");
        showSegment(identifiant, "c");
        showSegment(identifiant, "d");
        showSegment(identifiant, "e");
        showSegment(identifiant, "f");
        hideSegment(identifiant, "g");
    }
    if(numero == '1'){
        this.afficheur = document.getElementById(identifiant);
        hideSegment(identifiant, "a");
        hideSegment(identifiant, "b");
        hideSegment(identifiant, "c");
        hideSegment(identifiant, "d");
        showSegment(identifiant, "e");
        showSegment(identifiant, "f");
        hideSegment(identifiant, "g");
    }
    if(numero == '2'){
        this.afficheur = document.getElementById(identifiant);
        showSegment(identifiant, "a");
        hideSegment(identifiant, "b");
        showSegment(identifiant, "c");
        showSegment(identifiant, "d");
        showSegment(identifiant, "e");
        hideSegment(identifiant, "f");
        showSegment(identifiant, "g");
    }
    if(numero == '3'){
        this.afficheur = document.getElementById(identifiant);
        showSegment(identifiant, "a");
        hideSegment(identifiant, "b");
        hideSegment(identifiant, "c");
        showSegment(identifiant, "d");
        showSegment(identifiant, "e");
        showSegment(identifiant, "f");
        showSegment(identifiant, "g");
    }
    if(numero == '4'){
        this.afficheur = document.getElementById(identifiant);
        hideSegment(identifiant, "a");
        showSegment(identifiant, "b");
        hideSegment(identifiant, "c");
        hideSegment(identifiant, "d");
        showSegment(identifiant, "e");
        showSegment(identifiant, "f");
        showSegment(identifiant, "g");
    }
    if(numero == '5'){
        this.afficheur = document.getElementById(identifiant);
        showSegment(identifiant, "a");
        showSegment(identifiant, "b");
        hideSegment(identifiant, "c");
        showSegment(identifiant, "d");
        hideSegment(identifiant, "e");
        showSegment(identifiant, "f");
        showSegment(identifiant, "g");
    }
    if(numero == '6'){
        this.afficheur = document.getElementById(identifiant);
        showSegment(identifiant, "a");
        showSegment(identifiant, "b");
        showSegment(identifiant, "c");
        showSegment(identifiant, "d");
        hideSegment(identifiant, "e");
        showSegment(identifiant, "f");
        showSegment(identifiant, "g");
    }
    if(numero == '7'){
        this.afficheur = document.getElementById(identifiant);
        showSegment(identifiant, "a");
        hideSegment(identifiant, "b");
        hideSegment(identifiant, "c");
        hideSegment(identifiant, "d");
        showSegment(identifiant, "e");
        showSegment(identifiant, "f");
        hideSegment(identifiant, "g");
    }
    if(numero == '8'){
        this.afficheur = document.getElementById(identifiant);
        showSegment(identifiant, "a");
        showSegment(identifiant, "b");
        showSegment(identifiant, "c");
        showSegment(identifiant, "d");
        showSegment(identifiant, "e");
        showSegment(identifiant, "f");
        showSegment(identifiant, "g");
    }
    if(numero == '9'){
        this.afficheur = document.getElementById(identifiant);
        showSegment(identifiant, "a");
        showSegment(identifiant, "b");
        hideSegment(identifiant, "c");
        showSegment(identifiant, "d");
        showSegment(identifiant, "e");
        showSegment(identifiant, "f");
        showSegment(identifiant, "g");
    }
}


function hideSegment(identifiant, lettre){
    this.afficheur = document.getElementById(identifiant);
    a = this.afficheur.querySelector('.' + lettre);
    this.a.className = lettre + " remove";
}

function showSegment(identifiant, lettre){
    this.afficheur = document.getElementById(identifiant);
    a = this.afficheur.querySelector('.' + lettre);
    this.a.className = lettre + "";
}

$(function() {
    startRefresh();
});
var point;

function startRefresh() {
    setTimeout(startRefresh, 1000);

}

