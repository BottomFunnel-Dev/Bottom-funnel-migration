import React from "react"
import { AdminPannelComp } from "./AdminPannelComp.jsx"
import { CarRentalFooter } from "./CarRentalFooter.jsx"
import { CarRentalHeader } from "./CarRentalHeader"
import { ChooseUsComp } from "./ChooseUsComp.jsx"
import { CustomerAppComp } from "./CustomerAppComp.jsx"
import { FeaturesComp } from "./FeaturesComp.jsx"
import { GreyBoxComponent } from "./GreyBoxComponent"
import { RenterAppComp } from "./RenterAppComp"

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
import { Helmet } from "react-helmet";


export const CarRental = () => {
  return (

    <div>
        <CarRentalHeader />
        <FeaturesComp />
        <GreyBoxComponent />
        <RenterAppComp />
        <AdminPannelComp />
        <CustomerAppComp />
        <ChooseUsComp />
        <CarRentalFooter />

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
