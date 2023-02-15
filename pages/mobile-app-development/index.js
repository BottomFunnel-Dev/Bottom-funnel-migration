import React from "react";
import { MobileDevMainBanner } from "../../components/MobileDevelopment/MobileDevMainBanner/MobileDevMainBanner";
import { MobileDevMainCards } from "../../components/MobileDevelopment/MobileDevMainCards/MobileDevMainCards";
import { MobileDevMainProject } from "../../components/MobileDevelopment/MobileDevMainProject/MobileDevMainProject";
import { MobileDevMainServices } from "../../components/MobileDevelopment/MobileDevMainServices/MobileDevMainServices";
import { MobileDevMainSolutions } from "../../components/MobileDevelopment/MobileDevMainSolutions/MobileDevMainSolutions";
import { MobileDevMainWhyChoose } from "../../components/MobileDevelopment/MobileDevMainWhyChoose/MobileDevMainWhyChoose";

import Head from "next/head";

export default function MobileDevMain() {
  return (
    <div>
      <Head>
        <title>Mobile App Development Services | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for mobile app development services? Our team at Bottom Funnel offers comprehensive mobile 
          app solutions. Read on to know more."
        />
      </Head>

      <main>
        <MobileDevMainBanner />
        <MobileDevMainServices />
        <MobileDevMainCards />
        <MobileDevMainSolutions />
        <MobileDevMainProject />
        <MobileDevMainWhyChoose />
      </main>
    </div>
  );
}
