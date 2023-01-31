import React from "react";
import TravelBrands from "../../components/Travel/TravelBrands";
import Travelcontainer from "../../components/Travel/Travelcontainer";
import Travelfeature from "../../components/Travel/Travelfeature";
import TravelFlight from "../../components/Travel/TravelFlight";
import Travelsolution from "../../components/Travel/Travelsolution";
import Travelstart from "../../components/Travel/Travelstart";
import Travelwhy from "../../components/Travel/Travelwhy";

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

export default function Travel() {
  return (
    <div>
      <Head>
        <title>Travel Web App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a travel web app development company that 
        can help you develop a customised and safe travel web app? Look 
        no further than VinCard! We offer top-notch web app development 
        services that are tailor-made for the travel industry."
        />
      </Head>

      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: true,
        }}
      />
      <Travelcontainer />
      <TravelBrands />
      <Travelfeature />
      <TravelFlight />
      <Travelsolution />
      <Travelwhy />
      <Travelstart />

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
    </div>
  );
}
