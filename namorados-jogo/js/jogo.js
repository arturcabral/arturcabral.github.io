function init(){
	
}

function preload(){
	game.load.image('background', 'images/background.png');
	
	game.load.image('ground', 'images/platform-5.png');
	game.load.image('ground4', 'images/platform-4.png');
	game.load.image('ground3', 'images/platform-3.png');
	game.load.image('ground2', 'images/platform-2.png');
	game.load.image('ground1', 'images/platform-1.png');

	game.load.image('caixa', 'images/caixa.png');
	game.load.image('scaixa', 'images/caixa-s.png');

	game.load.image('heart', 'images/heart.png');
	game.load.image('b-heart', 'images/b-heart.png');

	game.load.image('m-heart', 'images/m-heart.png');

	game.load.image('title', 'images/title.png');

	game.load.image('fin', 'images/fin.png');

	game.load.spritesheet('artur-azul', 'images/artur.png', 137, 137)

	game.load.spritesheet('taina', 'images/taina.png', 137, 137)

	
};

var platforms;
var score = 0;
var scoreText;
var scoreb = 0;


function create(){
	game.add.image(0, 0, 'background');

	this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

//Configurações Ground
	game.physics.startSystem(Phaser.Physics.ARCADE);
    platforms = game.add.group();
    platforms.enableBody = true;
    var ground = platforms.create(0, game.world.height - 53, 'ground');
    ground.body.immovable = true;

//Configurações AirGround
	var airground = platforms.create(0, 400, 'ground4');
    airground.body.immovable = true;

    airground = platforms.create(100, 250, 'ground2');
    airground.body.immovable = true;
	
	airground = platforms.create(game.world.width - 255, 350, 'ground3');
 	airground.body.immovable = true;

	airground = platforms.create(450, 180, 'ground3');
 	airground.body.immovable = true;

    airground = platforms.create(750, 50, 'ground1');
    airground.body.immovable = true;
//Configurações Caixas
	var caixa = platforms.create(800, 315, 'scaixa');
    caixa.body.immovable = true;
	var caixa = platforms.create(50, 364, 'scaixa');
    caixa.body.immovable = true;
    var caixa = platforms.create(480, 145, 'scaixa');
    caixa.body.immovable = true;
    var caixa = platforms.create(600, 512, 'scaixa');
    caixa.body.immovable = true;

    caixa = platforms.create(100, 150, 'caixa');
    caixa.body.immovable = true;
    caixa = platforms.create(890, 115, 'caixa');
    caixa.body.immovable = true;
//Player
	player = game.add.sprite(10, 400, 'artur-azul');
    game.physics.arcade.enable(player);
	player.body.setSize(50, 100, 40, 15);
	//player.body.height = -10;

	player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    player.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);
    player.animations.add('stading', [8, 9, 10, 11, 12, 13, 14, 15], 15, true);
    player.animations.add('right', [16, 17, 18, 19, 20, 21, 22, 23], 15, true);
    player.animations.add('jump', [24, 25, 26, 27, 28, 29, 30, 31], 15, true);
    player.animations.add('cleft', [32, 33, 34, 35, 36, 37, 38, 39], 15, true);
    player.animations.add('cstading', [40, 41, 42, 43, 44, 45, 46, 47], 15, true);
    player.animations.add('cright', [48, 49, 50, 51, 52, 53, 54, 55], 15, true);
    player.animations.add('cjump', [56, 57, 58, 59, 60, 61, 62, 63], 15, true);
//Tainá
	taina = game.add.sprite(850, 0, 'taina');
    game.physics.arcade.enable(taina);
    taina.body.setSize(50, 100, 40, 15);
    taina.body.immovable = true;

    taina.animations.add('stading', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);

//Configurações Heart
	hearts = game.add.group();

    hearts.enableBody = true;

    //  Loop
    for (var i = 0; i < 8; i++)
    {
        // Cria um coração dentro do grupo 'hearts'
        var heart = hearts.create(i * 110, 0, 'heart');

        //  Gravidade
        heart.body.gravity.y = 6;

        //  This just gives each star a slightly random bounce value
        heart.body.bounce.y = 0.7 + Math.random() * 0.4;
    }
    
//Configurações B-Heart
	bhearts = game.add.group();

    bhearts.enableBody = true;

    //  Loop
    for (var i = 0; i < 8; i++)
    {
        // Cria um coração dentro do grupo 'hearts'
        var bheart = bhearts.create(i * 200, 0, 'b-heart');

        //  Gravidade
        bheart.body.gravity.y = 6;

        //  This just gives each star a slightly random bounce value
        bheart.body.bounce.y = 0.7 + Math.random() * 0.5;
    }
    
//Title
		title = game.add.image(300, 250, 'title');
		titleText = game.add.text(350, 305, 'pressione SPACE para começar', { font: '20px monospace', fill: '#fff' });



}

function gameOver() { 
		var gameover = game.add.text(400, 300, 'GAME OVER', { font: '30px monospace', fill: '#fff' });
		platforms.kill();
		player.kill();
		taina.kill();
		hearts.kill();
		bhearts.kill();


	}

function update(){
//Debug    
	// game.debug.bodyInfo(taina, 32, 32);
	// game.debug.body(taina);
    

    var hitPlatform = game.physics.arcade.collide(player, platforms);

	cursors = game.input.keyboard.createCursorKeys();
//Game over
	if(scoreb >= 2) { gameOver();}

//Física Tainá
	var hitMate = game.physics.arcade.collide(player, taina);
	
	if (hitMate && score >= 3) {
		game.add.image(200, 20, 'fin');
		platforms.kill();
		player.kill();
		taina.kill();

	}

//Física Coração
	game.physics.arcade.collide(hearts, platforms);
	game.physics.arcade.overlap(player, hearts, collectHeart, null, this);
	
	game.physics.arcade.collide(bhearts, platforms);
	game.physics.arcade.overlap(player, bhearts, collectBHeart, null, this);

	function collectBHeart (player, bheart) {

	    // Mata o coração partido
	    bheart.kill();
	   	scoreText.text = ' ' + score;
	   	scoreb ++;



	}

	function collectHeart (player, heart) {

	    // Mata o coração
	    score ++;
	    scoreText.text = ' ' + score;
	    heart.kill();

	}
//Inicio Game
if (this.spaceKey.isDown)
    {
    	title.kill();
    	titleText.kill();
		
		game.add.image(15, 15, 'm-heart');
		scoreText = game.add.text(16, 20, ' 0', { font: '15px monospace', fill: '#fff' });

    }

//Movimentos Player    
     //  Reseta a velocidade do Player (movimento)
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move para esquerda
        player.body.velocity.x = -150;
	        if (score >= 3) {
	   			player.animations.play('cleft');
	   		}
	   		else {
	        player.animations.play('left');
	    	}
    }
    else if (cursors.right.isDown)
    {
        //  Move para direita
        player.body.velocity.x = 150;

        if (score >= 3) {
	   			player.animations.play('cright');
	   		}
	   	else {
        	player.animations.play('right');
    	}
    }
    else if (cursors.up.isDown) 
    {
    	//  Animação Pular !!!! Resolver Bug
    	if (score >= 3) {
	   			player.animations.play('cjump');
	   		}
	   	else {
    	player.animations.play('jump');
    	}
    }
    else
    {
        //  Stand still
   		if (score >= 3) {
   			player.animations.play('cstading');
   		}
   		else {
   			player.animations.play('stading');
   		}

    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down && hitPlatform)
    {
        player.body.velocity.y = -350;
    }
}


//Create a game state
var game = new Phaser.Game(960, 600, Phaser.AUTO, 'game', {init: init, preload: preload, create: create, update: update});
