import React, { Component } from 'react';
import Product from './Product';
import ProductsFilter from "./ProductsFilter";
import { ProductConsumer } from '../context'


export default class Productlist extends Component {

    render() {


        return (
            <React.Fragment>
                <ProductConsumer>
                    {value => {
                        return <ProductsFilter products={value.products} />;
                    }}
                </ProductConsumer>


                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.sortedProducts.map(product => {
                                        return <Product key={product.id}
                                            product={product} />;
                                    });
                                }}
                            </ProductConsumer>
                        </div>

                    </div>

                </div>

            </React.Fragment>
            //
        );
    }
}