import React from "react";
import { MobileDevMainBanner } from "../../components/MobileDevelopment/MobileDevMainBanner/MobileDevMainBanner";
import { MobileDevMainCards } from "../../components/MobileDevelopment/MobileDevMainCards/MobileDevMainCards";
import { MobileDevMainProject } from "../../components/MobileDevelopment/MobileDevMainProject/MobileDevMainProject";
import { MobileDevMainServices } from "../../components/MobileDevelopment/MobileDevMainServices/MobileDevMainServices";
import { MobileDevMainSolutions } from "../../components/MobileDevelopment/MobileDevMainSolutions/MobileDevMainSolutions";
import { MobileDevMainWhyChoose } from "../../components/MobileDevelopment/MobileDevMainWhyChoose/MobileDevMainWhyChoose";

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

export default function MobileDevMain() {
  return (
    <div>
      <Head>
        <title>Mobile App Development Services | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for mobile app development services? Our 
          team at Bottom Funnel offers comprehensive mobile 
          app solutions. Read on to know more."
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
        <MobileDevMainBanner />
        <MobileDevMainServices />
        <MobileDevMainCards />
        <MobileDevMainSolutions />
        <MobileDevMainProject />
        <MobileDevMainWhyChoose />

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
