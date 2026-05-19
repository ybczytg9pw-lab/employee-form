import React, { useState, useEffect } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import "./App.css";

function App() {
 const [employees, setEmployees] = useState(() => {
  const savedEmployees = localStorage.getItem("employees");
  return savedEmployees ? JSON.parse(savedEmployees) : [];
});

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <div className="App">
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;