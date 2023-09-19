import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import ShopPage from "./pages/ShopPage";
// import ProductDetailsPage from "./pages/ProductDetailsPage";
// import BlogPage from "./pages/BlogPage";
// import BlogDetailsPage from "./pages/BlogDetailsPage";
// import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
// import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}  />
    </Routes>
  );
}

export default App;
