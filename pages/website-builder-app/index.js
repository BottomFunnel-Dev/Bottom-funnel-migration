import React from "react";

import { WebisteBuilderBanner } from "../../components/WebsiteBuilderApp/WebsiteBuilderBanner/WebisteBuilderBanner";
import { WebsiteBuilderOnePlatform } from "../../components/WebsiteBuilderApp/WebsiteBuilderOnePlatform/WebsiteBuilderOnePlatform";
import { WebsiteBuiulderMiddleComp } from "../../components/WebsiteBuilderApp/WebsiteBuilderMiddleComp/WebsiteBuilderMiddleComp";
import { CreateWebsites } from "../../components/WebsiteBuilderApp/CreateWebsites/CreateWebsites";
import { MakeContentCount } from "../../components/WebsiteBuilderApp/MakeContentCount/MakeContentCount";

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
        <WebisteBuilderBanner />
        <WebsiteBuilderOnePlatform />
        <WebsiteBuiulderMiddleComp />
        <CreateWebsites />
        <MakeContentCount />
        {/* <WebsiteInsights /> */}
      </main>
    </div>
  );
}
