import React from "react";
import Head from "next/head";
import { videostreamLogo } from "../../../components/Data/SeopartnerData";
import dynamic from "next/dynamic";

const Videostreamingcontainer = dynamic(
  () => import("../../../components/Videostreaming/Videostreamingcontainer"),
  { loading: () => "loading..." },
);
const Trusted = dynamic(
  () => import("../../../components/SEO/SeoTrustedCompanies/Seotrusted"),
  { loading: () => "loading..." },
);
const Services = dynamic(
  () => import("../../../components/Videostreaming/Services"),
  { loading: () => "loading..." },
);
const Grow = dynamic(() => import("../../../components/Videostreaming/Grow"), {
  loading: () => "loading...",
});
const Featuressection = dynamic(
  () => import("../../../components/Videostreaming/Featuressection"),
  { loading: () => "loading..." },
);

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
