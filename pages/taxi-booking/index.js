import React from "react";

import { TaxiBookingAdminpannel } from "../../components/TaxiBookingApp/TaxiBookingAdminpannel";
import { TaxiBookingBanner } from "../../components/TaxiBookingApp/TaxiBookingBanner";
import { TaxiBookingCustomerApp } from "../../components/TaxiBookingApp/TaxiBookingCustomerApp";
import { TaxiBookingDriver } from "../../components/TaxiBookingApp/TaxiBookingDriver";
import { TaxiBookingLowerBanner } from "../../components/TaxiBookingApp/TaxiBookingLowerBanner";
import { TaxiOccassion } from "../../components/TaxiBookingApp/TaxiOccassion";

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

export default function TaxiBookingApp() {
  return (
    <>
      <Head>
        <title>
          Taxi Booking Web and App Development Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Want to know more about our Taxi Booking web app development 
        services? Check out our website today and learn more about the 
        different features and benefits that we offer!"
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
        <TaxiBookingBanner />
        <TaxiOccassion />
        <TaxiBookingCustomerApp />
        <TaxiBookingAdminpannel />
        <TaxiBookingDriver />
        <TaxiBookingLowerBanner />

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
