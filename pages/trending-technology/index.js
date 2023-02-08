import React from "react";
import { TrendingTechnologyBanner } from "../../components/TrendingTechnology/TrendingTechnologyBanner";
import { TrendingTechnologyService } from "../../components/TrendingTechnology/TrendingTechnologyService";
import { TrendingTechnologyLowerBanner } from "../../components/TrendingTechnology/TrendingTechnologyLowerBanner";
import { TrendingWhyChoose } from "../../components/TrendingTechnology/TrendingWhyChoose";
import {TextDropdown} from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import {SeoblogSection} from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function TrendingTech () {
  return (
    <div>

      <Head>
        <title>Trending Technology Development  Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Get the latest on trending technology development 
          services with our comprehensive guide. Read on to
          know about the top trends in tech"
        />
      </Head>
    <main>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <TrendingTechnologyBanner />
      <TrendingTechnologyService />
      <TrendingTechnologyLowerBanner />
      <TrendingWhyChoose />

       {/* Other react required components  */}
       <StoriesSection/>
       <OndemandSection/> 
       {/* <PortFolio />  */}
       <PlanProject/>
       <SeoblogSection/>
       <Revamping/>
       <TextDropdown/>
       <ContectForm/>
       <MainFooter/>
    </main>
    </div>
  );
};

