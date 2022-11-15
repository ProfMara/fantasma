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


    //criar os grupos das grades e das portas
    grupoBlocoInvisivel = new Group();


    //carregando as animações do fantasma
    player_parado = loadAnimation("fantasma parado.png");
    player_pulando = loadAnimation("fantasma pulando.png");

    //carregar som


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
        drawSprites();
        //código para controlar o jogador para cima

        //código para controlar o jogador para esquerda

        //código para controlar o jogador para direita


        //gravidade


        //é aqui que chama a função gerarPortas 
 

        //código para finalizar o jogo
        if (player.isTouching(grupoBlocoInvisivel) || player.y > height) {
            estadoJogo = "fim";
        }
    }
    if (estadoJogo === "fim") {
        background(0)
        fill("yellow")
        textSize(70);
        
    }

}


function gerarPortas() {

    if (frameCount % 240 === 0) {

        porta = createSprite(200, -50);
        porta.x = Math.round(random(120, 400))
        grade = createSprite(porta.x, 10);
        blocoInvisivel = createSprite(porta.x, 15, grade.width, 2);
        blocoInvisivel.visible = false;

        //código para adicionar as imagens nas sprites
        porta.addImage(portaImg);
        //é aqui que adiciona a imagem na sprite grade


        //é aqui que define a velocidade das sprites
        blocoInvisivel.velocityY = 1;



        //é aqui que define o tempo de vida das sprites
        blocoInvisivel.lifetime = 800;



        //é aqui que adiciona nos grupos as sprites
        grupoBlocoInvisivel.add(blocoInvisivel);



    }


}