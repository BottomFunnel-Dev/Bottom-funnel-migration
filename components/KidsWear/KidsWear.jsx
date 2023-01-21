import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { AppFeature } from "./AppFeature/AppFeature";
import { ChooseUs } from "./ChooseUs/ChooseUs";
import { ExclusiveFeature } from "./ExclusiveFeature/ExclusiveFeature";
import { KidsWearBanner } from "./KidsWearBanner/KidsWearBanner";

// ----- Other requried react components -----
import StoriesSection from "../StoriesSection/StoriesSection";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";
import Head from "next/head";

export const KidsWear = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>Baby & Kidswear app development | Bottom Funnel</title>
        <meta
          name="description"
          content="We offer web application development services that are tailored to your company's needs. We develop websites and help companies launch their digital products and services."
        />
      </Head>
      <main>
      <KidsWearBanner />
      <ExclusiveFeature />
      <AppFeature />
      <ChooseUs />
      {/* Other react required components */}
      <StoriesSection />
      <OndemandSection />
      <PortFolio />
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
      </main>
    </div>
  );
};
