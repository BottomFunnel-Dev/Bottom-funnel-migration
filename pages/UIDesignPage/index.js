import React from "react";


import styles from "./UIDesignPage.module.css"

// ----- React main sub components -----

import { UIDesingBanner } from "./UIDesingBanner/UIDesingBanner";
import { UIDesignEmotions } from "./UIDesignEmotions/UIDesignEmotions";
import { UIDesignWhyBF } from "./UIDesignWhyBF/UIDesignWhyBF";
import { UIDesignMidBanner } from "./UIDesignMidBanner/UIDesignMidBanner";

// ----- Other requried react components -----

export default function UIDesignPage  ()  {


  return (
    <div className={styles.UIDesignPagecontainer}>
    
      <UIDesingBanner />
      <UIDesignEmotions />
      <UIDesignWhyBF />
      <UIDesignMidBanner />
      {/* Other react required components */}

    </div>
  );
};
