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

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." },
);
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function index() {
  return (
    <div>
      <Head>
        <title>Web App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Want to build a killer website or app? Our 
        extensive knowledge and experience in web 
        app development can help you create 
        top-notch solutions for your business."
        />
      </Head>
      <main>
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
      </main>
    </div>
  );
}
