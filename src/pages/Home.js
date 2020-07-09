import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Mundo Patín UY"
          subtitle="Todo para elegir del mundo del patín en Uruguay">
          <Link to="/productlist" className="btn-primary">
            Nuestros productos
          </Link>
        </Banner>
      </Hero>
      
    </>
  );
};

export default home;
