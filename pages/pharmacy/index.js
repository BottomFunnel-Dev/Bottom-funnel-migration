import React from "react";

import Pharmacycontainer from "../../components/Pharmacy/Pharmacycontainer";
import { pharmacyLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import Pharmacydelivery from "../../components/Pharmacy/Pharmacydelivery";
import Pharmacysneak from "../../components/Pharmacy/Pharmacysneak";
import Pharmacycustomer from "../../components/Pharmacy/Pharmacycustomer";
import Pharmacydrive from "../../components/Pharmacy/Pharmacydrive";
import Pharmacyadmin from "../../components/Pharmacy/Pharmacyadmin";

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

export default function Pharmacy() {
  return (
    <>
      <Head>
        <title> Pharmacy Web and App Development Company | Bottom Funnel </title>
        <meta
          name="description"
          content="Pharmacies are an important part of our society and it is essential 
        that they are able to interact with their customers in a convenient 
        and efficient way. Learn about the best pharmacy web app 
        development companies that can help you build the perfect 
        solution for your business."
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
        <Pharmacycontainer />
        <Trusted partnerLogo={pharmacyLogo} />
        <Pharmacydelivery />
        <Pharmacysneak />
        <Pharmacycustomer />
        <Pharmacydrive />
        <Pharmacyadmin />

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
