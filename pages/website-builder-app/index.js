import React from "react";

import { WebisteBuilderBanner } from "../../components/WebsiteBuilderApp/WebsiteBuilderBanner/WebisteBuilderBanner";
import { WebsiteBuilderOnePlatform } from "../../components/WebsiteBuilderApp/WebsiteBuilderOnePlatform/WebsiteBuilderOnePlatform";
import { WebsiteBuiulderMiddleComp } from "../../components/WebsiteBuilderApp/WebsiteBuilderMiddleComp/WebsiteBuilderMiddleComp";
import { CreateWebsites } from "../../components/WebsiteBuilderApp/CreateWebsites/CreateWebsites";
import { MakeContentCount } from "../../components/WebsiteBuilderApp/MakeContentCount/MakeContentCount";

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

export default function WebsiteBuilderApp() {
  return (
    <div>

      <Head>
        <title>Website Builder App Development Company | Bottom Funnel</title>
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
