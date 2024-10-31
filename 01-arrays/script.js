const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 0. Per ogni insegnante stampa in console la frase:
// [Nome insengante] è l'insegnante in posizione [i]
for (let i = 0; i < teachers.length; i++) {
  console.log(`${teachers[i]} è l'insegnante numero ${i}`);
}

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers.splice(3, 1);
console.log(`Il quarto insegnante è ${fourthTeacher}`);


// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers.splice(4, 1, "Patrick")
console.log(teachers);


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(lastTeacher);


// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(firstTeacher);


// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

teachers.push("Vanessa");
console.log(teachers);


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
console.log(teachers);


// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes("Fabio");
if (isFabioPresent === true) {
  console.log("Fabio è presente");
} else {
  console.log("Fabio non è presente");
}

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf("Lewis");
if (lewisIndex > -1) {
  console.log(`Lewis si trova in posizione ${lewisIndex}`);
} else {
  console.log("Elemento non trovato");
}


// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(" - ");
console.log(teachersString);


// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
function isEmpty(teachers) {
  return teachers.length === 0
}
const isTeachersEmpty = teachers.some(isEmpty);
if (isTeachersEmpty === true) {
  console.log("L'array è vuoto");
} else {
  console.log("L'array non è vuoto");

}

