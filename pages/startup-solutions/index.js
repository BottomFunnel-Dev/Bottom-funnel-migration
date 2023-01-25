import React from 'react'

import styles from "./StartupSolutions.module.css";
import { StartupSolutionsBanner } from '../../components/StartupSolutions/StartupSolutionsBanner/StartupSolutionsBanner';
import { StartupSolMidBanner } from "../../components/StartupSolutions/StartupSolMidBanner/StartupSolMidBanner";
import { StartupSolPartner } from '../../components/StartupSolutions/StartupSolPartner/StartupSolPartner';
import { StartupSolOffer } from '../../components/StartupSolutions/StartupSolOffer/StartupSolOffer';
import { StartupSolOfferCard } from '../../components/StartupSolutions/StartupSolOfferCard/StartupSolOfferCard';
import { StartupSolWhyBF } from '../../components/StartupSolutions/StartupSolWhyBF/StartupSolWhyBF';
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

export default function StartupSolutions () {
  return (
    <div className={styles.StartupSolutionsMain}>
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
    </div>
  )
};