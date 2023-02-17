import { Box, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from './WearableBanner.module.css';
import Image from 'next/image';
import * as reactAnimation from "../../../public/Animation/wearable.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const WearableBanner = () => {
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
      <div className={styles.wearablebannermainbox}>
        <div className={styles.wearablebannermainboxinnertextdiv}>
          <h1><span>Wearable App</span> Development </h1>
          <p>
            The use of wearable technology for both individuals and businesses are growing at a rapid rate. Whether it is for tracking steps walked or sending real-time work push notifications, wearable tech of both Android wearable development and IOS wearable development domain is being used by companies and individuals from all walks of life.
          </p>

          <button className={styles.wearablebannerbutton} onClick={() => handleOpen()}>Get Started</button>
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

        <div className={styles.wearablebannermainboxImage}>
                {/* <Image
                    src={'/Images/wearable/Component120.webp'}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                /> */}

<div className={styles.WearableIcon}>
       
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
    </div>
  )
}
