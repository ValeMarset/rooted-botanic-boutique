import axios from "axios";
import styles from "../UserProfile/UserProfile.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { update } from "../../redux/userReducer";
import { Form, Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function UserProfile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFirstname(user.firstname);
    setLastname(user.lastname);
    setEmail(user.email);
    setAddress(user.address);
    setPhone(user.phone);
    setImage(user.image);
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("image", image);

    const handleSave = (user) => {
      dispatch(update(user));
    };

    const token = user.token;
    try {
      const updateUser = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "multipart/form-data",
        },
        url: `${process.env.REACT_APP_BACK_URL}/users/${user.id}`,
        method: "patch",
        data: formData,
      });
      handleSave({ token, ...updateUser.data });
      setLoading(true);
      setTimeout(() => setLoading(false), 1500);
      setTimeout(
        () => toast.success("Your changes are successfully saved"),
        1600
      );
    } catch (error) {
      setLoading(true);
      setTimeout(() => setLoading(false), 1500);
      setTimeout(() => toast.error("Something went wrong"), 1600);
    }
  };

  return (
    user && (
      <div
        className={`d-flex align-items-center justify-content-center ps-5 py-3 w-100 container  mt-5`}
      >
        <div className="w-75 pt-5">
          <div>
            <div className="row border-bottom mb-4 pb-4 align-items-center  mx-1">
              <div className="col-12">
                {" "}
                <h1>{user.firstname} </h1>
              </div>
            </div>

            <Form className="" onSubmit={handleUpdate}>
              <Form.Group className="border-bottom mb-4 pb-4 ms-3 me-3 d-flex">
                <div className="row w-100 g-0">
                  <div className="col-6">
                    <Form.Label className="mb-3 mb-lg-0">First Name</Form.Label>
                  </div>
                  <div className="col-12 col-lg-6">
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      id="firstname"
                      className="me-3 rounded-0 "
                      required
                      onChange={(e) => setFirstname(e.target.value)}
                      value={firstname}
                    />
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="border-bottom mb-4 pb-4 ms-3 me-3">
                <div className="row w-100 g-0">
                  <div className="col-6">
                    <Form.Label className="mb-3 mb-lg-0">Last Name</Form.Label>
                  </div>
                  <div className="col-12 col-lg-6">
                    {" "}
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
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="border-bottom mb-4 pb-4 ms-3 me-3">
                <div className="row g-0">
                  <div className="col-6">
                    {" "}
                    <Form.Label className="mb-3 mb-lg-0">Address</Form.Label>
                  </div>
                  <div className="col-12 col-lg-6">
                    {" "}
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
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="border-bottom mb-4 pb-4 ms-3 me-3">
                <div className="row g-0">
                  <div className="col-6">
                    <Form.Label className="mb-3 mb-lg-0">Phone</Form.Label>
                  </div>
                  <div className="col-12 col-lg-6">
                    <Form.Control
                      type="text"
                      placeholder="Your Phone"
                      name="phone"
                      id="phone"
                      className="rounded-0"
                      required
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                  </div>
                </div>
              </Form.Group>
              <Form.Group className="border-bottom mb-4 pb-4 ms-3 me-3 ">
                <div className="row g-0">
                  <div className="col-6">
                    {" "}
                    <Form.Label className="mb-3 mb-lg-0">Email</Form.Label>
                  </div>
                  <div className="col-12 col-lg-6">
                    {" "}
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      id="emailRegister"
                      className="me-3 rounded-0"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="border-bottom mb-4 pb-4 ms-3 me-3">
                <div className="row g-0">
                  <div className="col-6 ">
                    {" "}
                    <Form.Label className="mb-3 mb-lg-0">Image</Form.Label>
                  </div>
                  <div className="col-12 col-lg-6 d-flex align-items-center">
                    {" "}
                    <img
                      className={`top rounded-circle shadow-sm  ${styles.imageSize} me-3`}
                      src={`${process.env.REACT_APP_IMAGES_URL}/${user.image}`}
                      alt={user.firstname}
                    />
                    <Form.Control
                      type="file"
                      name="image"
                      id="image"
                      onChange={(e) => setImage(e.target.files[0])}
                      className="rounded-0"
                    />
                  </div>
                </div>
              </Form.Group>

              <div className="d-flex justify-content-end">
                {loading && (
                  <div>
                    <Player
                      autoplay
                      speed={3}
                      loop
                      src="https://assets8.lottiefiles.com/private_files/lf30_d7svjitp.json"
                      style={{ height: "90px", width: "90px" }}
                    >
                      <Controls visible={false} />
                    </Player>
                  </div>
                )}
                <button
                  className=" secondaryButton mt-4 mb-4 pe-5 ps-5 me-3"
                  type="submit"
                >
                  Save changes
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    )
  );
}
