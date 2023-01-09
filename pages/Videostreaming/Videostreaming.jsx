import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import Videostreamingcontainer from "./Videostreamingcontainer";
import "./streamingcontainer.css";
import Services from "./Services";
import Grow from "./Grow";
import Featuressection from "./Featuressection";
import StoriesSection from "../StoriesSection/StoriesSection";
import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import { videostreamLogo } from "../../Data/SeopartnerData";
import { Helmet } from "react-helmet";

export default function Videostreaming() {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "white", logo: true }));
  }, []);
  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>Videos streaming app development | Bottom Funnel</title>
      </Helmet>
      <Videostreamingcontainer />
      <Trusted partnerLogo={videostreamLogo} />
      <Services />
      <Grow />
      <Featuressection />
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
