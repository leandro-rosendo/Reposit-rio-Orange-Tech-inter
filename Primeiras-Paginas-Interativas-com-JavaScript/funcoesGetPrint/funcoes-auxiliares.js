/*Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
]Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23

Saída:
98
*/


function gets(){
const aluno1= 5;
const aluno2= 50;
const aluno3= 10;
const aluno4= 98;
const aluno5= 23;

    if (aluno1>aluno2 && aluno1>aluno3 && aluno1>aluno4 && aluno1>aluno5){
        return aluno1;
    }else
    if (aluno2>aluno3 && aluno2>aluno4 && aluno2>aluno5){
        return aluno2;
    }else
    if (aluno3>aluno4 && aluno3>aluno5){
        return aluno3;
    }else
    if (aluno4>aluno5){
        return aluno4;
    }else{
        return aluno5;
    }
    	
}

function print(texto){
	return 'Este é o maior número!!'
}

module.exports = {gets, print};