import React from "react";
import styles from "./ottapp.module.css";

import { OttHeader } from "../../components/Ott-App-Page/ott-Header/OttHeader";
import { OttSolutions } from "../../components/Ott-App-Page/Ott-Solution-Card-Comp/OttSolutions";
import { OttAdminPannel } from "../../components/Ott-App-Page/Ott-Admn-Pannel/OttAdminPannel";
import { OttFeatures } from "../../components/Ott-App-Page/Ott-Features/OttFeatures";
import { OttFooter } from "../../components/Ott-App-Page/Ott-Footer/OttFooter";

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

export default function OTTPage() {
  return (
    <div className={styles.ottMain}>
      <Head>
        <title>OTT Web and App Development Company | Bottom Funnel</title>
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
