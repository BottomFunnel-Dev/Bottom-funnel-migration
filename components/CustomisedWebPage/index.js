import React from 'react';
import styles from "./CustomisedWebPage.module.css";

import { CustomisedWebBanner } from './CustomisedWebBanner/CustomisedWebBanner';
import { CustomisedWebUnique } from './CustomisedWebUnique/CustomisedWebUnique';
import { CustomisedWebServices } from './CustomisedWebServices/CustomisedWebServices';
import { CustomWebSolutions } from './CustomWebSolutions/CustomWebSolutions';
import { CustomWebMidBanner } from './CustomWebMidBanner/CustomWebMidBanner';
import { CustomWebWhyBF } from './CustomWebWhyBF/CustomWebWhyBF';
import { CustomWebSlider } from './CustomWebSlider/CustomWebSlider';
import { CustomWebForm } from './CustomWebForm/CustomWebForm';

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

export default function CustomisedWebDevelopment () {
  return (
    <div className={styles.CustomisedWebPageContainer}>
        
      <CustomisedWebBanner />
      <CustomisedWebUnique />
      <CustomisedWebServices />
      <CustomWebSolutions />
      <CustomWebMidBanner />
      <CustomWebWhyBF />
      <CustomWebSlider />
      <CustomWebForm />
      
      <StoriesSection />
      <Industries />
      {/* <PlanProject /> */}
      <OndemandSection />
      {/* <PortFolio /> */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      {/* <MainFooter /> */}
    </div>
  );
};