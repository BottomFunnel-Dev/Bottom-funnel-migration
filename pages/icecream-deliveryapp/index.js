import React from "react";

import { IceCreamAdminPannel } from "../../components/Icecream/IceCreamAdminPannel";
import { IcecreamBanner } from "../../components/Icecream/IcecreamBanner";
import { IcecreamCSolution } from "../../components/Icecream/IcecreamCSolution";
import { IcecreamCustomerApp } from "../../components/Icecream/IcecreamCustomerApp";
import { IceCreamDriverApp } from "../../components/Icecream/IceCreamDriverApp";

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

export default function Icecream() {
  return (
    <>
      <Head>
        <title> Icecream Web App Development Company | Bottom Funnel </title>
        <meta
          name="description"
          content="Learn about our innovative Icecream Web App Development 
        solutions that will help you drive more sales from your web app 
        and become one of the most successful ice cream businesses 
        out there!"
        />
      </Head>
      <main>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
        />
        <IcecreamBanner />
        <IcecreamCSolution />
        <IcecreamCustomerApp />
        <IceCreamAdminPannel />
        <IceCreamDriverApp />

        <StoriesSection />
        {/* <Industries /> */}
        <PlanProject />
        <OndemandSection />
        {/* <PortFolio /> */}
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </>
  );
}
