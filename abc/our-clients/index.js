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

export default function OurClients() {
  return (
    <div>
      <Head>
        <title>Our client| Bottom Funnel</title>
        <meta
          name="description"
          content="Our company provides best service to our clients. Read on 
          to know about their importance and the different techniques 
          used"
        />
      </Head>
      <main>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
        />
        <ClientBanner />
        <ClientSlider data={imageData} />
        <OurClientbrand data={branddata} />
        <OurClientbrand data={startupdata} />
        <OurClientbrand data={enterprisedata} />

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
