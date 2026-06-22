async function actualizarReimpresiones() {


const snap =

    await db.ref(

        "historial_stickers"

    )

    .once(

        "value"

    );


reimpresiones =

    Object.values(

        snap.val() || {}

    );


document
    .getElementById(
        "totalReimpresiones"
    )
    .innerText =

    reimpresiones.length;


}

function obtenerTopReimpresiones() {


let contador = {};

reimpresiones.forEach(

    registro => {

        contador[
            registro.legajo
        ] =

            (

                contador[
                    registro.legajo
                ]

                ||

                0

            )

            +

            1;

    }

);

return contador;


}


async function reimprimir(
legajo
){


try{

    const respuesta =

        await fetch(

            "http://192.168.6.5:5000/imprimir",

            {

                method:"POST",

                headers:{

                    "Content-Type":

                    "application/json"

                },

                body:JSON.stringify({

                    legajos:[

                        legajo

                    ]

                })

            }

        );


    const data =

        await respuesta.json();


    await guardarHistorial(

        [

            legajo

        ]

    );


    await cargarHistorial();


    await actualizarReimpresiones();


    alert(

        "Sticker reenviado"

    );

}

catch(error){

    console.error(

        error

    );

    alert(

        "Error al reimprimir"

    );

}


}

