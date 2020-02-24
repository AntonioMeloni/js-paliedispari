var parolaUtente = prompt('Inserisci una parola per scoprire se è palindroma');

var parola = palindroma(parolaUtente);
console.log(parola);

function palindroma(stringa)
{
    var palin = stringa.split("").reverse().join("");

    if (palin === stringa){
        return 'La praola inserita è palindroma';
    } else {
        return 'La parola inserita non è palindroma';
    }
}
