function formatearFecha(fecha = new Date()) {

    return fecha.toLocaleDateString();

}


function formatearHora(fecha = new Date()) {

    return fecha.toLocaleTimeString();

}


function obtenerFechaHora() {

    const fecha = new Date();

    return {

        fecha:

        formatearFecha(
            fecha
        ),

        hora:

        formatearHora(
            fecha
        )

    };

}


function mostrarMensaje(

    mensaje

) {

    alert(
        mensaje
    );

}


function limpiarTexto(

    texto

) {

    return texto
        .toString()
        .trim()
        .toUpperCase();

}


function obtenerNombreTrabajador(

    legajo

) {

    const trabajador =

        listaActual.find(

            x =>

                x.legajo
                .toString()

                ===

                legajo
                .toString()

        );

    return trabajador

        ?

        trabajador.trabajador

        :

        "";

}


function obtenerSupervisor(

    legajo

) {

    const trabajador =

        listaActual.find(

            x =>

                x.legajo
                .toString()

                ===

                legajo
                .toString()

        );

    return trabajador

        ?

        trabajador.supervisor

        :

        "";

}


function porcentaje(

    parte,

    total

) {

    if (

        total === 0

    ) {

        return 0;

    }

    return (

        parte * 100 / total

    ).toFixed(1);

}

function obtenerIPServidor() {

    return document.querySelector(
        'input[name="campo"]:checked'
    ).value;

}

function urlServidor(ruta) {

    return `http://${obtenerIPServidor()}:5000/${ruta}`;

}