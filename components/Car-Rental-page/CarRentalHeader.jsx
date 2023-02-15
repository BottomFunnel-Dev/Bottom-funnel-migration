import React, { useState } from "react";
import styles from "./carRentalHeader.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/car rental.json";
import { Player } from "@lottiefiles/react-lottie-player";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

export default function CarRentalHeader() {

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
    <div className={styles.RGcarRentalContainer}>
      <div className={styles.RGcarRentalHeaderLeft}>
        <h1> Car Rental App Solution</h1>
        <p>
          The Screeno ecosystem is designed to help you generate profit. Set up
          complete sales and marketing funnels with ease using the Screeno
        </p>

        <button onClick={handleOpen}> Start Free Trail </button>

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

      <div className={styles.RGcarRentalHeaderRight}>
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
