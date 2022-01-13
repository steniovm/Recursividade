/*
Autor: Stênio Vinicios de Medeiros
AlphaEdTech Turma Lovelace I
Exercicios sobre funções recursivas (13/01/2022)
Trilha: Linguagens de programação (Javascript)
*/

const ENTRADA = 8;//valor do numero a ser calculado o fatorial

function factorial(num){
    if (num === 1 || num ===0){//verifica se é o ultimo fator da multiplicação
        return 1;
    }
    if (num > 1){
        num = num - (num%1);//retira a parte decimal de numero em ponto flutuante
        return num * factorial(num -1);//multiplica pelo proximo fator da multiplicação
    }
    return "indefinido";//não existe fatorial de numero negativo
    
}
//imprime o fatorial
console.log(`!${ENTRADA - (ENTRADA%1)} = ${factorial(ENTRADA)}`);