function mostrarSinAcceso() {


listaSinAcceso =

    tareo.filter(

        trabajador =>

            !terrapuerto[
                trabajador.legajo
            ]

    );

let supervisores = {};

tareo.forEach(

    trabajador => {

        const supervisor =

            trabajador.supervisor ||

            "SIN SUPERVISOR";

        if (

            !supervisores[
                supervisor
            ]

        ) {

            supervisores[
                supervisor
            ] = {

                total: 0,

                conAcceso: 0,

                sinAcceso: 0

            };

        }

        supervisores[
            supervisor
        ].total++;

        if (

            terrapuerto[
                trabajador.legajo
            ]

        ) {

            supervisores[
                supervisor
            ].conAcceso++;

        }

        else {

            supervisores[
                supervisor
            ].sinAcceso++;

        }

    }

);

let arreglo =

    Object.entries(
        supervisores
    );

arreglo.sort(

    (a, b) =>

        b[1].sinAcceso -

        a[1].sinAcceso

);

let html = "";

arreglo.forEach(

    item => {

        const supervisor = item[0];

        const datos = item[1];

        html += `

        <div
            class="trabajador rojo"
            onclick="mostrarPendientesSupervisor('${supervisor}')"
            style="cursor:pointer">

            <strong>

                👷 ${supervisor}

            </strong>

            <br><br>

            🔴 ${datos.sinAcceso}
            sin acceso

            <br>

            🟢 ${datos.conAcceso}
            con acceso

            <br>

            👥 ${datos.total}
            trabajadores

        </div>

        `;

    }

);

document
    .getElementById(
        "listaSinAcceso"
    )
    .innerHTML = html;


}
