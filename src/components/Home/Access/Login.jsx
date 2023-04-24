import axios from "axios";
import styles from "./Login.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../redux/userReducer";
import { hideLogin } from "../../../redux/loginViewReducer";
import { showRegister } from "../../../redux/registerViewReducer";
import { Form } from "react-bootstrap";
import toast from "react-hot-toast";

export default function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_BACK_URL}/user-token`,
        data: {
          email: inputEmail,
          password: inputPassword,
        },
      });

      toast.success(`Welcome ${response.data.user.firstname}!!!`);
      dispatch(login({ token: response.data.token, ...response.data.user }));
      dispatch(hideLogin());
      setInputEmail("");
      setInputPassword("");
      navigate("/");
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };

  const handleRegister = () => {
    dispatch(showRegister());
    dispatch(hideLogin());
  };

  return (
    <>
      <section className="d-flex justify-content-center">
        <div className={`${styles.contenedorLogin}`}>
          <div className={`border-0 shadow rounded ${styles.sizelogin}`}>
            <div className="d-flex justify-content-center mb-3">
              <h1>Login</h1>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Email</Form.Label>
                <Form.Control
                  required
                  type="text"
                  className="rounded-0"
                  id="emailLogin"
                  name="email"
                  placeholder="Email"
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="form-label">Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  className="rounded-0"
                  id="passwordLogin"
                  name="password"
                  placeholder="Password"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                />
              </Form.Group>
              <div className="d-grid gap-2 mt-4">
                <button className="primaryButton" type="submit">
                  Login
                </button>
                <p className="mt-3">
                  If you dont have an account{" "}
                  <Link
                    onClick={handleRegister}
                    to="/"
                    className="text-decoration-none ms-2"
                  >
                    Register here!
                  </Link>
                </p>
              </div>
              <div className="mt-4">
                <h6 className="fw-semibold">Mok Data</h6>
                <p>
                  To simplify access to the application, the following test
                  users are provided:
                </p>
                <span className="fw-semibold">Sign in as user:</span>
                <div className="mt-2">
                  <span className="me-3 fw-semibold">Email:</span>
                  <span>simonakeller@gmail.com</span>
                </div>
                <div className="mt-2">
                  <span className="me-3 fw-semibold">Password:</span>
                  <span>1234</span>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
