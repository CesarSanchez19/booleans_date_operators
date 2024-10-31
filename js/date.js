// Windows Methods

// Windows Alert
let message = "Hello world"; // Declara una variable message y le asigna el valor "Hello world"
alert(message); // Muestra un cuadro de alerta con el mensaje

// Windows prompt
let number = prompt('Enter number', 'number goes here'); // Muestra un cuadro de entrada donde el usuario puede ingresar un número, con un texto sugerido
console.log(number); // Imprime en la consola el número ingresado por el usuario

// Windows confirm
const agree = confirm('Are you sure you like to delete?'); // Muestra un cuadro de confirmación con un mensaje y botones para aceptar o cancelar
console.log(agree); // Imprime en la consola el resultado de la confirmación: true si se acepta, false si se cancela

// Date Object
const now = new Date(); // Crea un nuevo objeto Date que representa el momento actual
console.log(now); // Imprime en la consola el objeto Date completo

const now1 = new Date(); // Crea otro objeto Date para obtener el año actual
console.log(now1.getFullYear()); // Imprime el año actual usando el método getFullYear()

const now2 = new Date(); // Crea otro objeto Date para obtener el mes actual
console.log(now2.getMonth()); // Imprime el mes actual (0-11; enero es 0, diciembre es 11) usando el método getMonth()

const now3 = new Date(); // Crea otro objeto Date para obtener el día del mes
console.log(now3.getDate()); // Imprime el día del mes actual usando el método getDate()

const now4 = new Date(); // Crea otro objeto Date para obtener el día de la semana
console.log(now4.getDay()); // Imprime el día de la semana (0-6; domingo es 0, sábado es 6) usando el método getDay()

const now5 = new Date(); // Crea otro objeto Date para obtener la hora actual
console.log(now5.getHours()); // Imprime la hora actual (0-23) usando el método getHours()

const now6 = new Date(); // Crea otro objeto Date para obtener los minutos actuales
console.log(now6.getMinutes()); // Imprime los minutos actuales (0-59) usando el método getMinutes()

const now7 = new Date(); // Crea otro objeto Date para obtener los milisegundos actuales
console.log(now7.getMilliseconds()); // Imprime los milisegundos actuales (0-999) usando el método getMilliseconds()
