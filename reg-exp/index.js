/**
 * Created by forli on 2017/3/14.
 */

let strSources = "Visit W3School!";
document.write(strSources.search(/W3School/));
let regStr =  strSources.split(new RegExp("t W"));
document.write(regStr);


let pattern = new RegExp("e");
let source = "hello";
let flag = pattern.test(source);
document.write("<h3>"+flag+"</h3>");

pattern = new RegExp("ea*");
let s0 = "e";
let s1 = "ea";
let s2 = "eaaaaaa";
let s3 = "dwd";
let f0 = pattern.test(s0);
let f1 = pattern.test(s1);
let f2 = pattern.test(s2);
let f3 = pattern.test(s3);
document.write("<h3>"+f0+
    " "+f1+" "+f2+" "+
    f3+"</h3>");

let patt1=new RegExp("e","g");
let start = "<h3>";
let result = null;
do{
    result=patt1.exec("The best things in life are free");
    start+=result;
}
while (result!=null);
start+="</h3>";
document.write(start);


let pp = new RegExp("o+?");
let rr1 =  pp.exec("roooog");
document.write(rr1);

let uuuu = "The best things in life are free";
document.write("<h3>"+uuuu+"</h3>");
function seekingTotal(p){
    let dic = {};
    let sArray = p.split(" ");
    sArray.forEach(function(item){
        let uo = 0;
        while(uo < item.length){
            let iStr = item[uo];
            dic[iStr] = dic[iStr]?dic[iStr]+1:1;
            uo++;
        }
    });
    document.write("<h3>"+JSON.stringify(dic)+"</h3>");
}
seekingTotal(uuuu);



let str = uuuu;
let maxLenght = 0;
let result5 = "";
while(str != ""){
    oldStr = str;
    getStr = str.charAt(0);
    str = str.replace(new RegExp(getStr,'g'),"");
    if(oldStr.length - str.length > maxLenght){
        maxLenght = oldStr.length - str.length;
        result5 = getStr + " = " + maxLenght;
    }
}

document.write("<h3>"+result5+"</h3>");


