function exportarExcel() {

    const datos = listaActual.map(

        trabajador => {

            const acceso =

                terrapuerto[
                    trabajador.legajo
                ];

            return {

                Trabajador:
                trabajador.trabajador,

                Legajo:
                trabajador.legajo,

                Supervisor:
                trabajador.supervisor,

                Grupo:
                trabajador.grupo,

                Actividad:
                trabajador.actividad,

                Acceso:

                acceso

                ?

                "SI"

                :

                "NO",

                Hora:

                acceso

                ?

                acceso.hora_marcado

                :

                ""

            };

        }

    );

    const hoja = XLSX.utils.json_to_sheet(

        datos

    );

    const libro = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(

        libro,

        hoja,

        "Cuadrilla"

    );

    XLSX.writeFile(

        libro,

        "cuadrilla.xlsx"

    );

}