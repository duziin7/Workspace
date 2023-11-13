class ContaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, tipoConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.tipoConta = tipoConta;
    }
    

    contaPoupanca() {
        if (this.tipoConta === 'Poupança') {
            console.log(`Conta Poupança criada para ${this.nome}. Taxa de 1,5% ao mês.`);
        } else {
            console.log(`Essa não é uma conta Poupança. Escolha o tipo de conta correto.`);
        }
    }

    contaCorrente() {
        if (this.tipoConta === 'Corrente') {
            const taxaMensal = 3.6;
            const desconto = (this.salario * taxaMensal) / 100;
            const novoSalario = this.salario - desconto;

            console.log(`Conta Corrente criada para ${this.nome}.`);
            console.log(`Dados do usuário: Nome: ${this.nome}, Idade: ${this.idade}, Salário: ${this.salario}, Sexo: ${this.sexo}`);
            console.log(`Novo salário com desconto de ${taxaMensal}%: ${novoSalario}`);
        } else {
            console.log(`Essa não é uma conta Corrente. Escolha o tipo de conta correto.`);
        }
    }

    contaEstudante() {
        if (this.tipoConta === 'Estudante') {
            const taxaMensal = 1.2;
            const desconto = (this.salario * taxaMensal) / 100;
            const novoSalario = this.salario - desconto;

            console.log(`Conta Estudante criada para ${this.nome}.`);
            console.log(`Dados do usuário: Nome: ${this.nome}, Idade: ${this.idade}, Salário: ${this.salario}, Sexo: ${this.sexo}`);
            console.log(`Novo salário com desconto de ${taxaMensal}%: ${novoSalario}`);
        } else {
            console.log(`Essa não é uma conta Estudante. Escolha o tipo de conta correto.`);
        }
    }
}

const aluna1 = new ContaBancaria('Aluna 1', 20, 1000, 'Feminino', '001', '12345-6', 'Corrente');
const aluna2 = new ContaBancaria('Aluna 2', 22, 1200, 'Feminino', '002', '65432-1', 'Estudante');
const aluna3 = new ContaBancaria('Aluna 3', 25, 1500, 'Masculino', '003', '98765-4', 'Poupança');

aluna1.contaCorrente(); // acessando os métodos // ( . ) operador de acesso
aluna2.contaEstudante();
aluna3.contaPoupanca();
