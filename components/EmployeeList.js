import React from "react";

function EmployeeList({ employees = [] }) {
  return (
    <div className="employee-list">
      <h1>Employee List</h1>

      {employees.map((employee, index) => (
        <p key={index}>
          <a href="#">{employee.name}</a>
        </p>
      ))}
    </div>
  );
}

export default EmployeeList;