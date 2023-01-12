import React, { useEffect } from "react";
import Reviews from "../../SEO/SeoReviews/Reviews";
import StoriesSection from "../../CommonComponents/StoriesSection/StoriesSection";
import ContectForm from "../../CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../CommonComponents/FooterSection/MainFooter";
import Seostats from "../../SEO/Seostats/Seostats";
import SeoServices from "../../SEO/SeoServices/SeoServices";
import Trusted from "../../SEO/SeoTrustedCompanies/Seotrusted";
import { dmpagesLogo } from "../../Data/SeopartnerData";

import { SeoblogSection } from "../../CommonComponents/SeoBlogs/Seoblogs";
import { Seofaq } from "../../SEO/SeoFaq/Seofaq";
import { Seoexperts } from "../../SEO/Seo experts/Seoexperts";
// import SeoSEMSection from "../../SeoSEM/SeoSEMSection";
import SeoSEMSection from "../../SeoSEM/SeoSEMSection";

const SeoSEM = () => {

  return (
    <div>
      <SeoSEMSection />
      <Seostats />
      <Reviews />
      {/* <Seotrusted /> */}
      <Trusted partnerLogo={dmpagesLogo} />
      {/* <SeoSEMServices /> */}
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

export default SeoSEM;
