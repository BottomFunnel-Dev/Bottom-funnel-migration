import { Box, Modal, Typography } from "@mui/material";

import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./EnterpriseWebBanner.module.css";

export const EnterpriseWebBanner = () => {

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
    <div className={styles.EnterpriseWebBannerMain}>
      <h1>Enterprise Web Solutions</h1>
      <div className={styles.EnterpriseWebBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Enterprise Web Services (EWS) is a system of reference that enables
        enterprises to scale their applications, access commonly shared source
        data in real-time and highly available architecture. The goal of EWS is
        to enable enterprises to access commonly required source data and make
        them more productive with it.
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
