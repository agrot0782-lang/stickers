function obtenerTrabajadoresJaral() {

    trabajadoresJaral =

        listaActual.filter(

            trabajador =>

                trabajador.campo
                ?.toUpperCase()

                ===

                "JARAL"

        );

    document
        .getElementById(
            "totalJaral"
        )
        .innerText =

        trabajadoresJaral.length;

}