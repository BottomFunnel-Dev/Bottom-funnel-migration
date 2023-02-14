import React from "react";
import { SocialMediaAdminPannel } from "../../components/SocialMedia/SocialMediaAdminPannel";
import { SocialMediaApproch } from "../../components/SocialMedia/SocialMediaApproch";
import { SocialMediaBanner } from "../../components/SocialMedia/SocialMediaBanner";
import { SocialMedialLowerBanner } from "../../components/SocialMedia/SocialMedialLowerBanner";
import { SocialMediaSolution } from "../../components/SocialMedia/SocialMediaSolution";
import { SocialMediaSuggestion } from "../../components/SocialMedia/SocialMediaSuggestion";

import Head from "next/head";

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
