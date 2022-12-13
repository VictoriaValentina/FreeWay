//Variaveis do ator
let xAtor = 90;
let yAtor = 366;

//Variavel de colisão
colidiu = false;

//Variavel de pontos
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 32, 32);
}

function colisaoAtor(){
  for (let i = 0; i < imagemCarros.length; i++){
    colidiu = collideRectCircle(xCarros[i], yCarros[i], compCarro, largCarro, xAtor, yAtor, 15)
    if (colidiu){
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if(removerPontos()){
        meusPontos -= 1;
      }
    }
  }
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(limiteDoAtor()){
    yAtor += 3;
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  fill(255,69,0)
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, 100, 27);

}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    voltaAtorPosicaoInicial();
    somDoPonto.play();
  }
}

function removerPontos(){
  return meusPontos > 0;
}

function limiteDoAtor(){
  return yAtor < 366;
}

