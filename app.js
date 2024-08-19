function encriptarTexto() {
    const texto = document.getElementById("textoEntrada").value;
    const textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarResultado('Texto encriptado:', textoEncriptado);

    // Mostrar el botón de copiar
    document.getElementById("botonCopiar").style.display = 'block';
    // Ocultar la imagen y el texto debajo de la imagen
    document.getElementById("imagen").style.display = 'none';
    document.getElementById("textoDebajoImagen").style.display = 'none';
}

function desencriptarTexto() {
    const texto = document.getElementById("textoEntrada").value;
    const textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado('Texto desencriptado:', textoDesencriptado);

    // Mostrar el botón de copiar
    document.getElementById("botonCopiar").style.display = 'block';
    // Ocultar la imagen y el texto debajo de la imagen
    document.getElementById("imagen").style.display = 'none';
    document.getElementById("textoDebajoImagen").style.display = 'none';
}

function mostrarResultado(titulo, resultado) {
    document.getElementById("textoResultado").value = resultado;

    // Si el texto resultado está vacío, mostrar mensaje de no encontrado
    if (resultado.trim() === "") {
        document.getElementById("textoDebajoImagen").style.display = 'block';
        document.getElementById("imagen").style.display = 'block';
        document.getElementById("botonCopiar").style.display = 'none'; // Oculta el botón de copiar
    }
}

function copiarTexto() {
    const textoElemento = document.getElementById("textoResultado");
    textoElemento.select(); // Selecciona el texto en el textarea
    document.execCommand('copy'); // Copia el texto seleccionado al portapapeles

    // Alternativamente, puedes usar el API de Clipboard si está disponible
    // navigator.clipboard.writeText(textoElemento.value)
    //     .then(() => {
    //         console.log('Texto copiado al portapapeles');
    //     })
    //     .catch(err => {
    //         console.error('Error al copiar el texto: ', err);
    //     });
}

// Añadir evento para verificar el campo de entrada y ajustar la visibilidad del botón y de la imagen
document.getElementById("textoEntrada").addEventListener('input', function() {
    const texto = this.value;
    if (texto.trim() === "") {
        document.getElementById("textoDebajoImagen").style.display = 'block';
        document.getElementById("imagen").style.display = 'block';
        document.getElementById("botonCopiar").style.display = 'none'; // Oculta el botón de copiar
        document.getElementById("textoResultado").value = ""; // Limpia el resultado
    }
});















