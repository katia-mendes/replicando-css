/*
Case sensitive: reconhece letras Maiusculas e minusculas
pode acessar por:
TAG : getElementByTagName()
ID : getElementById()
NOME: getElementsByName
CLASSE: get ElementsByClassName()
SELECT  : querySelector()
*/
let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#mensagem");
var nomeOk = "false";

nome.style.width = "100%";
email.style.width = "100%";
mensagem.style.width = "100%";


function validarNome() {
    let txtNome = document.querySelector("#txtNome");
    if (nome.value.length <= 3) {
        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.color = "red";
        let nomeOk = "false";
        let emailOk = "false";
        let mensagemOk = "false";


    } else {
        txtNome.innerHTML = "Nome Válido!"
        txtNome.style.color = "green";
        nomeOk = "true";
    }
}

function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail");
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Email inválido!";
        txtEmail.style.color = "red";

    } else {
        txtEmail.innerHTML = "Email Válido!";
        txtEmail.style.color = "green";
        emailOk = "true";
    }
};

function validarMensagem() {
    let mensagem = document.querySelector("#mensagem");
    if (mensagem.value.length >= 100) {
        mensagem.innerHTML = "O seu texto é muito grande, digite no máximo 100 caracteres";
        mensagem.style.color = "red";
        mensagem.style.display= "block";

    } else {
        mensagem.style.display= "none";
        mensagem.style.color = "green";
        mensagemOk = "true";
    }
};

function enviarForm() {
    if (nomeOk == true && emailOk == true && mensagemOk == true) {
        alert("Formulário enviado com sucesso!!!" + nome.value);

    }
    else {
        alert("Preencha o Formulário corretamente antes de enviar");
    }
};