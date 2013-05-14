(function(window){
   var gameConf = window.gameConf;
   var Snake = function(){
       var me = this;
       me.length = gameConf.SNAKESIZE;
       me.dir = 'e';
       me.body = new Array(me.length);
       for(var i = 0;i < me.length;i++){
           me.body[i] = {
               x:me.length - 1 - i,
               y:0
           } ;
       }
       me.lastNode = {};
       me.isAlive = true;
   };
   Snake.prototype = {
       move:function(){
           var me = this;
           me.lastNode.x = me.body[me.length-1].x;
           me.lastNode.y = me.body[me.length-1].y;
           for(var i = me.length - 1;i > 0;i--){
               me.body[i].x = me.body[i-1].x;
               me.body[i].y = me.body[i-1].y;
           }
           switch(me.dir){
               case 'e':
                   me.body[0].x++;
                   break;
               case 'w':
                   me.body[0].x--;
                   break;
               case 'n':
                   me.body[0].y--;
                   break;
               case 's':
                   me.body[0].y++;
                   break;
           }
       },
       grow:function(){
           var me = this;
           me.length++;
           me.body.push(me.lastNode);
       },
       turnTo:function(dir){
           var me = this;
           var head = me.body[0];
           if(me.dir === 'n' && dir === 's'
               || me.dir === 's' && dir === 'n'
               || me.dir === 'w' && dir === 'e'
               || me.dir === 'e' && dir === 'w'){
               return ;
           }
           if(head.x === 0 && dir === 'w'
               || head.x === gameConf.GROUNDSIZE - 1 && dir === 'e'
               || head.y === 0 && dir === 'n'
               || head.y === gameConf.GROUNDSIZE -1 && dir === 's'){
               return ;
           }
           me.dir = dir;
       }

   };


   window.Snake = Snake;


})(this);