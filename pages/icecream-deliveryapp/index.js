import React from "react";

import { IceCreamAdminPannel } from "../../components/Icecream/IceCreamAdminPannel";
import { IcecreamBanner } from "../../components/Icecream/IcecreamBanner";
import { IcecreamCSolution } from "../../components/Icecream/IcecreamCSolution";
import { IcecreamCustomerApp } from "../../components/Icecream/IcecreamCustomerApp";
import { IceCreamDriverApp } from "../../components/Icecream/IceCreamDriverApp";

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

export default function Icecream() {
  return (
    <>
      <Head>
        <title> Icecream Web App Development Company | Bottom Funnel </title>
        <meta
          name="description"
          content="Learn about our innovative Icecream Web App Development 
        solutions that will help you drive more sales from your web app 
        and become one of the most successful ice cream businesses 
        out there!"
        />
      </Head>
      <main>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
        />
        <IcecreamBanner />
        <IcecreamCSolution />
        <IcecreamCustomerApp />
        <IceCreamAdminPannel />
        <IceCreamDriverApp />

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
