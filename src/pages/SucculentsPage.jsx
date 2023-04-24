import React from "react";
import NavbarComponent from "../components/Generic/NavbarComponent";
import Footer from "../components/Generic/Footer";
import Cart from "../components/Generic/Cart";
import Succulents from "../components/Home/Succulents";
import ScrollToTop from "../components/Generic/ScrollToTop";

function SucculentsPage() {
  return (
    <div>
      <ScrollToTop />
      <NavbarComponent />
      <Succulents />
      <Footer />
      <Cart />
    </div>
  );
}

export default SucculentsPage;
