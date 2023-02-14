import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

const LaudryApplication = dynamic(
  () => import("../../components/LaundryPage/LaudryApplication"),
  { loading: () => "loading..." },
);
const LaundryAdmin = dynamic(
  () => import("../../components/LaundryPage/LaundryAdmin"),
  { loading: () => "loading..." },
);
const Laundryapppagelowerfooter = dynamic(
  () => import("../../components/LaundryPage/Laundryapppagelowerfooter"),
  { loading: () => "loading..." },
);
const LaundryBannerlower = dynamic(
  () => import("../../components/LaundryPage/LaundryBannerlower"),
  { loading: () => "loading..." },
);
const LaundryCustomer = dynamic(
  () => import("../../components/LaundryPage/LaundryCustomer"),
  { loading: () => "loading..." },
);
const LaundryDelivery = dynamic(
  () => import("../../components/LaundryPage/LaundryDelivery"),
  { loading: () => "loading..." },
);
const LaundryPageBanner = dynamic(
  () => import("../../components/LaundryPage/LaundryPageBanner"),
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

export default function LaundryPage() {
  return (
    <>
      <Head>
        <title> Laundry Web and App Development Company | Bottom Funnel </title>
        <meta
          name="description"
          content="Are you looking for a laundry web app development company that can help you create a tailored and effective solution for your 
          laundry needs? Look no further than ours! Our team of experienced developers will create a web app that meets your specific
          needs and requirements."
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
        <LaundryPageBanner />
        <LaudryApplication />
        <LaundryCustomer />
        <LaundryDelivery />
        <LaundryAdmin />
        <LaundryBannerlower />
        <Laundryapppagelowerfooter />

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
