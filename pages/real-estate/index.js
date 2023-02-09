import React from "react";
import { RealEstateBanner } from "../../components/RealEstate/RealEstateBanner";
import { RealEstateNextBanner } from "../../components/RealEstate/RealEstateNextBanner";
import { RealEstateSolution } from "../../components/RealEstate/RealEstateSolution";
import { RealEstateCustomer } from "../../components/RealEstate/RealEstateCustomer";
import { RealEstateAdminPannel } from "../../components/RealEstate/RealEstateAdminPannel";
import { RealEstateDriver } from "../../components/RealEstate/RealEstateDriver";
import { Realestatelowerbanner } from "../../components/RealEstate/Realestatelowerbanner";
import { Realestatewhychoose } from "../../components/RealEstate/Realestatewhychoose";

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

export default function RealEstate() {
  return (
    <div>
      <Head>
        <title>
          Real Estate Web and App Development Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Wondering if it's time that you started thinking about 
          developing a Real Estate Web App? Read on to know more 
          about the benefits of doing so, and find out who the best Real 
          Estate Web App Development company is for you."
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
        <RealEstateBanner />
        <RealEstateNextBanner />
        <RealEstateSolution />
        <RealEstateCustomer />
        <RealEstateAdminPannel />
        <RealEstateDriver />
        <Realestatelowerbanner />
        <Realestatewhychoose />

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
    </div>
  );
}
