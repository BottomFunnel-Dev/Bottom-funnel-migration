import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const NFTDevBanner = dynamic(
  () => import("../../components/NFTpage/NFTDevBanner/NFTDevBanner"),
  { loading: () => "loading..." },
);
const NFTAboutIt = dynamic(
  () => import("../../components/NFTpage/NFTAboutIt/NFTAboutIt"),
  { loading: () => "loading..." },
);
const NFTOffers = dynamic(
  () => import("../../components/NFTpage/NFTOffers/NFTOffers"),
  { loading: () => "loading..." },
);
const NFTSolutions = dynamic(
  () => import("../../components/NFTpage/NFTSolutions/NFTSolutions"),
  { loading: () => "loading..." },
);
const NFTMidBanner = dynamic(
  () => import("../../components/NFTpage/NFTMidBanner/NFTMidBanner"),
  { loading: () => "loading..." },
);
const NFTWhyBF = dynamic(
  () => import("../../components/NFTpage/NFTWhyBF/NFTWhyBF"),
  { loading: () => "loading..." },
);
const CustomWebForm = dynamic(
  () =>
    import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
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

export default function NFTDevelopment() {
  return (
    <div>
      <Head>
        <title>NFT Development Service Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for reliable NFT development services? 
          Our team has extensive experience in this area 
          and offers cutting-edge solutions. Read on to know 
          about our services"
        />
      </Head>
      <main>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "white",
            logo: true,
          }}
        />
        <NFTDevBanner />
        <NFTAboutIt />
        <NFTOffers />
        <NFTSolutions />
        <NFTMidBanner />
        <NFTWhyBF />
        <CustomWebForm />

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
    </div>
  );
}
