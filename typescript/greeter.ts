/**
 * Created by yuant on 2016/12/7.
 */

interface Person{
    firstName:string;
    lastName:string;
}

function greeter(person: Person){
    return "Hello," + person.fullName;
}

class Student{
    fullName:string;
    constructor(public firstName,public middleInitial,public lastName){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
var user = new Student("Jane", "M.", "User");
document.querySelector("#container").innerHTML = greeter(user);



