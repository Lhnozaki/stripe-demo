import React, { Component } from "react";
import styles from "./Cart.module.scss";
import Form from "../Form";
import StripeCheckout from "react-stripe-checkout";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.cart}>
            <h1>A Blurange Pineapple</h1>
            <button onClick={this.handleClick}>Buy</button>
          </div>
          <div className={styles.img}>
            <img
              src="https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="#"
            />
          </div>
        </div>
        {/* <StripeCheckout /> */}
        <Form show={this.state.showModal} close={this.handleClick} />
      </>
    );
  }
}

export default Cart;
