import React from "react";
import { FinTechSolutionBanner } from "../../components/FintexhSolution/FinTechSolutionBanner";
import { FintechExclusive } from "../../components/FintexhSolution/FintechExclusive";
import { FintechCustomerApp } from "../../components/FintexhSolution/FintechCustomerApp";
import { FintechAdminpannel } from "../../components/FintexhSolution/FintechAdminpannel";
import { FintechDriverApp } from "../../components/FintexhSolution/FintechDriverApp";
import { FintechWhyChooseUs } from "../../components/FintexhSolution/FintechWhyChooseUs";

import Head from "next/head";

export default function FintechSolutions() {
  return (
    <div>
      <Head>
        <title>
          {" "}
          Fintech Solution App Development Company | Bottom Funnel{" "}
        </title>

        <meta
          name="description"
          content="Are you in need of a Fintech Solution that can improve the 
          performance of your business? We here at our development
           company specialize in developing such solutions. So, if 
          you're looking for a top-notch Fintech Solution, reach out 
          to us today!"
        />
      </Head>
      <main>
        <FinTechSolutionBanner />
        <FintechExclusive />
        <FintechCustomerApp />
         <FintechAdminpannel />
       <FintechDriverApp />
       <FintechWhyChooseUs /> 
      </main>
    </div>
  );
}
