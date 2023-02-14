import React from "react";

import { IceCreamAdminPannel } from "../../components/Icecream/IceCreamAdminPannel";
import { IcecreamBanner } from "../../components/Icecream/IcecreamBanner";
import { IcecreamCSolution } from "../../components/Icecream/IcecreamCSolution";
import { IcecreamCustomerApp } from "../../components/Icecream/IcecreamCustomerApp";
import { IceCreamDriverApp } from "../../components/Icecream/IceCreamDriverApp";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." }
);

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
        <IcecreamBanner />
        <IcecreamCSolution />
        <IcecreamCustomerApp />
        <IceCreamAdminPannel />
        <IceCreamDriverApp />

      </main>
    </>
  );
}
