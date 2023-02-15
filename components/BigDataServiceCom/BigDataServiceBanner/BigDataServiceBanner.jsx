import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./BigDataServiceBanner.module.css";


export default function BigDataServiceBanner  (){
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
    <div className={styles.BigDataServiceBannerMain}>
      <h1>
        Develop the Power of Advanced Analytics for Large Volumes of Information
        with our Comprehensive Big Data Services
      </h1>
      <div>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Your business is growing, and so is its data. The only problem? There's
        no end to the amount of data that needs to be processed and analyzed,
        but with big data as a service from Bottom Funnel, you can process and
        analyze large-scale data in a simple manner.
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
