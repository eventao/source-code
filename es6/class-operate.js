/**
 * Created by Administrator on 2016/12/12.
 */
class Animal{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log();
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

