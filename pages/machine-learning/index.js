import React from "react";
import { MLBanner } from "../../components/MLPages/MLBanner/MLBanner";
import { MLPopular } from "../../components/MLPages/MLPopular/MLPopular";
import { MLMidBanner } from "../../components/MLPages/MLMidBanner/MLMidBanner";
import { MLApproach } from "../../components/MLPages/MLApproach/MLApproach";
import { MLwhyBF } from "../../components/MLPages/MLwhyBF/MLwhyBF";
import { CustomWebForm } from "../../components/CustomisedWebPage/CustomWebForm/CustomWebForm";

import dynamic from "next/dynamic";
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

export default function MachineLearning() {
  return (
    <div>
      <Head>
        <title>Machine Learning Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Have you been looking to up your
           intelligence with the help of machines? 
           Well, read on to find out everything you
            need to know about machine learning, 
            and how it can help you in your business
            or personal life."
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
        <MLBanner />
        <MLPopular />
        <MLMidBanner />
        <MLApproach />
        <MLwhyBF />
        <CustomWebForm />
        {/* Other react required components       */}
        <StoriesSection />
        <OndemandSection />
        {/* <PortFolio />        */}
        {/* <PlanProject />      */}
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </div>
  );
}
