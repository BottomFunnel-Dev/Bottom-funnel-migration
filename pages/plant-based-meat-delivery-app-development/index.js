import React from "react";
import {
  logisticsCustomer,
  plantBaseDriverData,
  plantBaseMeatAdmin,
} from "../../components/Data/plantbasedmeat";
import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

const PlantBasedMeatBanner = dynamic(
  () =>
    import(
      "../../components/PlantBaseMeat/PlantBasedMeatBanner/PlantBasedMeatBanner"
    ),
  { loading: () => "loading..." }
);
const ServicesWeOffer = dynamic(
  () =>
    import("../../components/PlantBaseMeat/ServicesWeOffer/ServicesWeOffer"),
  { loading: () => "loading..." }
);
const PlantBaseDeliverApp = dynamic(
  () =>
    import(
      "../../components/PlantBaseMeat/PlantBaseDeliverApp/PlantBaseDeliverApp"
    ),
  { loading: () => "loading..." }
);
const PlantBaseDriverApp = dynamic(
  () =>
    import(
      "../../components/PlantBaseMeat/PlantBaseDriverApp/PlantBaseDriverApp"
    ),
  { loading: () => "loading..." }
);
const PlantBaseDeliverAdminPanel = dynamic(
  () =>
    import(
      "../../components/PlantBaseMeat/PlantBaseDeliverAdminPanel/PlantBaseDeliverAdminPanel"
    ),
  { loading: () => "loading..." }
);


export default function PlantBasedMeat() {
  return (
    <>
      <Head>
        <title>
          Plant Based Meat Delivery web and App Development Company | Bottom
          Funnel
        </title>
        <meta
          name="description"
          content="Are you looking for a Plant Based Meat Delivery web App 
        Development Company that can help you create a web App that 
        will help you deliver Plant Based Meat? Look no further, we are 
        experts in the field!"
        />
      </Head>

      <main>
        <PlantBasedMeatBanner />
        <ServicesWeOffer />
        <PlantBaseDeliverApp consumerdata={logisticsCustomer} />
        <PlantBaseDriverApp driveData={plantBaseDriverData} />
        <PlantBaseDeliverAdminPanel plantBasedAdminData={plantBaseMeatAdmin} />
      </main>
    </>
  );
}
