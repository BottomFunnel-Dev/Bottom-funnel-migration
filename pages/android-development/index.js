import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// ---------------importing components with lazy loading-----------------------
const AndriodBanner = dynamic(
  () =>
    import(
      "../../components/AndriodAppDevelopment/AndriodBanner/AndriodBanner"
    ),
  { loading: () => "loading..." },
);
const AndriodBottomFunnel = dynamic(
  () =>
    import(
      "../../components/AndriodAppDevelopment/AndriodBottomFunnel/AndriodBottomFunnel"
    ),
  { loading: () => "loading..." },
);
const AndriodCustomDevelopment = dynamic(
  () =>
    import(
      "../../components/AndriodAppDevelopment/AndriodCustomDevelopment/AndriodCustomDevelopment"
    ),
  { loading: () => "loading..." },
);
const AndriodServices = dynamic(
  () =>
    import(
      "../../components/AndriodAppDevelopment/AndriodServices/AndriodServices"
    ),
  { loading: () => "loading..." },
);
const AndriodUserCentric = dynamic(
  () =>
    import(
      "../../components/AndriodAppDevelopment/AndriodUserCentric/AndriodUserCentric"
    ),
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
export default function AndroidAppDevelopment() {
  return (
    <>
      <Head>
        <title>
          Best android app development services company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Get started with Android app development and create innovative, top-quality apps for mobile devices. Our comprehensive guide covers every aspect of developing for Android"
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
        <AndriodBanner />
        <AndriodServices />
        <AndriodCustomDevelopment />
        <AndriodUserCentric />
        <AndriodBottomFunnel />

        {/* Other react required components  */}
        <StoriesSection />
        <OndemandSection />
        {/* <PortFolio />  */}
        <PlanProject />
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </>
  );
}
