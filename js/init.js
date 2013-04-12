(function(window){

var requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(callback) {
    setTimeout(callback, 1000 / 60);
};
var ctx = document.getElementById('canvas').getContext('2d');
var playBtn = document.getElementById('playOrPause');
var stopBtn = document.getElementById('stop');

var isPlaying = false;
playBtn.onclick = function(){
    var me = this;
    isPlaying = !isPlaying;
    if(isPlaying){
        requestAnimationFrame(drawScreen);
        me.innerHTML = 'Pause';
    }
    else{
        me.innerHTML = 'Play';
    }

};
stopBtn.onclick = function(){
    isPlaying = false;
    playBtn.innerHTML = 'Play';
    //todo
};

var snake = new Snake(5);
var ground = new Ground(50,snake);
var TILESIZE = 6;
var x = 0;
var speed = 5;
function drawScreen(){
    if(isPlaying){
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 6;
        ctx.lineCap = 'square';
        ctx.beginPath();
        ctx.moveTo(x,0);
        ctx.lineTo(x+10,0);
        ctx.stroke();
        ctx.closePath();
        x += speed;
        requestAnimationFrame(drawScreen);
    }
}

})(this);