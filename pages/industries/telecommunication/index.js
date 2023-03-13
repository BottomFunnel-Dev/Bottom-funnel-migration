import React from "react";

import { TelecommunicationsHeader } from "../../../components/Telecommunications/Telecommunications-Header/TelecommunicationsHeader";
import { TelecommunicationsCustomerApp } from "../../../components/Telecommunications/TelecommunicationsCustomerApp/TelecommunicationsCustomerApp";
import { TelecommunicationsFooter } from "../../../components/Telecommunications/Telecommunications-Footer/TelecommunicationsFooter";

import Head from "next/head";

export default function Telecommunication() {
  return (
    <div>
      <Head>
        <title>Telecommunication Web and App Development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a reliable and cost-effective telecommunication 
        web app development company? Look no further than ours! We 
        offer a wide range of innovative and cost-effective solutions that 
        will help you get your business online."
        />
      </Head>

      <main>
        <TelecommunicationsHeader />
        <TelecommunicationsCustomerApp />
        <TelecommunicationsFooter />
      </main>
    </div>
  );
}
