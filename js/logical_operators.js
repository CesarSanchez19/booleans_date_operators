// && - AND o Conjunción lógica
const check = 4 > 3 && 10 > 5; // true && true ---> true, ambas condiciones son verdaderas
const check1 = 4 > 3 && 10 < 5; // true && false ---> false, la segunda condición es falsa
const check2 = 4 < 3 && 10 < 5; // false && false ---> false, ambas condiciones son falsas

// || - OR o Disyunción lógica
const check4 = 4 > 3 || 10 > 5; // true || true ---> true, al menos una condición es verdadera
const check5 = 4 > 3 || 10 < 5; // true || false ---> true, al menos una condición es verdadera
const check6 = 4 < 3 || 10 < 5; // false || false ---> false, ambas condiciones son falsas

// ! - NOT, el operador niega verdadero a falso y falso a verdadero
let check7 = 4 > 3; // check7 es true
let check8 = !(4 > 3); // check8 es false, ya que niega el valor de check7

let isLightOn = true; // Variable que indica si la luz está encendida
let isLightOff = !isLightOn; // isLightOff será false, ya que niega isLightOn

let isMarried = !false; // isMarried es true, ya que niega false

// Increment Operators - ++
let count = 0; // Inicializa count en 0
console.log(++count); // Pre-incremento: incrementa count a 1 y lo imprime
console.log(count); // Imprime el valor actual de count, que es 1

// Post Incremento
let count1 = 0; // Inicializa count1 en 0
console.log(count1++); // Post-incremento: imprime 0 y luego incrementa count1 a 1
console.log(count1); // Imprime el valor actual de count1, que es 1

// Decrement Operators
// Predecremento
let count2 = 0; // Inicializa count2 en 0
console.log(--count2); // Pre-decremento: decrementa count2 a -1 y lo imprime
console.log(count2); // Imprime el valor actual de count2, que es -1

// Post decremento
let count3 = 0; // Inicializa count3 en 0
console.log(count3--); // Post-decremento: imprime 0 y luego decrementa count3 a -1
console.log(count3); // Imprime el valor actual de count3, que es -1

// Ternary Operators
let firstCheck = false, // Inicializa firstCheck como false
    secondCheck = false, // Inicializa secondCheck como false
    access = firstCheck // Condición ternaria: si firstCheck es true, access será "Acceso Denegado"
        ? "Acceso Denegado" 
        : secondCheck // Si firstCheck es false, evalúa secondCheck
            ? "Acceso Denegado" 
            : "Acceso Permitido"; // Si secondCheck también es false, access será "Acceso Permitido"

console.log(access); // Imprime "Acceso Permitido" ya que ambas condiciones son falsas

let isRaining = true; // Inicializa isRaining como true
isRaining // Evalúa isRaining
    ? console.log('You need a rain coat') // Si es true, imprime 'You need a rain coat'
    : console.log('No need for a rain coat'); // Si es false, imprime 'No need for a rain coat'

isRaining = false; // Cambia isRaining a false
isRaining // Evalúa isRaining nuevamente
    ? console.log('You need a rain coat') // Si es true, imprime 'You need a rain coat'
    : console.log('No need for a rain coat'); // Si es false, imprime 'No need for a rain coat'
