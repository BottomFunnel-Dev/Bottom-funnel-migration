import React from "react";

import Pharmacycontainer from "../../components/Pharmacy/Pharmacycontainer";
import { pharmacyLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import Pharmacydelivery from "../../components/Pharmacy/Pharmacydelivery";
import Pharmacysneak from "../../components/Pharmacy/Pharmacysneak";
import Pharmacycustomer from "../../components/Pharmacy/Pharmacycustomer";
import Pharmacydrive from "../../components/Pharmacy/Pharmacydrive";
import Pharmacyadmin from "../../components/Pharmacy/Pharmacyadmin";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." },
);
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function Pharmacy() {
  return (
    <>
      <Head>
        <title>
          {" "}
          Pharmacy Web and App Development Company | Bottom Funnel{" "}
        </title>
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
