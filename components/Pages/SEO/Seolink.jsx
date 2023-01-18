import React, { useEffect } from "react";
import Getintouchcard from "../../SeoLink/Getintouch";
import Seostats from "../../SEO/Seostats/Seostats";
import SeoLinkEnquiryNow from "../../SeoLink/SeoLinkEnquiry";
import SeoLinkSection from "../../SeoLink/SeoLinkSection";
import StoriesSection from "../../CommonComponents/StoriesSection/StoriesSection";
import { SeoblogSection } from "../../SeoBlogs/Seoblogs";
import Reviews from "../../SEO/SeoReviews/Reviews";
import Seoexperts from "../../SEO/Seo experts/Seoexperts";
import Seofaq from "../../SEO/SeoFaq/Seofaq";
import ContectForm from "../../ContectForm/ContectForm";
import SeoServices from "../../SEO/SeoServices/SeoServices";
import Trusted from "../../SEO/SeoTrustedCompanies/Seotrusted";
import { dmpagesLogo } from "../../Data/SeopartnerData";

export default function Seolink() {
  return (
    <div>
      <SeoLinkSection />
      <Seostats />
      <Reviews />
      {/* <Seotrusted /> */}
      <Trusted partnerLogo={dmpagesLogo} />
      <SeoLinkEnquiryNow />
      {/* <SeoLinkServices /> */}
      <SeoServices/>
      <StoriesSection />
      <Getintouchcard />
      <Seoexperts />
      <Seofaq />
      <SeoblogSection />
      <ContectForm />
      {/* <MainFooter /> */}
    </div>
  );
}
