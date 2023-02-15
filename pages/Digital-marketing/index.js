import React from "react";
import { DigitalMarketClientsAdd } from "../../components/DigitaMarketing/DigitalMarketClientsAdd";
import { DigitalMarketingBanner } from "../../components/DigitaMarketing/DigitalMarketingBanner";
// import { DigitalMarketingHiring } from "../../components/DigitaMarketing/DigitalMarketingHiring";
import { DigitalmarketWhyConsider } from "../../components/DigitaMarketing/DigitalmarketWhyConsider";
import { DigitaMarketWeOffers } from "../../components/DigitaMarketing/DigitaMarketWeOffers";
import { WhatDigitalMarket } from "../../components/DigitaMarketing/WhatDigitalMarket";

import Head from "next/head";

export default function DigitalMarketing() {
  return (
    <div>
      <Head>
        <title>Digital Marketing | Bottom Funnel</title>
        <meta
          name="description"
          content="Learn how digital marketing solutions can help you 
          promote your business and reach your target 
          audience. Our guide covers key topics like planning 
          and executing a digital marketing strategy."
        />
      </Head>

      <main>
        <DigitalMarketingBanner />
        <WhatDigitalMarket />
        <DigitaMarketWeOffers />
        {/* <DigitalMarketingHiring />*/}
        <DigitalMarketClientsAdd />
        <DigitalmarketWhyConsider />
      </main>
    </div>
  );
}
