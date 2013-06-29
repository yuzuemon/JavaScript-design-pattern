'use strict';

// クラスを定義
// Carクラス
function Car(model) {
  this.model = model;
  this.color = 'silver';
  this.year = '2012';

  this.getNifo = function(){
    return this.model + ' ' + this.year;
  };
}
