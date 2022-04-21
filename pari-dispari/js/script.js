// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo all'utente pari o dispari
const userChoice = prompt("Pari o dispari?")
console.log(userChoice);

// Chiedo all'utente un numero da 1 a 5
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userNumber);

// Richiamo la funzione per generare numeri random
const computerNumber = randomNumberGenerator(1, 5);
console.log(computerNumber);

// Faccio la somma dei due numeri
const sum = userNumber + computerNumber;
console.log(sum);

// Richiamo la funzione per stabili se un numero è pari o dispari
const evenOrOddNum = evenOrOdd(sum);
console.log(evenOrOddNum);

// Stampo sulla console il vincitore
if (userChoice === evenOrOddNum) {
    console.log("Hai vinto");
} else {
    console.log("Hai perso");
}


// FUNCTIONS

// Funzione per generare un numero random da 1 a 5 
function randomNumberGenerator(min, max) {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}

// Funzione per stabilire se un numero è pari o dispari
function evenOrOdd(string) {
    let result;
    if (sum % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari";
    }
    return result;
}
