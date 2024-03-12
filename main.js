const formularioDgames = document.getElementById("formulario-dgames");

const inputName = document.getElementById("inputName");
const inputLastName = document.getElementById("inputLastName");
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
const inputPassword2 = document.getElementById("inputPassword2");
const inputDate = document.getElementById("inputDate");



const alertSuccess = document.getElementById("alertSuccess");
const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regPass = /^(?=.*[A-Z])(?=.*\d).+$/;

const mensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Mensaje enviado con éxito";
};

const mensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });
};

formularioDgames.addEventListener("submit", (e) => {
    e.preventDefault();

    alertSuccess.classList.add("d-none");
    const errores = [];

    // let namePerson = inputName.value.trim();
    // // validar nombre
    // if (!regUserName.test(inputName.value) || !namePerson) {
    //     inputName.classList.add("is-invalid");

    //     errores.push({
    //         tipo: alertName,
    //         msg: "Formato no válido campo nombre, solo letras",
    //     });
    // } else {
    //     inputName.classList.remove("is-invalid");
    //     inputName.classList.add("is-valid");
    //     alertName.classList.add("d-none");
    // }


    const miInput = document.getElementById("miInput");
    const regExpLetras = /^[A-Za-z]+$/;

    // Evento para validar cuando se pierde el foco del input
    inputName.addEventListener("blur", () => {
        const valorInput = miInput.value.trim(); // Elimina espacios en blanco al inicio y al final

        if (regUserName.test(valorInput)) {
            console.log("El input contiene solo letras.");
            // Aquí puedes realizar otras acciones si el input es válido
        } else {
            console.log("El input no cumple con el formato de letras.");
            // Aquí puedes mostrar un mensaje de error o realizar otras acciones si el input no es válido
        }
    });




    // validar apellido
    if (!regUserName.test(inputLastName.value) || !inputLastName.value.trim()) {
        inputLastName.classList.add("is-invalid");

        errores.push({
            tipo: alertName,
            msg: "Formato no válido campo apellido, solo letras",
        });
    } else {
        inputLastName.classList.remove("is-invalid");
        inputLastName.classList.add("is-valid");
        alertName.classList.add("d-none");
    }

    // validar email
    if (!regUserEmail.test(inputEmail.value) || !inputEmail.value.trim()) {
        inputEmail.classList.add("is-invalid");

        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo válido",
        });
    } else {
        inputEmail.classList.remove("is-invalid");
        inputEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }

    // validar email
    if (!regUserEmail.test(inputEmail.value) || !inputEmail.value.trim()) {
        inputEmail.classList.add("is-invalid");

        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo válido",
        });
    } else {
        inputEmail.classList.remove("is-invalid");
        inputEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }



    // validar contraseña

    if (inputPassword == inputPassword2) {



    }

    if (errores.length !== 0) {
        mensajeError(errores);
        return;
    }

    console.log("Formulario enviado con éxito");
    mensajeExito();
});
