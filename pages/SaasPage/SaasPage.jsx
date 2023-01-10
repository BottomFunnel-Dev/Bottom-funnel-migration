import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import { Saasbanner } from "./Saasbanner/Saasbanner";
import { SaasExpetise } from "./SaasExpetise/SaasExpetise";
import "./SaasPage.css";
import { SaasStrategy } from "./SaasStrategy/SaasStrategy";
import { SaasSuite } from "./SaasSuite/SaasSuite";
import { SaasValuable } from "./SaasValuable/SaasValuable";

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
import { Helmet } from "react-helmet";

export const SaasPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>
          Best Python Development Company | Hire Python Developer | Bottom
          Funnel
        </title>
        <meta
          name="description"
          content="Bottom Funnel is one of the most affordable python development company. Hire our dedicated python developers for your web and app development."
        />
      </Helmet>
      <Saasbanner />
      <SaasExpetise />
      <SaasSuite />
      <SaasValuable />
      <SaasStrategy />
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
    </div>
  );
};
