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


    // VALIDAR NOMBRE
    const valorInput = inputName.value.trim(); // Elimina espacios en blanco al inicio y al final

    if (regUserName.test(valorInput)) {
        console.log("El input contiene solo letras.");
        // Aquí puedes realizar otras acciones si el input es válido
    } else {
        console.log("El input no cumple con el formato de letras.");
        // Aquí puedes mostrar un mensaje de error o realizar otras acciones si el input no es válido
    }


    // VALIDAR APELLIDO
    const valorInput2 = inputName.value.trim(); // Elimina espacios en blanco al inicio y al final

    if (regUserName.test(valorInput2)) {
        console.log("El input contiene solo letras.");
        // Aquí puedes realizar otras acciones si el input es válido
    } else {
        console.log("El input no cumple con el formato de letras.");
        // Aquí puedes mostrar un mensaje de error o realizar otras acciones si el input no es válido
    }



    // validar apellido
    // if (!regUserName.test(inputLastName.value) || !inputLastName.value.trim()) {
    //     inputLastName.classList.add("is-invalid");

    //     errores.push({
    //         tipo: alertName,
    //         msg: "Formato no válido campo apellido, solo letras",
    //     });
    // } else {
    //     inputLastName.classList.remove("is-invalid");
    //     inputLastName.classList.add("is-valid");
    //     alertName.classList.add("d-none");
    // }



    // validar email
    // if (!regUserEmail.test(inputEmail.value) || !inputEmail.value.trim()) {
    //     inputEmail.classList.add("is-invalid");

    //     errores.push({
    //         tipo: alertEmail,
    //         msg: "Escriba un correo válido",
    //     });
    // } else {
    //     inputEmail.classList.remove("is-invalid");
    //     inputEmail.classList.add("is-valid");
    //     alertEmail.classList.add("d-none");
    // }



    // validar contraseña

    if (inputPassword.value.trim() === inputPassword2.value.trim()) {
        // inputEmail.classList.remove("is-invalid");
        // inputEmail.classList.add("is-valid");
        // alertEmail.classList.add("d-none");
        console.log("contraseña ok");


    } else {
        // errores.push({
        //     tipo: alertEmail,
        //     msg: "las contraseñas deben ser iguales",
        // });
        console.log("contraseña mal");

    }

    if (errores.length !== 0) {
        mensajeError(errores);
        return;
    }

    console.log("Formulario enviado con éxito");
    mensajeExito();
});
