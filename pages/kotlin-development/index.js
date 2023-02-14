import React from "react";

import { KotlinBanner } from "../../components/KotlinAppDevelopment/KotlinBanner/KotlinBanner";
import { KotlinSolutions } from "../../components/KotlinAppDevelopment/KotlinSolutions/KotlinSolutions";
import { KotlinProject } from "../../components/KotlinAppDevelopment/KotlinProject/KotlinProject";
import { KotlinIntegration } from "../../components/KotlinAppDevelopment/KotlinIntegration/KotlinIntegration";
import { WhyChooseKotlin } from "../../components/KotlinAppDevelopment/WhyChooseKotlin/WhyChooseKotlin";
import { KotlinPartner } from "../../components/KotlinAppDevelopment/KotlinPartner/KotlinPartner";
import { KotlinCards } from "../../components/KotlinAppDevelopment/KotlinCards/KotlinCards";

import Head from "next/head";

export default function KotlinAppDevelopment() {
  return (
    <>
      <Head>
        <title>Kotlin App Development Services | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for Kotlin app development services? Our team of experienced software engineers offers comprehensive Kotlin
           services. Read on to know about our offerings."
        />
      </Head>

      <main>
        <KotlinBanner />
        <KotlinSolutions />
        <KotlinProject />
        <KotlinIntegration />
        <WhyChooseKotlin />
        <KotlinPartner />
        <KotlinCards />
      </main>
    </>
  );
}
