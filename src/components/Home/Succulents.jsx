import styles from "./Succulents.module.css";
import React from "react";

export default function Succulents() {
  return (
    <div className={` ${styles.containerSucculents} container my-5 pt-5 `}>
      <div className={`${styles.textSize}`}>
        <h1>Succulents</h1>
        <h2>This section is still in construction...</h2>
        <img src="img/gardening.svg" alt="gardening" className="my-3 w-75" />
      </div>
    </div>
  );
}
