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
import { AlcoholBanner } from "./AlcoholBanner/AlcoholBanner";
import { AlcoholBookCall } from "./AlcoholBookCall/AlcoholBookCall";
import "./AlcoholDeliveryPage.css";
import { AlcoholSolutions } from "./AlcoholSolutions/AlcoholSolutions";
import { AlcoholSuggestions } from "./AlcoholSuggestions/AlcoholSuggestions";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import { alcoholLogo } from "../../Data/SeopartnerData";


export const AlcoholDeliveryPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
      <AlcoholBanner />
      <Trusted partnerLogo={alcoholLogo} />
      <AlcoholBookCall />
      <AlcoholSuggestions />
      <AlcoholSolutions />
      <PortFolio />
      <StoriesSection />
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
