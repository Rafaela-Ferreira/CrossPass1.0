const showJogos = (jogos) => {
    // console.log('Cheguei no show products');
    console.log(jogos);

    // console.log(products.length);

    for (let i = 0; i < jogos.length; i++) {
        console.log(jogos[i].name);

        /*<div class="col-3">
                  <img src="assets/IMG/cyberpunk-2077_444.jpg" class="img-fluid" alt="...">
                  <p>Cyberpunk 2077</p>
                  <button type="submit" class="btn btn-outline-info" >Jogar</button>
                </div>*/

        let tagDivCol = document.createElement('div');
        tagDivCol.setAttribute('class', 'col-3');


        let tagImage = document.createElement('img');
        tagImage.setAttribute('class', 'img-fluid');
        tagImage.setAttribute('src', jogos[i].image);
        tagImage.setAttribute('alt', jogos[i].name);

        tagDivCol.appendChild(tagImage);

        let tagP = document.createElement('p');
        textNode = document.createTextNode(jogos[i].name);
        tagP.appendChild(textNode);
        tagDivCol.appendChild(tagP);

        let tagButton = document.createElement('button');
        tagButton.setAttribute('type', 'submit');
        tagButton.setAttribute('class', 'btn btn-outline-info');
        textNode = document.createTextNode("Jogar");
        tagButton.appendChild(textNode);
        tagDivCol.appendChild(tagButton);

        

        let tagDivJogos = document.getElementById('aqui');
        tagDivJogos.appendChild(tagDivCol);
    }
}

const fetchJogos = () => {
    //console.log("Cheguei na script para carregar os produtos");
    //Carrega os produtos do banco de dados. 
    //Endereço da api http://localhost:8000/GetProducts.php
    fetch('http://localhost:8000/getjogos.php')
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText);
        })
        .then((jogos) => {
            showJogos(jogos);
        })
        .catch((error) => {
            console.log(error);
        });
}


const checkForm = {
    nameAlert: false,
    emailAlert: false,
    telefoneAlert: false,
    categoriaAlert: false,
    mensagemAlert: false,
}

document.getElementById('floatingName').addEventListener('input', function (e) {
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

document.getElementById('floatingInputEmail').addEventListener('input', function (e) {
    const emailAlert = e.target.value;
    if (emailAlert.length < 5) {
        document.getElementById('alertEmail').style.display = "block";
        checkForm.emailAlert = false;
    } else {
        document.getElementById('alertEmail').style.display = "none";
        checkForm.emailAlert = true;
    }
    enableButton();
});

document.getElementById('floatingNumero').addEventListener('input', function (e) {
    const telefoneAlert = e.target.value;
    if (telefoneAlert.length != 11) {
        document.getElementById('alertNumero').style.display = "block";
        checkForm.telefoneAlert = false;
    } else {
        document.getElementById('alertNumero').style.display = "none";
        checkForm.telefoneAlert = true;
    }
    enableButton();
});

document.getElementById('floatingSelect').addEventListener('change', function(e) {
    const categoriaAlert = e.target.value;
    if(categoriaAlert != 0){
        document.getElementById('alertCategoria').style.display = "none";
        checkForm.categoriaAlert = true;
    } else {
        document.getElementById('alertCategoria').style.display = "block";
        checkForm.categoriaAlert = false;
    }
    enableButton();
})

document.getElementById('floatingTextarea2').addEventListener('input', function (e) {
    const mensagemAlert = e.target.value
    if(mensagemAlert.length < 5) {
        document.getElementById('alertMensagem').style.display = "block"
        checkForm.mensagemAlert = false;
    }else{
        document.getElementById('alertMensagem').style.display = "none"
        checkForm.mensagemAlert = true;
    }
    enableButton();
});



function enableButton() {
    const buttonEnviar = document.getElementById("buttonCadastrar");
    if (checkForm.nameAlert && checkForm.emailAlert && checkForm.telefoneAlert && checkForm.categoriaAlert && mensagemAlert) {
            buttonEnviar.disabled = false;
    } else {
        buttonEnviar.disabled = true;
    }
}
