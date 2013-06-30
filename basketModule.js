'use strict';

var basketModule = ( function(){
  //プライベート
  var basket = [];
  function doSomethingPrivate(){
    console.log('nanka');
  }

  function doSomethingElsePrivate(){
    console.log('nanka');
  }

  // パブリックに開示されたオブジェクトを返す
  return {
    // 商品追加
    addItem: function(values){
      basket.push(values);
    },

    // count item
    getItemCount: function(){
      return basket.length;
    },

    // プライベート関数にパブリックな別名をつける
    doSomething: doSomethingPrivate,

    // get Total
    getTotal: function(){
      var itemCount = this.getItemCount(),
        total = 0;

      while (itemCount--){
        total += basket[itemCount].price;
      }

      return total;
    }
  };
}());


// basketmoduleはパブリックAPIを持つオブジェクトを返す
basketModule.addItem({
  itme: 'bread',
  price: 0.5
});

basketModule.addItem({
  item: 'butter',
  price: 0.3
});

console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());

// 次のはうまく動かない
console.log(basketModule.basket);
// console.log(basket);

