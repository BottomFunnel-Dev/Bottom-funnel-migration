import React from "react";
import dropdown from "./dropdownResp.module.css";

import WhoWeAre from "../WhoWeAre";
import NavServices from "../NavServices";
import NavIndustries from "../NavIndustries";
import Products from "../Products";
import Industries from "../Industries";
import Resource from "../Resource";

export default function DropdownResp({ hoverhandle, scroll, productMount }) {
  return (
    <div className={dropdown.dropdown_css}>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              About
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <WhoWeAre
                homeHoverIn={hoverhandle}
                homeHoverOut={hoverhandle}
                scroll={scroll}
                productMount={productMount}
              />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Services
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <NavServices
                serHoverIn={hoverhandle}
                serHoverOut={hoverhandle}
                scroll={scroll}
                productMount={productMount}
              />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Solutions
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <NavIndustries
                solHoverIn={hoverhandle}
                solHoverOut={hoverhandle}
                scroll={scroll}
                productMount={productMount}
              />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Industries
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <Industries
                solHoverIn={hoverhandle}
                solHoverOut={hoverhandle}
                scroll={scroll}
                productMount={productMount}
              />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Resources
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <Resource
                solHoverIn={hoverhandle}
                solHoverOut={hoverhandle}
                scroll={scroll}
                productMount={productMount}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={dropdown.otherNav}>
        <div>WORK</div>

        <button className={dropdown.ProductPageRouteButton}> Products </button>
        <button> Hire A Talent </button>
        <button> Apply as a Talent </button>
      </div>
    </div>
  );
}
