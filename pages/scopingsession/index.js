import React from "react";
import { Footer } from "../../components/ScopingSessionPage/Footer";

import { Header } from "../../components/ScopingSessionPage/Header";
import { MiddleText } from "../../components/ScopingSessionPage/MiddleText";
import { MidImages } from "../../components/ScopingSessionPage/MidImages";
import { RoundIconsText } from "../../components/ScopingSessionPage/RoundIconsText";

import Head from "next/head";

export default function Scoping() {
  return (
    <div>
      <Head>
        <title>Scoping Session | Bottom Funnel</title>
        <meta
          name="description"
          content="Want to start your own startup but have no idea on where 
          to begin? A Scoping Session is an important initial step to 
          identifying and addressing key product development needs.
           Read on to know more."
        />
      </Head>
      <main>
        <Header />
        <MiddleText />
        <MidImages />
        <RoundIconsText />
        <Footer />

      </main>
    </div>
  );
}
