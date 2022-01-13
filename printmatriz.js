/*
Autor: Stênio Vinicios de Medeiros
AlphaEdTech Turma Lovelace I
Exercicios sobre funções recursivas (13/01/2022)
Trilha: Linguagens de programação (Javascript)
*/

//matrizes a serem impressas
const matriz = [[0,1,2],[3,4,5],[6,7,8]]

const matriz2 = [[0,1,2,3,4,5,6,7,8,9],
                [3,4,5,6,7,8,9,0,1,2],
                [6,7,8]];

const matriz3 = [matriz,["a","b","c"],matriz2];

//função recursiva para imprimir a matriz
function printmatriz(el){
    let linha;
    //se o elemento for um array retorna como linha
    if(Array.isArray(el)){
        linha = '['+ el.reduce((acc,ele) => {
            //recursividade
            return (acc + (printmatriz(ele)+ '  '));
        },"")+']\n';
        return linha;
    }
    //se o elemento não dor um array retorna o elemento
    return el;
}

//chamadas da função
console.log(printmatriz(matriz));
console.log(printmatriz(matriz2));
console.log(printmatriz(matriz3));
console.log(printmatriz([matriz,matriz2,matriz3]));