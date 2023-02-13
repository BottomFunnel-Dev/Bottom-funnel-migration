import React from "react";
import { EducationAdministration } from "../../components/Education/EducationAdministration";
import { EducationBanner } from "../../components/Education/EducationBanner";
import { EducationGroupwise } from "../../components/Education/EducationGroupwise";
import { EducationITteams } from "../../components/Education/EducationITteams";
import { EducationSupport } from "../../components/Education/EducationSupport";

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
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function Education() {
  return (
    <div>
      <Head>
        <title>Education Web App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you in need of an education web app that can help increase 
          student engagement and retention? Our team of experts can 
          help design and build a web app that meets your specific needs 
          and requirements."
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
        <EducationBanner />
        <EducationSupport />
        <EducationITteams />
        <EducationAdministration />
        <EducationGroupwise />

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
