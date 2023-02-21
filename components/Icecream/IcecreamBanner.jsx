import React, { useState } from "react";
import styles from "./IcecreamBanner.module.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

export const IcecreamBanner = () => {
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
    <div className={styles.icecreambannermainboxes}>
      <div className={styles.icreambannersometextbox}>
        <h1> Launch an On-Demand </h1>
        <h2>
          <span className={styles.specialcolor}> Ice-cream </span> Delivery App
        </h2>
        <p>
          Looking to build an online presence for your ice cream delivery
          service? Create and customize your very own branded app in seconds
          with Jotform’s ready-made Ice Cream Delivery App. You can include an
          online menu with photos and descriptions, create a catering form, link
          to your social media accounts, and list your contact information.
          Share your app by sending email invitations, generating a unique QR
          code, or by seamlessly embedding it in your website.
        </p>

        <button onClick={handleOpen} className={styles.icecreambannerbutton}>
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

      <div className={styles.iceCreamBannerAnimationDiv}>
        <lottie-player
          src="/Animation/SolutionsAnimation/Icecream.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};
