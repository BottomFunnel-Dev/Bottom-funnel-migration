import React from "react";
import { MarketplaceBanner } from "../../components/MarketPlace/MarketplaceBanner";
import MarketplaceFreelancer from "../../components/MarketPlace/MarketplaceFreelancer";
import MarketPlaceAdmin from "../../components/MarketPlace/MarketPlaceAdmin";
import MarketPlaceClients from "../../components/MarketPlace/MarketPlaceClients";
import Marketplaceborder from "../../components/MarketPlace/Marketplaceborder";
import Maketplacefooter from "../../components/MarketPlace/Maketplacefooter";

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
          content="At our web development company, we understand that a successful marketplace requires a well-designed and user-friendly 
          web app. That's why we offer top notch marketplace web app development solutions that will meet your exact requirements!"
        />
      </Head>

      <main>
        <MarketplaceBanner />
        <MarketplaceFreelancer />
        <MarketPlaceAdmin />
        <MarketPlaceClients />
        <Marketplaceborder />
        <Maketplacefooter />
      </main>
    </>
  );
}
