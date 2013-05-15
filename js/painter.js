(function(window){
//    var requestAnimationFrame = window.requestAnimationFrame
//        || window.mozRequestAnimationFrame
//        || window.webkitRequestAnimationFrame
//        || window.msRequestAnimationFrame
//        || function(callback) {
//        setTimeout(callback, 1000 / 60);
//    };

    var ctx = document.getElementById('canvas').getContext('2d');

    var gameConf = window.gameConf;
    var s = window.snake;
    var g = window.ground;
    var Painter;
    window.Painter = Painter = {
        drawScreen: function(){
            if(gameConf.isPlaying){
                if(s.isAlive){
                    ctx.clearRect(0,0,300,300);
                    ctx.fillStyle = '#000';
                    Painter.drawSnake();
                    Painter.drawFruit();
                    s.move();
                    window.setTimeout(Painter.drawScreen,1000/8);
                }
                else{
                    gameConf.isPlaying = false;
                    Painter.drawGameOverScreen();
                    document.getElementById('playOrPause').innerHTML = 'Play';
                }

            }

        },
        drawGameOverScreen: function(){
            ctx.fillStyle = "#000";
            ctx.font = "24pt Helvetica";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("Game Over", 150 , 145);
            ctx.font = "16pt Helvetica";
            ctx.fillText("score : " + (s.length - gameConf.SNAKESIZE), 150 , 175);
        },
        drawSnake: function(){
            var w,h;
            w = h = gameConf.TILESIZE;
            for(var i = 0;i < s.length - 1;i++){
                ctx.fillRect(s.body[i].x * gameConf.TILESIZE, s.body[i].y * gameConf.TILESIZE,w,h);
            }
        },
        drawFruit: function(){
            var w,h;
            w = h = gameConf.TILESIZE;
            ctx.fillRect(g.fruit.x * w, g.fruit.y * h,w,h);
        }
    };


})(this);