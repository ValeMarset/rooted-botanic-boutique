import React from "react";
import styles from "./Garden.module.css";

export default function Garden() {
  return (
    <>
      <div
        id="bannerIndoor"
        className={`${styles.bannerIndoorImg}  position-relative`}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className={`${styles.rectangle}`}></div>
        </div>
        <div
          className={`position-absolute top-0 d-flex justify-content-center align-items-center flex-column ${styles.bannerIndoorImgText}`}
        >
          <h1>Build your Garden</h1>
          <p className={`text-center ${styles.bannerIndoorText}`}></p>
        </div>
      </div>
    </>
  );
}
