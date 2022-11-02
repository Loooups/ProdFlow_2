import React, { useEffect, useState } from "react";
import axios from "axios";

const AllAddress = () => {
  const [address, setAddress] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/sites/db/address")
      .then((res) => setAddress(res.data));
  }, []);
  return (
    <div className="address">
      <h1>ADDRESS</h1>
      <ul>
        {address.map((address) => (
          <li key={address.Id_address}>
            {address.Address}, {address.City}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllAddress;
