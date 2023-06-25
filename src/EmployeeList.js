import React, { useState, useEffect } from "react";
import EmployeeListItem from "./Components/EmployeeListItem";
import "./App.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const data = await response.json();
        setEmployees(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployees();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="input-box">
        <input
          className=""
          type="text"
          placeholder="Search by first name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <ul>
        <div className="list-container">
          {filteredEmployees.map((employee) => (
            <EmployeeListItem key={employee.id} employee={employee} />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default EmployeeList;
