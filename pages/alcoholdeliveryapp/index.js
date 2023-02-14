import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { alcoholLogo } from "../../components/Data/SeopartnerData";

// ---------------importing components with lazy loading-----------------------
const AlcoholBanner = dynamic(
  () => import("../../components/alcohol-delivery/AlcoholBanner/AlcoholBanner"),
  { loading: () => "loading..." },
);
const Trusted = dynamic(
  () => import("../../components/SEO/SeoTrustedCompanies/Seotrusted"),
  { loading: () => "loading..." },
);
const AlcoholBookCall = dynamic(
  () =>
    import("../../components/alcohol-delivery/AlcoholBookCall/AlcoholBookCall"),
  { loading: () => "loading..." },
);
const AlcoholSuggestions = dynamic(
  () =>
    import(
      "../../components/alcohol-delivery/AlcoholSuggestions/AlcoholSuggestions"
    ),
  { loading: () => "loading..." },
);
const AlcoholSolutions = dynamic(
  () =>
    import(
      "../../components/alcohol-delivery/AlcoholSolutions/AlcoholSolutions"
    ),
  { loading: () => "loading..." },
);
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: () => "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: () => "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: () => "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: () => "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: () => "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: () => "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: () => "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: () => "loading..." },
);
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  loading: () => "loading...",
});

// ------------------Main page function-----------------
export default function AlcoholDelivery() {
  return (
    <>
      <Head>
        <title> Alcohol web App Development Company | Bottom Funnel </title>
        <meta
          name="description"
          content="If you're looking to develop an alcohol web app and want to do it 
        the right way, then Bottom Funnel is the company for you! We offer a 
        wide range of liquor web app development solutions that will suit 
        your specific needs. Keep reading to find out more!"
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

        <AlcoholBanner />
        <Trusted partnerLogo={alcoholLogo} />
        <AlcoholBookCall />
        <AlcoholSuggestions />
        <AlcoholSolutions />

        <StoriesSection />
        {/* <Industries /> */}
        <PlanProject />
        <OndemandSection />
        {/* <PortFolio /> */}
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </>
  );
}
