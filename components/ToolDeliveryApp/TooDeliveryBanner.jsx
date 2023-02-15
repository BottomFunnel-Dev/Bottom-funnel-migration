import React, { useState } from "react";
import styles from "./ToolDeliveryBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/tool deliver.json";
import { Player } from "@lottiefiles/react-lottie-player";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

function TooDeliveryBanner() {
  
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
    <div className={styles.tdtooldeliverycontainer}>
      <div className={styles.txtooldeliverysubcontainer}>
        <div className={styles.tdtooldeliveryleft}>
          <div className={styles.tdtooldeliverysometxtbox}>
            <h1> On-Demand </h1>
            <h2> Tool Delivery Solution </h2>
            <p>
              Tool delivery app is a smart solution which makes your life as an
              entrepreneur much easier. It helps you deliver tools faster than
              ever before without any hassles or complications of any sort.
            </p>
            <button onClick={handleOpen} className={styles.tdtooldeliverybtn}> Get Started </button>
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
        </div>

        <div className={styles.toolDeliveryAnimationDiv}>
          <Player
            className={styles.toolDeliveryMainAnimation}
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
}

export default TooDeliveryBanner;
