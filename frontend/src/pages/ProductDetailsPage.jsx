import { Fragment } from "react";
import Header from "../components/Layout/Header/Header";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Footer from "../components/Layout/Footer/Footer";

const ProductDetailsPage = () => {
  return (
    <Fragment>
      <Header />
      <ProductDetails />
      <Footer />
    </Fragment>
  );
};

export default ProductDetailsPage;
