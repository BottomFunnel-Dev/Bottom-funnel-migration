import React from "react";
import { MarketplaceBanner } from "../../components/MarketPlace/MarketplaceBanner";
import MarketplaceFreelancer from "../../components/MarketPlace/MarketplaceFreelancer";
import MarketPlaceAdmin from "../../components/MarketPlace/MarketPlaceAdmin";
import MarketPlaceClients from "../../components/MarketPlace/MarketPlaceClients";
import Marketplaceborder from "../../components/MarketPlace/Marketplaceborder";
import Maketplacefooter from "../../components/MarketPlace/Maketplacefooter";

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

export default function MarketPlace() {
  return (
    <>
      <Head>
        <title>
          MarketPlace Web and App Development Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="At our web development company, we understand that a 
        successful marketplace requires a well-designed and user-friendly 
        web app. That's why we offer top notch marketplace web app 
        development solutions that will meet your exact requirements!"
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
        <MarketplaceBanner />
        <MarketplaceFreelancer />
        <MarketPlaceAdmin />
        <MarketPlaceClients />
        <Marketplaceborder />
        <Maketplacefooter />

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
