/*var emp ={} //simplest way of creating a object
emp.empid =123;
emp.empname = "OD";
emp.empAddress = "Chennai";
emp.salary = 312000;

console.log(emp); // calls all records
console.log(emp.empid); // calls individual records

var emp2 = emp;  // create a copy in singleton objects
emp2.empname = "Varu";
console.log(emp.empname); // emp2 and emp are ame as they are singleton, any changes made to any object will reflect in the change in all the objects
*/
let employee = function(id,name,address)
{
    this.empid =  id;
    this.empName = name;
    this.empAddress = address;
    this.display = function()
    {
        console.log("The name: " + this.empName)
        console.log("The address: " + this.empAddress)
        console.log("The ID: " + this.empid)
    }
}

let emp1 = new employee(123, "OD", "Chennai")
let emp2 = new employee(124, "Varu", "Chennai")
let emp3 = new employee(125, "Deepak", "Chennai")

emp1.display();
emp2.display();
emp3.display();

console.log("The Data: " + emp2.empName);
