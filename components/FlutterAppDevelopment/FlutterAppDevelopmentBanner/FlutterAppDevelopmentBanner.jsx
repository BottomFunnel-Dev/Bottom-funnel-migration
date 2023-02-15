import { Box, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./FlutterAppDevelopmentBanner.module.css";
import * as reactAnimation from "../../../public/Animation/flutter.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const FlutterAppDevelopmentBanner = () => {
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
      <div className={styles.flutterAppDevbannermainbox}>
        <div className={styles.flutterAppDevbannermainboxinnertextdiv}>
          <h1>
            <span>Flutter App</span> Development
          </h1>
          <p>
            Bottom funnel flutter app development is a complete package which
            offers you all the services to develop an application from scratch.
            With our eminent developers and designers, you can be sure that your
            smart application will be up-to-date with all the changes in
            technology.
          </p>
          <button className={styles.flutterAppDevbannerbutton} onClick={() => handleOpen()}>
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
        <div className={styles.FlutterIcon}>
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
