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
import { Resource } from "../Resource";
export default function DropdownResp({

  hoverhandle,
  scroll,

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
            homeHoverIn={hoverhandle}
            homeHoverOut={hoverhandle}
            scroll={scroll}
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
            serHoverIn={hoverhandle}
            serHoverOut={hoverhandle}
            scroll={scroll}
          />
        </AccordionDetails>
      </Accordion>

     
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
              solHoverIn={hoverhandle}
              solHoverOut={hoverhandle}
              scroll={scroll}
            />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<RiArrowDropDownLine fontSize={"30px"} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Industries</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Industries
              solHoverIn={hoverhandle}
              solHoverOut={hoverhandle}
              scroll={scroll}
            />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<RiArrowDropDownLine fontSize={"30px"} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Resources</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Resource
              solHoverIn={hoverhandle}
              solHoverOut={hoverhandle}
              scroll={scroll}
            />
          </AccordionDetails>
        </Accordion>
    

     

      <div className={dropdown.otherNav}>
       
        <div>WORK</div>
    

        <button className={dropdown.ProductPageRouteButton}> Products </button>
        <button> Hire A Talent </button>
        <button> Apply as a Talent </button>
      </div>
    </div>
  );
}
