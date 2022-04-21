// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente di inserire una parola
const userWord = prompt("Dimmi una parola");
console.log(userWord);

// Richiamo la funzione
const palindromeCheck = isWordPalindrome(userWord);
console.log(palindromeCheck);

// Confronto la parola inserita dall'utente con la stessa parola al contrario
if (userWord === palindromeCheck) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}



// FUNCTION
function isWordPalindrome(wordToCheck) {

    // Scompongo in lettere la parola
    const splitWord = userWord.split("");
    console.log(splitWord);
    // Inverto le lettere che la compongono 
    const reverseWord = splitWord.reverse();
    console.log(reverseWord);
    // Con le lettere invertite riassemblo la parola
    const finalWord = reverseWord.join("");
    return finalWord;
}
