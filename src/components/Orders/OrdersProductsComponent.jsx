import React from "react";
import styles from "./OrdersComponent.module.css";

export default function OrdersProductsComponent({ order }) {
  return (
    <>
      {order.products.map((product) => (
        <div key={product.id} className={` ${styles.product}`}>
          <div className="row p-3">
            <div className=" col-md-2 d-flex justify-content-center">
              <img
                src={`${process.env.REACT_APP_IMAGES_URL}/${product.productImage}`}
                alt="Product Image"
                className="w-100 mb-4"
              />
            </div>
            <div className="col-md-4">
              <p>{product.productName}</p>
              <p>USD {product.price}</p>
            </div>
            <div className="col-md-3">
              <p>Delivery Addres:</p>
              <p>{order.address}</p>
            </div>
            <div className="col-md-3">
              <p>Shipping Details:</p>
              <p>{order.email}</p>
              <p>{order.phone}</p>
            </div>
            <hr />
          </div>
        </div>
      ))}
    </>
  );
}
