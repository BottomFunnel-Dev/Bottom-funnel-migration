import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import * as ReactAnimation from "../../public/webdevanimation/php.json";
import { phpBanner } from "../../components/Data/webdevPageData/TechBannerData";
import { phpstackIntro } from "../../components/Data/webdevPageData/StackData";
import { phpDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { whyPHP } from "../../components/Data/webdevPageData/whyTechStack";
import { PHPWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";

const WebdevBanner = dynamic(
  () => import("../../components/WebDevelopment/bannerWebdev/WebdevBanner"),
  { loading: () => "loading..." },
);
const Techstackintro = dynamic(
  () => import("../../components/WebDevelopment/techStackintro/Techstackintro"),
  { loading: () => "loading..." },
);
const WebDevServices = dynamic(
  () => import("../../components/WebDevelopment/webdevServices/WebDevServices"),
  { loading: () => "loading..." },
);
const WhyTechStack = dynamic(
  () => import("../../components/WebDevelopment/whyTechStack/WhyTechStack"),
  { loading: () => "loading..." },
);
const GetStarted = dynamic(
  () => import("../../components/WebDevelopment/webGetStartedCard/GetStarted"),
  { loading: () => "loading..." },
);
const WebDevWhy = dynamic(
  () => import("../../components/WebDevelopment/webDevWhy/WebDevWhy"),
  { loading: () => "loading..." },
);
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
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  loading: () => "loading...",
  ssr: false,
});

export default function PhP() {
  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>PHP Development Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="PHP is a widely used programming language.
        Learn the different PHP solutions and 
        development techniques that can help you 
        land your next project."
        />
      </Head>
      <main>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
        />
        <WebdevBanner bannerContent={phpBanner} animateData={ReactAnimation} />
        <Techstackintro techContent={phpstackIntro} />
        <WebDevServices webservicesContent={phpDevServices} />
        <WhyTechStack techData={whyPHP} />
        <GetStarted />
        <WebDevWhy whyDevContent={PHPWhyContent} />

        {/* Other react required components  */}
        <StoriesSection />
        <OndemandSection />
        {/* <PortFolio />  */}
        {/* <PlanProject />  */}
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </div>
  );
}
