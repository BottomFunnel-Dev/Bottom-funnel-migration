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
