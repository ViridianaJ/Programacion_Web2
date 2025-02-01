// Función para calcular el IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Función para obtener la recomendación según el IMC
function obtenerRecomendacion(imc) {
    if (imc > 25) {
        return "¡¡¡PESO ALTO!!! COMA SALUDABLE Y HAGA MÁS ACTIVIDAD FÍSICA";
    } else if (imc >= 22 && imc <= 25) {
        return "TIENES UN PESO CORRECTO, MANTENTE ASÍ Y SIGUE CUIDANDO TU SALUD";
    } else {
        return "PESO BAJO, SE RECOMIENDA VISITAR A UN NUTRILOGO";
    }
}

// Función principal del programa
function programaIMC() {
    // Solicitar datos al usuario con prompt
    let nombre = prompt("Ingrese su nombre:");
    let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
    let altura = parseFloat(prompt("Ingrese su altura en metros:"));

    // Calcular el IMC
    let imc = calcularIMC(peso, altura).toFixed(2);

    // Obtener la recomendación basada en el IMC
    let recomendacion = obtenerRecomendacion(imc);

    // Mostrar los resultados en alert
    alert(`Nombre: ${nombre}\nPeso: ${peso} kg\nAltura: ${altura} m\nIMC: ${imc}\nRecomendación: ${recomendacion}`);

    // Mostrar los resultados en la consola
    console.log("Resultado en la consola:");
    console.log(`Nombre: ${nombre}`);
    console.log(`Peso: ${peso} kg`);
    console.log(`Altura: ${altura} m`);
    console.log(`IMC: ${imc}`);
    console.log(`Recomendación: ${recomendacion}`);

    // Escribir los resultados en el documento HTML
    document.write(`<h2>Resultados:</h2>`);
    document.write(`<p><strong>Nombre:</strong> ${nombre}</p>`);
    document.write(`<p><strong>Peso:</strong> ${peso} kg</p>`);
    document.write(`<p><strong>Altura:</strong> ${altura} m</p>`);
    document.write(`<p><strong>IMC:</strong> ${imc}</p>`);
    document.write(`<p><strong>Recomendación:</strong> ${recomendacion}</p>`);
}

// Ejecutar el programa
programaIMC();

