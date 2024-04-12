/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

  const sum = 10 + 20;
  console.log("Esercizio A:", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
  const random = Math.ceil(Math.random()*20)+ 1;



  console.log("Esercizio B:", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
  const me = {

  name: "Pia Francesca",
  surname: "Vescio",
  age: 23,
  }

  console.log("Esercizio C:", me);


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
  delete me.age;
  console.log("Esercizio D:", me.age); //undefined
  console.log("Esercizio D:", me); // vedere che è stata eliminata la proprietà age.

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
  */
 me.skills = ["JavaScript"];

 console.log("Esercizio E:",me);


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
  me.skills.push("C#")
  console.log("Esercizio F:", me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
  me.skills.pop();
  console.log("Esercizio G:", me);


// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
 const dice = function(nMin, nMax) {
  return Math.ceil(Math.random() * (nMax));
 }
 console.log("Esercizio 1:",dice(1, 6))
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
  const whoIsBigger = function(num1, num2) {
    if (num1 > num2) {
      return "Il numero più grande è :" + num1;
    } else {
      return "Il numero più grande è :" + num2;   
    }
  }
  console.log("Esercizio 2:", whoIsBigger(5, 10));
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = function(arr) {
  return arr.split(" ");
}
console.log("Esercizio 3:", splitMe("Mi piacciono i gattini"));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function(string, vTrue) {
  if(vTrue) {
    return string.slice(1);
  } else {
    return string.slice(0, -1);
  }
}
console.log("Esercizio 4:", deleteOne("Butterfly", true))
console.log("Esercizio 4:", deleteOne("Butterfly", false))
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = function(letter) {
  return letter.replace(/[0-9]/g,'');
  }

console.log("Esercizio 5:", onlyLetters("Ho 400 cani"))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = function(eMail) {
  let par = /@/g;
  return par.test(eMail);

}
console.log("Esercizio 6:",isThisAnEmail("francescavescio12@gmail.com")); 
// alternativo
const isThisAnEmail1 = function(eMail) {
  if (eMail.inclues("@")) {
    return true;
  } else {
    return false;
  }
}
console.log("Esercizio 6:",isThisAnEmail("francescavescio12gmail.com")); 
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = function(day) {
  const giornoDellaSettimana = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato"
  ]
  day = new Date().getDay();
  let dayName = giornoDellaSettimana[day];
  return dayName;
}
console.log("Esercizio 7:",whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

  const rollTheDices = function(number) {
    let sum = 0;
    let valAllDice = [];
      for (i = 0; i < number; i++) {
        const valdice = dice(1,6);
          sum += valdice;
          valAllDice.push(valdice);
      }
    return {
      sum: sum,
      valAllDice: valAllDice,
    }
  }

console.log("Esercizio 8:",rollTheDices(3));
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = function(dayD) {
 const currentDay = new Date();
 const day = new Date(dayD);
 let diffTime = currentDay.getTime() - day.getTime();
 let diffDay = Math.round(diffTime / (1000 * 3600 * 24));

 return diffDay;
}

console.log("Esercizio 9:",howManyDays("2020-02-18"));
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = function(dayD) {
  const dayT = new Date(dayD);
  const day = Math.round(dayT / (1000 * 3600 * 24));
  const myBirthT = new Date("2024-01-18");
  const myBirth = Math.round(myBirthT / (1000 * 3600 * 24));
  if (day === myBirth) {
    return true;
  } else {
    return false;
  }
}
console.log("Esercizio 10:", isTodayMyBirthday("2024-02-20"));
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
    const deleteProp = function(object, Nameobjprop) {
      if (object.hasOwnProperty(Nameobjprop)) {
        delete object[Nameobjprop];
      }
      return object
    } 
    const object = {
      flower: "margherità",
      plants: "cactus",
      animals: "ape"
    }

    console.log("Esercizio 11:",object);
    console.log("Esercizio 11:",deleteProp(object, "animals"));

    const movies = [
      {
        Title: 'The Lord of the Rings: The Fellowship of the Ring',
        Year: '2001',
        imdbID: 'tt0120737',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
      },
    
      {
        Title: 'The Lord of the Rings: The Return of the King',
        Year: '2003',
        imdbID: 'tt0167260',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      },
      {
        Title: 'The Lord of the Rings: The Two Towers',
        Year: '2002',
        imdbID: 'tt0167261',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      },
      {
        Title: 'Lord of War',
        Year: '2005',
        imdbID: 'tt0399295',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
      },
      {
        Title: 'Lords of Dogtown',
        Year: '2005',
        imdbID: 'tt0355702',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
      },
      {
        Title: 'The Lord of the Rings',
        Year: '1978',
        imdbID: 'tt0077869',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      },
      {
        Title: 'Lord of the Flies',
        Year: '1990',
        imdbID: 'tt0100054',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
      },
      {
        Title: 'The Lords of Salem',
        Year: '2012',
        imdbID: 'tt1731697',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
      },
      {
        Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
        Year: '1984',
        imdbID: 'tt0087365',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
      },
      {
        Title: 'Lord of the Flies',
        Year: '1963',
        imdbID: 'tt0057261',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
      },
      {
        Title: 'The Avengers',
        Year: '2012',
        imdbID: 'tt0848228',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
      },
      {
        Title: 'Avengers: Infinity War',
        Year: '2018',
        imdbID: 'tt4154756',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
      },
      {
        Title: 'Avengers: Age of Ultron',
        Year: '2015',
        imdbID: 'tt2395427',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
      },
      {
        Title: 'Avengers: Endgame',
        Year: '2019',
        imdbID: 'tt4154796',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
      },
    ]
       
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = function(array) {
  let result = { Year: 0 };
  array.forEach((movie) => {
    let currentYear = parseInt(movie.Year)
    if (currentYear > result.Year) {
      result = movie
    }
  })

  return result
}

console.log("Esercizio 12:", newestMovie(movies))

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
 const countMovies = (array) => {  
  return array.length;
 }
 console.log("Esercizio 13:", countMovies(movies))

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = function(array) {
  const yearsOfFilm = [];
  array.forEach((movie) => {
    let onlyYearfilm = movie.Year;
    yearsOfFilm.push(onlyYearfilm);
  }); 
  return yearsOfFilm;
}
console.log("Esercizio 14:", onlyTheYears(movies))
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = function(array) {
  return array.filter((movie) => {
    return parseInt(movie.Year) < 1999
  })
}

console.log("Esercizio 15:",onlyInLastMillennium(movies))

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function(array) {
  return array.reduce((sum, currY) => 
  sum + parseInt(currY.Year), 0)
}

console.log("Esercizio 16:",sumAllTheYears(movies)) 
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = function (research) {
  for (let i = 0; i < movies.length; i++) {
    let allFilm = movies[i].Title.toLowerCase();
  if (allFilm.includes(research)) 
    return movies[i];
  }
  return "il film che stai cercando non è disponibile"
}


console.log("Esercizio 17:",searchByTitle("greystoke")); 
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = function(string) {
  const obj = {
   match: [],
   unmatch: []
  };
  for (let i = 0; i < movies.length; i++) {
   const allFilm = movies[i];
   if (allFilm.Title.toLowerCase().includes(string.toLowerCase())) {
       obj.match.push(allFilm);
   } else {
       obj.unmatch.push(allFilm);
     };
   };
   return obj
 };
 
 console.log("Esercizio 18:",searchAndDivide("lord"));
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = function(number) {
  for (let i = 0; i < movies.length; i++) {
    if (i === number) {
      movies.splice(i,1);
    }
  }
  return movies;
}

console.log("Esercizio 19:",removeIndex(3));
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectId() {
  const contId = document.getElementById("container");
  return contId;
}

console.log("Esercizio 20:",selectId() );
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selectTd() {
  const contTd = document.getElementsByTagName("td");
    return contTd;
}
console.log("Esercizio 21:", selectTd())
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function selectAllTd() {
  const contAllTd = document.querySelectorAll("td");
  for(let i = 0; i < contAllTd.length; i++) {
    console.log(contAllTd[i].textContent);
  }
}
  console.log("Esercizio 22:", selectAllTd())
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function changeColor() {
  const colorA = document.querySelectorAll("a");
   for(let i = 0; i < colorA.length; i++) {
    colorA[i].style.backgroundColor = "red";
   }
}
  console.log("Esercizio 23:", changeColor());
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addLi() {
  const list = document.getElementById("myList");
  const newLi = document.createElement("li");
  // list.appendChild(newLi);
}
console.log("Esercizio 24:");
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function removeLi() {
  const list = document.getElementById("myList");
 // list.innerHTML = "";
}
removeLi()
console.log("Esercizio 25:");
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
  
  function addClass() {
    const addClasstoList = document.querySelectorAll("tr");
    for (let i = 0; i < addClasstoList.length; i++) {
      addClasstoList[i].classList.add("test");
    }
  }
    console.log("Esercizio 26:", addClass());
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/



