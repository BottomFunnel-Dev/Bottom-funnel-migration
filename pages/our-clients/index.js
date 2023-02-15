import React from "react";

import { ClientBanner } from "../../components/OurClient/ClientBanner/ClientBanner";
import { ClientSlider } from "../../components/OurClient/ClientSlider/ClientSlider";
import { OurClientbrand } from "../../components/OurClient/OurClientbrand/OurClientbrand";

import {
  branddata,
  startupdata,
  enterprisedata,
  imageData,
} from "../../Data/OurClient";

import Head from "next/head";

export default function OurClients() {
  return (
    <div>
      <Head>
        <title> Our client| Bottom Funnel </title>
        <meta
          name="description"
          content="Our company provides best service to our clients. Read on 
          to know about their importance and the different techniques 
          used"
        />
      </Head>

      <main>
        <ClientBanner />
        <ClientSlider data={imageData} />
        <OurClientbrand data={branddata} />
        <OurClientbrand data={startupdata} />
        <OurClientbrand data={enterprisedata} />
      </main>
    </div>
  );
}
