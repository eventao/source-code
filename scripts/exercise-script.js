/**
 * Created by yuant on 2016/12/5.
 */

/*
* javascript 基本数据类型练习
* */
var varString = "abc";          // string
var varNumber = 123;            //  number
var varUndefined = undefined;  //undefined;
var varBoolean = true;          //boolean
var varNull = null;              //null

/*
* javascript 变量类型检查
* */
var varType = typeof "abc";
document.writeln(varType);



var varTypeNum = typeof 123;
document.write("<br>");
document.writeln(varTypeNum);

var typeUndefined = typeof undefined;
document.writeln(typeUndefined);

var typeBool = typeof true;
document.writeln(typeBool);

var typeNull = typeof null;
document.writeln(typeNull);


/**
 * number类型练习
 * @type {number}
 */
var varNumber2 = 8;
varNumber2 = varNumber2 + varNumber2;
document.write("<br>");
document.write(varNumber2);

var varEnumber = 2e3;
document.write("<br>");
document.write(varEnumber);

var numberInfi = 1 / 0;
document.write("<br>");
document.write(numberInfi);

var inf1 = Infinity;
var inf1Str = typeof inf1;
document.write("<br>");
document.write(inf1Str);

/**
 * string 类型练习
 */
var hello = "Hello word!";
var l = hello.length;
document.write("<br>");
document.write(l);

document.write("<br>");
document.writeln(hello[0]);
document.writeln(hello[1]);
document.writeln(hello[2]);
document.writeln('...');
document.writeln(hello[hello.length - 1]);

var helloPre = hello.substring(0,5);
document.write("<br>");
document.writeln(helloPre);

helloPre = hello.substr(0,5);
document.write("<br>");
document.writeln(helloPre);


document.write("<br>");
/**
 * boolean 练习
 * @type {boolean}
 */
var flag = true;
if("1" === 9 / 9){
    document.write("flag = true");
}else{
    document.write("flag = false");
}

/**
 * 类型转换 String
 */
var strNumberConvert = String(123);
document.write("<br>");
document.write(typeof strNumberConvert);

var dateStr = String(new Date());
document.write("<br>");
document.write(dateStr);


/**
 * 类型转换 Number
 */
var nVar = Number("1234");
document.write("<br>");
document.write(typeof nVar);

var bNumber = Number(false);
document.write("<br>");
document.write(bNumber);

var nNumber = Number(null);
document.write("<br>");
document.write(nNumber);

var unNumber = Number(undefined);
document.write("<br>");
document.write(unNumber);

/**
 * 一元运算符
 */
var y = 5;
var x = "2";
// x += y;
x = x + y;
document.write("<br>");
document.write(x);


/**
 * object 对象类型
 */
var person = {
    name:"Bob",
    age:20,
    tag:['js','web','mobile'],
    city:"Beijing",
    hasCar:true,
    zipcode:null
};
document.write("<br>");
document.write(person.name);



