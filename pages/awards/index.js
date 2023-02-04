import React from "react";

import { AwardsBanner } from "../../components/AwardsPage/AwardsBanner/AwardsBanner";
import { AwardsSection } from "../../components/AwardsPage/AwardsSection/AwardsSection";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function Awards  () {
  return (
    <div>

      <Head>
        <title>Awards | Bottom Funnel</title>
        <meta
          name="description"
          content="Get the latest information on awards for companies and 
          individuals by visiting our website. We cover a wide range 
          of categories, from small businesses to multinationals."
        />
      </Head>
      <main>

      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
      <AwardsBanner />
      <AwardsSection />

      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />  */}
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />

      </main>
    </div>
  );
};
