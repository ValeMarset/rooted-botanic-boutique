import axios from "axios";
import styles from "./WishListComponent.module.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { wishList } from "../../redux/userReducer";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
//import { ColorRing } from "react-loader-spinner";

export default function WishListComponent() {
  const user = useSelector((state) => state.user);
  const [wishItemsPage, setWishItemsPage] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getWishItems = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "get",
        url: `${process.env.REACT_APP_BACK_URL}/wish-list`,
      });
      setWishItemsPage(response.data);
    };
    getWishItems();
  }, [user]);

  const updateWishItems = async (item) => {
    try {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "patch",
        url: `${process.env.REACT_APP_BACK_URL}/wish-list`,
        data: item,
      });
      dispatch(wishList(response.data));
    } catch (error) {
      navigate(`/error404`);
      toast.error("Something went wrong");
    }
  };

  const handleDelete = (item) => {
    updateWishItems(item);
  };

  return (
    <>
      <div className="container" id={styles.contenedor}>
        <h3 className="ms-lg-5 my-5">Wish List</h3>

        {wishItemsPage.length <= 0 ? (
          <div className="mb-4">
            <h3 className="text-center mb-4">
              You have not added any plants to your wish list yet!
            </h3>
            <div className="d-flex justify-content-center">
              <img
                src="img/wishList.svg"
                alt="wish"
                className={`my-3 ${styles.imgWish} `}
              />
            </div>
          </div>
        ) : (
          wishItemsPage.map((item) => (
            <div key={item.id}>
              <div className="row border-0 shadow p-3 mb-5">
                <div className="col-md-2 d-flex justify-content-center">
                  <Link
                    className="text-decoration-none text-dark"
                    to={`/categories/${item.categoryId}/${item.category.slug}/${item.id}/${item.slug}`}
                  >
                    <img
                      className={styles.image}
                      src={`${process.env.REACT_APP_IMAGES_URL}/${item.img}`}
                      alt={`${item.name} Image`}
                    />
                  </Link>
                </div>
                <div className="col-md-8 ms-3">
                  <p className="h4">{item.name}</p>
                  <p className="h2">USD {item.price}</p>
                  <button
                    className={`mt-3 deleteButton px-3`}
                    onClick={() => handleDelete(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
