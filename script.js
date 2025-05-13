// função para adicionar dados no visor
function appendToDisplay(value) {
    //console.log("clique botão", value);
    const display = document.getElementById('display');
    display.value += value;
    //console.log("display", display.value);
}

// função pata limpeza do visor
function clearDisplay() {
    //console.log("limpando o visor");
    const display = document.getElementById('display');
    display.value = '';
    //console.log("limpou o visor");
}

// calculo da calculadora
function resultCalculator() {
    const display = document.getElementById('display');
    const conta = display.value;
    //console.log("resultado", conta);
    try {
        const result = eval(conta);
        display.value = result;
        //console.log("resultado final", result);
    } catch(error) {
        console.log("erro", error);
        alert("Expressão com erro!")   
    }
}