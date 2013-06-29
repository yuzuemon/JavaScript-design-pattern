'use strict';

// プロトタイプを使ったコンストラクタ
function Car(model, year, miles){
  this.model = model;
  this.year = year;
  this.miles = miles;
}

// プロトタイプオブジェクトの再定義を避けるために、ここではObject.prototypeではなく
// Object.prototype.newMethodを使用していることに注意
Car.prototype.toString = function(){
  return this.model + ' has done ' + this.milse + ' miles';
};

var civic = new Car('Honda Civic', 2009, 20000);
var mondeo = new Car('Ford Mondeo', 2010, 5000);
console.log(civic.toString());
console.log(mondeo.toString());
