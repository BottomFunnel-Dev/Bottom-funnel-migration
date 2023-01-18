import React from "react";
import { DigitalTransformationBanner } from "./DigitalTransformationBanner";
import { DigitalTransformationOurService } from "./DigitalTransformationOurService";
import { DigitalTransformationQuestion } from "./DigitalTransformationQuestion";
import { DigitalTransformationWhy } from "./DigitalTransformationWhy";
import { DigitalTransformationWhyChoose } from "./DigitalTransformationWhyChoose";
import { DigitalTransformTechTools } from "./DigitalTransformTechTools";

export default function DigitalTransformation ()  {


  return (
    <div style={{ color: "#393939" }}>
     
      <DigitalTransformationBanner />
      <DigitalTransformationWhy />
      <DigitalTransformationOurService />
      <DigitalTransformationQuestion />
      <DigitalTransformationWhyChoose />
      <DigitalTransformTechTools />
      {/* ----- End of main page. Now Further components ----- */}

    </div>
  );
};
