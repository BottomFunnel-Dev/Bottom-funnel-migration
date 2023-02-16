import React, { useState } from "react";
import styles from "./AlcoholBanner.module.css";
import * as reactAnimation from "../../../public/Animation/SolutionsAnimation/alchohal delivery.json";
import { Player } from "@lottiefiles/react-lottie-player";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import { PopupForm } from "../PopupForm/PopupForm";
import { PopupForm } from "../../PopupForm/PopupForm";

export default function AlcoholBanner() {

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
    <div className={styles.alcoholBannerMain}>
      <div className={styles.alcoholBannerContent}>
        <h1> Alcohol Delivery </h1>
        <p>
          There's no need to run out and purchase alcohol anymore! With alcohol
          delivery services, you can have all the wine, beer, and liquor your
          heart desires delivered right to your door.
        </p>
        <button onClick={handleOpen}> GET STARTED </button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={styles.modalmodaltitle}
        aria-describedby={styles.modamodaldescription}
      >
        <Box sx={style}>
          <Typography
            id="modalmodaltitle"
            variant="h6"
            component="h2"
          >
            <div className={styles.popform}>
              <PopupForm />
            </div>
          </Typography>
        </Box>
      </Modal>

      <div className={styles.alcoholBannerImage}>
        <Player className={styles.alcoholBannerAnimation}
          src={reactAnimation}
          background="transparent"
          speed="1"
          loop
          controls
          autoplay
        ></Player>
      </div>
    </div>
  );
}
