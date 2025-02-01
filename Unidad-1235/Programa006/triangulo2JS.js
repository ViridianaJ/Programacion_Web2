// Función para imprimir el triángulo 2
function imprimirTriangulo2(filas) {
    let resultado = ""; // Variable para almacenar el resultado

    // Parte ascendente
    for (let i = 1; i <= filas; i++) {
        resultado += "#".repeat(i) + "\n"; // Añadir la fila con salto de línea
    }

    // Parte descendente
    for (let i = filas - 1; i >= 1; i--) {
        resultado += "#".repeat(i) + "\n"; // Añadir la fila con salto de línea
    }

    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").textContent = resultado;
}

// Llamar a la función para imprimir el triángulo 2 de 4 filas
imprimirTriangulo2(4);
