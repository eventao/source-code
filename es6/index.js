/**
 * Created by Administrator on 2016/12/12.
 */
class Animal{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
}

class Programmer extends Animal{
    constructor(name){
        super(name);
    }
    program(){
        console.log("I'm coding...");
    }
}

var animal = new Animal('dummy');
wayou = new Programmer('wayou');
animal.sayName();
wayou.sayName();
wayou.program();


var array = [12,34,56,78,90];
array.forEach(v => console.log(v));




