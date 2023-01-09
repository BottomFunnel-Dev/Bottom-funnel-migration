import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import "./gameDevelopment.css";
import GameDevelopmentBanner from "./GameDevelopmentBanner";
import { GameDevelopmentFeature } from "./GameDevelopmentFeature";
import { GameMetaverce } from "./GameMetaverce";
import { GameWhyChoose } from "./GameWhyChoose";
import { MobileGameDevelopment } from "./MobileGameDevelopment";
import { ThreeDGameDevelopment } from "./ThreeDGameDevelopment";
import Web3Development from "./Web3Development";

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
import { Industries } from "../industries/Industries";

export const GameDevelopment = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);


  
  return (
    <div>
      <GameDevelopmentBanner />
      <div className="banner-bottom-space"></div>
      <GameDevelopmentFeature />
      <div className="banner-bottom-space"></div>
      <GameMetaverce />
      <div className="banner-bottom-space"></div>
      <ThreeDGameDevelopment />
      <div className="banner-bottom-space"></div>
      <MobileGameDevelopment />
      <div className="banner-bottom-space"></div>
      <Web3Development />
      <div className="banner-bottom-space"></div>
      <GameWhyChoose />

      {/* Other react required components */}
    
      <OndemandSection />
      <Industries />
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
