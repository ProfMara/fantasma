var torreImg, torre;
var portaImg, porta, grupoPorta;
var gradeImg, grade, grupoGrade;
var player, player_parado, player_pulando;
var grupoBlocoInvisivel, blocoInvisivel;
var estadoJogo = "jogar";
var somAssustador;
var playerparado;

function preload() {
    // carrega a imagem da torre
    torreImg = loadImage("torre.png");
    //agora, do mesmo jeito, carregue as imagens da grade e da porta

    //carregando as animações do fantasma
    

}

function setup() {
    createCanvas(600, 600);
    //criando a torre
    
    //criando o player

    edges = createEdgeSprites();
}

function draw() {
    background(200);

    if (estadoJogo === "jogar") {
        //é aqui que muda a animação do player para ele parado.


        //código para controlar o jogador

        
        
        //do mesmo jeito que adicionou a gravidade do trex, adicione a do player.

        
        //add o código para a torre estar em loop infinito


        //é aqui que chama a função gerarPortas()
 
        drawSprites();

        //código para finalizar o jogo
        
    }
    if (estadoJogo === "fim") {
        background(0);
        fill("yellow");
        textSize(70);
        text("VOCÊ PERDEU", 30, 200);
    }

}


function gerarPortas() {

    


}
