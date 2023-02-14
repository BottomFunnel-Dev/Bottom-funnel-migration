import React from "react";



import dynamic from "next/dynamic";

const BlockChainBanner = dynamic(
  () => import("../../components/BlockChainPage/BlockChainBanner/BlockChainBanner"),
  { loading: "loading..." },
);
const BlockChainOffer = dynamic(
  () => import("../../components/BlockChainPage/BlockChainOffer/BlockChainOffer"),
  { loading: "loading..." },
);
const BlockChainServices = dynamic(
  () => import("../../components/BlockChainPage/BlockChainServices/BlockChainServices"),
  { loading: "loading..." },
);
const CustomWebForm = dynamic(
  () => import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
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
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "white",
            logo: true,
          }}
        />
        <BlockChainBanner />
        <BlockChainOffer />
        <BlockChainServices />
        {/*  <BlockChainBF /> */}
        <CustomWebForm />

        {/* Other react required components  */}
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
};

export default index;
