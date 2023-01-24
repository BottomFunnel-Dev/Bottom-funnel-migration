import React from "react";
import { ProductsNewPageBanner } from '../../components/ProductsNewPage/ProductsNewPageBanner/ProductsNewPageBanner';
import { SimpleAndEasy } from "../../components/ProductsNewPage/SimpleAndEasy/SimpleAndEasy";
import { TalentProfiles } from "../../components/ProductsNewPage/TalentProfiles/TalentProfiles";
import { GetStarted } from "../../components/ProductsNewPage/GetStarted/GetStarted";
import { TalentNetwork } from "../../components/ProductsNewPage/TalentNetwork/TalentNetwork";
import { CustomerTrust } from "../../components/ProductsNewPage/CustomerTrust/CustomerTrust";
import MultipleProducts from "../../components/ProductsNewPage/MultipleProducts/MultipleProducts";
import { OurCommitment } from "../../components/ProductsNewPage/OurCommitment/OurCommitment";
import { ProductsFooter } from "../../components/ProductsNewPage/ProductsFooter/ProductsFooter";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import Navbar from "../../components/Navbar/Navbar";

export default function Products() {
  return (
    <div>
   <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <ProductsNewPageBanner />
      <MultipleProducts />
      <TalentNetwork />
      <SimpleAndEasy />
      <TalentProfiles />
      {/* <OurCommitment /> */}

      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />  */}
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <ProductsFooter/>
    </div>
  );
}
