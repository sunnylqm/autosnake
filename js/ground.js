(function(window){
    var gameConf = window.gameConf;
    var Ground = function(){
        this.reset();
    };
    Ground.prototype = {
        produceFruit:function(){

        },
        reset:function(){
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

        }

    };

    window.Ground = Ground;


})(this);