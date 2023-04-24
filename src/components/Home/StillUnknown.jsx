import styles from "./StillUnknown.module.css";
import React from "react";

export default function StillUnknown() {
  return (
    <section className={`container px-4 pb-5 pt-4 {${styles.bgAunNoSe}`}>
      <div className="row">
        <div className="col-12 col-lg-6 mb-5 mb-lg-0">
          <span className={`${styles.colorTextAunNoSe} h4 fw-bold`}>
            Rooted Green Solutions.
          </span>
          <p className="fw-bold mt-2 h2">Reasons to choose us:</p>
        </div>
        <div className="col-12 col-lg-6">
          <div className="row justify-content-end">
            <div className="col-4">
              <span className={`${styles.colorTextAunNoSe} fw-bold h1`}>
                100%
              </span>
              <p className="text-secondary">Happy customers</p>
            </div>
            <div className="col-4">
              <span className={`${styles.colorTextAunNoSe} fw-bold h1`}>
                700+
              </span>
              <p className="text-secondary">Plant varieties</p>
            </div>
            <div className="col-4">
              <span className={`${styles.colorTextAunNoSe} fw-bold h1`}>
                25
              </span>
              <p className="text-secondary">Branches</p>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-4">
              <span className={`${styles.colorTextAunNoSe} fw-bold h1`}>
                100+
              </span>
              <p className="text-secondary">Professionals</p>
            </div>
            <div className="col-4">
              <span className={`${styles.colorTextAunNoSe} fw-bold h1`}>
                1000+
              </span>
              <p className="text-secondary">Weekly deliveries</p>
            </div>
            <div className="col-4">
              <span className={`${styles.colorTextAunNoSe} fw-bold h1`}>
                50+
              </span>
              <p className="text-secondary">Companies choose us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
