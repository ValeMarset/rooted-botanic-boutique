import React from "react";
import NavbarComponent from "../components/Generic/NavbarComponent";
import Cart from "../components/Generic/Cart";
import Footer from "../components/Generic/Footer";
import CheckOut from "../components/CheckOut/CheckOut";
import ScrollToTop from "../components/Generic/ScrollToTop";

export default function CheckOutPage() {
  return (
    <div>
      <ScrollToTop />
      <NavbarComponent />
      <CheckOut />
      <Cart />
      <Footer />
    </div>
  );
}
