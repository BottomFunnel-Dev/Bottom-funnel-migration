import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./CryptoDevBanner.module.css";

export const CryptoDevBanner = () => {
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
    <div className={styles.CryptoDevBannerMain}>
    
      <h1>
        <span>Cryptocurrency</span> Development Services
      </h1>
      <div className={styles.CryptoDevBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Still confused about how cryptocurrency works? Join the club. That's why
        Bottom Funnel has decided to clear up all your confusion with their
        easy-to-understand explanations. From mining a coin to using it as
        payment, Bottom Funnel has got you covered. With units of cryptocurrency
        created through a process called mining, this guide will teach you
        everything you need to know about them! Next, we'll look at how users
        can buy and sell currencies in the market.
      </p>
      <button onClick={() => handleOpen()}>Request A Quote</button>

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
  );
};
