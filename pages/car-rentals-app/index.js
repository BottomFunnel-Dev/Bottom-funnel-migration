import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// ---------------importing components with lazy loading-----------------------
const CarRentalHeader = dynamic(
  () => import("../../components/Car-Rental-page/CarRentalHeader"),
  { loading: () => "loading.." }
);
const FeaturesComp = dynamic(
  () => import("../../components/Car-Rental-page/FeaturesComp"),
  { loading: () => "loading.." }
);
const GreyBoxComponent = dynamic(
  () => import("../../components/Car-Rental-page/GreyBoxComponent"),
  { loading: () => "loading.." }
);
const RenterAppComp = dynamic(
  () => import("../../components/Car-Rental-page/RenterAppComp"),
  { loading: () => "loading.." }
);
const AdminPannelComp = dynamic(
  () => import("../../components/Car-Rental-page/AdminPannelComp"),
  { loading: () => "loading.." }
);
const CustomerAppComp = dynamic(
  () => import("../../components/Car-Rental-page/CustomerAppComp"),
  { loading: () => "loading.." }
);
const ChooseUsComp = dynamic(
  () => import("../../components/Car-Rental-page/ChooseUsComp"),
  { loading: () => "loading..." }
);
const CarRentalFooter = dynamic(
  () => import("../../components/Car-Rental-page/CarRentalFooter"),
  { loading: () => "loading..." }
);
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: () => "loading.." }
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: () => "loading.." }
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: () => "loading.." }
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: () => "loading.." }
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: () => "loading.." }
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: () => "loading.." }
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: () => "loading.." }
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: () => "loading.." }
);
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  loading: () => "loading..",
  ssr: false,
});

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
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
        />

        <CarRentalHeader />
        <FeaturesComp />
        <GreyBoxComponent />
        <RenterAppComp />
        <AdminPannelComp />
        <CustomerAppComp />
        <ChooseUsComp />
        {/* <CarRentalFooter /> */}

        <StoriesSection />
        {/* <Industries /> */}
        <PlanProject />
        <OndemandSection />
        {/* <PortFolio /> */}
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </>
  );
}
