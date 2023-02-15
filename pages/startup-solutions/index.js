import React from "react";
import Head from "next/head";
import styles from "./StartupSolutions.module.css";
import dynamic from "next/dynamic";

const StartupSolutionsBanner = dynamic(
  () =>
    import(
      "../../components/StartupSolutions/StartupSolutionsBanner/StartupSolutionsBanner"
    ),
  { loading: () => "loading..." }
);
const StartupSolMidBanner = dynamic(
  () =>
    import(
      "../../components/StartupSolutions/StartupSolMidBanner/StartupSolMidBanner"
    ),
  { loading: () => "loading..." }
);
const StartupSolPartner = dynamic(
  () =>
    import(
      "../../components/StartupSolutions/StartupSolPartner/StartupSolPartner"
    ),
  { loading: () => "loading..." }
);
const StartupSolOffer = dynamic(
  () =>
    import("../../components/StartupSolutions/StartupSolOffer/StartupSolOffer"),
  { loading: () => "loading..." }
);
const StartupSolOfferCard = dynamic(
  () =>
    import(
      "../../components/StartupSolutions/StartupSolOfferCard/StartupSolOfferCard"
    ),
  { loading: () => "loading..." }
);
const StartupSolWhyBF = dynamic(
  () =>
    import("../../components/StartupSolutions/StartupSolWhyBF/StartupSolWhyBF"),
  { loading: () => "loading..." }
);
const CustomWebForm = dynamic(
  () =>
    import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
  { loading: () => "loading..." }
);

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
        <StartupSolutionsBanner />
        <StartupSolPartner />
        <StartupSolOffer />
        <StartupSolOfferCard />
        <StartupSolMidBanner />
        <StartupSolWhyBF />
        <CustomWebForm />
      </main>
    </div>
  );
}
