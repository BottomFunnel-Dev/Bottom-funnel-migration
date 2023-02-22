import React, { useState } from "react";
import styles from "./Realestatelowerbanner.module.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

export default function Realestatelowerbanner() {
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
    <div className={styles.realestatelowerbannermainboxes}>
      <div className={styles.realestatelowerbannersometxtbox}>
        <h2> Software Products Development </h2>
        <p>
          We belive that every business, no matter how small or large,should be
          able to have easy access to quality it services, which is why we offer
          a varitety of plans for every budget.
        </p>

        <button
          onClick={handleOpen}
          className={styles.realstatelowerbannerbutton}
        >
          {" "}
          Let's start your project{" "}
        </button>
      </div>

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
  );
}
