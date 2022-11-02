import React from "react";
import AllAddress from "../components/AllAddress";
import AllNumberOfEmployees from "../components/AllNumberOfEmployees";
import AllProductionLines from "../components/AllProductionLines";
import AllSites from "../components/AllSites";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const ProductionSite = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <AllSites />
      <AllAddress />
      <AllProductionLines />
      <AllNumberOfEmployees />
    </div>
  );
};

export default ProductionSite;
