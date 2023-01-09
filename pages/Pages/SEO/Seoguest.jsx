import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import { SeoblogSection } from "../../SeoBlogs/Seoblogs";
import Seostats from "../../Seo PPC/Seostats";
import SeoguestEnquiryNow from "../../Seoguest/SeoguestEnquiry";
import SeoguestSection from "../../Seoguest/SeoguestSection";
import StoriesSection from "../../StoriesSection/StoriesSection";
import Reviews from "../../SEO/SeoReviews/Reviews";
import Seoexperts from "../../SEO/Seo experts/Seoexperts";
import Seofaq from "../../SEO/SeoFaq/Seofaq";
import ContectForm from "../../ContectForm/ContectForm";
import MainFooter from "../../FooterSection/MainFooter";
import SeoServices from "../../SEO/SeoServices/SeoServices";
import Trusted from "../../SEO/SeoTrustedCompanies/Seotrusted";
import { dmpagesLogo } from "../../../Data/SeopartnerData";

const Seoguest = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  return (
    <div>
      <SeoguestSection />
      <Seostats />
      <Reviews />
      {/* <Seotrusted /> */}
      <Trusted partnerLogo={dmpagesLogo} />

      <SeoguestEnquiryNow />
      {/* <SeoguestServices /> */}
      <SeoServices />
      <StoriesSection />
      <Seoexperts />
      <Seofaq />
      <SeoblogSection />
      <ContectForm />
      <MainFooter />
    </div>
  );
};

export default Seoguest;
