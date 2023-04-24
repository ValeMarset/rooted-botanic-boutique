import axios from "axios";
import styles from "./Categories.module.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { newProducts } from "../../redux/productsReducer";
import { wishList } from "../../redux/userReducer";
import { showLogin } from "../../redux/loginViewReducer";
import { hideRegister } from "../../redux/registerViewReducer";
import Card from "react-bootstrap/Card";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import toast from "react-hot-toast";

export default function Products() {
  const { categoryId } = useParams();
  const user = useSelector((state) => state.user);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductsByCategory = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_BACK_URL}/categories-products/${categoryId}`,
        });
        setProductsByCategory(response.data);
        dispatch(newProducts(response.data));
        setLoading(true);
        setTimeout(() => setLoading(false), 1500);
      } catch (error) {
        setLoading(false);
        toast.error("Something went wrong");
      }
    };
    getProductsByCategory();
  }, [categoryId]);

  useEffect(() => {
    setFilteredProducts(productsByCategory);
  }, [productsByCategory]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_BACK_URL}/categories`,
        });
        setCategories(response.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
    getCategories();
  }, []);

  const patchWishItems = async (product) => {
    try {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "patch",
        url: `${process.env.REACT_APP_BACK_URL}/wish-list`,
        data: product,
      });
      dispatch(wishList(response.data));
    } catch (error) {
      navigate(`/error404`);
      toast.error("Something went wrong");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    const regex = new RegExp(`${e.target.value}`, "i");
    const display = productsByCategory.filter((productsDisplayed) => {
      return regex.test(productsDisplayed.name);
    });
    if (searchInput.length >= 0) {
      setFilteredProducts(display);
    } else {
      setFilteredProducts(productsByCategory);
    }
  };

  const handleWishList = (e, product) => {
    e.preventDefault();
    patchWishItems(product);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(showLogin());
    dispatch(hideRegister());
    toast("Please login to perform this action.", {
      icon: "⚠️",
    });
    navigate(`/`);
  };

  return (
    <>
      <div className={styles.bgProducts}>
        <div className="container">
          <div className={`${styles.searchBar} d-flex align-items-baseline `}>
            <i className="bi bi-search h5 ms-4 px-2"></i>
            <input
              className="mb-4 form-control ms-3"
              type="search"
              placeholder="Alocasia Reginula ..."
              onChange={handleChange}
              value={searchInput}
            />
          </div>

          {loading ? (
            <div className="spinner-container">
              <Player
                autoplay
                speed={3}
                loop
                src="https://assets8.lottiefiles.com/private_files/lf30_d7svjitp.json"
                style={{ height: "300px", width: "300px" }}
              >
                <Controls visible={false} />
              </Player>
            </div>
          ) : (
            <div
              className={` d-flex flex-wrap justify-content-lg-around justify-content-center  `}
            >
              {filteredProducts.map((product) => (
                <div key={product.id}>
                  <Link
                    className="text-decoration-none card-link"
                    to={`/categories/${product.categoryId}/${product.category.slug}/${product.id}/${product.slug}`}
                  >
                    <div className=" d-flex justify-content-center mb-4 position-relative card-container ms-3 me-3">
                      <Card
                        className={`shadow border-0 mb-5 ${styles.cardStyle}`}
                      >
                        <div className="position-absolute pe-4 end-0 h5">
                          <h5
                            onClick={(e) =>
                              user ? handleWishList(e, product) : handleLogin(e)
                            }
                            className={
                              user && user.wishList.includes(product.id)
                                ? `${styles.heartLiked} mt-2`
                                : `${styles.heart} mt-2`
                            }
                          >
                            {user && user.wishList.includes(product.id) ? (
                              <BsFillHeartFill />
                            ) : (
                              <AiOutlineHeart />
                            )}
                          </h5>
                        </div>
                        <Card.Img
                          className={
                            product.stock === 0
                              ? `${styles.cardProductImg} ${styles.filteredCard}`
                              : `${styles.cardProductImg}`
                          }
                          variant="top"
                          src={`${process.env.REACT_APP_IMAGES_URL}/${product.img}`}
                        />
                        <div className={`${styles.customShape}`}>
                          <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                              className={`${styles.customShapeFill}`}
                            ></path>
                          </svg>
                        </div>
                        <Card.Body>
                          <Card.Title
                            id="product-font"
                            className={`text-center ${styles.cardName}`}
                          >
                            {product.name.length > 10
                              ? product.name.slice(0, 20) + "..."
                              : product.name}
                          </Card.Title>
                          <Card.Text
                            id="product-font"
                            className={`text-center mt-2 ${styles.cardName}`}
                          >
                            {product.summary.length > 30
                              ? product.summary.slice(0, 80) + "..."
                              : product.summary}
                            <span className="d-block text-center fw-semibold mt-3">
                              USD {product.price}
                            </span>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
