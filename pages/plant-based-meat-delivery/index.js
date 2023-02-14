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
  { loading: () => "loading..." },
);
const ServicesWeOffer = dynamic(
  () =>
    import("../../components/PlantBaseMeat/ServicesWeOffer/ServicesWeOffer"),
  { loading: () => "loading..." },
);
const PlantBaseDeliverApp = dynamic(
  () =>
    import(
      "../../components/PlantBaseMeat/PlantBaseDeliverApp/PlantBaseDeliverApp"
    ),
  { loading: () => "loading..." },
);
const PlantBaseDriverApp = dynamic(
  () =>
    import(
      "../../components/PlantBaseMeat/PlantBaseDriverApp/PlantBaseDriverApp"
    ),
  { loading: () => "loading..." },
);
const PlantBaseDeliverAdminPanel = dynamic(
  () =>
    import(
      "../../components/PlantBaseMeat/PlantBaseDeliverAdminPanel/PlantBaseDeliverAdminPanel"
    ),
  { loading: () => "loading..." },
);
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: () => "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: () => "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: () => "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: () => "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: () => "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: () => "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: () => "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: () => "loading..." },
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
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
        />
        <PlantBasedMeatBanner />
        <ServicesWeOffer />
        <PlantBaseDeliverApp consumerdata={logisticsCustomer} />
        <PlantBaseDriverApp driveData={plantBaseDriverData} />
        <PlantBaseDeliverAdminPanel plantBasedAdminData={plantBaseMeatAdmin} />

        <StoriesSection />
        <PlanProject />
        <OndemandSection />
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </>
  );
}
