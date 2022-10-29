/* Fazer um algoritimo para calcular a média aritmetica de 3 notas de um aulano.
Os critérios de classificação, são os seguintes:

- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre.*/

//Declaração das variáveis e constantes.

const nota1 = 5;
const nota2 = 6;
const nota3 = 10;
let media = 0;

media = (nota1+nota2+nota3)/3;

if (media < 5){
    console.log('Aluno está reprovado com média ', media.toFixed(2));
}
else if ((media >= 5) && (media < 7)){
    console.log('Aluno está em recuperação com média ', media.toFixed(2));
}
else {
    console.log('Aluno aprovado com média ', media.toFixed(2));
}