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
import Pharmacyadmin from "./Pharmacyadmin";
import Pharmacycontainer from "./Pharmacycontainer";
import Pharmacycustomer from "./Pharmacycustomer";
import Pharmacydelivery from "./Pharmacydelivery";
import Pharmacydrive from "./Pharmacydrive";
import Pharmacysneak from "./Pharmacysneak";
import { pharmacyLogo } from "../../Data/SeopartnerData";
import { Helmet } from "react-helmet";
export default function Pharmacy() {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>Pharmacy app development | Bottom Funnel</title>
        <meta
          name="description"
          content="Boost your Pharmacy business with Bottom Funnel's Pharmacy app development services that offer intuitive software and app development solutions to clients around the globe"
        />
      </Helmet>
      <Pharmacycontainer />
      <Trusted partnerLogo={pharmacyLogo} />
      <Pharmacydelivery />
      <Pharmacysneak />
      <Pharmacycustomer />
      <Pharmacydrive />
      <Pharmacyadmin />

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
