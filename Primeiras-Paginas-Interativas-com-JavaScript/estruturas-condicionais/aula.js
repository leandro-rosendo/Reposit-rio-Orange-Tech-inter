/*Rascunhos da aula sobre condicionais*/


/*O código abaixo verifica se um número é par, se sim, retorna TRUE, se não, retorna FALSE.
O sinal === compara se o resto da divisão é igual a zero.*/


const numero = 10;

const numeroPar = (numero % 2) === 0;

if (numeroPar){
    console.log('Par');
}

if (!numeroPar){ /*O ponto de esclamação a frente da variável indica a negação da variável*/
    console.log('Impar');
}