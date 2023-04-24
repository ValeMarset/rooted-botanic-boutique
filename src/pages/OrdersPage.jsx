import React from "react";
import NavbarComponent from "../components/Generic/NavbarComponent";
import OrdersComponent from "../components/Orders/OrdersComponent";
import Cart from "../components/Generic/Cart";
import Footer from "../components/Generic/Footer";
export default function OrderPage() {
  return (
    <div>
      <NavbarComponent />
      <OrdersComponent />
      <Cart />
      <Footer />
    </div>
  );
}
