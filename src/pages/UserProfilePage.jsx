import React from "react";
import NavbarComponent from "../components/Generic/NavbarComponent";
import Footer from "../components/Generic/Footer";
import Cart from "../components/Generic/Cart";
import UserProfile from "../components/UserProfile/UserProfile";
import ScrollToTop from "../components/Generic/ScrollToTop";

function UserProfilePage() {
  return (
    <div>
      <ScrollToTop />
      <NavbarComponent />
      <UserProfile />
      <Footer />
      <Cart />
    </div>
  );
}

export default UserProfilePage;
