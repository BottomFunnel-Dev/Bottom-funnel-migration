import React, { useEffect } from "react";
import { SeoblogSection } from "../../CommonComponents/SeoBlogs/Seoblogs";
import Seostats from "../../SEO/Seo PPC/Seostats";
import SeoguestEnquiryNow from "../../Seoguest/SeoguestEnquiry";
import SeoguestSection from "../../Seoguest/SeoguestSection";
import StoriesSection from "../../StoriesSection/StoriesSection";
import Reviews from "../../SEO/SeoReviews/Reviews";
import Seoexperts from "../../SEO/Seo experts/Seoexperts";
import Seofaq from "../../SEO/SeoFaq/Seofaq";
import ContectForm from "../../ContectForm/ContectForm";

import SeoServices from "../../SEO/SeoServices/SeoServices";
import Trusted from "../../SEO/SeoTrustedCompanies/Seotrusted";
import { dmpagesLogo } from "../../Data/SeopartnerData";
import MainFooter from "../../CommonComponents/FooterSection/MainFooter";

const Seoguest = () => {
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
      {/* <MainFooter /> */}
    </div>
  );
};

export default Seoguest;
