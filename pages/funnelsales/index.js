import React from "react";
import { SaleSmarter } from "../../components/funnelSales/SaleSmarter/SaleSmarter";
import { SalesPageBanner } from "../../components/funnelSales/SalesPageBanner/SalesPageBanner";

export default function funnelSales() {
  return (
    <div style={{ color: "#393939" }}>
      <SalesPageBanner />
      {/* <Revenue /> */}
      <SaleSmarter />
      {/* <Opportunity /> */}
      {/* <SalesWorldwide /> */}
      {/* <MakeYourDeal /> */}
    </div>
  );
}
