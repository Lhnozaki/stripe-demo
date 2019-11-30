import React from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import { STRIPE_PK } from "../Guard";
import Header from "../Components/Header";
import Cart from "../Components/Cart";

function App() {
  return (
    <StripeProvider apiKey={STRIPE_PK}>
      <Elements>
        <>
          <Header />
          <Cart />
        </>
      </Elements>
    </StripeProvider>
  );
}

export default App;
