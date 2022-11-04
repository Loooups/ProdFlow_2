import React, { useEffect, useState } from "react";
import axios from "axios";

const AllInformations = () => {
  const [informations, setInformations] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/sites/db/alldb")
      .then((res) => setInformations(res.data));
  }, []);
  return (
    <div className="allInformations">
      <h3>{Date()}</h3>
      <table>
        <thead>
          <tr>
            <th>Site Name</th>
            <th>Address</th>
            <th>Status</th>
            <th>Line Number</th>
            <th>Line Rate (Unit/day)</th>
            <th>Number of Employees</th>
          </tr>
        </thead>
        <tbody>
          {informations.map((informations) => {
            return (
              <tr key={informations.Id_site}>
                <td>{informations.Name}</td>
                <td>
                  {informations.Address} , {informations.City} ,
                  {informations.ZipCode}
                </td>
                <td>
                  <button>{informations.Status}</button>
                </td>
                <td>{informations.ID_line}</td>
                <td>{informations.Rate}</td>
                <td>{informations.Employees}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <ul>
        {informations.map((informations) => (
          <li key={informations.Id_site}>
            {informations.Name}, {informations.Address}, {informations.City},
            {informations.Status}, {informations.ID_line}, {informations.Rate},
            {informations.Employees}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default AllInformations;
