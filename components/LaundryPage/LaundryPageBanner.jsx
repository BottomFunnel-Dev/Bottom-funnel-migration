import React, { useState } from "react";
import styles from "./LaundaryBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/laundry.json";
import { Player } from "@lottiefiles/react-lottie-player";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

const LaundryPageBanner = () => {

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
    <div className={styles.laundrypagebannercontainer}>
      <div className={styles.laundryPagebannersubcontainer}>
        <div className={styles.laundrypagebannerleft}>
          <h1> Build an On-Demand App for Your Laundry Business </h1>
          <p>
            Being in the best on demand laundry app development Company, we
            develop complete on-demand app and provides a solution. Our Mobile
            app development team is all determined to make the on-demand app
            revolution in various industries that require instant provisioning
            of benefits and services. Thus, we had a very welcoming look at the
            laundry service market.
          </p>

          <button onClick={handleOpen} className={styles.laundrypagebannerbutton}>
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

        <div className={styles.laundaryPageBannerAnimationDiv}>
          <Player className={styles.laundaryPageBannerAnimation}
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

export default LaundryPageBanner;
