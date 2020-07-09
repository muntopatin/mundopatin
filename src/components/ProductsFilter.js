import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const ProductsFilter = ({ products }) => {
  // react hooks
  const context = useContext(ProductContext);
  const {
    handleChange,
    type,
  } = context;

  // get unique types
  let types = getUnique(products, "type");
  // add all
  types = ["todos", ...types];
  // map to js
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  
  return (
    <section className="filter-container">
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">tipo de producto</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        
      </form>
    </section>
  );
};

export default ProductsFilter;
