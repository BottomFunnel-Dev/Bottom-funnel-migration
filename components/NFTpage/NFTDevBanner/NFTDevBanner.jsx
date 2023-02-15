import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./NFTDevBanner.module.css";

export default function NFTDevBanner() {
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
    <div className={styles.NFTDevBannerMain}>
      <h1>
        <span>NFT</span> Development Services
      </h1>
      <div className={styles.NFTDevBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel offers a simple way to create and transfer ownership of
        your digital assets with minimal technical expertise required. By
        recording ownership on the blockchain, your NFT can be sold or traded
        securely without fear of fraud or theft. And because Bottom Funnels are
        unique identifiers in their own right, they can be used across multiple
        applications without duplication or confusion.
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
}
