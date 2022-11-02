import React, { useEffect, useState } from "react";
import axios from "axios";

const AllSites = () => {
  const [sites, setSites] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/sites/db/sites")
      .then((res) => setSites(res.data));
  }, []);
  return (
    <div className="sites">
      <h1>SITES</h1>
      <ul>
        {sites.map((sites) => (
          <li key={sites.Id_site}>
            {sites.Name}, {sites.Status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllSites;
