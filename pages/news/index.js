import React from "react";
import Newspublish from "../../components/News/Newspublish";
import Newstrategy from "../../components/News/Newstrategy";
import { Newsintro } from "../../components/News/Newsintro";
import { Newspaper } from "../../components/News/Newspaper";
import { Newsfeature } from "../../components/News/Newsfeature";
import { newsLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";

import Head from "next/head";

export default function News() {
  return (
    <div>
      <Head>
        <title>News Web and App development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="A top news web app development company that can help you create a news web app that is both user-friendly and informative? 
          Read on to find out more about our team, services, and portfolio."
        />
      </Head>

      <main>
        <Newsintro />
        <Trusted partnerLogo={newsLogo} />
        <Newspaper />
        <Newsfeature />
        <Newspublish />
        <Newstrategy />
      </main>
    </div>
  );
}
