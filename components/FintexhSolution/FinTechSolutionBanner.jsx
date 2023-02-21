import React, { useState } from "react";
import styles from "./FinTechSolutionBanner.module.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

export const FinTechSolutionBanner = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    height: 550,
    bgcolor: "background.paper",
    border: "2px solid #000",
    // boxShadow: 24,
    backgorund: "green",
    p: 1,
    borderRadius: 2,
  };

  return (
    <div className={styles.fintechsolutionbannermainbox}>
      <div className={styles.fintechsolutionbannertextboxes}>
        <h1> Fintech App Solution </h1>
        <p>
          In a world where data is the new oil, but making sense of it can be
          tricky, you need a finance company that knows how to solve your most
          complex data-related problems. Introducing Fintech App Solution -a
          team of experts who understand the ins and outs of data analysis.
          They'll use their in-depth expertise to help you get the most out of
          your data so you can make smarter decisions and grow your business
          faster. Plus, they offer cutting-edge technologies that will give you
          an edge over your competitors.
        </p>

        <button
          onClick={handleOpen}
          className={styles.fintechsolutionbannerbutton}
        >
          Get Started
        </button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby={styles.modalmodaltitle}
          aria-describedby={styles.modamodaldescription}
        >
          <Box sx={style}>
            <Typography id="modalmodaltitle" variant="h6" component="h2">
              <div className={styles.popform}>
                <PopupForm />
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>

      <div className={styles.fintechSolutionBannerAnimationDiv}>
        <lottie-player
          src="/Animation/SolutionsAnimation/fintech.json"
          background="transparent"
          speed="1"
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};
