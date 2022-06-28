const checkFormCadastro = {
    nameAlert: false,
    emailAlert: false,
    paisAlert: false,
    senhaAlert: false,
}

document.getElementById('floatingInputName').addEventListener('input', function (e) {
    const nameAlert = e.target.value;
    if (nameAlert.length < 5 || nameAlert.length > 50) {
        document.getElementById('alertNome').style.display = "block";
        checkFormCadastro.nameAlert = false;
    } else {
        document.getElementById('alertNome').style.display = "none";
        checkFormCadastro.nameAlert = true;
    }
    enableButtonCadastro();
});

document.getElementById('floatingInputPais').addEventListener('input', function (e) {
    const paisAlert = e.target.value;
    if (paisAlert.length < 1) {
        document.getElementById('alertPais').style.display = "block";
        checkFormCadastro.paisAlert = false;
    } else {
        document.getElementById('alertPais').style.display = "none";
        checkFormCadastro.paisAlert = true;
    }
    enableButtonCadastro();
});

document.getElementById('floatingInput').addEventListener('input', function (e) {
    const emailAlert = e.target.value;
    if (emailAlert.length < 5) {
        document.getElementById('alertEmail').style.display = "block";
        checkFormCadastro.emailAlert = false;
    } else {
        document.getElementById('alertEmail').style.display = "none";
        checkFormCadastro.emailAlert = true;
    }
    enableButtonCadastro();
});

document.getElementById('floatingPassword').addEventListener('input', function (e) {
    const senhaAlert = e.target.value;
    if (senhaAlert.length < 8) {
        document.getElementById('alertSenha').style.display = "block";
        checkFormCadastro.senhaAlert = false;
    } else {
        document.getElementById('alertSenha').style.display = "none";
        checkFormCadastro.senhaAlert = true;
    }
    enableButtonCadastro();
});



function enableButtonCadastro() {
    const buttonEnviar = document.getElementById("buttonCadastrar");
    if (checkFormCadastro.nameAlert && checkFormCadastro.emailAlert && checkFormCadastro.paisAlert && checkFormCadastro.senhaAlert) {
            buttonEnviar.disabled = false;
    } else {
        buttonEnviar.disabled = true;
    }
}