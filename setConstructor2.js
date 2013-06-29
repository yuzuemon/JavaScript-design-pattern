'use strict';

// 基本的なコンストラクタ
function Car(model, year, miles){
  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function(){
    return this.model + ' has done ' + this.miles + ' miles';
  };
}

var civic = new Car('Honda Civic', 2009, 20000);
var mondeo = new Car('Ford Mondeo', 2010, 5000);
console.log(civic.toString());
console.log(mondeo.toString());

// いくつか問題
// ・継承が難しくなる
// ・toString()のような関数はそれぞれのオブジェクトに対して再定義される
