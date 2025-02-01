// Función para calcular el descuento basado en el total
function calcularDescuento(total) {
    if (total >= 6000) {
        return 0.5; // 50%
    } else if (total >= 4000) {
        return 0.4; // 40%
    } else if (total >= 2000) {
        return 0.25; // 25%
    } else {
        return 0; // Sin descuento
    }
}

// Función principal para calcular los costos
function calcularCostos() {
    let numProductos = parseInt(prompt("Ingrese el número de productos:"));
    if (isNaN(numProductos) || numProductos <= 0) {
        alert("Por favor, ingrese un número válido de productos.");
        return;
    }

    let productos = [];
    let totalSinDescuento = 0;

    // Solicitar el costo de cada producto
    for (let i = 0; i < numProductos; i++) {
        let costo = parseFloat(prompt(`Ingrese el costo del producto ${i + 1}:`));
        if (isNaN(costo) || costo <= 0) {
            alert("Por favor, ingrese un costo válido.");
            return;
        }
        productos.push({ producto: `Producto ${i + 1}`, costo: costo });
        totalSinDescuento += costo;
    }

    // Calcular el descuento
    let descuento = calcularDescuento(totalSinDescuento);
    let totalConDescuento = totalSinDescuento * (1 - descuento);

    // Calcular el IVA (5%)
    const IVA = 0.05;
    let totalConIVA = totalConDescuento * (1 + IVA);

    // Crear el resultado para mostrar en pantalla
    let resultado = "Lista de productos y sus costos:\n";
    productos.forEach(producto => {
        resultado += `${producto.producto}: $${producto.costo.toFixed(2)}\n`;
    });

    resultado += `\nCosto Total sin Descuento y sin IVA: $${totalSinDescuento.toFixed(2)}`;
    resultado += `\nCosto Total con Descuento aplicado (sin IVA): $${totalConDescuento.toFixed(2)}`;
    resultado += `\nCosto Total con Descuento e IVA (5%): $${totalConIVA.toFixed(2)}`;

    // Mostrar el resultado en la página web
    document.getElementById('resultado').innerText = resultado;
}

// Ejecutar la función al cargar la página
calcularCostos();
