controle = 'NUMERO1';
operador = '';
numero1 = '';
numero2 = '';

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
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
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
    numero1 = '';
    numero2 = '';
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
    /*
    let idInput = retornaInput();

    let txtNumero = document.getElementById(idInput);
    let valorAtual = txtNumero.value;

    txtNumero.value = valorAtual + valor;
    */
    if(controle == "NUMERO1"){
        numero1 = numero1 + valor;
    }else{
        numero2 = numero2 + valor;
    } 
}

function capturarOperador(valor){
    controle = 'NUMERO2';
    operador = valor;
}

function capturarIgual(){
    executarCalculo(operador);
}

function capturaDecimal(){
    /*let idInput = retornaInput();
    let txtNumero = document.getElementById(idInput);
    let valorAtual = txtNumero.value;
    if(valorAtual.indexOf(".") == -1){
        txtNumero.value = valorAtual + ".";
    }
    */
    if(controle == "NUMERO1"){
        if(numero1.indexOf(".") == -1) numero1 = numero1 + ".";
    }else{
        if(numero2.indexOf(".") == -1) numero2 = numero2 + ".";
    }    
}

function retornaInput(){
    let idInput = 'txtNumero1';
    if (controle == 'NUMERO2'){
        idInput = 'txtNumero2';
    }
    return idInput;
}