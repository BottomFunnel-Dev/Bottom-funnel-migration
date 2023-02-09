import React from "react";

// ----- React main sub components -----
import { UIDesingBanner } from "../../components/UIDesignPage/UIDesingBanner/UIDesingBanner";
import { UIDesignEmotions } from "../../components/UIDesignPage/UIDesignEmotions/UIDesignEmotions";
import { UIDesignWhyBF } from "../../components/UIDesignPage/UIDesignWhyBF/UIDesignWhyBF";
import { UIDesignMidBanner } from "../../components/UIDesignPage/UIDesignMidBanner/UIDesignMidBanner";

// ----- Other requried react components -----
import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
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
