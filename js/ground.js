(function(window){
    var Ground = function(size,snake){
        var me = this;
        me.size = size;
        me.snake = snake;
        me.snake.ground = me;
        me.matrix = new Array(size);
        for(var i=0;i<size;i++){
            me.matrix[i] = new Array(size);
            for(var j=0;j<size;j++){
                me.matrix[i][j] = 0;
                if(i===0&&j<snake.length){
                    me.matrix[i][j] = 1;
                }
            }
        }
    };
    Ground.prototype = {
        produceFruit:function(){

        }

    };


    window.Ground = Ground;


})(this);