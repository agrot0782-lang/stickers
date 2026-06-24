function renderTrabajadores(lista) {
listaMostrada = lista;
let html = "";

lista.forEach(trabajador => {

    const acceso =
        terrapuerto[
            trabajador.legajo
        ];

    const paso = !!acceso;

    html += `

    <div class="trabajador ${paso ? "verde" : "rojo"}">

        <input
        type="checkbox"
        class="chkTrabajador"
        value="${trabajador.legajo}"
        ${paso ? "checked" : ""}>

        <strong>

            ${trabajador.trabajador}

        </strong>

        <br>

        Legajo:
        ${trabajador.legajo}

        <br>

        Grupo:
        ${trabajador.grupo}

        <br>

        Actividad:
        ${trabajador.actividad}

        <br>

        ${

            paso

            ?

            "🟢 Entrada: " +
            acceso.hora_marcado

            :

            "🔴 Sin acceso Terrapuerto"

        }

        <br>

        Supervisor:
        ${trabajador.supervisor}

        <br><br>

        <button
        class="btn-reimprimir" onclick="reimprimir('${trabajador.legajo}')">

            🖨 Reimprimir

        </button>

    </div>

    `;

});

document
    .getElementById(
        "listaTrabajadores"
    )
    .innerHTML = html;


}

function mostrarCuadrilla() {


supervisorActual =

    document
    .getElementById(
        "supervisor"
    )
    .value;

listaActual =

    tareo.filter(

        trabajador =>

            trabajador.supervisor ===
            supervisorActual

    );

renderTrabajadores(

    listaActual

);

mostrarSinAcceso();
actualizarDashboard();


}


function mostrarPendientesSupervisor(
supervisor
) {


let lista =

    tareo.filter(

        trabajador =>

            trabajador.supervisor ===
            supervisor

            &&

            !terrapuerto[
                trabajador.legajo
            ]

    );

renderTrabajadores(

    lista

);


}
