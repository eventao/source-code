/**
 * Created by forli on 2017/2/10.
 */
//块作用域
console.log("-----let 块级作用域");
var a = [];
for(let i = 0;i < 10; i++){
    a[i] = function(){
        console.log(i);
    }
}
a[7]();
//暂时性死区
console.log("-----暂时性死区");
var temp = 123;
if(true){
    try{
        temp = "abc";
        let temp;
    }catch(e){
        console.log(e.message);
    }
}


