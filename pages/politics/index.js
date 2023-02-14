import React from "react";
import Politicalparty from "../../components/Politics/Politicalparty";
import Politicaltool from "../../components/Politics/Politicaltool";
import Politicalvolunteer from "../../components/Politics/Politicalvolunteer";
import Politicscontainer from "../../components/Politics/Politicscontainer";
import Politicsmobile from "../../components/Politics/Politicsmobile";
import Politicsreliable from "../../components/Politics/Politicsreliable";
import Politictarget from "../../components/Politics/Politictarget";

import Head from "next/head";

export default function Politics() {
  return (
    <div>
      <Head>
        <title>Politics Web and App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a reliable and affordable politics web app development company that can take on your project 
          wholeheartedly? Check out our website and see for yourself how we can help!"
        />
      </Head>

      <main>
        <Politicscontainer />
        <Politicalparty />
        <Politicsmobile />
        <Politicalvolunteer />
        <Politicaltool />
        <Politicsreliable />
        <Politictarget />
      </main>
    </div>
  );
}
