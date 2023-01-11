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
import Maketplacefooter from "./Maketplacefooter";
import MarketPlaceAdmin from "./MarketPlaceAdmin";
import { MarketplaceBanner } from "./MarketplaceBanner";
import Marketplaceborder from "./Marketplaceborder";
import MarketPlaceClients from "./MarketPlaceClients";

import MarketplaceFreelancer from "./MarketplaceFreelancer";

import { Helmet } from "react-helmet";

export const Marketplace = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>Marketplace app development | Bottom Funnel</title>
        <meta
          name="description"
          content="Boost your Marketplace business with Bottom Funnel's Marketplace app development services that offer intuitive software and app development solutions to clients around the globe"
        />
      </Helmet>
      <MarketplaceBanner />
      <MarketplaceFreelancer />
      <MarketPlaceAdmin />
      <MarketPlaceClients />
      <Marketplaceborder />
      <Maketplacefooter />

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
