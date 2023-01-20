import React from "react";
import styles from "./OurDevPage.module.css";
import { OurDevBanner } from "../../components/OurDevPage/OurDevBanner/OurDevBanner";
import { OurDevProcess } from "../../components/OurDevPage/OurDevProcess/OurDevProcess";
import { OurWholeDev } from "../../components/OurDevPage/OurWholeDev/OurWholeDev";
import { OurDevQuery } from "../../components/OurDevPage/OurDevQuery/OurDevQuery";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function OurDevelopment () {
  return (
    <div className={styles.ourDevPageContainer}>
      <Navbar />
      <OurDevBanner />
      <OurDevProcess />
      <OurWholeDev />
      <OurDevQuery />

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
    </div>
  );
};
