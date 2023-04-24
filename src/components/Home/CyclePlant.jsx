import styles from "./CyclePlant.module.css";
import React from "react";

export default function CyclePlant() {
  return (
    <div className="py-4">
      <section className="container">
        <div className="row text-center">
          <div className="col-6 col-md-4 col-lg-2">
            <img
              src="/img/cyclePlant/holding-hand.png"
              alt="holding-hand"
              className={`mb-3 mb-lg-3 ${styles.imgCyclePlant}`}
            />
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <img
              src="/img/cyclePlant/plants.png"
              alt="icon-plants"
              className={`mb-3 mb-lg-3 ${styles.imgCyclePlant}`}
            />
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <img
              src="/img/cyclePlant/watering-plants.png"
              alt="icon-watering-plants"
              className={`mb-3 mb-lg-3 ${styles.imgCyclePlant}`}
            />
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <img
              src="/img/cyclePlant/growth.png"
              alt="icon-growth"
              className={`mb-3 mb-lg-3 ${styles.imgCyclePlant}`}
            />
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <img
              src="/img/cyclePlant/plant.png"
              alt="icon-plant"
              className={`mb-3 mb-lg-3 ${styles.imgCyclePlant}`}
            />
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <img
              src="/img/cyclePlant/potted-plant.png"
              alt="icon-potted-plant"
              className={`mb-3 mb-lg-3 ${styles.imgCyclePlant}`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
