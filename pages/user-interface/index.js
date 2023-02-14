import React from "react";

// ----- React main sub components -----
import { UIDesingBanner } from "../../components/UIDesignPage/UIDesingBanner/UIDesingBanner";
import { UIDesignEmotions } from "../../components/UIDesignPage/UIDesignEmotions/UIDesignEmotions";
import { UIDesignWhyBF } from "../../components/UIDesignPage/UIDesignWhyBF/UIDesignWhyBF";
import { UIDesignMidBanner } from "../../components/UIDesignPage/UIDesignMidBanner/UIDesignMidBanner";

// ----- Other requried react components -----
import Head from "next/head";

export default function UIDesignPage() {
  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>User Interface Design | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for a reliable company that can help you with your 
          user interface design? Look no further than Bottom Funnel.
           We offer services in this field"
        />
      </Head>
      <main>
        <UIDesingBanner />
        <UIDesignEmotions />
        <UIDesignWhyBF />
        <UIDesignMidBanner />
      </main>
    </div>
  );
}
