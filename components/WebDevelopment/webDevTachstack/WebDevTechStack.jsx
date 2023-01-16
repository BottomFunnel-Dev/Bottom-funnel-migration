import React from "react";
import { useState } from "react";
import { StackGrid } from "./StackGrid";
import styles from "./webDevTechStack.module.css";
import { techStackleft, initialData, techStackright } from "./GridData";
export const WebDevTechStack = () => {
  // const [toggle, setToggle] = useState(0);
  // const [righttoggle, setrighttoggle] = useState(0);

  const [stackdata, setStackdata] = useState(initialData);

  const handleState = (idx, el) => {
    // setToggle(idx);
    setStackdata(el);
  };
  const handleRightState = (idx, el) => {
    // setrighttoggle(idx);
    setStackdata(el);
  };

  return (
    <div className={styles.webDevStack}>
      <div className={styles.devStackText}>
        <h1>
          Robust <span>Technologies</span> we use for Web Development
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
          laudantium quasi rerum error, dicta exercitationem recusandae tempora
          ducimus inventore libero!
        </p>
      </div>

      <div className={styles.textStack}>
        <div className={styles.techStack}>
          {techStackleft.map((item, index) => (
            <button
              style={
                item.stackname === stackdata.stackname
                  ? {
                    background: "#ffe2da",
                    borderLeft: "5px solid #ef4c23",
                 border:"5px solid red",
                    color: "#ef4c23",
                  }
                  : null
              }
              onMouseEnter={() => {
                handleState(index, item);
              }}
              key={index}
            >
              {item.stackname}
            </button>
          ))}
        </div>

        <StackGrid gridData={stackdata} />

        <div className={styles.techStack}>
          {techStackright.map((rightitem, rightindex) => (
            <button
              style={
                rightitem.stackname === stackdata.stackname
                  ? {
                    background: "#ffe2da",
                    borderLeft: "5px solid #ef4c23",
                    color: "#ef4c23",
                  }
                  : null
              }
              onMouseEnter={() => {
                handleRightState(rightindex, rightitem);
              }}
              key={rightindex}
            >
              {rightitem.stackname}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
