import axios from "axios";
import styles from "./TrendingProducts.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newProducts } from "../../redux/productsReducer";
import { wishList } from "../../redux/userReducer";
import { showLogin } from "../../redux/loginViewReducer";
import { hideRegister } from "../../redux/registerViewReducer";
import Card from "react-bootstrap/Card";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import toast from "react-hot-toast";

export default function TrendingProducts() {
  const user = useSelector((state) => state.user);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getTrendingProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BACK_URL}/trending`,
      });
      setTrendingProducts(response.data);
      dispatch(newProducts(response.data));
    };
    getTrendingProducts();
  }, []);

  const patchWishItems = async (trending) => {
    try {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "patch",
        url: `${process.env.REACT_APP_BACK_URL}/wish-list`,
        data: trending,
      });
      dispatch(wishList(response.data));
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleWishList = (e, trending) => {
    e.preventDefault();
    patchWishItems(trending);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(showLogin());
    dispatch(hideRegister());
    toast("Please login to perform this action.", {
      icon: "⚠️",
    });
    document.getElementById("heroSection").scrollIntoView();
  };

  return (
    <>
      <div className="bgMain">
        <div className="container mb-5 py-5" id="trendings">
          <h4 className="mb-5 ms-2 text-center h1 mt-3">Trending Products</h4>
          <AliceCarousel
            responsive={{
              0: { items: 1 },
              768: { items: 2 },
              992: { items: 3 },
            }}
            dotsDisabled={true}
            buttonsDisabled={false}
            keyboardNavigation={true}
            infinite={true}
            className="d-flex justify-content-center"
            renderPrevButton={() => (
              <div className="custom-prev-btn">
                <i className={`bi bi-caret-right ${styles.arrowCarousel}`}></i>
              </div>
            )}
            renderNextButton={() => (
              <div className="custom-next-btn">
                <i className={`bi bi-caret-left ${styles.arrowCarousel}`}></i>
              </div>
            )}
          >
            {trendingProducts.map((trending) => (
              <div
                key={trending.id}
                className="card-container d-flex justify-content-center"
              >
                <Link
                  className="text-decoration-none card-link"
                  to={`/categories/${trending.categoryId}/${trending.category.slug}/${trending.id}/${trending.slug}`}
                >
                  <Card
                    className={`me-3 mb-3 rounded shadow ${styles.cardStyle}`}
                  >
                    <div className="position-absolute top-0 end-0 p-2 h5">
                      <h5
                        onClick={(e) =>
                          user ? handleWishList(e, trending) : handleLogin(e)
                        }
                        className={
                          user && user.wishList.includes(trending.id)
                            ? `${styles.heartLiked} mt-2`
                            : `${styles.heart} mt-2`
                        }
                      >
                        {user && user.wishList.includes(trending.id) ? (
                          <BsFillHeartFill />
                        ) : (
                          <AiOutlineHeart />
                        )}
                      </h5>
                    </div>
                    <Card.Img
                      variant="top"
                      src={`${process.env.REACT_APP_IMAGES_URL}/${trending.img} `}
                      className={`${styles.cardProductImg}`}
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
                        className="text-center"
                        id={styles.trendingname}
                      >
                        {trending.name}
                      </Card.Title>
                      <Card.Text className="text-center">
                        USD {trending.price}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </AliceCarousel>
        </div>
      </div>
    </>
  );
}
