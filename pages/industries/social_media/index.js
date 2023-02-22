import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const SocialMediaAdminPannel = dynamic(
  () => import("../../../components/SocialMedia/SocialMediaAdminPannel"),
  { loading: () => "loading..." },
);
const SocialMediaApproch = dynamic(
  () => import("../../../components/SocialMedia/SocialMediaApproch"),
  { loading: () => "loading..." },
);
const SocialMediaBanner = dynamic(
  () => import("../../../components/SocialMedia/SocialMediaBanner"),
  { loading: () => "loading..." },
);
const SocialMedialLowerBanner = dynamic(
  () => import("../../../components/SocialMedia/SocialMedialLowerBanner"),
  { loading: () => "loading..." },
);
const SocialMediaSolution = dynamic(
  () => import("../../../components/SocialMedia/SocialMediaSolution"),
  { loading: () => "loading..." },
);
const SocialMediaSuggestion = dynamic(
  () => import("../../../components/SocialMedia/SocialMediaSuggestion"),
  { loading: () => "loading..." },
);

export default function SocialMedia() {
  return (
    <div>
      <Head>
        <title>Social Media Web and App Development | Bottom Funnel</title>
        <meta
          name="description"
          content="Want to know the best way to connect with your target audience
          on social media? Check out our social media web app 
         development services and see for yourself how we can help 
         you achieve your goals!"
        />
      </Head>
      <main>
        <SocialMediaBanner />
        <SocialMediaSuggestion />
        <SocialMediaApproch />
        <SocialMediaSolution />
        <SocialMediaAdminPannel />
        <SocialMedialLowerBanner />
      </main>
    </div>
  );
}
