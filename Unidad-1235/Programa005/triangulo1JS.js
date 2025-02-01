// Función para imprimir la figura triangular
function imprimirTriangulo(n) {
    let resultado = ''; // Variable para almacenar el triángulo como texto
    
    // Bucle para las filas
    for (let i = 1; i <= n; i++) {
        // Espacios en blanco
        let espacios = ' '.repeat(n - i);
        // Caracteres de '#'
        let gatito = '#'.repeat(i);
        // Agregar la línea al resultado
        resultado += espacios + gatito + '\n'; // Agregar nueva línea
    }
    
    // Escribir el resultado en el elemento
    document.getElementById('triangulo').innerText = resultado;
}

// Definir el número de filas de la figura
let filas = 4;
imprimirTriangulo(filas);
