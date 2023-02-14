import React from "react";

import { WearableBanner } from "../../components/WearableAppDevelopment/WearableBanner/WearableBanner";
import { WearableContainer } from "../../components/WearableAppDevelopment/WearableContainer/WearableContainer";
import { Scroller } from "../../components/WearableAppDevelopment/Scroller/Scroller";
import { Usercentric } from "../../components/WearableAppDevelopment/Usercentric/Usercentric";
import { WearablePartner } from "../../components/WearableAppDevelopment/WearablePartner/WearablePartner";

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

export default function WearableAppDevelopment() {
  return (
    <>
      <Head>
        <title>Wearable App Development Services | Bottom Funnel</title>
        <meta
          name="description"
          content="BottomFunnel IT Solution offers Wearable Device App Development Services for iOS and Android. We have expertise in developing apps for smart watches, Smart Glasses and fitness bands."
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
        <WearableBanner />
        <WearableContainer />
        <Scroller />
        <Usercentric />
        <WearablePartner />

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
    </>
  );
}
