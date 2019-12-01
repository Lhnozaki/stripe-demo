import React from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import Header from "../Components/Header";
import Cart from "../Components/Cart";

function App() {
  return (
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PK}>
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
