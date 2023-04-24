import axios from "axios";
import styles from "./CollectionCategory.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function CollectionCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BACK_URL}/categories`,
      });
      setCategories(response.data);
    };
    getCategories();
  }, []);

  return (
    <>
      <section className="bgMain">
        <div className="container py-5" id="categories">
          <h4 className="ms-2 text-center h1 mt-3">Shop by Collection</h4>
          <p className="text-center mb-4">There's a special plant for you</p>
          <div className="row mt-4">
            <AliceCarousel
              responsive={{
                0: { items: 1 },
                768: { items: 2 },
                1200: { items: 3 },
              }}
              dotsDisabled={true}
              buttonsDisabled={false}
              keyboardNavigation={true}
              infinite={true}
              className="d-flex justify-content-center"
              renderPrevButton={() => (
                <div>
                  <i
                    className={`custom-prev-btn bi bi-caret-right ${styles.arrowCarousel}`}
                  ></i>
                </div>
              )}
              renderNextButton={() => (
                <div>
                  <i
                    className={`custom-next-btn bi bi-caret-left ${styles.arrowCarousel}`}
                  ></i>
                </div>
              )}
            >
              {categories.map((category) => (
                <div key={category.id} className="mb-2">
                  <Link
                    className="text-decoration-none card-link"
                    to={`/categories/${category.id}/${category.slug}`}
                  >
                    <Card
                      className={`border-0 w-100 rounded shadow card-container ${styles.cardCollection}`}
                    >
                      <Card.Img
                        variant="top"
                        src={`${process.env.REACT_APP_IMAGES_URL}/${category.img}`}
                        className={`${styles.imgCollectionCategory} object-fit-cover`}
                      />
                      <Card.Body>
                        <Card.Title>{category.name}</Card.Title>
                        <Card.Text className={styles.cardText}>
                          {category.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              ))}
            </AliceCarousel>
          </div>
        </div>
      </section>
    </>
  );
}
