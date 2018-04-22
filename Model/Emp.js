var EmpID, EmpName, EmpDepartment;

exports.setEmpID = function (id) {
    EmpID = id;
};
exports.setEmpName = function (name) {
    EmpName = name;
};
exports.setEmpDepartment = function (department) {
    EmpDepartment = department;
};

exports.getEnployee = function () {
    return {
        EmpID: EmpID,
        EmpName: EmpName,
        EmpDepartment: EmpDepartment
    };
};
