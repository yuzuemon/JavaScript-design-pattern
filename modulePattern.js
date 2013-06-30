'use strict';

// オブジェクトリテラル
var myModule = {
  myProperty: 'someValue',

  // オブジェクトリテラルはプロパティやメソッドを含むことができる
  // 例えば、モジュール設定のオブジェクトをさらに定義することも可能
  myConfig: {
    useCaching: true,
    language: 'en'
  },


  // 非常に単純なメソッド
  myMethod: function(){
    console.log('Where in the world isPaul Irish today?');
  },

  // 現在の設定に基いて値を出力する
  myMethod2: function(){
    console.log( 'Caching is: ' + ( this.myConfig.useCachisg) ? 'enabled': 'disabled');
  },

  // 現在の設定をオーバーライドする
  myMethod3: function(newConfig){
    if(typeof newConfig === 'object'){
      this.myConfig = newConfig;
      console.log(this.myConfig.language);
    }
  }
};


// 出力: Where in the world is Paul Irish  Today?
myModule.myMethod();

// 出力: enabled
myModule.myMethod2();

// 出力: fr
myModule.myMethod3({
  language: 'fr',
  useCaching: false
});
