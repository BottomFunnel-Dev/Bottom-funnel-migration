import React from "react";

// ----- React main sub componients -----
import { UXDesignEmotions } from "../../components/UXDesignPage/UXDesignEmotions/UXDesignEmotions";
import { UXDesignMidBanner } from "../../components/UXDesignPage/UXDesignMidBanner/UXDesignMidBanner";
import { UXDesignServices } from "../../components/UXDesignPage/UXDesignServices/UXDesignServices";
import { UXDesingBanner } from "../../components/UXDesignPage/UXDesingBanner/UXDesingBanner";
import { UXDesignWhyBF } from "../../components/UXDesignPage/UXDesignWhyBF/UXDesignWhyBF";

import Head from "next/head";

export default function UXDesignPage() {
  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>User Experience Review | Bottom Funnel</title>
        <meta
          name="description"
          content="Want to write a killer User Experience Review? Our guide
          covers everything from preparencies needed for an 
         effective writingschedule to how to present your findings"
        />
      </Head>
      <main>
        <UXDesingBanner />
        <UXDesignEmotions />
        <UXDesignServices />
        <UXDesignWhyBF />
        <UXDesignMidBanner />
      </main>
    </div>
  );
}
