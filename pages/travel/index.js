import React from "react";
import TravelBrands from "../../components/Travel/TravelBrands";
import Travelcontainer from "../../components/Travel/Travelcontainer";
import Travelfeature from "../../components/Travel/Travelfeature";
import TravelFlight from "../../components/Travel/TravelFlight";
import Travelsolution from "../../components/Travel/Travelsolution";
import Travelstart from "../../components/Travel/Travelstart";
import Travelwhy from "../../components/Travel/Travelwhy";

import Head from "next/head";

export default function Travel() {
  return (
    <div>
      <Head>
        <title>Travel Web and App Development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a travel web app development company that 
        can help you develop a customised and safe travel web app? Look 
        no further than VinCard! We offer top-notch web app development 
        services that are tailor-made for the travel industry."
        />
      </Head>

      <Travelcontainer />
      <TravelBrands />
      <Travelfeature />
      <TravelFlight />
      <Travelsolution />
      <Travelwhy />
      <Travelstart />
    </div>
  );
}
