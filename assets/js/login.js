// =================== SHOW HIDDEN - PASSAWORD
const showHiddenPassaword = () => {
    const input =  document.getElementById("login-pass");
    const iconEye = document.getElementById("login-eye");

   iconEye.addEventListener("click", () => {
    // change passwork to text

if (input.type === 'password') {
    // switch to text
    input.type = 'text';

    // icon change
    iconEye.classList.remove('ri-eye-off-line');

    iconEye.classList.add('ri-eye-line');

    
} else {
    // change to passaword
    input.type = 'password';
    iconEye.classList.add('ri-eye-off-line')
}
   });
};

showHiddenPassaword();


let tentativas = 0

document.querySelector("form").addEventListener("submit",(event) => {

    event.preventDefault();

    const emailLogin = document.getElementById("email").value;
    const senhaLogin = document.getElementById("password").value;

//RECUPERAR DADOS DO LOCAL STORAGE

    const email_cadastro = localStorage.getItem("emailC");
    const senha_cadastro = localStorage.getItem("senhaC");

   
    if (emailLogin === email_cadastro && senhaLogin === senha_cadastro) {
        
        alert("login realizado com sucesso")
    } else {

        if (emailLogin !== email_cadastro) {
            alert("email não cadastrado")
        }

        if (senhaLogin !== senha_cadastro) {
            alert("senha nao cofere")
           
            tentativas +=1;

            alert(`tentativa ${tentativas}/3`)

            if (tentativas === 3) {
                alert("senha bloqueada por tentativas invalidas")

                window.location = "./pages/recupera.html"
            }
        }
    }





});



