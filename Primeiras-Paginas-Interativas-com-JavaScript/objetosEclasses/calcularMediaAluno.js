class Aluno{
    nomeDoAluno;
    nota01;
    nota02;
    nota03;

    constructor (nome, nota1, nota2, nota3){
        this.nomeDoAluno= nome;
        this.nota01= nota1;
        this.nota02= nota2;
        this.nota03= nota3;
    }
    //Metodo que calcula a média de três notas
    calcularMedia(){
        return ((this.nota01+this.nota02+this.nota03)/3);
           
    }
    //Metodo que verifica a situaçãp do aluno
    situacaoDoAluno(){
        const media = this.calcularMedia();

        if (media < 5){
            return 'Você está reprovado por média!';
        }else
        if (media >= 5 && media < 7){
            return 'Você está em recuperação!';
        }else {
            return 'Você está Aprovado!';
        }
    }
}

const aluno1 = new Aluno ('Leo', 1, 7, 5);
console.log('O aluno:',aluno1.nomeDoAluno+ ', tem média: ',aluno1.calcularMedia() .toFixed(2));
console.log(aluno1.situacaoDoAluno());