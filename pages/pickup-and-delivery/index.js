import React from "react";

import { PickupBanner } from "../../components/PickupDelivery/PickupBanner";
import { pickupanddeliveryLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { PickupSolutions } from "../../components/PickupDelivery/PickupSolutions";
import { Pickuprequire } from "../../components/PickupDelivery/Pickuprequire";
import { PickupCustomer } from "../../components/PickupDelivery/PickupCustomer";
import { Pickupdriveapp } from "../../components/PickupDelivery/Pickupdriveapp";
import { Pickupadmin } from "../../components/PickupDelivery/Pickupadmin";
import { PickupLowerBanner } from "../../components/PickupDelivery/PickupLowerBanner";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." }
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." }
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." }
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." }
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." }
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." }
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." }
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." }
);
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function PickupDelivery() {
  return (
    <>
      <Head>
        <title>
          Pickup and delivery Web and App Development Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Are you looking for a reliable pickup and delivery web app 
        development company? Check out our website today and learn 
        more about our products and services. We specialize in this 
        particular field, so you can be sure that your project will be handled 
        with care."
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
        
        <PickupBanner />
        <Trusted partnerLogo={pickupanddeliveryLogo} />
        <PickupSolutions />
        <Pickuprequire />
        <PickupCustomer />
        <Pickupdriveapp />
        <Pickupadmin />
        <PickupLowerBanner />

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
