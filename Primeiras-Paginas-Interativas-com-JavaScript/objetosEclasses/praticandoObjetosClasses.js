/*Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilometro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.*/

//
class Carro {
    marcaDoCarro;
    corDoCarro;
    gastoMedioPorKilometro;

    constructor (marca, cor,  gastoMedio){
        this.marcaDoCarro = marca;
        this.corDoCarro = cor;
        this.gastoMedioPorKilometro = gastoMedio;
    }
    //Metodo para calcular o custo da viagem
    calcularGastoMedioDaViagem(distancia, precoCombustivel){
        return (distancia/this.gastoMedioPorKilometro)*precoCombustivel;
    }
}

/*function gastomeidoCombustivel(){
    const precoGasolina= 4.80;
    const distanciaDaViagem= 150;
    
    custoDaViagem = (distanciaDaViagem/10)*precoGasolina;

    return  custoDaViagem;

}*
custo = gastomeidoCombustivel();*/

const celta = new Carro( 'Volksvagem', 'azul', 10);
custo = celta.calcularGastoMedioDaViagem(180, 4.85);

console.log('O nome do carro é:',celta.marcaDoCarro+'. A cor do Carro é:',celta.corDoCarro+'. O custo da viagem será de: R$=',custo .toFixed(2));