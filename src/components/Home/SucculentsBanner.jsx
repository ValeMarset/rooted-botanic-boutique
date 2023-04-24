import styles from "./SucculentsBanner.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function SucculentsBanner() {
  return (
    <>
      <div id="bannerOutdoor">
        <div className={`${styles.bannerOutdoorImg} position-relative mt-1`}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className={`${styles.rectangle}`}></div>
          </div>
          <div
            className={`position-absolute top-0 d-flex justify-content-center align-items-center flex-column ${styles.bannerOutdoorImgText}`}
          >
            <h1>Succulents</h1>
            <p className={`text-center ${styles.bannerOutdoorText}`}>
              Beauty and resistance
            </p>
            <Link
              to="/succulents"
              className="text-decoration-none primaryButton"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
