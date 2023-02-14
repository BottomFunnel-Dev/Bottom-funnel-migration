import React from "react";



import dynamic from "next/dynamic";



const BigDataServiceBanner = dynamic(
  () => import("../../components/BigDataServiceCom/BigDataServiceBanner/BigDataServiceBanner"),
  { loading: "loading..." },
);

const BigDataServicePopular = dynamic(
  () => import("../../components/BigDataServiceCom/BigDataServicePopular/BigDataServicePopular"),
  { loading: "loading..." },
);
const BigDataServiceHandling = dynamic(
  () => import("../../components/BigDataServiceCom/BigDataServiceHandling/BigDataServiceHandling"),
  { loading: "loading..." },
);
const BigDataServiceBF = dynamic(
  () => import("../../components/BigDataServiceCom/BigDataServiceBF/BigDataServiceBF"),
  { loading: "loading..." },
);

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

export default function BigDataService() {
  return (
    <div>
      <Head>
        <title>Big Data Development Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a Big Data Company that can 
      provide you with reliable and effective Big Data 
      services? Look no further! Our Big Data Services 
      include Big Data analysis, data preparation, and 
      more!"
        />
      </Head>

      <main>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "white",
            logo: true,
          }}
        />
        <BigDataServiceBanner />
        <BigDataServicePopular />
        <BigDataServiceHandling />
        <BigDataServiceBF />
        {/*  <CustomWebForm /> */}

        {/* Other react required components */}
        <StoriesSection />
        <OndemandSection />
        {/* <PortFolio />  */}
        {/* <PlanProject />  */}
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </div>
  );
}
