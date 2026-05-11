// Questão 3
// Crie um arquivo Questao_03.js
// No arquivo, declare alguma(s) estrutura(s)(exemplo: variável) para:
// - Receber a string “João da Silva” (nome de um aluno);
// - Receber um inteiro 7 (primeira nota do aluno);
// - Receber um real 8.5 (segunda nota do aluno);
// - Receber o valor da multiplicação da primeira nota do aluno por 0.6;
// - Receber o valor da multiplicação da segunda nota do aluno por 0.4;
// - Receber a soma destas últimas variáveis.
// - Crie uma mensagem de alerta para informar o nome e as notas individuais do aluno.
// - Crie uma mensagem de alerta para informar a nota total do aluno
// - Mostre os dados de, no mínimo, 3 alunos
// Crie a página Questao_03.html e mostre o resultado.

function calcularEExibir(nome, n1, n2) {
    let nota1Ponderada = n1 * 0.6;
    let nota2Ponderada = n2 * 0.4;
    let notaTotal = nota1Ponderada + nota2Ponderada;

    alert("Aluno: " + nome + "\nNota 1: " + n1 + "\nNota 2: " + n2);
    alert("Nome: " + nome + "\nNota Total: " + notaTotal);
}

// Aluno 1
calcularEExibir("Ágata de Andrade", 10, 6.5);

// Aluno 2
calcularEExibir("Levi Albuquerque", 9, 3.0);

// Aluno 3
calcularEExibir("Maisa Silva", 8, 7.5);