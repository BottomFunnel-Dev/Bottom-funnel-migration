import React from "react";


import styles from "./UIDesignPage.module.css"

// ----- React main sub components -----

import { UIDesingBanner } from "../../components/UIDesignPage/UIDesingBanner/UIDesingBanner";
import { UIDesignEmotions } from "../../components/UIDesignPage/UIDesignEmotions/UIDesignEmotions";
import { UIDesignWhyBF } from "../../components/UIDesignPage/UIDesignWhyBF/UIDesignWhyBF";
import { UIDesignMidBanner } from "../../components/UIDesignPage/UIDesignMidBanner/UIDesignMidBanner";

// ----- Other requried react components -----

import {TextDropdown} from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import {SeoblogSection} from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function UIDesignPage  ()  {


  return (
    <div className={styles.UIDesignPagecontainer}>
 <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <UIDesingBanner />
      <UIDesignEmotions />
      <UIDesignWhyBF />
      <UIDesignMidBanner />
      
      {/* Other react required components  */}
      <StoriesSection/>
      <OndemandSection/> 
      {/* <PortFolio />  */}
      <PlanProject/>
      <SeoblogSection/>
      <Revamping/>
      <TextDropdown/>
      <ContectForm/>
      <MainFooter/>
    </div>
  );
};
