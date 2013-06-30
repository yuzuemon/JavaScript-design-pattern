'use strict';

var myNameSpace = (function(){
  // プライベートカウンタ
  var myPrivateVar = 0;

  // プライベート関数
  var  myPrivateMethod = function(foo){
    console.log(foo);
  };

  return {
    // パブリック変数
    myPublicVar: 'foo',

    // プライベートを利用するパブリック関数
    myPublickFunction: function(bar){

      // プライベート関数をインクリメントする
      myPrivateVar++;

      // barを使ってプライベート関数を呼び出す
      myPrivateMethod(bar);
    }
  };
})();

console.log(myNameSpace);
console.log(myNameSpace.myPublicVar);
