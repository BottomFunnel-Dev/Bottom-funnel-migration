import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import AgricultureBanner from "../../components/Agriculture/AgricultureBanner/AgricultureBanner";
import { AgricultureSolutions } from "../../components/Agriculture/AgricultureSolutions/AgricultureSolutions";
import {
  logisticsCustomer,
  agricultureConsumerApp,
  agricultureAdmin,
} from "../../components/Data/agriculture.js";
import AgricultureCustomerApp from "../../components/Agriculture/AgricultureCustomerApp/AgricultureCustomerApp";
import AgricultureConsumerApp from "../../components/Agriculture/AgricultureConsumerApp/AgricultureConsumerApp";
import AgricultureAdminPanel from "../../components/Agriculture/AgricultureAdminPanel/AgricultureAdminPanel";

const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "Loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "Loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "Loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "Loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "Loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "Loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "Loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "Loading..." },
);
import Navbar from "../../components/Navbar/Navbar";

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
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
        />
        <AgricultureBanner />

        <AgricultureSolutions />

        <AgricultureCustomerApp agricultureCustomerApp={logisticsCustomer} />
        <AgricultureConsumerApp driveData={agricultureConsumerApp} />
        <AgricultureAdminPanel plantBasedAdminData={agricultureAdmin} />

        {/* Other react required components  */}
        <StoriesSection />
        <OndemandSection />
        {/* <PortFolio />  */}
        <PlanProject />
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </>
  );
}
