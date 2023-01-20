import React from "react";

import { HelpDeskBanner } from "../../../../components/funnelDeskHelpWidget/HelpDeskBanner";
import { HelpDeskLowerBanner } from "../../../../components/funnelDeskHelpWidget/HelpDeskLowerBanner";
import { HelpWidget } from "../../../../components/funnelDeskHelpWidget/HelpWidget";

export default function funnelDeskHelpWidget() {
  return (
    <div style={{ color: "#393939" }}>
      <HelpDeskBanner />
      <HelpWidget />
      <HelpDeskLowerBanner />
    </div>
  );
}
