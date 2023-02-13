import React from "react";

import { EcommerceComBanner } from "../../components/EcommerceCom/EcommerceComBanner/EcommerceComBanner";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { EcommerceLogo } from "../../components/Data/SeopartnerData";
import { EcommerceComFeatures } from "../../components/EcommerceCom/EcommerceComFeturesSolutions/EcommerceComFeatures";
import { EcommerceComCustomer } from "../../components/EcommerceCom/EcommerceComAdvance/EcommerceComCustomer";
import { EcommerceComAdminPanel } from "../../components/EcommerceCom/EcommerceComAdvance/EcommerceComAdminPanel";
import { EcommerceComShopping } from "../../components/EcommerceCom/EcommerceComAdvance/EcommerceComShopping";
import { EcommerceBookCall } from "../../components/EcommerceCom/EcommerceBookCall/EcommerceBookCall";
import { EcommerceComSolutions } from "../../components/EcommerceCom/EcommerceComFeturesSolutions/EcommerceComSolutions";

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
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function Ecommerce() {
  return (
    <div>
      <Head>
        <title>E-commerce Web App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a reliable and affordable E-commerce Web 
          App development company? Look no further than ours. We have 
          the expertise and track record to help you build an successful 
          online store."
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
        <EcommerceComBanner />
        <Trusted partnerLogo={EcommerceLogo} />
        <EcommerceComFeatures />
        <EcommerceComCustomer />
        <EcommerceComAdminPanel />
        <EcommerceComShopping />
        <EcommerceBookCall />
        <EcommerceComSolutions />

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
    </div>
  );
}
