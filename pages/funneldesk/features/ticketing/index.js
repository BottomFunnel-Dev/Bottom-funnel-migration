import React from "react";
import { SimplifiedTicketting } from "../../../../components/funnelDeksTicketing/SimplifiedTicketting/SimplifiedTicketting";
import { TicketingBanner } from "../../../../components/funnelDeksTicketing/TicketingBanner/TicketingBanner";
import { TicketingServices } from "../../../../components/funnelDeksTicketing/TicketingServices/TicketingServices";
import { TickettingInbox } from "../../../../components/funnelDeksTicketing/TickettingInbox/TickettingInbox";
import { TickettingStartTrials } from "../../../../components/funnelDeksTicketing/TickettingStartTrials/TickettingStartTrials";

export default function funnelDeskTicketing() {
  return (
    <div style={{ color: "#393939" }}>
      <TicketingBanner />
      <SimplifiedTicketting />
      <TickettingInbox />
      <TicketingServices />
      <TickettingStartTrials />
    </div>
  );
}
