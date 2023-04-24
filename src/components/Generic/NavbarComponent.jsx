import styles from "./NavbarComponent.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toggleShowCart } from "../../redux/cartViewReducer";
import { logout } from "../../redux/userReducer";
import { showLogin } from "../../redux/loginViewReducer";
import { hideRegister } from "../../redux/registerViewReducer";
import { colorGreen, colorTransparent } from "../../redux/navbarColorReducer";
import { Badge, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import toast from "react-hot-toast";

export default function NavbarComponent() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const navbarColor = useSelector((state) => state.navbarColor);
  const [categories, setCategories] = useState([]);
  const [expandedNavbar, setExpandedNavbar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BACK_URL}/categories`,
      });
      setCategories(response.data);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const heroSection = document.getElementById("heroSection");
    const aboutThisProjectSection = document.getElementById(
      "heroAboutThisProject"
    );
    if (heroSection || aboutThisProjectSection) {
      dispatch(colorTransparent());
    } else {
      dispatch(colorGreen());
    }
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (heroSection) {
        const heroSectionHeight = heroSection.offsetHeight;
        dispatch(colorTransparent());
        if (scrollPosition >= heroSectionHeight) {
          dispatch(colorGreen());
        }
      }

      if (aboutThisProjectSection) {
        const aboutThisProjectSectionHeight =
          aboutThisProjectSection.offsetHeight;
        dispatch(colorTransparent());
        if (scrollPosition >= aboutThisProjectSectionHeight) {
          dispatch(colorGreen());
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowCart = () => {
    dispatch(toggleShowCart());
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    toast.success("See you soon!");
    navigate("/");
  };

  const handleLogin = () => {
    dispatch(showLogin());
    dispatch(hideRegister());
  };

  const handleToggleMenu = () => {
    setExpandedNavbar(!expandedNavbar);
  };

  const handleCloseMenu = (e) => {
    if (
      e.target.id !== "categoryDropdown" &&
      e.target.id !== "dropdown-basic"
    ) {
      setExpandedNavbar(false);
    }
  };
  const avatarOk = () => {
    if (typeof user.image === "string" && user.image.includes("https://")) {
      return user.image;
    } else {
      return `${process.env.REACT_APP_IMAGES_URL}/${user.image}`;
    }
  };
  return (
    <>
      <Navbar
        expanded={expandedNavbar}
        expand="lg"
        className={`fixed-top py-0 justify-content-end ${
          styles.bgNavbarMobile
        } ${navbarColor ? styles.bgNavbarScrolled : styles.bgNavbar}`}
      >
        <Container>
          <Navbar.Brand href="/">
            <div className="d-flex align-items-center">
              <img
                className={`me-2 ${styles.navbarBrand}`}
                src="/img/logoEquipo.png"
                alt="logo Rooted - Botanic Boutique"
              />
              <div
                className={`d-flex align-items-baseline text-decoration-none pt-1 ${styles.colorText}`}
              >
                <h5 className="text-logo me-2 h2">Rooted</h5>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggleMenu}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-auto py-2 ps-4 ps-lg-0 d-flex align-items-lg-center"
              onClick={(e) => handleCloseMenu(e)}
            >
              <Link
                className="text-decoration-none h5 fw-semibold mb-3  me-3 mb-lg-0 text-white pe-3"
                to="/"
              >
                Home
              </Link>

              <Link to="/about-us">
                <button className="mt-0 me-4 mb-3 mb-lg-0 primaryButton">
                  About This Project
                </button>
              </Link>

              <div className="text-decoration-none h5 mb-0 fw-semibold py-2 me-2 pe-3 mb-3 mb-lg-0">
                <div className="dropdown">
                  <div
                    className={`dropdown-toggle clickable text-decoration-none h5 mb-0 fw-semibold text-white`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="categoryDropdown"
                  >
                    Categories
                  </div>
                  <ul className={`dropdown-menu mt-3`}>
                    <li className={`dropdown-item lh-sm`}>
                      <Link
                        className={`text-decoration-none  ${styles.colorText}`}
                        to={`/categories`}
                      >
                        All
                      </Link>
                    </li>
                    {categories.map((category) => (
                      <li key={category.id} className={`dropdown-item lh-sm`}>
                        <Link
                          className={`text-decoration-none  ${styles.colorText}`}
                          to={`/categories/${category.id}/${category.slug}`}
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {user ? (
                // <Link
                //   to="/wishlist"
                //   className={`${styles.colorText} ${styles.heart} me-4 mb-3 mb-lg-0`}
                // >
                //   {" "}
                //   <AiOutlineHeart />
                // </Link>
                <Link
                  to="/wishlist"
                  className="text-decoration-none h5 fw-semibold mb-3  me-2 mb-lg-0 text-white pe-3"
                >
                  {" "}
                  Favorites{" "}
                </Link>
              ) : (
                <></>
              )}

              <div className="d-flex align-items-center">
                {!user && (
                  <Link
                    className={`text-decoration-none h5 fw-semibold mb-0 ${styles.colorText} pe-3 me-4 mb-2 mb-lg-0`}
                    to="/"
                    onClick={handleLogin}
                  >
                    Sign In
                  </Link>
                )}
                {user && (
                  <>
                    <Nav
                      id="dropdownUser"
                      className={` d-flex text-white align-items-center me-2 mb-2 mb-lg-0 `}
                    >
                      <NavDropdown
                        id="dropdown-basic"
                        size="sm"
                        drop="down"
                        title={
                          user.image ? (
                            <img
                              className={`rounded-circle me-0 position-relative ${styles.imgUser}`}
                              src={avatarOk()}
                              alt="User Avatar"
                            />
                          ) : (
                            <i
                              className={`bi bi-person-circle text-white h4 ms-3 me-4  position-absolute`}
                            ></i>
                          )
                        }
                      >
                        <NavDropdown.Item href={`/profile/${user && user.id}`}>
                          Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/orders">
                          My shopping
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={handleLogout}>
                          Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </>
                )}
              </div>
              <Nav.Link
                className="position-relative me-3"
                onClick={handleShowCart}
              >
                <BsCart className={`text-white ${styles.heart}`} />
                <Badge
                  bg="danger"
                  pill="true"
                  className={`${styles.badgeCart} position-absolute`}
                >
                  {cart.length}
                </Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
