import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
  logisticsCustomer,
  agricultureConsumerApp,
  agricultureAdmin,
} from "../../components/Data/agriculture.js";

// ---------------importing components with lazy loading-----------------------
const AgricultureBanner = dynamic(
  () =>
    import("../../components/Agriculture/AgricultureBanner/AgricultureBanner"),
  { loading: () => "loading..." },
);
const AgricultureSolutions = dynamic(
  () =>
    import(
      "../../components/Agriculture/AgricultureSolutions/AgricultureSolutions"
    ),
  { loading: () => "loading..." },
);
const AgricultureCustomerApp = dynamic(
  () =>
    import(
      "../../components/Agriculture/AgricultureCustomerApp/AgricultureCustomerApp"
    ),
  { loading: () => "loading..." },
);
const AgricultureConsumerApp = dynamic(
  () =>
    import(
      "../../components/Agriculture/AgricultureConsumerApp/AgricultureConsumerApp"
    ),
  { loading: () => "loading..." },
);
const AgricultureAdminPanel = dynamic(
  () =>
    import(
      "../../components/Agriculture/AgricultureAdminPanel/AgricultureAdminPanel"
    ),
  { loading: () => "loading..." },
);

// ------------------Main page function-----------------
export default function AgriculturePage() {
  return (
    <>
      <Head>
        <title>
          Agriculture Solution Web App Development Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Are you looking for a reliable and affordable Agriculture 
        Solution Web App Development company? Look no further 
        than our team of experienced developers! We have years of 
        experience in this field and will provide you with the best 
        possible solution at an unbeatable price."
        />
      </Head>

      <main>
        <AgricultureBanner />
        <AgricultureSolutions />
        <AgricultureCustomerApp agricultureCustomerApp={logisticsCustomer} />
        <AgricultureConsumerApp driveData={agricultureConsumerApp} />
        <AgricultureAdminPanel plantBasedAdminData={agricultureAdmin} />
      </main>
    </>
  );
}
