const checkForm = {
    nameAlert: false,
    telefoneAlert: false,
    namecartaoAlert: false,
    codigoAlert: false,
}


document.getElementById('floatingInputNome').addEventListener('input', function (e) {
    const nameAlert = e.target.value;
    if (nameAlert.length < 5 || nameAlert.length > 50) {
        document.getElementById('alertNome').style.display = "block";
        checkForm.nameAlert = false;
    } else {
        document.getElementById('alertNome').style.display = "none";
        checkForm.nameAlert = true;
    }
    enableButton();
});

document.getElementById('floatingNumero').addEventListener('input', function (e) {
    const telefoneAlert = e.target.value;
    if (telefoneAlert.length != 16) {
        document.getElementById('alertNumero').style.display = "block";
        checkForm.telefoneAlert = false;
    } else {
        document.getElementById('alertNumero').style.display = "none";
        checkForm.telefoneAlert = true;
    }
    enableButton();
});

document.getElementById('floatingInputNomecartao').addEventListener('input', function (e) {
    const namecartaoAlert = e.target.value;
    if (namecartaoAlert.length < 5 || namecartaoAlert.length > 50) {
        document.getElementById('alertNomeCartao').style.display = "block";
        checkForm.namecartaoAlert = false;
    } else {
        document.getElementById('alertNomeCartao').style.display = "none";
        checkForm.namecartaoAlert = true;
    }
    enableButton();
});

document.getElementById('floatingInputCodigo').addEventListener('input', function (e) {
    const codigoAlert = e.target.value;
    if (codigoAlert.length != 3) {
        document.getElementById('alertCodigo').style.display = "block";
        checkForm.codigoAlert = false;
    } else {
        document.getElementById('alertCodigo').style.display = "none";
        checkForm.codigoAlert = true;
    }
    enableButton();
});

function enableButton() {
    const buttonEnviar = document.getElementById("buttonCadastrar");
    if (checkForm.nameAlert && checkForm.telefoneAlert && checkForm.namecartaoAlert && checkForm.codigoAlert) {
            buttonEnviar.disabled = false;
    } else {
        buttonEnviar.disabled = true;
    }
}
