import { Box, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./BIBanner.module.css";

export default function BIBanner() {
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
    <div className={styles.BIBannerMain}>
      <h1>
        <span>Business Intelligence</span> Services & Solutions
      </h1>
      <div className={styles.BIBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Business intelligence is something that every company needs nowadays,
        and Bottom Funnel is here to take care of it. With an impressive track
        record of delivering quality services, they know exactly how to extract
        data-driven insights from structured data. This makes them a smart
        choice when it comes to making informed decisions about your company's
        future growth or potential opportunities.
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
}
