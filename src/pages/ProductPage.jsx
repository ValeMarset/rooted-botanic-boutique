import React from "react";
import NavbarComponent from "../components/Generic/NavbarComponent";
import Product from "../components/Product/Product";
import Cart from "../components/Generic/Cart";
import Footer from "../components/Generic/Footer";
import ScrollToTop from "../components/Generic/ScrollToTop";

export default function ProductPage() {
  return (
    <div>
      <ScrollToTop />
      <NavbarComponent />
      <Product />
      <Cart />
      <Footer />
    </div>
  );
}
