// Función para generar la figura "medio pinol"
function generarMedioPinol(ciclos) {
    let resultado = ''; // Variable para almacenar el resultado
    
    // Bucle para los ciclos
    for (let i = 1; i <= ciclos; i++) {
        // Generar la figura hasta el ciclo i
        for (let j = 1; j <= i; j++) {
            resultado += '#'.repeat(j) + '\n'; // Agregar la línea con los gatos
        }
    }
    
    // Mostrar el resultado en el elemento <pre>
    document.getElementById('resultado').innerText = resultado.trim(); // Trim para quitar el último salto de línea
}

// Solicitar el número de ciclos al usuario
let ciclos = parseInt(prompt("Ingrese el número de ciclos:"));
if (!isNaN(ciclos) && ciclos > 0) {
    generarMedioPinol(ciclos);
} else {
    alert("Por favor, ingrese un número válido.");
}
