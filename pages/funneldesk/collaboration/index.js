import React from "react";

import { CollaboratinTeamwork } from "../../../components/funnelDeskCollaboration/CollaboratinTeamwork/CollaboratinTeamwork";
import { CollaborationAbout } from "../../../components/funnelDeskCollaboration/CollaborationAbout/CollaborationAbout";
import { CollaborationBanner } from "../../../components/funnelDeskCollaboration/CollaborationBanner/CollaborationBanner";
import { CollaborationMidBanner } from "../../../components/funnelDeskCollaboration/CollaborationMidBanner/CollaborationMidBanner";
import { CollaborationOffers } from "../../../components/funnelDeskCollaboration/CollaborationOffers/CollaborationOffers";

export default function funnelDeskCollaboration() {
  return (
    <div style={{ color: "#393939" }}>
      <CollaborationBanner />
      <CollaboratinTeamwork />
      <CollaborationAbout />
      <CollaborationOffers />
      <CollaborationMidBanner />
    </div>
  );
}
