import React, { useState } from "react";
import styles from "./GameDevelopmentBanner.module.css";

import Box from "@/material/Box";
import Button from "@/material/Button";
import Typography from "@/material/Typography";
import Modal from "@/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

const GameDevelopmentBanner = () => {
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
    <div className={styles.gamedevelopmentbannermainboxes}>
      <div className={styles.gamedeveloperbackgroundimagetxtdiv}>
        <h1>Game Development Application</h1>
        <p>
          A game development application is a program that allows users to create and publish games, interactive applications, and other 
          digital content. Applications typically allow users to design their own levels, characters, and worlds; build attractors or user 
          interfaces; add sound effects and music; and publish their creations online for others to download. Some applications also offer 
          marketing tools for promoting the games they have developed.
        </p>

        <button className={styles.gamedevelopmentbutton} onClick={handleOpen}>Get Started</button>

        <Modal
          open={open}
          onClose={handleClose}
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
};

export default GameDevelopmentBanner;
