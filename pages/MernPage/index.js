import React from "react";
import { mernbanner } from "../Data/webdevPageData/TechBannerData";
import { Mernbanner } from "./Mernbanner";
import { MernIntro } from "./MernIntro";
import { whatData } from "../Data/webdevPageData/TechWhatData";
import { MernPoluparServices } from "./MernPoluparServices";
import { mernservices } from "../Data/webdevPageData/Popularservices";
import { TechGetStarted } from "./TechGetStarted";
import { letstart } from "../Data/webdevPageData/LetStart";
import { WhyBottom } from "./WhyBottom";
import { mernWhyContent } from "../Data/webdevPageData/whyBottomContent";


export default function MernPageWebDevelopment() {
  return (
    <div>
      <Mernbanner bannerdata={mernbanner} />
   <MernIntro techIntro={whatData} />
     <MernPoluparServices popularservice={mernservices} />
      <TechGetStarted calltoAction={letstart} />
    <WhyBottom whyContent={mernWhyContent} />
  

    </div>
  );
}
