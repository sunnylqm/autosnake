(function(window){
   var gameConf = window.gameConf;
   var Snake = function(){
       this.reset();
   };
   Snake.prototype = {
       move:function(){
           var me = this;
           var f = window.ground.fruit;
           var head = me.body[0];
           var tmpHead = {
               x:head.x,
               y:head.y
           };
           switch(me.dir){
               case 'e':
                   tmpHead.x++;
                   break;
               case 'w':
                   tmpHead.x--;
                   break;
               case 'n':
                   tmpHead.y--;
                   break;
               case 's':
                   tmpHead.y++;
                   break;
           }
           if(tmpHead.x === f.x && tmpHead.y === f.y){
               me.grow(tmpHead);
               return;
           }
           for(var i = me.length - 1;i > 0;i--){
               if(tmpHead.x === me.body[i-1].x && tmpHead.y === me.body[i-1].y){
                   me.isAlive = false;
               }
               me.body[i].x = me.body[i-1].x;
               me.body[i].y = me.body[i-1].y;
           }
           head.x = tmpHead.x;
           head.y = tmpHead.y;
           if(head.x < 0 || head.x >= gameConf.GROUNDSIZE || head.y < 0 || head.y >= gameConf.GROUNDSIZE ){
               me.isAlive = false;
           }
       },
       grow:function(fruit){
           var me = this;
           var g = window.ground;
           me.length++;
           me.body.unshift(fruit);
           g.produceFruit();
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
           me.isAlive = true;
       }

   };

   window.Snake = Snake;
})(this);