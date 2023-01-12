import React, { useEffect } from "react";
import Reviews from "../../SEO/SeoReviews/Reviews";
import { SeoblogSection } from "../../SeoBlogs/Seoblogs";
import SeoLocalSection from "../../SeoLocalServices/SeoLocalSection";
import StoriesSection from "../../CommonComponents/StoriesSection/StoriesSection";
import Seoexperts from "../../SEO/Seo experts/Seoexperts";
import Seofaq from "../../SEO/SeoFaq/Seofaq";
import ContectForm from "../../ContectForm/ContectForm";
import MainFooter from "../../CommonComponents/FooterSection/MainFooter";
import Seostats from "../../SEO/Seostats/Seostats";
import SeoServices from "../../SEO/SeoServices/SeoServices";
import Trusted from "../../SEO/SeoTrustedCompanies/Seotrusted";
import { dmpagesLogo } from "../../Data/SeopartnerData";

const SeoLocal = () => {
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
