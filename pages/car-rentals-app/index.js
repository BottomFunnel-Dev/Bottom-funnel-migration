import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// ---------------importing components with lazy loading-----------------------
const CarRentalHeader = dynamic(
  () => import("../../components/Car-Rental-page/CarRentalHeader"),
  { loading: () => "loading.." },
);
const FeaturesComp = dynamic(
  () => import("../../components/Car-Rental-page/FeaturesComp"),
  { loading: () => "loading.." },
);
const GreyBoxComponent = dynamic(
  () => import("../../components/Car-Rental-page/GreyBoxComponent"),
  { loading: () => "loading.." },
);
const RenterAppComp = dynamic(
  () => import("../../components/Car-Rental-page/RenterAppComp"),
  { loading: () => "loading.." },
);
const AdminPannelComp = dynamic(
  () => import("../../components/Car-Rental-page/AdminPannelComp"),
  { loading: () => "loading.." },
);
const CustomerAppComp = dynamic(
  () => import("../../components/Car-Rental-page/CustomerAppComp"),
  { loading: () => "loading.." },
);
const ChooseUsComp = dynamic(
  () => import("../../components/Car-Rental-page/ChooseUsComp"),
  { loading: () => "loading..." },
);
// const CarRentalFooter = dynamic(
//   () => import("../../components/Car-Rental-page/CarRentalFooter"),
//   { loading: () => "loading..." }
// );

// ------------------Main page function-----------------
export default function CarRentals() {
  return (
    <>
      <Head>
        <title> Car Rentals Web App Development Company | Bottom Funnel </title>
        <meta
          name="description"
          content="Wondering how to start your own car rental web app? 
            Don't worry, we can help! Our web app development company 
            has years of experience in developing car rental web apps for 
            various companies."
        />
      </Head>

      <main>
        <CarRentalHeader />
        <FeaturesComp />
        <GreyBoxComponent />
        <RenterAppComp />
        <AdminPannelComp />
        <CustomerAppComp />
        <ChooseUsComp />
        {/* <CarRentalFooter /> */}
      </main>
    </>
  );
}
