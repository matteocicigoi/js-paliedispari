'use strict';

//Funzioni
function random(numeroMin, numeroMax){
    return(Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin);
}
function pariODispari(numero){
    if(numero % 2 === 0){
        return 'pari';
    }
    return 'dispari';
}

//Main
const pariODispariPrompt = prompt('inserisci pari o dispari').toLowerCase();
const numero = Number(prompt('inserisci un numero'));
if(pariODispariPrompt === 'pari' || pariODispariPrompt === 'dispari' && !isNaN(numero)){
    const computer = random(1, 5);
    const somma = numero + computer;
    const risultato = pariODispari(somma);
    if(risultato === pariODispariPrompt){
        alert('Hai vinto. ' + risultato);
    }else{
        alert('Hai perso. ' + risultato);
    }
    console.log(`Pari o dispari: ${pariODispariPrompt} - Numero: ${numero} - Numero generato: ${computer} - Somma: ${somma} - Risultato ${risultato}`);
}else{
    console.log('i valori sono sbagliati');
    console.log(`Pari o dispari: ${pariODispariPrompt} - Numero: ${numero}`);
}