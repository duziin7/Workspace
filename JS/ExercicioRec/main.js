function verificarEstacao() {

    var mes = document.getElementById('mesInput').value.toLowerCase();
    var estacao;

    switch (mes) {
        case 'março':
        case 'janeiro':
        case 'fevereiro':
            estacao = 'Verão';
            break;
        case 'junho':
        case 'abril':
        case 'maio':
            estacao = 'Outono';
            break;
        case 'setembro':
        case 'julho':
        case 'agosto':
            estacao = 'Inverno';
            break;
        case 'dezembro':
        case 'outubro':
        case 'novembro':
            estacao = 'Primavera';
            break;
        default:
            estacao = 'Mês inválido';
    }

    document.getElementById('resultado').innerText = 'Você escreveu o mês de ' + mes + ', e a estação desse mês é ' + estacao + '.'
    // var resultadoMsg = 'Você escreveu o mês de ' + mes + ', e a estação desse mês é ' + estacao + '.';
    // document.getElementById('resultado').innerText = resultadoMsg;
}