import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const AiContentBanner = dynamic(
  () => import("../../components/AiContentService/AiContentBanner"),
  { loading: () => "loading..." },
);
const AiContentHuman = dynamic(
  () => import("../../components/AiContentService/AiContentHuman"),
  { loading: () => "loading..." },
);
const AiHowDoesWorks = dynamic(
  () => import("../../components/AiContentService/AiHowDoesWorks"),
  { loading: () => "loading..." },
);
const AIContentApplication = dynamic(
  () => import("../../components/AiContentService/AIContentApplication"),
  { loading: () => "loading..." },
);
const AiContentTextOnly = dynamic(
  () => import("../../components/AiContentService/AiContentTextOnly"),
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

export default function index() {
  return (
    <div>
      <Head>
        <title>Artificial Intelligence Services | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking to invest in artificial intelligence services? 
          Check out our comprehensive guide on the top AI 
          offerings and where to invest!"
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
        <AiContentBanner />
        {/*   <AiContentHuman /> 
       <AiHowDoesWorks />
         <AIContentApplication />*/}
        <AiContentTextOnly />

        {/* Other react required components   */}
        <StoriesSection />
        <OndemandSection />
        {/* <PortFolio />   */}
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
