import React, { useEffect, useState } from "react";
import axios from "axios";

const AllNumberOfEmployees = () => {
  const [numberOfEmployees, setnumberOfEmployees] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/sites/db/numberOfEmployees")
      .then((res) => setnumberOfEmployees(res.data));
  }, []);
  return (
    <div className="numberOfEmployees">
      <h1>NUMBER OF EMPLOYEES</h1>
      <ul>
        {numberOfEmployees.map((numberOfEmployees) => (
          <li key={numberOfEmployees.Id_site}>{numberOfEmployees.Employees}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllNumberOfEmployees;
