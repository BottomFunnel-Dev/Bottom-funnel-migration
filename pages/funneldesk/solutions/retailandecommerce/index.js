import React from "react";
import { RetailEcommerceBanner } from "../../../../components/funnelDeskRetailEcommerce/RetailEcommerceBanner";
import { RetailInsights } from "../../../../components/funnelDeskRetailEcommerce/RetailInsights";
import { RetailRedefine } from "../../../../components/funnelDeskRetailEcommerce/RetailRedefine";
import { RetailsCustomer } from "../../../../components/funnelDeskRetailEcommerce/RetailsCustomer";
import { RetailShopers } from "../../../../components/funnelDeskRetailEcommerce/RetailShopers";
import { RetailTeam } from "../../../../components/funnelDeskRetailEcommerce/RetailTeam";
import Navbar from "../../../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../../../components/Navbar/ProductsNavbar/ProductsNavbar";

export default function funnelDeskRetailEcommerce() {
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
          
      <RetailEcommerceBanner />
      <RetailShopers />
      <RetailRedefine />
      <RetailsCustomer />
      <RetailTeam />
      <RetailInsights />
    </div>
  );
}
