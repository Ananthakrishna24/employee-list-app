import React from "react";
import "./EmployeeListItem.css"; 
const EmployeeListItem = ({ employee }) => {
  return (
    <li className="employee-list-item">
      {" "}
      {}
      <div className="employee-id">{employee.id}</div>
      <img src={employee.avatar} alt={employee.first_name} />
      <span className="employee-first-name">{employee.first_name}</span>
    </li>
  );
};

export default EmployeeListItem;
