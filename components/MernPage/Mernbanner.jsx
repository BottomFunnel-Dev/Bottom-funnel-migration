import { Box, Typography, Modal } from "@mui/material";
import React, { useState } from "react";

import styles from "./mernbanner.module.css";
import { PopupForm } from "../PopupForm/PopupForm";

export const Mernbanner = ({ bannerdata, animateData }) => {
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
      className={styles.mernBanner}
      style={{
        background: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.mernbannercontent}>
        <h1>{bannerdata.title}</h1>
        <p>{bannerdata.description}</p>
        <button className={styles.mernButton} onClick={() => handleOpen()}>
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

      <div className={styles.bannerIcons}>
        {bannerdata.icons.map((item, index) => (
          <div key={index} className={styles.mernskills}></div>
        ))}
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
};
