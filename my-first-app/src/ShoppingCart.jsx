import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  // Exevutes when the component is mounted
  constructor(props) {
    // console.log("constructor of shopping cart");
    super(props); // calling super class's construcor

    // Initialization of the state
    this.state = {
      products: [],
    };
  }

  render() {
    // console.log("constructor of render");

    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  // render ends here
  // Executes after constructor and render method {includes life cycle of child components, if any} of current component
  componentDidMount = async () => {
    // console.log("constructor of didmount");
    // fetch data from data source

    var response = await fetch("http://localhost:5050/products", {
      method: "GET",
    });
    var prods = await response.json();
    this.setState({ products: prods });
  };

  componentDidUpdate(prevProps, prevStage) {
    console.log("Update", prevProps, prevStage);
  }

  // executes whe user clicks "+"
  handleIncrement = (product, maxValue) => {
    // get index of selected element
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      // update the state pf current component
      this.setState({ products: allProducts });
    }
  };

  // executes whe user clicks "-"
  handleDecrement = (product, minValue) => {
    // get index of selected element
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      // update the state pf current component
      this.setState({ products: allProducts });
    }
  };

  // executes when user clicks delete (X) button
  handleDelete = (product) => {
    // get index of the product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure to delete?")) {
      // delete product based on index
      allProducts.splice(index, 1);

      // update the state pf current component
      this.setState({ products: allProducts });
    }
  };
}
