window.onload = async ()=>{


await cargarDatos();

mostrarSinAcceso();

actualizarDashboard();
await cargarHistorial();

document
    .getElementById(
        "btnCargar"
    )
    .addEventListener(

        "click",

        mostrarCuadrilla

    );


document
    .getElementById(
        "buscar"
    )
    .addEventListener(

        "keyup",

        buscarTrabajador

    );


document
    .getElementById(
        "btnTodos"
    )
    .addEventListener(

        "click",

        mostrarTodos

    );


document
    .getElementById(
        "btnConAcceso"
    )
    .addEventListener(

        "click",

        mostrarConAcceso

    );


document
    .getElementById(
        "btnSinAcceso"
    )
    .addEventListener(

        "click",

        mostrarSoloSinAcceso

    );


document
    .getElementById(
        "cardJaral"
    )
    .addEventListener(

        "click",

        mostrarJaral

    );


document
    .getElementById(
        "cardCajon"
    )
    .addEventListener(

        "click",

        mostrarCajon

    );


};

document
    .getElementById(
        "btnImprimir"
    )
    .addEventListener(

        "click",

        imprimir

    );

    document
    .getElementById(
        "btnCrearHistorial"
    )
    .addEventListener(

        "click",

        crearHistorialStickers

    );