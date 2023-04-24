import axios from "axios";
import styles from "./OrdersComponent.module.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrdersProductsComponent from "./OrdersProductsComponent";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function OrdersComponent() {
  const [orders, setOrders] = useState(null);
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "get",
        url: `${process.env.REACT_APP_BACK_URL}/user-orders`,
      });
      setOrders(response.data);
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };
    getOrders();
    // eslint-disable-next-line
  }, []);

  const progress = (order) => {
    if (order.statusId === "1") {
      return 20;
    } else if (order.statusId === "2") {
      return 60;
    } else if (order.statusId === "3") {
      return 100;
    }
  };

  return (
    <>
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
        orders && (
          <>
            <div className="container" id={styles.contenedor}>
              <h3 className="py-4">Orders</h3>
              <div>
                {orders.map((order) => (
                  <div key={order.id}>
                    <div className="shadow border-0 mb-5">
                      <div>
                        <OrdersProductsComponent order={order} />
                        <div className="px-5 pb-5">
                          <h4>Delivery Status:</h4>
                          <div className="ms-5 ps-md-5 d-flex justify-content-between mx-lg-3 mb-3">
                            <i
                              className={`ms-lg-5 ps-lg-5 bi bi-box-seam h1 ${styles.colorIcons} `}
                            ></i>
                            <i
                              className={`bi bi-truck h1 ${styles.colorIcons} `}
                            ></i>
                            <i
                              className={`bi bi-person-check-fill h1 ${styles.colorIcons} `}
                            ></i>
                          </div>
                          <div>
                            <ProgressBar
                              variant="success"
                              now={progress(order)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )
      )}
    </>
  );
}
