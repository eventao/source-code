/**
 * Created by Administrator on 2016/12/12.
 */




dlert("<h3>for of 遍历字符串</h3>");
let text = String.fromCodePoint();
for (let i of text) {
    dlert(i);
}

let source = "hello world";
for(k of source){
    dlert(k);
}




let s = "𠮷";
s.charAt(0); // ''
s.charAt(1); // ''
s.charCodeAt(0); // 55362
s.charCodeAt(1); // 57271

dlert(s.codePointAt(0));
dlert("s.length="+s.length+"<br>");



function dlert(msg){
    document.write(msg+"<br>");
}
function clert(msg){
    console.log(msg);
}
let hello = 123;
document.write("hell\u{6F}"+"<br>");

let str = "\u{41}\u{42}\u{43}";
document.write(str);

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


