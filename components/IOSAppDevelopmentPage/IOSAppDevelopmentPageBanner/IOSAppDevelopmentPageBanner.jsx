import { Box, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./IOSAppDevelopmentPageBanner.module.css";

export const IOSAppDevelopmentPageBanner = () => {
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
    <div>
      <div className={styles.IOSAppDevelopmentbannermainbox}>
        <div className={styles.IOSAppDevelopmentbannermainboxinnertextdiv}>
          <h1>
            <span>IOS App</span> Development Services
          </h1>
          <p>
            We deliver iOS apps keeping in mind both the business side and the
            end-users. Hire iOS software developers now.
          </p>

          <button
            className={styles.IOSAppDevelopmentbannerbutton}
            onClick={() => handleOpen()}
          >
            Get Started
          </button>
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
        <div className={styles.IOSandroidIcon}>
          <lottie-player
            src="/Animation/ios.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};
