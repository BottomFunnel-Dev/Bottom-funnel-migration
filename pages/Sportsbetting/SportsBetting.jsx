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
import { BettingSpecial } from "./BettingSpecial";
import { Bettingwhy } from "./Bettingwhy";
import { SportsBanner } from "./SportsBanner";
import { SportsPanels } from "./SportsPanels";
import { sportsBettingLogo } from "../../Data/SeopartnerData";
import { Helmet } from "react-helmet";

export const SportsBetting = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Sports betting app development company | Bottom Funnel</title>
        <meta
          name="description"
          content="Sports Betting App Development services to bring your game betting application idea to life. Look no further, contact Bottom Funnel today and get going."
        />
      </Helmet>
      <SportsBanner />
      <Trusted partnerLogo={sportsBettingLogo} />
      <SportsPanels />
      <BettingSpecial />
      <Bettingwhy />

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
