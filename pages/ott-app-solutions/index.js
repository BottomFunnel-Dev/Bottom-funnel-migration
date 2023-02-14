import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";

const OttHeader = dynamic(
  () => import("../../components/Ott-App-Page/ott-Header/OttHeader"),
  { loading: () => "loading..." },
);
const OttSolutions = dynamic(
  () =>
    import("../../components/Ott-App-Page/Ott-Solution-Card-Comp/OttSolutions"),
  { loading: () => "loading..." },
);
const OttAdminPannel = dynamic(
  () => import("../../components/Ott-App-Page/Ott-Admn-Pannel/OttAdminPannel"),
  { loading: () => "loading..." },
);
const OttFeatures = dynamic(
  () => import("../../components/Ott-App-Page/Ott-Features/OttFeatures"),
  { loading: () => "loading..." },
);
const OttFooter = dynamic(
  () => import("../../components/Ott-App-Page/Ott-Footer/OttFooter"),
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

export default function OTTPage() {
  return (
    <>
      <Head>
        <title>OTT Web and App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Wondering how to develop an OTT App? Don't worry, we 
          can help! In this blog, we will discuss the various 
          components that make up an OTT App and the various 
          steps involved in developing one."
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
        <div style={{ background: "black" }}>
          <OttHeader />
          <OttSolutions />
          <OttAdminPannel />
          <OttFeatures />
          <OttFooter />
        </div>

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
