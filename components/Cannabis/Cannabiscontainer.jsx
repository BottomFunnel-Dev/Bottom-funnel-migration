import React, { useState } from "react";
import styles from "./Cannabiscontainer.module.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

export default function Cannabiscontainer() {
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
    <div className={styles.cannabuscontainermainboxes}>
      <div className={styles.cannabuscontainerboxforsometext}>
        <h1> Medical Cannabis Delivery App </h1>
        <p>
          Take your dispensary business on-demand with Uber for medical cannabis
          to ease the ordering process for medical patients
        </p>
        <button onClick={handleOpen} className={styles.cannabuscontainerbutton}>
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

      <div className={styles.CannabisContainerAnimationDiv}>
        <lottie-player
          src="/Animation/SolutionsAnimation/Cannabis.json"
          background="transparent"
          speed="1"
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}
