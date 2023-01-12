import React from "react";
import { MobileDevMainBanner } from "./MobileDevMainBanner/MobileDevMainBanner";
import { MobileDevMainCards } from "./MobileDevMainCards/MobileDevMainCards";
import { MobileDevMainProject } from "./MobileDevMainProject/MobileDevMainProject";
import { MobileDevMainServices } from "./MobileDevMainServices/MobileDevMainServices";
import { MobileDevMainSolutions } from "./MobileDevMainSolutions/MobileDevMainSolutions";
import { MobileDevMainWhyChoose } from "./MobileDevMainWhyChoose/MobileDevMainWhyChoose";



export default function MobileDevMain () {
  return (
    <div>
      <MobileDevMainBanner />
    <MobileDevMainServices />
      {/*<MobileDevMainCards />
        <MobileDevMainSolutions />
     <MobileDevMainProject />
     <MobileDevMainWhyChoose />
  */}
    </div>
  );
};
