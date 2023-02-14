import React from "react";
import Head from "next/head";
import styles from "./StartupSolutions.module.css";
import dynamic from "next/dynamic";

const StartupSolutionsBanner = dynamic(
  () =>
    import(
      "../../components/StartupSolutions/StartupSolutionsBanner/StartupSolutionsBanner"
    ),
  { loading: () => "loading..." },
);
const StartupSolMidBanner = dynamic(
  () =>
    import(
      "../../components/StartupSolutions/StartupSolMidBanner/StartupSolMidBanner"
    ),
  { loading: () => "loading..." },
);
const StartupSolPartner = dynamic(
  () =>
    import(
      "../../components/StartupSolutions/StartupSolPartner/StartupSolPartner"
    ),
  { loading: () => "loading..." },
);
const StartupSolOffer = dynamic(
  () =>
    import("../../components/StartupSolutions/StartupSolOffer/StartupSolOffer"),
  { loading: () => "loading..." },
);
const StartupSolOfferCard = dynamic(
  () =>
    import(
      "../../components/StartupSolutions/StartupSolOfferCard/StartupSolOfferCard"
    ),
  { loading: () => "loading..." },
);
const StartupSolWhyBF = dynamic(
  () =>
    import("../../components/StartupSolutions/StartupSolWhyBF/StartupSolWhyBF"),
  { loading: () => "loading..." },
);
const CustomWebForm = dynamic(
  () =>
    import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
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
});

export default function StartupSolutions() {
  return (
    <div className={styles.StartupSolutionsMain}>
      <Head>
        <title>StartUp Solutions Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Want to start and grow your own startup? Our 
          comprehensive startup solutions services can help 
          you. Learn about our offerings and contact us for a 
          consultation"
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
        <StartupSolutionsBanner />
        <StartupSolPartner />
        <StartupSolOffer />
        <StartupSolOfferCard />
        <StartupSolMidBanner />
        <StartupSolWhyBF />
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
