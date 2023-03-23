const Word = class {
  constructor(phrase, n){
    this.phrase = phrase;
    this.n = n;
  }

  //Encontrar el tamaño de la última palabra en un texto.

  last_word = (phrase) => {
    let arr = phrase.replace(/[^\w ]/gi, '').split(' ');
    let last = arr[arr.length - 1].length;
    return last;
  }

  // Encontrar el tamaño de la segunda palabra en un texto.

  second_word = (phrase) => {
    let arr = phrase.replace(/[^\w ]/gi, '').split(' ')[1];
    let second = arr.length;
    return second;
  }

  // Encontrar el tamaño n-ésima palabra en un texto.

  n_word = (phrase, n) => {
    let arr = phrase.replace(/[^\w ]/gi, '').split(' ')[n];
    let n_esima = arr.length;
    return n_esima
  }
}

let phrase = "This is an example.";

const word = new Word();
console.log(word.last_word(phrase));
console.log(word.second_word(phrase));
console.log(word.n_word(phrase, 0));

module.exports = Word;
