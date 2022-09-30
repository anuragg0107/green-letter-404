import "./styles.css";
import AllRoutes from "./Components/Routes/AllRoutes";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer";
import SingleProduct from "./Components/Shops/SingleProduct";
import ShopAll from "./Components/Shops/ShopAll";
import ProductSlider from "./Components/Shops/ProductSlider";
import Checkout from "./Components/Checkout/Checkout";
import Bag from "./Components/Navbar/Bag";
import MyAccount from "./Components/Login/MyAccount";
import Signup from "./Components/Login/Signup";
export default function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <AllRoutes />
      <Footer /> */}
      {/* <Bag /> */}
      <Signup />
      {/* <MyAccount /> */}
      {/* <SingleProduct /> */}
      {/* <Navbar />
      <AllRoutes /> */}
      {/* <Checkout /> */}
      {/* <ShopAll /> */}
      {/* <Footer /> */}
      {/* <ProductSlider /> */}
      {/* <Checkout /> */}
      {/* <Bag /> */}
    </div>
  );
}
