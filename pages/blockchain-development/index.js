import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const BlockChainBanner = dynamic(
  () =>
    import("../../components/BlockChainPage/BlockChainBanner/BlockChainBanner"),
  { loading: "loading..." },
);
const BlockChainOffer = dynamic(
  () =>
    import("../../components/BlockChainPage/BlockChainOffer/BlockChainOffer"),
  { loading: "loading..." },
);
const BlockChainServices = dynamic(
  () =>
    import(
      "../../components/BlockChainPage/BlockChainServices/BlockChainServices"
    ),
  { loading: "loading..." },
);
const CustomWebForm = dynamic(
  () =>
    import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
  { loading: "loading..." },
);

const index = () => {
  return (
    <div>
      <Head>
        <title> Block Chain Service Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Block Chain services offer a number of advantages 
      to companies. Learn about the top reasons for 
      adopting block chain technology and get information
      on how it can help you."
        />
      </Head>

      <main>
        <BlockChainBanner />
        <BlockChainOffer />
        <BlockChainServices />
        {/*  <BlockChainBF /> */}
        <CustomWebForm />
      </main>
    </div>
  );
};

export default index;
