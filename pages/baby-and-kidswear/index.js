import React from "react";
import dynamic from "next/dynamic";

const KidsWearBanner = dynamic(
  () => import("../../components/KidsWear/KidsWearBanner/KidsWearBanner"),
  { loading: "Loading..." }
);

const ExclusiveFeature = dynamic(
  () => import("../../components/KidsWear/ExclusiveFeature/ExclusiveFeature"),
  { loading: "Loading..." }
);

const AppFeature = dynamic(
  () => import("../../components/KidsWear/AppFeature/AppFeature"),
  { loading: "Loading..." }
);

const ChooseUs = dynamic(
  () => import("../../components/KidsWear/ChooseUs/ChooseUs"),
  { loading: "Loading..." }
);

const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "Loading..." }
);

const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "Loading..." }
);

const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "Loading..." }
);

const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "Loading..." }
);

const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "Loading..." }
);

const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "Loading..." }
);

const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "Loading..." }
);

const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "Loading..." }
);

import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function Kidswear() {
  return (
    <div>
      <Head>
        <title>
          Baby and Kids Wear Web App Development Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="You've come to the right place if you're looking for Baby and 
          Kids Wear Web App solutions that will make your life easier.
          We offer a wide range of services that will cater to all your 
          needs as a parent or caregiver. Check us out today!"
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

        <KidsWearBanner />
        <ExclusiveFeature />
        <AppFeature />
        {/* <ChooseUs /> */}
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
