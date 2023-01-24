import React from "react";

import {ItConsultingWebsiteBanner} from "../../components/ITConsultingWebsite/ItConsultingWebsiteBanner/ItConsultingWebsiteBanner";
import {ConsultingServices} from "../../components/ITConsultingWebsite/ConsultingServices/ConsultingServices";
import {ConsultingQuestion} from "../../components/ITConsultingWebsite/ConsultingQuestion/ConsultingQuestion";
import {ConsultingWhyChooseUs} from "../../components/ITConsultingWebsite/ConsultingWhyChooseUs/ConsultingWhyChooseUs";
import {OurProcess} from "../../components/ITConsultingWebsite/OurProcess/OurProcess";
import {ConsultingTechTools} from "../../components/ITConsultingWebsite/ConsultingTechTools/ConsultingTechTools";

import {TextDropdown} from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import {SeoblogSection} from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function ItConsultingWebsite() {

    return (
        <div>
<Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
            <ItConsultingWebsiteBanner/>
            <ConsultingServices/>
            <ConsultingQuestion/>
            <ConsultingWhyChooseUs/>
            <OurProcess/>
            <ConsultingTechTools/> 
            
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
