import Categories from "./components/Categories/Categories";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Policy from "./components/Layout/Policy/Policy";
import Products from "./components/Products/Products";
import Sliders from "./components/Slider/Sliders";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Sliders />
      <Categories />
      <Products />
      <Policy />
      <Footer />
    </div>
  );
}

export default App;
