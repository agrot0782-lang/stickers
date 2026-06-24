function actualizarDashboard() {


listaConAcceso =

    tareo.filter(

        trabajador =>

            terrapuerto[
                trabajador.legajo
            ]

    );


listaSinAcceso =

    tareo.filter(

        trabajador =>

            !terrapuerto[
                trabajador.legajo
            ]

    );


const listaJaral =

    tareo.filter(

        trabajador =>

            terrapuerto[
                trabajador.legajo
            ]

            &&

            terrapuerto[
                trabajador.legajo
            ].fundo ===

            "EL JARAL"

    );


const listaCajon =

    tareo.filter(

        trabajador =>

            terrapuerto[
                trabajador.legajo
            ]

            &&

            terrapuerto[
                trabajador.legajo
            ].fundo ===

            "EL CAJON"

    );


document
    .getElementById(
        "totalTrabajadores"
    )
    .innerText =

    tareo.length;


document
    .getElementById(
        "totalValidos"
    )
    .innerText =

    listaConAcceso.length;


document
    .getElementById(
        "totalInvalidos"
    )
    .innerText =

    listaSinAcceso.length;


document
    .getElementById(
        "totalJaral"
    )
    .innerText =

    listaJaral.length;


document
    .getElementById(
        "totalCajon"
    )
    .innerText =

    listaCajon.length;


actualizarReimpresiones();


}

function mostrarJaral(){


let lista =

    tareo.filter(

        trabajador =>

            terrapuerto[
                trabajador.legajo
            ]

            &&

            terrapuerto[
                trabajador.legajo
            ].fundo ===

            "EL JARAL"

    );

renderTrabajadores(
    lista
);


}

function mostrarCajon(){

let lista =

    tareo.filter(

        trabajador =>

            terrapuerto[
                trabajador.legajo
            ]

            &&

            terrapuerto[
                trabajador.legajo
            ].fundo ===

            "EL CAJON"

    );

renderTrabajadores(
    lista
);


}
