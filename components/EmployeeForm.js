import React, { useState } from "react";

function EmployeeForm({ addEmployee }) {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addEmployee(employee);

    setEmployee({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div>
      <h1>Add Employee</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Phone: </label>
          <input
            type="text"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default EmployeeForm;