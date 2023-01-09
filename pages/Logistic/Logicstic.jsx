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
import Logiccustomer from "./Logiccustomer";
import Logicdrive from "./Logicdrive";
import Logictransport from "./Logictransport";
import Logisticadmin from "./Logisticadmin";
import Logisticcontainer from "./Logisticcontainer";
import Logisticwhy from "./Logisticwhy";

import {
  logisticsCustomer,
  logisticDrive,
  logisticAdmin,
} from "../../Data/panelsData";

import {
  salesmountNavbar,
  salesunmountNavbar,
} from "../../Redux/ProductNavbar/ProductNavAction";

import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import { logisticsLogo } from "../../Data/SeopartnerData";
import { Helmet } from "react-helmet";
export default function Logicstic() {
  
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false, }));
    dispatch(salesmountNavbar());
    return () => {
      dispatch(salesunmountNavbar())
    };
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>Logistics app development | Bottom Funnel</title>
        <meta
          name="description"
          content="Boost your logistics business with Bottom Funnel's logistics app development services that offer intuitive software and app development solutions to clients around the globe"
        />
      </Helmet>
      <Logisticcontainer />
      <Trusted partnerLogo={logisticsLogo} />
      <Logictransport />
      <Logisticwhy />
      <Logiccustomer customerData={logisticsCustomer} />
      <Logicdrive driveData={logisticDrive} />
      <Logisticadmin adminData={logisticAdmin} />

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
}
