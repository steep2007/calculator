var memoria1 = 0;
var memoria2 = 0;
var operacao = '';

function pegaTecla(tecla) {
    var saida = document.getElementById('saida');
    saida.value = saida.value + tecla.innerHTML;

    if (tecla.innerHTML == 'C'){
        saida.value = '';
    }

    else if (tecla.innerHTML == '×' || tecla.innerHTML == '+' || tecla.innerHTML == '-' || tecla.innerHTML == '÷') {
        memoria1 = parseInt(saida.value);
        saida.value = '';
        operacao = tecla.innerHTML
    }

    else if (tecla.innerHTML == '=') {
        memoria2 = parseInt(saida.value);
        if (operacao == '×') {
            saida.value = memoria1 * memoria2;
        }
        if (operacao == '-') {
            saida.value = memoria1 - memoria2;
        }
        if (operacao == '+') {
            saida.value = memoria1 + memoria2;
        }
        if (operacao == '÷') {
            saida.value = memoria1 / memoria2;
        }
    }
}

