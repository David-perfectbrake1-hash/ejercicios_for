function generarTablas() {
    let input = document.getElementById("txt-numero");
    let valor = input.value;
    let numero = Number(valor);
    
    let mensajeAyuda = document.getElementById("mensaje-ayuda");
    let areaTabla = document.getElementById("area-tabla");
    let tituloTabla = document.getElementById("titulo-tabla");
    let contenedor = document.getElementById("contenedor-tablas");

    // Validación y mensaje de ayuda (UX)
    if (valor === "") {
        alert("¡Oye! No olvides escribir un número antes de presionar el botón 🎈");
        return;
    }

    // Ocultar mensaje de ayuda y mostrar la tabla
    mensajeAyuda.style.display = "none";
    areaTabla.style.display = "block";
    
    // Texto intuitivo: actualiza el título según el número elegido
    tituloTabla.innerText = `¡Aprendiendo la Tabla del ${numero}! 🚀`;

    let contenido = "";
    for (let i = 1; i <= 10; i++) {
        contenido += `<tr>
                        <td>${numero} x ${i} =</td>
                        <td class="res">${numero * i}</td>
                      </tr>`;
    }

    contenedor.innerHTML = contenido;
}