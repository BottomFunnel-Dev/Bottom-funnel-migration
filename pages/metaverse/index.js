import React from "react";

import { MetaverseBanner } from "../../components/MetaversePage/MetaverseBanner/MetaverseBanner";
import { MetaverseServices } from "../../components/MetaversePage/MetaverseServices/MetaverseServices";
import { MetaverseOffers } from "../../components/MetaversePage/MetaverseOffers/MetaverseOffers";
import { MetaverseMidBanner } from "../../components/MetaversePage/MetaverseMidBanner/MetaverseMidBanner";
import { MetaverseWhyBF } from "../../components/MetaversePage/MetaverseWhyBF/MetaverseWhyBF";
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

export default function MetaverseWebPage() {
  return (
    <div>
      <Head>
        <title>Metaverse Development services | Bottom Funnel</title>
        <meta
          name="description"
          content="Our Metaverse solutions help companies innovate 
          and stay competitive. Our Metaverse services 
          development includes consulting, design, and 
          development. Read on to know more."
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
        <MetaverseBanner />
        <MetaverseServices />
        <MetaverseOffers />
        <MetaverseMidBanner />
        <MetaverseWhyBF />
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
