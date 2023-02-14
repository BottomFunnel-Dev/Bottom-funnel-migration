import React from "react";

import { ItConsultingWebsiteBanner } from "../../components/ITConsultingWebsite/ItConsultingWebsiteBanner/ItConsultingWebsiteBanner";
import { ConsultingServices } from "../../components/ITConsultingWebsite/ConsultingServices/ConsultingServices";
import { ConsultingQuestion } from "../../components/ITConsultingWebsite/ConsultingQuestion/ConsultingQuestion";
import { ConsultingWhyChooseUs } from "../../components/ITConsultingWebsite/ConsultingWhyChooseUs/ConsultingWhyChooseUs";
import { OurProcess } from "../../components/ITConsultingWebsite/OurProcess/OurProcess";
import { ConsultingTechTools } from "../../components/ITConsultingWebsite/ConsultingTechTools/ConsultingTechTools";

import Head from "next/head";

export default function ItConsultingWebsite() {
  return (
    <div>
      <Head>
        <title>IT consulting | Bottom Funnel</title>
        <meta
          name="description"
          content="Get the latest in IT consulting services with us. Our 
          bottom funnel covers various areas and offers 
          unparalleled value to our clients. Read on to know"
        />
      </Head>

      <main>
        <ItConsultingWebsiteBanner />
        <ConsultingServices />
        <ConsultingQuestion />
        <ConsultingWhyChooseUs />
        <OurProcess />
        <ConsultingTechTools />

      </main>
    </div>
  );
}
