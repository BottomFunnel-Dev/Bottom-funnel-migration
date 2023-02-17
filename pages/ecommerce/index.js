import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { EcommerceLogo } from "../../components/Data/SeopartnerData";

const EcommerceComBanner = dynamic(
  () =>
    import(
      "../../components/EcommerceCom/EcommerceComBanner/EcommerceComBanner"
    ),
  { loading: () => "loading..." },
);
const Trusted = dynamic(
  () => import("../../components/SEO/SeoTrustedCompanies/Seotrusted"),
  {
    loading: () => "loading...",
  },
);
const EcommerceComFeatures = dynamic(
  () =>
    import(
      "../../components/EcommerceCom/EcommerceComFeturesSolutions/EcommerceComFeatures"
    ),
  {
    loading: () => "loading...",
  },
);
const EcommerceComCustomer = dynamic(
  () =>
    import(
      "../../components/EcommerceCom/EcommerceComAdvance/EcommerceComCustomer"
    ),
  { loading: () => "loading..." },
);
import { EcommerceComAdminPanel } from "../../components/EcommerceCom/EcommerceComAdvance/EcommerceComAdminPanel";
import { EcommerceComShopping } from "../../components/EcommerceCom/EcommerceComAdvance/EcommerceComShopping";
const EcommerceBookCall = dynamic(
  () =>
    import("../../components/EcommerceCom/EcommerceBookCall/EcommerceBookCall"),
  { loading: () => "loading..." },
);
const EcommerceComSolutions = dynamic(
  () =>
    import(
      "../../components/EcommerceCom/EcommerceComFeturesSolutions/EcommerceComSolutions"
    ),
  {
    loading: () => "loading...",
  },
);

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
        <EcommerceComBanner />
        <Trusted partnerLogo={EcommerceLogo} />
        <EcommerceComFeatures />
        <EcommerceComCustomer />
        <EcommerceComAdminPanel />
        <EcommerceComShopping />
        <EcommerceBookCall />
        <EcommerceComSolutions />
      </main>
    </div>
  );
}
