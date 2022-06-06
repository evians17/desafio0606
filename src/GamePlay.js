GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        game.load.image('fondo', 'fondo.jpg');
        game.load.spritesheet('megaman', 'megaman.png', 200.2, 200, 7);
    },
    create: function() {
        game.add.sprite(0, 0, 'fondo');
        this.megaman = game.add.sprite(0, 500, 'megaman');
        this.megaman.animations.add('walk', [0,1,2,3,],2,true);
        this.megaman.animations.play("walk");
    },
    update: function(){
        console.log("update");
        this.megaman.x += 2;
    }
}
var game = new Phaser.Game(1200, 960, Phaser.CANVAS);
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");