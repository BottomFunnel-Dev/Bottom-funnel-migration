import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// ---------------importing components with lazy loading-----------------------
const CareerBanner = dynamic(
  () => import("../../components/CareerPage/CareerBanner/CareerBanner"),
  { loading: () => "loading..." },
);
const CareerMain = dynamic(
  () => import("../../components/CareerPage/CareerMain/CareerMain"),
  { loading: () => "loading..." },
);
const CareerReferral = dynamic(
  () => import("../../components/CareerPage/CareerReferral/CareerReferral"),
  { loading: () => "loading..." },
);
const CarrerMidBanner = dynamic(
  () => import("../../components/CareerPage/CarrerMidBanner/CarrerMidBanner"),
  { loading: () => "loading.." },
);
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: () => "loading.." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: () => "loading.." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: () => "loading.." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: () => "loading.." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: () => "loading.." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: () => "loading.." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: () => "loading.." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: () => "loading.." },
);
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  loading: () => "loading...",
  ssr: false,
});

// ------------------Main page function-----------------
const index = () => {
  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>Career | Bottom Funnel </title>
        <meta
          name="description"
          content="We are working on some of the biggest names in the industry, so you can trust us when we say that our product will be in sync with changing market demands. Our team members are intelligent and fun humans who love what they do, and they will help you build better mobile apps!"
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
        <CareerBanner />
        <CareerMain />
        <CareerReferral />
        <CarrerMidBanner />

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
};

export default index;
