import React from "react";
import TravelBrands from "../../components/Travel/TravelBrands";
import Travelcontainer from "../../components/Travel/Travelcontainer";
import Travelfeature from "../../components/Travel/Travelfeature";
import TravelFlight from "../../components/Travel/TravelFlight";
import Travelsolution from "../../components/Travel/Travelsolution";
import Travelstart from "../../components/Travel/Travelstart";
import Travelwhy from "../../components/Travel/Travelwhy";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." },
);
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function Travel() {
  return (
    <div>
      <Head>
        <title>Travel Web and App Development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a travel web app development company that 
        can help you develop a customised and safe travel web app? Look 
        no further than VinCard! We offer top-notch web app development 
        services that are tailor-made for the travel industry."
        />
      </Head>

      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: true,
        }}
      />
      <Travelcontainer />
      <TravelBrands />
      <Travelfeature />
      <TravelFlight />
      <Travelsolution />
      <Travelwhy />
      <Travelstart />

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
    </div>
  );
}
