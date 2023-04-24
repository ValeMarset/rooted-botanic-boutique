import styles from "./AboutUs.module.css";
import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import {
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaReact,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import {
  SiJavascript,
  SiMysql,
  SiSequelize,
  SiSupabase,
  SiRedux,
  SiAxios,
  SiJsonwebtokens,
  SiVercel,
} from "react-icons/si";

export default function AboutUs() {
  return (
    <div className="pb-5">
      <section
        className={`${styles.aboutUsImg} position-relative my-5 mt-0`}
        id="heroAboutThisProject"
      >
        <div
          className={`rounded-3 position-absolute top-0 d-flex justify-content-center align-items-center flex-column ${styles.aboutUsImgText}`}
        >
          <h1 className="text-start display-4 mb-5">
            Welcome to Rooted Botanic Boutique!
          </h1>
          <div className="row container g-0">
            <div className="col-12 col-lg-6">
              <p className="mb-5 lh-3 pe-lg-4">
                Rooted Botanic Boutique is an e-commerce project consisting of
                three interconnected subprojects: the online store, the{" "}
                <Link
                  className={` ${styles.linkAdmin} `}
                  target="_blanck"
                  to="https://rooted-panel-admin.vercel.app/"
                >
                  admin site
                </Link>
                , and an efficient back-end server. Our online store is
                developed with React and communicates with our back-end server
                through AJAX calls using the Axios library.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <p className={`ps-lg-5 lh-3 ${styles.borderBanner} pt-lg-0 pt-5`}>
                The back-end server, based on Node.js and utilizing the
                Sequelize ODM, manages an SQL database to store products, users,
                administrators, and more. Additionally, our{" "}
                <Link
                  className={` ${styles.linkAdmin} `}
                  target="_blanck"
                  to="https://rooted-panel-admin.vercel.app/"
                >
                  admin site
                </Link>{" "}
                allows you to perform CRUD operations on products, categories,
                and administrators, as well as access a comprehensive log of
                store activity.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <section className="container my-5 py-5">
          <div className="row d-flex justify-content-between text-center">
            <div className="col-lg-4 d-flex justify-content-center justify-content-lg-start mb-5 mb-lg-3">
              <Card
                id={styles.Card}
                className={`border-0 shadow ${styles.wrapper} ${styles.cardStyle}`}
              >
                <Card.Body>
                  <div className={`h-100 p-2 ${styles.cardBorder}`}>
                    <Card.Title>Duration</Card.Title>
                    <div className="d-flex flex-column justify-content-between h-75">
                      <Card.Text className="mt-2">
                        We dedicated 3 weeks and over 8 hours per day to create
                        Rooted Botanic Boutique! Every detail has been carefully
                        considered, and every line of code has been written with
                        dedication.
                      </Card.Text>
                      <Card.Text>
                        {" "}
                        <i className="h1 bi bi-clock mt-6"></i>
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 d-flex justify-content-center mb-5 mb-lg-3">
              <Card
                id={styles.Card}
                className={`border-0 shadow ${styles.wrapper} ${styles.cardStyle}`}
              >
                <Card.Body>
                  <div className={`h-100 p-2 ${styles.cardBorder}`}>
                    <Card.Title>Technologies</Card.Title>
                    <div className="d-flex flex-column justify-content-between h-75">
                      <Card.Text className="mt-2">
                        For Rooted's Front End, we developed a React App using
                        the Axios and Redux libraries. For our Back-End, we
                        created a REST API with Node.js and Express.js, as well
                        as using a mySQL database .
                      </Card.Text>
                      <Card.Text>
                        {" "}
                        <i className="h1 bi bi-laptop mt-6"></i>
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end mb-5 mb-lg-3">
              <Card
                id={styles.Card}
                className={`border-0 shadow ${styles.wrapper} ${styles.cardStyle}`}
              >
                <Card.Body>
                  <div className={`h-100 p-2 ${styles.cardBorder}`}>
                    <Card.Title>Task division</Card.Title>
                    <div className="d-flex flex-column justify-content-between h-75 ">
                      <Card.Text className="mt-2">
                        {" "}
                        In order to effectively split work between all members
                        of our team, we collaborated using Git and scheduled
                        daily meetings. We planned and organized our project
                        using Trello and Notion.{" "}
                      </Card.Text>
                      <Card.Text>
                        <i className="h1 bi bi-journals mt-6"></i>
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>

        <section className="container my-5 py-5 px-5 px-lg-0">
          <div className="row">
            <div className="col-lg-6 mb-5 d-flex">
              <img
                src="img/mer.png"
                alt="image"
                className={`${styles.imgMER}`}
              />
            </div>
            <div className="col-lg-6 mt-3">
              <h3 className="mb-3">MER Diagram</h3>
              <p className="lh-lg h6">
                Our project is backed by a solid database design. We have
                created a detailed Entity-Relationship Model (MER Model) that
                represents the structure and relationships of our entities in
                the database. This diagram has helped us ensure an efficient and
                scalable implementation of our database, allowing us to offer a
                seamless and secure shopping experience to our fictional
                customers.
              </p>
            </div>
            <div className="col-lg-6 order-lg-2 my-5 my-lg-0">
              <img
                src="img/viewPrev.jpeg"
                alt=""
                className={`${styles.imgScreenHome} rounded`}
              />
            </div>
            <div className="col-lg-6 mt-3">
              <h3 className="mb-3">Responsive design</h3>
              <p className="lh-lg h6">
                In our online store, customers can explore our wide selection of
                products on the homepage, both on desktop and mobile devices.
                With an intuitive user interface and a modern, attractive
                design, our customers can easily add products to their shopping
                cart and simulate the purchase process quickly and effortlessly.
                Furthermore, our responsive version is optimized for smaller
                screens, providing a comfortable and accessible shopping
                experience on any device.
              </p>
            </div>
          </div>
        </section>

        <section className={`my-5 py-5 text-center ${styles.wrapper}`}>
          <div className="container">
            <h2 className="mb-5">Technologies</h2>
            {/* Desktop */}
            <div className="d-none d-lg-flex flex-wrap">
              <div className="d-flex justify-content-between w-100 mb-5">
                <div className="me-4">
                  <FaHtml5
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>HTML 5</small>
                </div>
                <div className="me-4">
                  <FaCss3Alt
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>CSS 3</small>
                </div>
                <div className="me-4">
                  <SiJavascript
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>JavaScript</small>
                </div>
                <div className="me-4">
                  <FaReact
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>React</small>
                </div>
                <div className="me-4">
                  <SiRedux
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>Redux</small>
                </div>
                <div className="me-4">
                  <FaNode
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>Node JS</small>
                </div>
                <div className="me-4">
                  <SiMysql
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>SQL</small>
                </div>
              </div>
              <div className="d-flex justify-content-between w-100">
                <div className="me-4">
                  <SiSequelize
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>Sequelize</small>
                </div>
                <div className="me-4">
                  <SiAxios
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>Axios</small>
                </div>
                <div className="me-4">
                  <SiJsonwebtokens
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>Json Web Token</small>
                </div>
                <div className="me-4">
                  <SiSupabase
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>Supabase</small>
                </div>
                <div className="me-4">
                  <SiVercel
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>Vercel</small>
                </div>
                <div className="me-4">
                  <BsGit
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>Git</small>
                </div>
                <div className="me-4">
                  <FaGithub
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <span>GitHub</span>
                </div>
              </div>
            </div>
            {/* Mobile */}
            <div className="d-lg-none row justify-content-center">
              <div className="col-4 col-lg-3">
                <div className="d-flex flex-column align-items-center mb-4">
                  <FaHtml5
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>HTML 5</small>
                </div>
                <div className="d-flex flex-column align-items-center mb-4">
                  <FaCss3Alt
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>CSS 3</small>
                </div>
                <div className="d-flex flex-column align-items-center mb-4">
                  <SiJavascript
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>JavaScript</small>
                </div>
                <div className="d-flex flex-column align-items-center mb-4">
                  <FaBootstrap
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>Bootstrap</small>
                </div>
                <div className="d-flex flex-column align-items-center mb-4">
                  <FaReact
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>React</small>
                </div>
              </div>
              <div className="col-4 col-lg-3">
                <div className="d-flex flex-column align-items-center mb-4">
                  <SiRedux
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>Redux</small>
                </div>
                <div className="d-flex flex-column align-items-center mb-4">
                  <FaNode
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>Node JS</small>
                </div>
                <div className="d-flex flex-column align-items-center mb-4">
                  <SiMysql
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>SQL</small>
                </div>
                <div className="d-flex flex-column align-items-center mb-4">
                  <SiSequelize
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>Sequelize</small>
                </div>
                <div className="d-flex flex-column align-items-center mb-4">
                  <SiAxios
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>Axios</small>
                </div>
              </div>
              <div className="col-4 col-lg-3">
                <div className="d-flex flex-column align-items-center mb-4">
                  <SiJsonwebtokens
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>JWT</small>
                </div>
                <div className="d-flex flex-column align-items-center mb-4">
                  <SiSupabase
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>Supabase</small>
                </div>
                <div className="d-flex flex-column align-items-center mb-4 ">
                  <SiVercel
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>Vercel</small>
                </div>
                <div className="d-flex flex-column align-items-center mb-4">
                  <BsGit
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <small>Git</small>
                </div>
                <div className="d-flex flex-column align-items-center mb-4">
                  <FaGithub
                    className={`${styles.iconsTecnologies} d-block display-3 mb-2`}
                  />
                  <span>GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container my-5 py-5 px-md-0 px-3">
          <h2 className="text-center mb-lg-5 pb-lg-3">Our team</h2>
          <div className="d-flex flex-wrap justify-content-around pt-5">
            <Card
              className={`align-items-center ${styles.cardSize} position-relative shadow`}
            >
              <Card.Img
                variant="top rounded-circle"
                className={`object-fit-cover w-75 mt-3 position-absolute mb-5 ${styles.imgPosition}`}
                src="img/team/joaquin-oliba.jpeg"
              />
              <Card.Body className="text-center d-flex flex-column justify-content-end">
                <Card.Title className="mt-3 mb-2 fw-semibold">
                  Joaquín Oliba
                </Card.Title>
                <p>Full Stack Developer Jr</p>
                <Card.Text>
                  <Link to="https://www.linkedin.com/in/joaquin-oliba/">
                    <i
                      className={`bi bi-linkedin h2 me-3 mt-5 ${styles.colorLinkedin}`}
                    ></i>
                  </Link>
                  <Link
                    className="text-decoration-none text-dark"
                    to="https://github.com/joaquinoliba"
                  >
                    <i
                      className={`${styles.colorGitHub} bi bi-github h2 mt-5`}
                    ></i>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className={`align-items-center ${styles.cardSize} position-relative shadow`}
            >
              <Card.Img
                variant="top rounded-circle"
                className={`object-fit-cover w-75 mt-3 position-absolute mb-5 ${styles.imgPosition}`}
                src="img/team/cristina-racedo.jpeg"
              />
              <Card.Body className="text-center d-flex flex-column justify-content-end">
                <Card.Title className="mt-3 mb-2 fw-semibold">
                  Cristina Racedo
                </Card.Title>
                <p>Full Stack Developer Jr</p>
                <Card.Text>
                  {" "}
                  <Link to="https://www.linkedin.com/in/cristina-racedo-0a00551a4/">
                    <i
                      className={`bi bi-linkedin h2 me-3 mt-5 ${styles.colorLinkedin}`}
                    ></i>
                  </Link>
                  <Link
                    className="text-decoration-none text-dark"
                    to="https://github.com/simonabadcat"
                  >
                    <i
                      className={`${styles.colorGitHub} bi bi-github h2 mt-5`}
                    ></i>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className={`align-items-center ${styles.cardSize} position-relative shadow`}
            >
              <Card.Img
                variant="top rounded-circle"
                className={`object-fit-cover w-75 mt-3 position-absolute mb-5 ${styles.imgPosition}`}
                src="img/team/mateo-mendez.jpg"
              />
              <Card.Body className="text-center d-flex flex-column justify-content-end">
                <Card.Title className="mt-3 mb-2 fw-semibold">
                  Mateo Méndez
                </Card.Title>
                <p>Full Stack Developer Jr</p>
                <Card.Text>
                  <Card.Text className="d-flex justify-content-start">
                    <div className="m-auto">
                      <Link to="https://www.linkedin.com/in/mateo-méndez/">
                        <i
                          className={`bi bi-linkedin h2 me-3 mt-5 ${styles.colorLinkedin}`}
                        ></i>
                      </Link>
                      <Link
                        className="text-decoration-none text-dark"
                        to="https://github.com/mateo-mendez"
                      >
                        <i
                          className={`${styles.colorGitHub} bi bi-github h2 mt-5`}
                        ></i>
                      </Link>
                    </div>
                  </Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className={`align-items-center ${styles.cardSize} position-relative shadow`}
            >
              <Card.Img
                variant="top rounded-circle"
                className={`object-fit-cover w-75 mt-3 position-absolute mb-5 ${styles.imgPosition}`}
                src="img/team/valentina-marset.jpg"
              />
              <Card.Body className="text-center d-flex flex-column justify-content-end">
                <Card.Title className="mt-3 mb-2 fw-semibold">
                  {" "}
                  Valentina Marset
                </Card.Title>

                <p>Full Stack Developer Jr</p>
                <Card.Text>
                  {" "}
                  <Card.Text className="d-flex justify-content-start">
                    <div className="m-auto">
                      <Link to="https://www.linkedin.com/in/valentina-marset/">
                        <i
                          className={`bi bi-linkedin h2 me-3 mt-5 ${styles.colorLinkedin}`}
                        ></i>
                      </Link>
                      <Link
                        className="text-decoration-none text-dark"
                        to="https://github.com/ValeMarset"
                      >
                        <i
                          className={`${styles.colorGitHub} bi bi-github h2 mt-5`}
                        ></i>
                      </Link>
                    </div>
                  </Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className={`align-items-center ${styles.cardSize} position-relative shadow`}
            >
              <Card.Img
                variant="top rounded-circle"
                className={`object-fit-cover w-75 mt-3 position-absolute mb-5 ${styles.imgPosition}`}
                src="img/team/ignacio-navarro.png"
              />
              <Card.Body className="text-center d-flex flex-column justify-content-end">
                <Card.Title className="mt-3 mb-2 fw-semibold">
                  Ignacio Navarro
                </Card.Title>

                <p>Full Stack Developer Jr</p>

                <Card.Text>
                  <Card.Text className="d-flex justify-content-start">
                    <div className="m-auto">
                      <Link to="https://www.linkedin.com/in/ignacio-navarro-viana/">
                        <i
                          className={`bi bi-linkedin h2 me-3 mt-5 ${styles.colorLinkedin}`}
                        ></i>
                      </Link>
                      <Link
                        className="text-decoration-none text-dark"
                        to="https://github.com/inavarroviana"
                      >
                        <i
                          className={`${styles.colorGitHub} bi bi-github h2 mt-5`}
                        ></i>
                      </Link>
                    </div>
                  </Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
