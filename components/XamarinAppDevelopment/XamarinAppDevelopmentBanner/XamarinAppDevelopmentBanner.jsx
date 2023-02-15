import { Box, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./XamarinAppDevelopmentBanner.module.css";
import * as reactAnimation from "../../../public/Animation/Xamarin.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const XamarinAppDevelopmentBanner = () => {
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
    <>
      <div className={styles.XamarinAppDevbannermainbox}>
        <div className={styles.XamarinAppDevbannermainboxinnertextdiv}>
          <h1>Xamarin App Development</h1>
          <p>
            We're passionate about our work, and our xamarin app development
            services reflect that
          </p>

          <button className={styles.XamarinAppDevbannerbutton} onClick={() => handleOpen()}>
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

        <div className={styles.xamrinIcon}>
          <Player
            src={reactAnimation}
            background="transparent"
            speed="1"
            loop
            controls
            autoplay
          ></Player>
        </div>
      </div>
    </>
  );
};
