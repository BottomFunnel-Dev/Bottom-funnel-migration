import { Box, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./AndriodBanner.module.css";
import * as reactAnimation from "../../../public/Animation/android.json";
import { Player } from "@lottiefiles/react-lottie-player";

export default function AndriodBanner() {
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
      <div className={styles.andriodAppDevbannermainbox}>
        <div className={styles.andriodAppDevbannermainboxinnertextdiv}>
          <h1>Andriod App Development</h1>
          <p>
            If you're looking for a reliable and affordable android app
            development service, you've come to the right place. At Bottom
            funnel, we understand the importance of delivering high-quality apps
            on time and at a fraction of the cost of other developers. So
            whether you're looking for a simple Android app or a more complex
            project, we can help. We take pride in our extensive experience and
            track record of success, so you can be sure that your project will
            be handled with care. Contact us today to get started!
          </p>
          <button className={styles.andriodAppDevbannerbutton} onClick={() => handleOpen()}>
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
        <div className={styles.androidIcon}>
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
}
