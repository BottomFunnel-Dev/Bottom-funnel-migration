// import styles from "../../styles/WebDevelopmentMain.module.css";
import { WebdevBanner } from "../../components/WebDevelopment/bannerWebdev/WebdevBanner";
// import { webDevMain } from "../../Data/webdevPageData/TechBannerData";
import { webDevMain } from "../../components/Data/webdevPageData/TechBannerData";
import { WebDevServices } from "../../components/WebDevelopment/webdevServices/WebDevServices";
import { webDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { GetStarted } from "../../components/WebDevelopment/webGetStartedCard/GetStarted";
import { WebDevTechStack } from "../../components/WebDevelopment/webDevTachstack/WebDevTechStack";
import { WebDevWhy } from "../../components/WebDevelopment/webDevWhy/WebDevWhy";
import { mernWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function index() {
  return (
    <div>
   <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <WebdevBanner bannerContent={webDevMain} />
      <WebDevServices webservicesContent={webDevServices} />
      <GetStarted />

      <WebDevTechStack />

      <WebDevWhy whyDevContent={mernWhyContent} />

      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />  */}
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
