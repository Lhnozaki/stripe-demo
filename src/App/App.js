import React from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import { STRIPE_PK } from "../Guard";
import Header from "../Components/Header";
import Cart from "../Components/Cart";
import styles from "./App.module.scss";

function App() {
  return (
    <StripeProvider apiKey={STRIPE_PK}>
      <Elements>
        <div className={styles.App}>
          <Header />
          <Cart />
        </div>
      </Elements>
    </StripeProvider>
  );
}

export default App;
