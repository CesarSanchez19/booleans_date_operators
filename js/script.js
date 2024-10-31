let numOne = 8; // Declara una variable numOne y le asigna el valor 8
let numTwo = 4; // Declara una variable numTwo y le asigna el valor 4

let suma = numOne + numTwo; // Calcula la suma de numOne y numTwo y almacena el resultado en la variable suma
let resta = numOne - numTwo; // Calcula la resta de numOne y numTwo y almacena el resultado en la variable resta
let multiplicacion = numOne * numTwo; // Calcula la multiplicación de numOne y numTwo y almacena el resultado en la variable multiplicacion
let division = numOne / numTwo; // Calcula la división de numOne entre numTwo y almacena el resultado en la variable division
let modulo = numOne % numTwo; // Calcula el módulo (residuo) de numOne dividido por numTwo y lo almacena en la variable modulo
let exponente = numOne ** numTwo; // Calcula numOne elevado a la potencia de numTwo y lo almacena en la variable exponente

// Imprime en la consola los resultados de las operaciones aritméticas
console.log(suma, resta, multiplicacion, division, modulo, exponente); 

const PI = Math.PI; // Declara una constante PI y le asigna el valor de PI de la clase Math
let radius = 100; // Declara una variable radius y le asigna el valor 100

// Calcula el área del círculo
const areaOfCircle = PI * radius ** 2; // Usa la fórmula del área (π * radio^2) y almacena el resultado en areaOfCircle
console.log(areaOfCircle); // Imprime en la consola el área del círculo

// Calcular el peso de un objeto
const gravity = 9.81; // Declara una constante gravity y le asigna el valor de la gravedad en m/s²
let mass = 72; // Declara una variable mass y le asigna el valor 72 kg

const weight = mass * gravity; // Calcula el peso (masa * gravedad) y lo almacena en la variable weight
console.log(weight); // Imprime en la consola el peso del objeto

const boilingPoint = 100; // Declara una constante boilingPoint y le asigna el valor 100 (punto de ebullición del agua en °C)
const bodyTemp = 37; // Declara una constante bodyTemp y le asigna el valor 37 (temperatura normal del cuerpo humano en °C)

// Imprime en la consola información sobre el punto de ebullición, la temperatura del cuerpo y la gravedad
console.log(`El punto de ebullición del agua es de ${boilingPoint} grados Celsius \nLa temperatura del cuerpo humano es de ${bodyTemp} grados Celsius \nLa gravedad de la tierra es ${gravity} m/s²`);

// Espera a que todo el contenido del documento esté completamente cargado.
document.addEventListener('DOMContentLoaded', function () {

    // Selecciona todos los elementos con la clase 'nav-item'.
    const navItems = document.querySelectorAll('.nav-item');

    // Recorre cada elemento de navegación seleccionado.
    navItems.forEach((item, index) => {

        // Establece un retraso en la adición de la clase 'show' para cada elemento.
        setTimeout(() => {
            item.classList.add('show'); // Agrega la clase 'show' al elemento actual para activarlo.
        }, 100 * index); // El retraso aumenta en 100ms por cada elemento.

    });

});