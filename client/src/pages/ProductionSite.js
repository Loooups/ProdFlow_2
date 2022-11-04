import React from "react";
import AllAddress from "../components/AllAddress";
import AllInformations from "../components/AllInformations";
import AllProductionLines from "../components/AllProductionLines";
import AllSites from "../components/AllSites";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";

const ProductionSite = () => {
  return (
    <div>
      <Logo />
      <NavBar />
      {/* <Navigation /> */}
      <AllInformations />
      {/* <AllSites />
      <AllAddress />
      <AllProductionLines /> */}
    </div>
  );
};

export default ProductionSite;
