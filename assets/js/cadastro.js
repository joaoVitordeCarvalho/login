const btnCadastra = document.getElementById("cadastra")
const form = document.querySelector("form")

form.addEventListener("submit", (event)=> {

    event.preventDefault();

    const emailCadastro = document.getElementById("email").value;
    const senhaCadastro = document.getElementById("password").value;
    const senhaConfirma = document.getElementById("password_confirma").value;


    if (senhaCadastro=== senhaConfirma) {
        

        //salvar em localstorage o valor do email cadastrado

        localStorage.setItem("emailC", emailCadastro)
        localStorage.setItem("senhaC", senhaCadastro)
        
        window.location.href = "../index.html"

    } else {

        alert("!!!Senha não compativel!!!")
    }
});