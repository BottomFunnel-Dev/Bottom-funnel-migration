import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const TaxiBookingAdminpannel = dynamic(
  () => import("../../components/TaxiBookingApp/TaxiBookingAdminpannel"),
  { loading: () => "loading..." },
);
const TaxiBookingBanner = dynamic(
  () => import("../../components/TaxiBookingApp/TaxiBookingBanner"),
  { loading: () => "loading..." },
);
const TaxiBookingCustomerApp = dynamic(
  () => import("../../components/TaxiBookingApp/TaxiBookingCustomerApp"),
  { loading: () => "loading..." },
);
const TaxiBookingDriver = dynamic(
  () => import("../../components/TaxiBookingApp/TaxiBookingDriver"),
  { loading: () => "loading..." },
);
const TaxiBookingLowerBanner = dynamic(
  () => import("../../components/TaxiBookingApp/TaxiBookingLowerBanner"),
  { loading: () => "loading..." },
);
const TaxiOccassion = dynamic(
  () => import("../../components/TaxiBookingApp/TaxiOccassion"),
  { loading: () => "loading..." },
);

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
        <TaxiBookingBanner />
        <TaxiOccassion />
        <TaxiBookingCustomerApp />
        <TaxiBookingAdminpannel />
        <TaxiBookingDriver />
        <TaxiBookingLowerBanner />
      </main>
    </>
  );
}
