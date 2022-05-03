function validarFormulario(){
    let nome = document.getElementById("txtNome").value;
    if (nome == ''){
        //alert("Nome obrigatório");
        document.getElementById("divFeedback").innerHTML = "Nome obrigatório";
    }
}

function validarCpf(){
    let cpf = document.getElementById("txtCpf").value;
    if (cpf.length != 11){
        document.getElementById("txtCpf").value = '';
        alert("CPF é inválido");
    }
}