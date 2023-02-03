import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { DeskStarted } from "../../components/funnelDeskCom/DeskStarted";
import { EliteLast } from "../../components/funnelDeskCom/EliteLast";
import { EliteServices } from "../../components/funnelDeskCom/EliteServices";
import { FunnelDeskBanner } from "../../components/funnelDeskCom/FunnelDeskBanner";
import { FunnelSupport } from "../../components/funnelDeskCom/FunnelSupport";
import { IndustryExperts } from "../../components/funnelDeskCom/IndustryExperts";
import { ProductsNavbar } from "../../components/Navbar/ProductsNavbar/ProductsNavbar";

export default function FunnelDesk() {

  return (
    <div style={{ color: "#393939" }}>
      <Navbar
        productMount={{
          navMount: true,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
      <ProductsNavbar  navproductredux={{
            color: "black",
            logo: false,
          }}/>
          
      <FunnelDeskBanner />
      <FunnelSupport />
      <EliteServices />
      <EliteLast />
      <IndustryExperts />
      <DeskStarted />
    </div>
  );
}
