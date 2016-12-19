/**
 * Created by forli on 2016/12/19.
 */
(function im(){
    document.write("immediately invoke function!");
})();

(function im(){
    document.write("immediately invoke function!");
}());



var firstMsg = "global";
function output(){
    document.write(this.firstMsg);
}
output();

var message = "global message!";
var computer = {
    message:"coming message",
    output:function(){
        document.write(this.message);
        document.write("<br>");
    },
    input:function(msg){
        this.message = msg;
    }
};
computer.input("Invoke function by object!");
computer.output();
var globalFn = computer.output;
globalFn();







function Animal(lifeSpan){
    this.lifeSpan = lifeSpan ? lifeSpan : 100;
    this.birth = "1970-1-1";
    this.name="animal";
}
function Black(){
    this.target = ["cute","noisy"];
    this.nickName = "nini";
}
var littleBlack = new Black();
Animal.apply(littleBlack,[30]);
Animal.call(littleBlack,30,21,32,3,32,23,32);
var littleBlackFn = Animal.bind(littleBlack,[30]);
littleBlackFn();
var data = JSON.stringify(littleBlack);
document.write(data);






function Human(){
    this.height = 170;
    this.weight = 55;
}
var human = new Human();
function Student(){
    this.name = "张章";
    this.gender = "女";
    this.age = 18;
    this.nation = "China";
}
Student.prototype = human;
var zhangZhang = new Student();
alert(zhangZhang.height);
var instance = zhangZhang instanceof Student;
alert(instance);












