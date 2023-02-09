import React from "react";
import { Footer } from "../../components/ScopingSessionPage/Footer";

import { Header } from "../../components/ScopingSessionPage/Header";
import { MiddleText } from "../../components/ScopingSessionPage/MiddleText";
import { MidImages } from "../../components/ScopingSessionPage/MidImages";
import { RoundIconsText } from "../../components/ScopingSessionPage/RoundIconsText";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." },
);
import Navbar from "../../components/Navbar/Navbar";
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
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
        />
        <MiddleText />
        <MidImages />
        <RoundIconsText />
        <Footer />
        {/* Other react required components  */}
        <StoriesSection />
        <OndemandSection /> {/* <PortFolio />  */}
        <PlanProject />
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </div>
  );
}
