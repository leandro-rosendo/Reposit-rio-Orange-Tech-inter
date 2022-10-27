/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1- Preço do combustivel;
2- Gasto médio de combustível do carro por KM;
3- Distância em KM da viagem.
*/

const precoCombustivel = 5.79;
const consumoPorKM = 10;
const distanciaTotalemKM = 100;
let gastoTotalViagem = 0;

gastoTotalViagem = (distanciaTotalemKM/consumoPorKM)*precoCombustivel;

console.log (gastoTotalViagem.toFixed(2));
