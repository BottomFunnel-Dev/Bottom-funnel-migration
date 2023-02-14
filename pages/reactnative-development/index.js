import React from "react";

import { ReactNativeAppDevelopmentBanner } from "../../components/ReactNativeAppDevelopment/ReactNativeAppDevelopmentBanner/ReactNativeAppDevelopmentBanner";
// import { ReactNativeAppDevelopmentContain } from "../../components/ReactNativeAppDevelopment/ReactNativeAppDevelopmentContain/ReactNativeAppDevelopmentContain";
import { ReactNativeDevelopmentCard } from "../../components/ReactNativeAppDevelopment/ReactNativeDevelopmentCard/ReactNativeDevelopmentCard";
import { ReactNativeAppDevelopmentSolution } from "../../components/ReactNativeAppDevelopment/ReactNativeAppDevelopmentSolution/ReactNativeAppDevelopmentSolution";
import { Advantages } from "../../components/ReactNativeAppDevelopment/Advantages/Advantages";

import Head from "next/head";

export default function ReactNativeAppDevelopment() {
  return (
    <>
      <Head>
        <title> React Native App Development Company | Bottom Funnel </title>
        <meta
          name="description"
          content="Looking for a reliable React Native development company? If you're interested in learning how to 
          design and develop mobile apps using React Native, read on."
        />
      </Head>

      <main>
        <ReactNativeAppDevelopmentBanner />
        {/* <ReactNativeAppDevelopmentContain /> */}
        <ReactNativeDevelopmentCard />
        <ReactNativeAppDevelopmentSolution />
        <Advantages />
      </main>
    </>
  );
}
