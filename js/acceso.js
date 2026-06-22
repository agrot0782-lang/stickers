function mostrarTodos() {


renderTrabajadores(

    tareo

);


}

function mostrarConAcceso() {


listaConAcceso =

    tareo.filter(

        trabajador =>

            terrapuerto[
                trabajador.legajo
            ]

    );

renderTrabajadores(

    listaConAcceso

);


}

function mostrarSoloSinAcceso() {


listaSinAcceso =

    tareo.filter(

        trabajador =>

            !terrapuerto[
                trabajador.legajo
            ]

    );

renderTrabajadores(

    listaSinAcceso

);


}
