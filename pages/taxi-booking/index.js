import React from "react";

import { TaxiBookingAdminpannel } from "../../components/TaxiBookingApp/TaxiBookingAdminpannel";
import { TaxiBookingBanner } from "../../components/TaxiBookingApp/TaxiBookingBanner";
import { TaxiBookingCustomerApp } from "../../components/TaxiBookingApp/TaxiBookingCustomerApp";
import { TaxiBookingDriver } from "../../components/TaxiBookingApp/TaxiBookingDriver";
import { TaxiBookingLowerBanner } from "../../components/TaxiBookingApp/TaxiBookingLowerBanner";
import { TaxiOccassion } from "../../components/TaxiBookingApp/TaxiOccassion";

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
