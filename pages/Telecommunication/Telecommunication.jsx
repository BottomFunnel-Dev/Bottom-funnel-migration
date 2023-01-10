import React from 'react';
import { BusinessSupportSystem } from './BusinessSupportSystem/BusinessSupportSystem';
import { OperationsSupport } from './OperationsSupport/OperationsSupport';
import "./Telecommunication.css";
import { TelecommunicationBanner } from './TelecommunicationBanner/TelecommunicationBanner';

// ----- Other requried react components -----
import StoriesSection from "../StoriesSection/StoriesSection";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";

export const Telecommunication = () => {
    return (
        <div>
            <TelecommunicationBanner />

            <OperationsSupport />

            <BusinessSupportSystem />

            {/* Other react required components */}
            <StoriesSection />
            <OndemandSection />
            <PortFolio />
            <PlanProject />
            <SeoblogSection />
            <Revamping />
            <TextDropdown />
            <ContectForm />
            <MainFooter />
        </div>
    )
}
