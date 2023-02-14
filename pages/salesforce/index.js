import React from "react";
import styles from "./SalesforsePage.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

const SaleforceBanner = dynamic(
  () =>
    import("../../components/SalesforsePage/SaleforceBanner/SaleforceBanner"),
  { loading: () => "loading..." },
);
const SalesforceOffers = dynamic(
  () =>
    import("../../components/SalesforsePage/SalesforceOffers/SalesforceOffers"),
  { loading: () => "loading..." },
);
const SalesforceServices = dynamic(
  () =>
    import(
      "../../components/SalesforsePage/SalesforceServices/SalesforceServices"
    ),
  { loading: () => "loading..." },
);
const SalesforceProcess = dynamic(
  () =>
    import(
      "../../components/SalesforsePage/SalesforceProcess/SalesforceProcess"
    ),
  { loading: () => "loading..." },
);
const SalesforceMidBanner = dynamic(
  () =>
    import(
      "../../components/SalesforsePage/SalesforceMidBanner/SalesforceMidBanner"
    ),
  { loading: () => "loading..." },
);
const SalesforceWhyBF = dynamic(
  () =>
    import("../../components/SalesforsePage/SalesforceWhyBF/SalesforceWhyBF"),
  { loading: () => "loading..." },
);
const CustomWebForm = dynamic(
  () =>
    import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
  { loading: () => "loading..." },
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
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  loading: "loading...",
});

export default function SalesForcePage() {
  return (
    <div className={styles.SalesforsePageContainer}>
      <Head>
        <title>SalesForce Development Service Comapany | Bottom Funnel</title>
        <meta
          name="description"
          content="Want to get started with SalesForce Services? Learn 
          about the different services offered by SalesForce 
          and how you can use them to drive business growth."
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
        <SaleforceBanner />
        <SalesforceServices />
        <SalesforceOffers />
        <SalesforceProcess />
        <SalesforceMidBanner />
        <SalesforceWhyBF />
        <CustomWebForm />

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
    </div>
  );
}
