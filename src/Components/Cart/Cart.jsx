import React, { Component } from "react";
import styles from "./Cart.module.scss";

class Cart extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.cart}>
          <h1>A Blurange Pineapple</h1>
          <button>Buy</button>
        </div>
        <div className={styles.img}>
          <img
            src="https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="#"
          />
        </div>
      </div>
    );
  }
}

export default Cart;
