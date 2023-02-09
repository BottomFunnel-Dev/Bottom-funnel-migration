import React from "react";

import { ItConsultingWebsiteBanner } from "../../components/ITConsultingWebsite/ItConsultingWebsiteBanner/ItConsultingWebsiteBanner";
import { ConsultingServices } from "../../components/ITConsultingWebsite/ConsultingServices/ConsultingServices";
import { ConsultingQuestion } from "../../components/ITConsultingWebsite/ConsultingQuestion/ConsultingQuestion";
import { ConsultingWhyChooseUs } from "../../components/ITConsultingWebsite/ConsultingWhyChooseUs/ConsultingWhyChooseUs";
import { OurProcess } from "../../components/ITConsultingWebsite/OurProcess/OurProcess";
import { ConsultingTechTools } from "../../components/ITConsultingWebsite/ConsultingTechTools/ConsultingTechTools";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." },
);
import Navbar from "../../components/Navbar/Navbar";
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
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "white",
            logo: true,
          }}
        />
        <ItConsultingWebsiteBanner />
        <ConsultingServices />
        <ConsultingQuestion />
        <ConsultingWhyChooseUs />
        <OurProcess />
        <ConsultingTechTools />

        {/* Other react required components  */}
        <StoriesSection />
        <OndemandSection />
        {/* <PortFolio />  */}
        <PlanProject />
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </div>
  );
}
