import React from "react";
import { DigitalMarketClientsAdd } from "./DigitalMarketClientsAdd";
import { DigitalMarketingBanner } from "./DigitalMarketingBanner";
import { DigitalMarketingHiring } from "./DigitalMarketingHiring";
import { DigitalmarketWhyConsider } from "./DigitalmarketWhyConsider";
import { DigitaMarketWeOffers } from "./DigitaMarketWeOffers";
import { WhatDigitalMarket } from "./WhatDigitalMarket";


export default function DigitalMarketing() {
  return (
    <div>
      <DigitalMarketingBanner />
      <WhatDigitalMarket />
      <DigitaMarketWeOffers />
          <DigitalMarketingHiring />
     <DigitalMarketClientsAdd />
     <DigitalmarketWhyConsider />

  
     
    </div>
  );
}
