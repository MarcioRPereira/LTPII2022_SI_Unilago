controle = 'NUMERO1';
operador = '';

function executarCalculo(operador){
    recuperarNumeros();
    if(!validarCampos()) return;
    calcular(operador);
    imprimirResultado();
    limparCampos();
}

function calcular(operador){
    if (operador == '+'){
        resultado = somar();
    }else if(operador == "-"){
        resultado = subtrair();
    }else if(operador == '/'){
        resultado = dividir();
    }else if(operador == '*'){
        resultado = multiplicar();
    }
}

function recuperarNumeros(){
    numero1 = parseFloat(document.getElementById("txtNumero1").value);
    numero2 = parseFloat(document.getElementById("txtNumero2").value);
}

function validarCampos(){
    if ((isNaN(numero1)) || (isNaN(numero2))){
        document.getElementById("divResultado").innerHTML = "Digite os dois números";
        return false;
    }else{
        return true;
    }
}

function imprimirResultado(){
    document.getElementById("divResultado").innerHTML = resultado;
}

function limparCampos(){
    document.getElementById("txtNumero1").value = "";
    document.getElementById("txtNumero2").value = "";
    controle = 'NUMERO1';
    operador = '';
}

function somar(){
    return numero1 + numero2;
}

function subtrair(){
    return numero1 - numero2;
}

function dividir(){
    return numero1 / numero2;
}

function multiplicar(){
    return numero1 * numero2;
}

function capturarNumero(valor){
    let idInput = 'txtNumero1';
    if (controle == 'NUMERO2'){
        idInput = 'txtNumero2';
    }
    let txtNumero = document.getElementById(idInput);
    let valorAtual = txtNumero.value;
    txtNumero.value = valorAtual + valor;
}

function capturarOperador(valor){
    controle = 'NUMERO2';
    operador = valor;
}

function capturarIgual(){
    executarCalculo(operador);
}