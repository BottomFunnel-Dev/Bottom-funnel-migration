import React, { useState } from "react";
import styles from "./EyeWearDeliveryBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/eye wear.json";
import { Player } from "@lottiefiles/react-lottie-player";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

export const EyeWearDeliveryBanner = () => {
  
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
    <div className={styles.eyeweardeliverybannermainboxes}>
      <div className={styles.eyewearbannersometextboxes}>
        <h1>
          <a className={styles.colored}>Eyewear</a>
          Delivery App
        </h1>

        <p>
          Design Sprint facility quick ideation, prototyping and validation of a
          product idea.Find Solutions for business problems through an
          integrated design thinking approch.
          We've all been there - you see that new pair of glasses you want,
           but can't get your hands on. Or perhaps you saw an old pair in a
            thrift store and wondered how they were able to fit in that tiny little frame. 
            Regardless of the reason, eyewear delivery app Bottom funnel is here to help! With
             its vast collection of top-quality frames for men and women, as well as kids' styles,
              you're sure to find something that suits your needs.
        </p>
        <button onClick={handleOpen} className={styles.Eyeweardeliverybannerbutton}>
          Get Started
        </button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby={styles.modalmodaltitle}
          aria-describedby={styles.modamodaldescription}
        >
          <Box sx={style}>
            <Typography
              id="modalmodaltitle"
              variant="h6"
              component="h2"
            >
              <div className={styles.popform}>
                <PopupForm />
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>

      <div className={styles.eyeWearDeliveryBannerAnimationDiv}>
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
  );
};
