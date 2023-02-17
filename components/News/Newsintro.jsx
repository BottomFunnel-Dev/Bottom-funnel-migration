import React from "react";
import styles from "./Newsintro.module.css";

export default function Newsintro() {
  return (
    <div className={styles.newsintromainboxes}>
      <div className={styles.newsintroinsidersometext}>
        <h1>Magazine & Newspaper App Development</h1>
        <p>
          We are Magazine & Newspaper App Development Company that specializes
          in building apps for your favorite publications. Whether you want to
          stay up-to-date with the latest news or read insightful features, we
          have the perfect app for you. We offer a wide range of features with
          different levels of complexity, so that you can be sure your app will
          meet all your needs.
        </p>
      </div>
    </div>
  );
}
