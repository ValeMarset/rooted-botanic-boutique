import axios from "axios";
import styles from "./Product.module.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toggleShowCart } from "../../redux/cartViewReducer";
import { addProduct } from "../../redux/cartReducer";
import { wishList } from "../../redux/userReducer";
import { showLogin } from "../../redux/loginViewReducer";
import { hideRegister } from "../../redux/registerViewReducer";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import toast from "react-hot-toast";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function Product() {
  const { productId, productSlug } = useParams();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const productsArray = useSelector((state) => state.products);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleShowCart = () => {
    dispatch(toggleShowCart());
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_BACK_URL}/products/${productId}`,
        });
        setProduct(response.data);
        setLoading(true);
        setTimeout(() => setLoading(false), 500);
      } catch (error) {
        setLoading(false);
        toast.error("Something went wrong");
      }
    };
    getProduct();
    // eslint-disable-next-line
  }, [productSlug]);

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
      toast.error("Something went wrong");
    }
  };

  const handleWishList = (product) => {
    patchWishItems(product);
  };

  const handleLogin = () => {
    dispatch(showLogin());
    dispatch(hideRegister());
    toast("Please login to perform this action.", {
      icon: "⚠️",
    });
    navigate(`/`);
  };

  const handleAddProductToCart = () => {
    dispatch(addProduct(product));
    const cartProduct = cart.find((item) => item.id === product.id);
    if (!cartProduct && product.stock > 0) {
      handleShowCart();
    } else if (cartProduct && product.stock > cartProduct.quantity) {
      handleShowCart();
    }
  };

  const lastIndex = productsArray.length - 1;

  const handlePreviousPage = () => {
    const productIndex = productsArray.findIndex(
      (item) => item.id === product.id
    );
    if (productIndex === 0) {
      navigate(
        `/categories/${productsArray[lastIndex].categoryId}/${productsArray[lastIndex].category.slug}/${productsArray[lastIndex].id}/${productsArray[lastIndex].slug}`
      );
    } else {
      navigate(
        `/categories/${productsArray[lastIndex].categoryId}/${
          productsArray[lastIndex].category.slug
        }/${productsArray[productIndex - 1].id}/${
          productsArray[productIndex - 1].slug
        }`
      );
    }
  };

  const handleNextPage = () => {
    const productIndex = productsArray.findIndex(
      (item) => item.id === product.id
    );
    if (productIndex === lastIndex) {
      navigate(
        `/categories/${productsArray[lastIndex].categoryId}/${productsArray[lastIndex].category.slug}/${productsArray[0].id}/${productsArray[0].slug}`
      );
    } else {
      navigate(
        `/categories/${productsArray[lastIndex].categoryId}/${
          productsArray[lastIndex].category.slug
        }/${productsArray[productIndex + 1].id}/${
          productsArray[productIndex + 1].slug
        }`
      );
    }
  };

  return (
    product && (
      <>
        <div className="container" id={styles.contenedor}>
          {loading ? (
            <div className="spinner-container">
              <Player
                autoplay
                speed={5}
                loop
                src="https://assets8.lottiefiles.com/private_files/lf30_d7svjitp.json"
                style={{ height: "300px", width: "300px" }}
              >
                <Controls visible={false} />
              </Player>
            </div>
          ) : (
            <div className="row g-0 justify-content-between">
              <div className=" col-lg-5 col-xl-6 text-lg-center mb-5 d-flex justify-content-between align-items-center  ">
                <i
                  className={`h4 bi bi-caret-left mx-lg-3 ${styles.arrowNextPrev}`}
                  onClick={() => handlePreviousPage()}
                ></i>
                <img
                  src={`${process.env.REACT_APP_IMAGES_URL}/${product.img}`}
                  alt={product.name}
                  id={styles.imgproduct}
                  className={
                    product.stock === 0
                      ? `rounded shadow me-lg-5 ${styles.filteredCard}`
                      : `rounded shadow me-lg-5`
                  }
                />
                <i
                  className={`h4 bi bi-caret-right d-lg-none  ${styles.arrowNextPrev}`}
                  onClick={() => handleNextPage()}
                ></i>
              </div>

              <div className={`col-lg-5 col-xl-6 d-flex align-items-center `}>
                <div className="ms-3 pe-lg-5 ">
                  <h2 className="text-start mb-4">{product.name}</h2>
                  <h5>USD {product.price}</h5>
                  <p className="mb-4">
                    Stock: {product.stock}
                    {product.stock > 1 ? ` units` : ` unit`}
                  </p>
                  <p><span>About this plant:</span> <br /> {product.description}</p>
                  <p>Upkeep: {product.upkeep}</p>

                  <div className="d-flex align-items-center mt-5 mb-5 pb-5 pb-lg-0">
                    <button
                      className={`mt-1 me-4 secondaryButton ${styles.secondaryButtonSize}`}
                      onClick={() => handleAddProductToCart()}
                    >
                      Add to bag{" "}
                    </button>
                    <h5
                      onClick={(e) =>
                        user ? handleWishList(product) : handleLogin(e)
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
                </div>

                <i
                  className={`h4 bi bi-caret-right d-none d-lg-block ${styles.arrowNextPrev}`}
                  onClick={() => handleNextPage()}
                ></i>
              </div>
            </div>
          )}
        </div>
      </>
    )
  );
}
