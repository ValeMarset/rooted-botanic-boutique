import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CategoriesPage from "./pages/CategoriesPage";
import AllProductsPage from "./pages/AllProductsPage";
import CheckOutPage from "./pages/CheckOutPage";
import AboutUsPage from "./pages/AboutUsPage";
import { useSelector, useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import OrdersPage from "./pages/OrdersPage";
import Error404 from "./pages/Error404";
import Wishlist from "./pages/Wishlist";
import SucculentsPage from "./pages/SucculentsPage";
import UserProfilePage from "./pages/UserProfilePage";
import { useEffect } from "react";
import { showModal } from "./redux/pageReducer";

export default function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const isAutenticated = () => {
    if (user) {
      return <CheckOutPage />;
    } else {
      return <Home />;
    }
  };

  function resetModal() {
    dispatch(showModal());
  }

  useEffect(() => {
    window.addEventListener("unload", resetModal);

    return () => {
      window.removeEventListener("unload", resetModal);
    };
  }, []);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/succulents" element={<SucculentsPage />} />
          <Route
            path="/categories/:categoryId/:categorySlug/:productId/:productSlug"
            element={<ProductPage />}
          />
          <Route
            path="/categories/:categoryId/:categorySlug"
            element={<CategoriesPage />}
          />
          <Route path="/categories" element={<AllProductsPage />} />
          <Route path="/profile/:userId" element={<UserProfilePage />} />
          <Route path="/checkout" element={isAutenticated()} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}
