**JavaScript: Tipos de Datos, Boolean, Operadores y Fechas.**

### Descripción del Proyecto en JavaScript.

Este proyecto tiene como objetivo explorar y aplicar conceptos fundamentales de JavaScript, incluyendo variables, operadores, valores booleanos, objetos de fecha, tipos de datos y cálculos. A través de la implementación de estas características, se busca desarrollar una comprensión sólida de cómo funcionan estos elementos en el contexto de la programación web.

- **Variables**: Se utilizarán para almacenar y gestionar datos, permitiendo que la aplicación sea dinámica.
- **Operadores**: Se aplicarán para realizar cálculos y comparaciones, facilitando la lógica de negocio.
- **Valores Booleanos**: Serán clave para las decisiones y control de flujo en la aplicación.
- **Objetos de Fecha**: Se emplearán para gestionar información relacionada con el tiempo.
- **Tipos de Datos**: Se explorarán las diferentes categorías de datos que JavaScript maneja, desde primitivos hasta objetos complejos.
- **Cálculos**: Se realizarán operaciones matemáticas para procesar y manipular datos.

En conjunto, estos elementos permitirán construir una aplicación interactiva y funcional, fortaleciendo la habilidad para programar en JavaScript.

### Métodos y Operadores Utilizados.

1. **`console.log()`**:
   - Imprime el argumento en la consola del navegador, útil para la depuración.
   - **Ejemplo**: `console.log(typeof firstName);`.

2. **`typeof`**:
   - Devuelve una cadena que indica el tipo de una variable.
   - **Ejemplo**: `typeof firstName` devuelve `'string'`.

3. **`parseInt()`**:
   - Convierte una cadena en un número entero.
   - **Ejemplo**: `parseInt('9.8')` devuelve `9`.

4. **`getFullYear()`**:
   - Obtiene el año actual de un objeto `Date`.
   - **Ejemplo**: `time.getFullYear()`.

5. **`getMonth()`**:
   - Obtiene el mes actual (0-11) de un objeto `Date`. Se le suma 1 para mostrar el mes en un formato más amigable.
   - **Ejemplo**: `time.getMonth() + 1`.

6. **`getDate()`**:
   - Obtiene el día del mes actual (1-31) de un objeto `Date`.
   - **Ejemplo**: `time.getDate()`.

7. **`getDay()`**:
   - Obtiene el día de la semana actual (0-6) de un objeto `Date`, donde 0 es domingo.
   - **Ejemplo**: `time.getDay() + 1`.

8. **`getHours()`**:
   - Obtiene la hora actual (0-23) de un objeto `Date`.
   - **Ejemplo**: `time.getHours()`.

9. **`getMinutes()`**:
   - Obtiene los minutos actuales (0-59) de un objeto `Date`.
   - **Ejemplo**: `time.getMinutes()`.

10. **`getTime()`**:
    - Obtiene la fecha en milisegundos desde el 1 de enero de 1970.
    - **Ejemplo**: `currentDate.getTime()`.

11. **`Math.floor()`**:
    - Redondea un número hacia abajo al entero más cercano.
    - **Ejemplo**: `Math.floor(milliseconds / 1000)`.

12. **`prompt()`**:
    - Muestra un cuadro de diálogo que solicita al usuario que ingrese un valor.
    - **Ejemplo**: `let base = prompt('Ingrese la base del triángulo');`.

13. **`setTimeout()`**:
    - Llama a una función después de un retraso especificado.
    - **Ejemplo**: `setTimeout(() => { item.classList.add('show'); }, 100 * index);`.

### Operadores Lógicos y de Comparación

1. **`&&` (AND)**:
   - Evalúa a `true` solo si ambas condiciones son verdaderas.
   - **Ejemplo**: `4 > 3 && 10 > 5`.

2. **`||` (OR)**:
   - Evalúa a `true` si al menos una de las condiciones es verdadera.
   - **Ejemplo**: `4 > 3 || 10 < 5`.

3. **`!` (NOT)**:
   - Invierte el valor booleano.
   - **Ejemplo**: `let check8 = !(4 > 3)`.

4. **`==` (igualdad débil)**:
   - Compara dos valores sin considerar su tipo.
   - **Ejemplo**: `3 == '3'`.

5. **`===` (igualdad estricta)**:
   - Compara dos valores considerando su tipo.
   - **Ejemplo**: `3 === '3'`.

6. **`!=` (desigualdad débil)**:
   - Compara dos valores sin considerar su tipo.
   - **Ejemplo**: `3 != 2`.

7. **`!==` (desigualdad estricta)**:
   - Compara dos valores considerando su tipo.
   - **Ejemplo**: `3 !== '3'`.

8. **`>` (mayor que)**:
   - Compara si el valor de la izquierda es mayor que el de la derecha.
   - **Ejemplo**: `3 > 2`.

9. **`<` (menor que)**:
   - Compara si el valor de la izquierda es menor que el de la derecha.
   - **Ejemplo**: `2 < 3`.

10. **`>=` (mayor o igual que)**:
    - Compara si el valor de la izquierda es mayor o igual que el de la derecha.
    - **Ejemplo**: `3 >= 2`.

11. **`<=` (menor o igual que)**:
    - Compara si el valor de la izquierda es menor o igual que el de la derecha.
    - **Ejemplo**: `2 <= 3`.

### Operadores Aritméticos

1. **`+` (suma)**:
   - Suma dos números.
   - **Ejemplo**: `let suma = numOne + numTwo;`.

2. **`-` (resta)**:
   - Resta dos números.
   - **Ejemplo**: `let resta = numOne - numTwo;`.

3. **`*` (multiplicación)**:
   - Multiplica dos números.
   - **Ejemplo**: `let multiplicacion = numOne * numTwo;`.

4. **`/` (división)**:
   - Divide dos números.
   - **Ejemplo**: `let division = numOne / numTwo;`.

5. **`%` (módulo)**:
   - Devuelve el residuo de una división.
   - **Ejemplo**: `let modulo = numOne % numTwo;`.

6. **`**` (exponente)**:
   - Eleva un número a la potencia de otro.
   - **Ejemplo**: `let exponente = numOne ** numTwo;`.

7. **`++` (incremento)**:
   - Incrementa el valor de una variable en 1.
   - **Ejemplo**: `count++;`.

8. **`--` (decremento)**:
   - Decrementa el valor de una variable en 1.
   - **Ejemplo**: `count--;`.

### Operador Ternario

- **`? :`**:
  - Evalúa una condición y devuelve un valor u otro dependiendo de si la condición es verdadera o falsa.
  - **Ejemplo**: `let access = firstCheck ? "Acceso Denegado" : "Acceso Permitido";`.
