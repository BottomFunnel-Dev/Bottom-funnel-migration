import React, { useState } from "react";
import styles from "./pickupBanner.module.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

export const PickupBanner = () => {
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
    <div className={styles.pickupbannermaiboxes}>
      <div className={styles.pickupbannersometextbox}>
        <h1> Set Up An Efficient Online Pickup & Delivery Business </h1>
        <p>
          We all know that managing a business is no easy task, especially when
          it grows and requires more attention. When you have to attend to every
          little detail of it, life gets hectic. And if there's shipping
          involved, things can get even more complicated.
        </p>
        <button onClick={handleOpen} className={styles.pickupbannerbutton}>
          Get Started{" "}
        </button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby={styles.modalmodaltitle}
          aria-describedby={styles.modamodaldescription}
        >
          <Box sx={style}>
            <Typography id="modalmodaltitle" variant="h6" component="h2">
              <div className={styles.popform}>
                <PopupForm />
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>

      <div className={styles.pickupDeliveryBannerAimationDiv}>
        <lottie-player
          src="/Animation/SolutionsAnimation/pickup and delivery.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};
