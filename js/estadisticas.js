function actualizarEstadisticas() {

    const total =

        listaActual.length;

    const conAcceso =

        listaConAcceso.length;

    const sinAcceso =

        listaSinAcceso.length;

    const porcentaje =

        total > 0

        ?

        (
            conAcceso * 100 / total
        ).toFixed(1)

        :

        0;

    return {

        supervisor:

        supervisorActual,

        total:

        total,

        conAcceso:

        conAcceso,

        sinAcceso:

        sinAcceso,

        porcentaje:

        porcentaje

    };

}


function obtenerResumenSupervisor() {

    const datos =

        actualizarEstadisticas();

    return `

        Supervisor:
        ${datos.supervisor}

        Total:
        ${datos.total}

        Con acceso:
        ${datos.conAcceso}

        Sin acceso:
        ${datos.sinAcceso}

        Asistencia:
        ${datos.porcentaje}%

    `;

}