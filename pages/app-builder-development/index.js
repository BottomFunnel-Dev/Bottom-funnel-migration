import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// ---------------importing components with lazy loading-----------------------
const AppBuilderSolutionBanner = dynamic(
  () => import("../../components/AppBuilderSoltion/AppBuilderSolutionBanner"),
  { loading: () => "loading..." },
);

const AppBuilderDiscoverApp = dynamic(
  () => import("../../components/AppBuilderSoltion/AppBuilderDiscoverApp"),
  { loading: () => "loading..." },
);

const AppBuilderWhyShuld = dynamic(
  () => import("../../components/AppBuilderSoltion/AppBuilderWhyShuld"),
  { loading: () => "loading..." },
);

const AppBuilderCreate = dynamic(
  () => import("../../components/AppBuilderSoltion/AppBuilderCreate"),
  { loading: () => "loading..." },
);

const AppBuilderMaker = dynamic(
  () => import("../../components/AppBuilderSoltion/AppBuilderMaker"),
  { loading: () => "loading..." },
);

// ------------------Main page function-----------------
export default function AppBuilderSolution() {
  return (
    <div>
      <Head>
        <title> App Builder Solutions Company | Bottom Funnel </title>
        <meta
          name="description"
          content="Wondering how to develop an app? Look no further, we can help! We specialize in providing top-notch App Builder 
          Solutions Development services that will help you turn your idea into a reality."
        />
      </Head>
      <main>
        <AppBuilderSolutionBanner />
        <AppBuilderDiscoverApp />
        <AppBuilderWhyShuld />
        <AppBuilderCreate />
        <AppBuilderMaker />
      </main>
    </div>
  );
}
