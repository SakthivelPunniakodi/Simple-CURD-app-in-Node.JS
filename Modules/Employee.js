//importing the modules
const fs = require("fs");
const Empinfo = require("../Model/Emp.js");


//pivate methods for this modules
var EmployeeJSONPath = './Model/Employees.json';
var ReadEmployeesJSON = ()=>{
  try {
    var EmpString= JSON.parse(fs.readFileSync(EmployeeJSONPath));
    return JSON.parse(EmpString);
  } catch (e) {
    return []
  }
}
var SaveEmployeeJSON = (Employees)=>{
  var Emps = JSON.stringify(Employees);
  fs.writeFileSync(EmployeeJSONPath,JSON.stringify(Emps));
}

//implementing the functions
var add = (Employee)=>{
  var Emps=[]
  Emps= ReadEmployeesJSON();
  var DuplicateEmployee = Emps.filter((employee)=>employee.EmpID === Employee.EmpID);
  if(DuplicateEmployee.length < 1)
  {
    Emps.push(Employee);
    SaveEmployeeJSON(Emps);
    return "Added successfully!";
  }
  else {
    return "EmpID Already Exist!";
  }
}

var remove = (EmpID)=>{
  var Emps = ReadEmployeesJSON();
  var RemovedList = Emps.filter((employee)=>employee.EmpID !== EmpID);
  if(RemovedList.length != Emps.length)
  {
    SaveEmployeeJSON(RemovedList);
  }
  return RemovedList.length != Emps.length;
}

var getEmp =(EmpID)=>{
  var Emps = ReadEmployeesJSON();
  return Emps.filter((employee)=>employee.EmpID === EmpID)[0];
}

var update = (Emp)=>{
  var Emps = ReadEmployeesJSON();
  var FindEmpDet = Emps.filter((employee)=>employee.EmpID === Emp.EmpID)[0];
  var RemovedList = Emps.filter((employee)=>employee.EmpID !== Emp.EmpID);
  FindEmpDet.EmpName = Emp.EmpName;
  FindEmpDet.EmpDepartment = Emp.EmpDepartment;
  RemovedList.push(FindEmpDet);
  SaveEmployeeJSON(RemovedList);
  return "updated successfully!";
}

var getEmployees =()=>ReadEmployeesJSON();
var display = (Employee)=>{
  console.log(`Employee ID : ${Employee.EmpID}`);
  console.log(`Employee Name : ${Employee.EmpName}`);
  console.log(`Employee Department : ${Employee.EmpDepartment}`);
}

//exporting the modules
module.exports={
  addEmployee : add,
  getEmployee : getEmp,
  removeEmployee : remove,
  getallEmployee : getEmployees,
  updateEmployee : update,
  displayEmployee : display
}
