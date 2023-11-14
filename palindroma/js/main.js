'use strict';

// Funzioni
function palindroma(parola){
    for(let i = 0; i < parola.length; i++){
        if(parola[i] !== parola[(parola.length - 1) - i]){
            return 'non è palindroma';
        }
    }
    return 'è palindroma';
}
// Main
alert('La parola ' + palindroma(prompt('Inserisci una parola')));