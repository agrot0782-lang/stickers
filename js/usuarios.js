function cargarUsuario() {

    return {

        nombre:

        usuarioActual,

        rol:

        "Administrador",

        color:

        "#2E7D32",

        ultimoAcceso:

        new Date()
        .toLocaleString()

    };

}


function actualizarUltimoAcceso() {

    const usuario =

        cargarUsuario();

    usuario.ultimoAcceso =

        new Date()
        .toLocaleString();

    return usuario;

}