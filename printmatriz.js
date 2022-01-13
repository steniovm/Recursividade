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

const matriz4 = ['a','b','c'];
const matriz5 = [1,2,3,4];

//função que imprime cada linha
function foreachmatriz(arr,line,aindex){
    if (aindex<arr.length){
        //console.log(arr[aindex]);
        line = line + " "+arr[aindex]+ " ";
        aindex++;
        return foreachmatriz(arr,line,aindex);
    }else{
        //console.log('\n');
        console.log("|"+line+"|");
    }
}
//função para entrar em cada elemento em profundidade
function pmatriz(matr){
    let line = "";
    //console.log(aindex+" elementos");
    if (Array.isArray(matr[0])){
        return matr.forEach(ele => {pmatriz(ele)});
    }
    return foreachmatriz(matr,line,0);
}
//chamadas de teste
console.log(matriz4);
console.log(pmatriz(matriz4));
console.log(matriz5);
console.log(pmatriz(matriz5));
console.log(matriz);
console.log(pmatriz(matriz));
console.log(matriz2);
console.log(pmatriz(matriz2));
console.log(matriz3);
console.log(pmatriz(matriz3));



//tentativa antiga
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
//console.log(printmatriz(matriz));
//console.log(printmatriz(matriz2));
//console.log(printmatriz(matriz3));
//console.log(printmatriz([matriz,matriz2,matriz3]));