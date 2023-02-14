import React from "react";
import { MeatDeliveryAdmin } from "../../components/MeatDelivery/MeatDeliveryAdmin";
import { MeatDeliveryBanner } from "../../components/MeatDelivery/MeatDeliveryBanner";
import { MeatDeliveryCustomerApp } from "../../components/MeatDelivery/MeatDeliveryCustomerApp";
import { MeatDeliveryLowerBanner } from "../../components/MeatDelivery/MeatDeliveryLowerBanner";
import { MeatDeliveryPartnerApp } from "../../components/MeatDelivery/MeatDeliveryPartnerApp";

import Head from "next/head";

export default function MeatDelivery() {
  return (
    <div>
      <Head>
        <title>
          Meat Delivery Web and App Development Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Are you looking for a reliable and trustworthy Meat Delivery 
          Web App Development company that can help you create a
           successful Meat Delivery Web App? Look no further!"
        />
      </Head>

      <main>
        <MeatDeliveryBanner />
        <MeatDeliveryCustomerApp />
        <MeatDeliveryAdmin />
        <MeatDeliveryPartnerApp />
        <MeatDeliveryLowerBanner />
      </main>
    </div>
  );
}
