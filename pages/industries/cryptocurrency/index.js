import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const CryptoCurrencyBanner = dynamic(
  () => import("../../../components/CryptoCurrency/CryptoCurrencyBanner"),
  { loading: () => "loading..." },
);
const CryptoCurrencyWork = dynamic(
  () => import("../../../components/CryptoCurrency/CryptoCurrencyWork"),
  { loading: () => "loading..." },
);
const CryptoCurrencyServices = dynamic(
  () => import("../../../components/CryptoCurrency/CryptoCurrencyServices"),
  { loading: () => "loading..." },
);
const CryptoMining = dynamic(
  () => import("../../../components/CryptoCurrency/CryptoMining"),
  { loading: () => "loading..." },
);
const CryptoAdminpannel = dynamic(
  () => import("../../../components/CryptoCurrency/CryptoAdminpannel"),
  { loading: () => "loading..." },
);
const CryptoLowerBanner = dynamic(
  () => import("../../../components/CryptoCurrency/CryptoLowerBanner"),
  { loading: () => "loading..." },
);
const CryptoWhyChoose = dynamic(
  () => import("../../../components/CryptoCurrency/CryptoWhyChoose"),
  { loading: () => "loading..." },
);

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
