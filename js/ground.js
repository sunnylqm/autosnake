(function(window){
    var gameConf = window.gameConf;
    var Ground = function(){
        this.reset();
    };
    Ground.prototype = {
        produceFruit:function(){
            var me = this;
            var s = window.snake;
            var b = s.body;
            var index = me.size - 1;
            var temp;
            for(var i = 0;i < me.size;i++){
                me.matrix[i] = i;
            }
            for(var i = 0;i < s.length;i++){
                temp = b[i].x * gameConf.GROUNDSIZE + b[i].y;
                me.matrix[temp] = index;
                me.matrix[index] = temp;
                index--;
            }
            var rand = me.matrix[Math.round(Math.random()*10000)%(me.size-s.length)];
            me.fruit = {
                x:Math.floor(rand/gameConf.GROUNDSIZE),
                y:rand%gameConf.GROUNDSIZE
            };
            console.log(rand+' ' + me.fruit.x + ' ' + me.fruit.y);

        },
        reset:function(){
            var me = this;
            me.size = gameConf.GROUNDSIZE * gameConf.GROUNDSIZE;
            me.matrix = new Array(me.size);

//            me.matrix = new Array(me.size);
//            for(var i=0;i<me.size;i++){
//                me.matrix[i] = new Array(me.size);
//                for(var j=0;j<me.size;j++){
//                    me.matrix[i][j] = 0;
//                    if(i===0 && j< gameConf.SNAKESIZE){
//                        me.matrix[i][j] = 1;
//                    }
//                }
//            }
            me.produceFruit();

        }

    };

    window.Ground = Ground;


})(this);