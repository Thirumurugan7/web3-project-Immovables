import React, { Component } from "react";
import Home from "./Home";
import "./main.css";

class Main extends Component {
  render() {
    return (
      <div id="content">
        <h1>Add Property</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const name = this.productName.value;
            const price = window.web3.utils.toWei(
              this.productPrice.value.toString(),
              "Ether"
            );
            const sqft = this.productSqft.value;
            console.log(name, price, sqft);
            this.props.createProduct(name, price, sqft);
            console.log("create product called");
          }}
        >
          <div className="form-group mr-sm-2">
            <input
              id="productName"
              type="text"
              ref={(input) => {
                this.productName = input;
              }}
              className="form-control"
              placeholder="Property Description"
              required
            />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productPrice"
              type="text"
              ref={(input) => {
                this.productPrice = input;
              }}
              className="form-control"
              placeholder="Property Price"
              required
            />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productSqft"
              type="text"
              ref={(input) => {
                this.productSqft = input;
              }}
              className="form-control"
              placeholder="Property Sqft"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Property
            {console.log(this.productName, this.productPrice, this.productSqft)}
          </button>
        </form>
        <p>&nbsp;</p>
        <h2>Buy Property</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Sqft</th>
              <th scope="col">Owner</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="productList">
            {this.props.products.map((product, key) => {
              return (
                <tr key={key}>
                  <th scope="row">{product.id.toString()}</th>
                  <td>{product.name}</td>
                  <td>
                    {window.web3.utils.fromWei(
                      product.price.toString(),
                      "Ether"
                    )}{" "}
                    Eth
                  </td>
                  {console.log(product.sqft.toString())}
                  <td>{parseInt(product.sqft, 4)}</td>
                  <td>{product.owner}</td>
                  <td>
                    {!product.purchased ? (
                      <button
                        className="buy-btn"
                        name={product.id}
                        value={product.price}
                        sqft={product.sqft}
                        onClick={(event) => {
                          this.props.purchaseProduct(
                            event.target.name,
                            event.target.value,
                            event.target.value
                          );
                        }}
                      >
                        Buy
                      </button>
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
