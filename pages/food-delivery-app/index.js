import React from "react";

import { FoodDeliveryBanner } from "../../components/food-delivery/FoodDeliveryBanner";
import { fooddeliveryLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { FoodDeliveryBookCall } from "../../components/food-delivery/FoodDeliveryBookCall";
import { FoodDeliveryExluciveApp } from "../../components/food-delivery/FoodDeliveryExluciveApp";
import { FoodDeliveryAdvanceTech } from "../../components/food-delivery/foodDeliveryAdvanceTech";
import { FoodDeliveryAdminPanel } from "../../components/food-delivery/foodDeliveryAdminPanel";
import { FoodDeliveryPartnerApp } from "../../components/food-delivery/FoodDeliveryPartnerApp";
import { FoodDeliveryNeedSuccess } from "../../components/food-delivery/FoodDeliveryNeedSuccess";

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

export default function FoodDelivery() {
  return (
    <div>

    <Head>
      <title>FoodDelivery Web App development | Bottom Funnel</title>
      <meta
        name="description"
        content="Want to start delivering food to your customers but don't know 
        where to start? Check out our food delivery web app development 
        services and we will help you get started today!"
      />
   </Head>

<Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      {<FoodDeliveryBanner />}
      <Trusted partnerLogo={fooddeliveryLogo} />
      {<FoodDeliveryBookCall />}
      {<FoodDeliveryExluciveApp />}
      {<FoodDeliveryAdvanceTech />}
      {<FoodDeliveryAdminPanel />}
      {<FoodDeliveryPartnerApp />}
      {<FoodDeliveryNeedSuccess />}

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
