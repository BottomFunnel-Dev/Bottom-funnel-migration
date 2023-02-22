import React from "react";
import styles from "./planProject.module.css";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PopupForm } from "../PopupForm/PopupForm";

const PlanProject = () => {
  const [open, setOpen] = React.useState(false);
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
    <div className={styles.planProject}>
      <div>
        <h1>Software Products Development </h1>
        <p>
          We believe that every business, no matter how small or large, should
          be able to have easy access to quality IT services, which is why we
          offer a variety of plans for every budget.
        </p>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Let's plan your project
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div>
                <PopupForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanProject;
