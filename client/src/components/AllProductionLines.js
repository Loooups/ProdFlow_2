import React, { useEffect, useState } from "react";
import axios from "axios";

const AllProductionLines = () => {
  const [productionLines, setProductionLines] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/sites/db/productionLine")
      .then((res) => setProductionLines(res.data));
  }, []);
  return (
    <div className="productionLines">
      <h1>PRODUCTION LINES</h1>
      <ul>
        {productionLines.map((productionLines) => (
          <li key={productionLines.Id_site}>
            {productionLines.ID_line}, {productionLines.Rate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProductionLines;
