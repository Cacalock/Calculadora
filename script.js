let display = document.getElementById("display");

function adicionar(valor) {
    display.value += valor;
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Erro";
    }
}

function limpar() {
    display.value = "";
}
