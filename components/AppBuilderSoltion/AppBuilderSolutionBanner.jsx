import React, { useState } from "react";
import styles from "./AppBuilderSolutionBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/app builder.json";
import { Player } from "@lottiefiles/react-lottie-player";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

export default function AppBuilderSolutionBanner() {

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
    <div className={styles.appbuildersolutionbannermainboxes}>
      <div className={styles.appbuildersolutionboxfortextenter}>
        <h1>
          {" "}
          Bottom Funnel: a multi-purpose platform for low-code app development{" "}
        </h1>
        <p>
        In today's fast-paced world, it becomes next to impossible to keep up with the pace of development. Therefore, we resort to platforms like Bottom Funnel that offer a solution for that in the form of low-code app development.
        </p>

        <button onClick={handleOpen} className={styles.appbuildersolutionbannerbutton}>
          {" "}
          Get Started
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

      <div className={styles.appBuilderSolutionBannerAnimationDiv}>
        <Player className={styles.appBuilderSolutionsBannerAnimation}
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
