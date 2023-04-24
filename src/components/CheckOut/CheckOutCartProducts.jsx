import styles from "./CheckOutCartProduct.module.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, addProduct } from "../../redux/cartReducer";

export default function CheckOut() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemoveProductFromCart = (productId) => {
    dispatch(removeProduct({ id: productId }));
  };
  const handleAddProductToCart = (productId, productStock) => {
    dispatch(addProduct({ id: productId, stock: productStock }));
  };

  const totalPriceProducts = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  const tax = totalPriceProducts * 0.22;
  const shipping = 5;
  const total = totalPriceProducts + tax + shipping;

  return (
    <>
      {cart.map((product) => (
        <div
          className=" pb-2 d-flex px-lg-3 pt-2 pt-lg-0 border-bottom mb-4"
          key={product.id}
        >
          <div className="w-25">
            <img
              className={`${styles.imgCart} w-100`}
              src={process.env.REACT_APP_IMAGES_URL + "/" + product.img}
              alt={product.name}
            />
          </div>
          <div className="w-100 ms-3">
            <div className="d-flex justify-content-between fw-semibold mb-3">
              <span>{product.name}</span>
              <span>USD {product.price}</span>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <p className="me-0">Quantity</p>
              <div
                className={`d-flex align-items-center justify-content-between border  ${styles.containerQuantity} `}
              >
                <small onClick={() => handleRemoveProductFromCart(product.id)}>
                  <i
                    className={`${styles.colorIcons} clickable bi bi-dash h3`}
                  ></i>
                </small>

                <small> {product.quantity}</small>
                <small
                  onClick={() =>
                    handleAddProductToCart(product.id, product.stock)
                  }
                >
                  <i
                    className={`${styles.colorIcons} clickable bi bi-plus h3`}
                  ></i>
                </small>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-between px-3">
        <h6 className="fw-semibold">Subtotal</h6>
        <p className="me-0">USD {totalPriceProducts.toFixed(2)}</p>
      </div>{" "}
      <div>
        <div className="d-flex justify-content-between px-3">
          <h6 className="fw-semibold">Tax</h6>
          <p>USD {tax.toFixed(2)}</p>
        </div>
        <div className="d-flex justify-content-between px-3">
          <h6 className="fw-semibold">Shipping</h6>
          <p>USD {shipping.toFixed(2)}</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="d-flex justify-content-between align-items-center px-3">
        <h6 className="fw-semibold">Total</h6>
        <p>USD {total.toFixed(2)}</p>
      </div>
    </>
  );
}
