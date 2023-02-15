import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./BlockChainBanner.module.css";

export default function BlockChainBanner  () {
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
    <div className={styles.BlockChainBannerMain}>
      <h1>
        Transform Your Business with Secure and Safe Transactions With Our Block
        Chain Services
      </h1>
      <div className={styles.BlockChainBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel believes in a decentralized world. They want to change the
        way people perceive blockchain technology and its various applications.
        Rather than just associating it with cryptocurrencies, they want to make
        people realize its actual potential.
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
        <PopupForm/>
      </div>
    </Typography>
  </Box>
</Modal>
    </div>
  );
};
