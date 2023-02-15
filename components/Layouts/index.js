import React from "react";
import dynamic from "next/dynamic";

import Navbar from "../Navbar/Navbar";
const TextDropdown = dynamic(
  () => import("../CommonComponents/faqSection/Faqs"),
  { loading: () => "loading..." },
);
const OndemandSection = dynamic(
  () => import("../CommonComponents/OnDemandSection/OndemandSection"),
  { loading: () => "loading..." },
);
const PlanProject = dynamic(
  () => import("../CommonComponents/PlanProject/PlanProject"),
  { loading: () => "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../CommonComponents/SeoBlogs/Seoblogs"),
  { loading: () => "loading..." },
);
const StoriesSection = dynamic(
  () => import("../CommonComponents/StoriesSection/StoriesSection"),
  { loading: () => "loading..." },
);
const Revamping = dynamic(() => import("../revamping/Revamping"), {
  loading: () => "loading...",
});
const ContectForm = dynamic(
  () => import("../CommonComponents/ContectForm/ContectForm"),
  { loading: () => "loading..." },
);
const MainFooter = dynamic(
  () => import("../CommonComponents/FooterSection/MainFooter"),
  { loading: () => "loading..." },
);
const PortFolio = dynamic(
  () => import("../CommonComponents/PortFolioSection/PortFolio"),
  { loading: () => "Loading..." },
);
export default function Layout({ children }) {
  return (
    <>
      <Navbar
        navPageColor = {true}
      />
      <main>{children}</main>
      <StoriesSection />
      <OndemandSection />
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <PortFolio/>
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </>
  );
}
