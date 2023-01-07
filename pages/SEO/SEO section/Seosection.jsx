import React from "react";
import { SeoForm } from "../seoForm/SeoForm";
import "./Seosection.css";

function Seosection() {
  return (
    <div className="_SeoMain1">
      <div className="gifDenote">
        <img src="Images/seopages/1.gif" alt="" />
      </div>
      <div className="_Seoupperdiv">
        <div className="_Seotext">
          <div className="_Seoheading">Professional SEO Services Company</div>
                  <p className="_Seoparagraph">
            We are a team of SEOs and analysts who drive results through our
            know-how and hard work. We get the job done properly and
            efficiently, so that your online presence gets noticed. Whether it
            is a blog post or an e-commerce website, we make sure they reach
            their target audience online. 
          </p>
          <button className="_Seochkpricing">Check the pricing</button>
        </div>
        <SeoForm/>
      </div>
    </div>
  );
}

export default Seosection;
