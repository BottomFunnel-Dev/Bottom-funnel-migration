import React from "react";

import { NewsEventBanner } from "../../components/PressAndMedia/NewsEventBanner/NewsEventBanner";
import { NewsEventSection } from "../../components/PressAndMedia/NewsEventSection/NewsEventSection";
import { MediaSection } from "../../components/PressAndMedia/MediaSection/MediaSection";
import { NewsEventSlider } from "../../components/PressAndMedia/NewsEventSlider/NewsEventSlider";

import Head from "next/head";

export default function PressMedia() {
  return (
    <div>
      <Head>
        <title>Press and Media| Bottom Funnel</title>
        <meta
          name="description"
          content="Find the latest news and updates on the press and media
          industry, including publications, conferences, law firms, 
         and more. Stay updated with our daily newsletter."
        />
      </Head>

      <main>
        <NewsEventBanner />
        <NewsEventSection />
        <MediaSection />
        {/* <NewsEventSlider /> */}
      </main>
    </div>
  );
}
