import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { WhoWeAre } from "../WhoWeAre";
import { RiArrowDropDownLine } from "react-icons/ri";

import dropdown from "./dropdownResp.module.css";
export default function DropdownResp( {homeHoverIn,homeHoverOut,scroll,productMount}) {
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
        <AccordionDetails>
          <Typography>
            <WhoWeAre
              homeHoverIn={homeHoverIn}
              homeHoverOut={homeHoverOut}
              scroll={scroll}
              productMount={productMount}
            />
          </Typography>
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<RiArrowDropDownLine fontSize={"30px"} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
