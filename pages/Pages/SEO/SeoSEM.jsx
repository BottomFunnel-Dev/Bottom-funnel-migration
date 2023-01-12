import React, { useEffect } from "react";
import Reviews from "../../SEO/SeoReviews/Reviews";
import { SeoblogSection } from "../../SeoBlogs/Seoblogs";
import SeoSEMAgency from "../../SeoSEM/SeoSEMAgency";
import SeoSEMblogs from "../../SeoSEM/SeoSEMblog";
import SeoSEMExperts from "../../SeoSEM/SeoSEMExperts";
import SeoSEMFaq from "../../SeoSEM/SeoSEMFaq";
import SeoSEMReviews from "../../SeoSEM/SeoSEMreviews";
import SeoSEMSection from "../../SeoSEM/SeoSEMSection";
import SeoSEMServices from "../../SeoSEM/SeoSEMServices";
import SeoSEMTrusted from "../../SeoSEM/SeoSEMTrustedCompanies";
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
      <MainFooter />
    </div>
  );
};

export default SeoSEM;
