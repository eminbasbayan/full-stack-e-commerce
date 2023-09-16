import "./App.css";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Policy from "./components/Layout/Policy/Policy";
import Sliders from "./components/Slider/Sliders";

function App() {
  return (
    <div>
      <Header />
      <Sliders />
      <Policy />
      <Footer />
    </div>
  );
}

export default App;
