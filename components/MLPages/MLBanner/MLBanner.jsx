
import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./MLBanner.module.css";

export const MLBanner = () => {
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
    <div className={styles.MLBannerMain}>
      <h1>Machine Learning Development For Human-Like Solutions</h1>
      <div className={styles.MLBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel is one such machine learning system that uses artificial
        intelligence to make predictions for the future based on historical
        data. By assessing user preferences and analyzing their online behavior,
        the company builds a model that predicts the next action users are
        likely to take after visiting their website.
      </p>
      <button onClick={() => handleOpen()}>Request A Quote</button>

<Modal
  open={open}
  onClose={() => handleClose()}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      <div className={styles.popform}>
        <PopupForm />
      </div>
    </Typography>
  </Box>
</Modal>
    </div>
  );
};
