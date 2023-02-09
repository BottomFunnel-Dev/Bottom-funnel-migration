import React from "react";

import { NFTDevBanner } from "../../components/NFTpage/NFTDevBanner/NFTDevBanner";
import { NFTAboutIt } from "../../components/NFTpage/NFTAboutIt/NFTAboutIt";
import { NFTOffers } from "../../components/NFTpage/NFTOffers/NFTOffers";
import { NFTSolutions } from "../../components/NFTpage/NFTSolutions/NFTSolutions";
import { NFTMidBanner } from "../../components/NFTpage/NFTMidBanner/NFTMidBanner";
import { NFTWhyBF } from "../../components/NFTpage/NFTWhyBF/NFTWhyBF";
import { CustomWebForm } from "../../components/CustomisedWebPage/CustomWebForm/CustomWebForm";

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

export default function NFTDevelopment() {
  return (
    <div>
      <Head>
        <title>NFT Development Service Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for reliable NFT development services? 
          Our team has extensive experience in this area 
          and offers cutting-edge solutions. Read on to know 
          about our services"
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
        <NFTDevBanner />
        <NFTAboutIt />
        <NFTOffers />
        <NFTSolutions />
        <NFTMidBanner />
        <NFTWhyBF />
        <CustomWebForm />

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
