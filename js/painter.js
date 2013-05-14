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
                ctx.clearRect(0,0,300,300);
                ctx.fillStyle = '#000';
//                ctx.strokeStyle = '#000';
//                ctx.lineCap = 'square';
//                ctx.lineWidth = gameConf.TILESIZE;
//                ctx.beginPath();
                Painter.drawSnake();
                Painter.drawFruit();
//                ctx.stroke();
                s.move();
                g.produceFruit();
//                requestAnimationFrame(Painter.drawScreen);
                window.setTimeout(Painter.drawScreen,1000/6);
            }
        },
        drawSnake: function(){
//            var newX,newY;
//            for(var i = 0;i < s.length - 1;i++){
//                newX = s.body[i].x;
//                newY = s.body[i].y;
//                if(s.body[i].x === s.body[i+1].x){
//                    newX += 0.5;
//                    ctx.moveTo(newX * gameConf.TILESIZE, newY * gameConf.TILESIZE);
//                    ctx.lineTo(newX * gameConf.TILESIZE, s.body[i+1].y * gameConf.TILESIZE);
//                }
//                else if(s.body[i].y === s.body[i+1].y){
//                    newY += 0.5;
//                    ctx.moveTo(newX * gameConf.TILESIZE, newY * gameConf.TILESIZE);
//                    ctx.lineTo(s.body[i+1].x * gameConf.TILESIZE, newY * gameConf.TILESIZE);
//                }
//            }
            var w,h;
            w = h = gameConf.TILESIZE;
            for(var i = 0;i < s.length - 1;i++){
                ctx.fillRect(s.body[i].x * gameConf.TILESIZE, s.body[i].y * gameConf.TILESIZE,w,h);
            }
        },
        drawFruit: function(){

        }
    };


})(this);