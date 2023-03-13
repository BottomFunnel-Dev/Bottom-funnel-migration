import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const AiContentBanner = dynamic(
  () => import("../../components/AiContentService/AiContentBanner"),
  { loading: () => "loading..." },
);
const AiContentHuman = dynamic(
  () => import("../../components/AiContentService/AiContentHuman"),
  { loading: () => "loading..." },
);
const AiHowDoesWorks = dynamic(
  () => import("../../components/AiContentService/AiHowDoesWorks"),
  { loading: () => "loading..." },
);
const AIContentApplication = dynamic(
  () => import("../../components/AiContentService/AIContentApplication"),
  { loading: () => "loading..." },
);
const AiContentTextOnly = dynamic(
  () => import("../../components/AiContentService/AiContentTextOnly"),
  { loading: () => "loading..." },
);

export default function index() {
  return (
    <div>
      <Head>
        <title>Artificial Intelligence Services | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking to invest in artificial intelligence services? 
          Check out our comprehensive guide on the top AI 
          offerings and where to invest!"
        />
      </Head>
      <main>
        <AiContentBanner />
       <AiContentHuman />  
       {/* <AiHowDoesWorks /> */}
         <AIContentApplication />
        <AiContentTextOnly />
      </main>
    </div>
  );
}
