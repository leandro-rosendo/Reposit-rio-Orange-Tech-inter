/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC*/


class Pessoa{
    nomeDaPessoa;
    pesoDaPessoa;
    alturaDaPessoa;

    constructor(nome, peso, altura){
        this.nomeDaPessoa= nome;
        this.pesoDaPessoa= peso;
        this.alturaDaPessoa= altura;
    }
    
    //Metodo para calcular IMC
    calcularIMC (){
        return (this.pesoDaPessoa/(this.alturaDaPessoa*this.alturaDaPessoa));
    }
    //Verifica a classificação do IMC
    classificarImc(){
        const imc = this.calcularIMC();

        if (imc < 18){
            return 'Você está magro!';
        }else{
            return 'Você está gordo!'
        }
        
    }
}



const pessoa1 = new Pessoa ('José', 70, 1.75);
const pessoa2 = new Pessoa ('Leandro', 82, 1.79);

//Retorno da pessoa1
console.log('Nome:',pessoa1.nomeDaPessoa+', peso:',pessoa1.pesoDaPessoa+', altura:',pessoa1.alturaDaPessoa+', o IMC é:',pessoa1.calcularIMC().toFixed(2), pessoa1.classificarImc());

//Retorno da pessoa2
console.log('Nome:',pessoa2.nomeDaPessoa+', peso:',pessoa2.pesoDaPessoa+', altura:',pessoa2.alturaDaPessoa+', o IMC é:',pessoa2.calcularIMC().toFixed(2), pessoa2.classificarImc());