import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
import Client from './contentful';


const ProductContext = React.createContext();
//Provider

//Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        sortedProducts: [],
        loading: true,
        type: "todos",
        price: 0,
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    //detData
    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: 'datospatines'
            });

            let tempProducts = [];
            response.items.forEach(item => {
                const singleItem = { ...item };
                let tmp = {
                    id: singleItem.fields.id,
                    type: singleItem.fields.type,
                    title: singleItem.fields.title,
                    img: singleItem.fields.img.fields.file.url,
                    price: singleItem.fields.price,
                    company: singleItem.fields.company,
                    info: singleItem.fields.info,
                    inCart: false,
                    count: 0,
                    total: 0

                }
                tempProducts = [...tempProducts, tmp];
            });
            this.setState(() => {
                return { products: tempProducts,
                    sortedProducts: tempProducts 
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getData()
        //this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return {
                products: tempProducts,
                sortedProducts: tempProducts
            }

        });
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product };
        });
    }
    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        },
            () => {
                this.addTotals();
            });
    };
    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true }
        })
    }
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        })
    };

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(() => { return { cart: [...tempCart] } }, () => { this.addTotals() }
        )

    };

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if (product.count === 0) {
            this.removeItem(id);
        }
        else {
            product.total = product.count * product.price;
            this.setState(
                () => {
                    return { cart: [...tempCart] };
                },
                () => {
                    this.addTotals();
                }
            );
        }

    };

    removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        this.setState(() => {
            return {
                cart: [...tempCart],
                procuts: [...tempProducts]
            }
        }, () => {
            this.addTotals();
        }
        )
    };

    clearCart = () => {
        this.setState(() => {
            return { cart: [] };
        }, () => {
            this.setProducts();
            this.addTotals();
        });

    };

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.22;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total

            }

        })
    }


    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState(
            {
                [name]: value
            },
            this.filterProducts
        );
    };
    filterProducts = () => {
        let {
            products,
            type,
        } = this.state;

        let tempProducts = [...products];
        // transform values
        // filter by type
        if (type !== "todos") {
            tempProducts = tempProducts.filter(product => product.type === type);
        }
        this.setState({
            sortedProducts: tempProducts
        });
    };



    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                handleChange: this.handleChange,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
            }}>
                {this.props.children}

            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
//export { ProductProvider, ProductConsumer }
export { ProductProvider, ProductConsumer, ProductContext };