import React from "react";

import {
  logisticsCustomer,
  plantBaseDriverData,
  plantBaseMeatAdmin,
} from "../../components/Data/plantbasedmeat";
import { PlantBasedMeatBanner } from "../../components/PlantBaseMeat/PlantBasedMeatBanner/PlantBasedMeatBanner";
import { ServicesWeOffer } from "../../components/PlantBaseMeat/ServicesWeOffer/ServicesWeOffer";
import PlantBaseDeliverApp from "../../components/PlantBaseMeat/PlantBaseDeliverApp/PlantBaseDeliverApp";
import PlantBaseDriverApp from "../../components/PlantBaseMeat/PlantBaseDriverApp/PlantBaseDriverApp";
import PlantBaseDeliverAdminPanel from "../../components/PlantBaseMeat/PlantBaseDeliverAdminPanel/PlantBaseDeliverAdminPanel";
import { PlantBasedGetSolution } from "../../components/PlantBaseMeat/PlantBasedGetSolution/PlantBasedGetSolution";
import { WhyChooseUs } from "../../components/PlantBaseMeat/WhyChooseUs/WhyChooseUs";

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

export default function PlantBasedMeat() {
  return (
    <>
      <Head>
        <title>
          Plant Based Meat Delivery web and App Development Company | Bottom
          Funnel
        </title>
        <meta
          name="description"
          content="Are you looking for a Plant Based Meat Delivery web App 
        Development Company that can help you create a web App that 
        will help you deliver Plant Based Meat? Look no further, we are 
        experts in the field!"
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
        <PlantBasedMeatBanner />
        <ServicesWeOffer />
        <PlantBaseDeliverApp consumerdata={logisticsCustomer} />
        <PlantBaseDriverApp driveData={plantBaseDriverData} />
        <PlantBaseDeliverAdminPanel plantBasedAdminData={plantBaseMeatAdmin} />
        {/* <PlantBasedGetSolution /> */}
        {/* <WhyChooseUs /> */}

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
