import React from "react";
import { CarRentalHeader } from "../../components/Car-Rental-page/CarRentalHeader";
import { FeaturesComp } from "../../components/Car-Rental-page/FeaturesComp";
import { GreyBoxComponent } from "../../components/Car-Rental-page/GreyBoxComponent";
import { RenterAppComp } from "../../components/Car-Rental-page/RenterAppComp";
import { AdminPannelComp } from "../../components/Car-Rental-page/AdminPannelComp";
import { CustomerAppComp } from "../../components/Car-Rental-page/CustomerAppComp";
import { ChooseUsComp } from "../../components/Car-Rental-page/ChooseUsComp";
import { CarRentalFooter } from "../../components/Car-Rental-page/CarRentalFooter";

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

export default function CarRentals() {
  return (
    <>
      <Head>
        <title> Car Rentals Web App Development Company | Bottom Funnel </title>
        <meta
          name="description"
          content="Wondering how to start your own car rental web app? 
  Don't worry, we can help! Our web app development company 
  has years of experience in developing car rental web apps for 
  various companies."
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

        <CarRentalHeader />
        <FeaturesComp />
        <GreyBoxComponent />
        <RenterAppComp />
        <AdminPannelComp />
        <CustomerAppComp />
        <ChooseUsComp />
        {/* <CarRentalFooter /> */}

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
