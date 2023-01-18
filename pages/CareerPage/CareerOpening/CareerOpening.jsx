import React from "react";
import styles from "./CareerOpening.module.css";

export const CareerOpening = () => {
  const OpeningData = [
    "SSE - Blockchain Developer",
    "Business Development/Business manager",
    "Content Writer",
    "Angular Developer",
    "Node.js Lead",
    "React.js Developer",
    "Flutter Developer",
    "IOS Engineer",
    "Sr. Devops Engineer",
    "React Native",
  ];

  return (
    <div className={styles.CareerOpeningcontainer}>
      <div className={styles.CareerOpengingsearchbar}>
        <input type="text" placeholder="Find your role" />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
      <div className={styles.CareerOpeningfilterbutton}>
        <h2>Showing 10 openings</h2>
        <button>
          <p>Filters</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </button>
      </div>
      <div className={styles.CareerOpengingmain}>
        {OpeningData.map((elem) => (
          <div key={elem}>
            <h2>{elem}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};
