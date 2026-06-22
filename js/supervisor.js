async function cargarDatos() {


try {

    const tareoSnap =
        await db.ref("tareo")
        .once("value");

    tareo =
        Object.values(
            tareoSnap.val() || {}
        );

    const terrapuertoSnap =
        await db.ref("terrapuerto")
        .once("value");

    terrapuerto =
        terrapuertoSnap.val() || {};

    cargarSupervisores();

}

catch (error) {

    console.error(
        "Error al cargar datos:",
        error
    );

}


}

function cargarSupervisores() {


const supervisores =

    [...new Set(

        tareo
            .map(
                x => x.supervisor
            )
            .filter(Boolean)

    )]

        .sort();

const select =

    document.getElementById(
        "supervisor"
    );

select.innerHTML =

    `<option value="">

        Seleccione supervisor

    </option>`;

supervisores.forEach(nombre => {

    select.innerHTML +=

        `<option value="${nombre}">

            ${nombre}

        </option>`;

});


}
