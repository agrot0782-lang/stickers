async function guardarHistorial(legajos) {

    const ahora = new Date();

    const fechaTexto =

        ahora.toLocaleDateString();

    const horaTexto =

        ahora.toLocaleTimeString();

    for (const legajo of legajos) {

        const trabajador =

            tareo.find(

                x =>

                    x.legajo.toString() ===

                    legajo.toString()

            );

        await db.ref(

            "historial_stickers"

        )

        .push({

            fecha:

                fechaTexto,

            hora:

                horaTexto,

            legajo:

                legajo,

            trabajador:

                trabajador?.trabajador || "",

            supervisor:

                trabajador?.supervisor || "",

            usuario:

                usuarioActual

        });

    }

}

async function cargarHistorial(){


const snap =

    await db.ref(

        "historial_stickers"

    )

    .once(

        "value"

    );


const historial =

    Object.values(

        snap.val() || {}

    )

    .reverse();


let html = "";


historial.forEach(

    registro => {

        html += `

        <tr>

            <td>

                ${registro.fecha}

            </td>

            <td>

                ${registro.hora}

            </td>

            <td>

                ${registro.legajo}

            </td>

            <td>

                ${registro.trabajador}

            </td>

            <td>

                ${registro.supervisor}

            </td>

            <td>

                ${registro.usuario}

            </td>

        </tr>

        `;

    }

);


if(

    html === ""

){

    html = `

    <tr>

        <td colspan="6">

            Sin registros

        </td>

    </tr>

    `;

}


document
    .getElementById(

        "tablaHistorial"

    )

    .innerHTML =

    html;


}
