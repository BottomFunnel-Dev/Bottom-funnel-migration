import React from "react";

import Videostreamingcontainer from "../../components/Videostreaming/Videostreamingcontainer";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import Services from "../../components/Videostreaming/Services";
import Grow from "../../components/Videostreaming/Grow";
import Featuressection from "../../components/Videostreaming/Featuressection";
import { videostreamLogo } from "../../components/Data/SeopartnerData";

import Head from "next/head";

export default function VideoStreaming() {
  return (
    <div>
      <Head>
        <title>Video Streaming Web and App Development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you interested in learning more about video stream web 
          app development? Read on to learn more about our innovative 
          solutions that will help you stream your videos in the best 
          possible way!"
        />
      </Head>
      <main>
        <Videostreamingcontainer />
        <Trusted partnerLogo={videostreamLogo} />
        <Services />
        <Grow />
        <Featuressection />
      </main>
    </div>
  );
}
