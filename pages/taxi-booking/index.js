import React from "react";

import { TaxiBookingAdminpannel } from "../../components/TaxiBookingApp/TaxiBookingAdminpannel";
import { TaxiBookingBanner } from "../../components/TaxiBookingApp/TaxiBookingBanner";
import { TaxiBookingCustomerApp } from "../../components/TaxiBookingApp/TaxiBookingCustomerApp";
import { TaxiBookingDriver } from "../../components/TaxiBookingApp/TaxiBookingDriver";
import { TaxiBookingLowerBanner } from "../../components/TaxiBookingApp/TaxiBookingLowerBanner";
import { TaxiOccassion } from "../../components/TaxiBookingApp/TaxiOccassion";

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

export default function TaxiBookingApp() {
  return (
    <>
      <Head>
      <title>Taxi Booking web App 
Development Company | Bottom 
Funnel</title>
      <meta
        name="description"
        content="Want to know more about our Taxi Booking web app development 
        services? Check out our website today and learn more about the 
        different features and benefits that we offer!"
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
      <TaxiBookingBanner />
      <TaxiOccassion />
      <TaxiBookingCustomerApp />
      <TaxiBookingAdminpannel />
      <TaxiBookingDriver />
      <TaxiBookingLowerBanner />

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
