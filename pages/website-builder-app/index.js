import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const WebisteBuilderBanner = dynamic(
  () =>
    import(
      "../../components/WebsiteBuilderApp/WebsiteBuilderBanner/WebisteBuilderBanner"
    ),
  {
    loading: () => "loading...",
  },
);
const WebsiteBuilderOnePlatform = dynamic(
  () =>
    import(
      "../../components/WebsiteBuilderApp/WebsiteBuilderOnePlatform/WebsiteBuilderOnePlatform"
    ),
  { loading: () => "loading..." },
);
const WebsiteBuiulderMiddleComp = dynamic(
  () =>
    import(
      "../../components/WebsiteBuilderApp/WebsiteBuilderMiddleComp/WebsiteBuilderMiddleComp"
    ),
  { loading: () => "loading..." },
);
const CreateWebsites = dynamic(
  () =>
    import("../../components/WebsiteBuilderApp/CreateWebsites/CreateWebsites"),
  { loading: () => "loading..." },
);
const MakeContentCount = dynamic(
  () =>
    import(
      "../../components/WebsiteBuilderApp/MakeContentCount/MakeContentCount"
    ),
  { loading: () => "loading..." },
);

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
