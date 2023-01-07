import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./EnterpriseWebPage.css";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";

// ----- Enterprise page main sub components -----

import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";
import { EnterpriseMidBanner } from "./EnterpriseMidBanner/EnterpriseMidBanner";
import { EnterpriseSlider } from "./EnterpriseSlider/EnterpriseSlider";
import { EnterpriseSupporting } from "./EnterpriseSupporting/EnterpriseSupporting";
import { EnterpriseWebAnalysis } from "./EnterpriseWebAnalysis/EnterpriseWebAnalysis";
import { EnterpriseWebBanner } from "./EnterpriseWebBanner/EnterpriseWebBanner";
import { EnterpriseWebSolutions } from "./EnterpriseWebSolutions/EnterpriseWebSolutions";
import { EnterpriseWhyBF } from "./EnterpriseWhyBF/EnterpriseWhyBF";
import { Helmet } from "react-helmet";

export const EnterpriseWebPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>Enterprise Solutions | Bottom Funnel</title>
        <meta
          name="description"
          content="Enterprise Web Services (EWS) is a system of reference that enables enterprises to scale their applications, access commonly shared source data in real-time and highly available architecture. The goal of EWS is to enable enterprises to access commonly required source data and make them more productive with it."
        />
      </Helmet>
      <EnterpriseWebBanner />
      <EnterpriseWebAnalysis />
      <EnterpriseSupporting />
      <EnterpriseWebSolutions />
      <EnterpriseMidBanner />
      <EnterpriseWhyBF />
      <EnterpriseSlider />
      <CustomWebForm />
      {/* ----- End of main page. Now Further components ----- */}
      <Industries />
      <OndemandSection />
      <PortFolio />
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <MainFooter />
    </div>
  );
};
