var torreImg, torre;
var portaImg, porta, grupoPorta;
var gradeImg, grade, grupoGrade;
var player, player_parado, player_pulando;
var grupoBlocoInvisivel, blocoInvisivel;
var estadoJogo = "jogar";
var somAssustador;
var playerparado;

function preload() {
    //carregar as imagens da torre, da grade e da porta
    torreImg = loadImage("torre.png");


    //carregando as animações do fantasma
    player_parado = loadAnimation("fantasma parado.png");
    player_pulando = loadAnimation("fantasma pulando.png");

    //carregar som

    
    grupoBlocoInvisivel = new Group()
    //criar os grupos das grades e das portas
    
}

function setup() {
    createCanvas(600, 600);
    //criando a torre
    torre = createSprite(300, 300);
    torre.addImage("torre", torreImg);
    torre.velocityY = 1;

    //tocar o som em loop
    
    //criando o player
    player = createSprite(200, 200, 50, 50);
    player.addAnimation("player parado", player_parado);
    player.addAnimation("player pulando", player_pulando)
    player.scale = 0.3;

    edges = createEdgeSprites();
}

function draw() {
    background(200);

    if (estadoJogo === "jogar") {
        //é aqui que muda a animação do player para ele parado.


        //código para controlar o jogador para cima

        

        //código para controlar o jogador para Esquerda
        if (keyDown("left")) {
            player.x -= 3;
            player.changeAnimation("player pulando");
        }

        //código para controlar o jogador para direita

        
        //gravidade

        //Código para reiniciar a torre


        //é aqui que programa para o player colidir com as grades

        //é aqui que chama a função gerarPortas()
 
        drawSprites();

        //código para finalizar o jogo
        if (player.isTouching(grupoBlocoInvisivel) || player.y > height) {
            estadoJogo = "fim";
        }
    }
    if (estadoJogo === "fim") {
        background(0);
        fill("yellow");
        textSize(70);
        text("VOCÊ PERDEU", 30, 200);
    }

}


function gerarPortas() {

    if (frameCount % 240 === 0) {

        porta = createSprite(200, -50);
        porta.x = Math.round(random(120, 400))

        grade = createSprite(porta.x, 10);

        blocoInvisivel = createSprite(porta.x, 15, grade.width, 2);

        //fazer o bloco invisivel ser invisivel


        //código para adicionar as imagens nas sprites

        
           
        //velocidade das sprites
        blocoInvisivel.velocityY = 1;


        //tempo de vida das sprites
        blocoInvisivel.lifetime = 800;
        
        //programe para que o player esteja na frente  do jogador

        //adicionar nos grupos as sprites
        grupoBlocoInvisivel.add(blocoInvisivel);
        


    }


}
