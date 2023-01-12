import React, { useEffect } from "react";
// import SeoPPCSection from "../../SEO/Seo PPC/SeoPPCSection";
import SeoPPCSection from "../../SEO/Seostats/Seostats";
import StoriesSection from "../../CommonComponents/StoriesSection/StoriesSection";
// import Seostats from "../../Seo PPC/Seostats";
import Reviews from "../../SEO/SeoReviews/Reviews";
import ContectForm from "../../ContectForm/ContectForm";
import SeoServices from "../../SEO/SeoServices/SeoServices";
import Trusted from "../../SEO/SeoTrustedCompanies/Seotrusted";
import { dmpagesLogo } from "../../Data/SeopartnerData";

import { SeoblogSection } from "../../CommonComponents/SeoBlogs/Seoblogs";
import { Seofaq } from "../../SEO/SeoFaq/Seofaq";
import { Seoexperts } from "../../SEO/Seo experts/Seoexperts";
const SeoPPC = () => {
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
      {/* <MainFooter /> */}
    </div>
  );
};

export default SeoPPC;
