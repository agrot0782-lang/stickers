async function imprimir() {


let seleccionados = [];

document
    .querySelectorAll(
        ".chkTrabajador:checked"
    )
    .forEach(

        chk => {

            seleccionados.push(
                chk.value
            );

        }

    );


const manuales =

    document
    .getElementById(
        "manualesTexto"
    )
    .value
    .split("\n")
    .map(
        x => x.trim()
    )
    .filter(Boolean);


seleccionados.push(

    ...manuales

);


if (

    seleccionados.length === 0

){

    alert(

        "No hay trabajadores seleccionados"

    );

    return;

}


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

                    legajos:

                    seleccionados

                })

            }

        );


   const data =

    await respuesta.json();


await guardarHistorial(

    seleccionados

);


alert(

    "Impresos: " +

    data.cantidad

);

}

catch(error){

    console.error(

        error

    );

    alert(

        "Error al conectar con Flask"

    );

}


}

