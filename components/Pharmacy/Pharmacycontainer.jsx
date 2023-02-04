import React, { useState } from "react";
import styles from "./Pharmacycontainer.module.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/pharmacy.json";
import Lottie from "react-lottie";

export default function Pharmacycontainer() {
  
  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

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
    <div className={styles.szpharmacycontainer}>
      <div className={styles.szpharmacysubcontainer}>
        <div className={styles.szpharmacyleft}>
          <div>
            <h1>Launch an On-Demand</h1>
            <h2>Pharmacy Delivery App</h2>
            <p>And 4X Your Sales of Medicines.</p>

            <button className={styles.szpharmacybtn} onClick={handleOpen}>Get Started</button>

            <Modal
              open={open}
              onClose={handleClose}
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
        </div>

        <div className={styles.pharmacyBannerAnimationDiv}>
          <Lottie options={lottieDefaultOptions} width={750} height={500} />
        </div>
      </div>
    </div>
  );
}
