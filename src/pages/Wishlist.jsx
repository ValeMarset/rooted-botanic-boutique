import React from "react";
import WishListComponent from "../components/WishList/WishListComponent";
import NavbarComponent from "../components/Generic/NavbarComponent";
import Footer from "../components/Generic/Footer";
import Cart from "../components/Generic/Cart";
export default function Wishlist() {
  return (
    <>
      <NavbarComponent />
      <WishListComponent />
      <Footer />
      <Cart />
    </>
  );
}
