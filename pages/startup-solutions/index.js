import React from "react";

import styles from "./StartupSolutions.module.css";
import { StartupSolutionsBanner } from "../../components/StartupSolutions/StartupSolutionsBanner/StartupSolutionsBanner";
import { StartupSolMidBanner } from "../../components/StartupSolutions/StartupSolMidBanner/StartupSolMidBanner";
import { StartupSolPartner } from "../../components/StartupSolutions/StartupSolPartner/StartupSolPartner";
import { StartupSolOffer } from "../../components/StartupSolutions/StartupSolOffer/StartupSolOffer";
import { StartupSolOfferCard } from "../../components/StartupSolutions/StartupSolOfferCard/StartupSolOfferCard";
import { StartupSolWhyBF } from "../../components/StartupSolutions/StartupSolWhyBF/StartupSolWhyBF";
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

export default function StartupSolutions() {
  return (
    <div className={styles.StartupSolutionsMain}>
      <Head>
        <title>StartUp Solutions Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Want to start and grow your own startup? Our 
          comprehensive startup solutions services can help 
          you. Learn about our offerings and contact us for a 
          consultation"
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
        <StartupSolutionsBanner />
        <StartupSolPartner />
        <StartupSolOffer />
        <StartupSolOfferCard />
        <StartupSolMidBanner />
        <StartupSolWhyBF />
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
