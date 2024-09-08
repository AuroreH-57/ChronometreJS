// Variables utilisés dans le programme
let sp, btn_start, btn_stop, t, ms, s, min, h;

// fonction pour initialiser les variables

window.onload = function() {
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    ms = 0, s = 0, min = 0, h = 0;
}

// Mise en place du compteur

function update_chrono() {
    ms+=1;
    if(ms == 10) {
        ms=1;
        s+=1
    }
    if(s==60){
        s=0;
        min+=1
    }
    if(min==60){
        min=0
        h+=1
    }

    // Insertion des valeurs dans les spans
    //[0] est le premier span et ainsi de suite
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = min + "min";
    sp[2].innerHTML = s + "sec";
    sp[3].innerHTML = ms + "ms";
}

//Mettre en place la fonction du bouton start

function start() {
    t = setInterval(update_chrono,100)  // exécution fonction update chrono toute les 100ms
    btn_start.disabled = true;
}

//Stopper le chronometre

function stop() {
    clearInterval(t); //suppression de l'intervale t
    btn_start.disabled = false;
}

// Reset des valeurs

function reset() {
    clearInterval(t);
    btn_start.disabled = false;
    ms = 0; s = 0; min = 0; h = 0;

    // Insertion nouvelles valeurs

    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = min + "min";
    sp[2].innerHTML = s + "sec";
    sp[3].innerHTML = ms + "ms";

}