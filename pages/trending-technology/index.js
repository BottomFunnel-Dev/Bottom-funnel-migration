import React from "react";
import { TrendingTechnologyBanner } from "../../components/TrendingTechnology/TrendingTechnologyBanner";
import { TrendingTechnologyService } from "../../components/TrendingTechnology/TrendingTechnologyService";
import { TrendingTechnologyLowerBanner } from "../../components/TrendingTechnology/TrendingTechnologyLowerBanner";
import { TrendingWhyChoose } from "../../components/TrendingTechnology/TrendingWhyChoose";

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

export default function TrendingTech() {
  return (
    <div>
      <Head>
        <title>Trending Technology Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Get the latest on trending technology development 
          services with our comprehensive guide. Read on to
          know about the top trends in tech"
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
        <TrendingTechnologyBanner />
        <TrendingTechnologyService />
        <TrendingTechnologyLowerBanner />
        <TrendingWhyChoose />

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
