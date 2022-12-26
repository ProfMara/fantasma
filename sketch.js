var torreImg, torre;
var portaImg, porta, grupoPorta;
var gradeImg, grade, grupoGrade;
var player, player_parado, player_pulando;
var grupoBlocoInvisivel, blocoInvisivel;
var estadoJogo = "jogar";
var somAssustador;
var playerparado;

function preload() {
    //é assim que carrega a imagem da torre
    torreImg = loadImage("torre.png");
    //agora, do mesmo jeito, carregue as imagens da grade e da porta

    
    
    //carregando as animações do fantasma
    player_parado = loadAnimation("fantasma parado.png");
    player_pulando = loadAnimation("fantasma pulando.png");

    //programe para carregar o som

    //é assim que cria um grupo
    grupoBlocoInvisivel = new Group()
    //agora, crie aqui os grupos das grades e das portas
    
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

        

        //esse é o código para controlar o jogador para Esquerda
        if (keyDown("left")) {
            player.x -= 3;
            player.changeAnimation("player pulando");
        }

        //agora, adicione o código para controlar o jogador para direita

        
        //do mesmo jeito que adicionou a gravidade do trex, adicione a do player.

        
        //Do mesmo jeito que fez um loop infinito para o solo do trex, adicione o código para a torre estar em loop infinito


        //programe para o player colidir com as grades

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

        blocoInvisivel = createSprite(porta.x, 25, grade.width, 2);

        //adicione o código para o bloco invisivel ser invisivel


        //adicione o código para adicionar as imagens nas sprites

        
           
        //é assim que se dá velocidade para o bloco
        blocoInvisivel.velocityY = 1;
        //agora, dê velocidade para a porta e para a grade

        //é assim que se dá tempo de vida para a sprite
        blocoInvisivel.lifetime = 800;
        //agora, dê tempo de vida para a porta e a grade
        
        //programe para que o player esteja na frente  do jogador aumentando seu depth

        //é assim que se adiciona uma sprite no grupo
        grupoBlocoInvisivel.add(blocoInvisivel);
        //agora, adicione a sprite de porta no grupo das portas e a sprite de grade no grupo das grades.


    }


}
