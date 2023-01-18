import React from "react";

import { ItConsultingWebsiteBanner } from "./ItConsultingWebsiteBanner/ItConsultingWebsiteBanner";
import { ConsultingServices } from "./ConsultingServices/ConsultingServices";
import { ConsultingQuestion } from "./ConsultingQuestion/ConsultingQuestion";
import { ConsultingWhyChooseUs } from "./ConsultingWhyChooseUs/ConsultingWhyChooseUs";
import { OurProcess } from "./OurProcess/OurProcess";
import { ConsultingTechTools } from "./ConsultingTechTools/ConsultingTechTools";


export default function ItConsultingWebsite  ()  {

  return (
    <div>
      <ItConsultingWebsiteBanner />
      <ConsultingServices />
      <ConsultingQuestion />
        <ConsultingWhyChooseUs /> 
       <OurProcess />
        <ConsultingTechTools /> 

  
    </div>
  );
};
