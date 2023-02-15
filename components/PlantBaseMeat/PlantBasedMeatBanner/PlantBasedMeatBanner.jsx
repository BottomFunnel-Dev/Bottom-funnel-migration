import React, { useState } from "react";
import styles from "./PlantBasedMeatBanner.module.css";
import * as reactAnimation from "../../../public/Animation/SolutionsAnimation/Plant based meat.json";
import { Player } from "@lottiefiles/react-lottie-player";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../../PopupForm/PopupForm";

export default function PlantBasedMeatBanner() {

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
    <div className={styles.plantBasedBannerParentDiv}>
      <div className={styles.plantBasedMeatBannerContentDiv}>
        <h1>
          <span> Plant Based </span>
          Meat Delivered App
        </h1>

        <p>
          Impossible Beef is made from plants for people who love meat. Anything
          you can make with ground beef, you can make with Impossible Beef Made
          From Plants-tacos, sliders, lasagna, you name it! It's packed with
          protein and nutrients, has 0mg cholesterol (13g total fat, 6g
          saturated fat per serving), and is way better for the planet than beef
          from cows.
        </p>

        <button onClick={handleOpen}> Get Started </button>

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

      <div className={styles.plantBasedBannerImageDiv}>
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
}
