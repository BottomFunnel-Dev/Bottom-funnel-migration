import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
  logisticsCustomer,
  agricultureConsumerApp,
  agricultureAdmin,
} from "../../components/Data/agriculture.js";

// ---------------importing components with lazy loading-----------------------
const AgricultureBanner = dynamic(
  () =>
    import("../../components/Agriculture/AgricultureBanner/AgricultureBanner"),
  { loading: () => "loading..." },
);
const AgricultureSolutions = dynamic(
  () =>
    import(
      "../../components/Agriculture/AgricultureSolutions/AgricultureSolutions"
    ),
  { loading: () => "loading..." },
);
const AgricultureCustomerApp = dynamic(
  () =>
    import(
      "../../components/Agriculture/AgricultureCustomerApp/AgricultureCustomerApp"
    ),
  { loading: () => "loading..." },
);
const AgricultureConsumerApp = dynamic(
  () =>
    import(
      "../../components/Agriculture/AgricultureConsumerApp/AgricultureConsumerApp"
    ),
  { loading: () => "loading..." },
);
const AgricultureAdminPanel = dynamic(
  () =>
    import(
      "../../components/Agriculture/AgricultureAdminPanel/AgricultureAdminPanel"
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
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  loading: () => "loading...",
  ssr: false,
});

// ------------------Main page function-----------------
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
