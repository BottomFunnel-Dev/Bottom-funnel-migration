import React from "react";
import Politicalparty from "../../components/Politics/Politicalparty";
import Politicaltool from "../../components/Politics/Politicaltool";
import Politicalvolunteer from "../../components/Politics/Politicalvolunteer";
import Politicscontainer from "../../components/Politics/Politicscontainer";
import Politicsmobile from "../../components/Politics/Politicsmobile";
import Politicsreliable from "../../components/Politics/Politicsreliable";
import Politictarget from "../../components/Politics/Politictarget";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";


export default function Politics() {
  return (
    <div>
      <Head>
        <title>Politics Web and App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a reliable and affordable politics web app 
          development company that can take on your project 
          wholeheartedly? Check out our website and see for 
          yourself how we can help!"
        />
      </Head>
      <main>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: true,
        }}
      />
      <Politicscontainer />
      <Politicalparty />
      <Politicsmobile />
      <Politicalvolunteer />
      <Politicaltool />
      <Politicsreliable />
      <Politictarget />

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
      </main>
    </div>
  );
}
