import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./CustomisedWebBanner.module.css";

export const CustomisedWebBanner = () => {

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
    <div className={styles.CustomisedWebBannerMain}>
      <h1>
        <span>Custom</span> Web Development Services
      </h1>
      <div className={styles.CustomisedWebBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel is the best option for organizations that require
        brand-new and creative designs. Our team of experts will help you figure
        out your online presence, from strategy to execution. We'll work with
        you to understand your goals and requirements, and deliver a website
        that's effective, efficient, and designed with you in mind. We're
        committed to providing the best possible experience for our clients, so
        we always aim to exceed expectations.
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
