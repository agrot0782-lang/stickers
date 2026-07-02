let configuracionSistema = {

    ipFlask:

    "192.168.2.200",

    puertoFlask:

    "5000",

    impresora:

    "ZDesigner ZT231-203dpi ZPL",

    copias:

    1,

    mostrarConfirmaciones:

    true,

    usuarioPredeterminado:

    "NOE"

};


function obtenerUrlImpresion() {

    return

        `http://${configuracionSistema.ipFlask}:${configuracionSistema.puertoFlask}/imprimir`;

}


function obtenerImpresora() {

    return configuracionSistema.impresora;

}


function obtenerNumeroCopias() {

    return configuracionSistema.copias;

}


function guardarConfiguracion(

    nuevaConfiguracion

) {

    configuracionSistema = {

        ...configuracionSistema,

        ...nuevaConfiguracion

    };

}
