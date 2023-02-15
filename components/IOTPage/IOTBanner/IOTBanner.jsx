import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./IOTBanner.module.css";

export const IOTBanner = () => {

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
    <div className={styles.IOTBannerMain}>
      <h1>
        Internet of Things (IOT) services help elaborate your idea of IoT
        adoption and set up secure technology infrastructure for advanced data
        tasks.
      </h1>
      <div className={styles.IOTBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>

      <p>
        Bottom Funnel IoT development can be a challenging process. However,
        when you partner with Us, it becomes an easy one. We have the expertise
        and experience to help you build successful IoT solutions that will
        change the way your customers do business.
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
