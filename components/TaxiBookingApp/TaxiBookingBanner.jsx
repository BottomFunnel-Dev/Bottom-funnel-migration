import React, { useState } from "react";
import styles from "./TaxiBookingBanner.module.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

export default function TaxiBookingBanner() {
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
    <div className={styles.taxibookingbannermainboxes}>
      <div className={styles.taxibookingappboxfortext}>
        <h1>
          <span className={styles.specialcolor}>Taxi Booking App</span>{" "}
          Development Services
        </h1>

        <p>
          With taxi booking app development, significant amount of your time can
          be saved. We have the best taxi dispatch software development
          expertise ensures that you get your best solution in no time.
        </p>
        <button
          onClick={handleOpen}
          className={styles.taxibookingappbannerbutton}
        >
          {" "}
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

      <div className={styles.taxiBookingBannerAnimationDiv}>
        <lottie-player
          src="/Animation/SolutionsAnimation/Taxi booking.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}
