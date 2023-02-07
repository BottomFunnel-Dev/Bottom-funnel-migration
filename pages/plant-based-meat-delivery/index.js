import React from "react";

import {
  logisticsCustomer,
  plantBaseDriverData,
  plantBaseMeatAdmin,
} from "../../components/Data/plantbasedmeat";
import { PlantBasedMeatBanner } from "../../components/PlantBaseMeat/PlantBasedMeatBanner/PlantBasedMeatBanner";
import { ServicesWeOffer } from "../../components/PlantBaseMeat/ServicesWeOffer/ServicesWeOffer";
import PlantBaseDeliverApp from "../../components/PlantBaseMeat/PlantBaseDeliverApp/PlantBaseDeliverApp";
import PlantBaseDriverApp from "../../components/PlantBaseMeat/PlantBaseDriverApp/PlantBaseDriverApp";
import PlantBaseDeliverAdminPanel from "../../components/PlantBaseMeat/PlantBaseDeliverAdminPanel/PlantBaseDeliverAdminPanel";
import { PlantBasedGetSolution } from "../../components/PlantBaseMeat/PlantBasedGetSolution/PlantBasedGetSolution";
import { WhyChooseUs } from "../../components/PlantBaseMeat/WhyChooseUs/WhyChooseUs";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function PlantBasedMeat() {
  return (
    <>
     <Head>
      <title>Plant Based Meat Delivery web and App Development Company | Bottom Funnel</title>
      <meta
        name="description"
        content="Are you looking for a Plant Based Meat Delivery web App 
        Development Company that can help you create a web App that 
        will help you deliver Plant Based Meat? Look no further, we are 
        experts in the field!"
      />
   </Head>

    <main>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: true,
        }}
      />
      <PlantBasedMeatBanner />
      <ServicesWeOffer />
      <PlantBaseDeliverApp consumerdata={logisticsCustomer} />
      <PlantBaseDriverApp driveData={plantBaseDriverData} />
      <PlantBaseDeliverAdminPanel plantBasedAdminData={plantBaseMeatAdmin} />
      <PlantBasedGetSolution />
      {/* <WhyChooseUs /> */}

      <StoriesSection />
      {/* <Industries /> */}
      <PlanProject />
      <OndemandSection />
      {/* <PortFolio /> */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </main>
    </>
  );
}
