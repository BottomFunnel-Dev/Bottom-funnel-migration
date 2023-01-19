import React from "react";

import { HelpDeskBanner } from "../../../../components/funnelDeskAutomation/HelpDeskBanner";
import { HelpDeskLowerBanner } from "../../../../components/funnelDeskAutomation/HelpDeskLowerBanner";
import { HelpWidget } from "../../../../components/funnelDeskAutomation/HelpWidget";

export default function funnelDeskAutomation() {
  return (
    <div style={{ color: "#393939" }}>
      <HelpDeskBanner />
      <HelpWidget />
      <HelpDeskLowerBanner />
    </div>
  );
}
