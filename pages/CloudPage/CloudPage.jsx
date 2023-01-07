import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./CloudPage.css";

// ----- React main page sub components ----
import { CloudBanner } from "./CloudBanner/CloudBanner";
import { CloudUnique } from "./CloudUnique/CloudUnique";
import { CloudStats } from "./CloudStats/CloudStats";
import { CloudOffers } from "./CloudOffers/CloudOffers";
import { CloudWorkWithUs } from "./CloudWorkWithUs/CloudWorkWithUs";
import { CloudSolutions } from "./CloudSolutions/CloudSolutions";
import { CloudWhyBF } from "./CloudWhyBF/CloudWhyBF";
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

export const CloudPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);

  return (
    <div className="CloudPage-Container">
      <CloudBanner />
      <CloudUnique />
      <CloudStats />
      <CloudOffers />
      <CloudWorkWithUs />
      <CloudSolutions />
      <CloudWhyBF />
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
