import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeProduct, addProduct } from "../../redux/cartReducer";
import { toggleShowCart } from "../../redux/cartViewReducer";
import { showLogin } from "../../redux/loginViewReducer";
import { hideRegister } from "../../redux/registerViewReducer";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const viewCart = useSelector((state) => state.cartView);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseCart = () => {
    dispatch(toggleShowCart());
  };

  const handleCartItems = (e) => {
    if (cart.length <= 0) {
      e.preventDefault();
      navigate(`/error404`);
      toast.error("No items in cart");
    } else {
      handleCloseCart();
    }
  };

  const handleLogin = (e) => {
    if (cart.length <= 0) {
      e.preventDefault();
      toast.error("No items in cart");
    } else {
      dispatch(showLogin());
      toast("Please login!");
      dispatch(hideRegister());
      handleCloseCart();
    }
  };

  const handleRemoveProductFromCart = (productId) => {
    dispatch(removeProduct({ id: productId }));
  };

  const handleAddProductToCart = (productId, productStock) => {
    dispatch(addProduct({ id: productId, stock: productStock }));
  };

  const totalPriceProducts = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <>
      <Offcanvas show={viewCart} onHide={handleCloseCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column justify-content-between">
          <div>
            {cart.length <= 0 && (
              <div className={`text-center p-3 ${styles.cartEmpty}`}>
                <i className="bi bi-cart-dash fw-semibold h3"></i>
                <p className="fw-semibold mt-3">Your cart is empty!</p>
                <p>Please click on that thing you want!</p>
              </div>
            )}
            {cart &&
              cart.map((product) => (
                <div className="border-bottom d-flex mb-3 p-1" key={product.id}>
                  <div className="w-25">
                    <Link
                      to={`/categories/${product.categoryId}/${product.category.slug}/${product.id}/${product.slug}`}
                      onClick={handleCloseCart}
                    >
                      <img
                        className={`${styles.imgCart} w-100`}
                        src={`${process.env.REACT_APP_IMAGES_URL}/${product.img}`}
                        alt={product.name}
                      />
                    </Link>
                  </div>
                  <div className="w-100 ms-3">
                    <div className="d-flex justify-content-between fw-semibold mb-3">
                      <span className="w-75">{product.name}</span>
                      <span>USD {product.price}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="me-0">Quantity</p>
                      <div
                        className={`d-flex me-4 align-items-center justify-content-between border ${styles.containerQuantity}`}
                      >
                        <small
                          onClick={() =>
                            handleRemoveProductFromCart(product.id)
                          }
                        >
                          <i
                            className={`${styles.colorIcons} bi bi-dash h3`}
                          ></i>
                        </small>

                        <small> {product.quantity}</small>
                        <small
                          onClick={() =>
                            handleAddProductToCart(product.id, product.stock)
                          }
                        >
                          <i
                            className={`${styles.colorIcons} bi bi-plus h3`}
                          ></i>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="p-2">
            <div>
              <div className="d-flex justify-content-between">
                <span className="">Subtotal</span>
                <span className="fw-semibold">USD {totalPriceProducts}</span>
              </div>
              {!user && (
                <Link
                  onClick={handleLogin}
                  to="/"
                  className="secondaryButton d-block text-decoration-none"
                >
                  Checkout
                </Link>
              )}
              {user && (
                <Link
                  to="/checkout"
                  onClick={handleCartItems}
                  className="secondaryButton d-block text-decoration-none"
                >
                  Checkout
                </Link>
              )}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
