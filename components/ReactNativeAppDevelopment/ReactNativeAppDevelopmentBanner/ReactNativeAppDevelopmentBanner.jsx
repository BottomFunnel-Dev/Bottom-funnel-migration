import { Box, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./ReactNativeAppDevelopmentBanner.module.css";

export const ReactNativeAppDevelopmentBanner = () => {
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
      <div className={styles.ReactNativeAppDevelopmentbannermainbox}>
        <div
          className={styles.ReactNativeAppDevelopmentbannermainboxinnertextdiv}
        >
          <h1>React Native App Development Services</h1>
          <p>
            React Native is a popular app development platform that enables
            developers to create mobile apps using JavaScript. React Native is
            different from traditional web development because it uses stateless
            components, which makes the app more responsive and faster. This
            platform also allows for easy integration with third-party APIs,
            making it ideal for developing features that require access to
            external data or services.
          </p>

          <button
            className={styles.ReactNativeAppDevelopmentbannerbutton}
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
        <div className={styles.reactfileIcon}>
          <lottie-player
            src="/Animation/reactfile.json"
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
