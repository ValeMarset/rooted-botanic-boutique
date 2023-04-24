import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { showLogin, hideLogin } from "../../redux/loginViewReducer";
import { showRegister, hideRegister } from "../../redux/registerViewReducer";
import { useDispatch } from "react-redux";

export default function Footer() {
  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch(showRegister());
    dispatch(hideLogin());
    scrollToAnchor("heroSection");
  };

  const handleLogin = () => {
    dispatch(showLogin());
    dispatch(hideRegister());
    scrollToAnchor("heroSection");
  };

  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  };

  return (
    <>
      <section className={`${styles.bgFooter} mb-0`}>
        <footer className={`${styles.footer} pt-5`}>
          <div className=" container">
            <div className="row g-0 border-bottom border-1 border-secondary">
              <div className="col-xl-4 d-none d-xl-block">
                <div className="d-flex align-items-center">
                  <img
                    className="me-3 mb-3"
                    width="50px"
                    src="/img/logoEquipo.png"
                    alt="logo Rooted - Botanic Boutique"
                  />
                  <div className="d-flex align-items-baseline">
                    <h5 className="text-logo me-2 h4">Rooted</h5>
                    <small className="fs-6">Botanic Boutique</small>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3 col-xl-2 mb-3 lh-lg">
                <div className="d-flex justify-content-center justify-content-md-end">
                  <ul className="list-unstyled ms-3">
                    <li className="h5">Shop</li>
                    <li>
                      <Link
                        onClick={() => scrollToAnchor("categories")}
                        className={`${styles.footerLinks}`}
                      >
                        {" "}
                        Categories{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        onClick={() => scrollToAnchor("trendings")}
                        className={`${styles.footerLinks}`}
                      >
                        {" "}
                        Trending plants
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => scrollToAnchor("bannerIndoor")}
                        className={`${styles.footerLinks}`}
                      >
                        {" "}
                        Build your Garden
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={() => scrollToAnchor("bannerOutdoor")}
                        className={`${styles.footerLinks}`}
                      >
                        {" "}
                        Suculents{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-md-3 col-xl-2 mb-3 lh-lg d-none d-md-block">
                <div className="d-flex justify-content-end">
                  <ul className="list-unstyled">
                    <li className="h5">Company</li>
                    <li>
                      <Link to="/about-us" className={`${styles.footerLinks}`}>
                        {" "}
                        About this Project{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blanck"
                        to="https://rooted-botanic-boutique-admin.vercel.app/"
                        className={`${styles.footerLinks}`}
                      >
                        {" "}
                        Administrator Panel{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={`${styles.footerLinks}`}>
                        {" "}
                        Terms & Conditions{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className={`${styles.footerLinks}`}> Privacy </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-md-3 col-xl-2 lh-lg d-none d-md-block">
                <div className="d-flex justify-content-end">
                  <ul className="list-unstyled ">
                    <li className="h5">Account</li>
                    <li>
                      <Link
                        onClick={() => handleLogin()}
                        className={`${styles.footerLinks}`}
                      >
                        {" "}
                        Login{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => handleRegister()}
                        className={`${styles.footerLinks}`}
                      >
                        {""}
                        Register{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={`${styles.footerLinks}`}>
                        {" "}
                        Manage Account{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-md-3 col-xl-2 lh-lg mb-4">
                <div className="d-flex justify-content-center justify-content-md-end">
                  <ul className="list-unstyled ms-3 ms-md-0">
                    <li className="h5">Contact</li>
                    <li className="d-flex justify-content-between">
                      <Link
                        to="https://www.linkedin.com/in/cristina-racedo-0a00551a4/"
                        className={`${styles.footerLinks}`}
                      >
                        Cristina Racedo
                      </Link>
                    </li>
                    <li className="d-flex justify-content-between">
                      <Link
                        to="https://www.linkedin.com/in/ignacio-navarro-viana/"
                        className={`${styles.footerLinks}`}
                      >
                        Ignacio Navarro
                      </Link>
                    </li>
                    <li className="d-flex justify-content-between">
                      <Link
                        to="https://www.linkedin.com/in/mateo-méndez/"
                        className={`${styles.footerLinks}`}
                      >
                        Mateo Méndez
                      </Link>
                    </li>
                    <li className="d-flex justify-content-between">
                      <Link
                        to="https://www.linkedin.com/in/joaquin-oliba/"
                        className={`${styles.footerLinks}`}
                      >
                        {" "}
                        Joaquín Oliba
                      </Link>
                    </li>
                    <li className="d-flex justify-content-between">
                      <Link
                        to="https://www.linkedin.com/in/valentina-marset/"
                        className={`${styles.footerLinks}`}
                      >
                        {" "}
                        Valentina Marset
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between mx-md-5 mx-lg-0  my-4">
              <small className="ms-3">
                Copyright © April 2023 Rooted - Botanic Boutique.{" "}
              </small>
              <div className="d-flex align-items-center">
                <img
                  className="me-lg-3 mb-3"
                  width="50px"
                  src="/img/logoEquipo.png"
                  alt="logo Rooted - Botanic Boutique"
                />
                <div className="d-flex align-items-baseline">
                  <h5 className="text-logo me-2 h4">Rooted</h5>
                  <small className={`fs-6 ${styles.botanicB}`}>
                    Botanic Boutique
                  </small>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
