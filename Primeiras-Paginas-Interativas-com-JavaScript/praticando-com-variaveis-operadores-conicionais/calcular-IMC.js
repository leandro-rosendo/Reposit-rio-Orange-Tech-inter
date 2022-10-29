/*O IMC - Indice de Massa Corporal, é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:
- Menos de 18,5 Abaixo do peso;
- Entre 18,5 e 25 Peso normal;
- Entre 25,01 e 30 Acima do Peso;
- Entre 30,01 e 40 Obeso;
- Acima de 40,01 Obesidade grave.*/


//Declaração das variáveis constantes
const peso = 80;
const altura = 1.79;
let imc = 0;

//Calculo do IMC
imc = peso/(altura*altura);

//Verificando critérios de classificação
if (imc < 18.5){
    console.log('Você está abaixo do peso com o IMC ',imc.toFixed(2));
}else
if (imc > 18.51 && imc <= 25){
    console.log('Você está no peso ideal com o IMC ',imc.toFixed(2));
}else
if (imc >25.01 && imc <= 30){
    console.log('Você está acima do peso com o IMC ',imc.toFixed(2));
}else
if (imc > 30.01 && imc <= 40){
    console.log('Você está Obeso com o IMC ',imc.toFixed(2));
}else{
    console.log('Você está com Obesidade grave com o IMC ',imc.toFixed(2));
}