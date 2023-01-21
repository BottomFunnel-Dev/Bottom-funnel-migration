import React from "react";
import { RetailEcommerceBanner } from "../../../../components/funnelDeskRetailEcommerce/RetailEcommerceBanner";
import { RetailInsights } from "../../../../components/funnelDeskRetailEcommerce/RetailInsights";
import { RetailRedefine } from "../../../../components/funnelDeskRetailEcommerce/RetailRedefine";
import { RetailsCustomer } from "../../../../components/funnelDeskRetailEcommerce/RetailsCustomer";
import { RetailShopers } from "../../../../components/funnelDeskRetailEcommerce/RetailShopers";
import { RetailTeam } from "../../../../components/funnelDeskRetailEcommerce/RetailTeam";

export default function funnelDeskRetailEcommerce() {
  return (
    <div>
      <RetailEcommerceBanner />
      <RetailShopers />
      <RetailRedefine />
      <RetailsCustomer />
      <RetailTeam />
      <RetailInsights />
    </div>
  );
}
