/**
 * Created by forli on 2017/3/3.
 */
for(var i=1;i<=3;i++){
    setTimeout((function(a){  //改成立即执行函数
        console.log(a);
    })(i),0);
};

// var i = 1;
// function invoke(){
//     if(i<=3){
//         setTimeout(function(){
//             console.log(i);
//             i++;
//             invoke();
//         },0);
//     }
// }
// invoke();

// for(var i=1;i<=3;i++){
//     setTimeout(function(){
//         console.log(i);
//     },0);
// };

// var result = [];
// for(var i = 0; i < 10;i++){
//     var r = Math.random();
//     result.push(parseInt(r * 90)+10);
// }
// // console.log(result.join("--"));
// var f = true;
// while (f){
//     var r = Math.random();
//     var ff =  parseInt(r * 90)+10;
//     if(ff == 10){
//         console.log(ff);
//         f=false;
//     }
// }




// var numberArray = [3,6,2,4,1,5];
// numberArray.sort(function(a,b){
//     return b - a;
// });
// console.log(numberArray);






//console.log(numberArray.reverse());
// for(var i = 0; i < numberArray.length;i++){
//     for(var j = 0; j < numberArray.length;j++){
//         if(numberArray[i] > numberArray[j]){
//             var temp = numberArray[i];
//             numberArray[i] = numberArray[j];
//             numberArray[j] = temp;
//         }
//     }
// }
// console.log(numberArray);


// for(var i=0;i<numberArray.length;i++){
//     for (var j=0;j<numberArray.length;j++){
//         if(numberArray[i]>numberArray[j]){
//             var temp = numberArray[i];
//             numberArray[i]=numberArray[j];
//             numberArray[j] = temp;
//         }
//     }
// }
// console.log(numberArray);







// var sStr = "get-element-by-id";
// var arrStr = sStr.split('-');
// var rStr = "";
// arrStr.forEach(function(item,i){
//     if(i>0){
//         item = item[0].toUpperCase()+item.substr(1);
//     }
//     rStr+=item;
// });
// console.log(rStr);



// var stringArray = ["This","is","Baidu","Campus"]
// var stringSour = stringArray.join(" ");
// stringSour.split(" ");



// var a = new Object();
// a.value = 1;
// b = new Object();
// a = b;
// b.value = 2;
// console.log(a.value);


// var foo = "11"+2-"1";
// console.log(foo);
// console.log(typeof foo);

// if([] == ![]){
//     console.log("[] == ![]");
// }
// if(true == 1){
//     console.log("true == 1");
// }
// if(true == 2){
//     console.log("true == 2");
// }


// var a;
// console.log(typeof a); // undefined
// // console.log(zzz);
//
// // var inputs = document.getElementsByTagName('input');
// // var i = inputs.length;
// // var total = 0;
// // while(i--){
// //     if(inputs[i].type === "checkbox"){
// //         total++;
// //     }
// // }
// // document.write(total);
//
// function cal(){
//     console.log(this + arguments[2])
// }
// cal.apply(10,[0,2,12]);
//
// // global = window;
//
// var dog = {title:"大黄",content:"小黄真可爱！"};
// function say(obj){
//     function child(content){
//         console.log(this.title +"说："+ content);
//     }
//     child.apply(obj,[obj.content]);
// }
// say(dog);
//
//
//
//
// global.name = "万茂";
// var student = {
//     name:"zyy",
//     say:function(content){
//         console.log(this.name+"说："+content);
//     }
// };
// // student.say("今天天气好好呀！");
// var gg = student.say;
// gg("李涛好帅!");
//
// var teacher = {
//     name:"向航青"
// };
// teacher.say = student.say;
// teacher.say("今天好暖和！");
//
//
//
//
// var global2 = "123";
// function childFun(){
//     console.log(global2);
//     var global2 = 456;
// }
// childFun();
//
//
//
//
// //怎样判断一个对象是否为数组
// var persons = ["a","b","c"];
// var str= Object.prototype.toString.apply(persons);
// if(str == "[object Array]"){
//     console.log("是数组");
// }
// console.log(persons instanceof Array);
// console.log(Array.isArray(persons));
//
//
// var strAbc = {};
// var strAcd = "50";
// // console.log(strAbc * strAcd);
//
//
//
// var flag = false;
// var result = flag / 3;
// console.log(result);
//
//
// var nan = NaN;
// var nan2 = nan;
// // console.log(nan == nan2);
// // console.log(nan === nan2);
//
//
// //数据类型
// var a = new Number(3);
// var b = 3;
// // console.log(a+b);
//
// var abc = Number("123.123");
// var bcd = Number("bcd");
// // console.log("abc="+abc);
// // console.log(bcd);
// var b666 = global.parseInt("2.2");
// // console.log("b666="+b666);
// // console.log(parseFloat("33333"));
//
//
