function buscarTrabajador() {


let textoBusqueda =

    document
    .getElementById(
        "buscar"
    )
    .value
    .toLowerCase()
    .trim();


if (

    textoBusqueda === ""

){

    return;

}


const filtrados =

    tareo.filter(

        trabajador =>

            trabajador.trabajador
            ?.toLowerCase()
            .includes(
                textoBusqueda
            )

            ||

            trabajador.legajo
            ?.toString()
            .includes(
                textoBusqueda
            )

            ||

            trabajador.supervisor
            ?.toLowerCase()
            .includes(
                textoBusqueda
            )

            ||

            trabajador.grupo
            ?.toLowerCase()
            .includes(
                textoBusqueda
            )

            ||

            trabajador.actividad
            ?.toLowerCase()
            .includes(
                textoBusqueda
            )

    );


renderTrabajadores(

    filtrados

);


}

