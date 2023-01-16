import React from "react";
import styles from "./faqs.module.css";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdArrowForwardIos } from "react-icons/md";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<MdArrowForwardIos color="black" sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const TextDropdown = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={styles.faqSection}>
      <h2>FREQUENTLY ASKED QUESTIONS</h2>
      <div className={styles.faqs}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              How do you proceed with a new project or service inquiry?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We'll request you to answer a few questions after you express
              interest in collaborating with our firm to help us understand your
              company goals, budget, and project needs more clearly. We start by
              having an introductory call to get to know each other and discuss
              the work that was done and where we are going. Then, we have an
              onboarding call to set up the strategy for the project. After
              that, we start working on the project and plan out what will
              happen. We do communication calls throughout the project to make
              sure that the project is going in the right way.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>
              Do you offer different pricing models for different services?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we believe that every business, no matter how small or large,
              should be able to have easy access to quality IT services, which
              is why we offer a variety of plans for every budget. Not only
              that, our pricing model includes flat rates, monthly payments, and
              payment plans that allow you to spread out your costs over time.
              So, whether you're looking for an affordable plan with minimal
              restrictions or more comprehensive coverage at an increased price
              tag, we have everything sorted for you! We offer different pricing
              models according to your investment plans. Please check our
              website to learn more about the pricing models that we offer.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              What type of custom software development services do you deliver?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We offer a wide range of custom software development services that
              are perfect for businesses of all sizes. We specialize in creating
              innovative and user-friendly solutions that meet the needs of our
              clients. The services provided under CSD includes:
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
