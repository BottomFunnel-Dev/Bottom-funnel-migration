import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// ---------------importing components with lazy loading-----------------------
const AppBuilderSolutionBanner = dynamic(
  () => import("../../components/AppBuilderSoltion/AppBuilderSolutionBanner"),
  { loading: () => "loading..." }
);

const AppBuilderDiscoverApp = dynamic(
  () => import("../../components/AppBuilderSoltion/AppBuilderDiscoverApp"),
  { loading: () => "loading..." }
);

const AppBuilderWhyShuld = dynamic(
  () => import("../../components/AppBuilderSoltion/AppBuilderWhyShuld"),
  { loading: () => "loading..." }
);

const AppBuilderCreate = dynamic(
  () => import("../../components/AppBuilderSoltion/AppBuilderCreate"),
  { loading: () => "loading..." }
);

const AppBuilderMaker = dynamic(
  () => import("../../components/AppBuilderSoltion/AppBuilderMaker"),
  { loading: () => "loading..." }
);

const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: () => "Loading..." }
);

const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: () => "Loading..." }
);

const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: () => "Loading..." }
);

const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: () => "Loading..." }
);

const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: () => "Loading..." }
);

const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: () => "Loading..." }
);

const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: () => "Loading..." }
);

const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: () => "Loading..." }
);

const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  loading: () => "loading...",
  ssr: false,
});

// ------------------Main page function-----------------
export default function AppBuilderSolution() {
  return (
    <div>
      <Head>
        <title> App Builder Solutions Company | Bottom Funnel </title>
        <meta
          name="description"
          content="Wondering how to develop an app? Look no further, we can help! We specialize in providing top-notch App Builder 
          Solutions Development services that will help you turn your idea into a reality."
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
        
        <AppBuilderSolutionBanner />
        <AppBuilderDiscoverApp />
        <AppBuilderWhyShuld />
        <AppBuilderCreate />
        <AppBuilderMaker />

        {/* Other react required components*/}
        <StoriesSection />
        <OndemandSection />
        {/* <PortFolio />*/}
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
