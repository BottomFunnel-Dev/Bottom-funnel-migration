import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import Stories from "../../StoriesSection/StoriesSection";
import SeoPPCAgency from "../../Seo PPC/SeoPPCAgency";
import SeoPPCblogs from "../../Seo PPC/SeoPPCblog";
import SeoPPCExperts from "../../Seo PPC/SeoPPCExperts";
import SeoPPCFaq from "../../Seo PPC/SeoPPCFaq";
import SeoPPCReviews from "../../Seo PPC/SeoPPCreviews";
import SeoPPCSection from "../../Seo PPC/SeoPPCSection";
import SeoPPCServices from "../../Seo PPC/SeoPPCServices";
import SeoPPCTrusted from "../../Seo PPC/SeoPPCTrustedCompanies";
import StoriesSection from "../../StoriesSection/StoriesSection";
import Downloadratecard from "../../Seo PPC/Downloadratecard";
import Seostats from "../../Seo PPC/Seostats";
import { SeoblogSection } from "../../SeoBlogs/Seoblogs";
import Reviews from "../../SEO/SeoReviews/Reviews";
import Seotrusted from "../../SEO/SeoTrustedCompanies/Seotrusted";
import Seoexperts from "../../SEO/Seo experts/Seoexperts";
import Seofaq from "../../SEO/SeoFaq/Seofaq";
import ContectForm from "../../ContectForm/ContectForm";
import MainFooter from "../../FooterSection/MainFooter";
import SeoServices from "../../SEO/SeoServices/SeoServices";
import Trusted from "../../SEO/SeoTrustedCompanies/Seotrusted";
import { dmpagesLogo } from "../../../Data/SeopartnerData";

const SeoPPC = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  
  return (
    <div>
      <SeoPPCSection />
      <Seostats />
      <Reviews />
      {/* <Seotrusted /> */}
      <Trusted partnerLogo={dmpagesLogo} />
      {/* <SeoPPCServices /> */}
      <SeoServices/>
      <StoriesSection />
      <Seoexperts />
      <Seofaq />
      <SeoblogSection />
      <ContectForm />
      <MainFooter />
    </div>
  );
};

export default SeoPPC;
