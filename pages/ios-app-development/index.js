import React from "react";
import { IOSAppDevelopmentPageBanner } from "../../components/IOSAppDevelopmentPage/IOSAppDevelopmentPageBanner/IOSAppDevelopmentPageBanner";
import { IOSAppDevelopmentPageCards } from "../../components/IOSAppDevelopmentPage/IOSAppDevelopmentPageCards/IOSAppDevelopmentPageCards";

import Head from "next/head";

export default function IOSAppDevelopment() {
  return (
    <>
      <Head>
        <title>IOS App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you interested in learning how to develop and 
          launch your own iOS app? Our guide covers 
          everything you need to know about IOS app 
          development."
        />
      </Head>
      <main>

        <IOSAppDevelopmentPageBanner />
        <IOSAppDevelopmentPageCards />

      </main>
    </>
  );
}
