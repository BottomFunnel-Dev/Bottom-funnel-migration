// import styles from "../../styles/WebDevelopmentMain.module.css";
import { WebdevBanner } from "./bannerWebdev/WebdevBanner";
// import { webDevMain } from "../../Data/webdevPageData/TechBannerData";
import { webDevMain } from "../Data/webdevPageData/TechBannerData";
import { WebDevServices } from "./webdevServices/WebDevServices";
import { webDevServices } from "../Data/webdevPageData/Popularservices";
import { GetStarted } from "./webGetStartedCard/GetStarted";
import { WebDevTechStack } from "./webDevTachstack/WebDevTechStack";
import { WebDevWhy } from "./webDevWhy/WebDevWhy";
import { mernWhyContent } from "../Data/webdevPageData/whyBottomContent";

import StoriesSection from "../CommonComponents/StoriesSection/StoriesSection";
import { Industries } from "../CommonComponents/industries/Industries";
import PlanProject from "../CommonComponents/PlanProject/PlanProject";
import OndemandSection from "../CommonComponents/OnDemandSection/OndemandSection";
import PortFolio from "../CommonComponents/PortFolioSection/PortFolio";
import { SeoblogSection } from "../CommonComponents/SeoBlogs/Seoblogs";
import Revamping from "../CommonComponents/revamping/Revamping";
import { TextDropdown } from "../CommonComponents/faqSection/Faqs";
import ContectForm from "./ContectForm/ContectForm";
import MainFooter from "../CommonComponents/FooterSection/MainFooter";

export default function index() {
  return (
    <div>

      <WebdevBanner bannerContent={webDevMain} />
      <WebDevServices webservicesContent={webDevServices} />
      <GetStarted />

     <WebDevTechStack />

      <WebDevWhy whyDevContent={mernWhyContent} />

     {/* <StoriesSection />
      <Industries />
      <PlanProject />
      <OndemandSection />
      <PortFolio /> 
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
       <MainFooter /> */}
    </div>
  );
}
