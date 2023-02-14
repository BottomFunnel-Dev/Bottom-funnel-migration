import React from "react";
import Politicalparty from "../../components/Politics/Politicalparty";
import Politicaltool from "../../components/Politics/Politicaltool";
import Politicalvolunteer from "../../components/Politics/Politicalvolunteer";
import Politicscontainer from "../../components/Politics/Politicscontainer";
import Politicsmobile from "../../components/Politics/Politicsmobile";
import Politicsreliable from "../../components/Politics/Politicsreliable";
import Politictarget from "../../components/Politics/Politictarget";

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

export default function Politics() {
  return (
    <div>
      <Head>
        <title>Politics Web and App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a reliable and affordable politics web app 
          development company that can take on your project 
          wholeheartedly? Check out our website and see for 
          yourself how we can help!"
        />
      </Head>
      <main>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "black",
            logo: true,
          }}
        />
        <Politicscontainer />
        <Politicalparty />
        <Politicsmobile />
        <Politicalvolunteer />
        <Politicaltool />
        <Politicsreliable />
        <Politictarget />

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
    </div>
  );
}
