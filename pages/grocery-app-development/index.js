import React from "react";

import GroceryBanner from "../../components/Grocery/GroceryBanner";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { groceryLogo } from "../../components/Data/SeopartnerData";
import DeliveryServices from "../../components/Grocery/DeliveryServices";
import { GroceryCustomer } from "../../components/Grocery/GroceryCustomer";
import { GroceryAdmin } from "../../components/Grocery/GroceryAdmin";
import { GroceryService } from "../../components/Grocery/GroceryService";

import Head from "next/head";

export default function Grocery() {
  return (
    <>
      <Head>
        <title> Grocery web App Development Company | Bottom Funnel </title>
        <meta
          name="description"
          content="Are you looking for a reliable and affordable grocery web app solution? Look no further than our team of experienced 
          developers. We offer tailor-made solutions that will help you manage your entire grocery experience from one place."
        />
      </Head>

      <main>
        <GroceryBanner />
        <Trusted partnerLogo={groceryLogo} />
        <DeliveryServices />
        <GroceryCustomer />
        <GroceryAdmin />
        <GroceryService />
      </main>
    </>
  );
}
