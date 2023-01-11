import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import ContectForm from "../ContectForm/ContectForm";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PlanProject from "../PlanProject/PlanProject";
import PortFolio from "../PortFolioSection/PortFolio";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import StoriesSection from "../StoriesSection/StoriesSection";
import TooDeliveryBanner from "./TooDeliveryBanner";
import { ToolDeliveryAdmin } from "./ToolDeliveryAdmin";

import ToolDeliveryCustomer from "./ToolDeliveryCustomer";
import ToolDeliveryDriver from "./ToolDeliveryDriver";
import ToolDeliveryFooter from "./ToolDeliveryFooter";
import ToolDeliveryLowerBanner from "./ToolDeliveryLowerBanner";
import ToolDeliveryService from "./ToolDeliveryService";
import ToolDeliverysneak from "./ToolDeliverysneak";
import { Helmet } from "react-helmet";

const ToolDelivery = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: false }));
  }, []);
  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>
          Tool Delivery App Development - App Developement | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Tool delivery app is a smart solution which makes your life as an entrepreneur much easier. It helps you deliver tools faster than ever before without any hassles or complications of any sort."
        />
      </Helmet>
      <TooDeliveryBanner />
      <ToolDeliveryService />
      <ToolDeliverysneak />
      <ToolDeliveryCustomer />
      <ToolDeliveryDriver />
      <ToolDeliveryAdmin />
      <ToolDeliveryLowerBanner />
      <ToolDeliveryFooter />

      <StoriesSection />
      <Industries />
      <PlanProject />
      <OndemandSection />
      <PortFolio />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};

export default ToolDelivery;
