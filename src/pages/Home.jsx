import React, { useState } from "react";
import NavbarComponent from "../components/Generic/NavbarComponent";
import Hero from "../components/Home/Hero";
import TrendingProducts from "../components/Home/TrendingProducts";
import Garden from "../components/Home/Garden";
import CollectionCategory from "../components/Home/CollectionCategory";
import SucculentsBanner from "../components/Home/SucculentsBanner";
import Footer from "../components/Generic/Footer";
import Cart from "../components/Generic/Cart";
import ScrollToTop from "../components/Generic/ScrollToTop";
import CyclePlant from "../components/Home/CyclePlant";
import StillUnknown from "../components/Home/StillUnknown";
import OurService from "../components/Home/OurService";
import ModalHome from "../components/Home/ModalHome";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  return (
    <>
      {loading ? (
        <div className="spinner-container">
          <Player
            autoplay
            speed={3}
            loop
            src="https://assets8.lottiefiles.com/private_files/lf30_d7svjitp.json"
            style={{ height: "300px", width: "300px" }}
          >
            <Controls visible={false} />
          </Player>
        </div>
      ) : (
        <div>
          <ScrollToTop />
          <ModalHome />
          <NavbarComponent />
          <Hero />
          <CyclePlant />
          <TrendingProducts />
          <StillUnknown />
          <Garden />
          <OurService />
          <CollectionCategory />
          <SucculentsBanner />

          <Footer />
          <Cart />
        </div>
      )}
    </>
  );
}
