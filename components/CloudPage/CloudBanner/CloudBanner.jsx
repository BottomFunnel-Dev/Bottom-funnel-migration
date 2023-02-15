import { Box, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./CloudBanner.module.css";

export const CloudBanner = () => {
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
    <div className={styles.CloudBannerMain}>
      <h1>
        <span>Cloud</span> Services Consulting
      </h1>
      <div className={styles.CloudBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom funnel is a cost-effective way of getting the cloud computing
        services without worrying about single-price tag. You can have that
        peace of mind as you know your data is safe and secure. With bottom
        funnel, you get comprehensive cloud solutions like storage, networking,
        and security by experts in the field. Let us take care of your business
        with our fast turnaround times and professional service plans to keep
        you up and running. Contact us today!
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
