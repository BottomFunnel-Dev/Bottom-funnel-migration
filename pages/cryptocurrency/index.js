import React from "react";

import { CryptoCurrencyBanner } from "../../components/CryptoCurrency/CryptoCurrencyBanner";
import { CryptoCurrencyWork } from "../../components/CryptoCurrency/CryptoCurrencyWork";
import { CryptoCurrencyServices } from "../../components/CryptoCurrency/CryptoCurrencyServices";
import CryptoMining from "../../components/CryptoCurrency/CryptoMining";
import { CryptoAdminpannel } from "../../components/CryptoCurrency/CryptoAdminpannel";
import { CryptoLowerBanner } from "../../components/CryptoCurrency/CryptoLowerBanner";
import { CryptoWhyChoose } from "../../components/CryptoCurrency/CryptoWhyChoose";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";

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
      {/* <Industries /> */}
      <PlanProject />
      <OndemandSection />
      {/* <PortFolio /> */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
