import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { WhoWeAre } from "../WhoWeAre";
import { NavServices } from "../NavServices";
import { RiArrowDropDownLine } from "react-icons/ri";

import dropdown from "./dropdownResp.module.css";
import { NavIndustries } from "../NavIndustries";
import { Products } from "../Products";
import { Industries } from "../Industries";
export default function DropdownResp({
  homeHoverIn,
  homeHoverOut,
  serHoverIn,
  serHoverOut,
  solHoverIn,
  solHoverOut,
  indusHoverIn,
  indusHoverOut,
  scroll,
  productMount,
}) {
  return (
    <div className={dropdown.dropdown_css}>
      <Accordion>
        <AccordionSummary
          expandIcon={<RiArrowDropDownLine fontSize={"30px"} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>About</Typography>
        </AccordionSummary>
        <AccordionDetails className={dropdown.accord}>
          <WhoWeAre
            homeHoverIn={homeHoverIn}
            homeHoverOut={homeHoverOut}
            scroll={scroll}
            productMount={productMount}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<RiArrowDropDownLine fontSize={"30px"} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <NavServices
            serHoverIn={serHoverIn}
            serHoverOut={serHoverOut}
            scroll={scroll}
            productMount={productMount}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<RiArrowDropDownLine fontSize={"30px"} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Solutions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <NavIndustries
              solHoverIn={solHoverIn}
              solHoverOut={solHoverOut}
              scroll={scroll}
              productMount={productMount}
            />
          </AccordionDetails>
        </Accordion>

        <AccordionSummary
          expandIcon={<RiArrowDropDownLine fontSize={"30px"} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> Industries </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Industries
            indusHoverIn={indusHoverIn}
            indusHoverOut={indusHoverOut}
            scroll={scroll}
            productMount={productMount}
          />
        </AccordionDetails>
      </Accordion>

      {/* <Accordion>
        <AccordionSummary
          expandIcon={<RiArrowDropDownLine fontSize={"30px"} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Products</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Products
              serHoverIn={serHoverIn}
              serHoverOut={serHoverOut}
              scroll={scroll}
              productMount={productMount}
            />
        </AccordionDetails>
      </Accordion> */}

      <div className={dropdown.otherNav}>
        <div>PRICING</div>
        <div>PORTFOLIO</div>
        <div>BLOG</div>

        <button className={dropdown.ProductPageRouteButton}> Products </button>
        <button> Hire A Talent </button>
        <button> Apply as a Talent </button>
      </div>
    </div>
  );
}
