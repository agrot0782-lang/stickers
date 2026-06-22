function obtenerLegajosManuales() {

    return document

        .getElementById(

            "manualesTexto"

        )

        .value

        .split("\n")

        .map(

            x => x.trim()

        )

        .filter(

            Boolean

        );

}


function limpiarManuales() {

    document

        .getElementById(

            "manualesTexto"

        )

        .value = "";

}


function agregarLegajosManuales(

    lista

) {

    const manuales =

        obtenerLegajosManuales();

    lista.push(

        ...manuales

    );

    return lista;

}