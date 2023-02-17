import React, { useState } from "react";
import styles from "./KidsWearBanner.module.css";
import * as reactAnimation from "../../../public/Animation/SolutionsAnimation/baby and kids wear.json";
import { Player } from "@lottiefiles/react-lottie-player";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../../PopupForm/PopupForm";

export default function KidsWearBanner() {

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
    <div>
      <div className={styles.KidsWearbannermainbox}>
        <div className={styles.KidsWearbannermainboxinnertextdiv}>
          <h1> <span className={styles.kidswearspecialcolor}>Baby & Kids Wear</span> App Solution </h1>
          <p>
            Are you looking for a Baby & Kids Wear App Solution? Look no further
            than Ours ! We offer an exciting and easy-to-use app solution that
            is perfect for any baby or kid's clothing needs. With our app, you
            can easily find and purchase clothes for your little ones with just
            a few clicks. Plus, our app makes it easy to keep track of your
            child's clothing size so you always know what to buy when they need
            new clothes.
          </p>

          <button onClick={handleOpen} className={styles.KidsWearbannerbutton}>
            Start Free Trail
          </button>

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
        </div>

        <div className={styles.kidsWearBannerAnimationDiv}>
          <Player
            src={reactAnimation}
            background="transparent"
            speed="1"
            loop
            controls
            autoplay
          ></Player>
        </div>
      </div>
    </div>
  );
};
