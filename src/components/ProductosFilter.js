import React from "react";
import { useContext } from "react";
import { ProductConsumer } from '../context';
import { ProductContext } from '../context';
// get all unique values
const getUnique = (items, value) => {
  // return ["chico", "grande"]
  return [...new Set(items.map(item => item[value]))];
};

const ProductosFilter = ({ productos }) => {

  // react hooks
  const context = useContext(ProductContext);
  const {
    handleChange,
    type,
    price,
  } = context;

  // get unique types
  let types = getUnique(productos, "type");
  console.log("dentro de productoFilter");
  console.log(productos);
  // add all
  types = ["all", ...types];
  // map to jsx
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

export default ProductosFilter;
