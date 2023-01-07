import React from "react";
import Newspublish from "./Newspublish";
import Newstrategy from "./Newstrategy";
import { Newsintro } from "./Newsintro";
import { Newspaper } from "./Newspaper";
import { Newsfeature } from "./Newsfeature";
import { newsLogo } from "../../Data/SeopartnerData";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";

export default function News () {


  return (
    <div>
  
    
      <Newsintro />
      <Trusted partnerLogo={newsLogo} />
      <Newspaper />
      <Newsfeature />
      <Newspublish />
      <Newstrategy />
     
    </div>
  );
}
