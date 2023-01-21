import React from 'react';
import styles from "./CustomisedWebPage.module.css";

import { CustomisedWebBanner } from '../../components/CustomisedWebPage/CustomisedWebBanner/CustomisedWebBanner';
import { CustomisedWebUnique } from '../../components/CustomisedWebPage/CustomisedWebUnique/CustomisedWebUnique';
import { CustomisedWebServices } from '../../components/CustomisedWebPage/CustomisedWebServices/CustomisedWebServices';
import { CustomWebSolutions } from '../../components/CustomisedWebPage/CustomWebSolutions/CustomWebSolutions';
import { CustomWebMidBanner } from '../../components/CustomisedWebPage/CustomWebMidBanner/CustomWebMidBanner';
import { CustomWebWhyBF } from '../../components/CustomisedWebPage/CustomWebWhyBF/CustomWebWhyBF';
import { CustomWebSlider } from '../../components/CustomisedWebPage/CustomWebSlider/CustomWebSlider';
import { CustomWebForm } from '../../components/CustomisedWebPage/CustomWebForm/CustomWebForm';

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function CustomisedWebDevelopment () {
  return (
    <div className={styles.CustomisedWebPageContainer}>
      <Navbar />
      <CustomisedWebBanner />
      <CustomisedWebUnique />
      <CustomisedWebServices />
      <CustomWebSolutions />
      <CustomWebMidBanner />
      <CustomWebWhyBF />
      <CustomWebSlider />
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
    </div>
  );
};