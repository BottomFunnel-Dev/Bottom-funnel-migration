import React from "react";
import FlowerDeliveryBanner from "../../components/FlowerDelivery/FlowerDeliveryBanner";
import { FlowerDeliveryService } from "../../components/FlowerDelivery/FlowerDeliveryService";
import FlowerDeliverySolution from "../../components/FlowerDelivery/FlowerDeliverySolution";
import FlowerDeliveryDriver from "../../components/FlowerDelivery/FlowerDeliveryDriver";
import FlowerDeliveryAdmin from "../../components/FlowerDelivery/FlowerDeliveryAdmin";
// import FlowerDeliveryBannerbottom from "../../components/FlowerDelivery/FlowerDeliveryBannerbottom";
import FlowerDeliverylast from "../../components/FlowerDelivery/FlowerDeliverylast";

import Head from "next/head";

export default function FlowerDelivery() {
  return (
    <>
      <Head>
        <title>
          Flower Delivery Web App Development Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Want to build a flower-delivery web App but don't know where to 
        start? Let us help you out, we are the best in this field and have 
        years of experience in developing flower-delivery web Apps."
        />
      </Head>

      <main>
        <FlowerDeliveryBanner />
        <FlowerDeliveryService />
        <FlowerDeliverySolution />
        <FlowerDeliveryDriver />
        <FlowerDeliveryAdmin />
        {/* <FlowerDeliveryBannerbottom /> */}
        <FlowerDeliverylast />
      </main>
    </>
  );
}
