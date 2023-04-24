import axios from "axios";
import styles from "./CheckOut.module.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../../redux/cartReducer";
import { useNavigate } from "react-router-dom";
import CheckOutCartProducts from "./CheckOutCartProducts";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";

export default function CheckOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const [email, setEmail] = useState(user.email);
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);

  const createOrder = async () => {
    try {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "post",
        url: `${process.env.REACT_APP_BACK_URL}/orders`,
        data: {
          products: cart,
          email: email,
          firstname: firstname,
          lastname: lastname,
          address: address,
          phone: phone,
        },
      });
      const newOrder = response.data;

      await updateStock(newOrder);
    } catch (error) {
      navigate(`/error404`);
      toast.error("Product out of stock");
    }
  };

  const updateStock = async (newOrder) => {
    try {
      await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "patch",
        url: `${process.env.REACT_APP_BACK_URL}/orders`,
        data: newOrder,
      });
      dispatch(emptyCart());
      toast.success(`Thank you for choosing us ${user.firstname}!!!`);
      navigate(`/orders`);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    if (cart.length <= 0) {
      toast.error("No order placed");
    } else {
      createOrder();
    }
  };

  return (
    <>
      <div className={` ${styles.sectionCheckout} container pt-1`}>
        <Form onSubmit={(e) => handleConfirmOrder(e)}>
          <div className="row m-5">
            <div className="col-12 col-lg-6 pe-lg-4">
              <div className="d-flex align-items-baseline mt-4">
                <i
                  className={`bi bi-person-lines-fill me-2 h4 ${styles.colorIcons}`}
                ></i>
                <h5 className="fw-bold mb-3">Contact Information:</h5>
              </div>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  id="emailCheckout"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-0"
                />
              </Form.Group>
              <hr className="my-4" />
              <div className="d-flex align-items-baseline">
                <i className={`bi bi-truck me-2 h3 ${styles.colorIcons}`}></i>
                <h5 className="fw-bold mb-3">Shipping Information</h5>
              </div>
              <div className="d-inline-block w-50 ">
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    required
                    name="firstname"
                    id="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    type="text"
                    placeholder="Enter First Name"
                    className="rounded-0"
                  />
                </Form.Group>
              </div>
              <div className="d-inline-block w-50">
                <Form.Group className="mb-3 ms-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    required
                    name="lastname"
                    id="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    type="text"
                    placeholder="Enter Last Name"
                    className="rounded-0"
                  />
                </Form.Group>
              </div>
              <Form.Group className="mb-3 ">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  name="address"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="ej: Bvr.España 2253"
                  className="rounded-0"
                />
              </Form.Group>

              <div className="d-inline-block w-50 ">
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter City"
                    defaultValue="Montevideo"
                    className="rounded-0"
                  />
                </Form.Group>
              </div>
              <div className="d-inline-block w-50">
                <Form.Group className="mb-3 ms-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Country"
                    defaultValue="Montevideo"
                    className="rounded-0"
                  />
                </Form.Group>
              </div>
              <div className="d-inline-block w-50 ">
                <Form.Group className="mb-3">
                  <Form.Label>State / Province</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Montevideo"
                    defaultValue="Montevideo"
                    className="rounded-0"
                  />
                </Form.Group>
              </div>
              <div className="d-inline-block w-50">
                <Form.Group className="mb-3 ms-3">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="11200"
                    defaultValue="11200"
                    className="rounded-0"
                  />
                </Form.Group>
              </div>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  required
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="096 110 111"
                  className="rounded-0"
                />
              </Form.Group>
              <hr className="my-4" />

              <div className="d-flex align-items-baseline">
                <i
                  className={`bi bi-lock-fill me-2 h4 ${styles.colorIcons}`}
                ></i>
                <h5 className="fw-bold mb-4">Payment</h5>
              </div>
              <Form.Group className="d-flex">
                <div className="d-flex">
                  <Form.Check
                    type="radio"
                    label="PayPal"
                    className="me-2"
                    name="paymentMethod"
                  />
                  <i className={`bi bi-paypal me-4 ${styles.colorIcons}`}></i>
                </div>
                <div className="d-flex">
                  <Form.Check
                    type="radio"
                    label="Credit Card"
                    className="me-2"
                    name="paymentMethod"
                  />
                  <i
                    className={`bi bi-credit-card me-4 ${styles.colorIcons}`}
                  ></i>
                </div>
                <div className="d-flex">
                  <Form.Check
                    type="radio"
                    label="Transfer"
                    className="me-2"
                    name="paymentMethod"
                  />
                  <i
                    className={`bi bi-person-lock me-4 ${styles.colorIcons}`}
                  ></i>
                </div>
              </Form.Group>
              <Form.Group className="mb-3 mt-3">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="1234 1234 1234 1234"
                  required
                  className="rounded-0"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Cardholder Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Maria Perez"
                  required
                  className="rounded-0"
                />
              </Form.Group>
              <div className="d-inline-block w-50 ">
                <Form.Group className="mb-3">
                  <Form.Label>Expiration Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM/YY"
                    required
                    className="rounded-0"
                  />
                </Form.Group>
              </div>
              <div className="d-inline-block w-50">
                <Form.Group className="mb-3 ms-3">
                  <Form.Label>Security Code</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="CVC"
                    required
                    className="rounded-0"
                  />
                </Form.Group>
              </div>
            </div>
            <div className="col-12 col-lg-6 ps-lg-4 h-100">
              <div className="d-flex align-items-baseline mt-4 mb-3">
                <i
                  className={`bi bi-card-text me-2 h4 ${styles.colorIcons}`}
                ></i>
                <h5 className="fw-bold mb-3 mt-4 mt-lg-0">Order Summary</h5>
              </div>
              <div className="border p-4 w-100 h-50">
                <CheckOutCartProducts />

                <hr className="my-4" />
                <div className="d-grid gap-2 mt-4">
                  <button className="secondaryButton " type="sumbit">
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}
