import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Customer } from "../../components/KidsWear/KidsCustomerApp/Customer";
import { KidswearAdmin } from "../../components/KidsWear/KidswearAdminApp/KidswearAdmin";

const KidsWearBanner = dynamic(
  () => import("../../components/KidsWear/KidsWearBanner/KidsWearBanner"),
  { loading: "Loading..." }
);

const ExclusiveFeature = dynamic(
  () => import("../../components/KidsWear/ExclusiveFeature/ExclusiveFeature"),
  { loading: "Loading..." }
);

const AppFeature = dynamic(
  () => import("../../components/KidsWear/AppFeature/AppFeature"),
  { loading: "Loading..." }
);

// const ChooseUs = dynamic(
//   () => import("../../components/KidsWear/ChooseUs/ChooseUs"),
//   { loading: "Loading..." },
// );

export default function Kidswear() {
  return (
    <div>
      <Head>
        <title>
          Baby and Kids Wear Web App Development Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="You've come to the right place if you're looking for Baby and 
          Kids Wear Web App solutions that will make your life easier.
          We offer a wide range of services that will cater to all your 
          needs as a parent or caregiver. Check us out today!"
        />
      </Head>

      <main>
        <KidsWearBanner />
        <ExclusiveFeature />
       <Customer />
       <KidswearAdmin />
      {/*  <ChooseUs /> */}
      </main>
    </div>
  );
}
