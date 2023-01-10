import React from "react";

import Datingcontainer from "./Datingcontainer";
import { datingLogo } from "../Data/SeopartnerData";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import Datingbrands from "./Datingbrands";
import Datingfeatures from "./Datingfeatures";

import {
  datingCustomer,
  logisticDrive,
  logisticAdmin,
} from "../Data/panelsData";

import Customerapp from "./Customerapp";
import Adminpannel from "./Adminpannel";
import Datingmobile from "./Datingmobile";
import Solutiondating from "./Solutiondating";
import Datingstart from "./Datingstart";
import DatingWhy from "./DatingWhy";

import StoriesSection from "../CommonComponents/StoriesSection/StoriesSection";
import { Industries } from "../CommonComponents/industries/Industries";
import PlanProject from "../CommonComponents/PlanProject/PlanProject";
import OndemandSection from "../CommonComponents/OnDemandSection/OndemandSection";
import PortFolio from "../CommonComponents/PortFolioSection/PortFolio";
import { SeoblogSection } from "../CommonComponents/SeoBlogs/Seoblogs";
import Revamping from "../CommonComponents/revamping/Revamping";
import { TextDropdown } from "../CommonComponents/faqSection/Faqs";
import ContectForm from "../CommonComponents/ContectForm/ContectForm";
import MainFooter from "../CommonComponents/FooterSection/MainFooter";

export default function Dating() {
  return (
    <div>
      <Datingcontainer />
      <Trusted partnerLogo={datingLogo} />
      <Datingbrands />
      <Datingfeatures />
      <Customerapp customerData={datingCustomer} />
      <Adminpannel customerData={datingCustomer} />
      <Datingmobile customerData={datingCustomer} />
      {/* <Solutiondating /> */}
      <Datingstart />
      <DatingWhy />

      <StoriesSection />
      <Industries />
      {/* <PlanProject /> */}
      <OndemandSection />
      {/* <PortFolio /> */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      {/* <MainFooter /> */}
    </div>
  );
}
