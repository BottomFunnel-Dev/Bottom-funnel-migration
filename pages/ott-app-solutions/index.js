import React from "react";
import styles from "./ottapp.module.css";

import { OttHeader } from "../../components/Ott-App-Page/ott-Header/OttHeader";
import { OttSolutions } from "../../components/Ott-App-Page/Ott-Solution-Card-Comp/OttSolutions";
import { OttAdminPannel } from "../../components/Ott-App-Page/Ott-Admn-Pannel/OttAdminPannel";
import { OttFeatures } from "../../components/Ott-App-Page/Ott-Features/OttFeatures";
import { OttFooter } from "../../components/Ott-App-Page/Ott-Footer/OttFooter";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function OTTPage() {
  return (
    <div className={styles.ottMain}>
      
      <Head>
        <title>OTT App Solutions Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Wondering how to develop an OTT App? Don't worry, we 
          can help! In this blog, we will discuss the various 
          components that make up an OTT App and the various 
          steps involved in developing one."
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
      <OttHeader />
      <OttSolutions />
      <OttAdminPannel />
      <OttFeatures />
      <OttFooter />

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
