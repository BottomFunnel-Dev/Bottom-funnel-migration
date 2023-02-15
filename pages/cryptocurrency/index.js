import React from "react";
import { CryptoCurrencyBanner } from "../../components/CryptoCurrency/CryptoCurrencyBanner";
import { CryptoCurrencyWork } from "../../components/CryptoCurrency/CryptoCurrencyWork";
import { CryptoCurrencyServices } from "../../components/CryptoCurrency/CryptoCurrencyServices";
import CryptoMining from "../../components/CryptoCurrency/CryptoMining";
import { CryptoAdminpannel } from "../../components/CryptoCurrency/CryptoAdminpannel";
import { CryptoLowerBanner } from "../../components/CryptoCurrency/CryptoLowerBanner";
import { CryptoWhyChoose } from "../../components/CryptoCurrency/CryptoWhyChoose";

import Head from "next/head";

export default function CryptoCurrrency() {
  return (
    <div>
      <Head>
        <title>CryptoCurrrency Web App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a reliable and affordable cryptocurrency web 
          app solution? Look no further than our experienced team of 
          developers. We will develop a custom cryptocurrency web 
          app for your business that meets all your requirements."
        />
      </Head>
      <main>
        <CryptoCurrencyBanner />
        <CryptoCurrencyWork />
        <CryptoCurrencyServices />
        <CryptoMining />
        <CryptoAdminpannel />
        <CryptoLowerBanner />
        <CryptoWhyChoose />
      </main>
    </div>
  );
}
