import React from "react";
import Logisticcontainer from "../../components/Logistic/Logisticcontainer";
import { logisticsLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import Logictransport from "../../components/Logistic/Logictransport";
import Logisticwhy from "../../components/Logistic/Logisticwhy";

import {
  logisticsCustomer,
  logisticDrive,
  logisticAdmin,
} from "../../components/Data/panelsData";
import Logiccustomer from "../../components/Logistic/Logiccustomer";
import Logicdrive from "../../components/Logistic/Logicdrive";
import Logisticadmin from "../../components/Logistic/Logisticadmin";

import Head from "next/head";

export default function Logistics() {
  return (
    <div>
      <Head>
        <title> Logistics Web and App Development Company| Bottom Funnel </title>
        <meta
          name="description"
          content="Do you need a Logistics web app solution? We can help! Our
          team of experts can develop a web app that meets all your 
         needs. From design to implementation, we take care of
          everything."
        />
      </Head>

      <main>
        <Logisticcontainer />
        <Trusted partnerLogo={logisticsLogo} />
        <Logictransport />
        <Logisticwhy />
        <Logiccustomer customerData={logisticsCustomer} />
        <Logicdrive driveData={logisticDrive} />
        <Logisticadmin adminData={logisticAdmin} />
      </main>
    </div>
  );
}
