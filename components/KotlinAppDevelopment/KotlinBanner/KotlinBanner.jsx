import { Box, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./KotlinBanner.module.css";
import * as reactAnimation from "../../../public/Animation/kotlin.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const KotlinBanner = () => {
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
      <div className={styles.kotlinbannermainbox}>
        <div className={styles.kotlinbannermainboxinnertextdiv}>
          <h1 className={styles.kotlinChange}>
            <span>Kotlin</span> App Development Services
          </h1>

          <p>
            We have been providing the best kotlin app development services to
            our clients since long. We are experts in this domain and we can
            make any kind of app with a single click. Our team consists of
            highly proficient professionals who have years of experience in
            developing apps. They know their stuff and they will make sure that
            your app is error-free and user-friendly too. Don't waste your time,
            order our kotlin app development services right away!
          </p>

          <button className={styles.kotlinbannerbutton} onClick={() => handleOpen()}>Get Started</button>
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
        <div className={styles.kotlinIcon}>
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
