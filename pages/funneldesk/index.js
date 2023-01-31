import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import { DeskStarted } from "../../components/funnelDeskCom/DeskStarted";
import { EliteLast } from "../../components/funnelDeskCom/EliteLast";
import { EliteServices } from "../../components/funnelDeskCom/EliteServices";
import { FunnelDeskBanner } from "../../components/funnelDeskCom/FunnelDeskBanner";
import { FunnelSupport } from "../../components/funnelDeskCom/FunnelSupport";
import { IndustryExperts } from "../../components/funnelDeskCom/IndustryExperts";
import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";
import { useSelector } from "react-redux";
export default function FunnelDesk() {
  const productMount = useSelector((state) => state.mountNav);
  console.log("from product", productMount);
  return (
    <div style={{ color: "#393939" }}>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
      <FunnelDeskBanner />
      <FunnelSupport />
      <EliteServices />
      <EliteLast />
      <IndustryExperts />
      <DeskStarted />
    </div>
  );
}
