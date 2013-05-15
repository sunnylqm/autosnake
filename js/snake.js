(function(window){
   var gameConf = window.gameConf;
   var Snake = function(){
       this.reset();
   };
   Snake.prototype = {
       move:function(){
           var me = this;
           var head = me.body[0];
           me.lastNode.x = me.body[me.length-1].x;
           me.lastNode.y = me.body[me.length-1].y;
           for(var i = me.length - 1;i > 0;i--){
               me.body[i].x = me.body[i-1].x;
               me.body[i].y = me.body[i-1].y;
           }
           switch(me.dir){
               case 'e':
                   head.x++;
                   break;
               case 'w':
                   head.x--;
                   break;
               case 'n':
                   head.y--;
                   break;
               case 's':
                   head.y++;
                   break;
           }
           if(head.x < 0 || head.x >= gameConf.GROUNDSIZE || head.y < 0 || head.y >= gameConf.GROUNDSIZE ){
               me.isAlive = false;
//               me.dispatchEvent(new CustomEvent("gameOver"));
           }
       },
       grow:function(){
           var me = this;
           me.length++;
           me.body.push(me.lastNode);
//           me.dispatchEvent(new CustomEvent("fruitEaten"));
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
       },
       reset:function(){
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
       }

   };

   window.Snake = Snake;
})(this);