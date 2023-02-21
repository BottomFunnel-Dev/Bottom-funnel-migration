import { Box, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./webdevBanner.module.css";

export default function WebdevBanner({
  paraColor,
  bannerContent,
  animateData,
}) {
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
    <div
      className={styles.webDevBanner}
      style={
        {
          // background: `url(${bannerContent.background})`,
          // backgroundPosition: "right",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
        }
      }
    >
      <div className={styles.webDebText}>
        <h1 style={{ color: paraColor ? paraColor : null }}>
          <span className={styles.orange}>{bannerContent.title.orange}</span>{" "}
          {bannerContent.title.normal}
        </h1>
        <p style={{ color: paraColor ? paraColor : null }}>
          {bannerContent.description}
        </p>

        <button className={styles.webDevButton} onClick={() => handleOpen()}>
          Request A Quote
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

      <div className={styles.mernanimation}>
        <lottie-player
          src={animateData}
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}
