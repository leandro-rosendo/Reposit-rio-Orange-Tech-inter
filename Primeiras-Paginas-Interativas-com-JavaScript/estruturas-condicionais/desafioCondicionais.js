/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:

1 - Preço do etanol;
2 - Preço da gasolina
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem.

Imprimir no console o valor que será gasto para realizar esta viagem.*/


const precoEtanol = 3.5;
const precoGasolina = 4.8;
const distancia_em_KM = 200;
const tipoCombustivel = 'gasolina';//Indique aqui o tipo de combustível 
const consumoMedioPorKm = 10;

let custoViagem = 0;

//Se o combustível for etanol, executa o calculo e imprime as duas mensagens na tela

if (tipoCombustivel == 'etanol'){
    custoViagem = (distancia_em_KM/consumoMedioPorKm)*precoEtanol;
    console.log('O combustível do seu carro é Etanol')
    console.log('O custo da viagem é de R$= ', custoViagem);

//se for gasolina, executa essa sequência.

} else {
    custoViagem = (distancia_em_KM/consumoMedioPorKm)*precoGasolina;
    console.log('O combustível do seu carro é Gasolina')
    console.log('O custo da viagem é de R$= ', custoViagem);
}