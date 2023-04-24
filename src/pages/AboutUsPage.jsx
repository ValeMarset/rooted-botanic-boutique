import React from "react";
import NavbarComponent from "../components/Generic/NavbarComponent";
import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Generic/Footer";
import Cart from "../components/Generic/Cart";
import ScrollToTop from "../components/Generic/ScrollToTop";

export default function AboutUsPage() {
  return (
    <div>
      <ScrollToTop />
      <NavbarComponent />
      <AboutUs />
      <Footer />
      <Cart />
    </div>
  );
}
