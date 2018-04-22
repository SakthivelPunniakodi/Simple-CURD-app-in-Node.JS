const yargs = require("yargs");
const _ = require("lodash");

const objEmployee = require("./Modules/Employee.js");
const Empinfo = require("./Model/Emp.js");

const EmpIDOption={
  describe:'Employee ID',
  demand:true,
  alias:'i'
};
const EmpNameOption={
    describe:'Employee Name',
    demand:true,
    alias:'n'
  };
const EmpDepartmentOption={
    describe:'Employee Department',
    demand:true,
    alias:'d'
  };

const argv = yargs
              .command(
                'addEmployee','adding new employee',{
                EmpID : EmpIDOption,
                EmpName : EmpNameOption,
                EmpDepartment : EmpDepartmentOption
                }
              )
              .command(
                'updateEmployee','updating the existing employee',{
                EmpID : EmpIDOption,
                EmpName : EmpNameOption,
                EmpDepartment : EmpDepartmentOption
                }
              )
              .command(
                'getEmployee','provides the existing employee details',{
                EmpID : EmpIDOption,
                }
              )
              .command(
                'removeEmployee','removes the existing employee',{
                EmpID : EmpIDOption,
                }
              )
              .command(
                'displayallEmployee','display all the existing employees',{
                }
              )
              .help()
              .argv;

var command = process.argv[2];

var getEmpInfo = (argv)=>{
  Empinfo.setEmpID(argv.EmpID);
  Empinfo.setEmpName(argv.EmpName);
  Empinfo.setEmpDepartment(argv.EmpDepartment);
  return Empinfo.getEnployee();
}

if(command === "addEmployee")
{
  var emp = getEmpInfo(argv);
  console.log(objEmployee.addEmployee(emp));
  objEmployee.displayEmployee(emp);
}
else if(command === "getEmployee")
{
  var EmpID=argv.EmpID;
  var emp = objEmployee.getEmployee(EmpID);
  if(emp){
    objEmployee.displayEmployee(emp);
  }
  else {
    console.log("Invalid EmpID");
  }
}
else if(command === "removeEmployee")
{
  var EmpID=argv.EmpID;
  console.log(objEmployee.removeEmployee(EmpID));
}
else if(command==="updateEmployee")
{
  var emp = getEmpInfo(argv);
  objEmployee.updateEmployee(emp);
  objEmployee.displayEmployee(emp);
}
else if(command ==="displayallEmployee")
{
  var emps =objEmployee.getallEmployee();
  _.forEach(emps, function(em) {
    objEmployee.displayEmployee(em);
  });
}
else {
  console.log("Bad/Invalid Command");
}
