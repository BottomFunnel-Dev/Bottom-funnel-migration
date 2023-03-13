import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// ---------------importing components with lazy loading-----------------------
const Cannabisoverview = dynamic(
  () => import("../../components/Cannabis/Cannabisoverview"),
  { loading: () => "loading..." }
);

const Cannabissolution = dynamic(
  () => import("../../components/Cannabis/Cannabissolution"),
  { loading: () => "loading..." }
);

const Cannabiscontainer = dynamic(
  () => import("../../components/Cannabis/Cannabiscontainer"),
  { loading: () => "loading..." }
);

const Cannabiscustomersection = dynamic(
  () => import("../../components/Cannabis/Cannabiscustomersection"),
  { loading: () => "loading..." }
);

const Cannabisadmin = dynamic(
  () => import("../../components/Cannabis/Cannabisadmin"),
  { loading: () => "loading..." }
);

const Cannabisdrive = dynamic(
  () => import("../../components/Cannabis/Cannabisdrive"),
  { loading: () => "loading..." }
);

// ------------------Main page function-----------------
export default function Cannabis() {
  return (
    <>
      <Head>
        <title> Cannabis web App Development Company | Bottom Funnel </title>
        <meta
          name="description"
          content="Wondering if cannabis Web App development is the right decision for your business? Learn about the many benefits of 
          using a cannabis web App development company such as VinCard."
        />
      </Head>

      <main>
        <Cannabiscontainer />
        <Cannabissolution />
        <Cannabisoverview />
        <Cannabiscustomersection />
        <Cannabisadmin />
        <Cannabisdrive />
      </main>
    </>
  );
}
