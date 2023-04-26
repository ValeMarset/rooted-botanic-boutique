import styles from "./Hero.module.css";
import { useSelector } from "react-redux";
import Login from ".././Home/Access/Login";
import Register from ".././Home/Access/Register";
import { Link } from "react-router-dom";

export default function Hero() {
  const loginView = useSelector((state) => state.loginView);
  const registerView = useSelector((state) => state.registerView);

  return (
    <>
      <section
        id="heroSection"
        className={`${styles.heroImg} d-flex justify-content-center position-relative`}
      >
        <div
          className={`row g-0 align-items-center justify-content-lg-start justify-content-center container`}
        >
          <div
            className={`col-12 col-lg-7  ${
              loginView === true || registerView === true
                ? "d-none d-lg-block"
                : "show"
            }`}
          >
            <h1 className={`display-4 fw-semibold mb-4 ${styles.heroImgText}`}>
              Put life in every corner.
            </h1>
            <p className={` mb-5  ${styles.heroImgText}`}>
              Turn your home into a garden
            </p>
         <div className={` ${styles.heroButtons} `}>
         <Link
              to="/categories"
              className={`mt-0 me-4 mb-3 mb-lg-0 p-2 secondaryButton text-decoration-none `}
            >
              Our Products
            </Link>
            <Link
              to="/about-us"
              className={`mt-0 me-4 mb-3 mb-lg-0 py-2 primaryButton `}
            >
              About This Project
            </Link>
         </div>
          </div>
          <div
            className={`col-12 col-lg-4 col-md-7 d-flex justify-content-center ${
              styles.heroImgText
            } ${loginView === true ? "show" : "d-none"}`}
          >
            <Login />
          </div>
          <div
            className={`col-12 col-lg-5  ${styles.heroImgText} ${
              registerView === true ? "show" : "d-none"
            }`}
          >
            <Register />
          </div>
        </div>
      </section>
    </>
  );
}
