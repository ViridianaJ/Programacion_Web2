//a)Mostrar el Número de Artículos que existen en el Documento.

// Seleccionamos todos los elementos <h3> que indican los artículos
let articulos = document.querySelectorAll("h3");

// Mostramos la cantidad de artículos en la consola
console.log("Número de artículos en el documento: " + articulos.length);


//b) Identificar líneas divisorias dentro del Documento y número de líneas.
// Seleccionamos todos los elementos <hr> (líneas divisorias)
let lineasDivisorias = document.querySelectorAll("hr");

// Mostramos la cantidad de líneas divisorias en la consola
console.log("Número de líneas divisorias en el documento: " + lineasDivisorias.length);


//c)Identificar los elementos de lista dentro del Documento y número de elementos en total.

// Seleccionamos todos los elementos <li> (elementos de lista)
let elementosLista = document.querySelectorAll("li");

// Mostramos la cantidad de elementos de lista en la consola
console.log("Número total de elementos de lista en el documento: " + elementosLista.length);

//d)Identificar elementos de la “Lista Elementos”, número de elementos y código del enlace dentro de dicha lista.

// Seleccionamos la lista por su id "elemen"
let listaElementos = document.getElementById("elemen");

// Obtenemos todos los elementos <li> dentro de la lista "elemen"
let itemsLista = listaElementos.getElementsByTagName("li");

// Contamos el número de elementos <li>
console.log("Número de elementos en la 'Lista Elementos': " + itemsLista.length);

// Iteramos sobre los elementos <li> para encontrar los enlaces <a>
for (let i = 0; i < itemsLista.length; i++) {
    let enlace = itemsLista[i].querySelector("a"); // Buscamos si hay un enlace <a> en cada <li>
    if (enlace) {
        console.log("Código del enlace en el elemento " + (i+1) + ": " + enlace.outerHTML); // Mostramos el código del enlace
    }
}


//e)Identificar elementos de la lista “Menú”, identificar enlaces y número de enlaces en dicha lista.

// Seleccionamos la lista de menú por su id "menu"
let menuLista = document.getElementById("menu");

// Seleccionamos todos los elementos <li> dentro de la lista de menú
let itemsMenu = menuLista.getElementsByTagName("li");

// Mostramos la cantidad total de elementos <li> en la lista de menú
console.log("Número de elementos en la 'Lista Menú': " + itemsMenu.length);

// Variable para contar los enlaces
let contadorEnlaces = 0;

// Iteramos sobre los elementos <li> para encontrar los enlaces <a>
for (let i = 0; i < itemsMenu.length; i++) {
    let enlace = itemsMenu[i].querySelector("a"); // Buscamos si hay un enlace <a> en cada <li>
    if (enlace) {
        contadorEnlaces++;
        console.log("Código del enlace en el elemento " + (i+1) + ": " + enlace.outerHTML); // Mostramos el código del enlace
    }
}

// Mostramos la cantidad de enlaces en la consola
console.log("Número total de enlaces en la 'Lista Menú': " + contadorEnlaces);

//f)Identificar imágenes dentro del Documento y número de imágenes en total.

// Seleccionamos todas las imágenes <img> en el documento
let imagenes = document.getElementsByTagName("img");

// Mostramos el número total de imágenes en la consola
console.log("Número total de imágenes en el documento: " + imagenes.length);

// Iteramos sobre las imágenes y mostramos sus detalles (src y alt)
for (let i = 0; i < imagenes.length; i++) {
    console.log("Imagen" + (i+1) + ":");
    console.log("SRC:" + imagenes[i].src); // Muestra la URL de la imagen
    console.log("ALT:" + imagenes[i].alt); // Muestra el texto alternativo de la imagen
}


//g)Identificar imágenes del bloque referente al “Artículo 2”, identificar primera imagen y número total de imágenes dentro de este bloque.

// Seleccionamos todas las figuras con la clase "imgAr2" que contienen imágenes en el Artículo 2
let imagenesArticulo2 = document.querySelectorAll(".imgAr2 img");

// Mostramos el número total de imágenes en el Artículo 2
console.log("Número total de imágenes en el 'Artículo 2': " + imagenesArticulo2.length);

// Si hay al menos una imagen, mostramos los detalles de la primera imagen
if (imagenesArticulo2.length > 0) {
    console.log("Primera imagen en el 'Artículo 2':");
    console.log("    SRC: " + imagenesArticulo2[0].src);  // URL de la primera imagen
    console.log("    ALT: " + imagenesArticulo2[0].alt);  // Texto alternativo de la primera imagen
}


//h) Identificar imágenes del bloque referente al “Artículo 3”, número de imágenes y código referente a la segunda y cuarta imagen del presente bloque.

// Seleccionamos todas las imágenes dentro del bloque con id "imgAr3" (Artículo 3)
let imagenesArticulo3 = document.querySelectorAll("#imgAr3 img");

// Mostramos el número total de imágenes en el Artículo 3
console.log("Número total de imágenes en el 'Artículo 3': " + imagenesArticulo3.length);

// Si existen al menos dos imágenes, mostramos el código de la segunda imagen
if (imagenesArticulo3.length >= 2) {
    console.log("Código de la segunda imagen en el 'Artículo 3':");
    console.log(imagenesArticulo3[1].outerHTML); // Muestra el código HTML completo de la segunda imagen
}

// Si existen al menos cuatro imágenes, mostramos el código de la cuarta imagen
if (imagenesArticulo3.length >= 4) {
    console.log("Código de la cuarta imagen en el 'Artículo 3':");
    console.log(imagenesArticulo3[3].outerHTML); // Muestra el código HTML completo de la cuarta imagen
}

//i)Identificar enlaces del Documento y número de enlaces en total.

// Seleccionamos todos los enlaces <a> en el documento
let enlaces = document.getElementsByTagName("a");

// Mostramos el número total de enlaces en la consola
console.log("Número total de enlaces en el documento: " + enlaces.length);

// Iteramos sobre los enlaces y mostramos el código de cada uno
for (let i = 0; i < enlaces.length; i++) {
    console.log("Enlace " + (i + 1) + ": " + enlaces[i].outerHTML); // Muestra el código HTML de cada enlace
}


//j) Identificar enlaces distribuidos dentro del párrafo referente al “Artículo 1” y número de enlaces.


// Seleccionamos el párrafo del Artículo 1 por su id "text1"
let parrafoArticulo1 = document.getElementById("text1");

// Seleccionamos todos los enlaces <a> dentro del párrafo del Artículo 1
let enlacesArticulo1 = parrafoArticulo1.getElementsByTagName("a");

// Mostramos el número total de enlaces en el párrafo del Artículo 1
console.log("Número total de enlaces en el 'Artículo 1':" + enlacesArticulo1.length);

// Iteramos sobre los enlaces y mostramos el código de cada uno
for (let i = 0; i < enlacesArticulo1.length; i++) {
    console.log("Enlace " + (i + 1) + ":" + enlacesArticulo1[i].outerHTML); // Muestra el código HTML de cada enlace
}
    


