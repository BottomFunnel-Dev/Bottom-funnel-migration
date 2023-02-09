import React from "react";

import { DataScienceBanner } from "../../components/DataSciencePage/DataScienceBanner/DataScienceBanner";
import { DataScienceUnique } from "../../components/DataSciencePage/DataScienceUnique/DataScienceUnique";
import { DataScienceServices } from "../../components/DataSciencePage/DataScienceServices/DataScienceServices";
import { DataScienceMidBanner } from "../../components/DataSciencePage/DataScienceMidBanner/DataScienceMidBanner";
import { DataScienceBF } from "../../components/DataSciencePage/DataScienceBF/DataScienceBF";
import { DataScienceMethods } from "../../components/DataSciencePage/DataScienceMethods/DataScienceMethods";
import { DataScienceSlider } from "../../components/DataSciencePage/DataScienceSlider/DataScienceSlider";
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

export default function DataScience() {
  return (
    <div>
      <Head>
        <title>Data Science Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for data science services? We've got you 
          covered. From data analysis to data visualization, 
          we have it all. Read on to know about our offerings 
          and how to register for them."
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
        <DataScienceBanner />
        <DataScienceUnique />
        <DataScienceServices />
        <DataScienceMidBanner />
        <DataScienceBF />
        <DataScienceMethods />
        <DataScienceSlider />
        <CustomWebForm />

        {/* Other react required components */}
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
