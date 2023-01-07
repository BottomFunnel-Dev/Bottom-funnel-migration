import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./BIPages.css";

// ----- React main Components of this page ------

import { BIAnalytics } from "./BIAnalytics/BIAnalytics";
import { BIBanner } from "./BIBanner/BIBanner";
import { BIPartner } from "./BIPartner/BIPartner";
import { BISlider } from "./BISlider/BISlider";
import { BISolutions } from "./BISolutions/BISolutions";
import { BIWhyBF } from "./BIWhyBF/BIWhyBF";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";

// ----- Other required react components -----

import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";

export const BIPages = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div className="BIPages-container">
      <BIBanner />
      <BIPartner />
      <BISolutions />
      <BIWhyBF />
      <BIAnalytics />
      <BISlider />
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
