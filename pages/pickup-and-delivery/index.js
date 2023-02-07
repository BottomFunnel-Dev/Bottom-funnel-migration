import React from "react";

import { PickupBanner } from "../../components/PickupDelivery/PickupBanner";
import { pickupanddeliveryLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { PickupSolutions } from "../../components/PickupDelivery/PickupSolutions";
import { Pickuprequire } from "../../components/PickupDelivery/Pickuprequire";
import { PickupCustomer } from "../../components/PickupDelivery/PickupCustomer";
import { Pickupdriveapp } from "../../components/PickupDelivery/Pickupdriveapp";
import { Pickupadmin } from "../../components/PickupDelivery/Pickupadmin";
import { PickupLowerBanner } from "../../components/PickupDelivery/PickupLowerBanner";

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

export default function PickupDelivery() {
  return (
    <>
    <Head>
      <title>Pickup and delivery Web and App Development Company | Bottom Funnel</title>
      <meta
        name="description"
        content="Are you looking for a reliable pickup and delivery web app 
        development company? Check out our website today and learn 
        more about our products and services. We specialize in this 
        particular field, so you can be sure that your project will be handled 
        with care."
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
      <PickupBanner />
      <Trusted partnerLogo={pickupanddeliveryLogo} />
      <PickupSolutions />
      <Pickuprequire />
      <PickupCustomer />
      <Pickupdriveapp />
      <Pickupadmin />
      <PickupLowerBanner />

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
