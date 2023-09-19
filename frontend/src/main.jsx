import ReactDOM from "react-dom/client";
import App from "./App";
import MainLayout from "./layouts/MainLayout";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <MainLayout>
      <App />
    </MainLayout>
);
