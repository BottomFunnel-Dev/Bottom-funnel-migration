import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";

import { Industries } from "../industries/Industries";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import Revamping from "../revamping/Revamping";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";
import { Helmet } from "react-helmet";

import { CareerBanner } from "./CareerBanner/CareerBanner";
import { CareerMain } from "./CareerMain/CareerMain";
import "./CareerPage.css";
import { CareerReferral } from "./CareerReferral/CareerReferral";
import { CarrerMidBanner } from "./CarrerMidBanner/CarrerMidBanner";

export const CareerPage = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div style={{ color: "#393939" }}>
      <Helmet>
        <title>Job Openings Career Opportunities at Bottom Funnel</title>
        <meta
          name="description"
          content="Find all the job opportunities here join one of the best mobile app development company get excellent opportunities to achieve higher goals."
        />
      </Helmet>
      <CareerBanner />
      <CareerMain />
      <CareerReferral />
      <CarrerMidBanner />
      {/* ----- End of main page. Now Further components ----- */}
      <Industries />
      <OndemandSection />
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
