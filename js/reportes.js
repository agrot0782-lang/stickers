function generarReporteSupervisor() {

    return {

        supervisor:

        supervisorActual,

        trabajadores:

        listaActual.length,

        conAcceso:

        listaConAcceso.length,

        sinAcceso:

        listaSinAcceso.length

    };

}


function generarReporteSinAcceso() {

    return listaSinAcceso.map(

        trabajador => {

            return {

                trabajador:

                trabajador.trabajador,

                legajo:

                trabajador.legajo,

                supervisor:

                trabajador.supervisor,

                grupo:

                trabajador.grupo,

                actividad:

                trabajador.actividad

            };

        }

    );

}


function generarReporteReimpresiones() {

    return reimpresiones;

}


function generarReporteCompleto() {

    return {

        supervisor:

        generarReporteSupervisor(),

        sinAcceso:

        generarReporteSinAcceso(),

        reimpresiones:

        generarReporteReimpresiones()

    };

}