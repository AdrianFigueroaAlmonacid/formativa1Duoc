const formularioDgames = document.getElementById("formulario-dgames");

const inputName = document.getElementById("inputName");
const inputLastName = document.getElementById("inputLastName");
const inputUser = document.getElementById("inputUser");
// const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
const inputPassword2 = document.getElementById("inputPassword2");
const inputDate = document.getElementById("inputDate");


const alertSuccess = document.getElementById("alertSuccess");
const alertName = document.getElementById("alertName");
const alertLastName = document.getElementById("alertLastName");
const alertPass = document.getElementById("alertPass");


// const alertEmail = document.getElementById("alertEmail");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
// const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
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

    document.getElementById('nombre-error').innerHTML = '';
    document.getElementById('apellido-error').innerHTML = '';
    document.getElementById('password2-error').innerHTML = '';


    // VALIDAR NOMBRE
    const valorInput = inputName.value.trim();

    if (regUserName.test(valorInput) && valorInput.length > 0) {

        console.log("El nombre contiene solo letras y no está vacío.");
        inputName.classList.remove("is-invalid");
        inputName.classList.add("is-valid");
        // alertName.classList.add("d-none");

    } else {
        document.getElementById('nombre-error').innerHTML = 'El nombre está vacío o no cumple con el formato de letras';

        console.log("El nombre está vacío o no cumple con el formato de letras.");
        inputName.classList.add("is-invalid");
        errores.push({
            tipo: alertName,
            msg: "Formato no válido campo apellido, solo letras",
        });

    }


    // VALIDAR APELLIDO
    const valorInput2 = inputLastName.value.trim();
    if (regUserName.test(valorInput2) && valorInput2.length > 0) {

        console.log("El nombre contiene solo letras y no está vacío.");
        inputLastName.classList.remove("is-invalid");
        inputLastName.classList.add("is-valid");
        // alertLastName.classList.add("d-none");

    } else {
        document.getElementById('apellido-error').innerHTML = 'El apellido está vacío o no cumple con el formato de letras';

        console.log("El apellido está vacío o no cumple con el formato de letras.");
        inputLastName.classList.add("is-invalid");
        errores.push({
            tipo: alertLastName,
            msg: "Formato no válido campo apellido, solo letras",
        });

    }

    // VALIDAR USER
    if (inputUser.value.trim().length > 0) {
        inputUser.classList.add("is-valid");
    } else {
        inputUser.classList.add("is-invalid");
    }


    // validar contraseña

    if (inputPassword2.value.trim() === inputPassword.value.trim()) {
        console.log("contraseña ok");
        inputPassword.classList.add("is-valid");
        inputPassword2.classList.add("is-valid");
    } else {
        inputPassword2.classList.add("is-invalid");
        document.getElementById('password2-error').innerHTML = 'Contraseña incorrecta';
        console.log("contraseña mal");
    }


    if (errores.length !== 0) {
        mensajeError(errores);
        return;
    }

    console.log("Formulario enviado con éxito");
    mensajeExito();
});
