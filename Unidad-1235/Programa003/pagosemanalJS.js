// Función para calcular el pago semanal del trabajador
function calcularPagoSemanal(pagoBasePorHora, horasTrabajadas) {
    // Pago normal hasta 40 horas
    const pagoNormal = Math.min(horasTrabajadas, 40) * pagoBasePorHora;
    
    // Pago doble entre 41 y 47 horas
    const horasDobles = Math.min(Math.max(horasTrabajadas - 40, 0), 7);
    const pagoDoble = horasDobles * pagoBasePorHora * 2;
    
    // Pago triple a partir de la hora 48
    const horasTriples = Math.max(horasTrabajadas - 47, 0);
    const pagoTriple = horasTriples * pagoBasePorHora * 3;

    // Suma total de los pagos
    return pagoNormal + pagoDoble + pagoTriple;
}

// Solicitar los datos al usuario
let pagoBasePorHora = parseFloat(prompt("Ingrese el pago base por hora:"));
let horasTrabajadas = parseInt(prompt("Ingrese el número de horas trabajadas:"));

// Validar que los datos ingresados son números 
if (!isNaN(pagoBasePorHora) && !isNaN(horasTrabajadas) && pagoBasePorHora > 0 && horasTrabajadas > 0) {
    // Calcular el pago total
    let pagoTotal = calcularPagoSemanal(pagoBasePorHora, horasTrabajadas);
    // Mostrar el resultado 
    document.getElementById('resultado').innerText = `El pago semanal total es: $${pagoTotal.toFixed(2)}`;
} else {
    alert("Por favor, ingrese valores válidos para el pago base y las horas trabajadas.");
}
