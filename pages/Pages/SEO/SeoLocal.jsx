import React, { useEffect } from "react";
import { ChnageNavbarColor } from "../../../Redux/Navbar/NavbarAction";
import { useDispatch } from "react-redux";
import Downloadratecard from "../../SEO/Downloadcard/Downloadratecard";
import Reviews from "../../SEO/SeoReviews/Reviews";
import { SeoblogSection } from "../../SeoBlogs/Seoblogs";
import SeoLocalAgency from "../../SeoLocalServices/SeoLocalAgency";
import SeoLocalblogs from "../../SeoLocalServices/SeoLocalblog";
import SeoLocalExperts from "../../SeoLocalServices/SeoLocalExperts";
import SeoLocalFaq from "../../SeoLocalServices/SeoLocalFaq";
import SeoLocalReviews from "../../SeoLocalServices/SeoLocalreviews";
import SeoLocalSection from "../../SeoLocalServices/SeoLocalSection";
import SeoLocalServices from "../../SeoLocalServices/SeoLocalServices";
import SeoLocalTrusted from "../../SeoLocalServices/SeoLocalTrustedCompanies";
import StoriesSection from "../../StoriesSection/StoriesSection";
import Seotrusted from "../../SEO/SeoTrustedCompanies/Seotrusted";
import Seoexperts from "../../SEO/Seo experts/Seoexperts";
import Seofaq from "../../SEO/SeoFaq/Seofaq";
import ContectForm from "../../ContectForm/ContectForm";
import MainFooter from "../../FooterSection/MainFooter";
import Seostats from "../../SEO/Seostats/Seostats";
import SeoServices from "../../SEO/SeoServices/SeoServices";
import Trusted from "../../SEO/SeoTrustedCompanies/Seotrusted";
import { dmpagesLogo } from "../../../Data/SeopartnerData";

const SeoLocal = () => {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({color: "black", logo: false}));
  }, []);
  return (
    <div>
      <SeoLocalSection />
      <Seostats />
      <Reviews />
      {/* <Seotrusted /> */}
      <Trusted partnerLogo= {dmpagesLogo}/>
      <SeoServices/>
      {/* <SeoLocalServices /> */}
      <StoriesSection />
      <Seoexperts />
      <Seofaq />
      <SeoblogSection />
      <ContectForm />
      <MainFooter />
    </div>
  );
};

export default SeoLocal;
