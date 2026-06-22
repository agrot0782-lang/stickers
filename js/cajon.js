function obtenerTrabajadoresCajon() {

    trabajadoresCajon =

        listaActual.filter(

            trabajador =>

                trabajador.campo
                ?.toUpperCase()

                ===

                "CAJON"

        );

    document
        .getElementById(
            "totalCajon"
        )
        .innerText =

        trabajadoresCajon.length;

}