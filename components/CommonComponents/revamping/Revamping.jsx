import React, { useState } from "react";
import styles from "./revamping.module.css";
import { RiNavigationLine, RiMailSendFill } from "react-icons/ri";
import { IconContext } from "react-icons/lib";


import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";


const Revamping = () => {

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
    <div className={styles.revamp}>
      <div className={styles.revampback}>
        <img src="Images/revamp/final2.png" alt="image" />
      </div>
      <div className={styles.textlayer}>
        <div className={styles.navmotion}>
          <img src="Images/revamp/navigation.gif" alt="image" />
        </div>
        <h1>Need an expert advice on your technical queries?</h1>
        <p>
          Fill the required information about your query and we will send you
          your solution.
        </p>
        <button onClick={handleOpen}>
          <IconContext.Provider value={{ className: styles.buttonIcon }}>
            <RiMailSendFill />
          </IconContext.Provider>
          Enquire now
        </button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              <div className="popform">
                <PopupForm />
              </div>
            </Typography>
          </Box>
        </Modal>

      </div>
    </div>
  );
};

export default Revamping;
