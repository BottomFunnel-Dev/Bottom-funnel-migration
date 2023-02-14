import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar/Navbar"), {
  loading: () => "loading...",
  ssr: false,
});
const About = dynamic(() => import("../components/AboutSection/About"), {
  loading: () => "Loading...",
});
const Awards = dynamic(() => import("../components/AwardSection/Awards"), {
  loading: () => "Loading...",
});
const TextDropdown = dynamic(
  () => import("../components/CommonComponents/faqSection/Faqs"),
  { loading: () => "Loading..." },
);
const MainFooter = dynamic(
  () => import("../components/CommonComponents/FooterSection/MainFooter"),
  { loading: () => "Loading..." },
);
const Services = dynamic(() => import("../components/Services/Services"), {
  loading: () => "Loading...",
});
const OndemandSection = dynamic(
  () =>
    import("../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: () => "Loading..." },
);
const PlanProject = dynamic(
  () => import("../components/CommonComponents/PlanProject/PlanProject"),
  { loading: () => "Loading..." },
);
const PortFolio = dynamic(
  () => import("../components/CommonComponents/PortFolioSection/PortFolio"),
  { loading: () => "Loading..." },
);
const Revamping = dynamic(
  () => import("../components/CommonComponents/revamping/Revamping"),
  { loading: () => "Loading..." },
);
const SeoblogSection = dynamic(
  () => import("../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: () => "Loading..." },
);
const StoriesSection = dynamic(
  () => import("../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: () => "Loading..." },
);
const CompanyLogo = dynamic(
  () => import("../components/CompanyLogos/CompanyLogo"),
  { loading: () => "Loading..." },
);
const Companystats = dynamic(
  () => import("../components/CompanyStats/Companystats"),
  { loading: () => "Loading..." },
);
const ContectForm = dynamic(
  () => import("../components/ContectForm/ContectForm"),
  { loading: () => "Loading..." },
);
const BannerFull = dynamic(
  () => import("../components/mainSection/BannerFull"),
  {
    loading: () => "Loading...",
  },
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Bottom Funnel Global Web and App Development Company | Digital
          Transformation Service
        </title>
        <meta
          name="description"
          content="Bottom Funnel makes ridiculously easy-to-use marketing, sales, support and IT solutions"
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

        <BannerFull />
        <CompanyLogo />
        <About />
        <Services />
        <Awards />
        <StoriesSection />
        <OndemandSection />
        <PortFolio />
        <PlanProject />
        <Companystats />
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </div>
  );
}
