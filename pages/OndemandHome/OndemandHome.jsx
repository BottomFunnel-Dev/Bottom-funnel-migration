import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { Companystats } from "../CompanyStats/Companystats";
import ContectForm from "../ContectForm/ContectForm";
import { TextDropdown } from "../faqSection/Faqs";
import MainFooter from "../FooterSection/MainFooter";
import { Industries } from "../industries/Industries";
import ExclusiveFeature from "./ExclusiveFeature";
import HomeServices from "./HomeServices";
import KeyFeatures from "./KeyFeatures";
import OndemandHero from "./OndemandHero";
import OndemandQuote from "./OndemandQuote";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PlanProject from "../PlanProject/PlanProject";
import Portfolio from "../PortFolioSection/PortFolio";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import StoriesSection from "../StoriesSection/StoriesSection";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import { homesolutionsLogo } from "../../Data/SeopartnerData";
import { Helmet } from "react-helmet";

const OndemandHome = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>On-Demand Solutions app development | Bottom Funnel</title>
        <meta
          name="description"
          content="Boost your On-Demand Solutions business with Bottom Funnel's On-Demand Solutions app development services that offer intuitive software and app development solutions to clients around the globe"
        />
      </Helmet>
      <OndemandHero />
      <Trusted partnerLogo={homesolutionsLogo} />
      <OndemandQuote />
      <HomeServices />
      <ExclusiveFeature />
      <KeyFeatures />
      <StoriesSection />
      <Portfolio />
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

export default OndemandHome;
