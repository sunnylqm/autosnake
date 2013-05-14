(function(window){
    var gameConf = window.gameConf;
    var Ground = function(){
        var me = this;
        me.size = gameConf.GROUNDSIZE;
        me.matrix = new Array(me.size);
        for(var i=0;i<me.size;i++){
            me.matrix[i] = new Array(me.size);
            for(var j=0;j<me.size;j++){
                me.matrix[i][j] = 0;
                if(i===0 && j< gameConf.SNAKESIZE){
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