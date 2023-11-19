function calcularNovoSalario() {

    var salarioAtual = parseFloat(document.getElementById('salarioAtual').value);

    var aumento = salarioAtual * 0.17;

    var novoSalario = salarioAtual + aumento + 215;

    document.getElementById('resultado').innerText = 'Novo salário: R$ ' + novoSalario.toFixed(2);
}
