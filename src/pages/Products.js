import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <Hero hero="productosHero">
        <Banner title="nuestros productos">
          <Link to="/" className="btn-primary">
            volver a inicio
          </Link>
        </Banner>
      </Hero>
      
    </>
  );
};

export default Products;
