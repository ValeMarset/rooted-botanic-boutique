import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/pageReducer";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./ModalHome.module.css";
import { useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function ModalHome() {
  const show = useSelector((state) => state.modalView);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClose = () => dispatch(closeModal());

  const handleReset = (e) => {
    setLoading(true); // establece loading en true al hacer clic en el botón
    const getReset = async () => {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_BACK_URL}/database/reset`,
      });
      dispatch(closeModal());
      window.scrollTo(0, 0);
      setTimeout(() => setLoading(false), 10000);
    };
    getReset();
    // eslint-disable-next-line
  };

  return (
    <>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          centered
          animation
          className="text-white"
        >
          <Modal.Header
            closeButton
            className={` ${styles.backgroundModalHome} rounded-0
            `}
          >
            <Modal.Title className="p-2">
              Welcome to Rooted Botanic Boutique!
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className={` ${styles.backgroundModalHome} `}>
            <div className="row">
              <div className="col-12 col-6 text-center mb-4">
                <img
                  src="img/programming.svg"
                  alt="programming"
                  className={` ${styles.imgProgramming} `}
                />
              </div>
              <div className="col-12  col-6">
                <div className="px-3">
                  <p className="px-2">
                    This project is the result of our dedication in the Hack
                    Academy coding bootcamp. It consists of an e-commerce
                    website and an admin panel, both of which communicate with
                    our backend. The bootcamp is an intensive 3-month, full-time
                    program with over{" "}
                    <span className="fw-bold">600 hours of dedication</span> ,
                    focused on practical learning and the philosophy of{" "}
                    <span className="fw-bold">learning by doing</span> .
                  </p>
                  <p className="p-2">
                    We have applied the concepts and techniques learned in the
                    bootcamp, such as user interface design and development,
                    backend functionalities, and integration of external APIs.
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center mt-4 ">
              <h5 className="px-4">
                So that you have a better experience before you start browsing:
              </h5>
              {loading ? (
                <div className="d-flex justify-content-between mx-3">
                  <Player
                    autoplay
                    loop
                    src="https://assets8.lottiefiles.com/private_files/lf30_d7svjitp.json"
                    style={{ height: "150px", width: "150px" }}
                  >
                    <Controls visible={false} />
                  </Player>
                </div>
              ) : (
                <button
                  className="btn btn-danger rounded-0 ms-lg-5 text-center"
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => {
                      handleReset();
                      setLoading(false);
                    }, 5000);
                  }}
                >
                  Reset database!
                </button>
              )}
            </div>
            <hr />
            <h3 className="ps-4 mb-4 mb-lg-2">Administrator Panel</h3>
            <div className=" mb-4 d-flex justify-content-between">
              <h5 className="px-4">
                To enter the{" "}
                <Link
                  target="_blanck"
                  to="https://rooted-panel-admin.vercel.app/"
                  className={`fw-semibold   ${styles.linkDashboard} `}
                >
                  administrator panel
                </Link>
              </h5>
              <img
                src="img/dashboard.svg"
                alt="programming"
                className={` pe-4 ${styles.imgDashboard} `}
              />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
