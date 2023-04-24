import React from "react";
import NavbarComponent from "../components/Generic/NavbarComponent";
import AllProducts from "../components/AllProducts/AllProducts";
import Footer from "../components/Generic/Footer";
import Cart from "../components/Generic/Cart";
import ScrollToTop from "../components/Generic/ScrollToTop";

export default function AllProductsPage() {
  return (
    <div>
      <ScrollToTop />
      <NavbarComponent />
      <AllProducts />
      <Footer />
      <Cart />
    </div>
  );
}
