import React from "react";

import { CryptoCurrencyBanner } from "./CryptoCurrencyBanner";
import { CryptoCurrencyWork } from "./CryptoCurrencyWork";
import { CryptoCurrencyServices } from "./CryptoCurrencyServices";
import CryptoMining from "./CryptoMining";
import { CryptoAdminpannel } from "./CryptoAdminpannel";
import { CryptoLowerBanner } from "./CryptoLowerBanner";
import { CryptoWhyChoose } from "./CryptoWhyChoose";

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

export default function CryptoCurrrency() {
  return (
    <div>
      <CryptoCurrencyBanner />
      <CryptoCurrencyWork />
      <CryptoCurrencyServices />
      <CryptoMining />
      <CryptoAdminpannel />
      <CryptoLowerBanner />
      <CryptoWhyChoose />

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
