import React from "react";
import { beautyLogo } from "../../components/Data/SeopartnerData";



import dynamic from "next/dynamic";



const Beautycontainer = dynamic(
  () => import("../../components/Beautyandcare/Beautycontainer"),
  { loading: "loading..." },
);
const Trusted = dynamic(
  () => import("../../components/SEO/SeoTrustedCompanies/Seotrusted"),
  { loading: "loading..." },
);
const Diversesection = dynamic(
  () => import("../../components/Beautyandcare/Diversesection"),
  { loading: "loading..." },
);
const Disscus = dynamic(
  () => import("../../components/Beautyandcare/Disscus"),
  { loading: "loading..." },
);
const Feature = dynamic(
  () => import("../../components/Beautyandcare/Feature"),
  { loading: "loading..." },
);
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

export default function BeautyandCare() {
  return (
    <>
      <Head>
        <title>
          Beauty and Salon Web App Developmen Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="When it comes to online beauty and salon services, our team of 
        experts know just what you need! We will help you develop a web 
        app that provides an excellent user experience, is easy to use, 
        and meets all your business requirements. Contact us today to 
        learn more!"
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
        <Beautycontainer />
        <Trusted partnerLogo={beautyLogo} />
        <Diversesection />
        <Disscus />
        <Feature />

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
