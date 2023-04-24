import styles from "./Error404Component.module.css";
import React from "react";

export default function Error404Component() {
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        id={styles.contenedor}
      >
        <div className="text-center">
          <h2>Page Not Found</h2>
          <img src="/img/error404/error404.svg" alt="Image Error" />
        </div>
      </div>
    </>
  );
}
