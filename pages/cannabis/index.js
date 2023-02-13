import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// ---------------importing components with lazy loading-----------------------
const Cannabisoverview = dynamic(
  () => import("../../components/Cannabis/Cannabisoverview"),
  { loading: () => "loading..." },
);
const Cannabissolution = dynamic(
  () => import("../../components/Cannabis/Cannabissolution"),
  { loading: () => "loading..." },
);
const Cannabiscontainer = dynamic(
  () => import("../../components/Cannabis/Cannabiscontainer"),
  { loading: () => "loading..." },
);
const Cannabiscustomersection = dynamic(
  () => import("../../components/Cannabis/Cannabiscustomersection"),
  { loading: () => "loading..." },
);
const Cannabisadmin = dynamic(
  () => import("../../components/Cannabis/Cannabisadmin"),
  { loading: () => "loading..." },
);
const Cannabisdrive = dynamic(
  () => import("../../components/Cannabis/Cannabisdrive"),
  { loading: () => "loading..." },
);
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: () => "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: () => "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: () => "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: () => "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: () => "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: () => "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: () => "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: () => "loading..." },
);
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  loading: () => "loading...",
  ssr: false,
});

// ------------------Main page function-----------------
export default function Cannabis() {
  return (
    <>
      <Head>
        <title> Cannabis web App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Wondering if cannabis Web App development is the right decision 
        for your business? Learn about the many benefits of using a 
        cannabis web App development company such as VinCard."
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
        <Cannabiscontainer />
        <Cannabissolution />
        <Cannabisoverview />
        <Cannabiscustomersection />
        <Cannabisadmin />
        <Cannabisdrive />

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
