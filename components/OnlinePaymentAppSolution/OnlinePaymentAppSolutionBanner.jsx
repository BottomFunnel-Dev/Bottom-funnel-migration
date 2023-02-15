import React, { useState } from "react";
import styles from "./OnlinePaymentAppSolutionBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/oNLINE PAYMENTY.json";
import { Player } from "@lottiefiles/react-lottie-player";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

export const OnlinePaymentAppSolutionBanner = () => {

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
    <div className={styles.onlinepaymentappsolutionbannermainboxes}>
      <div className={styles.onlonepaymentappbannerimageinsidetext}>
        <h1> Online Payment App Solution </h1>
        <p>
          Create custom mobile payment solutions for P2P payments using debit
          cards, credit cards, mobile wallets, bank accounts, and more for
          Android, iOS, and Windows Mobile platforms. Our developers integrate
          near field communication (NFC), quick response (QR), barcode
          configurations, magnetic secure transmission (MST) technology, and
          more. We provide initiator, target, reader/writer, P2P communications,
          and card emulation software development for mobile devices, payment
          terminals, and other NFC platforms.
        </p>

        <button onClick={handleOpen} className={styles.onlinepaymentsolutionbutton}>
          {" "}
          Get Started{" "}
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

      <div className={styles.onlinePaymentSolutionBannerAnimationDiv}>
        <Player className={styles.onlinePaymentSolutionBannerAnimation}
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
};
