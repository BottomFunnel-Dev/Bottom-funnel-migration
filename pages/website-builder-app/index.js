import React from "react";

import { WebisteBuilderBanner } from "../../components/WebsiteBuilderApp/WebsiteBuilderBanner/WebisteBuilderBanner";
import { WebsiteBuilderOnePlatform } from "../../components/WebsiteBuilderApp/WebsiteBuilderOnePlatform/WebsiteBuilderOnePlatform";
import { WebsiteBuiulderMiddleComp } from "../../components/WebsiteBuilderApp/WebsiteBuilderMiddleComp/WebsiteBuilderMiddleComp";
import { CreateWebsites } from "../../components/WebsiteBuilderApp/CreateWebsites/CreateWebsites";
import { MakeContentCount } from "../../components/WebsiteBuilderApp/MakeContentCount/MakeContentCount";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." }
);

const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." }
);

const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." }
);

const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." }
);

const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." }
);

const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." }
);

const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." }
);

const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." }
);

import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function WebsiteBuilderApp() {
  return (
    <div>
      <Head>
        <title>
          Website Builder Web and App Development Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Want to get started with website building without any hassle? 
          Check out our wide range of Website Builder App solutions 
          that are available at our disposal. We can help you build the 
          perfect website that will help your business reach new 
          heights!"
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
        
        <WebisteBuilderBanner />
        <WebsiteBuilderOnePlatform />
        <WebsiteBuiulderMiddleComp />
        <CreateWebsites />
        <MakeContentCount />
        {/* <WebsiteInsights /> */}

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
