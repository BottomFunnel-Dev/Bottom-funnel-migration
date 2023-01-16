import React, { useEffect } from "react";
import Reviews from "../../SEO/SeoReviews/Reviews";
import Seostats from "../../SEO/Seostats/Seostats";
import SeoEmailSection from "../../SeoEmail/SeoEmailSection";
import Trusted from "../../SEO/SeoTrustedCompanies/Seotrusted";
import SeoEmailEnquiryNow from "../../SeoEmail/SeoEmailEnquiry";
import StoriesSection from "../../CommonComponents/StoriesSection/StoriesSection";
import SeoEmailExperts from "../../SeoEmail/SeoEmailExperts";
import SeoEmailFaq from "../../SeoEmail/SeoEmailFaq";
import { SeoblogSection } from "../../SeoBlogs/Seoblogs";
import MainFooter from "../../CommonComponents/FooterSection/MainFooter";
import SeoServices from "../../SEO/SeoServices/SeoServices";
import { dmpagesLogo } from "../../Data/SeopartnerData";
const SeoEmail = () => {
  return (
    <div>
      <SeoEmailSection />
      <Seostats />
      <Reviews />
      <Trusted partnerLogo={dmpagesLogo} />
      <SeoEmailEnquiryNow/>
      <SeoServices/>

      <StoriesSection/>
      <SeoEmailExperts/>
      <SeoEmailFaq/>
      <SeoblogSection/>
      {/* <MainFooter/> */}
    </div>
  );
};

export default SeoEmail;
