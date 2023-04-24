import React from "react";
import NavbarComponent from "../components/Generic/NavbarComponent";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Generic/Footer";
import Cart from "../components/Generic/Cart";
import ScrollToTop from "../components/Generic/ScrollToTop";

export default function ProductsPage() {
  return (
    <div>
      <ScrollToTop />
      <NavbarComponent />
      <Categories />
      <Footer />
      <Cart />
    </div>
  );
}
