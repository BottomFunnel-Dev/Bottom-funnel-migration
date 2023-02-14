import React from "react";

// ----- React main sub components -----
import { UIDesingBanner } from "../../components/UIDesignPage/UIDesingBanner/UIDesingBanner";
import { UIDesignEmotions } from "../../components/UIDesignPage/UIDesignEmotions/UIDesignEmotions";
import { UIDesignWhyBF } from "../../components/UIDesignPage/UIDesignWhyBF/UIDesignWhyBF";
import { UIDesignMidBanner } from "../../components/UIDesignPage/UIDesignMidBanner/UIDesignMidBanner";

// ----- Other requried react components -----

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

export default function UIDesignPage() {
  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>User Interface Design | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for a reliable company that can help you with your 
          user interface design? Look no further than Bottom Funnel.
           We offer services in this field"
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
        <UIDesingBanner />
        <UIDesignEmotions />
        <UIDesignWhyBF />
        <UIDesignMidBanner />

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
