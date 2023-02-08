import React from "react";
import { FullAppDevelopmentCycleBanner } from "../../components/FullAppDevelopmentCycle/FullAppDevelopmentCycleBanner/FullAppDevelopmentCycleBanner";
import { ProjectManager } from "../../components/FullAppDevelopmentCycle/ProjectManager/ProjectManager";
import { StartHere } from "../../components/FullAppDevelopmentCycle/StartHere/StartHere";

export default function FullAppDevelopmentCycle() {
  return (
    <div>
      <FullAppDevelopmentCycleBanner />
      <ProjectManager />
      {/* <OurTeamCycle /> */}

      {/* <KickstartProject /> */}
      <StartHere />
    </div>
  );
}
