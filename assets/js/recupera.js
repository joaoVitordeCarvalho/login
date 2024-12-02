document.querySelector("form").addEventListener("submit", (e) => {

    e.preventDefault()

    const emailRecupera = document.getElementById("email").value;
    const emailCadastrado = localStorage.getItem("emailC");
    const senhaRecuperar = document.getElementById("password").value;
    const senhaConfirma = document.getElementById("password_corfirma").value;

    if ( emailCadastrado === emailRecupera) {

        if (senhaRecuperar === senhaConfirma) {

            localStorage.setItem("senhaC", senhaConfirma)
            alert("Nova senha cadastrada com sucesso")

        } else {
            
            alert("senhas não coferem")
        }

        
    } else {

        alert("email invalido")
    }

    window.location = "../index.html"
});