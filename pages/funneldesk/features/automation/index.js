import React from "react";
import { AiWork } from "../../../../components/funnelDeskAutomation/aiWork/AiWork";
import { AutomationBanner } from "../../../../components/funnelDeskAutomation/automationBanner/AutomationBanner";
import { TicketAssignment } from "../../../../components/funnelDeskAutomation/ticketAssignment/TicketAssignment";
import { TopTickets } from "../../../../components/funnelDeskAutomation/topTickets/TopTickets";
import { WhyAutomation } from "../../../../components/funnelDeskAutomation/whyAutomation/WhyAutomation";
import Navbar from "../../../../components/Navbar/Navbar";
import { ProductsNavbar } from "../../../../components/Navbar/ProductsNavbar/ProductsNavbar";

export default function FunnelDeskAutomation() {
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
      <ProductsNavbar
        navproductredux={{
          color: "black",
          logo: false,
        }}
      />
      <AutomationBanner />
      <TicketAssignment />
      <AiWork />
      <TopTickets />
      <WhyAutomation />
    </div>
  );
}
