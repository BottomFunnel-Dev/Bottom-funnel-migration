import React from "react";


import styles from "./UXDesignPage.module.css";

// ----- React main sub componients -----

import { UXDesignEmotions } from "./UXDesignEmotions/UXDesignEmotions";
import { UXDesignMidBanner } from "./UXDesignMidBanner/UXDesignMidBanner";
import { UXDesignServices } from "./UXDesignServices/UXDesignServices";
import { UXDesingBanner } from "./UXDesingBanner/UXDesingBanner";
import { UXDesignWhyBF } from "./UXDesignWhyBF/UXDesignWhyBF";



export default function UXDesignPage  ()  {


  return (
    <div className={styles.UXDesignPagecontainer}>
  
      <UXDesingBanner />
      <UXDesignEmotions />
      <UXDesignServices />
      <UXDesignWhyBF />
      <UXDesignMidBanner />

    </div>
  );
};
