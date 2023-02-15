import { Box, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./MetaverseBanner.module.css";

export const MetaverseBanner = () => {
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
    <div className={styles.MetaverseBannerMain}>
      <h1>
        <span>Metaverse</span> Services
      </h1>
      <div className={styles.EnterpriseSliderHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Welcome to the Metaverse! Where digital experiences are an alternative
        to or a replica of the real world, along with key civilizational aspects
        like social interactions, currency, trade, economy, and property
        ownership-- founded on a bedrock of blockchain technology.
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
