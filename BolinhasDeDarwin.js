/*
Autor: Stênio Vinicios de Medeiros
AlphaEdTech Turma Lovelace I
Exercicios sobre canvas com atualização para servidores em um unico arquivo
Ultima atualização (18/01/2022)
contato: steniovm@gmail.com
*/

var myscript = `
var mycanvas = document.querySelector('canvas');
var c = mycanvas.getContext('2d');
var nbol = 30;
var rbol = 30;
c.width = mycanvas.offsetWidth;
c.height = mycanvas.offsetHeight;
var bolinhas = vetorbol(nbol);

function changeColor(){
  let red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);
  let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  mycanvas.style.backgroundColor = 'rgb(' + (255-red) + ',' + (255-green) + ',' + (255-blue) + ')';
}

function bolinha(x,y,raio,r,g,b){
    this.x = x + Math.floor(Math.random()*10 - 5);
    this.y = y + Math.floor(Math.random()*10 - 5);
    this.ra = raio;
    this.r = r + Math.floor(Math.random()*10 - 5);
    this.g = g + Math.floor(Math.random()*10 - 5);
    this.b = b + Math.floor(Math.random()*10 - 5);
    this.dx = Math.random() - 0.5;
    this.dy = Math.random() - 0.5;
    this.mostrar = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.ra, 0, 2*Math.PI);
        c.fillStyle=('rgb('+this.r+','+this.g+','+this.b+')');
        c.fill();
    }
    this.mover = function(){
        if(this.x+this.dx>0 && this.x+this.dx<c.width){
            this.x = this.x + this.dx;
        }else{
            this.dx = -this.dx;
            this.x = this.x + this.dx;
        }
        if(this.y+this.dy>0 && this.y+this.dy<c.height){
            this.y = this.y+this.dy;
        }else{
            this.dy = -this.dy;
            this.y = this.y+this.dy;
        }
        this.mostrar();
    }

}

function vetorbol(){
    var bolinhas = [];
    for(var i=0; i<nbol; i++){
        var x = Math.floor(Math.random()*c.width);
        var y = Math.floor(Math.random()*c.height);
        var r = Math.floor(Math.random()*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor(Math.random()*255);
        bolinhas.push(new bolinha(x,y,rbol,r,g,b));
    }
    return bolinhas;
}

function inicio(){
    bolinhas = vetorbol(nbol);
    for(i=0;i<nbol;i++){
        bolinhas[i].mostrar();
    }
    mostrarbol();
}

function mostrarbol(){
    c.clearRect(0,0,innerWidth,innerHeight);
    requestAnimationFrame(mostrarbol);
    for(i=0;i<nbol;i++){
        bolinhas[i].mover();
    }
}

function pinicio(){
    nbol = 30;
    rbol = 30;
}

function clicar(e){
    var mx = e.clientX;
    var my = e.clientY;
    var mae = Math.floor(Math.random()*(nbol-1));
    console.clear;
    for(i=(nbol-1);i>=0;i--){
        if(mae==i) mae = (mae+1)%255;
        var dx = mx-bolinhas[i].x;
        if (dx < 0 ) dx = - dx;
        var dy = my-bolinhas[i].y;
        if (dy < 0 ) dy = - dy;
        if((dx<(bolinhas[i].ra)) && (dy<(bolinhas[i].ra))){
            bolinhas[i].x = bolinhas[mae].x + Math.floor(Math.random()*10 - 5);
            bolinhas[i].y = bolinhas[mae].y + Math.floor(Math.random()*10 - 5);
            bolinhas[i].r = bolinhas[mae].r + Math.floor(Math.random()*50 - 25);
            if(bolinhas[i].r > 255) bolinhas[i].r = 254;
            if(bolinhas[i].r < 0) bolinhas[i].r = 1;
            bolinhas[i].g = bolinhas[mae].g + Math.floor(Math.random()*50 - 25);
            if(bolinhas[i].g > 255) bolinhas[i].g = 254;
            if(bolinhas[i].g < 0) bolinhas[i].g = 1;
            bolinhas[i].b = bolinhas[mae].b + Math.floor(Math.random()*50 - 25);
            if(bolinhas[i].b > 255) bolinhas[i].b = 254;
            if(bolinhas[i].b < 0) bolinhas[i].b = 1;
            bolinhas[i].dx = -bolinhas[mae].dx;
            bolinhas[i].dy = -bolinhas[mae].dy;
            return;
        }else{if (i == 0) console.log('errou');}
    }
}

changeColor();
pinicio();
inicio();
mostrarbol();
alert("Você é um predador e as bolinhas são as presas. Click nas bolinhas para preda-las.");
alert("Cada vez que uma bolinha é morta outra bolinha tem um filho com características herdadas e levemente mutadas.");
alert("Observe a evolução natural das bolinhas para se camuflar e enganar o predador.");
mycanvas.addEventListener('mouseup',clicar,true);
`;
const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

//app.use(express.static('public'));

app.get('/', (req, res) => {
        res.send(`<!DOCTYPE html><html><body><canvas width="800" height="600"></canvas><script type="text/javascript">${myscript}</script></body></html>`);
});
app.listen(port, () =>{
    console.log(`para jogar acesse: http://localhost:${port}`);
});