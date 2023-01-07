import React from "react";
import styles from "./CloudPage.module.css";
import StoriesSection from "../CommonComponents/StoriesSection/StoriesSection";
import { Industries } from "../CommonComponents/industries/Industries";
import PlanProject from "../CommonComponents/PlanProject/PlanProject";
import OndemandSection from "../CommonComponents/OnDemandSection/OndemandSection";
import PortFolio from "../CommonComponents/PortFolioSection/PortFolio";
import { SeoblogSection } from "../CommonComponents/SeoBlogs/Seoblogs";
import Revamping from "../CommonComponents/revamping/Revamping";
import { TextDropdown } from "../CommonComponents/faqSection/Faqs";
import ContectForm from "../CommonComponents/ContectForm/ContectForm";
import MainFooter from "../CommonComponents/FooterSection/MainFooter";

import { CloudBanner } from "./CloudBanner/CloudBanner";
import { CloudUnique } from "./CloudUnique/CloudUnique";
import { CloudStats } from "./CloudStats/CloudStats";
import { CloudOffers } from "./CloudOffers/CloudOffers";
import { CloudWorkWithUs } from "./CloudWorkWithUs/CloudWorkWithUs";
import { CloudSolutions } from "./CloudSolutions/CloudSolutions";
import { CloudWhyBF } from "./CloudWhyBF/CloudWhyBF";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";

export default function CloudPage () {
  return (
    <div className={styles.CloudPageContainer}>
      <CloudBanner />
      <CloudUnique />
      <CloudStats />
      <CloudOffers />
      <CloudWorkWithUs />
      {/* <CloudSolutions /> */}
      <CloudWhyBF />
      {/* <CustomWebForm /> */}
      
      {/* <StoriesSection /> */}
      {/* <Industries /> */}
      {/* <PlanProject /> */}
      {/* <OndemandSection /> */}
      {/* <PortFolio /> */}
      {/* <SeoblogSection /> */}
      {/* <Revamping /> */}
      {/* <TextDropdown /> */}
      {/* <ContectForm /> */}
      {/* <MainFooter /> */}
    </div>
  );
};
