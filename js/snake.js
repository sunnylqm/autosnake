(function(window){
   var Snake = function(length){
       var me = this;
       me.length = length;
       me.direction = 'e';
       me.body = new Array(length);
       for(var i = 0;i < length;i++){
           me.body[i] = {
               x:length - 1 - i,
               y:0
           } ;
       }
       me.lastNode = {};
       this.isAlive = true;

   };
   Snake.prototype = {
       move:function(){
           var me = this;
           me.lastNode.x = me.body[length-1].x;
           me.lastNode.y = me.body[length-1].y;
           for(var i = me.length - 1;i > 0;i--){
               me.body[i].x = me.body[i-1].x;
               me.body[i].y = me.body[i-1].y;
           }
           switch(me.direction){
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
       turn:function(direction){
           //todo disables
           this.direction = direction;
       }

   };


   window.Snake = Snake;


})(this);