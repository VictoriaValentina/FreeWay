//Variaveis do carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [45, 100, 155, 215, 266, 324];
let compCarro = 50;
let largCarro = 30
let velocidadeCarros = [3, 2.5, 3.5, 5, 3.3, 4];

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], compCarro, largCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}