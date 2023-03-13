import React from "react";
import { EyeWearDeliveryBanner } from "../../components/EyeWearDeliveryPage/EyeWearDeliveryBanner";
import { EyeWearDevelopmentSolution } from "../../components/EyeWearDeliveryPage/EyeWearDevelopmentSolution";
import { EyeWearAccelerate } from "../../components/EyeWearDeliveryPage/EyeWearAccelerate";
import { EyeWearCustomerApp } from "../../components/EyeWearDeliveryPage/EyeWearCustomerApp";
import { EyeWearDeliveryDriverApp } from "../../components/EyeWearDeliveryPage/EyeWearDeliveryDriverApp";
import { EyeWearDeliveryAdmin } from "../../components/EyeWearDeliveryPage/EyeWearDeliveryAdmin";

import Head from "next/head";

export default function EyewearDeliverPage() {
  return (
    <div>
      <Head>
        <title>
          Eyewear Delivery Web App Development Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Having an eyewear delivery web app is a great way to 
          improve customer satisfaction and grow your business.
          Our team of experts can help you design and build a custom 
          eyewear delivery web app that meets your needs and 
          expectations!"
        />
      </Head>
      <main>
        <EyeWearDeliveryBanner />
        <EyeWearDevelopmentSolution />
        <EyeWearAccelerate />
        <EyeWearCustomerApp />
        <EyeWearDeliveryDriverApp />
        <EyeWearDeliveryAdmin />
      </main>
    </div>
  );
}
