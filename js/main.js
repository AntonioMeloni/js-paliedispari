
var dispari = false;
var pari = false;
var pariODispari = parseInt(prompt('Scegli uno tra pari o dispari. Scrivi 0 se vuoi scegliere il pari, scrivi 1 se vuoi scegliere dispari'));

while (((dispari == false) && (pari == false))) {
    if (pariODispari == 1) {
        dispari = true;
        console.log('Hai scelto dispari');
    }else if (pariODispari == 0) {
        pari = true;
        console.log('Hai scelto pari');
    }else {
        pariODispari = parseInt(prompt('Non hai inserito 0 o 1. Scrivi 0 se vuoi scegliere il pari, scrivi 1 se vuoi scegliere dispari'));
    }
}

var numeroUtente = parseInt(prompt('Scegli un numero tra 1 e 5'));
while (numeroUtente<1 || numeroUtente>5) {
    numeroUtente= parseInt(prompt('Il numero inserito non è compreso tra 1 e 5. Inserisci nuovamente un numero tra 1 e 5.'))
}
console.log('Hai inserito il numero: ' + numeroUtente);

var numeroRandom = Math.floor((Math.random()*5)+1);
console.log('Il numero generato casualmente dal computer è: ' + numeroRandom);

var somma = (numeroUtente + numeroRandom);
console.log('la somma dei numeri estratti è: ' + somma);

if (somma % 2 === 0 && pariODispari == 0) {
    console.log('Hai vinto, la somma dei numeri estratti è pari');
}else if (somma % 2 === 1 && pariODispari == 1) {
    console.log('Hai vinto, la somma dei numeri estratti è dispari');
}else {
    console.log('Dispiace, hai perso!');
}
// Purtroppo non sono riuscito a capire dove, in questo caso, mi sarebbe potuta tornare utile una funzione
