import React from "react";
import { EyeWearDeliveryBanner } from "../../components/EyeWearDeliveryPage/EyeWearDeliveryBanner";
import { EyeWearDevelopmentSolution } from "../../components/EyeWearDeliveryPage/EyeWearDevelopmentSolution";
import { EyeWearAccelerate } from "../../components/EyeWearDeliveryPage/EyeWearAccelerate";
import { EyeWearCustomerApp } from "../../components/EyeWearDeliveryPage/EyeWearCustomerApp";
import { EyeWearDeliveryDriverApp } from "../../components/EyeWearDeliveryPage/EyeWearDeliveryDriverApp";
import { EyeWearDeliveryAdmin } from "../../components/EyeWearDeliveryPage/EyeWearDeliveryAdmin";
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

export default function EyewearDeliverPage() {
  return (
    <div>

      <Head>
        <title>Eyewear Delivery Web App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Having an eyewear delivery web app is a great way to 
          improve customer satisfaction and grow your business.
          Our team of experts can help you design and build a custom 
          eyewear delivery web app that meets your needs and 
          expectations!"
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
      <EyeWearDeliveryBanner />
      <EyeWearDevelopmentSolution />
      <EyeWearAccelerate />
      <EyeWearCustomerApp />
      <EyeWearDeliveryDriverApp />
      <EyeWearDeliveryAdmin />
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

      </main>
    </div>
  );
}
