import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../PopupForm/PopupForm";
import styles from "./AiContentBanner.module.css";

export default function AiContentBanner() {
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
    <div className={styles.aicontentbannermainboxes}>
      <div className={styles.aicontentbannerboxfortext}>
        <h1>WRITE BETTER,FASTER Generate Content & Compy In Seconds with AI</h1>
        <p>
          Use AI to boost your traffic and save hours of work. Automatically
          write unique,engaging and high-quality copy or content from long-form
          blog posts or landing pages to digital ads in seconds.
        </p>

        <button className={styles.aicontentbannerbutton} onClick={() => handleOpen()}>Get Started</button>
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
    </div>
  );
}
