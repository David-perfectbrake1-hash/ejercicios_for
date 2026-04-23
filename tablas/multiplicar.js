function generarTablas() {
    let contenedor = document.getElementById("contenedor-tablas");

    let contenido = "";

    for (let i = 1; i <= 15; i++) {
        let resultado = 3 * i;

        contenido +=`<tr>
                        <td>3 x ${i} =</td>
                        <td class="res">${resultado}</td>
                    </tr>`;
    }
    contenedor.innerHTML = contenido;
}