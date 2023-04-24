import axios from "axios";
import styles from "./Register.module.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { hideRegister } from "../../../redux/registerViewReducer";
import { showLogin } from "../../../redux/loginViewReducer";
import { Form } from "react-bootstrap";
import toast from "react-hot-toast";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("image", image);

    try {
      const response = await axios({
        headers: {
          "Content-Type": "multipart/form-data",
        },
        url: `${process.env.REACT_APP_BACK_URL}/users`,
        method: "post",
        data: formData,
      });

      setFirstname("");
      setLastname("");
      setEmail("");
      setAddress("");
      setPhone("");
      setPassword("");
      setImage(undefined);

      toast.success("Register successfull!");
      handleLogin();
    } catch (error) {
      toast.error("User already exists");
    }
  };

  const handleLogin = () => {
    dispatch(showLogin());
    dispatch(hideRegister());
  };

  return (
    <>
      <section className={`d-flex justify-content-center text-white`}>
        <div className={`${styles.containerRegister}`}>
          <div className="border-0 shadow rounded">
            <div className="d-flex justify-content-center mb-3">
              <h1>Register</h1>
            </div>
            <Form className="" onSubmit={handleRegister}>
              <div className="d-flex">
                <Form.Group className="mb-3 me-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    id="firstname"
                    className="me-3 rounded-0"
                    required
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    id="lastname"
                    className="me-3 rounded-0"
                    required
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
                  />
                </Form.Group>
              </div>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  name="address"
                  id="address"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  className="rounded-0"
                />
              </Form.Group>
              <div className="d-flex">
                <Form.Group className="mb-3 me-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Your Phone"
                    name="phone"
                    id="phone"
                    className="me-3 rounded-0"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </Form.Group>
                <Form.Group className="mb-3 ">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    id="emailRegister"
                    className="me-3 rounded-0"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Form.Group>
              </div>

              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="rounded-0"
                />
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="passwordRegister"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="rounded-0"
                />
              </Form.Group>

              <div className="d-grid gap-2 mt-4">
                <button className="primaryButton" type="submit">
                  Register
                </button>
                <p className="mt-3">
                  If you have an account{" "}
                  <Link
                    onClick={handleLogin}
                    className="text-decoration-none ms-1"
                  >
                    Login here!
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
