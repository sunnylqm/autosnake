(function(window){

var gameConf,snake,ground;
gameConf = window.gameConf;
window.snake = snake = new window.Snake();
window.ground = ground = new window.Ground();

var playBtn = document.getElementById('playOrPause');
playBtn.onclick = function(){
    var me = this;
    gameConf.isPlaying = !(gameConf.isPlaying);
    if(gameConf.isPlaying){
        if(!snake.isAlive){
            snake.reset();
            ground.reset();
        }
        Painter.drawScreen();
        me.innerHTML = 'Pause';
    }
    else{
        me.innerHTML = 'Play';
    }
};

var key = window.key;
key('up',function(){
    gameConf.autoPlay = false;
    snake.turnTo('n');
});
key('down',function(){
    gameConf.autoPlay = false;
    snake.turnTo('s');
});
key('left',function(){
    gameConf.autoPlay = false;
    snake.turnTo('w');
});
key('right',function(){
    gameConf.autoPlay = false;
    snake.turnTo('e');
});



})(this);