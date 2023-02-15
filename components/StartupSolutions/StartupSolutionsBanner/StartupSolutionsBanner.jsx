import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./StartupSolutionsBanner.module.css";

export default function StartupSolutionsBanner() {
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
    <div className={styles.StartupSolutionsBannerMain}>
      <h1>
        <span>Startup</span> Solutions
      </h1>
      <div className={styles.StartupSolutionsBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel is a startup consulting firm that helps new enterprises to
        grow and flourish. We believe in giving back, so we provide our clients
        with access to our vast network of experts who are passionate about
        helping businesses succeed.
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
}
