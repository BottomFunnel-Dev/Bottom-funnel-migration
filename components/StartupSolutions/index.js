import React from 'react'

import styles from "./StartupSolutions.module.css";
import { StartupSolutionsBanner } from './StartupSolutionsBanner/StartupSolutionsBanner';
import { StartupSolMidBanner } from "./StartupSolMidBanner/StartupSolMidBanner";
import { StartupSolPartner } from './StartupSolPartner/StartupSolPartner';
import { StartupSolOffer } from './StartupSolOffer/StartupSolOffer';
import { StartupSolOfferCard } from './StartupSolOfferCard/StartupSolOfferCard';
import { StartupSolWhyBF } from './StartupSolWhyBF/StartupSolWhyBF';
import { CustomWebForm } from '../CustomisedWebPage/CustomWebForm/CustomWebForm';

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

export default function StartupSolutions () {
  return (
    <div className={styles.StartupSolutionsMain}>
        
      <StartupSolutionsBanner />
      <StartupSolPartner />
      <StartupSolOffer />
      <StartupSolOfferCard />
      <StartupSolMidBanner />
      <StartupSolWhyBF />
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
  )
};