/* Ejercicio 3 parte 1 */

// 1. Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.

let firstName = 'Cesar'; // Asigna el nombre 'Cesar' a la variable firstName
console.log(typeof firstName); // Imprime el tipo de dato de firstName (String)

let lastName = 'Sanchez'; // Asigna el apellido 'Sanchez' a la variable lastName
console.log(typeof lastName); // Imprime el tipo de dato de lastName (String)

let country = 'Peru'; // Asigna el país 'Peru' a la variable country
console.log(typeof country); // Imprime el tipo de dato de country (String)

let city = 'Lima'; // Asigna la ciudad 'Lima' a la variable city
console.log(typeof city); // Imprime el tipo de dato de city (String)

let age = 19; // Asigna la edad 19 a la variable age
console.log(typeof age); // Imprime el tipo de dato de age (Number)

let isMarried = false; // Asigna el valor booleano false a la variable isMarried
console.log(typeof isMarried); // Imprime el tipo de dato de isMarried (Boolean)

let year = 2024; // Asigna el año 2024 a la variable year
console.log(typeof year); // Imprime el tipo de dato de year (Number)

// 2. Verifique si typeof '10' es igual a 10
let number1 = '10'; // Asigna la cadena '10' a la variable number1
console.log(typeof (number1) === 10); // Compara el tipo de number1 con el número 10 (false)

// 3. Verifique si parseInt('9.8') es igual a 10
let number2 = '9.8'; // Asigna la cadena '9.8' a la variable number2
console.log(parseInt(number2) === 10); // Compara el resultado de parseInt con 10 (false)

// 4. Verifique cualquier valor booleano true o false.
// a) Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
console.log(firstName === 'Cesar'); // Compara firstName con 'Cesar' (true)
console.log(country === 'Peru'); // Compara country con 'Peru' (true)
console.log(year === 2024); // Compara year con 2024 (true)

// b) Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
console.log(age === 25); // Compara age con 25 (false)
console.log(lastName === 'Gomez'); // Compara lastName con 'Gomez' (false)
console.log(isMarried === true); // Compara isMarried con true (false)

// 5. Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confírmelo usando console.log()
let checkNumber = 4 > 3; // 4 es mayor que 3 (true)
console.log(checkNumber); // Imprime el resultado (true)

let checkNumber1 = 4 >= 3; // 4 es mayor o igual que 3 (true)
console.log(checkNumber1); // Imprime el resultado (true)

let checkNumber2 = 4 < 3; // 4 es menor que 3 (false)
console.log(checkNumber2); // Imprime el resultado (false)

let checkNumber3 = 4 <= 3; // 4 es menor o igual que 3 (false)
console.log(checkNumber3); // Imprime el resultado (false)

let checkNumber4 = 4 == 4; // 4 es igual a 4 (true)
console.log(checkNumber4); // Imprime el resultado (true)

let checkNumber5 = 4 === 4; // 4 es estrictamente igual a 4 (true)
console.log(checkNumber5); // Imprime el resultado (true)

let checkNumber6 = 4 != 4; // 4 no es diferente de 4 (false)
console.log(checkNumber6); // Imprime el resultado (false)

let checkNumber7 = 4 !== 4; // 4 no es estrictamente diferente de 4 (false)
console.log(checkNumber7); // Imprime el resultado (false)

let checkNumber8 = 4 != '4'; // 4 es igual a '4' al comparar solo valor (false)
console.log(checkNumber8); // Imprime el resultado (false)

let checkNumber9 = 4 == '4'; // 4 es igual a '4' al comparar solo valor (true)
console.log(checkNumber9); // Imprime el resultado (true)

let checkNumber10 = 4 === '4'; // 4 no es estrictamente igual a '4' (false)
console.log(checkNumber10); // Imprime el resultado (false)

// 6. Utilice el objeto Date para realizar las siguientes actividades
const time = new Date(); // Crea un nuevo objeto Date que representa el momento actual

// a) ¿Qué año es hoy?
console.log(time.getFullYear()); // Imprime el año actual

// b) ¿Qué mes es hoy con un número?
console.log(time.getMonth() + 1); // Imprime el mes actual (agregando 1 porque los meses empiezan en 0)

// c) ¿Qué fecha es hoy?
const day1 = time.getDate(); // Obtiene el día del mes actual
const month1 = time.getMonth() + 1; // Obtiene el mes actual (agregando 1)
const year1 = time.getFullYear(); // Obtiene el año actual
console.log(`${day1}/${month1}/${year1}`); // Imprime la fecha en formato día/mes/año

// d) ¿Qué día es hoy con un número?
console.log(time.getDay() + 1); // Imprime el día de la semana actual (agregando 1)

// e) ¿Cuál es la hora actual?
console.log(time.getHours()); // Imprime la hora actual (0-23)

// f) ¿Cuántos minutos hay actualmente?
console.log(time.getMinutes()); // Imprime los minutos actuales (0-59)

// g) Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
const currentDate = new Date(); // Crea un nuevo objeto Date para la fecha actual
let milliseconds = currentDate.getTime(); // Obtiene el tiempo en milisegundos desde 1 de enero de 1970
let secondsOf1970 = Math.floor(milliseconds / 1000); // Convierte milisegundos a segundos

console.log(`Fecha Actual es: ${currentDate} \n y el número de segundos transcurridos \n desde el 1 de enero de 1970 hasta ahora es: ${secondsOf1970} s`); // Imprime la fecha actual y los segundos transcurridos

// 7. Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).
let base = prompt('Ingrese la base del triángulo', 'Escriba aquí el número'); // Solicita al usuario la base
let altura = prompt('Ingrese la altura del triángulo', 'Escriba aquí el número'); // Solicita al usuario la altura
let área = 0.5 * base * altura; // Calcula el área del triángulo
console.log(`La área del triángulo es: ${área} cm `); // Imprime el área calculada

// 8. Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
let ladoA = parseInt(prompt('Ingrese el valor de lado A del triángulo', 'Escriba aquí el número')); // Solicita al usuario el lado A
let ladoB = parseInt(prompt('Ingrese el valor de lado B del triángulo', 'Escriba aquí el número')); // Solicita al usuario el lado B
let ladoC = parseInt(prompt('Ingrese el valor de lado C del triángulo', 'Escriba aquí el número')); // Solicita al usuario el lado C
let perímetro = ladoA + ladoB + ladoC; // Calcula el perímetro del triángulo
console.log(`El perímetro del triángulo es: ${perímetro}`); // Imprime el perímetro calculado
