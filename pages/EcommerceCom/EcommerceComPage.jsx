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
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import StoriesSection from "../StoriesSection/StoriesSection";
import { EcommerceBookCall } from "./EcommerceBookCall/EcommerceBookCall";
import { EcommerceComAdminPanel } from "./EcommerceComAdvance/EcommerceComAdminPanel";
import { EcommerceComCustomer } from "./EcommerceComAdvance/EcommerceComCustomer";
import { EcommerceComShopping } from "./EcommerceComAdvance/EcommerceComShopping";
import { EcommerceComBanner } from "./EcommerceComBanner/EcommerceComBanner";
import { EcommerceComFeatures } from "./EcommerceComFeturesSolutions/EcommerceComFeatures";
import { EcommerceComSolutions } from "./EcommerceComFeturesSolutions/EcommerceComSolutions";
import { EcommerceLogo } from "../../Data/SeopartnerData";



export const EcommerceComPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  
  return (
    <div>
      <EcommerceComBanner />
      <Trusted partnerLogo={EcommerceLogo}/>
      <EcommerceComFeatures />
      <EcommerceComCustomer />
      <EcommerceComAdminPanel />
      <EcommerceComShopping />
      <EcommerceBookCall />
      <EcommerceComSolutions />
      
      <StoriesSection />
      <PortFolio />
      <Industries />
      <PlanProject />
      <OndemandSection />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};
