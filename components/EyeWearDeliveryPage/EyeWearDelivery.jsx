import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import { EyeWearAccelerate } from "./EyeWearAccelerate";
import { EyeWearCustomerApp } from "./EyeWearCustomerApp";
import { EyeWearDeliveryAdmin } from "./EyeWearDeliveryAdmin";
import { EyeWearDeliveryBanner } from "./EyeWearDeliveryBanner";
import { EyeWearDeliveryDriverApp } from "./EyeWearDeliveryDriverApp";
import { EyeWearDevelopmentSolution } from "./EyeWearDevelopmentSolution";

// ----- Importing react components -----
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Helmet } from "react-helmet";

export const EyeWearDelivery = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Eyewear Deliver App | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for best android developers that can help you for making an application for your eyewear store. We are here for you."
        />
      </Helmet>
      <EyeWearDeliveryBanner />
      <EyeWearDevelopmentSolution />
      <EyeWearAccelerate />
      <EyeWearCustomerApp />
      <EyeWearDeliveryDriverApp />
      <EyeWearDeliveryAdmin />
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
