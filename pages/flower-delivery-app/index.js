import React from "react";
import FlowerDeliveryBanner from "../../components/FlowerDelivery/FlowerDeliveryBanner";
import { FlowerDeliveryService } from "../../components/FlowerDelivery/FlowerDeliveryService";
import FlowerDeliverySolution from "../../components/FlowerDelivery/FlowerDeliverySolution";
import FlowerDeliveryDriver from "../../components/FlowerDelivery/FlowerDeliveryDriver";
import FlowerDeliveryAdmin from "../../components/FlowerDelivery/FlowerDeliveryAdmin";
import FlowerDeliveryBannerbottom from "../../components/FlowerDelivery/FlowerDeliveryBannerbottom";
import FlowerDeliverylast from "../../components/FlowerDelivery/FlowerDeliverylast";

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
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "black",
            logo: true,
          }}
        />
        <FlowerDeliveryBanner />
        <FlowerDeliveryService />
        <FlowerDeliverySolution />
        <FlowerDeliveryDriver />
        <FlowerDeliveryAdmin />
        {/* <FlowerDeliveryBannerbottom /> */}
        <FlowerDeliverylast />

        <StoriesSection />
        {/* <Industries /> */}
        <PlanProject />
        <OndemandSection />
        {/* <PortFolio /> */}
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </>
  );
}
