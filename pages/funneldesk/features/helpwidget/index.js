import React from "react";

import { HelpDeskBanner } from "../../../../components/funnelDeskHelpWidget/HelpDeskBanner";
import { HelpDeskLowerBanner } from "../../../../components/funnelDeskHelpWidget/HelpDeskLowerBanner";
import { HelpWidget } from "../../../../components/funnelDeskHelpWidget/HelpWidget";
import Navbar from "../../../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../../../components/Navbar/ProductsNavbar/ProductsNavbar";

export default function funnelDeskHelpWidget() {
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
      <ProductsNavbar navproductredux={{
            color: "black",
            logo: false,
          }} />
      <HelpDeskBanner />
      <HelpWidget />
      <HelpDeskLowerBanner />
    </div>
  );
}
