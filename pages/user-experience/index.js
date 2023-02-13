import React from "react";

// ----- React main sub componients -----
import { UXDesignEmotions } from "../../components/UXDesignPage/UXDesignEmotions/UXDesignEmotions";
import { UXDesignMidBanner } from "../../components/UXDesignPage/UXDesignMidBanner/UXDesignMidBanner";
import { UXDesignServices } from "../../components/UXDesignPage/UXDesignServices/UXDesignServices";
import { UXDesingBanner } from "../../components/UXDesignPage/UXDesingBanner/UXDesingBanner";
import { UXDesignWhyBF } from "../../components/UXDesignPage/UXDesignWhyBF/UXDesignWhyBF";

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

export default function UXDesignPage() {
  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>User Experience Review | Bottom Funnel</title>
        <meta
          name="description"
          content="Want to write a killer User Experience Review? Our guide
          covers everything from preparencies needed for an 
         effective writingschedule to how to present your findings"
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
        <UXDesingBanner />
        <UXDesignEmotions />
        <UXDesignServices />
        <UXDesignWhyBF />
        <UXDesignMidBanner />

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
