import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import { DeskStarted } from "../../components/funnelDeskCom/DeskStarted";
import { EliteLast } from "../../components/funnelDeskCom/EliteLast";
import { EliteServices } from "../../components/funnelDeskCom/EliteServices";
import { FunnelDeskBanner } from "../../components/funnelDeskCom/FunnelDeskBanner";
import { FunnelSupport } from "../../components/funnelDeskCom/FunnelSupport";
import { IndustryExperts } from "../../components/funnelDeskCom/IndustryExperts";

export default function FunnelDesk() {
  return (
    <div>
      {/* <Navbar /> */}
      <FunnelDeskBanner />
      {/* <FunnelSupport /> */}
      {/* <EliteServices /> */}
      {/* <EliteLast /> */}
      {/* <IndustryExperts /> */}
      {/* <DeskStarted /> */}
    </div>
  );
}
