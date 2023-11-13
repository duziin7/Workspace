const botoes = document.querySelectorAll('.B_12')

botoes.forEach(botao => {
    botao.style.border = '2px solid #D9BC66';
    botao.style.padding = '.5rem';
    botao.style.backgroundColor = '#BFBFBF';
    botao.style.margin = '.7rem';
});

// Função para calcular e exibir a tabuada do número informado
function calcularTabuada() {
    // Solicita um número ao usuário usando um prompt
    const numero = prompt('Informe um número:');

    // Verifica se o usuário clicou em OK e se informou um número
    if (numero !== null && numero !== '') {
        // Converte o número para inteiro
        const numeroInteiro = parseInt(numero);

        // Verifica se o valor informado é um número
        if (!isNaN(numeroInteiro)) {
            // Cria um elemento de lista não ordenada (ul)
            const ul = document.createElement('ul');

            // Gera a tabuada do número e adiciona cada item à lista
            for (let i = 1; i <= 10; i++) {
                const li = document.createElement('li');
                li.textContent = `${numeroInteiro} x ${i} = ${numeroInteiro * i}`;
                ul.appendChild(li);
            }

            // Insere a lista abaixo do botão
            document.body.appendChild(ul);
        } else {
            alert('Por favor, informe um número válido.');
        }
    }
}
