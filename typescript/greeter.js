/**
 * Created by yuant on 2016/12/7.
 */
function greeter(person) {
    return "Hello," + person.fullName;
}
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var user = new Student("Jane", "M.", "User");
document.querySelector("#container").innerHTML = greeter(user);
//# sourceMappingURL=greeter.js.map